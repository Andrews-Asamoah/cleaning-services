import {
  DollarSign,
  Clock,
  HeartHandshake,
  GraduationCap,
  Shield,
  Sparkles,
} from "lucide-react";
import type { ReactNode } from "react";

interface Perk {
  icon: ReactNode;
  title: string;
  description: string;
}

const PERKS: Perk[] = [
  {
    icon: <DollarSign className="w-5 h-5 text-emerald-500" />,
    title: "Above-Industry Living Wages",
    description:
      "Starting pay from $21.50 to $34.00/hr plus monthly attendance & quality retention bonuses.",
  },
  {
    icon: <Clock className="w-5 h-5 text-teal-500" />,
    title: "Predictable, Flexible Schedules",
    description:
      "Guaranteed weekend time off for daytime crews, or choose compressed 4x10 hour shift blocks.",
  },
  {
    icon: <HeartHandshake className="w-5 h-5 text-rose-500" />,
    title: "Full Health & Wellness Package",
    description:
      "Medical, dental, vision, paid family leave, and 401(k) matching for all full-time team members.",
  },
  {
    icon: <GraduationCap className="w-5 h-5 text-cyan-500" />,
    title: "Paid 80-Hour Aura Academy",
    description:
      "Complete BICSc-certified training in advanced equipment, infection control, and team management.",
  },
  {
    icon: <Shield className="w-5 h-5 text-indigo-500" />,
    title: "Safety-First & Clean Equipment",
    description:
      "We provide premium commercial vacuums, laundered uniforms, PPE, and non-hazardous eco-supplies.",
  },
  {
    icon: <Sparkles className="w-5 h-5 text-amber-500" />,
    title: "Clear Career Ladders",
    description:
      "Over 70% of our Field Supervisors and Operations Directors were promoted from entry custodial roles.",
  },
];

export function CareersPerks() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10">
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-muted text-brand border border-brand/30 text-xs font-bold uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5 text-brand" />
          <span>Why Professionals Choose AuraClean</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground font-display tracking-tight">
          Real Benefits for Real People
        </h2>
        <p className="text-sm sm:text-base text-muted-foreground leading-relaxed font-normal">
          We reject the gig-economy model. All our cleaning specialists are W-2 employees with protected rights, paid training, and continuous support.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {PERKS.map((perk) => (
          <div
            key={perk.title}
            className="p-7 rounded-3xl bg-card/75 dark:bg-card/40 backdrop-blur-xl border border-border/80 shadow-lg hover:border-brand/50 hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
          >
            {/* Subtle top accent bar on hover */}
            <div className="absolute inset-x-0 top-0 h-1 bg-brand opacity-0 group-hover:opacity-100 transition-opacity" />

            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-secondary/80 border border-border/60 flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform">
                {perk.icon}
              </div>
              <h3 className="text-lg font-bold text-foreground font-display tracking-tight">
                {perk.title}
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                {perk.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};