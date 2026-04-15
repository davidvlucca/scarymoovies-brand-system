# CLAUDE.md — ScaryMoovies Brand System (web app)

> This file is read by all agents working inside `brand-system/web/`.
> For full project context read `../PRD.md`, `../spec.md`, and `../briefing.md`.

---

## Project

Next.js 15 static web app that publishes the ScaryMoovies brand system documentation.
Deployed to Vercel as a static export (`output: "export"`).

Working directory: `D:\ScaryMoovies\brand-system\web\`

---

## Tech Stack

| Layer | Choice |
|---|---|
| Framework | Next.js 15, App Router, TypeScript strict |
| Styling | Tailwind CSS v4 (CSS-first config in `globals.css`) |
| Components | shadcn/ui — full ownership, customised to brand |
| Content | MDX — `content/*.mdx`, rendered at build time |
| Fonts | Creepster (display) + Inter (body) + JetBrains Mono (code) via `next/font` |
| Deploy | Vercel, `output: "export"`, auto-generated URL |

---

## Design Tokens — Key Values

```css
--bg-primary:     #0c0a0e   /* root background — always */
--bg-surface:     #3d3b3e   /* cards, sidebar, panels */
--accent-primary: #35005d   /* purple-500 — CTA, active states */
--accent-hover:   #5d337d   /* purple-400 — hover */
--accent-danger:  #751111   /* red-500 — errors, destructive */
--text-primary:   #f4f2f5   /* white-500 — body text */
--text-secondary: #adacae   /* white-700 — supporting text */
--border-subtle:  rgba(254,254,254,0.06)
```

Full 40-token set: `app/globals.css`.

---

## Non-Negotiable Rules

1. **Dark-first.** No light mode. No `dark:` Tailwind variants. `#0c0a0e` is always the root bg.
2. **English only.** All copy, labels, comments, variable names.
3. **No hardcoded hex in JSX.** Always use CSS variables or Tailwind token utilities.
4. **TypeScript strict.** No `any`. All component props typed.
5. **No `outline: none` without a visible focus replacement.**
6. **No runtime MDX.** Build-time only.
7. **Static export.** No server-side features, no API routes.

---

## Routes

| Route | Section | MDX Source |
|---|---|---|
| `/` | Introduction | `content/01-introduction.mdx` |
| `/brand-foundation` | Brand Foundation | `content/02-brand-foundation.mdx` |
| `/logo` | Logo | `content/03-logo.mdx` |
| `/color-system` | Color System | `content/04-color-system.mdx` |
| `/typography` | Typography | `content/05-typography.mdx` |
| `/components` | Components | `content/06-components.mdx` |
| `/interactions` | Interactions | `content/07-interactions.mdx` |
| `/voice-and-tone` | Voice & Tone | `content/08-voice-and-tone.mdx` |
| `/motion` | Motion | `content/09-motion.mdx` |
| `/usage-examples` | Usage Examples | `content/10-usage-examples.mdx` |

---

## Key Files

| Path | Purpose |
|---|---|
| `app/layout.tsx` | Root shell: fonts, sidebar, main content area |
| `app/globals.css` | All 40 design tokens + Tailwind base + prose styles |
| `lib/navigation.ts` | Section list, prev/next helpers |
| `lib/mdx.ts` | MDX component mapping (`useMDXComponents`) |
| `next.config.ts` | MDX plugin + static export config |
| `tailwind.config.ts` | Token mapping to Tailwind utilities |

---

## Agent Roles

| Agent | Scope |
|---|---|
| `design` | Token values, typography specs, visual decisions |
| `content` | MDX files, English copy accuracy |
| `dev` | Next.js components, MDX pipeline, pages |
| `devops` | Vercel config, `next.config.ts`, static export |
| `qa-content` | MDX accuracy, hex values, English only, no placeholders |
| `qa-ui` | Layout, components, a11y WCAG AA, token usage |
| `qa-deploy` | `tsc --noEmit`, ESLint, `next build`, Lighthouse ≥ 90, live URL |

Orchestrator (main Claude instance) delegates only — never runs npm, shell, or code directly.

---

## Tier List

7 tiers: **S / A / B / C / D / E / F** — never 5, never 6, never 8.

---

## Reference

Structural pattern reference (Portuguese — do NOT copy content):
`D:\ScaryMoovies\Assets\atlas-claude\BS - Overlens\`
