# AGENTS.md — Magnolia Web

## Runtime
- **Use Bun, not Node.** All commands (`dev`, `build`, `start`, `install`) use `bun`.
- Production server: `NODE_ENV=production bun .next/standalone/server.js`

## Commands
```
bun install                 # install deps
bun run dev                 # next dev on port 3000 + db:push + mini-services
bun run build               # next build + copy static/public into standalone
bun run start               # production start (bun .next/standalone/server.js)
bun run lint                # eslint . (many rules disabled — see below)
bun run db:push             # push Prisma schema to SQLite (no migrations)
bun run db:generate         # regenerate Prisma client
bun run db:migrate          # run Prisma migrations (dev)
bun run db:reset            # reset DB from migrations
```

## Architecture
- **Next.js 16 App Router** — all pages/routes under `src/app/`
- **Standalone output** — `next.config.ts` sets `output: "standalone"`. The `build` script copies `.next/static` and `public/` into `.next/standalone/` manually.
- **SQLite via Prisma** — schema at `prisma/schema.prisma`, DB file at `db/custom.db`. Dev uses `db:push`, not migrations. Prisma client singleton at `src/lib/db.ts`.
- **Caddy reverse proxy** — listens on port 81, proxies to Next.js on port 3000. Supports `?XTransformPort=N` for dynamic port routing.
- **mini-services/** — optional sub-services auto-discovered by `.zscripts/` scripts via `package.json` + `dev` script. Not required for core app.

## Key conventions
- **TypeScript errors are silenced at build** — `ignoreBuildErrors: true` in next.config. `reactStrictMode: false`.
- **ESLint is lenient** — `no-unused-vars`, `exhaustive-deps`, `prefer-const`, `no-explicit-any`, etc. are all off. Lint is unlikely to block anything.
- **i18n is custom, not next-intl** — translations in `src/translations/index.ts` via `LanguageContext` (`Locale = "es" | "en"`). Do not use `next-intl` patterns.
- **shadcn/ui (new-york style)** — 48 components in `src/components/ui/`. Use `npx shadcn@latest add` to add more. `cn()` helper at `src/lib/utils.ts`.
- **`@/*` import alias** → `./src/*`
- **Dark mode via `class`** strategy + `next-themes`. Default theme is `"dark"`.
- **Styling**: Tailwind CSS v4 + `@tailwindcss/postcss` + CSS variables (neutral base).

## Directories
| Path | Purpose |
|------|---------|
| `src/app/` | App Router pages and API routes |
| `src/components/` | Custom components (Header, Hero, etc.) |
| `src/components/ui/` | shadcn/ui primitives |
| `src/lib/db.ts` | Prisma client singleton |
| `src/lib/utils.ts` | `cn()` className helper |
| `src/translations/index.ts` | i18n strings (es/en) |
| `src/contexts/` | React contexts (Language, etc.) |
| `src/hooks/` | Custom hooks |
| `prisma/` | Prisma schema |
| `db/` | SQLite database file |
| `.zscripts/` | Dev, build, start shell scripts |
| `skills/` | AI skill definitions (not part of app) |
| `examples/` | Example code (e.g. WebSocket) |
