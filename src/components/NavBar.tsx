"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

/**
 * NavBar — React island, hydrated with client:load.
 *
 * Behaviour:
 * - Fixed to top, full width.
 * - Transparent at the top of the page (no backdrop-filter).
 * - Scroll > 10px → glass morphism: semi-transparent bg + backdrop-blur + border-bottom.
 * - Framer Motion animates opacity/backdropFilter so the transition is buttery.
 */
export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    // Set initial state
    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      role="banner"
      aria-label="Site navigation"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        display: "flex",
        justifyContent: "center",
      }}
      animate={{
        backgroundColor: scrolled ? "rgba(5, 5, 5, 0.72)" : "rgba(5, 5, 5, 0)",
        backdropFilter: scrolled ? "blur(12px)" : "blur(0px)",
        borderBottomColor: scrolled
          ? "rgba(255, 255, 255, 0.06)"
          : "rgba(255, 255, 255, 0)",
        borderBottomWidth: 1,
        borderBottomStyle: "solid",
      }}
      transition={{ duration: 0.25, ease: "easeInOut" }}
    >
      <div
        className="mx-auto flex h-14 w-full max-w-[860px] items-center justify-between px-4 sm:px-6"
        style={{
          width: "100%",
          maxWidth: "860px",
          margin: "0 auto",
        }}
      >
        {/* Wordmark */}
        <span
          className="truncate text-[11px] font-normal uppercase tracking-[0.1em] text-[var(--color-text-primary)] sm:text-[13px] sm:tracking-[0.12em]"
        >
          Dídac Torres
        </span>

        {/* Nav links */}
        <nav aria-label="Primary navigation">
          <ul
            className="m-0 flex list-none gap-4 p-0 sm:gap-8"
          >
            {(
              [
                { label: "About", href: "#about" },
                { label: "Projects", href: "#projects" },
              ] as const
            ).map(({ label, href }) => (
              <li key={href}>
                <a
                  href={href}
                  className="text-[11px] uppercase tracking-[0.08em] text-[var(--color-text-muted)] transition-colors duration-200 hover:text-[var(--color-text-primary)] sm:text-xs sm:tracking-[0.1em]"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </motion.header>
  );
}
