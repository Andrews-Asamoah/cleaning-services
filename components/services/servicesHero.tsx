import { Badge } from "@/components/ui/badge";
import { Sparkles } from "lucide-react";

export function ServicesHero() {
  return (
    /* pt-28 ensures the background starts from the absolute top of the screen behind the floating navbar */
    <section className="relative overflow-hidden border-b border-border/70 bg-secondary/30 pt-28 pb-16 lg:pt-32 lg:pb-20 dark:bg-slate-900/50">
      {/* Background ambient glow */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -z-10 h-[250px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand/10 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl space-y-4 px-4 text-center sm:px-6 lg:px-8">
        <Badge
          variant="secondary"
          className="inline-flex items-center gap-1.5 rounded-full border border-brand/30 bg-brand-muted px-3.5 py-1.5 text-xs font-semibold text-brand"
        >
          <Sparkles className="h-3.5 w-3.5 text-brand" />
          <span>Commercial Janitorial & Premium Residential Solutions</span>
        </Badge>

        <h1 className="font-display text-3xl leading-[1.15] font-extrabold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
          Commercial Contracts & <span className="text-brand">Specialty Services</span>
        </h1>

        <p className="mx-auto max-w-2xl text-base leading-relaxed font-normal text-muted-foreground sm:text-lg">
          Reliable custodial infrastructure designed to elevate workplace safety, employee
          productivity, and corporate compliance.
        </p>
      </div>
    </section>
  );
}
