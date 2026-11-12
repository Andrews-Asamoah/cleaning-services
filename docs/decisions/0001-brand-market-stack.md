# ADR 0001 — Brand, market and backend stack

- **Status:** Accepted
- **Phase:** 0 (Decisions and foundations)

## Decisions

| Area             | Decision                                                                                                         |
| ---------------- | ---------------------------------------------------------------------------------------------------------------- |
| Brand name       | **AuraClean**. The earlier "SparkClean Group" name in `site-config.ts` is retired.                               |
| Launch market    | **London, United Kingdom.** Locale `en-GB`, currency GBP (£), time zone `Europe/London`.                         |
| Primary audience | **B2C** (homes and renters) is the primary call to action. B2B/commercial stays on the site as a secondary path. |
| Hosting          | Vercel, functions pinned to `lhr1` (London) in `vercel.json`.                                                    |
| Database         | Postgres on **Neon**, London region, with **Drizzle ORM**.                                                       |
| Authentication   | **Better Auth** (admin login in Phase 1/6, customer portal in Phase 7).                                          |
| File storage     | **Cloudflare R2** (S3-compatible, private bucket, signed URLs) for CVs and customer photos.                      |
| Email            | Resend                                                                                                           |
| Payments         | Stripe (Phase 5)                                                                                                 |
| Bot protection   | Cloudflare Turnstile + Upstash rate limiting                                                                     |
| Monitoring       | Vercel Web Analytics (cookieless) now; Sentry once a DSN exists                                                  |

## Consequences

- `lib/site-config.ts` is the single source of truth for brand, market and contact details. Anything still marked `// PLACEHOLDER` must be replaced with real business facts before launch.
- The homepage hero, copy and navigation are written for home customers first. The current hero copy is B2B-flavoured and is reworked in Phase 3.
- All user-facing copy must be UK English with UK terms (end of tenancy, deposit, DBS, COSHH). US terms (EPA, OSHA, "$") are removed in Phase 1.5.
- Better Auth + Drizzle means the auth tables live in our own Postgres database; they are created via Drizzle migrations in Phase 1.
- R2 buckets are private. The browser never receives long-lived credentials, only short-lived signed URLs. Consider R2's EU jurisdiction option when creating the bucket if you want data kept in the UK/EU, and confirm it against your privacy notice.

## Still open (needs real business input)

- Real phone, email, registered address, opening hours, service-area boroughs and opening prices.
- Insurance, accreditations and DBS process details. Do not publish claims you cannot evidence.
- The production domain (`auraclean.co.uk` in the config is a placeholder).
