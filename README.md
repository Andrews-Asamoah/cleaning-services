# AuraClean

Cleaning and staffing website for **AuraClean**, launching in **London, UK**. Home customers (B2C) are the primary audience; commercial/B2B and recruiting are secondary paths.

Built with Next.js 16, React 19, Tailwind CSS v4 and shadcn/ui (Base UI).

## Quick start

```bash
nvm use && corepack enable
pnpm install
cp .env.example .env.local
pnpm dev          # http://localhost:3000
```

| Script                              | What it does                                 |
| ----------------------------------- | -------------------------------------------- |
| `pnpm dev`                          | Start the dev server                         |
| `pnpm build` / `pnpm start`         | Production build and server                  |
| `pnpm lint`                         | ESLint                                       |
| `pnpm typecheck`                    | Generate route types, then `tsc --noEmit`    |
| `pnpm format` / `pnpm format:check` | Prettier write / check                       |
| `pnpm check`                        | Lint + typecheck + format check (same as CI) |

## Project layout

```
app/            Routes (home, services, careers, contact), layout, sitemap
components/     UI by area (home, services, careers, contact) + ui/ primitives
lib/            site-config (single source of truth), utils, env validation
docs/           Decisions (ADRs), setup guide
```

## Key decisions

See [`docs/decisions/0001-brand-market-stack.md`](docs/decisions/0001-brand-market-stack.md).

| Area                    | Choice                                |
| ----------------------- | ------------------------------------- |
| Market                  | London, UK (`en-GB`, GBP)             |
| Primary CTA             | B2C home cleaning quote               |
| Database                | Neon Postgres (London) + Drizzle      |
| Auth                    | Better Auth                           |
| File storage            | Cloudflare R2 (private, signed URLs)  |
| Email / Payments / Bots | Resend / Stripe / Turnstile + Upstash |
| Hosting                 | Vercel (`lhr1`)                       |

## Configuration

Brand, contact, hours and service areas live in `lib/site-config.ts`. Anything marked `// PLACEHOLDER` must be replaced with real business details before launch. Environment variables are documented in `.env.example` and validated in `lib/env/`.

## Docs

- [Setup guide](docs/SETUP.md): accounts, env vars, branch protection, Sentry
- [Contributing](CONTRIBUTING.md): branch workflow and rules

## Status

Phase 0 (foundations) complete. Next: Phase 1, fix what is broken (working quote dialog, real form submission, one data source, UK content pass).

## Performance baseline

To be recorded before Phase 2 (bundle size and Lighthouse mobile scores for `/`, `/services`, `/careers`, `/contact`).
