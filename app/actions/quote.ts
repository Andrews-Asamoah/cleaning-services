"use server";

import { z } from "zod";
import { quoteSchema } from "@/lib/validation/quote";

export type QuoteActionResult =
  | { ok: true; reference: string }
  | { ok: false; error: "validation"; fieldErrors: Record<string, string[] | undefined> }
  | { ok: false; error: "not_configured" };

/**
 * Receives a quote request from the quote dialog.
 *
 * Phase 1.1: validates on the server and reports honestly that online
 * submission is not switched on yet, so the dialog can show call/email options
 * instead of a fake success message.
 *
 * TODO(Phase 1.2): rate limit, verify Turnstile, save with Drizzle, email the
 * team and the customer, then return `{ ok: true, reference }`.
 */
export async function submitQuoteRequest(input: unknown): Promise<QuoteActionResult> {
  const parsed = quoteSchema.safeParse(input);
  if (!parsed.success) {
    return {
      ok: false,
      error: "validation",
      fieldErrors: z.flattenError(parsed.error).fieldErrors,
    };
  }

  // Honeypot filled: pretend success so bots learn nothing, store nothing.
  if (parsed.data.website) {
    return { ok: true, reference: "AC-000000" };
  }

  return { ok: false, error: "not_configured" };
}
