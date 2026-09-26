export interface ServiceHighlight {
  id: string;
  title: string;
  category: string;
  tagline: string;
  description: string;
  features: string[];
  pricingEstimate: string;
  image: string;
  iconKey: "home" | "sparkles" | "building";
}

import siteConfig from "@/lib/site-config";

export const SERVICE_HIGHLIGHTS: ServiceHighlight[] = [
  {
    id: "residential",
    title: "Residential Cleaning",
    category: "Homes",
    tagline: "Regular upkeep for homes and apartments of any size.",
    description:
      "Recurring visits tailored to your schedule, covering kitchens, bathrooms, living spaces, and bedrooms with eco-friendly products.",
    features: ["Weekly or bi-weekly scheduling", "Eco-friendly products included", "Background-checked cleaners"],
    pricingEstimate: siteConfig.pricingTiers[0].price,
    image: "/images/residential-cleaning.jpg", // PLACEHOLDER
    iconKey: "home",
  },
  {
    id: "deep-clean",
    title: "Deep Cleaning",
    category: "Move-in / Move-out",
    tagline: "Intensive top-to-bottom clean for resets and transitions.",
    description:
      "Inside appliances, baseboards, vents, and every hard-to-reach corner — built for move-ins, move-outs, and seasonal resets.",
    features: ["Any property size", "Inside appliances & cabinets", "Satisfaction guarantee"],
    pricingEstimate: siteConfig.pricingTiers[2].price,
    image: "/images/deep-clean.jpg", // PLACEHOLDER
    iconKey: "sparkles",
  },
  {
    id: "commercial",
    title: "Commercial & Office Contracts",
    category: "Business",
    tagline: "Ongoing janitorial support for offices and facilities.",
    description:
      "Scheduled office and facility cleaning with verified, vetted staff and flexible contract terms.",
    features: ["Flexible contract terms", "Verified & insured staff", "Fast B2B onboarding"],
    pricingEstimate: "Custom quote",
    image: "/images/commercial-cleaning.jpg", // PLACEHOLDER
    iconKey: "building",
  },
];