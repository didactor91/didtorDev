export interface Project {
  title: string;
  description: string;
  url: string;
  tags: string[];
}

export const projects: Project[] = [
  {
    title: "Gentleman Dots",
    description:
      "Opinionated macOS/Linux developer environment: Neovim, tmux, Zellij, and shell configs designed for keyboard-first, distraction-free engineering.",
    url: "https://github.com/Gentleman-Programming/Gentleman.Dots",
    tags: ["neovim", "tmux", "zellij", "lua", "shell"],
  },
  {
    title: "Agent Teams Lite",
    description:
      "Lightweight multi-agent orchestration framework for AI workflows. Issue-first enforcement, SDD lifecycle, and skill-based specialization.",
    url: "https://github.com/didactordev",
    tags: ["ai", "agents", "typescript", "automation"],
  },
  {
    title: "Clean Architecture Templates",
    description:
      "Production-ready project scaffolds applying hexagonal architecture principles across React, Node, and Go stacks.",
    url: "https://github.com/didactordev",
    tags: ["architecture", "react", "node", "go", "patterns"],
  },
  {
    title: "didtorDev",
    description:
      "This site — a silent luxury digital identity built with Astro, React islands, Tailwind v4, and Framer Motion. Zero compromise on performance.",
    url: "https://github.com/didactordev",
    tags: ["astro", "react", "tailwind", "framer-motion"],
  },
  {
    title: "SDD — Spec-Driven Development",
    description:
      "A structured AI-assisted development workflow: propose → spec → design → tasks → apply → verify → archive. Kept in sync across sessions via Engram.",
    url: "https://github.com/didactordev",
    tags: ["workflow", "ai", "engineering", "process"],
  },
];
