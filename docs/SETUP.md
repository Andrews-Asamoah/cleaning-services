# Setup guide

## 1. Local development

```bash
nvm use                 # Node 22 (see .nvmrc)
corepack enable         # or: npm i -g pnpm
pnpm install            # also installs the git pre-commit hook
cp .env.example .env.local
pnpm dev
```

`pnpm check` runs lint, typecheck and format check — the same as CI.

## 2. Accounts to create (in this order)

| Service    | Used for                            | Notes                                                                                                |
| ---------- | ----------------------------------- | ---------------------------------------------------------------------------------------------------- |
| GitHub     | Repo, CI                            | Enable branch protection (below)                                                                     |
| Vercel     | Hosting, preview deploys, Analytics | Import the repo; add env vars per environment                                                        |
| Neon       | Postgres                            | Choose the **London (aws-eu-west-2)** region. Copy the pooled connection string to `DATABASE_URL`    |
| Cloudflare | R2 bucket, Turnstile                | Create a **private** bucket; create an R2 API token scoped to that bucket; create a Turnstile widget |
| Resend     | Email                               | Verify your sending domain (SPF, DKIM)                                                               |
| Upstash    | Rate limiting                       | Create a Redis database, copy the REST URL and token                                                 |
| Stripe     | Payments (Phase 5)                  | Use test mode until Phase 8                                                                          |
| Sentry     | Error monitoring                    | See below                                                                                            |

## 3. Environment variables

Every variable is documented in `.env.example`. Add the same keys in Vercel for Preview and Production. Validation lives in `lib/env/server.ts` (server) and `lib/env/public.ts` (browser). A feature that needs a key calls `requireEnv(["KEY"])` and gets a clear error if it is missing.

Generate the Better Auth secret:

```bash
openssl rand -base64 32
```

## 4. Branch workflow and protection

- `main` is production. `dev` is integration. Work on short-lived branches named `phase-1/quote-provider`, open a PR into `dev`, merge when CI is green. Promote `dev` to `main` by PR.
- Protect `main` and `dev` in **GitHub → Settings → Branches** (or with the CLI below): require a pull request, require the `quality` status check, block force pushes. Branch protection on private repos may need a paid GitHub plan.

```bash
gh api -X PUT repos/Andrews-Asamoah/cleaning-services/branches/main/protection \
  -H "Accept: application/vnd.github+json" \
  --input - <<'JSON'
{
  "required_status_checks": { "strict": true, "contexts": ["quality"] },
  "enforce_admins": false,
  "required_pull_request_reviews": { "required_approving_review_count": 0 },
  "restrictions": null,
  "allow_force_pushes": false,
  "allow_deletions": false
}
JSON
```

Repeat with `dev` in the URL.

## 5. Sentry (once you have a project)

Run the official wizard from the repo root and follow the prompts. It adds the config files and wraps `next.config.ts`:

```bash
pnpm dlx @sentry/wizard@latest -i nextjs
```

Then put `SENTRY_DSN` and `NEXT_PUBLIC_SENTRY_DSN` in `.env.local` and Vercel. It is not installed yet because it needs your DSN.

## 6. Baseline measurements to record in the README

Run once before Phase 1 starts so Phase 2 has something to beat:

```bash
ANALYZE=true pnpm build            # after adding @next/bundle-analyzer in Phase 2
npx lighthouse http://localhost:3000 --preset=desktop --view
```

## 7. Ignore the formatting commit in blame

After the one-off formatting commit, add its hash to `.git-blame-ignore-revs` and run:

```bash
git config blame.ignoreRevsFile .git-blame-ignore-revs
```
