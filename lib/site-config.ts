/**
 * site-config.ts
 * ─────────────────────────────────────────────────────────────────────────────
 * Single source of truth for all business details.
 * Search for "// PLACEHOLDER" to find every invented value that needs replacing
 * before going live. NO real contact details appear anywhere else in the app —
 * all components import from here.
 */

export interface ServiceArea {
  name: string
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
  price: string          // e.g. "From $120" — PLACEHOLDER
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
  name: "SparkClean Group",
  tagline: "Pristine Spaces, Trusted Professionals",
  description:
    "Professional cleaning and staffing services for homes and businesses. " +
    "Verified cleaners, satisfaction guaranteed, eco-friendly products.",

  /** ── Contact ──────────────────────────────────────────────────────────── */
  phone: "+1 (555) 012-3456",                     // PLACEHOLDER
  phoneHref: "tel:+15550123456",                   // PLACEHOLDER
  email: "hello@sparkcleangroup.com",              // PLACEHOLDER
  emailHref: "mailto:hello@sparkcleangroup.com",   // PLACEHOLDER

  address: {
    street: "240 Harbour Boulevard, Suite 4",      // PLACEHOLDER
    city: "Portland",                              // PLACEHOLDER
    state: "OR",                                   // PLACEHOLDER
    zip: "97201",                                  // PLACEHOLDER
    full: "240 Harbour Boulevard, Suite 4, Portland, OR 97201", // PLACEHOLDER
    mapEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d0!2d-122.676483!3d45.52345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMap+Placeholder!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus",
    // PLACEHOLDER — replace with real Google Maps embed URL
  },

  /** ── Hours ────────────────────────────────────────────────────────────── */
  hours: [
    { days: "Monday – Friday", hours: "7:00 am – 7:00 pm" },
    { days: "Saturday",        hours: "8:00 am – 5:00 pm" },
    { days: "Sunday",          hours: "Closed" },
  ] satisfies HoursEntry[],

  /** ── Social links ─────────────────────────────────────────────────────── */
  socials: [
    { label: "Facebook",  href: "https://facebook.com/sparkcleangroup",  icon: "facebook"  },
    { label: "Instagram", href: "https://instagram.com/sparkcleangroup", icon: "instagram" },
    { label: "LinkedIn",  href: "https://linkedin.com/company/sparkcleangroup", icon: "linkedin" },
  ] satisfies SocialLink[],
  // PLACEHOLDER — replace all social hrefs with real profiles

  /** ── Service areas ────────────────────────────────────────────────────── */
  serviceAreas: [
    { name: "Portland" },
    { name: "Beaverton" },
    { name: "Hillsboro" },
    { name: "Lake Oswego" },
    { name: "Tigard" },
    { name: "Tualatin" },
  ] satisfies ServiceArea[],
  // PLACEHOLDER — replace with real service area list

  /** ── Trust stats ──────────────────────────────────────────────────────── */
  stats: {
    yearsInBusiness: "12+",          // PLACEHOLDER
    clientsSatisfied: "3,400+",      // PLACEHOLDER
    verifiedCleaners: "85",          // PLACEHOLDER
    satisfactionRate: "98%",         // PLACEHOLDER
  },

  /** ── Testimonials ─────────────────────────────────────────────────────── */
  testimonials: [
    {
      quote:
        "SparkClean has transformed our office. Every surface gleams and the team is " +
        "always punctual and professional. Highly recommended.",
      author: "Margot H.",             // PLACEHOLDER
      role: "Office Manager, Trellis Co.", // PLACEHOLDER
      avatarInitials: "MH",
    },
    {
      quote:
        "I've tried three cleaning services. SparkClean is the only one I kept. " +
        "Reliable, thorough, and they actually remember my preferences.",
      author: "Daniel W.",             // PLACEHOLDER
      role: "Homeowner",              // PLACEHOLDER
      avatarInitials: "DW",
    },
    {
      quote:
        "The deep clean before our move-in was exceptional. Every corner was spotless. " +
        "We'll be using them regularly going forward.",
      author: "Priya & Arjun K.",      // PLACEHOLDER
      role: "Residential Clients",    // PLACEHOLDER
      avatarInitials: "PK",
    },
  ] satisfies Testimonial[],

  /** ── Pricing tiers (residential/commercial reference) ─────────────────── */
  pricingTiers: [
    {
      name: "Essential",
      price: "From $90",             // PLACEHOLDER
      period: "per visit",
      description: "Regular maintenance cleaning for smaller homes.",
      features: [
        "Up to 2 bedrooms / 1 bathroom",
        "Kitchen & living areas",
        "Eco-friendly products included",
        "Weekly or bi-weekly schedule",
      ],
      highlighted: false,
    },
    {
      name: "Standard",
      price: "From $145",            // PLACEHOLDER
      period: "per visit",
      description: "Our most popular plan for family homes and apartments.",
      features: [
        "Up to 4 bedrooms / 2 bathrooms",
        "All rooms + laundry room",
        "Eco-friendly products included",
        "Flexible scheduling",
        "Verified & background-checked cleaner",
      ],
      highlighted: true,
    },
    {
      name: "Deep Clean",
      price: "From $260",            // PLACEHOLDER
      period: "per session",
      description: "Intensive top-to-bottom clean for move-ins, move-outs, or seasonal resets.",
      features: [
        "Any size property",
        "Inside appliances & cabinets",
        "Baseboards, vents & hard-to-reach areas",
        "Eco-friendly products included",
        "Satisfaction guarantee",
      ],
      highlighted: false,
    },
  ] satisfies PricingTier[],

  /** ── Job listings ─────────────────────────────────────────────────────── */
  jobListings: [
    {
      id: "residential-cleaner",
      title: "Residential Cleaner",
      type: "Full-time",
      location: "Portland, OR",
      description:
        "Join our residential cleaning team serving homeowners across the Portland metro. " +
        "You will perform routine and deep cleaning services to our high standards.",
      requirements: [
        "Prior cleaning experience preferred (training provided)",
        "Valid driver's licence and reliable transportation",
        "Excellent attention to detail",
        "Professional and courteous manner",
        "Ability to work independently",
      ],
    },
    {
      id: "commercial-cleaner",
      title: "Commercial Cleaning Technician",
      type: "Full-time",
      location: "Portland, OR",
      description:
        "Maintain commercial offices, retail spaces, and facilities. " +
        "Evening and early-morning shifts available.",
      requirements: [
        "2+ years commercial cleaning experience",  // PLACEHOLDER
        "Familiarity with industrial cleaning equipment",
        "Ability to lift up to 30 kg",
        "Background check required",
      ],
    },
    {
      id: "team-lead",
      title: "Cleaning Team Lead",
      type: "Full-time",
      location: "Portland, OR",
      description:
        "Lead a small team of cleaners on residential and commercial assignments. " +
        "Responsible for quality control and client communication on site.",
      requirements: [
        "3+ years cleaning industry experience",    // PLACEHOLDER
        "Previous supervisory or team-lead role",
        "Strong communication skills",
        "Clean driving record",
      ],
    },
    {
      id: "part-time-cleaner",
      title: "Part-Time Cleaner",
      type: "Part-time",
      location: "Beaverton / Hillsboro, OR",
      description:
        "Flexible part-time positions for residential cleaning. " +
        "Ideal for those seeking 15–25 hours per week.",
      requirements: [
        "Reliable and punctual",
        "No experience required — full training provided",
        "Eligible to work in the US",
      ],
    },
  ] satisfies JobListing[],

  /** ── Culture perks ────────────────────────────────────────────────────── */
  perks: [
    {
      title: "Competitive pay",
      body: "Above-market hourly rates with performance bonuses.", // PLACEHOLDER
    },
    {
      title: "Flexible scheduling",
      body: "Choose shifts that fit your life. We work around you.",
    },
    {
      title: "Full training provided",
      body: "No experience needed for most roles — we train you to our standard.",
    },
    {
      title: "Eco-friendly products",
      body: "We supply all cleaning products. Our range is non-toxic and planet-kind.",
    },
    {
      title: "Career growth",
      body: "Over 60% of our team leads started as cleaners.", // PLACEHOLDER
    },
    {
      title: "Supportive team",
      body: "A management team that listens and responds quickly.",
    },
  ],

  /** ── Legal & SEO ──────────────────────────────────────────────────────── */
  url: "https://www.sparkcleangroup.com",  // PLACEHOLDER — replace with production URL
  ogImage: "/images/og-default.jpg",       // PLACEHOLDER — replace with real OG image
} as const

export default siteConfig
