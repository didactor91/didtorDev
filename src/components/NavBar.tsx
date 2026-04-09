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
        style={{
          maxWidth: "800px",
          margin: "0 auto",
          padding: "0 1.5rem",
          height: "56px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Wordmark */}
        <span
          style={{
            fontSize: "13px",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "var(--color-text-primary)",
            fontWeight: 400,
          }}
        >
          Dídac Torres
        </span>

        {/* Nav links */}
        <nav aria-label="Primary navigation">
          <ul
            style={{
              listStyle: "none",
              display: "flex",
              gap: "2rem",
              margin: 0,
              padding: 0,
            }}
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
                  style={{
                    fontSize: "12px",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "var(--color-text-muted)",
                    transition: "color 200ms ease",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.color =
                      "var(--color-text-primary)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.color =
                      "var(--color-text-muted)";
                  }}
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
