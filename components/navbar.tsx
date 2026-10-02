"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Download,
  LineChart,
  Menu,
  X,
} from "lucide-react";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

const NAVBAR_HEIGHT = 64;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("about");

  /*
   * Scroll state + active section
   */
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sectionIds = navLinks.map((link) =>
        link.href.substring(1)
      );

      let currentSection = "about";
      let closestDistance = Infinity;

      sectionIds.forEach((id) => {
        const section = document.getElementById(id);

        if (!section) return;

        const rect = section.getBoundingClientRect();

        /*
         * Consider the area just below the navbar
         * when determining the active section.
         */
        const distance = Math.abs(
          rect.top - NAVBAR_HEIGHT - 20
        );

        if (
          rect.top <= NAVBAR_HEIGHT + 40 &&
          distance < closestDistance
        ) {
          closestDistance = distance;
          currentSection = id;
        }
      });

      /*
       * At the very top, About is active.
       */
      if (window.scrollY < 100) {
        currentSection = "about";
      }

      setActiveSection(currentSection);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  /*
   * Lock body scrolling while mobile menu is open.
   * This prevents mobile browsers from behaving strangely
   * while the menu is open.
   */
  useEffect(() => {
    if (!isMobileMenuOpen) {
      document.body.style.overflow = "";
      return;
    }

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  /*
   * Close mobile menu when pressing Escape.
   */
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  /*
   * Close mobile menu automatically when switching
   * to desktop viewport.
   */
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  /*
   * Navigation handler
   *
   * Important:
   * - No setTimeout
   * - No isAutoScrolling state
   * - Uses native scrollTo
   * - Calculates the 64px navbar offset
   * - Works for both desktop and mobile
   */
  const handleNavClick = (
    event: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    event.preventDefault();



    const targetId = href.substring(1);
    const target = document.getElementById(targetId);

    if (!target) return;

    /* Update active navigation immediately. */
    setActiveSection(targetId);

    /* Close mobile menu first. */
    setIsMobileMenuOpen(false);

    /* Calculate target position after the click.
       requestAnimationFrame allows React to process
       the mobile menu state update before calculating
       the final scroll position. */
    requestAnimationFrame(() => {
      const targetPosition =
        target.getBoundingClientRect().top +
        window.scrollY -
        NAVBAR_HEIGHT;

      window.scrollTo({
        top: Math.max(0, targetPosition),
        behavior: "smooth",
      });
    });

    /* Update the URL hash without causing the browser
       to perform its own jump. */
    window.history.replaceState(null, "", href);
  };

  /*
   * Logo click
   */
  const handleLogoClick = (
    event: React.MouseEvent<HTMLAnchorElement>
  ) => {
    handleNavClick(event, "#about");
  };

  return (
    <motion.header
      initial={{
        y: -100,
        opacity: 0,
      }}
      animate={{
        y: 0,
        opacity: 1,
      }}
      transition={{
        duration: 0.55,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={`fixed inset-x-0 top-0 z-[100] w-full border-b transition-all duration-500 ${
        scrolled
          ? "border-white/[0.08] bg-slate-950/80 shadow-[0_8px_30px_rgba(2,8,23,0.18)] backdrop-blur-xl"
          : "border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:px-6">
        {/* ================================================== */}
        {/* LOGO */}
        {/* ================================================== */}

        <a
          href="#about"
          onClick={handleLogoClick}
          className="group flex items-center gap-2.5 rounded-lg p-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
          aria-label="Aryan Maurya Home"
        >
          <motion.div
            whileHover={{
              scale: 1.06,
              rotate: -2,
            }}
            whileTap={{
              scale: 0.96,
            }}
            transition={{
              duration: 0.2,
            }}
            className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600 shadow-lg shadow-blue-950/30 transition-all duration-300 group-hover:bg-blue-500 group-hover:shadow-blue-900/30"
          >
            <LineChart className="h-4 w-4 text-white" />
          </motion.div>

          <span className="text-[15px] font-semibold tracking-[-0.02em] text-slate-100 transition-colors duration-300 group-hover:text-white sm:text-base">
            Aryan Maurya
          </span>
        </a>

        {/* ================================================== */}
        {/* DESKTOP NAVIGATION */}
        {/* ================================================== */}

        <nav className="hidden items-center gap-2 md:flex">
          {navLinks.map((link) => {
            const sectionId = link.href.substring(1);
            const isActive = activeSection === sectionId;

            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(event) =>
                  handleNavClick(event, link.href)
                }
                className={`group/nav relative rounded-lg px-3 py-2 text-[13px] font-medium tracking-[-0.01em] transition-all duration-300 ${
                  isActive
                    ? "text-white"
                    : "text-slate-500 hover:bg-white/[0.025] hover:text-slate-200"
                }`}
              >
                <span className="relative z-10">
                  {link.name}
                </span>

                <span
                  className={`absolute inset-x-2 bottom-1.5 h-px origin-center rounded-full bg-blue-500 transition-all duration-300 ${
                    isActive
                      ? "scale-x-100 opacity-100"
                      : "scale-x-0 opacity-0 group-hover/nav:scale-x-100 group-hover/nav:opacity-50"
                  }`}
                />

                {isActive && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute inset-x-2 bottom-1.5 h-px rounded-full bg-blue-500"
                    transition={{
                      type: "spring",
                      bounce: 0.15,
                      duration: 0.5,
                    }}
                  />
                )}
              </a>
            );
          })}
        </nav>

        {/* ================================================== */}
        {/* DESKTOP ACTIONS */}
        {/* ================================================== */}

        <div className="hidden items-center gap-2.5 md:flex">
          {/* Resume */}
          <a
            href="/Resume.pdf"
            download="Resume.pdf"
            className="group inline-flex h-9 items-center justify-center gap-1.5 rounded-full px-4 text-[13px] font-medium text-slate-500 transition-all duration-300 hover:bg-white/[0.04] hover:text-slate-200"
          >
            <Download className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-y-0.5" />
            Resume
          </a>

          {/* Contact */}
          <a
            href="#contact"
            onClick={(event) =>
              handleNavClick(event, "#contact")
            }
            className="group inline-flex h-9 items-center justify-center gap-1.5 rounded-full bg-white px-5 text-[13px] font-semibold tracking-[-0.01em] text-slate-950 shadow-lg shadow-white/[0.025] transition-all duration-300 hover:-translate-y-0.5 hover:bg-slate-200 hover:shadow-white/[0.05]"
          >
            Contact Me

            <span className="transition-transform duration-300 group-hover:translate-x-0.5">
              →
            </span>
          </a>
        </div>

        {/* ================================================== */}
        {/* MOBILE HAMBURGER */}
        {/* ================================================== */}

        <motion.button
          type="button"
          whileTap={{
            scale: 0.94,
          }}
          className="relative z-[110] rounded-lg border border-transparent p-2 text-slate-400 transition-all duration-300 hover:border-slate-800 hover:bg-slate-900/60 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 md:hidden"
          onClick={() =>
            setIsMobileMenuOpen((prev) => !prev)
          }
          aria-label={
            isMobileMenuOpen
              ? "Close navigation menu"
              : "Open navigation menu"
          }
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-navigation"
        >
          {isMobileMenuOpen ? (
            <X className="h-5 w-5" />
          ) : (
            <Menu className="h-5 w-5" />
          )}
        </motion.button>
      </div>

      {/* ================================================== */}
      {/* MOBILE MENU */}
      {/* ================================================== */}

      <AnimatePresence initial={false}>
        {isMobileMenuOpen && (
          <motion.div
            id="mobile-navigation"
            initial={{
              opacity: 0,
              height: 0,
            }}
            animate={{
              opacity: 1,
              height: "auto",
            }}
            exit={{
              opacity: 0,
              height: 0,
            }}
            transition={{
              duration: 0.25,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative z-[100] overflow-hidden border-t border-white/[0.06] bg-slate-950/95 backdrop-blur-xl md:hidden"
          >
            <nav className="flex flex-col gap-1.5 p-4">
              {/* Navigation Links */}
              {navLinks.map((link, index) => {
                const sectionId = link.href.substring(1);
                const isActive =
                  activeSection === sectionId;

                return (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    onClick={(event) =>
                      handleNavClick(event, link.href)
                    }
                    initial={{
                      opacity: 0,
                      x: -8,
                    }}
                    animate={{
                      opacity: 1,
                      x: 0,
                    }}
                    transition={{
                      duration: 0.25,
                      delay: index * 0.04,
                    }}
                    className={`rounded-xl border px-3.5 py-3 text-sm font-medium transition-all duration-300 ${
                      isActive
                        ? "border-blue-500/10 bg-blue-500/[0.08] text-blue-400"
                        : "border-transparent text-slate-400 hover:border-slate-800 hover:bg-slate-900/70 hover:text-white"
                    }`}
                  >
                    {link.name}
                  </motion.a>
                );
              })}

              {/* ================================================== */}
              {/* MOBILE ACTIONS */}
              {/* ================================================== */}

              <div className="mt-2 flex flex-col gap-2.5 border-t border-white/[0.07] pt-4">
                {/* Resume */}
                <a
                  href="/Resume.pdf"
                  download="Resume.pdf"
                  onClick={() =>
                    setIsMobileMenuOpen(false)
                  }
                  className="group inline-flex h-11 w-full items-center justify-center gap-2 rounded-xl border border-slate-700 bg-transparent text-sm font-medium text-slate-100 transition-all duration-300 hover:border-slate-600 hover:bg-slate-900"
                >
                  <Download className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-0.5" />

                  Resume
                </a>

                {/* Contact */}
                <a
                  href="#contact"
                  onClick={(event) =>
                    handleNavClick(event, "#contact")
                  }
                  className="inline-flex h-11 w-full items-center justify-center rounded-xl bg-white text-sm font-semibold text-slate-950 transition-all duration-300 hover:bg-slate-200"
                >
                  Contact Me
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
