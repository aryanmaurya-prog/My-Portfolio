"use client";

import { motion } from "framer-motion";
import {
  ArrowUp,
  Github,
  Linkedin,
  Mail,
} from "lucide-react";

const footerLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative w-full overflow-hidden border-t border-slate-800 bg-slate-950 text-white">
      {/* Background atmosphere */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[12%] top-0 h-56 w-56 rounded-full bg-blue-600/[0.025] blur-[110px]" />
        <div className="absolute bottom-0 right-[8%] h-64 w-64 rounded-full bg-indigo-500/[0.02] blur-[120px]" />
      </div>

      <div className="relative mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Main Footer */}
        <div className="grid gap-10 py-14 md:grid-cols-[1.3fr_0.7fr_0.7fr] md:py-16">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
          >
            <a
              href="#about"
              className="group inline-flex items-center gap-2.5"
            >
              <motion.span
                whileHover={{ scale: 1.06, rotate: -2 }}
                whileTap={{ scale: 0.96 }}
                transition={{ duration: 0.2 }}
                className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600 text-[10px] font-bold tracking-wide text-white shadow-lg shadow-blue-950/30 transition-all duration-300 group-hover:bg-blue-500"
              >
                AM
              </motion.span>

              <span className="text-base font-semibold tracking-[-0.02em] text-slate-100 transition-colors duration-300 group-hover:text-white">
                Aryan Maurya
              </span>
            </a>

            <p className="mt-5 max-w-md text-[13px] leading-7 text-slate-500">
              Computer Science undergraduate focused on data analytics,
              software development, databases, and practical technology
              solutions.
            </p>

            {/* Socials */}
            <div className="mt-6 flex items-center gap-2.5">
              <motion.a
                href="https://github.com/aryanmaurya-prog"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                whileHover={{ y: -2, scale: 1.03 }}
                whileTap={{ scale: 0.96 }}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-800 bg-slate-900/50 text-slate-500 transition-all duration-300 hover:border-slate-700 hover:bg-slate-900 hover:text-white"
              >
                <Github className="h-4 w-4" />
              </motion.a>

              <motion.a
                href="https://www.linkedin.com/in/aryan-maurya257"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                whileHover={{ y: -2, scale: 1.03 }}
                whileTap={{ scale: 0.96 }}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-800 bg-slate-900/50 text-slate-500 transition-all duration-300 hover:border-slate-700 hover:bg-slate-900 hover:text-white"
              >
                <Linkedin className="h-4 w-4" />
              </motion.a>

              <motion.a
                href="mailto:mauryaaryan147@gmail.com"
                aria-label="Email"
                whileHover={{ y: -2, scale: 1.03 }}
                whileTap={{ scale: 0.96 }}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-800 bg-slate-900/50 text-slate-500 transition-all duration-300 hover:border-slate-700 hover:bg-slate-900 hover:text-white"
              >
                <Mail className="h-4 w-4" />
              </motion.a>
            </div>
          </motion.div>

          {/* Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.05 }}
          >
            <p className="font-mono text-[10px] font-medium uppercase tracking-[0.18em] text-slate-600">
              Navigation
            </p>

            <div className="mt-5 flex flex-col gap-3">
              {footerLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="w-fit text-sm text-slate-500 transition-all duration-300 hover:translate-x-1 hover:text-white"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Focus */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.1 }}
          >
            <p className="font-mono text-[10px] font-medium uppercase tracking-[0.18em] text-slate-600">
              Focus
            </p>

            <div className="mt-5 space-y-3 text-sm text-slate-500">
              <p className="transition-colors duration-300 hover:text-slate-300">
                Data Analytics
              </p>

              <p className="transition-colors duration-300 hover:text-slate-300">
                Software Development
              </p>

              <p className="transition-colors duration-300 hover:text-slate-300">
                SQL &amp; Databases
              </p>

              <p className="transition-colors duration-300 hover:text-slate-300">
                AI &amp; Machine Learning
              </p>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col gap-5 border-t border-slate-800 py-7 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-mono text-[9px] uppercase tracking-[0.12em] text-slate-700">
            © {currentYear} Aryan Maurya. All rights reserved.
          </p>

          <motion.a
            href="#about"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.96 }}
            className="group inline-flex w-fit items-center gap-2 text-xs font-medium text-slate-600 transition-colors duration-300 hover:text-white"
          >
            Back to top

            <span className="flex h-7 w-7 items-center justify-center rounded-full border border-slate-800 transition-all duration-300 group-hover:border-slate-700 group-hover:bg-slate-900">
              <ArrowUp className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5" />
            </span>
          </motion.a>
        </div>
      </div>
    </footer>
  );
}