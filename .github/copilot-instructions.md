<!-- .github/copilot-instructions.md - guidance for AI coding agents working on this repo -->
# Quick Agent Guide — my-awesome-portfolio

This file contains concise, actionable knowledge to make an AI coding agent immediately productive in this repository.

**Big picture**
- **Stack & purpose:** Vite + React + TypeScript single-page portfolio scaffold using shadcn-ui and Tailwind CSS. No server-side code in this repo; UI-only app with client-side routing (`react-router-dom`). See `src/main.tsx` and `src/App.tsx` for the entry and route layout.
- **Where UI lives:** Primary UI components are under `src/components/`. Project separates `ui/` (shadcn-style reusable primitives) and `portfolio/` (page-specific sections such as `AboutSection.tsx`, `HeroSection.tsx`). Use these dirs as the canonical places to add or modify components.

**Key files & directories** (quick reference)
- `src/main.tsx` — app mount point.
- `src/App.tsx` — global providers (React Query, Tooltip provider, Toasters) and router. Add routes above the catch-all `*` route.
- `src/pages/` — page entrypoints (`Index.tsx`, `NotFound.tsx`).
- `src/components/ui/` — reusable UI primitives (Radix + shadcn patterns). Prefer reusing these primitives instead of ad-hoc markup.
- `src/components/portfolio/` — portfolio sections (About, Projects, Contact). Components here are often composed into `Index.tsx`.
- `vite.config.ts` — registers alias `@` -> `./src`. Use `@/path/to/file` imports consistently.
- `tailwind.config.ts` — Tailwind is configured; content includes `./components/**/*.{ts,tsx}` and `./src/**/*.{ts,tsx}`. When adding new components, ensure paths match `content` globs so classes are picked up.

**Build / dev / lint commands**
- Install: `npm i` (project includes `bun.lockb` but `package.json` scripts expect npm/yarn/pnpm). If using Bun, adapt accordingly.
- Dev server: `npm run dev` (Vite, default port set to `8080` in `vite.config.ts`).
- Build: `npm run build` (also `build:dev` available for development-mode build).
- Preview production build: `npm run preview`.
- Lint: `npm run lint` (ESLint configured — run after edits).

**Import / alias conventions**
- Use the `@` alias for imports to avoid relative traversal. Example: `import { Toaster } from "@/components/ui/toaster"` (see `src/App.tsx`).
- Components in `src/components/ui/` are named exports matching filenames (follow existing pattern).

**Component / styling patterns to follow**
- Prefer shadcn-style small primitives in `ui/` and compose them in `portfolio/` sections.
- Use Tailwind utility classes for layout. Avoid adding new global CSS unless necessary — prefer extending `tailwind.config.ts` for theme tokens.
- When adding dark-mode aware styles or CSS variables, follow the theme tokens present in `tailwind.config.ts` (colors use CSS vars like `--primary`, `--card`, `--sidebar-*`).

**Routing & data**
- Routes are defined in `src/App.tsx` using `react-router-dom`. Add routes before the `*` catch-all (there's a comment reminding this in `App.tsx`).
- App uses `@tanstack/react-query` for client-side async state. If you add data fetching, wrap calls in `useQuery`/`useMutation` and register with the existing `QueryClient` (see `App.tsx`).

**Development-time tooling / observability**
- `vite.config.ts` includes development-only plugins; avoid removing plugins unless you understand the project impact.

**Conventions & gotchas**
- Keep `ui/` components framework-agnostic and reusable; page/section components in `portfolio/` may reference app-specific data or layout.
- Tailwind content globs include `./app/**/*.{ts,tsx}` — if you add a new top-level folder, ensure `tailwind.config.ts` is updated.
- `tsconfig.json` maps `@/*` to `./src/*` and has relaxed strictness flags. New code should still be typed idiomatically (avoid `any` where straightforward types exist).

**Small example patterns**
- Adding a new reusable button component: create `src/components/ui/button.tsx` exporting `Button` as a named export and use `@/components/ui/button` for imports.
- Adding a new page section: create `src/components/portfolio/MySection.tsx`, export default the section, import into `src/pages/Index.tsx` and include in the page composition.

**When you edit files**
- Run `npm run lint` after changes and test in dev with `npm run dev` to ensure Tailwind classes are picked up.

If anything in this file is unclear or you want more examples (tests, commit message style, or component API patterns), tell me which area to expand and I will iterate.
