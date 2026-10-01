import { NextResponse } from "next/server";
import { z } from "zod";
import prisma from "@/lib/prisma";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const contactSchema = z.object({
  name: z.string().trim()
    .min(1, "Please enter your name.")
    .min(2, "Name must be at least 2 characters.")
    .max(50, "Name must be at most 50 characters."),
  email: z.string().trim()
    .min(1, "Please enter a valid email address.")
    .email("Please enter a valid email address."),
  subject: z.string().trim()
    .min(1, "Subject must be at least 5 characters.")
    .min(5, "Subject must be at least 5 characters.")
    .max(100, "Subject must be at most 100 characters."),
  message: z.string().trim()
    .min(1, "Message must be at least 20 characters.")
    .min(20, "Message must be at least 20 characters.")
    .max(2000, "Message must be at most 2000 characters."),
});

// Simple rate limiter (in-memory) - clears on server restart but good enough for simple protection
const rateLimit = new Map<string, number>();
const RATE_LIMIT_WINDOW = 60 * 1000; // 1 minute
const MAX_REQUESTS = 3;

export async function POST(req: Request) {
  try {
    const ip = req.headers.get("x-forwarded-for") || "unknown";
    const now = Date.now();
    const userLimit = rateLimit.get(ip) || 0;
    
    if (userLimit > MAX_REQUESTS) {
      return NextResponse.json({ error: "Too many requests, please try again later." }, { status: 429 });
    }
    rateLimit.set(ip, userLimit + 1);
    
    // Cleanup rate limit after window
    setTimeout(() => {
      rateLimit.set(ip, Math.max(0, (rateLimit.get(ip) || 1) - 1));
    }, RATE_LIMIT_WINDOW);

    const body = await req.json();
    const validatedData = contactSchema.parse(body);

    // Save to database
    let submission;
    try {
      submission = await prisma.contactSubmission.create({
        data: {
          name: validatedData.name,
          email: validatedData.email,
          subject: validatedData.subject,
          message: validatedData.message,
        },
      });
    } catch (dbError) {
      console.error("Database save failed:", dbError);
      return NextResponse.json({ error: "Failed to save submission." }, { status: 500 });
    }

    // Send email
    try {
      if (process.env.RESEND_API_KEY && process.env.RESEND_API_KEY !== "re_placeholder") {
        await resend.emails.send({
          from: "Portfolio Contact <onboarding@resend.dev>", // default testing domain for resend
          to: process.env.CONTACT_EMAIL || "your-email@example.com",
          subject: `New Portfolio Contact: ${validatedData.subject}`,
          replyTo: validatedData.email,
          text: `
New Portfolio Contact

Name: ${validatedData.name}
Email: ${validatedData.email}
Subject: ${validatedData.subject}
Message: ${validatedData.message}
Submitted: ${submission.createdAt.toISOString()}
          `.trim(),
        });
      } else {
        console.warn("RESEND_API_KEY not configured. Email skipped.");
      }
    } catch (emailError) {
      console.error("Email notification failed:", emailError);
      // We don't return 500 here because the database save was successful
      return NextResponse.json({ 
        success: true, 
        message: "Message saved, but email notification failed." 
      }, { status: 200 });
    }

    return NextResponse.json({ success: true, message: "Message sent successfully!" }, { status: 200 });
  } catch (error) {
    console.error("API Error:", error);
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: "Validation failed", details: error.errors }, { status: 400 });
    }
    return NextResponse.json({ error: "An unexpected error occurred." }, { status: 500 });
  }
}
