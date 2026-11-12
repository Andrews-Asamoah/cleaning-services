/**
 * Runs once when the Next.js server starts. Fails fast on malformed env vars
 * instead of at the first request. Set SKIP_ENV_VALIDATION=1 to bypass.
 */
export async function register() {
  if (process.env.NEXT_RUNTIME === "nodejs" && !process.env.SKIP_ENV_VALIDATION) {
    const { getServerEnv } = await import("./lib/env/server");
    getServerEnv();
  }
}
