/**
 * Services a visitor can request a quote for. Ids match SERVICES_DATA ids so a
 * "Book" button on a service card can preselect the right option.
 */
export const QUOTE_SERVICE_OPTIONS = [
  { value: "residential", label: "Home cleaning" },
  { value: "deep-clean", label: "Deep clean / end of tenancy" },
  { value: "commercial", label: "Office & commercial" },
  { value: "specialized", label: "Healthcare & specialist" },
] as const;

export type QuoteServiceId = (typeof QUOTE_SERVICE_OPTIONS)[number]["value"];

export const QUOTE_SERVICE_IDS = QUOTE_SERVICE_OPTIONS.map((o) => o.value) as [
  QuoteServiceId,
  ...QuoteServiceId[],
];

/** Narrow an arbitrary service id (e.g. from SERVICES_DATA) to a quote option id. */
export function toQuoteServiceId(id: string | undefined): QuoteServiceId | undefined {
  return QUOTE_SERVICE_IDS.find((value) => value === id);
}
