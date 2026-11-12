/**
 * Server-only environment variables, validated with zod.
 *
 * Every integration is optional at schema level so the site builds and runs
 * before each phase is wired up. A feature calls `requireEnv([...])` at the
 * point of use and gets one clear error naming exactly what is missing.
 */
import "server-only";
import { z } from "zod";

const optionalString = z
  .string()
  .optional()
  .transform((v) => (v && v.length > 0 ? v : undefined));

const serverSchema = z.object({
  NODE_ENV: z.enum(["development", "test", "production"]).default("development"),

  // Database (Neon Postgres) — Phase 1
  DATABASE_URL: optionalString,

  // Better Auth — Phase 1
  BETTER_AUTH_SECRET: optionalString,
  BETTER_AUTH_URL: optionalString,

  // Cloudflare R2 — Phase 1
  R2_ACCOUNT_ID: optionalString,
  R2_ACCESS_KEY_ID: optionalString,
  R2_SECRET_ACCESS_KEY: optionalString,
  R2_BUCKET: optionalString,

  // Email (Resend) — Phase 1
  RESEND_API_KEY: optionalString,
  EMAIL_FROM: optionalString,
  EMAIL_TEAM_INBOX: optionalString,

  // Bot protection and rate limiting — Phase 1
  TURNSTILE_SECRET_KEY: optionalString,
  UPSTASH_REDIS_REST_URL: optionalString,
  UPSTASH_REDIS_REST_TOKEN: optionalString,

  // Payments (Stripe) — Phase 5
  STRIPE_SECRET_KEY: optionalString,
  STRIPE_WEBHOOK_SECRET: optionalString,

  // Monitoring (Sentry)
  SENTRY_DSN: optionalString,
});

export type ServerEnv = z.infer<typeof serverSchema>;

let cached: ServerEnv | undefined;

/** Parse and cache process.env. Throws a readable error if a value is malformed. */
export function getServerEnv(): ServerEnv {
  if (cached) return cached;
  const result = serverSchema.safeParse(process.env);
  if (!result.success) {
    const issues = result.error.issues
      .map((i) => `  - ${i.path.join(".") || "(root)"}: ${i.message}`)
      .join("\n");
    throw new Error(`Invalid environment variables:\n${issues}`);
  }
  cached = result.data;
  return cached;
}

/**
 * Assert that the given keys are set and return them as non-optional.
 *
 *   const { DATABASE_URL } = requireEnv(["DATABASE_URL"]);
 */
export function requireEnv<K extends keyof ServerEnv>(
  keys: readonly K[],
): { [P in K]: NonNullable<ServerEnv[P]> } {
  const env = getServerEnv();
  const missing = keys.filter((k) => env[k] === undefined || env[k] === "");
  if (missing.length > 0) {
    throw new Error(
      `Missing required environment variable(s): ${missing.join(", ")}. ` +
        `See .env.example and docs/SETUP.md.`,
    );
  }
  return Object.fromEntries(keys.map((k) => [k, env[k]])) as {
    [P in K]: NonNullable<ServerEnv[P]>;
  };
}
