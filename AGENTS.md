# AGENTS.md — Magnolia Web

## Stack
- **Next.js 16** App Router (Turbopack). All pages under `src/app/`.
- **React 19**, **TypeScript 5** (build errors silenced in `next.config.ts`).
- **Tailwind CSS v4** + `@tailwindcss/postcss` (NO `tailwind.config.ts` — v4 is config-less; theming lives in `src/app/globals.css`).
- **shadcn/ui** (new-york style). 15 primitives in `src/components/ui/` — only what is actually used.
- **framer-motion** for animations.
- **lucide-react** for icons.
- **next-themes-style custom** `ThemeProvider` in `src/components/ThemeProvider.tsx` (dark default, `class` strategy).
- **Custom i18n** (NOT `next-intl`): `src/translations/index.ts` + `LanguageContext` (`Locale = "es" | "en"`).
- **Mempool.space + CoinGecko** for the live BTC counter. Address and constants centralized in `src/lib/btc.ts`.

## Commands
```
npm install            # install dependencies
npm run dev            # next dev on port 3000
npm run build          # next build + copy static/public into .next/standalone
npm run start          # production start (node .next/standalone/server.js)
npm run lint           # eslint .
```

> **Bun / Node**: this project is run with plain `npm` and `node`. `bun` is not
> required. If you see a `bun.lock` file, it is stale (left over from an
> earlier tooling experiment) and should be removed in favor of
> `package-lock.json`.

## Architecture
- **App Router** under `src/app/` — `page.tsx` (home), `trail/page.tsx` (index),
  `trail/[slug]/page.tsx` (station detail), `paginas/[slug]/page.tsx`
  (sobre-nosotros, contacto), `api/btc-balance/route.ts`, `api/qr-code/route.ts`.
- **Standalone output** — `output: "standalone"` in `next.config.ts`. The
  `build` script copies `.next/static` and `public/` into `.next/standalone/`
  manually.
- **Caddy** reverse proxy — `Caddyfile` listens on 8443 and forwards to port
  3000, with `?XTransformPort=N` for dynamic port routing.

## Key conventions
- **TypeScript errors silenced at build** — `ignoreBuildErrors: true` in
  `next.config.ts`. `reactStrictMode: false`. Keep code clean by hand.
- **ESLint is lenient** — many rules off (see `eslint.config.mjs`). Run
  `npm run lint` to spot-check, but it will not block.
- **shadcn/ui** — when you need a new primitive, use `npx shadcn@latest add`.
  Do NOT hand-write Radix wrappers. `cn()` helper is at `src/lib/utils.ts`.
- **`@/*` import alias** → `./src/*`.
- **Dark mode default** — `class` strategy. `defaultTheme="dark"` in
  `src/app/layout.tsx`.
- **i18n is custom, not next-intl** — translations in
  `src/translations/index.ts` via `LanguageContext`. Do not add `next-intl`.
- **Single source of truth for the BTC address** — `BTC_ADDRESS` is exported
  from `src/lib/btc.ts` and imported wherever it is needed. Never hardcode the
  address in a component or API route.

## Directories
| Path | Purpose |
|------|---------|
| `src/app/` | App Router pages and API routes |
| `src/components/` | Custom components (Header, Hero, etc.) |
| `src/components/ui/` | shadcn/ui primitives in use |
| `src/lib/` | `btc.ts` (constants), `utils.ts` (cn helper) |
| `src/translations/` | i18n strings (es/en) |
| `src/contexts/` | React contexts (Language) |
| `src/hooks/` | Custom hooks (`useStations`, `use-toast`) |
| `src/content/` | Bilingual station data (`stations.es.ts`, `stations.en.ts`) |
| `public/` | Static assets (Parque_Imagen, satoshi-statue, bitcoin-trail) |
