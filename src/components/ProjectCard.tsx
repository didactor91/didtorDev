import { motion } from "framer-motion";
import type { Project } from "../data/projects";

interface ProjectCardProps {
  project: Project;
}

/**
 * ProjectCard — React island, hydrated with client:visible.
 *
 * React is only downloaded and hydrated when this card enters the viewport,
 * keeping the initial JS bundle minimal.
 *
 * Framer Motion provides the hover state:
 * - Border colour brightens via a wrapping motion.li
 * - Title text transitions to full white
 * - External-link arrow fades in
 * - Subtle upward translateY on the content block
 *
 * All transitions are within the 0–300ms spec constraint.
 */
export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.li
      initial={false}
      whileHover="hovered"
      style={{ listStyle: "none" }}
    >
      <motion.div
        variants={{
          hovered: { borderColor: "rgba(163, 163, 163, 1)" },
        }}
        transition={{ duration: 0.25, ease: "easeInOut" }}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "0.75rem",
          borderTop: "1px solid rgba(255, 255, 255, 0.06)",
          paddingTop: "2rem",
          paddingBottom: "2rem",
        }}
      >
        {/* Title row + arrow */}
        <motion.a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`View project: ${project.title}`}
          style={{
            display: "flex",
            alignItems: "baseline",
            justifyContent: "space-between",
            gap: "1rem",
            textDecoration: "none",
            color: "inherit",
          }}
        >
          <motion.h3
            variants={{
              hovered: { color: "#ffffff" },
            }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            style={{
              fontSize: "1rem",
              fontWeight: 400,
              color: "var(--color-text-primary)",
              margin: 0,
            }}
          >
            {project.title}
          </motion.h3>

          {/* External link arrow — fades in on hover */}
          <motion.svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            variants={{
              hovered: { opacity: 1 },
            }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            style={{
              flexShrink: 0,
              color: "var(--color-text-muted)",
              opacity: 0,
            }}
          >
            <path
              d="M2 10L10 2M10 2H5M10 2v5"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </motion.svg>
        </motion.a>

        {/* Description + tags — lift slightly on hover */}
        <motion.div
          variants={{
            hovered: { y: -2 },
          }}
          transition={{ duration: 0.25, ease: "easeInOut" }}
          style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}
        >
          <p
            style={{
              fontSize: "0.875rem",
              lineHeight: 1.65,
              color: "var(--color-text-muted)",
              maxWidth: "560px",
              margin: 0,
            }}
          >
            {project.description}
          </p>
          {project.liveUrl ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontSize: "0.75rem",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: "var(--color-text-primary)",
                textDecoration: "underline",
                textUnderlineOffset: "3px",
              }}
            >
              {project.liveLabel ?? "Live"}
            </a>
          ) : null}

          {/* Tags */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "0.5rem",
              marginTop: "0.25rem",
            }}
          >
            {project.tags.map((tag) => (
              <span
                key={tag}
                style={{
                  fontSize: "10px",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "var(--color-text-muted)",
                  border: "1px solid rgba(255, 255, 255, 0.06)",
                  padding: "2px 8px",
                  borderRadius: "2px",
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </motion.li>
  );
}
