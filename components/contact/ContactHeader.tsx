import React from "react";
import { Badge } from "@/components/ui/badge";
import { Headphones } from "lucide-react";

export const ContactHeader: React.FC = () => (
  <section className="relative overflow-hidden bg-secondary/30 dark:bg-slate-900/50 border-b border-border/70 pt-28 pb-16 lg:pt-32 lg:pb-20">
    {/* Background ambient glow */}
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[250px] bg-brand/10 blur-3xl rounded-full -z-10 pointer-events-none" />

    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4 relative z-10">
      <Badge variant="secondary" className="px-3.5 py-1.5 font-semibold text-xs bg-brand-muted text-brand border border-brand/35 rounded-full inline-flex items-center gap-1.5 shadow-xs">
        <Headphones className="w-3.5 h-3.5 text-brand" />
        <span>Client Support & Operations Dispatch</span>
      </Badge>
      
      <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-foreground font-display tracking-tight leading-[1.15]">
        Connect With Our <span className="text-brand">Leadership Team</span>
      </h1>
      
      <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed font-normal">
        Have questions about a customized facility proposal, job status, or billing? Our dedicated support team is at your service.
      </p>
    </div>
  </section>
);