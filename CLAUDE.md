# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Single-page portfolio website for Akash Vasava (Full-Stack Developer). Built with React + TypeScript + Vite, using Tailwind CSS for styling and Framer Motion for animations. Uses **bun** as the package manager.

## Commands

```bash
bun run dev        # Start dev server on port 8080
bun run build      # Production build
bun run build:dev  # Development build
bun run lint       # ESLint check
bun run preview    # Preview built site
```

The only test is `src/lib/experience.test.ts` (run with `bun test`).

## Architecture

**Single route** (`/`) renders `src/pages/Index.tsx`, which stacks all section components top-to-bottom. The 404 page is `src/pages/NotFound.tsx`.

### Section Order (Index.tsx)
`Navigation` → `Hero` → `Experience` → `Projects` → `Skills` → `Certificates` → `Contact` → `Footer`

Each section below the hero is wrapped in `Section.tsx`, which renders the shell-command eyebrow (e.g. `$ ls ~/projects`) and heading.

### Path Alias
`@/` maps to `src/` — use this for all imports.

### Data
All content is hardcoded as static arrays inside each component — there is no CMS, API, or separate data file. To update content (project links, contact info, skills, certificates), edit the component directly.

Years of experience are computed from `CAREER_START` in `src/lib/experience.ts` (Feb 2024) — never hardcode "2y 9m". Test: `bun test`. The resume download is `public/resume.pdf`.

### shadcn/ui Components
Pre-built components live in `src/components/ui/`. These are Radix UI primitives styled with Tailwind. Do not modify them directly — treat them as a library. New components can be added via `bunx shadcn-ui@latest add <component>`.

## Styling System

**Tailwind CSS + CSS Variables (HSL-based)**. All colors are defined as HSL CSS variables in `src/index.css` and consumed via Tailwind's `hsl(var(--...))` pattern. Dark mode is class-based (`darkMode: ["class"]` in `tailwind.config.ts`), managed by `next-themes`.

### Key CSS Variables (defined in `src/index.css`)
| Variable | Purpose |
|---|---|
| `--primary` | Amber accent (buttons, highlights, string values) |
| `--accent` | Cyan prompt color (`$`, tags, JSON keys) |
| `--ok` | Green status / `+` bullets (Tailwind `text-ok`, `bg-ok`) |
| `--background` / `--foreground` / `--card` / `--border` | Page base; dark is the default theme |

### Custom Utility Classes (`src/index.css`)
- `.bg-grid` — faint terminal grid behind the top of the page
- `.caret` — blinking block cursor after the hero name

### Font
Geist (`font-sans`) and Geist Mono (`font-mono`), loaded from Google Fonts in `index.html`.

## Animation Conventions

All animations use **Framer Motion**. Standard patterns used throughout:

- **Hover states:** cards lift 2px and get an amber border (Tailwind classes, no motion).
- Sections fade in once via `whileInView` in `Section.tsx`.

## Theme System

`next-themes` (`ThemeProvider` in `App.tsx`) persists the user's theme choice and applies a `.dark` class to the `<html>` element. `ThemeToggle.tsx` uses a `mounted` check to prevent hydration mismatch; its label names the mode you switch to ("Light mode" / "Dark mode").

## Key Component Notes

**Navigation:** Sticky header with `./section` links (hidden below `md`), theme toggle and "hire me".

**Hero:** Exports `TerminalWindow` (the window-chrome card), reused by Contact.

**Projects:** Exports `ProjectCard`, reused by Certificates. `wide: true` spans both columns.

**Certificates:** Append to the `certificates` array to add one.

**Contact:** Contact rows with copy buttons, plus resume download.

## TypeScript

Strict mode is **disabled** (`tsconfig.app.json`). The codebase uses TypeScript primarily for inference and autocompletion rather than strict type safety. Prefer `typeof arrayVariable[number]` for typing data-driven items rather than defining separate interfaces.
