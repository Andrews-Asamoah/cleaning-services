# Contributing

1. Branch from `dev`: `git switch -c phase-1/quote-provider dev`
2. Make small, focused commits. The pre-commit hook lints and formats staged files.
3. Run `pnpm check` before pushing.
4. Open a PR into `dev` using the template. CI (`quality`) must pass.
5. Delete the branch after merge.

Rules of thumb:

- Brand, contact and market details come from `lib/site-config.ts`. Never hard-code "AuraClean", prices or phone numbers in components.
- Add every new environment variable to `.env.example` and `lib/env/server.ts` (or `public.ts`).
- Do not add claims you cannot evidence (review counts, accreditations, statistics).
- Prefer server components. Add `"use client"` only for genuinely interactive leaves.
