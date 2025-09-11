# Copilot Instructions for AI Coding Agents

## What this project is

- Company website for a 3‑developer software consultancy building custom software for clients.
- Goals: present services, showcase work, explain process, and capture leads (contact form or mailto for now).

## Stack and structure (big picture)

- Next.js 15 App Router + TypeScript (strict) + Tailwind CSS 4.
- Entry page: `app/page.tsx`; global layout/fonts/styles: `app/layout.tsx`, `app/globals.css`.
- Utilities: `lib/utils.ts` provides `cn(...classNames)` via `clsx` + `tailwind-merge`.
- Assets: `public/*.svg` used with `next/image`.
- Absolute imports via `@/*` (`tsconfig.json`). No API routes/back end yet.

## Build, run, lint

- Dev (Turbopack): `npm run dev`
- Build (Turbopack): `npm run build`
- Start: `npm run start`
- Lint: `npm run lint` (ESLint flat config, ignores `.next`, `out`, type defs). No tests/CI configured.

## Required pages and routes (create as needed)

- Home: `app/page.tsx` — hero, value prop, CTAs to Services/Work/Contact.
- Services: `app/services/page.tsx` — offerings, tech stack (icons via `lucide-react`).
- Work / Case Studies: `app/work/page.tsx` + `app/work/[slug]/page.tsx` — problem/solution/results, images from `public/`.
- About: `app/about/page.tsx` — company story, values, differentiators.
- Team: `app/team/page.tsx` — 3 developer profiles (photo, role, links).
- Process: `app/process/page.tsx` — discovery → design → build → launch → support.
- Pricing/Engagement: `app/pricing/page.tsx` — tiers or “contact us for quote”.
- Blog/Insights (optional): `app/blog/page.tsx` + `app/blog/[slug]/page.tsx` — content can be static for now.
- Careers: `app/careers/page.tsx` — openings or “no current openings”.
- Contact: `app/contact/page.tsx` — form (no backend yet; use `mailto:` or provider later).
- Legal: `app/privacy/page.tsx`, `app/terms/page.tsx`. FAQ (optional): `app/faq/page.tsx`.

## Conventions and patterns

- Styling: Tailwind; prefer `cn()` for conditional classes. Example: `cn("p-4", isPrimary && "bg-primary text-primary-foreground")`.
- Fonts: Geist/Geist Mono set in `app/layout.tsx`; body uses the font CSS variables and `antialiased`.
- Components: default to server components; add `"use client"` only when needed (state, effects, events).
- Images: use `<Image />` with assets from `public/`; keep `alt`, width/height set.
- UI: Prefer shadcn/ui components. If a component is missing, install via CLI, e.g., `npx shadcn@latest add button`, then use it consistently.

## Coding guidelines

- Prefer Server Components. Only add `"use client"` when interaction/state is required.
- Avoid `useEffect` whenever possible; prefer server data fetching (async Server Components, `fetch` in RSC) or event-driven handlers. If side effects are necessary, keep them localized and minimal.
- Minimize `useState`; derive state from props/data when feasible. Use a single state object or reducer only if it clearly simplifies logic.
- Keep components small and readable. Extract UI into pure presentational components. Prefer straightforward code over clever abstractions.
- Co-locate files by route (inside `app/...`) and reuse utilities from `lib/`. Use `cn()` for conditional classes instead of string concatenation.
- Tailwind first; avoid custom CSS unless needed. Consistently include `alt`, width, height with `<Image />`.
- Apply DRY:
  - Extract repeated JSX into small components colocated with the route (e.g., `app/services/FeatureCard.tsx`). Promote only when used across multiple routes.
  - Put shared helpers/config in `lib/` (e.g., `lib/site.ts` for nav links, company info; `lib/format.ts` for formatters).
  - Prefer config arrays + `.map()` over copy-pasted markup (e.g., services list, team members, FAQs).
  - Centralize constants (routes, contact email, company name) in a single module and import where needed.
  - Reuse class patterns via small utility fns and `cn()` instead of duplicating long Tailwind strings.
