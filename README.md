# didtorDev

Personal portfolio site for **Dídac Torres**.

Built as a fast static site with Astro + React islands, focused on clean UX, strong accessibility, and minimal client-side JavaScript.

## Stack

- Astro
- React
- TypeScript
- Tailwind CSS v4
- Framer Motion

## Main Sections

- Hero
- About
- Projects

## Featured Projects

- DidtorDev
- Tortoise GPS
- TestsResult

Project metadata is managed in `src/data/projects.ts`.

## Favicons

- `public/favicon.svg` uses the computer emoji (`💻`).
- `public/favicon.ico` is included as multi-size fallback for broad browser compatibility.

## Local Development

```bash
npm install
npm run dev
```

App runs locally at `http://localhost:4321`.

## Build And Checks

```bash
npm run build
npx astro check
```

## Scripts

| Command | Description |
| :-- | :-- |
| `npm run dev` | Start dev server |
| `npm run build` | Build production output into `dist/` |
| `npm run preview` | Preview built site locally |
| `npm run astro -- --help` | Astro CLI help |
