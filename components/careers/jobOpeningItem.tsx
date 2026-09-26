import { CheckCircle2, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import type { JobOpening } from "@/data/mockData";

interface JobOpeningItemProps {
  job: JobOpening;
  onApply: (jobId: string) => void;
}

export function JobOpeningItem({ job, onApply }: JobOpeningItemProps) {
  return (
    <AccordionItem
      value={job.id}
      className="bg-card/75 dark:bg-card/40 backdrop-blur-xl border border-border/80 rounded-2xl px-6 py-2 shadow-md transition-all duration-300 hover:border-brand/50 group overflow-hidden"
    >
      <AccordionTrigger className="hover:no-underline py-4 cursor-pointer">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between w-full pr-4 text-left gap-2">
          <div className="space-y-1">
            <div className="flex items-center gap-2.5 flex-wrap">
              <h3 className="text-lg font-bold text-foreground font-display tracking-tight group-hover:text-brand transition-colors">
                {job.title}
              </h3>
              <Badge variant="secondary" className="text-[10px] bg-brand-muted text-brand border border-brand/20 font-semibold px-2.5 py-0.5 rounded-full">
                {job.department}
              </Badge>
            </div>
            <div className="text-xs text-muted-foreground flex flex-wrap items-center gap-2.5 font-medium">
              <span>{job.location}</span>
              <span className="text-muted-foreground/60">•</span>
              <span>{job.type}</span>
            </div>
          </div>

          <div className="text-left sm:text-right pt-1 sm:pt-0">
            <span className="text-xs font-bold text-brand block font-mono bg-brand/10 px-3 py-1 rounded-xl border border-brand/20">
              {job.salary}
            </span>
          </div>
        </div>
      </AccordionTrigger>

      <AccordionContent className="pt-2 pb-6 space-y-6 text-muted-foreground">
        <p className="text-xs sm:text-sm leading-relaxed text-foreground/90 font-normal">
          {job.overview}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
          <div className="space-y-3 bg-secondary/40 backdrop-blur-md p-4 rounded-2xl border border-border/60">
            <h4 className="text-xs font-bold uppercase tracking-wider text-foreground">
              Key Responsibilities:
            </h4>
            <ul className="space-y-2 text-xs">
              {job.responsibilities.map((r) => (
                <li key={r} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-brand mt-0.5 shrink-0" />
                  <span className="text-foreground/90 font-medium">{r}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-3 bg-secondary/40 backdrop-blur-md p-4 rounded-2xl border border-border/60">
            <h4 className="text-xs font-bold uppercase tracking-wider text-foreground">
              Requirements & Qualifications:
            </h4>
            <ul className="space-y-2 text-xs">
              {job.requirements.map((req) => (
                <li key={req} className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand mt-1.5 shrink-0" />
                  <span className="text-foreground/90 font-medium">{req}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-4 border-t border-border/60 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex flex-wrap gap-2">
            {job.perks.slice(0, 2).map((perk) => (
              <span
                key={perk}
                className="text-[11px] bg-secondary/80 border border-border/60 px-3 py-1 rounded-xl text-foreground font-medium flex items-center gap-1.5"
              >
                <span className="text-brand">✓</span> {perk}
              </span>
            ))}
          </div>

          <Button
            variant="default"
            size="sm"
            onClick={() => onApply(job.id)}
            className="font-bold px-6 h-11 w-full sm:w-auto rounded-xl bg-brand text-brand-foreground hover:bg-brand/90 shadow-md shadow-brand/20 cursor-pointer group/btn"
          >
            <span>Apply for this Position</span>
            <ArrowRight className="w-4 h-4 ml-1.5 group-hover/btn:translate-x-1 transition-transform" />
          </Button>
        </div>
      </AccordionContent>
    </AccordionItem>
  );
};