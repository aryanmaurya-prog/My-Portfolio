import { Navbar } from "@/components/navbar";
import HeroSection from "@/components/hero-section";
import { SkillsSection } from "@/components/skills-section";
import { ProjectsSection } from "@/components/projects-section";
import ContactSection from "@/components/contact-section";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-slate-950 text-white selection:bg-blue-600 selection:text-white">
      <Navbar />

      <HeroSection />

      <SkillsSection />

      <ProjectsSection />

      <ContactSection />

      <footer className="w-full border-t border-slate-800 bg-slate-950 text-white">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-6 py-7 sm:py-8 md:flex-row md:items-center md:justify-between">
            {/* Identity */}
            <div className="text-center md:text-left">
              <a
                href="#about"
                className="text-sm font-semibold tracking-tight text-slate-200 transition-colors hover:text-white"
              >
                Aryan Maurya
              </a>

              <p className="mt-1 text-[11px] text-slate-600">
                Data Analytics · Software Development · AI
              </p>
            </div>

            {/* Navigation + meta */}
            <div className="flex flex-col items-center gap-3 md:items-end">
              <nav
                aria-label="Footer navigation"
                className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2"
              >
                <a
                  href="#about"
                  className="text-xs text-slate-600 transition-colors hover:text-slate-300"
                >
                  About
                </a>

                <a
                  href="#skills"
                  className="text-xs text-slate-600 transition-colors hover:text-slate-300"
                >
                  Skills
                </a>

                <a
                  href="#projects"
                  className="text-xs text-slate-600 transition-colors hover:text-slate-300"
                >
                  Projects
                </a>

                <a
                  href="#contact"
                  className="text-xs text-slate-600 transition-colors hover:text-slate-300"
                >
                  Contact
                </a>

                <a
                  href="https://github.com/aryanmaurya-prog"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-slate-600 transition-colors hover:text-slate-300"
                >
                  GitHub
                </a>

                <a
                  href="https://www.linkedin.com/in/aryan-maurya257"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-slate-600 transition-colors hover:text-slate-300"
                >
                  LinkedIn
                </a>
              </nav>

              <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-[10px] text-slate-700 md:justify-end">
                <span>© {new Date().getFullYear()} Aryan Maurya</span>

                <span className="hidden text-slate-800 sm:inline">
                  •
                </span>

                <span>
                  Built with{" "}
                  <span className="text-slate-600">Next.js</span>
                  {" · "}
                  <span className="text-slate-600">React</span>
                  {" · "}
                  <span className="text-slate-600">Tailwind CSS</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}