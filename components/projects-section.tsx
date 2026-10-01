"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowUpRight,
  BarChart3,
  Camera,
  Github,
  ImageIcon,
  Store,
  TrendingUp,
  X,
} from "lucide-react";

type Project = {
  title: string;
  description: string;
  tags: string[];
  icon: typeof BarChart3;
  githubUrl: string;
  caseStudyUrl?: string;
  category: string;
  domains: string[];
  featured: boolean;
  previewImage: string;
  problem: string;
  approach: string;
  value: string;
};

const filters = [
  "All",
  "Data Analytics",
  "Python",
  "Web Application",
  "Power BI",
];

const projects: Project[] = [
  {
    title: "Food Delivery Operations & Data Quality Analytics",
    description:
      "An end-to-end Power BI analytics solution focused on food delivery operations, customer behavior, restaurant performance, and business growth.",
    tags: ["Power BI", "Power Query", "DAX", "Data Modeling"],
    icon: BarChart3,
    githubUrl:
      "https://github.com/aryanmaurya-prog/Food-Delivery-Analytics-Dashboard",
    caseStudyUrl: "/projects/food-delivery-analytics",
    category: "Business Intelligence",
    domains: ["Data Analytics"],
    featured: true,
    previewImage: "",
    problem:
      "Analyze operational and business data to understand customer behavior, restaurant performance, sales patterns, and overall business performance.",
    approach:
      "Data cleaning and transformation with Power Query, followed by relational data modeling and DAX-based KPI development in Power BI.",
    value:
      "Provides an interactive way to explore operational patterns, customer behavior, restaurant performance, and business growth.",
  },

  {
    title: "Face Recognition Based Attendance System",
    description:
      "A Python-based attendance management application using face recognition and a desktop interface to support automated attendance recording and attendance data handling.",
    tags: ["Python", "OpenCV", "Tkinter", "Pandas"],
    icon: Camera,
    githubUrl:
      "https://github.com/aryanmaurya-prog/Face-Recognition-Based-Attendance-System",
    caseStudyUrl: "/projects/face-recognition-attendance",
    category: "Python Application",
    domains: ["Python"],
    featured: true,
    previewImage: "",
    problem:
      "Manual attendance recording can be time-consuming and requires repetitive data entry. This project focuses on creating a more automated attendance workflow using face recognition.",
    approach:
      "The application combines Python, OpenCV, a Tkinter-based desktop interface, and Pandas for the attendance workflow, recognition process, and attendance data handling.",
    value:
      "The project demonstrates how computer vision and desktop application development can be combined to support automated attendance recording.",
  },

  {
    title: "Product Performance & Revenue Intelligence",
    description:
      "Analytics project focused on product performance, sales trends, customer behavior, and revenue analysis using Python, SQL, Pandas, NumPy, and Power BI. Includes data processing, validation, exploratory analysis, SQL-based extraction, and interactive reporting.",
    tags: ["Python", "SQL", "Pandas", "NumPy", "Power BI"],
    icon: TrendingUp,
    githubUrl: "",
    category: "Data Analytics",
    domains: ["Data Analytics", "Power BI"],
    featured: false,
    previewImage: "",
    problem:
      "Analyze product and revenue data to understand sales trends, product performance, customer behavior, and business patterns.",
    approach:
      "Data processing, validation, exploratory analysis, SQL-based extraction, and interactive reporting using Python, SQL, Pandas, NumPy, and Power BI.",
    value:
      "Provides a structured analytical view of product performance, sales trends, customer behavior, and revenue-related patterns.",
  },

  {
    title: "Walmart Sales Analytics",
    description:
      "Data analytics project focused on analyzing Walmart sales data to explore business and sales patterns using data analysis and visualization techniques.",
    tags: ["Data Analytics", "Python", "Power BI"],
    icon: Store,
    githubUrl:
      "https://github.com/aryanmaurya-prog/Walmart-Sales-Analytics",
    category: "Data Analytics",
    domains: ["Data Analytics", "Power BI"],
    featured: false,
    previewImage: "",
    problem:
      "Analyze Walmart sales data to explore business patterns and understand sales-related trends through data analysis and visualization.",
    approach:
      "The project uses data analysis and visualization techniques with Python and Power BI to explore sales-related patterns.",
    value:
      "Provides an analytical view of Walmart sales data and helps explore business and sales patterns.",
  },
];

export function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveProject(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((project) =>
          project.domains.includes(activeFilter)
        );

  const featuredProjects = filteredProjects.filter(
    (project) => project.featured
  );

  const otherProjects = filteredProjects.filter(
    (project) => !project.featured
  );

  return (
    <section
      id="projects"
      className="relative w-full overflow-hidden border-b border-slate-800 bg-slate-950 py-28 text-white"
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[8%] top-[20%] h-72 w-72 rounded-full bg-blue-600/[0.025] blur-[110px]" />

        <div className="absolute bottom-[10%] right-[5%] h-80 w-80 rounded-full bg-indigo-500/[0.02] blur-[120px]" />
      </div>

      <div className="relative mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.55,
            ease: "easeOut",
          }}
          className="max-w-3xl"
        >
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/[0.08] px-4 py-2 text-xs font-medium uppercase tracking-[0.16em] text-blue-400">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
            Selected Work
          </div>

          <h2 className="text-4xl font-bold tracking-[-0.035em] sm:text-5xl">
            Projects &amp; Case Work
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
            Explore projects by domain, technology, and area of work.
          </p>
        </motion.div>

        {/* Project Filters */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.5,
            delay: 0.05,
          }}
          className="mt-10"
        >
          <div className="flex flex-wrap gap-2">
            {filters.map((filter) => {
              const isActive = activeFilter === filter;

              return (
                <button
                  key={filter}
                  type="button"
                  onClick={() => setActiveFilter(filter)}
                  className={`rounded-full border px-4 py-2 text-xs font-medium transition-all duration-300 ${
                    isActive
                      ? "border-blue-500/40 bg-blue-500/[0.12] text-blue-300 shadow-[0_0_20px_rgba(59,130,246,0.08)]"
                      : "border-slate-800 bg-slate-900/30 text-slate-500 hover:border-slate-700 hover:bg-slate-900/70 hover:text-slate-300"
                  }`}
                >
                  {filter}
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* Result Count */}
        <div className="mt-7 flex items-center gap-2">
          <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-slate-700">
            Showing
          </span>

          <span className="font-mono text-[10px] font-medium text-slate-500">
            {String(filteredProjects.length).padStart(2, "0")}
          </span>

          <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-slate-700">
            {activeFilter === "All"
              ? "Projects"
              : `${activeFilter} Projects`}
          </span>
        </div>

        {/* Featured Projects */}
        {featuredProjects.length > 0 && (
          <div className="mt-8 space-y-6">
            {featuredProjects.map((project, index) => {
              const Icon = project.icon;

              return (
                <motion.article
                  key={project.title}
                  initial={{
                    opacity: 0,
                    y: 24,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.15,
                  }}
                  transition={{
                    duration: 0.55,
                    ease: "easeOut",
                  }}
                  className="group relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/40"
                >
                  {/* Top Accent */}
                  <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-60" />

                  {/* Hover Glow */}
                  <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-blue-500/[0.07] blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                  <div className="relative grid lg:grid-cols-[1.1fr_0.9fr]">
                    {/* Left */}
                    <div className="p-7 sm:p-9 lg:p-11">
                      {/* Header */}
                      <div className="flex items-center justify-between gap-4">
                        <div className="flex items-center gap-3">
                          <motion.div
                            whileHover={{
                              scale: 1.06,
                              rotate: -2,
                            }}
                            transition={{
                              duration: 0.2,
                            }}
                            className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-800 bg-slate-950 text-blue-400 transition-all duration-300 group-hover:border-blue-500/20 group-hover:bg-blue-500/[0.08]"
                          >
                            <Icon className="h-5 w-5" />
                          </motion.div>

                          <div>
                            <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-blue-400">
                              Featured Project
                            </p>

                            <p className="mt-1 font-mono text-[10px] text-slate-600">
                              PROJECT {String(index + 1).padStart(2, "0")}
                            </p>
                          </div>
                        </div>

                        {/* GitHub */}
                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`View ${project.title} on GitHub`}
                            className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-800 bg-slate-950 text-slate-400 transition-all duration-300 hover:-translate-y-0.5 hover:border-slate-600 hover:bg-slate-900 hover:text-white"
                          >
                            <Github className="h-5 w-5" />
                          </a>
                        )}
                      </div>

                      {/* Title */}
                      <h3 className="mt-8 max-w-2xl text-2xl font-semibold tracking-[-0.025em] text-slate-100 sm:text-3xl">
                        {project.title}
                      </h3>

                      {/* Summary */}
                      <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
                        {project.description}
                      </p>

                      {/* Problem / Approach / Value */}
                      <div className="mt-8 space-y-5">
                        <div>
                          <p className="font-mono text-[9px] font-semibold uppercase tracking-[0.18em] text-slate-600">
                            Problem
                          </p>

                          <p className="mt-2 text-sm leading-6 text-slate-400">
                            {project.problem}
                          </p>
                        </div>

                        <div>
                          <p className="font-mono text-[9px] font-semibold uppercase tracking-[0.18em] text-slate-600">
                            Approach
                          </p>

                          <p className="mt-2 text-sm leading-6 text-slate-400">
                            {project.approach}
                          </p>
                        </div>

                        <div>
                          <p className="font-mono text-[9px] font-semibold uppercase tracking-[0.18em] text-slate-600">
                            Value
                          </p>

                          <p className="mt-2 text-sm leading-6 text-slate-400">
                            {project.value}
                          </p>
                        </div>
                      </div>

                      {/* Technologies */}
                      <div className="mt-8">
                        <p className="mb-3 font-mono text-[9px] font-semibold uppercase tracking-[0.18em] text-slate-600">
                          Technologies
                        </p>

                        <div className="flex flex-wrap gap-2">
                          {project.tags.map((tech) => (
                            <span
                              key={tech}
                              className="rounded-lg border border-slate-800 bg-slate-950/70 px-3 py-1.5 text-xs font-medium text-slate-400 transition-all duration-300 group-hover:border-slate-700 group-hover:text-slate-300"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Actions */}
                      <div className="mt-9 flex flex-wrap items-center justify-between gap-3 border-t border-slate-800 pt-6">
                        <span className="font-mono text-[9px] uppercase tracking-[0.14em] text-slate-600">
                          {project.category}
                        </span>

                        <div className="flex flex-wrap items-center gap-3">
                          {project.githubUrl && (
                            <a
                              href={project.githubUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="group/source inline-flex h-10 items-center justify-center gap-2 rounded-lg bg-white px-4 text-sm font-semibold text-slate-950 transition-all duration-300 hover:-translate-y-0.5 hover:bg-slate-200"
                            >
                              <Github className="h-4 w-4" />
                              View Source

                              <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover/source:-translate-y-0.5 group-hover/source:translate-x-0.5" />
                            </a>
                          )}

                          {project.caseStudyUrl && (
                            <Link
                              href={project.caseStudyUrl}
                              className="group/case inline-flex h-10 items-center justify-center gap-2 rounded-lg border border-slate-700 bg-slate-950/50 px-4 text-sm font-medium text-slate-300 transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-500/30 hover:bg-blue-500/[0.06] hover:text-white"
                            >
                              View Case Study

                              <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover/case:-translate-y-0.5 group-hover/case:translate-x-0.5" />
                            </Link>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Preview */}
                    <div className="relative min-h-[420px] overflow-hidden border-t border-slate-800 bg-slate-950/70 lg:border-l lg:border-t-0">
                      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(59,130,246,0.12),transparent_60%)]" />

                      <div className="relative flex h-full items-center justify-center p-6 sm:p-8">
                        <motion.div
                          whileHover={{
                            y: -6,
                            scale: 1.02,
                          }}
                          transition={{
                            duration: 0.3,
                            ease: "easeOut",
                          }}
                          className="relative w-full overflow-hidden rounded-2xl border border-slate-700/80 bg-slate-900 shadow-2xl shadow-black/30"
                        >
                          {project.previewImage ? (
                            <img
                              src={project.previewImage}
                              alt={`${project.title} preview`}
                              className="block aspect-[16/10] h-auto w-full object-cover"
                            />
                          ) : (
                            <div className="flex aspect-[16/10] items-center justify-center bg-gradient-to-br from-slate-900 via-slate-950 to-blue-950/20">
                              <div className="px-6 text-center">
                                <Icon className="mx-auto h-10 w-10 text-blue-400/70" />

                                <p className="mt-4 text-sm font-medium text-slate-300">
                                  {project.title}
                                </p>

                                <p className="mt-1 text-xs text-slate-600">
                                  Project Preview
                                </p>
                              </div>
                            </div>
                          )}

                          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/30 via-transparent to-transparent" />
                        </motion.div>
                      </div>

                      <div className="absolute bottom-6 left-6 rounded-lg border border-slate-800 bg-slate-950/80 px-3 py-1.5 backdrop-blur-sm">
                        <span className="font-mono text-[9px] font-medium uppercase tracking-[0.16em] text-slate-500">
                          Project Preview
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        )}

        {/* Other Projects */}
        {otherProjects.length > 0 && (
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            {otherProjects.map((project, index) => {
              const Icon = project.icon;

              return (
                <motion.article
                  key={project.title}
                  initial={{
                    opacity: 0,
                    y: 20,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.12,
                  }}
                  transition={{
                    duration: 0.45,
                    delay: index * 0.05,
                    ease: "easeOut",
                  }}
                  whileHover={{ y: -4 }}
                  className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/30 p-7 transition-all duration-500 hover:border-slate-700 hover:bg-slate-900/60 hover:shadow-[0_18px_50px_rgba(2,8,23,0.28)] sm:p-8"
                >
                  {/* Accent */}
                  <div className="absolute left-0 top-0 h-px w-0 bg-gradient-to-r from-transparent via-blue-500 to-transparent transition-all duration-700 group-hover:w-full" />

                  {/* Header */}
                  <div className="flex items-start justify-between gap-4">
                    <motion.div
                      whileHover={{
                        scale: 1.06,
                        rotate: -2,
                      }}
                      transition={{
                        duration: 0.2,
                      }}
                      className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-800 bg-slate-950 text-slate-400 transition-all duration-300 group-hover:border-blue-500/20 group-hover:bg-blue-500/[0.08] group-hover:text-blue-400"
                    >
                      <Icon className="h-5 w-5" />
                    </motion.div>

                    <div className="text-right">
                      <p className="font-mono text-[10px] tracking-[0.18em] text-slate-700">
                        {String(index + 1).padStart(2, "0")}
                      </p>

                      <p className="mt-1 text-[9px] font-medium uppercase tracking-[0.14em] text-slate-600">
                        {project.category}
                      </p>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="mt-7 text-xl font-semibold tracking-[-0.025em] text-slate-100 transition-colors duration-300 group-hover:text-white">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-4 flex-1 text-sm leading-7 text-slate-400 transition-colors duration-300 group-hover:text-slate-300">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="mt-7 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-lg border border-slate-800 bg-slate-950/70 px-2.5 py-1.5 text-xs font-medium text-slate-500 transition-all duration-300 group-hover:border-slate-700 group-hover:text-slate-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="mt-7 flex items-center justify-between gap-3 border-t border-slate-800 pt-5">
                    {project.githubUrl ? (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/source inline-flex items-center gap-2 text-sm font-medium text-slate-400 transition-colors hover:text-white"
                      >
                        <Github className="h-4 w-4" />
                        View Source

                        <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover/source:-translate-y-0.5 group-hover/source:translate-x-0.5" />
                      </a>
                    ) : (
                      <span className="inline-flex items-center gap-2 text-[10px] font-medium uppercase tracking-[0.12em] text-slate-700">
                        <Github className="h-4 w-4" />
                        Repository coming soon
                      </span>
                    )}

                    <button
                      type="button"
                      onClick={() => setActiveProject(project)}
                      className="group/case inline-flex items-center gap-1.5 text-sm font-medium text-blue-400 transition-colors duration-300 hover:text-blue-300"
                    >
                      View Case Study

                      <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover/case:-translate-y-0.5 group-hover/case:translate-x-0.5" />
                    </button>
                  </div>
                </motion.article>
              );
            })}
          </div>
        )}

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{
              opacity: 0,
              y: 12,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            className="mt-8 flex min-h-[260px] flex-col items-center justify-center rounded-3xl border border-dashed border-slate-800 bg-slate-900/20 px-6 text-center"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-slate-800 bg-slate-950 text-slate-600">
              <ImageIcon className="h-5 w-5" />
            </div>

            <h3 className="mt-5 text-base font-semibold text-slate-300">
              No projects in this domain yet
            </h3>

            <p className="mt-2 max-w-md text-sm leading-6 text-slate-600">
              More work in this area can be added here as the portfolio
              expands.
            </p>

            <button
              type="button"
              onClick={() => setActiveFilter("All")}
              className="mt-5 text-sm font-medium text-blue-400 transition-colors hover:text-blue-300"
            >
              View all projects
            </button>
          </motion.div>
        )}
      </div>

      {/* Project Modal */}
      {activeProject && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-slate-950/80 p-4 backdrop-blur-md"
          onClick={() => setActiveProject(null)}
        >
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.96,
              y: 12,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            transition={{
              duration: 0.25,
              ease: "easeOut",
            }}
            onClick={(event) => event.stopPropagation()}
            className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-3xl border border-slate-800 bg-slate-900 shadow-2xl shadow-black/50"
          >
            {/* Close */}
            <button
              type="button"
              onClick={() => setActiveProject(null)}
              className="absolute right-5 top-5 z-10 flex h-9 w-9 items-center justify-center rounded-full border border-slate-800 bg-slate-950/80 text-slate-400 transition-all duration-300 hover:border-slate-700 hover:bg-slate-900 hover:text-white"
              aria-label="Close project details"
            >
              <X className="h-4 w-4" />
            </button>

            <div className="p-7 sm:p-9">
              {/* Header */}
              <div className="flex items-start gap-4 pr-10">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-slate-800 bg-slate-950 text-blue-400">
                  {(() => {
                    const ActiveIcon = activeProject.icon;

                    return <ActiveIcon className="h-5 w-5" />;
                  })()}
                </div>

                <div>
                  <p className="font-mono text-[9px] font-medium uppercase tracking-[0.18em] text-blue-400">
                    {activeProject.category}
                  </p>

                  <h3 className="mt-2 text-2xl font-semibold tracking-[-0.03em] text-slate-100">
                    {activeProject.title}
                  </h3>
                </div>
              </div>

              {/* Description */}
              <p className="mt-7 text-sm leading-7 text-slate-400">
                {activeProject.description}
              </p>

              {/* Problem / Approach / Value */}
              <div className="mt-7 space-y-5">
                <div>
                  <p className="font-mono text-[9px] font-semibold uppercase tracking-[0.18em] text-slate-600">
                    Problem
                  </p>

                  <p className="mt-2 text-sm leading-7 text-slate-400">
                    {activeProject.problem}
                  </p>
                </div>

                <div>
                  <p className="font-mono text-[9px] font-semibold uppercase tracking-[0.18em] text-slate-600">
                    Approach
                  </p>

                  <p className="mt-2 text-sm leading-7 text-slate-400">
                    {activeProject.approach}
                  </p>
                </div>

                <div>
                  <p className="font-mono text-[9px] font-semibold uppercase tracking-[0.18em] text-slate-600">
                    Value
                  </p>

                  <p className="mt-2 text-sm leading-7 text-slate-400">
                    {activeProject.value}
                  </p>
                </div>
              </div>

              {/* Domains */}
              <div className="mt-7">
                <p className="font-mono text-[9px] font-medium uppercase tracking-[0.16em] text-slate-500">
                  Domains
                </p>

                <div className="mt-3 flex flex-wrap gap-2">
                  {activeProject.domains.map((domain) => (
                    <span
                      key={domain}
                      className="rounded-lg border border-blue-500/10 bg-blue-500/[0.05] px-2.5 py-1.5 text-xs font-medium text-slate-400"
                    >
                      {domain}
                    </span>
                  ))}
                </div>
              </div>

              {/* Technologies */}
              <div className="mt-7">
                <p className="font-mono text-[9px] font-medium uppercase tracking-[0.16em] text-slate-500">
                  Technologies
                </p>

                <div className="mt-3 flex flex-wrap gap-2">
                  {activeProject.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-lg border border-slate-800 bg-slate-950/70 px-2.5 py-1.5 text-xs font-medium text-slate-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Preview */}
              <div className="mt-7">
                <p className="font-mono text-[9px] font-medium uppercase tracking-[0.16em] text-slate-500">
                  Project Preview
                </p>

                <div className="mt-3 overflow-hidden rounded-2xl border border-slate-800 bg-slate-950">
                  {activeProject.previewImage ? (
                    <img
                      src={activeProject.previewImage}
                      alt={`${activeProject.title} preview`}
                      className="block h-auto w-full object-cover"
                    />
                  ) : (
                    <div className="flex min-h-[220px] flex-col items-center justify-center px-6 text-center">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-slate-800 bg-slate-900 text-slate-500">
                        <ImageIcon className="h-5 w-5" />
                      </div>

                      <p className="mt-4 text-sm font-medium text-slate-400">
                        Project Preview
                      </p>

                      <p className="mt-1 max-w-sm text-xs leading-6 text-slate-600">
                        Project screenshot will be added here.
                      </p>
                    </div>
                  )}
                </div>
              </div>

              {/* Modal Actions */}
              <div className="mt-8 flex flex-wrap items-center justify-between gap-3 border-t border-slate-800 pt-6">
                {activeProject.githubUrl ? (
                  <a
                    href={activeProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/source inline-flex h-10 items-center gap-2 rounded-lg bg-white px-4 text-sm font-semibold text-slate-950 transition-all duration-300 hover:-translate-y-0.5 hover:bg-slate-200"
                  >
                    <Github className="h-4 w-4" />
                    GitHub Repository
                    <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover/source:-translate-y-0.5 group-hover/source:translate-x-0.5" />
                  </a>
                ) : (
                  <span className="text-[9px] font-medium uppercase tracking-[0.14em] text-slate-600">
                    Repository link coming soon
                  </span>
                )}

                <button
                  type="button"
                  onClick={() => setActiveProject(null)}
                  className="inline-flex h-10 items-center justify-center rounded-lg border border-slate-800 px-4 text-sm font-medium text-slate-400 transition-all duration-300 hover:border-slate-700 hover:bg-slate-950 hover:text-white"
                >
                  Close
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </section>
  );
}