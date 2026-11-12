export interface ServiceDetail {
  id: string;
  title: string;
  slug: string;
  category: "commercial" | "residential" | "specialized";
  tagline: string;
  description: string;
  features: string[];
  idealFor: string;
  pricingEstimate: string;
  includedTasks: string[];
  imageUrl: string;
  badge?: string;
}

export const SERVICES_DATA: ServiceDetail[] = [
  {
    id: "residential",
    title: "Residential Premium Cleaning",
    slug: "residential-cleaning",
    category: "residential",
    tagline: "Spotless sanctuaries for discerning homeowners and busy professionals.",
    description:
      "A tailored home care experience covering every corner with eco-certified, pet-safe formulations. Our background-vetted specialists follow an 84-point checklist.",
    features: [
      "Kitchen degreasing & appliance surface polish",
      "Sanitized bathrooms with limescale & tile treatment",
      "High-filtration HEPA vacuuming & microfiber hardwood polishing",
      "Dusting of baseboards, blinds, and high fixtures",
      "Linen change & bed dressing on request",
    ],
    idealFor: "Apartments, luxury residences, and family estates.",
    pricingEstimate: "From $120 / visit",
    includedTasks: [
      "All living areas & bedrooms",
      "Bathroom deep scrub & disinfection",
      "Kitchen cabinet exteriors & countertop seal safe polish",
      "Trash removal and liner replacement",
    ],
    imageUrl:
      "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=900&q=80",
    badge: "Popular",
  },
  {
    id: "commercial",
    title: "Commercial & Office Contracts",
    slug: "commercial-cleaning",
    category: "commercial",
    tagline: "Corporate-grade cleanliness engineered for productivity and compliance.",
    description:
      "Daily, nightly, or weekend janitorial and facilities upkeep tailored for corporate headquarters, co-working suites, medical clinics, and retail flagships.",
    features: [
      "Day porter services & evening custodial crews",
      "Restroom replenishment & touchpoint sterilization",
      "Boardroom, workstation, and screen microfiber sanitization",
      "Kitchenette dishwashers, fridges & beverage hubs",
      "Dedicated account supervisor with SLA guarantees",
    ],
    idealFor: "Offices from 1,000 to 75,000+ sq ft, corporate campuses, medical practices.",
    pricingEstimate: "Custom B2B quotation with SLA",
    includedTasks: [
      "Comprehensive trash & recycling sorting",
      "Floor scrub, buff, and carpet spot-extraction",
      "Disinfection of elevator buttons, door pulls & railings",
      "Monthly environmental quality audits",
    ],
    imageUrl:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=900&q=80",
    badge: "B2B Contract",
  },
  {
    id: "deep-clean",
    title: "Deep Intensive & Move-In/Out",
    slug: "deep-cleaning",
    category: "residential",
    tagline: "Top-to-bottom restorative cleaning for new beginnings and seasonal resets.",
    description:
      "A rigorous, surgical restoration cleaning that targets hidden grime behind appliances, inside oven cavities, interior cabinetry, grout lines, and window tracks.",
    features: [
      "Inside oven, refrigerator & dishwasher degreasing",
      "Interior cupboard & pantry detailing",
      "Deep grout scrubbing & tile steam treatment",
      "Window sills, tracks, and interior glazing",
      "Guaranteed landlord & deposit return inspection pass",
    ],
    idealFor: "Move-in / move-out handovers, end-of-tenancy, and spring resets.",
    pricingEstimate: "From $240 / session",
    includedTasks: [
      "Full perimeter baseboard wipe down",
      "Door frames, switches & electrical faceplates",
      "Light fixture and ceiling fan blade detailing",
      "HVAC vent cover dusting and grime removal",
    ],
    imageUrl:
      "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&w=900&q=80",
    badge: "Guaranteed Pass",
  },
  {
    id: "specialized",
    title: "Healthcare & Specialized Sanitization",
    slug: "healthcare-sanitization",
    category: "specialized",
    tagline: "Hospital-grade biocide disinfection complying with OSHA & CDC protocols.",
    description:
      "Electrostatic pathogen elimination and medical-grade bio-sanitization designed for clinics, dental studios, childcare centers, and laboratory spaces.",
    features: [
      "EPA List N certified virucidal & bactericidal disinfectants",
      "Electrostatic particulate 360-degree spray coverage",
      "Color-coded cross-contamination prevention protocols",
      "Formal certificate of disinfection issued after every visit",
      "Chain-of-custody custodial records",
    ],
    idealFor: "Dental clinics, doctor surgeries, wellness centers, and labs.",
    pricingEstimate: "Custom medical rate",
    includedTasks: [
      "Sterile zone touchpoint disinfection",
      "Waiting area seating antibacterial treatment",
      "Bio-waste bin containment handling",
      "Air scrub monitoring",
    ],
    imageUrl:
      "https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?auto=format&fit=crop&w=900&q=80",
    badge: "EPA List N",
  },
];

export interface JobOpening {
  id: string;
  title: string;
  department: "Commercial" | "Residential" | "Field Leadership" | "Operations";
  location: string;
  type: "Full-Time" | "Part-Time" | "Full-Time or Part-Time" | "Flexible Shifts";
  salary: string;
  overview: string;
  responsibilities: string[];
  requirements: string[];
  perks: string[];
}

export const JOB_OPENINGS: JobOpening[] = [
  {
    id: "job-res-specialist",
    title: "Residential Cleaning Specialist",
    department: "Residential",
    location: "Metro Area & Suburbs (Client On-Site)",
    type: "Full-Time or Part-Time",
    salary: "$21.50 - $26.00 / hr + Tips & Travel Allowance",
    overview:
      "Join our elite residential squad caring for prestigious private homes. We provide all vehicles, equipment, and eco-friendly supplies, alongside structured daytime hours.",
    responsibilities: [
      "Execute comprehensive residential cleaning following our 84-point standard checklist.",
      "Work in synchronized pairs to ensure high speed and top-tier polish.",
      "Safely utilize commercial-grade HEPA vacuum systems and non-toxic green cleaners.",
      "Maintain respectful, discreet client communications and property security.",
    ],
    requirements: [
      "Valid driver's license with clean record (or ability to ride in company vehicle).",
      "High attention to detail and physical stamina for bending, lifting, and continuous movement.",
      "Pass a criminal background check and reference verification.",
      "No prior experience required; comprehensive 2-week paid academy provided.",
    ],
    perks: [
      "Guaranteed weekend time off (Monday - Friday daytime)",
      "Daily company transport stipend",
      "100% employer-covered healthcare (after 90 days full-time)",
      "Performance bonuses & direct client gratuities",
    ],
  },
  {
    id: "job-comm-supervisor",
    title: "Commercial Night Operations Supervisor",
    department: "Field Leadership",
    location: "Central Business District / Office Parks",
    type: "Full-Time",
    salary: "$28.00 - $34.00 / hr + Vehicle + Leadership Bonus",
    overview:
      "Supervise evening custodial teams across Class-A office towers and biotech facilities. You will audit quality, lead team huddles, and ensure key card protocols.",
    responsibilities: [
      "Lead a night crew of 8–15 janitorial specialists across 4 designated corporate sites.",
      "Conduct quality spot audits and log digitized reports via our tablet app.",
      "Manage supply inventory, chemical dilution stations, and robotic floor scrubbers.",
      "Coordinate client feedback with our Operations Director in real time.",
    ],
    requirements: [
      "2+ years experience in commercial cleaning or facilities team supervision.",
      "Strong leadership skills, reliability, and bilingual proficiency is a plus.",
      "Comfortable with night shifts (6:00 PM - 2:30 AM).",
      "Proven safety and OSHA compliance familiarity.",
    ],
    perks: [
      "Company SUV during shift hours",
      "Quarterly site retention bonuses ($1,500+)",
      "Subsidized continuous leadership training and BICSc certification",
      "Comprehensive dental, medical, and 401(k) matching",
    ],
  },
  {
    id: "job-tech-sanitization",
    title: "Healthcare Facility Sanitization Technician",
    department: "Operations",
    location: "Medical Center District",
    type: "Full-Time",
    salary: "$24.00 - $29.00 / hr",
    overview:
      "Specialized technician role handling sensitive clinical environments, surgical centers, and outpatient laboratories with EPA-approved disinfection protocols.",
    responsibilities: [
      "Operate advanced electrostatic sprayers and UV-C disinfection devices.",
      "Follow strict isolation room donning/doffing and biological safety guidelines.",
      "Complete chain-of-custody sterilization manifests after each facility sweep.",
      "Monitor air filtration units and verify surface ATP swab test readings.",
    ],
    requirements: [
      "Prior experience in healthcare, hospital housekeeping, or cleanroom maintenance.",
      "Certification in Bloodborne Pathogens & HAZCOM (or willingness to complete company-paid training).",
      "Rigorous attention to clinical protocols and sterility standards.",
    ],
    perks: [
      "Higher hazard differential hourly pay",
      "Top-tier protective equipment and uniforms laundered on-site",
      "Annual education stipend for infection control certifications",
    ],
  },
  {
    id: "job-deep-lead",
    title: "Mobile Move-In / Move-Out Team Lead",
    department: "Residential",
    location: "Greater Metropolitan Area",
    type: "Full-Time",
    salary: "$25.00 - $30.00 / hr + Overtime",
    overview:
      "Lead mobile strike teams for urgent turnovers, real-estate staging, and high-stakes end-of-tenancy cleans with dedicated company transport.",
    responsibilities: [
      "Drive company mobile cleaning van with commercial steam extractors.",
      "Evaluate property condition, assign tasks to crew members, and manage turnaround times.",
      "Conduct walkthrough with property managers to ensure deposit release sign-off.",
      "Inspect oven interiors, windows, grout, and fixtures.",
    ],
    requirements: [
      "Valid clean driving record.",
      "1+ years experience in deep cleaning, carpet steam cleaning, or renovation restoration.",
      "Friendly, can-do attitude and problem-solving skills on-site.",
    ],
    perks: [
      "Company vehicle with fuel card",
      "Flexible schedule options with 4x10 hour shift models",
      "Generous tool allowance & smartphone subsidy",
    ],
  },
];

export const TESTIMONIALS = [
  {
    id: "1",
    author: "Elena Vasquez",
    role: "Facilities Director",
    company: "Apex Horizon Tech Hub (45,000 sq ft)",
    rating: 5,
    text: "AuraClean took over our 3-story headquarters janitorial contract six months ago. Their night crew is remarkably thorough, punctually logged in, and our employees noticed an immediate difference in air quality and restroom cleanliness.",
    avatar:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80",
  },
  {
    id: "2",
    author: "Dr. Marcus Vance",
    role: "Clinical Director",
    company: "Vance Pediatric & Family Dental",
    rating: 5,
    text: "In healthcare, sanitization isn't just cosmetic—it's safety and regulatory compliance. AuraClean's specialized medical team provides ATP swab verifications and uses zero-odor EPA List N biocides. Absolutely stellar service.",
    avatar:
      "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=200&q=80",
  },
  {
    id: "3",
    author: "Sophie Campbell",
    role: "Homeowner & Architect",
    company: "Oakwood Heights Residence",
    rating: 5,
    text: "Finding cleaners you can trust with custom walnut cabinetry and natural marble is hard. The AuraClean team arrived in crisp uniforms, used pH-neutral green cleaners, and left our 4-bedroom home shining without harsh chemical smells.",
    avatar:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80",
  },
  {
    id: "4",
    author: "Jerome Bell",
    role: "Property Asset Manager",
    company: "Kensington Prime Real Estate",
    rating: 5,
    text: "We manage 120 luxury rental units. AuraClean's Move-Out Deep Clean team has maintained a 100% inspection pass rate for new tenant handovers. Their responsiveness and transparent billing save our team hours every week.",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
  },
];

export const TRUST_STATS = [
  { label: "Vetted Professionals", value: "350+", subtext: "100% Background Checked" },
  { label: "Client Satisfaction", value: "99.4%", subtext: "Based on 12,000+ reviews" },
  { label: "Square Feet Serviced", value: "4.8M+", subtext: "Monthly across corporate & homes" },
  { label: "Average Employee Tenure", value: "3.2 Yrs", subtext: "Leading industry retention" },
];

export const FAQS = [
  {
    question: "How do you vet and train your cleaning personnel?",
    answer:
      "Every candidate undergoes a nationwide criminal background check, identity verification, reference audits, and in-person interviews. Selected cleaners then complete our intensive 80-hour Aura Academy training program covering chemical safety, cross-contamination prevention, and white-glove customer etiquette.",
  },
  {
    question: "Do you supply your own cleaning equipment and eco-friendly products?",
    answer:
      "Yes, absolutely. Our teams arrive fully equipped with commercial HEPA-filtration vacuums, hospital-grade microfiber cloths, and EPA/Green Seal certified non-toxic cleaning agents that are 100% safe for pets, children, and people with allergies.",
  },
  {
    question: "What is your B2B commercial contract onboarding process?",
    answer:
      "We begin with an on-site physical walk-through to map your square footage, specific high-traffic zones, and schedule preferences. We then issue a transparent SLA proposal with assigned account management, dedicated keys/access protocol, and a 30-day satisfaction guarantee.",
  },
  {
    question: "How fast can I hear back after submitting a job application or CV?",
    answer:
      "Our HR recruitment team reviews every CV within 24 to 48 business hours. If your profile matches an open position, we'll schedule a friendly 15-minute introductory video or phone conversation followed by an in-person orientation.",
  },
  {
    question: "Are your services insured and bonded?",
    answer:
      "Yes, AuraClean holds $5,000,000 in comprehensive commercial general liability insurance, full worker's compensation coverage, and strict employee fidelity bonding for absolute peace of mind.",
  },
];
