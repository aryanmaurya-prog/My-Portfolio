"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
    domains: ["Data Analytics", "Power BI"],
    featured: true,
    previewImage: "/images/Executive-Overview-Analytics.png",
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
    previewImage: "/images/Face-Recognition.png",
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
      "Analytics project focused on product performance, sales trends, customer behavior, and revenue analysis using Python, SQL, Pandas, NumPy, and Power BI.",
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
    previewImage: "/images/walmart_dashboard.png",
    problem:
      "Analyze Walmart sales data to explore business patterns and understand sales-related trends through data analysis and visualization.",
    approach:
      "The project uses data analysis and visualization techniques with Python and Power BI to explore sales-related patterns.",
    value:
      "Provides an analytical view of Walmart sales data and helps explore business and sales patterns.",
  },
];

/* ============================================================
   PROJECT IMAGE
   ============================================================ */

function ProjectImage({
  src,
  alt,
  className = "",
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  const [currentSrc, setCurrentSrc] = useState(src);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    setCurrentSrc(src);
    setFailed(false);
  }, [src]);

  const getFallbackSources = (original: string) => {
    if (!original) return [];

    const clean = original.replace(/\.(png|jpg|jpeg|webp)$/i, "");

    const filename = clean.split("/").pop() || "";

    const variants = [
      original,
      `${clean}.jpg`,
      `${clean}.jpeg`,
      `${clean}.webp`,
    ];

    if (filename === "face-recognition") {
      variants.push(
        "/images/face_recognition.png",
        "/images/face-recognition-system.png",
        "/images/face_recognition_system.png",
        "/images/face-recognition.jpg",
        "/images/face_recognition.jpg",
        "/images/face-recognition.webp",
        "/images/face_recognition.webp"
      );
    }

    return [...new Set(variants)];
  };

  const sources = getFallbackSources(src);

  const handleError = () => {
    const currentIndex = sources.indexOf(currentSrc);

    if (currentIndex !== -1 && currentIndex < sources.length - 1) {
      setCurrentSrc(sources[currentIndex + 1]);
      return;
    }

    setFailed(true);
  };

  if (!src || failed) {
    return (
      <div
        className={`flex h-full w-full items-center justify-center bg-gradient-to-br from-slate-900 via-slate-950 to-blue-950/20 ${className}`}
      >
        <div className="flex flex-col items-center justify-center text-center">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-slate-800 bg-slate-900">
            <ImageIcon className="h-6 w-6 text-slate-600" />
          </div>

          <p className="mt-4 text-sm font-medium text-slate-400">
            Project Preview
          </p>

          <p className="mt-1 text-xs text-slate-600">
            Screenshot coming soon
          </p>
        </div>
      </div>
    );
  }

  return (
    <img
      src={currentSrc}
      alt={alt}
      onError={handleError}
      className={`h-full w-full object-cover object-center ${className}`}
    />
  );
}

/* ============================================================
   PROJECT SECTION
   ============================================================ */

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

  return (
    <section
      id="projects"
      className="relative w-full overflow-hidden border-b border-slate-800 bg-slate-950 py-24 text-white sm:py-28"
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[5%] top-[12%] h-72 w-72 rounded-full bg-blue-600/[0.035] blur-[120px]" />

        <div className="absolute bottom-[5%] right-[5%] h-80 w-80 rounded-full bg-indigo-500/[0.025] blur-[130px]" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.025),transparent_45%)]" />
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* ========================================================
            HEADER
        ======================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/[0.07] px-4 py-2 text-[10px] font-medium uppercase tracking-[0.16em] text-blue-400">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
            Selected Work
          </div>

          <h2 className="text-4xl font-bold tracking-[-0.04em] text-slate-100 sm:text-5xl">
            Projects &amp; Case Work
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
            Explore projects across data analytics, Python, visualization,
            and application development.
          </p>
        </motion.div>

        {/* ========================================================
            FILTERS
        ======================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: 0.05 }}
          className="mt-10"
        >
          <div className="flex flex-wrap gap-2">
            {filters.map((filter) => {
              const active = activeFilter === filter;

              return (
                <button
                  key={filter}
                  type="button"
                  onClick={() => setActiveFilter(filter)}
                  className={`rounded-lg border px-4 py-2 text-xs font-medium transition-all duration-300 ${
                    active
                      ? "border-blue-500/30 bg-blue-500/[0.10] text-blue-300 shadow-[0_0_25px_rgba(59,130,246,0.06)]"
                      : "border-slate-800 bg-slate-900/40 text-slate-500 hover:border-slate-700 hover:bg-slate-900 hover:text-slate-300"
                  }`}
                >
                  {filter}
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* ========================================================
            RESULT COUNT
        ======================================================== */}

        <div className="mt-8 flex items-center gap-2">
          <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-slate-700">
            Showing
          </span>

          <span className="font-mono text-[10px] font-medium text-blue-400">
            {String(filteredProjects.length).padStart(2, "0")}
          </span>

          <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-slate-700">
            {activeFilter === "All"
              ? "Projects"
              : `${activeFilter} Projects`}
          </span>
        </div>

        {/* ========================================================
            PROJECT GRID
        ======================================================== */}

        {filteredProjects.length > 0 ? (
          <motion.div
            layout
            className="mt-8 grid items-stretch gap-6 md:grid-cols-2 xl:grid-cols-3"
          >
            {filteredProjects.map((project, index) => {
              const Icon = project.icon;

              return (
                <motion.article
                  layout
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
                    amount: 0.08,
                  }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.04,
                    ease: "easeOut",
                  }}
                  whileHover={{
                    y: -5,
                  }}
                  className="group relative flex h-full min-h-[590px] flex-col overflow-hidden rounded-2xl border border-slate-800 bg-[#0d0f17] transition-all duration-500 hover:border-slate-700 hover:bg-[#10131d] hover:shadow-[0_20px_60px_rgba(0,0,0,0.3)]"
                >
                  {/* Top hover accent */}
                  <div className="absolute left-0 right-0 top-0 z-30 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                  {/* ==================================================
                      IMAGE
                  ================================================== */}

                  <div className="relative overflow-hidden border-b border-slate-800 bg-slate-900">
                    <div className="aspect-[16/10] w-full">
                      <ProjectImage
                        src={project.previewImage}
                        alt={`${project.title} project preview`}
                        className="transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                      />
                    </div>

                    {/* Gradient */}
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />

                    {/* Project number */}
                    <div className="absolute right-4 top-4 rounded-md border border-white/10 bg-slate-950/75 px-2.5 py-1.5 backdrop-blur-md">
                      <span className="font-mono text-[9px] text-slate-400">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>

                    {/* Preview label */}
                    <div className="absolute bottom-4 left-4 rounded-md border border-white/10 bg-slate-950/75 px-2.5 py-1.5 backdrop-blur-md">
                      <span className="font-mono text-[8px] uppercase tracking-[0.16em] text-slate-400">
                        Project Preview
                      </span>
                    </div>
                  </div>

                  {/* ==================================================
                      CARD CONTENT
                  ================================================== */}

                  <div className="flex flex-1 flex-col p-6">
                    {/* Category + Featured */}
                    <div className="flex min-h-[22px] items-center justify-between gap-3">
                      <span className="text-[9px] font-medium uppercase tracking-[0.15em] text-blue-400">
                        {project.category}
                      </span>

                      {project.featured && (
                        <span className="rounded-md border border-blue-500/15 bg-blue-500/[0.06] px-2 py-1 text-[8px] font-medium uppercase tracking-[0.12em] text-blue-400">
                          Featured
                        </span>
                      )}
                    </div>

                    {/* Title */}
                    <h3 className="mt-4 min-h-[56px] text-xl font-semibold leading-7 tracking-[-0.025em] text-slate-100 transition-colors duration-300 group-hover:text-white">
                      {project.title}
                    </h3>

                    {/* Description */}
                    <p className="mt-4 min-h-[96px] line-clamp-4 text-sm leading-6 text-slate-400">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="mt-6 min-h-[58px]">
                      <div className="flex flex-wrap content-start gap-2">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-md border border-slate-800 bg-slate-950/70 px-2.5 py-1.5 text-[10px] font-medium text-slate-500 transition-all duration-300 group-hover:border-slate-700 group-hover:text-slate-400"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Spacer */}
                    <div className="flex-1" />

                    {/* Actions */}
                    <div className="mt-7 flex items-center justify-between gap-3 border-t border-slate-800 pt-5">
                      {project.githubUrl ? (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`View ${project.title} source code`}
                          className="group/source inline-flex items-center gap-2 text-xs font-medium text-slate-400 transition-colors hover:text-white"
                        >
                          <Github className="h-4 w-4" />

                          <span>Source</span>

                          <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover/source:-translate-y-0.5 group-hover/source:translate-x-0.5" />
                        </a>
                      ) : (
                        <span className="text-[9px] font-medium uppercase tracking-[0.12em] text-slate-700">
                          Repository soon
                        </span>
                      )}

                      <button
                        type="button"
                        onClick={() => setActiveProject(project)}
                        className="group/case inline-flex items-center gap-1.5 text-xs font-medium text-blue-400 transition-colors duration-300 hover:text-blue-300"
                      >
                        View Details

                        <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover/case:-translate-y-0.5 group-hover/case:translate-x-0.5" />
                      </button>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </motion.div>
        ) : (
          /* ========================================================
             EMPTY STATE
          ======================================================== */

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-8 flex min-h-[280px] flex-col items-center justify-center rounded-2xl border border-dashed border-slate-800 bg-slate-900/20 px-6 text-center"
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-slate-800 bg-slate-950">
              <ImageIcon className="h-6 w-6 text-slate-600" />
            </div>

            <h3 className="mt-5 text-base font-semibold text-slate-300">
              No projects found
            </h3>

            <p className="mt-2 max-w-md text-sm leading-6 text-slate-600">
              No projects are currently available for this category.
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

      {/* ============================================================
          CASE STUDY MODAL
      ============================================================ */}

      <AnimatePresence>
        {activeProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-slate-950/80 p-4 backdrop-blur-md"
            onClick={() => setActiveProject(null)}
          >
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.96,
                y: 16,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                scale: 0.96,
                y: 10,
              }}
              transition={{
                duration: 0.25,
                ease: "easeOut",
              }}
              onClick={(event) => event.stopPropagation()}
              className="relative max-h-[92vh] w-full max-w-4xl overflow-y-auto rounded-3xl border border-slate-800 bg-[#0d0f17] shadow-2xl shadow-black/50"
            >
              {/* Close */}
              <button
                type="button"
                onClick={() => setActiveProject(null)}
                aria-label="Close project details"
                className="absolute right-5 top-5 z-30 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-slate-950/80 text-slate-400 backdrop-blur-md transition-all duration-300 hover:border-slate-700 hover:bg-slate-900 hover:text-white"
              >
                <X className="h-4 w-4" />
              </button>

              {/* ======================================================
                  MODAL IMAGE
              ====================================================== */}

              <div className="relative overflow-hidden border-b border-slate-800 bg-slate-950">
                <div className="aspect-[16/9] w-full">
                  <ProjectImage
                    src={activeProject.previewImage}
                    alt={`${activeProject.title} project preview`}
                  />
                </div>

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0d0f17] via-transparent to-transparent" />

                <div className="absolute bottom-5 left-5 rounded-md border border-white/10 bg-slate-950/75 px-3 py-1.5 backdrop-blur-md">
                  <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-slate-400">
                    Project Preview
                  </span>
                </div>
              </div>

              {/* ======================================================
                  MODAL CONTENT
              ====================================================== */}

              <div className="p-7 sm:p-9">
                {/* Header */}
                <div className="flex items-start gap-4 pr-12">
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

                    <h3 className="mt-2 text-2xl font-semibold tracking-[-0.03em] text-slate-100 sm:text-3xl">
                      {activeProject.title}
                    </h3>
                  </div>
                </div>

                {/* Description */}
                <p className="mt-7 text-sm leading-7 text-slate-400 sm:text-base">
                  {activeProject.description}
                </p>

                {/* Problem / Approach / Value */}
                <div className="mt-8 grid gap-6 md:grid-cols-3">
                  <div>
                    <p className="font-mono text-[9px] font-semibold uppercase tracking-[0.18em] text-slate-600">
                      Problem
                    </p>

                    <p className="mt-2 text-sm leading-6 text-slate-400">
                      {activeProject.problem}
                    </p>
                  </div>

                  <div>
                    <p className="font-mono text-[9px] font-semibold uppercase tracking-[0.18em] text-slate-600">
                      Approach
                    </p>

                    <p className="mt-2 text-sm leading-6 text-slate-400">
                      {activeProject.approach}
                    </p>
                  </div>

                  <div>
                    <p className="font-mono text-[9px] font-semibold uppercase tracking-[0.18em] text-slate-600">
                      Value
                    </p>

                    <p className="mt-2 text-sm leading-6 text-slate-400">
                      {activeProject.value}
                    </p>
                  </div>
                </div>

                {/* Domains */}
                <div className="mt-8">
                  <p className="font-mono text-[9px] font-medium uppercase tracking-[0.16em] text-slate-500">
                    Domains
                  </p>

                  <div className="mt-3 flex flex-wrap gap-2">
                    {activeProject.domains.map((domain) => (
                      <span
                        key={domain}
                        className="rounded-md border border-blue-500/10 bg-blue-500/[0.05] px-2.5 py-1.5 text-xs font-medium text-slate-400"
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
                        className="rounded-md border border-slate-800 bg-slate-950/70 px-2.5 py-1.5 text-xs font-medium text-slate-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom Actions */}
                <div className="mt-8 flex flex-wrap items-center justify-between gap-3 border-t border-slate-800 pt-6">
                  {activeProject.githubUrl ? (
                    <a
                      href={activeProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex h-10 items-center gap-2 rounded-lg bg-white px-4 text-sm font-semibold text-slate-950 transition-all duration-300 hover:-translate-y-0.5 hover:bg-slate-200"
                    >
                      <Github className="h-4 w-4" />

                      GitHub Repository

                      <ArrowUpRight className="h-3.5 w-3.5" />
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
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
