import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ReactNode } from "react";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Aryan Maurya | Data Analyst Portfolio",
  description:
    "Production-quality Data Analyst & AI/ML Portfolio for Aryan Maurya",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} min-h-screen antialiased`}
      >
        {children}
      </body>
    </html>
  );
}