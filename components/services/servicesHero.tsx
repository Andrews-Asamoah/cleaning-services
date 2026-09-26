import { Badge } from "@/components/ui/badge";
import { Sparkles } from "lucide-react";

export function ServicesHero() {
  return (
    /* pt-28 ensures the background starts from the absolute top of the screen behind the floating navbar */
    <section className="relative overflow-hidden bg-secondary/30 dark:bg-slate-900/50 border-b border-border/70 pt-28 pb-16 lg:pt-32 lg:pb-20">
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[250px] bg-brand/10 blur-3xl rounded-full -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4 relative z-10">
        <Badge variant="secondary" className="px-3.5 py-1.5 font-semibold text-xs bg-brand-muted text-brand border border-brand/30 rounded-full inline-flex items-center gap-1.5">
          <Sparkles className="w-3.5 h-3.5 text-brand" />
          <span>Commercial Janitorial & Premium Residential Solutions</span>
        </Badge>
        
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-foreground font-display tracking-tight leading-[1.15]">
          Commercial Contracts & <span className="text-brand">Specialty Services</span>
        </h1>
        
        <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed font-normal">
          Reliable custodial infrastructure designed to elevate workplace safety, employee productivity, and corporate compliance.
        </p>
      </div>
    </section>
  );
}