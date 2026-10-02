# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

Marketing site for "Ren Software Studio", a small software consultancy: services, case studies, process, pricing, team, and a contact form that captures leads. Deployed on Vercel (`siteConfig.url` in `lib/site.ts`).

## Commands

- `npm run dev`: dev server with Turbopack on http://localhost:3000
- `npm run build`: production build with Turbopack. Run it to typecheck, since there is no separate `tsc` script.
- `npm run lint`: ESLint (flat config in `eslint.config.mjs`)
- No tests or CI are configured.

## Architecture

- **Next.js 15 App Router, React 19, TypeScript strict, Tailwind CSS 4.** Imports use the `@/*` alias for the repo root.
- **Content is data-driven, not hardcoded in pages.** Site-wide constants (name, nav links, contact email, socials, URL) live in `lib/site.ts`. Page content (services, `caseStudies`, team, pricing tiers, process steps, posts) lives in `lib/data.ts`. Pages import these arrays and `.map()` over them. To add a case study, append to `caseStudies` and put its image in `public/work/`. `app/work/[slug]/page.tsx` generates the route statically through `generateStaticParams`.
- **Two component folders:**
  - `components/ui/` holds shadcn/ui primitives (config in `components.json`). Add new ones with `npx shadcn@latest add <name>`.
  - `app/components/` holds site components (header, footer, container, section) and the framer-motion wrappers `Appear` and `Animated`, which are client components.
- **Contact form backend:** `app/contact/contact-form.tsx` (client, react-hook-form, sonner toasts) calls the server action `app/actions/send-email.ts`. That action sends the message through Gmail SMTP with nodemailer. It needs the env vars `GOOGLE_EMAIL` and `GOOGLE_APP_PASSWORD` (`.env*` files are gitignored).
- **Fonts:** Pretendard is loaded locally from `node_modules` but assigned to the `--font-geist-sans` variable. Geist Mono is assigned to `--font-geist-mono`. Both are set up in `app/layout.tsx`.

## Conventions (from `.github/copilot-instructions.md`)

- Default to Server Components. Add `"use client"` only when a component needs state, effects, or event handlers. Avoid `useEffect` and keep `useState` to a minimum.
- Use `cn()` from `lib/utils.ts` for conditional classes. Write styles in Tailwind first and avoid custom CSS.
- Use shadcn/ui components before writing custom UI.
- Use `next/image` with `alt`, width, and height set.
- Keep route-specific components next to their route under `app/<route>/`. Move a component to a shared location only when several routes use it. Put shared constants in `lib/`.
- Note that parts of the Copilot file are stale: it says there is no backend and that the fonts are Geist, which is no longer true.
