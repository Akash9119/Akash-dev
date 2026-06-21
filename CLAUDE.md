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

There are no tests in this project.

## Architecture

**Single route** (`/`) renders `src/pages/Index.tsx`, which stacks all section components top-to-bottom. The 404 page is `src/pages/NotFound.tsx`.

### Section Order (Index.tsx)
`Navigation` → `Hero` → `About` → `Skills` → `Projects` → `Achievements` → `Contact` → `Footer`

### Path Alias
`@/` maps to `src/` — use this for all imports.

### Data
All content is hardcoded as static arrays inside each component — there is no CMS, API, or separate data file. To update content (project links, contact info, skills), edit the component directly.

### shadcn/ui Components
Pre-built components live in `src/components/ui/`. These are Radix UI primitives styled with Tailwind. Do not modify them directly — treat them as a library. New components can be added via `bunx shadcn-ui@latest add <component>`.

## Styling System

**Tailwind CSS + CSS Variables (HSL-based)**. All colors are defined as HSL CSS variables in `src/index.css` and consumed via Tailwind's `hsl(var(--...))` pattern. Dark mode is class-based (`darkMode: ["class"]` in `tailwind.config.ts`), managed by `next-themes`.

### Key CSS Variables (defined in `src/index.css`)
| Variable | Light Value | Purpose |
|---|---|---|
| `--primary` | `200 100% 45%` | Blue accent |
| `--secondary` | `280 70% 60%` | Purple accent |
| `--accent` | `160 60% 50%` | Teal accent |
| `--background` / `--foreground` | White / near-black | Page base |

### Custom Utility Classes (`src/index.css`)
- `.gradient-primary` — 135deg gradient from primary → secondary color
- `.text-gradient` — applies gradient as text color via `background-clip: text`
- `.glass-effect` — frosted glass card (blur + semi-transparent border)
- `.scrollbar-hide` — hides scrollbar while preserving scroll behavior

### Font
Inter (loaded from Google Fonts via `index.html` preconnect). Set as `font-sans` in `tailwind.config.ts`.

## Animation Conventions

All animations use **Framer Motion**. Standard patterns used throughout:

- **Scroll-triggered:** `useInView` hook with `triggerOnce: true` — animations fire once when element enters viewport.
- **Staggered children:** delay calculated as `index * 0.1` seconds per item.
- **Hover states:** Cards use `whileHover={{ scale: 1.02 }}` or similar.
- **Modal entry/exit:** `AnimatePresence` wrapping the `Lightbox` component handles unmount animations.
- **Mouse tracking:** The Projects section tracks `mousemove` for a gradient overlay effect.

## Theme System

`next-themes` (`ThemeProvider` in `App.tsx`) persists the user's theme choice and applies a `.dark` class to the `<html>` element. `ThemeToggle.tsx` uses a `mounted` check to prevent hydration mismatch before rendering the Sun/Moon icon.

## Key Component Notes

**Navigation:** Fixed/sticky header. Adds a background blur on scroll via a `scrolled` state. Mobile menu is a sheet that closes on link click. Anchor links (`#section-id`) drive in-page navigation.

**Lightbox:** Reusable modal in `src/components/Lightbox.tsx`. Used by both Projects and Achievements. Accepts `isOpen`, `onClose`, and `children` props.

**Projects:** Two featured projects — Film-Nestle and Text Transformer. Each project card has a mouse-tracking gradient overlay. Clicking a card opens the Lightbox with project details.

**Achievements:** Horizontal scrollable carousel using `embla-carousel-react`. Currently the section content (certificate cards) is commented out in the component — the structure and carousel logic are in place.

**Contact:** Four static contact cards (Phone, Email, LinkedIn, X/Twitter). No form — all links are `mailto:`, `tel:`, or external profile URLs.

## TypeScript

Strict mode is **disabled** (`tsconfig.app.json`). The codebase uses TypeScript primarily for inference and autocompletion rather than strict type safety. Prefer `typeof arrayVariable[number]` for typing data-driven items rather than defining separate interfaces.
