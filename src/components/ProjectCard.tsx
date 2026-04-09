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
        {/* Title row + GitHub indicator */}
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

          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.35rem",
              color: "var(--color-text-muted)",
              fontSize: "0.75rem",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
            }}
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 16 16"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              style={{ flexShrink: 0 }}
            >
              <path d="M8 0C3.58 0 0 3.58 0 8a8 8 0 0 0 5.47 7.59c.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.5-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.01.08-2.11 0 0 .67-.21 2.2.82a7.54 7.54 0 0 1 4 0c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.91.08 2.11.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8Z" />
            </svg>
            GitHub
          </span>
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
                overflowWrap: "anywhere",
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
