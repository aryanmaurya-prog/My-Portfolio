"use client";

import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowUpRight,
  Camera,
  CheckCircle2,
  Github,
  Monitor,
  Table2,
  Wrench,
} from "lucide-react";
import Link from "next/link";

const technologies = [
  "Python",
  "OpenCV",
  "Tkinter",
  "Pandas",
];

const workflow = [
  {
    number: "01",
    title: "Problem Statement",
    icon: Wrench,
    text: "Manual attendance recording can be repetitive and time-consuming. The project focuses on building an automated attendance workflow using face recognition.",
  },
  {
    number: "02",
    title: "Objective",
    icon: CheckCircle2,
    text: "The objective was to develop a Python-based attendance management application that supports automated attendance recording through face recognition.",
  },
  {
    number: "03",
    title: "Face Recognition",
    icon: Camera,
    text: "The application uses face recognition with OpenCV as part of the attendance workflow.",
  },
  {
    number: "04",
    title: "Desktop Interface",
    icon: Monitor,
    text: "Tkinter is used to provide a desktop interface for interacting with the attendance application.",
  },
  {
    number: "05",
    title: "Attendance Data",
    icon: Table2,
    text: "Pandas is used for attendance data handling and working with the recorded attendance information.",
  },
  {
    number: "06",
    title: "Application Value",
    icon: CheckCircle2,
    text: "The project demonstrates how computer vision and desktop application development can be combined to support an automated attendance workflow.",
  },
];

export default function FaceRecognitionAttendancePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      {/* Background */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute left-[8%] top-[8%] h-96 w-96 rounded-full bg-blue-600/[0.035] blur-[130px]" />
        <div className="absolute bottom-[5%] right-[5%] h-96 w-96 rounded-full bg-indigo-500/[0.025] blur-[140px]" />
      </div>

      <div className="relative mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Navigation */}
        <motion.nav
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="flex items-center justify-between py-8"
        >
          <Link
            href="/#projects"
            className="group inline-flex items-center gap-2 text-sm font-medium text-slate-400 transition-colors hover:text-white"
          >
            <ArrowLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1" />
            Back to Projects
          </Link>

          <span className="font-mono text-[10px] tracking-[0.2em] text-slate-700 sm:text-xs">
            CASE STUDY / 02
          </span>
        </motion.nav>

        {/* Hero */}
        <motion.header
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.65,
            ease: "easeOut",
          }}
          className="pt-16 sm:pt-24"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/[0.08] px-4 py-2 text-xs font-medium uppercase tracking-[0.16em] text-blue-400">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
            Python Application
          </div>

          <h1 className="mt-7 max-w-4xl text-4xl font-bold tracking-[-0.045em] text-slate-100 sm:text-5xl lg:text-6xl">
            Face Recognition Based Attendance System
          </h1>

          <p className="mt-7 max-w-3xl text-base leading-8 text-slate-400 sm:text-lg">
            A Python-based attendance management application using face
            recognition and a desktop interface to support automated
            attendance recording and attendance data handling.
          </p>

          {/* Technologies */}
          <div className="mt-8 flex flex-wrap gap-2">
            {technologies.map((technology) => (
              <span
                key={technology}
                className="rounded-lg border border-slate-800 bg-slate-900/60 px-3 py-1.5 text-xs font-medium text-slate-400"
              >
                {technology}
              </span>
            ))}
          </div>

          {/* Actions */}
          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href="https://github.com/aryanmaurya-prog/Face-Recognition-Based-Attendance-System"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex h-11 items-center gap-2 rounded-xl bg-white px-5 text-sm font-semibold text-slate-950 transition-all duration-300 hover:-translate-y-0.5 hover:bg-slate-200"
            >
              <Github className="h-4 w-4" />
              View on GitHub
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>

            <Link
              href="/#projects"
              className="inline-flex h-11 items-center gap-2 rounded-xl border border-slate-800 bg-slate-900/50 px-5 text-sm font-medium text-slate-400 transition-all duration-300 hover:-translate-y-0.5 hover:border-slate-700 hover:text-white"
            >
              <ArrowLeft className="h-4 w-4" />
              All Projects
            </Link>
          </div>
        </motion.header>

        <div className="my-20 h-px bg-slate-800" />

        {/* Overview */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.5 }}
          className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr]"
        >
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.16em] text-blue-400">
              Overview
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-100 sm:text-4xl">
              Project Overview
            </h2>
          </div>

          <div>
            <p className="text-base leading-8 text-slate-400">
              This project focuses on automating an attendance workflow using
              face recognition. The application combines computer vision,
              desktop interface development, and attendance data handling in a
              single Python-based solution.
            </p>

            <p className="mt-5 text-base leading-8 text-slate-400">
              The project demonstrates practical use of OpenCV, Tkinter, and
              Pandas within a desktop application.
            </p>
          </div>
        </motion.section>

        {/* Workflow */}
        <section className="mt-24">
          <div className="mb-10">
            <p className="text-xs font-medium uppercase tracking-[0.16em] text-blue-400">
              Methodology
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-100 sm:text-4xl">
              Project Workflow
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {workflow.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.article
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.12 }}
                  transition={{
                    duration: 0.45,
                    delay: index * 0.05,
                  }}
                  className="group relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/30 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-slate-700 hover:bg-slate-900/60 sm:p-8"
                >
                  <div className="absolute left-0 top-0 h-px w-0 bg-blue-500 transition-all duration-500 group-hover:w-full" />

                  <div className="flex items-start justify-between gap-4">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-800 bg-slate-950 text-slate-400 transition-all duration-300 group-hover:border-blue-500/20 group-hover:bg-blue-500/[0.08] group-hover:text-blue-400">
                      <Icon className="h-5 w-5" />
                    </div>

                    <span className="font-mono text-[10px] tracking-[0.18em] text-slate-700">
                      {item.number}
                    </span>
                  </div>

                  <h3 className="mt-7 text-xl font-semibold tracking-tight text-slate-100">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-slate-400">
                    {item.text}
                  </p>
                </motion.article>
              );
            })}
          </div>
        </section>

        {/* Project Preview */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.5 }}
          className="mt-24"
        >
          <div className="mb-10">
            <p className="text-xs font-medium uppercase tracking-[0.16em] text-blue-400">
              Visualization
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-100 sm:text-4xl">
              Project Preview
            </h2>
          </div>

          <div className="relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/30">
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-500/60 to-transparent" />

            <div className="flex min-h-[360px] flex-col items-center justify-center p-8 text-center sm:min-h-[420px]">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-slate-800 bg-slate-950 text-blue-400">
                <Camera className="h-7 w-7" />
              </div>

              <h3 className="mt-6 text-xl font-semibold text-slate-100">
                Application Preview
              </h3>

              <p className="mt-3 max-w-xl text-sm leading-7 text-slate-500">
                A preview image of the desktop attendance application will be
                added here.
              </p>
            </div>
          </div>
        </motion.section>

        {/* Technologies */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.5 }}
          className="mt-24"
        >
          <div className="mb-10">
            <p className="text-xs font-medium uppercase tracking-[0.16em] text-blue-400">
              Technology Stack
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-100 sm:text-4xl">
              Technologies Used
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {technologies.map((technology) => (
              <div
                key={technology}
                className="flex items-center gap-3 rounded-2xl border border-slate-800 bg-slate-900/30 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-slate-700 hover:bg-slate-900/60"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-800 bg-slate-950 text-blue-400">
                  <Camera className="h-4 w-4" />
                </div>

                <span className="text-sm font-medium text-slate-300">
                  {technology}
                </span>
              </div>
            ))}
          </div>
        </motion.section>

        {/* GitHub CTA */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="mt-24 mb-16"
        >
          <div className="relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/40 p-8 sm:p-12">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_50%,rgba(59,130,246,0.08),transparent_55%)]" />

            <div className="relative flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
              <div>
                <p className="font-mono text-xs font-medium uppercase tracking-[0.16em] text-blue-400">
                  Source Code
                </p>

                <h2 className="mt-3 text-2xl font-semibold text-slate-100 sm:text-3xl">
                  Explore the project on GitHub
                </h2>

                <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-500">
                  View the repository and explore the project implementation
                  and files.
                </p>
              </div>

              <a
                href="https://github.com/aryanmaurya-prog/Face-Recognition-Based-Attendance-System"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex shrink-0 items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition-all duration-300 hover:-translate-y-0.5 hover:bg-slate-200"
              >
                <Github className="h-4 w-4" />
                GitHub Repository
                <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            </div>
          </div>
        </motion.section>

        {/* Bottom */}
        <div className="border-t border-slate-800 py-8">
          <Link
            href="/#projects"
            className="group inline-flex items-center gap-2 text-sm text-slate-500 transition-colors hover:text-white"
          >
            <ArrowLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1" />
            Back to all projects
          </Link>
        </div>
      </div>
    </main>
  );
}