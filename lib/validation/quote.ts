import { z } from "zod";
import { QUOTE_SERVICE_IDS } from "@/lib/quote/config";

/** Standard UK postcode shape (e.g. EC1A 1AA, SW1A 2AA, M1 1AE). */
const UK_POSTCODE = /^[A-Za-z]{1,2}\d[A-Za-z\d]?\s*\d[A-Za-z]{2}$/;
/** UK numbers after stripping spaces/dashes/brackets: 0xxxxxxxxx or +44xxxxxxxxxx. */
const UK_PHONE = /^(?:\+44|0)\d{9,10}$/;

export const quoteSchema = z.object({
  fullName: z.string().trim().min(2, "Please enter your name").max(100, "That name is too long"),
  email: z.email("Enter a valid email address").max(254),
  phone: z
    .string()
    .trim()
    .refine((v) => UK_PHONE.test(v.replace(/[\s()-]/g, "")), "Enter a UK phone number"),
  postcode: z
    .string()
    .trim()
    .refine((v) => UK_POSTCODE.test(v), "Enter a valid UK postcode"),
  serviceId: z.enum(QUOTE_SERVICE_IDS, "Choose a service"),
  message: z.string().trim().max(1000, "Please keep this under 1,000 characters").optional(),
  /** Honeypot: real people never see or fill this. */
  website: z.string().optional(),
});

export type QuoteFormValues = z.infer<typeof quoteSchema>;
