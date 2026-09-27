/**
 * site-config.ts
 * ─────────────────────────────────────────────────────────────────────────────
 * Single source of truth for all business details (UK Localized Edition).
 * Search for "// PLACEHOLDER" to find every invented value that needs replacing
 * before going live. NO real contact details appear anywhere else in the app —
 * all components import from here.
 */

export interface ServiceArea {
  name: string
  borough?: string
}

export interface SocialLink {
  label: string
  href: string
  icon: "facebook" | "instagram" | "linkedin" | "twitter"
}

export interface Testimonial {
  quote: string
  author: string
  role: string
  avatarInitials: string
}

export interface JobListing {
  id: string
  title: string
  type: "Full-time" | "Part-time" | "Contract"
  location: string
  description: string
  requirements: string[]
}

export interface PricingTier {
  name: string
  price: string          // e.g. "From £120" — PLACEHOLDER
  period: string         // e.g. "per visit"
  description: string
  features: string[]
  highlighted: boolean
}

export interface HoursEntry {
  days: string
  hours: string
}

const siteConfig = {
  /** ── Identity ─────────────────────────────────────────────────────────── */
  name: "AuraClean UK",
  tagline: "Pristine Spaces, Trusted British Professionals",
  description:
    "Elite professional commercial cleaning and staffing services across London and the UK. " +
    "DBS-checked staff, 100% satisfaction guaranteed, and eco-friendly British formulations.",

  /** ── Contact (UK Localized) ───────────────────────────────────────────── */
  phone: "+44 (0) 20 7946 0999",                    // PLACEHOLDER
  phoneHref: "tel:+442079460999",                    // PLACEHOLDER
  email: "inquiries@auracleanstaffing.co.uk",        // PLACEHOLDER
  emailHref: "mailto:inquiries@auracleanstaffing.co.uk", // PLACEHOLDER
  companyRegistrationNo: "SC-94820184",             // PLACEHOLDER - Companies House ref
  vatNumber: "GB 984 2018 42",                      // PLACEHOLDER

  address: {
    building: "The Scalpel, Level 14",               // PLACEHOLDER
    street: "52 Lime Street",                       // PLACEHOLDER
    city: "London",                                 // PLACEHOLDER
    postcode: "EC3M 7AF",                           // PLACEHOLDER
    country: "United Kingdom",
    full: "The Scalpel, Level 14, 52 Lime Street, London, EC3M 7AF", // PLACEHOLDER
    mapEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2483.298285746761!2d-0.0825!3d51.5127!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zTWFwIFBsYWNlaG9sZGVy!5e0!3m2!1sen!2suk!4v1700000000000!5m2!1sen!2suk",
    // PLACEHOLDER — replace with real Google Maps embed URL for London office
  },

  /** ── Hours ────────────────────────────────────────────────────────────── */
  hours: [
    { days: "Monday – Saturday", hours: "08:00 am – 08:00 pm GMT" },
    { days: "Sunday",            hours: "Emergency & Contract Dispatch Only" },
  ] satisfies HoursEntry[],

  /** ── Social links ─────────────────────────────────────────────────────── */
  socials: [
    { label: "Facebook",  href: "https://facebook.com/auracleanuk",  icon: "facebook"  },
    { label: "Instagram", href: "https://instagram.com/auracleanuk", icon: "instagram" },
    { label: "LinkedIn",  href: "https://linkedin.com/company/auracleanuk", icon: "linkedin" },
    { label: "Twitter",   href: "https://twitter.com/auracleanuk",   icon: "twitter"   },
  ] satisfies SocialLink[],
  // PLACEHOLDER — replace all social hrefs with real UK profiles

  /** ── Service areas (London & UK Regions) ──────────────────────────────── */
  serviceAreas: [
    { name: "City of London", borough: "Financial District" },
    { name: "Canary Wharf", borough: "Tower Hamlets" },
    { name: "Westminster", borough: "Central London" },
    { name: "Camden & Islington", borough: "North London" },
    { name: "Kensington & Chelsea", borough: "West London" },
    { name: "Greenwich", borough: "South East London" },
  ] satisfies ServiceArea[],
  // PLACEHOLDER — replace with exact operating boroughs

  /** ── Trust stats ──────────────────────────────────────────────────────── */
  stats: {
    yearsInBusiness: "12+",          // PLACEHOLDER
    clientsSatisfied: "4,200+",      // PLACEHOLDER
    verifiedCleaners: "120+",        // PLACEHOLDER
    satisfactionRate: "99.2%",       // PLACEHOLDER
  },

  /** ── Testimonials ─────────────────────────────────────────────────────── */
  testimonials: [
    {
      quote:
        "AuraClean transformed our corporate headquarters in Canary Wharf. Their attention to detail, " +
        "punctuality, and eco-conscious British standards are second to none.",
      author: "Alistair Sterling",            // PLACEHOLDER
      role: "Operations Director, Apex Finance UK", // PLACEHOLDER
      avatarInitials: "AS",
    },
    {
      quote:
        "We've partnered with three commercial agencies in London. AuraClean is the only provider " +
        "that maintains consistent quality and fully vetted W-2/PAYE staff.",
      author: "Dr. Beatrice Vance",           // PLACEHOLDER
      role: "Managing Partner, Harley Street Clinic", // PLACEHOLDER
      avatarInitials: "BV",
    },
    {
      quote:
        "The deep clean prior to our Covent Garden flagship launch was immaculate. They worked around our " +
        "fit-out schedule seamlessly.",
      author: "Marcus & Siobhan Thorne",      // PLACEHOLDER
      role: "Retail Directors, Lumina UK",    // PLACEHOLDER
      avatarInitials: "MT",
    },
  ] satisfies Testimonial[],

  /** ── Pricing tiers (Commercial & Residential Reference in GBP) ───────── */
  pricingTiers: [
    {
      name: "Essential Workplace",
      price: "From £115",            // PLACEHOLDER
      period: "per visit",
      description: "Regular routine maintenance cleaning for boutique offices and studios.",
      features: [
        "Up to 2,500 sq ft coverage",
        "Washroom sanitation & kitchen upkeep",
        "Eco-friendly EU/UK Ecolabel products",
        "Weekly or bi-weekly cadence",
      ],
      highlighted: false,
    },
    {
      name: "Corporate Standard",
      price: "From £185",            // PLACEHOLDER
      period: "per visit",
      description: "Our flagship comprehensive plan for multi-floor corporate offices.",
      features: [
        "Up to 6,000 sq ft coverage",
        "Touchpoint electrostatic sanitization",
        "BICS-certified cleaning specialists",
        "Dedicated account supervisor",
        "Enhanced £5M public liability insurance",
      ],
      highlighted: true,
    },
    {
      name: "Enterprise Deep Clean",
      price: "From £340",            // PLACEHOLDER
      period: "per session",
      description: "Intensive top-to-bottom restoration clean for handovers and seasonal resets.",
      features: [
        "Unlimited square footage scope",
        "Carpet extraction & floor burnishing",
        "High-level ventilation & duct dusting",
        "Full audit trail & compliance sign-off",
      ],
      highlighted: false,
    },
  ] satisfies PricingTier[],

  /** ── Job listings (UK Roles) ──────────────────────────────────────────── */
  jobListings: [
    {
      id: "commercial-cleaner-london",
      title: "Commercial Cleaning Technician",
      type: "Full-time",
      location: "London, UK (Zone 1-3)",
      description:
        "Join our elite London commercial division maintaining prestigious offices and medical hubs. " +
        "Competitive London Living Wage rates guaranteed.",
      requirements: [
        "1+ years commercial cleaning experience", // PLACEHOLDER
        "Valid right to work in the UK",
        "Enhanced DBS check (or willingness to undertake)",
        "Professional demeanor and reliable transit",
      ],
    },
    {
      id: "supervisor-lead",
      title: "Cleaning Operations Team Lead",
      type: "Full-time",
      location: "London, UK",
      description:
        "Supervise custodial teams across key corporate accounts in the City and Canary Wharf. " +
        "Responsible for quality auditing and client liaison.",
      requirements: [
        "2+ years supervisory experience in FM or cleaning", // PLACEHOLDER
        "BICS or equivalent cleaning supervisory certification",
        "Strong interpersonal and leadership skills",
        "Full UK driving licence is a bonus",
      ],
    },
    {
      id: "part-time-cleaner",
      title: "Part-Time Evening Specialist",
      type: "Part-time",
      location: "Greater London",
      description:
        "Flexible evening shifts (18:00 – 22:00) maintaining modern co-working spaces and retail showrooms.",
      requirements: [
        "Punctual, meticulous, and trustworthy",
        "Full training provided via Aura Academy",
        "Eligible to work in the UK",
      ],
    },
  ] satisfies JobListing[],

  /** ── Culture perks ────────────────────────────────────────────────────── */
  perks: [
    {
      title: "Above London Living Wage",
      body: "Starting rates from £13.15 to £18.50/hr with monthly performance incentives.", // PLACEHOLDER
    },
    {
      title: "Predictable UK Rota",
      body: "Stable shift patterns with guaranteed weekend rest for daytime teams.",
    },
    {
      title: "Paid 80-Hour Aura Academy",
      body: "BICS-certified training in advanced sanitation and machinery operation.",
    },
    {
      title: "Eco-Friendly Formulations",
      body: "100% non-toxic, British Ecolabel certified supplies provided free.",
    },
    {
      title: "Clear Career Ladders",
      body: "Over 70% of our Field Supervisors started as cleaning specialists.", // PLACEHOLDER
    },
    {
      title: "Pension & Healthcare",
      body: "NEST workplace pension scheme and private healthcare options available.",
    },
  ],

  /** ── Legal & SEO ──────────────────────────────────────────────────────── */
  url: "https://www.auracleanstaffing.co.uk",  // PLACEHOLDER — production URL
  ogImage: "/images/og-default.jpg",           // PLACEHOLDER
} as const

export default siteConfig