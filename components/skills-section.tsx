"use client";

import { motion } from "framer-motion";
import {
  BarChart3,
  BrainCircuit,
  Code2,
  Database,
  Globe,
  Layers3,
} from "lucide-react";

const skillGroups = [
  {
    title: "Programming",
    description:
      "Languages and programming fundamentals used for problem solving and application development.",
    icon: Code2,
    skills: ["Python", "Java", "JavaScript", "DSA", "OOP"],
  },
  {
    title: "Data Analytics",
    description:
      "Data preparation, exploratory analysis, reporting, and business intelligence workflows.",
    icon: BarChart3,
    skills: ["Pandas", "NumPy", "Power BI", "DAX", "Excel"],
  },
  {
    title: "Databases",
    description:
      "Working with relational databases, SQL queries, data modeling, and database fundamentals.",
    icon: Database,
    skills: ["SQL", "MySQL", "PostgreSQL", "DBMS"],
  },
  {
    title: "Web Development",
    description:
      "Frontend and backend technologies for building responsive web applications and APIs.",
    icon: Globe,
    skills: [
      "HTML",
      "CSS",
      "React",
      "Node.js",
      "Express.js",
      "REST APIs",
    ],
  },
  {
    title: "AI & Machine Learning",
    description:
      "Foundational machine learning and AI technologies used in practical projects.",
    icon: BrainCircuit,
    skills: ["Scikit-learn", "Machine Learning", "AI Applications"],
  },
  {
    title: "Tools & Development",
    description:
      "Tools and development practices used for version control, analysis, and application development.",
    icon: Layers3,
    skills: ["Git", "GitHub", "Jupyter", "VS Code", "Flask"],
  },
];

export function SkillsSection() {
  return (
    <section
      id="skills"
      className="relative w-full overflow-hidden border-b border-slate-800 bg-slate-950 py-28 text-white"
    >
      {/* Background atmosphere */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[4%] top-[12%] h-80 w-80 rounded-full bg-blue-600/[0.035] blur-[120px]" />
        <div className="absolute bottom-[8%] right-[4%] h-96 w-96 rounded-full bg-indigo-500/[0.025] blur-[140px]" />
      </div>

      <div className="relative mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/[0.07] px-4 py-2 font-mono text-[10px] font-medium uppercase tracking-[0.18em] text-blue-400">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-400 shadow-[0_0_8px_rgba(96,165,250,0.7)]" />
            Technical Skills
          </div>

          <h2 className="text-4xl font-bold tracking-[-0.045em] text-slate-100 sm:text-5xl">
            Skills &amp; Technologies
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
            A practical technology stack spanning programming, data analytics,
            databases, web development, and AI.
          </p>
        </motion.div>

        {/* Skills */}
        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, index) => {
            const Icon = group.icon;

            return (
              <motion.article
                key={group.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.12 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.06,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{ y: -5 }}
                className="group relative overflow-hidden rounded-[1.6rem] border border-slate-800 bg-slate-900/30 p-7 transition-all duration-500 hover:border-slate-700 hover:bg-slate-900/65 hover:shadow-[0_18px_50px_rgba(2,8,23,0.35)] sm:p-8"
              >
                {/* Moving top accent */}
                <div className="absolute left-0 top-0 h-px w-0 bg-gradient-to-r from-transparent via-blue-400 to-transparent transition-all duration-700 group-hover:w-full" />

                {/* Hover glow */}
                <div className="pointer-events-none absolute -right-24 -top-24 h-52 w-52 rounded-full bg-blue-500/[0.055] blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                {/* Subtle inner light */}
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_85%_0%,rgba(59,130,246,0.055),transparent_38%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                <div className="relative">
                  {/* Icon + Number */}
                  <div className="flex items-start justify-between">
                    <motion.div
                      whileHover={{ scale: 1.08, rotate: -3 }}
                      transition={{ duration: 0.25, ease: "easeOut" }}
                      className="flex h-12 w-12 items-center justify-center rounded-2xl border border-slate-800 bg-slate-950 text-slate-400 shadow-lg shadow-black/10 transition-all duration-500 group-hover:border-blue-500/30 group-hover:bg-blue-500/[0.09] group-hover:text-blue-400 group-hover:shadow-blue-500/10"
                    >
                      <Icon className="h-5 w-5" />
                    </motion.div>

                    <span className="pt-1 font-mono text-[10px] font-medium tracking-[0.2em] text-slate-700 transition-colors duration-300 group-hover:text-blue-500/50">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  {/* Heading */}
                  <h3 className="mt-7 text-[1.2rem] font-semibold tracking-[-0.025em] text-slate-100 transition-colors duration-300 group-hover:text-white">
                    {group.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-3 text-[13px] leading-6 text-slate-500 transition-colors duration-300 group-hover:text-slate-400">
                    {group.description}
                  </p>

                  {/* Skill pills */}
                  <div className="mt-6 flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <motion.span
                        key={skill}
                        whileHover={{ y: -2 }}
                        transition={{ duration: 0.2 }}
                        className="rounded-lg border border-slate-800 bg-slate-950/70 px-2.5 py-1.5 text-[11px] font-medium text-slate-500 transition-all duration-300 hover:border-blue-500/25 hover:bg-blue-500/[0.06] hover:text-blue-300"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}