"use client";

import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowUpRight,
  Download,
  Github,
  Linkedin,
} from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

const roles = [
  "Data Analytics",
  "Software Development",
  "Data-driven Solutions",
];

export default function HeroSection() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setRoleIndex((current) => (current + 1) % roles.length);
    }, 2600);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <section
      id="about"
      className="relative flex min-h-screen w-full items-center overflow-hidden bg-slate-950 px-4 pt-24 text-white sm:px-6 lg:px-8"
    >
      {/* Background atmosphere */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-[38%] h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/[0.08] blur-[120px]" />

        <div className="absolute left-[15%] top-[25%] h-40 w-40 rounded-full bg-indigo-500/[0.05] blur-[90px]" />

        <div className="absolute bottom-[10%] right-[12%] h-52 w-52 rounded-full bg-blue-500/[0.04] blur-[100px]" />
      </div>

      {/* Subtle grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(148,163,184,0.7) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,0.7) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />

      <div className="relative mx-auto w-full max-w-6xl">
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1.15fr)_minmax(320px,0.7fr)] lg:gap-14">
          {/* Existing Hero Content */}
          <div className="mx-auto w-full max-w-5xl lg:mx-0">
            {/* Small introduction */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
              }}
              className="mb-8 flex items-center justify-center gap-3 lg:justify-start"
            >
              <span className="h-px w-8 bg-blue-500/60 sm:w-12" />

              <p className="font-mono text-[10px] font-medium uppercase tracking-[0.2em] text-slate-500 sm:text-xs">
                B.Tech CSE (Data Science) · NIET, Greater Noida
              </p>

              <span className="h-px w-8 bg-blue-500/60 sm:w-12" />
            </motion.div>

            {/* Main heading */}
            <div className="text-center lg:text-left">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.65,
                  delay: 0.08,
                  ease: "easeOut",
                }}
                className="text-lg font-medium tracking-[-0.015em] text-slate-400 sm:text-xl md:text-2xl"
              >
                Hi, I&apos;m
              </motion.p>

              <motion.h1
                initial={{
                  opacity: 0,
                  y: 28,
                  filter: "blur(8px)",
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  filter: "blur(0px)",
                }}
                transition={{
                  duration: 0.8,
                  delay: 0.15,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="mt-2 text-6xl font-bold tracking-[-0.055em] text-slate-100 transition-all duration-500 sm:text-7xl md:text-8xl lg:text-[5.6rem] xl:text-[6.8rem]"
              >
                Aryan{" "}
                <span className="text-gradient transition-opacity duration-500 hover:opacity-90">
                  Maurya.
                </span>
              </motion.h1>

              {/* Animated role */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.65,
                  delay: 0.28,
                  ease: "easeOut",
                }}
                className="mt-8 min-h-[52px] sm:mt-10 sm:min-h-[64px]"
              >
                <AnimatePresence mode="wait">
                  <motion.h2
                    key={roles[roleIndex]}
                    initial={{
                      opacity: 0,
                      y: 18,
                      filter: "blur(5px)",
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                      filter: "blur(0px)",
                    }}
                    exit={{
                      opacity: 0,
                      y: -18,
                      filter: "blur(5px)",
                    }}
                    transition={{
                      duration: 0.5,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="text-2xl font-semibold tracking-[-0.035em] text-slate-100 sm:text-4xl md:text-5xl"
                  >
                    {roles[roleIndex]}
                  </motion.h2>
                </AnimatePresence>
              </motion.div>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.65,
                  delay: 0.38,
                  ease: "easeOut",
                }}
                className="mx-auto mt-7 max-w-2xl text-[15px] leading-8 tracking-[-0.005em] text-slate-400 sm:text-base md:text-lg lg:mx-0"
              >
                Computer Science undergraduate focused on data analytics,
                programming, databases, and building practical software
                solutions with Python, SQL, Java, and modern web technologies.
              </motion.p>

              {/* CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.65,
                  delay: 0.48,
                  ease: "easeOut",
                }}
                className="mt-10 flex flex-col items-center lg:items-start"
              >
                {/* Primary Actions */}
                <div className="flex w-full flex-col items-center justify-center gap-3 sm:w-auto sm:flex-row">
                  {/* View My Projects */}
                  <motion.a
                    href="#projects"
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className="group inline-flex h-12 w-full items-center justify-center rounded-full bg-white px-7 text-sm font-semibold tracking-[-0.01em] text-slate-950 shadow-xl shadow-white/[0.035] transition-all duration-300 hover:bg-slate-200 hover:shadow-white/[0.06] sm:w-auto"
                  >
                    View My Projects

                    <ArrowUpRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </motion.a>

                  {/* Download Resume */}
                  <motion.a
                    href="/Resume.pdf"
                    download="Resume.pdf"
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className="group inline-flex h-12 w-full items-center justify-center rounded-full bg-white px-7 text-sm font-semibold tracking-[-0.01em] text-slate-950 shadow-xl shadow-white/[0.035] transition-all duration-300 hover:bg-slate-200 hover:shadow-white/[0.06] sm:w-auto"
                  >
                    <Download className="mr-2 h-4 w-4 transition-transform duration-300 group-hover:translate-y-0.5" />

                    Download Resume
                  </motion.a>
                </div>

                {/* Get In Touch */}
                <motion.a
                  href="#contact"
                  whileHover={{ x: 3 }}
                  whileTap={{ scale: 0.98 }}
                  className="group mt-7 inline-flex items-center text-sm font-medium tracking-[-0.01em] text-slate-300 transition-colors duration-300 hover:text-white"
                >
                  Get In Touch

                  <ArrowUpRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5" />
                </motion.a>
              </motion.div>

              {/* Social links */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.7,
                  delay: 0.65,
                }}
                className="mt-8 flex items-center justify-center gap-3 lg:justify-start"
              >
                {/* GitHub */}
                <motion.a
                  href="https://github.com/aryanmaurya-prog"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  whileHover={{
                    y: -3,
                    scale: 1.04,
                  }}
                  whileTap={{
                    scale: 0.96,
                  }}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-800 bg-slate-900/40 text-slate-500 transition-all duration-300 hover:border-slate-700 hover:bg-slate-900 hover:text-white hover:shadow-lg hover:shadow-black/20"
                >
                  <Github className="h-4 w-4" />
                </motion.a>

                {/* LinkedIn */}
                <motion.a
                  href="https://www.linkedin.com/in/aryanmaurya257"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  whileHover={{
                    y: -3,
                    scale: 1.04,
                  }}
                  whileTap={{
                    scale: 0.96,
                  }}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-800 bg-slate-900/40 text-slate-500 transition-all duration-300 hover:border-slate-700 hover:bg-slate-900 hover:text-white hover:shadow-lg hover:shadow-black/20"
                >
                  <Linkedin className="h-4 w-4" />
                </motion.a>
              </motion.div>
            </div>
          </div>

          {/* Profile Photo */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.25,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-[390px] rounded-[2rem] border border-slate-800 bg-slate-900/40 p-2 shadow-2xl shadow-black/20">
              <div className="pointer-events-none absolute -inset-2 -z-10 rounded-[2.2rem] bg-blue-500/[0.035] blur-2xl" />

              <div className="relative overflow-hidden rounded-[1.55rem] border border-slate-800/80 bg-slate-950">
                <Image
                  src="/images/profile-photo.jpeg"
                  alt="Aryan Maurya"
                  width={1152}
                  height={2048}
                  priority
                  unoptimized
                  className="block h-auto w-full object-contain"
                  sizes="(max-width: 1023px) 360px, 390px"
                />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.a
          href="#skills"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.8,
            delay: 1,
          }}
          className="mx-auto mt-16 flex w-fit flex-col items-center gap-3 text-slate-600 transition-colors duration-300 hover:text-slate-400 lg:mt-12"
          aria-label="Scroll to skills"
        >
          <span className="font-mono text-[9px] font-medium uppercase tracking-[0.3em]">
            Scroll to explore
          </span>

          <span className="flex h-9 w-6 items-start justify-center rounded-full border border-slate-800 p-1.5 transition-colors duration-300 hover:border-slate-700">
            <motion.span
              animate={{
                y: [0, 9, 0],
              }}
              transition={{
                duration: 1.7,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="h-1.5 w-1.5 rounded-full bg-slate-500"
            />
          </span>
        </motion.a>
      </div>
    </section>
  );
}
