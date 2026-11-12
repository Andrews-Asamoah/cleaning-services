import { DollarSign, Clock, HeartHandshake, GraduationCap, Shield, Sparkles } from "lucide-react";
import type { ReactNode } from "react";

interface Perk {
  icon: ReactNode;
  title: string;
  description: string;
}

const PERKS: Perk[] = [
  {
    icon: <DollarSign className="h-5 w-5 text-emerald-500" />,
    title: "Above-Industry Living Wages",
    description:
      "Starting pay from $21.50 to $34.00/hr plus monthly attendance & quality retention bonuses.",
  },
  {
    icon: <Clock className="h-5 w-5 text-teal-500" />,
    title: "Predictable, Flexible Schedules",
    description:
      "Guaranteed weekend time off for daytime crews, or choose compressed 4x10 hour shift blocks.",
  },
  {
    icon: <HeartHandshake className="h-5 w-5 text-rose-500" />,
    title: "Full Health & Wellness Package",
    description:
      "Medical, dental, vision, paid family leave, and 401(k) matching for all full-time team members.",
  },
  {
    icon: <GraduationCap className="h-5 w-5 text-cyan-500" />,
    title: "Paid 80-Hour Aura Academy",
    description:
      "Complete BICSc-certified training in advanced equipment, infection control, and team management.",
  },
  {
    icon: <Shield className="h-5 w-5 text-indigo-500" />,
    title: "Safety-First & Clean Equipment",
    description:
      "We provide premium commercial vacuums, laundered uniforms, PPE, and non-hazardous eco-supplies.",
  },
  {
    icon: <Sparkles className="h-5 w-5 text-amber-500" />,
    title: "Clear Career Ladders",
    description:
      "Over 70% of our Field Supervisors and Operations Directors were promoted from entry custodial roles.",
  },
];

export function CareersPerks() {
  return (
    <section className="mx-auto max-w-7xl space-y-10 px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-2xl space-y-3 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-brand/30 bg-brand-muted px-3.5 py-1.5 text-xs font-bold tracking-wider text-brand uppercase">
          <Sparkles className="h-3.5 w-3.5 text-brand" />
          <span>Why Professionals Choose AuraClean</span>
        </div>
        <h2 className="font-display text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
          Real Benefits for Real People
        </h2>
        <p className="text-sm leading-relaxed font-normal text-muted-foreground sm:text-base">
          We reject the gig-economy model. All our cleaning specialists are W-2 employees with
          protected rights, paid training, and continuous support.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {PERKS.map((perk) => (
          <div
            key={perk.title}
            className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-border/80 bg-card/75 p-7 shadow-lg backdrop-blur-xl transition-all duration-300 hover:border-brand/50 hover:shadow-2xl dark:bg-card/40"
          >
            {/* Subtle top accent bar on hover */}
            <div className="absolute inset-x-0 top-0 h-1 bg-brand opacity-0 transition-opacity group-hover:opacity-100" />

            <div className="space-y-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-border/60 bg-secondary/80 shadow-sm transition-transform group-hover:scale-105">
                {perk.icon}
              </div>
              <h3 className="font-display text-lg font-bold tracking-tight text-foreground">
                {perk.title}
              </h3>
              <p className="text-xs leading-relaxed text-muted-foreground sm:text-sm">
                {perk.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
