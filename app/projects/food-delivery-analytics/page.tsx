"use client";

import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowUpRight,
  BarChart3,
  CheckCircle2,
  Database,
  Github,
  Layers3,
  LineChart,
  RefreshCw,
  Target,
  Wrench,
} from "lucide-react";
import Link from "next/link";

const technologies = [
  "Power BI",
  "Power Query",
  "DAX",
  "Data Modeling",
];

const projectSections = [
  {
    number: "01",
    title: "Problem Statement",
    icon: Wrench,
    text: "Food delivery data can contain information across operations, customers, restaurants, and business performance. The challenge is to clean and transform this data into a structured analytical solution that can support meaningful business analysis.",
  },
  {
    number: "02",
    title: "Objective",
    icon: Target,
    text: "The objective of this project was to build an end-to-end Power BI analytics solution for analyzing food delivery operations, customer behavior, restaurant performance, and business growth.",
  },
  {
    number: "03",
    title: "Data Cleaning & Transformation",
    icon: RefreshCw,
    text: "Power Query was used for data cleaning and transformation before preparing the data for analytical modeling and reporting.",
  },
  {
    number: "04",
    title: "Data Modeling",
    icon: Database,
    text: "A relational fact-and-dimension data model was created to organize the data and provide a structured foundation for Power BI analysis.",
  },
  {
    number: "05",
    title: "DAX & KPI Development",
    icon: BarChart3,
    text: "DAX was used to create KPIs and analytical measures required for business intelligence reporting and analysis.",
  },
  {
    number: "06",
    title: "Reporting & Visualization",
    icon: LineChart,
    text: "The prepared data and analytical measures were used to create an interactive Power BI reporting solution focused on food delivery operations and business performance.",
  },
];

export default function FoodDeliveryAnalyticsPage() {
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
            className="group inline-flex items-center gap-2 text-sm font-medium text-slate-400 transition-colors duration-300 hover:text-white"
          >
            <ArrowLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1" />
            Back to Projects
          </Link>

          <span className="font-mono text-[10px] tracking-[0.2em] text-slate-700 sm:text-xs">
            CASE STUDY / 01
          </span>
        </motion.nav>

        {/* Hero */}
        <motion.header
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          className="pt-16 sm:pt-24"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/[0.08] px-4 py-2 text-xs font-medium uppercase tracking-[0.16em] text-blue-400">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
            Business Intelligence
          </div>

          <h1 className="mt-7 max-w-5xl text-4xl font-bold tracking-[-0.045em] text-slate-100 sm:text-5xl lg:text-6xl">
            Food Delivery Operations &amp; Data Quality Analytics
          </h1>

          <p className="mt-7 max-w-3xl text-base leading-8 text-slate-400 sm:text-lg">
            An end-to-end Power BI analytics solution focused on food delivery
            operations, customer behavior, restaurant performance, and business
            growth.
          </p>

          {/* Technology Pills */}
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

          {/* Hero Actions */}
          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href="https://github.com/aryanmaurya-prog/Food-Delivery-Analytics-Dashboard"
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

        {/* Divider */}
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
              This project focuses on transforming food delivery data into a
              structured business intelligence solution. The workflow covers
              data cleaning and transformation, relational data modeling, DAX
              based KPI development, and interactive Power BI reporting.
            </p>

            <p className="mt-5 text-base leading-8 text-slate-400">
              The solution provides a structured way to analyze food delivery
              operations, customer behavior, restaurant performance, and
              business growth.
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

            <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-500 sm:text-base">
              The project follows an end-to-end analytics workflow from data
              preparation to business intelligence reporting.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {projectSections.map((section, index) => {
              const Icon = section.icon;

              return (
                <motion.article
                  key={section.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.12 }}
                  transition={{
                    duration: 0.45,
                    delay: index * 0.05,
                    ease: "easeOut",
                  }}
                  className="group relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/30 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-slate-700 hover:bg-slate-900/60 sm:p-8"
                >
                  {/* Top Accent */}
                  <div className="absolute left-0 top-0 h-px w-0 bg-blue-500 transition-all duration-500 group-hover:w-full" />

                  {/* Glow */}
                  <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-blue-500/[0.05] blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                  <div className="relative">
                    <div className="flex items-start justify-between">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-800 bg-slate-950 text-slate-400 transition-all duration-300 group-hover:border-blue-500/20 group-hover:bg-blue-500/[0.08] group-hover:text-blue-400">
                        <Icon className="h-5 w-5" />
                      </div>

                      <span className="font-mono text-[10px] tracking-[0.18em] text-slate-700">
                        {section.number}
                      </span>
                    </div>

                    <h3 className="mt-7 text-xl font-semibold tracking-tight text-slate-100">
                      {section.title}
                    </h3>

                    <p className="mt-4 text-sm leading-7 text-slate-400">
                      {section.text}
                    </p>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </section>

        {/* Dashboard */}
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
              Power BI Dashboard
            </h2>
          </div>

          <div className="group relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/30">
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-500/60 to-transparent" />

            <div className="relative flex min-h-[360px] flex-col items-center justify-center p-8 text-center sm:min-h-[420px]">
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(59,130,246,0.08),transparent_60%)]" />

              <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl border border-slate-800 bg-slate-950 text-blue-400 transition-transform duration-300 group-hover:-translate-y-1">
                <LineChart className="h-7 w-7" />
              </div>

              <h3 className="relative mt-6 text-xl font-semibold text-slate-100">
                Interactive Analytics Dashboard
              </h3>

              <p className="relative mt-3 max-w-xl text-sm leading-7 text-slate-500">
                The Power BI solution brings together the cleaned data,
                relational model, and DAX-based KPIs into an interactive
                reporting experience.
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
                className="group flex items-center gap-3 rounded-2xl border border-slate-800 bg-slate-900/30 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-slate-700 hover:bg-slate-900/60"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-800 bg-slate-950 text-blue-400">
                  <Layers3 className="h-4 w-4" />
                </div>

                <span className="text-sm font-medium text-slate-300">
                  {technology}
                </span>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Project Value */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.5 }}
          className="mt-24"
        >
          <div className="rounded-3xl border border-slate-800 bg-slate-900/30 p-8 sm:p-10">
            <div className="flex items-start gap-5">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-slate-800 bg-slate-950 text-blue-400">
                <CheckCircle2 className="h-5 w-5" />
              </div>

              <div>
                <p className="text-xs font-medium uppercase tracking-[0.16em] text-blue-400">
                  Project Value
                </p>

                <h2 className="mt-3 text-2xl font-semibold text-slate-100">
                  From raw data to business intelligence
                </h2>

                <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-400">
                  The project demonstrates an end-to-end approach to preparing
                  data, building a relational analytical model, creating DAX
                  measures, and presenting the resulting analysis through
                  Power BI.
                </p>
              </div>
            </div>
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
                <p className="text-xs font-medium uppercase tracking-[0.16em] text-blue-400">
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
                href="https://github.com/aryanmaurya-prog/Food-Delivery-Analytics-Dashboard"
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

        {/* Bottom Navigation */}
        <div className="border-t border-slate-800 py-8">
          <Link
            href="/#projects"
            className="group inline-flex items-center gap-2 text-sm text-slate-500 transition-colors duration-300 hover:text-white"
          >
            <ArrowLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1" />
            Back to all projects
          </Link>
        </div>
      </div>
    </main>
  );
}