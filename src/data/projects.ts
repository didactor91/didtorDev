export interface Project {
  title: string;
  description: string;
  url: string;
  liveUrl?: string;
  liveLabel?: string;
  tags: string[];
}

export const projects: Project[] = [
  {
    title: "DidtorDev",
    description:
      "This site — a silent luxury digital identity built with Astro, React islands, Tailwind v4, and Framer Motion. Zero compromise on performance.",
    url: "https://github.com/didactor91/didtorDev",
    tags: ["astro", "react", "tailwind", "framer-motion"],
  },
  {
    title: "Tortoise GPS",
    description:
      "Is a web application for real-time truck fleet tracking. GPS hardware transmits NMEA-like frames over TCP; the system ingests them, persists the positions, and pushes live updates to the map via GraphQL Subscriptions (WebSocket).",
    url: "https://github.com/didactor91/TorToise-GPS",
    liveUrl: "https://tortoisegps.didtor.dev",
    liveLabel: "Live at tortoisegps.didtor.dev",
    tags: ["react", "node", "mongodb", "graphql"],
  },
  {
    title: "TestsResult",
    description:
      "Static web app to calculate multiple-choice test results from official templates, with multilingual UI and a live demo on GitHub Pages.",
    url: "https://github.com/didactor91/TestsResult",
    tags: ["vite", "tailwind", "javascript", "github-pages"],
  },
];
