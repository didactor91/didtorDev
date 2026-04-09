# Skill Registry — didtorDev

Generated: 2026-04-09
Project: didtorDev (Astro 6 + React 19 + Tailwind v4)

## Agent Convention Files

| File | Level | Notes |
|------|-------|-------|
| `~/.config/opencode/AGENTS.md` | User | Global agent rules: personality, tone, philosophy, expertise |

No project-level agent convention files found (AGENTS.md, CLAUDE.md, .cursorrules, GEMINI.md).

## Available Skills

### SDD Workflow Skills (orchestrator-launched)

| Skill | Trigger | Location |
|-------|---------|----------|
| `sdd-init` | `sdd init`, `iniciar sdd`, `openspec init` | `~/.config/opencode/skills/sdd-init/` |
| `sdd-explore` | Orchestrator → explore/investigate a feature | `~/.config/opencode/skills/sdd-explore/` |
| `sdd-propose` | Orchestrator → create/update proposal | `~/.config/opencode/skills/sdd-propose/` |
| `sdd-spec` | Orchestrator → write/update specs | `~/.config/opencode/skills/sdd-spec/` |
| `sdd-design` | Orchestrator → write/update technical design | `~/.config/opencode/skills/sdd-design/` |
| `sdd-tasks` | Orchestrator → create/update task breakdown | `~/.config/opencode/skills/sdd-tasks/` |
| `sdd-apply` | Orchestrator → implement tasks from a change | `~/.config/opencode/skills/sdd-apply/` |
| `sdd-verify` | Orchestrator → verify implementation vs specs | `~/.config/opencode/skills/sdd-verify/` |
| `sdd-archive` | Orchestrator → archive completed change | `~/.config/opencode/skills/sdd-archive/` |
| `sdd-onboard` | Orchestrator → onboard user through SDD cycle | `~/.config/opencode/skills/sdd-onboard/` |

### User-Facing Skills

| Skill | Trigger | Location |
|-------|---------|----------|
| `branch-pr` | Creating a PR, opening a pull request | `~/.config/opencode/skills/branch-pr/` |
| `issue-creation` | Creating a GitHub issue, reporting a bug, requesting a feature | `~/.config/opencode/skills/issue-creation/` |
| `judgment-day` | "judgment day", "review adversarial", "dual review", "juzgar" | `~/.config/opencode/skills/judgment-day/` |
| `find-docs` | Asking about a library, framework, SDK, CLI tool, cloud service | `~/.agents/skills/find-docs/` |
| `go-testing` | Writing Go tests, using teatest, Bubbletea TUI testing | `~/.config/opencode/skills/go-testing/` |
| `skill-creator` | Creating a new skill, adding agent instructions | `~/.config/opencode/skills/skill-creator/` |
| `skill-registry` | "update skills", "skill registry", "actualizar skills" | `~/.config/opencode/skills/skill-registry/` |

## Project Standards (auto-resolved for SDD sub-agents)

**Stack**: Astro 6 + React 19 + TypeScript (strict) + Tailwind CSS v4 + Framer Motion
**Deployment**: Hetzner VPS (static build via `astro build`, served via Nginx)
**Persistence Mode**: engram
**Strict TDD Mode**: ❌ disabled (no test runner installed)

### Apply Rules
- Follow Astro's island architecture: `.astro` for pages/layouts, `.tsx` for interactive React islands
- Use Tailwind CSS v4 utility classes (no `@apply` bloat — prefer inline classes)
- Animations via Framer Motion — prefer `motion` components over CSS transitions for interactive elements
- TypeScript strict mode is ON — no `any`, no untyped props
- No build step after changes (per AGENTS.md: "Never build after changes")

### Verify Rules
- No test runner available — verify by manual inspection + type checking (`tsc --noEmit`)
- Compare implementation against every spec scenario by code review
