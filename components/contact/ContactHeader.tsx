import React from "react";
import { Badge } from "@/components/ui/badge";
import { Headphones } from "lucide-react";

export const ContactHeader: React.FC = () => (
  <section className="relative overflow-hidden border-b border-border/70 bg-secondary/30 pt-28 pb-16 lg:pt-32 lg:pb-20 dark:bg-slate-900/50">
    {/* Background ambient glow */}
    <div className="pointer-events-none absolute top-1/2 left-1/2 -z-10 h-[250px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand/10 blur-3xl" />

    <div className="relative z-10 mx-auto max-w-7xl space-y-4 px-4 text-center sm:px-6 lg:px-8">
      <Badge
        variant="secondary"
        className="inline-flex items-center gap-1.5 rounded-full border border-brand/35 bg-brand-muted px-3.5 py-1.5 text-xs font-semibold text-brand shadow-xs"
      >
        <Headphones className="h-3.5 w-3.5 text-brand" />
        <span>Client Support & Operations Dispatch</span>
      </Badge>

      <h1 className="font-display text-3xl leading-[1.15] font-extrabold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
        Connect With Our <span className="text-brand">Leadership Team</span>
      </h1>

      <p className="mx-auto max-w-2xl text-base leading-relaxed font-normal text-muted-foreground sm:text-lg">
        Have questions about a customized facility proposal, job status, or billing? Our dedicated
        support team is at your service.
      </p>
    </div>
  </section>
);
