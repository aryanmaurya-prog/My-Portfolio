"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
  Phone,
  Send,
} from "lucide-react";

const contactLinks = [
  {
    label: "Email",
    value: "mauryaaryan147@gmail.com",
    href: "mailto:mauryaaryan147@gmail.com",
    icon: Mail,
  },
  {
    label: "Phone",
    value: "+91 81039 76073",
    href: "tel:+918103976073",
    icon: Phone,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/aryan-maurya257",
    href: "https://www.linkedin.com/in/aryan-maurya257",
    icon: Linkedin,
  },
  {
    label: "GitHub",
    value: "github.com/aryanmaurya-prog",
    href: "https://github.com/aryanmaurya-prog",
    icon: Github,
  },
];

export default function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<{ type: 'success' | 'error' | null, message: string }>({ type: null, message: '' });
  const [errors, setErrors] = useState<{name?: string, email?: string, subject?: string, message?: string}>({});

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: null, message: '' });

    const formData = new FormData(e.currentTarget);
    const name = (formData.get('name') as string || '').trim();
    const email = (formData.get('email') as string || '').trim();
    const subject = (formData.get('subject') as string || '').trim();
    const message = (formData.get('message') as string || '').trim();

    const validationErrors: any = {};
    
    if (!name) validationErrors.name = "Please enter your name.";
    else if (name.length < 2) validationErrors.name = "Name must be at least 2 characters.";
    else if (name.length > 50) validationErrors.name = "Name must be at most 50 characters.";

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) validationErrors.email = "Please enter a valid email address.";

    if (!subject || subject.length < 5) validationErrors.subject = "Subject must be at least 5 characters.";
    else if (subject.length > 100) validationErrors.subject = "Subject must be at most 100 characters.";

    if (!message || message.length < 20) validationErrors.message = "Message must be at least 20 characters.";
    else if (message.length > 2000) validationErrors.message = "Message must be at most 2000 characters.";

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setIsSubmitting(false);
      return;
    }
    
    setErrors({});
    const data = { name, email, subject, message };

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        setStatus({ type: 'success', message: result.message || 'Message sent successfully!' });
        (e.target as HTMLFormElement).reset();
      } else {
        setStatus({ type: 'error', message: result.error || 'Failed to send message.' });
      }
    } catch (error) {
      setStatus({ type: 'error', message: 'An unexpected error occurred. Please try again later.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative w-full overflow-hidden border-t border-slate-800 bg-slate-950 py-28 text-white"
    >
      {/* Background atmosphere */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/[0.035] blur-[125px]" />

        <div className="absolute left-[8%] top-[18%] h-40 w-40 rounded-full bg-indigo-500/[0.025] blur-[90px]" />

        <div className="absolute bottom-[12%] right-[8%] h-48 w-48 rounded-full bg-blue-500/[0.025] blur-[100px]" />
      </div>

      <div className="relative mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/[0.07] px-4 py-2 font-mono text-[10px] font-medium uppercase tracking-[0.18em] text-blue-400">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-400 shadow-[0_0_8px_rgba(96,165,250,0.7)]" />
            Get In Touch
          </div>

          <h2 className="text-4xl font-bold tracking-[-0.045em] text-slate-100 sm:text-5xl md:text-6xl">
            Let&apos;s Connect.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-[15px] leading-8 tracking-[-0.005em] text-slate-400 sm:text-base sm:text-lg">
            Have an opportunity, project idea, or just want to connect?
            Feel free to reach out. I&apos;d be happy to hear from you.
          </p>
        </motion.div>

        {/* Contact content */}
        <div className="mx-auto mt-16 grid max-w-5xl gap-6 lg:grid-cols-[0.85fr_1.15fr]">
          {/* Contact information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{
              duration: 0.55,
              ease: [0.22, 1, 0.36, 1],
            }}
            whileHover={{ y: -3 }}
            className="group relative overflow-hidden rounded-[1.6rem] border border-slate-800 bg-slate-900/30 p-6 transition-all duration-500 hover:border-slate-700 hover:bg-slate-900/55 hover:shadow-[0_18px_50px_rgba(2,8,23,0.28)] sm:p-8"
          >
            {/* Top accent */}
            <div className="absolute left-0 top-0 h-px w-0 bg-gradient-to-r from-transparent via-blue-400 to-transparent transition-all duration-700 group-hover:w-full" />

            {/* Glow */}
            <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-blue-500/[0.05] blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

            <div className="relative">
              <p className="font-mono text-[10px] font-medium uppercase tracking-[0.18em] text-slate-500">
                Contact Information
              </p>

              <h3 className="mt-3 text-2xl font-semibold tracking-[-0.03em] text-slate-100">
                Let&apos;s start a conversation.
              </h3>

              <p className="mt-4 text-[13px] leading-7 text-slate-400">
                I&apos;m open to opportunities, collaborations, and
                conversations around data analytics, software development,
                and practical technology solutions.
              </p>
            </div>

            {/* Contact links */}
            <div className="relative mt-8 space-y-3">
              {contactLinks.map((link, index) => {
                const Icon = link.icon;

                return (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    target={
                      link.href.startsWith("http") ? "_blank" : undefined
                    }
                    rel={
                      link.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    initial={{ opacity: 0, x: -8 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.35,
                      delay: index * 0.05,
                    }}
                    className="group/link flex items-center gap-4 rounded-2xl border border-transparent p-3 transition-all duration-300 hover:border-slate-800 hover:bg-slate-950/50"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-slate-800 bg-slate-950 text-slate-400 transition-all duration-300 group-hover/link:border-blue-500/20 group-hover/link:bg-blue-500/[0.07] group-hover/link:text-blue-400">
                      <Icon className="h-4 w-4 transition-transform duration-300 group-hover/link:scale-105" />
                    </div>

                    <div className="min-w-0 flex-1">
                      <p className="font-mono text-[9px] font-medium uppercase tracking-[0.16em] text-slate-600">
                        {link.label}
                      </p>

                      <p className="mt-1 truncate text-[13px] font-medium tracking-[-0.01em] text-slate-300 transition-colors duration-300 group-hover/link:text-white">
                        {link.value}
                      </p>
                    </div>

                    <ArrowUpRight className="h-4 w-4 shrink-0 text-slate-700 transition-all duration-300 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5 group-hover/link:text-blue-400" />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{
              duration: 0.55,
              delay: 0.05,
              ease: [0.22, 1, 0.36, 1],
            }}
            whileHover={{ y: -3 }}
            className="group relative overflow-hidden rounded-[1.6rem] border border-slate-800 bg-slate-900/30 p-6 transition-all duration-500 hover:border-slate-700 hover:bg-slate-900/55 hover:shadow-[0_18px_50px_rgba(2,8,23,0.28)] sm:p-8"
          >
            {/* Top accent */}
            <div className="absolute left-0 top-0 h-px w-0 bg-gradient-to-r from-transparent via-blue-400 to-transparent transition-all duration-700 group-hover:w-full" />

            {/* Glow */}
            <div className="pointer-events-none absolute -left-20 -top-20 h-48 w-48 rounded-full bg-indigo-500/[0.04] blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

            <div className="relative">
              <p className="font-mono text-[10px] font-medium uppercase tracking-[0.18em] text-slate-500">
                Send a Message
              </p>

              <h3 className="mt-3 text-2xl font-semibold tracking-[-0.03em] text-slate-100">
                Tell me what&apos;s on your mind.
              </h3>
            </div>

            <form onSubmit={handleSubmit} className="relative mt-8 space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-xs font-medium tracking-[-0.005em] text-slate-300"
                  >
                    Name
                  </label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Your name"
                    required
                    onChange={() => { if (errors.name) setErrors(prev => ({ ...prev, name: undefined })) }}
                    className={`h-12 w-full rounded-xl border ${errors.name ? 'border-red-500/50 focus:border-red-500/50 focus:ring-red-500/10' : 'border-slate-800 hover:border-slate-700 focus:border-blue-500/50 focus:ring-blue-500/10'} bg-slate-950/65 px-4 text-sm text-white outline-none transition-all duration-300 placeholder:text-slate-600 focus:bg-slate-950/90 focus:ring-2`}
                  />
                  {errors.name && <p className="mt-2 text-xs text-red-400">{errors.name}</p>}
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-xs font-medium tracking-[-0.005em] text-slate-300"
                  >
                    Email
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    required
                    onChange={() => { if (errors.email) setErrors(prev => ({ ...prev, email: undefined })) }}
                    className={`h-12 w-full rounded-xl border ${errors.email ? 'border-red-500/50 focus:border-red-500/50 focus:ring-red-500/10' : 'border-slate-800 hover:border-slate-700 focus:border-blue-500/50 focus:ring-blue-500/10'} bg-slate-950/65 px-4 text-sm text-white outline-none transition-all duration-300 placeholder:text-slate-600 focus:bg-slate-950/90 focus:ring-2`}
                  />
                  {errors.email && <p className="mt-2 text-xs text-red-400">{errors.email}</p>}
                </div>
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="mb-2 block text-xs font-medium tracking-[-0.005em] text-slate-300"
                >
                  Subject
                </label>

                <input
                  id="subject"
                  name="subject"
                  type="text"
                  placeholder="What would you like to discuss?"
                  required
                  onChange={() => { if (errors.subject) setErrors(prev => ({ ...prev, subject: undefined })) }}
                  className={`h-12 w-full rounded-xl border ${errors.subject ? 'border-red-500/50 focus:border-red-500/50 focus:ring-red-500/10' : 'border-slate-800 hover:border-slate-700 focus:border-blue-500/50 focus:ring-blue-500/10'} bg-slate-950/65 px-4 text-sm text-white outline-none transition-all duration-300 placeholder:text-slate-600 focus:bg-slate-950/90 focus:ring-2`}
                />
                {errors.subject && <p className="mt-2 text-xs text-red-400">{errors.subject}</p>}
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-xs font-medium tracking-[-0.005em] text-slate-300"
                >
                  Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  placeholder="Tell me a little about your message..."
                  required
                  onChange={() => { if (errors.message) setErrors(prev => ({ ...prev, message: undefined })) }}
                  className={`w-full resize-none rounded-xl border ${errors.message ? 'border-red-500/50 focus:border-red-500/50 focus:ring-red-500/10' : 'border-slate-800 hover:border-slate-700 focus:border-blue-500/50 focus:ring-blue-500/10'} bg-slate-950/65 px-4 py-3 text-sm leading-6 text-white outline-none transition-all duration-300 placeholder:text-slate-600 focus:bg-slate-950/90 focus:ring-2`}
                />
                {errors.message && <p className="mt-2 text-xs text-red-400">{errors.message}</p>}
              </div>

              {status.type === 'success' && (
                <div className="p-3 text-sm text-green-400 bg-green-400/10 rounded-xl border border-green-400/20">
                  {status.message}
                </div>
              )}
              {status.type === 'error' && (
                <div className="p-3 text-sm text-red-400 bg-red-400/10 rounded-xl border border-red-400/20">
                  {status.message}
                </div>
              )}

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={isSubmitting ? {} : { y: -2 }}
                whileTap={isSubmitting ? {} : { scale: 0.985 }}
                className="group inline-flex h-12 w-full items-center justify-center rounded-xl bg-white px-6 text-sm font-semibold tracking-[-0.01em] text-slate-950 shadow-lg shadow-white/[0.03] transition-all duration-300 hover:bg-slate-200 hover:shadow-white/[0.06] disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}

                {!isSubmitting && <Send className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />}
              </motion.button>

              <p className="text-center font-mono text-[9px] leading-5 tracking-[0.02em] text-slate-600">
                Your message is sent securely and directly to my inbox.
              </p>
            </form>
          </motion.div>
        </div>

        {/* Bottom line */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-20 flex items-center justify-center gap-3"
        >
          <span className="h-px w-12 bg-slate-800" />
          <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-slate-700">
            Open to meaningful opportunities
          </span>
          <span className="h-px w-12 bg-slate-800" />
        </motion.div>
      </div>
    </section>
  );
}