import { CheckCircle2, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import type { JobOpening } from "@/data/mockData";

interface JobOpeningItemProps {
  job: JobOpening;
  onApply: (jobId: string) => void;
}

export function JobOpeningItem({ job, onApply }: JobOpeningItemProps) {
  return (
    <AccordionItem
      value={job.id}
      className="group overflow-hidden rounded-2xl border border-border/80 bg-card/75 px-6 py-2 shadow-md backdrop-blur-xl transition-all duration-300 hover:border-brand/50 dark:bg-card/40"
    >
      <AccordionTrigger className="cursor-pointer py-4 hover:no-underline">
        <div className="flex w-full flex-col justify-between gap-2 pr-4 text-left sm:flex-row sm:items-center">
          <div className="space-y-1">
            <div className="flex flex-wrap items-center gap-2.5">
              <h3 className="font-display text-lg font-bold tracking-tight text-foreground transition-colors group-hover:text-brand">
                {job.title}
              </h3>
              <Badge
                variant="secondary"
                className="rounded-full border border-brand/20 bg-brand-muted px-2.5 py-0.5 text-[10px] font-semibold text-brand"
              >
                {job.department}
              </Badge>
            </div>
            <div className="flex flex-wrap items-center gap-2.5 text-xs font-medium text-muted-foreground">
              <span>{job.location}</span>
              <span className="text-muted-foreground/60">•</span>
              <span>{job.type}</span>
            </div>
          </div>

          <div className="pt-1 text-left sm:pt-0 sm:text-right">
            <span className="block rounded-xl border border-brand/20 bg-brand/10 px-3 py-1 font-mono text-xs font-bold text-brand">
              {job.salary}
            </span>
          </div>
        </div>
      </AccordionTrigger>

      <AccordionContent className="space-y-6 pt-2 pb-6 text-muted-foreground">
        <p className="text-xs leading-relaxed font-normal text-foreground/90 sm:text-sm">
          {job.overview}
        </p>

        <div className="grid grid-cols-1 gap-6 pt-2 md:grid-cols-2">
          <div className="space-y-3 rounded-2xl border border-border/60 bg-secondary/40 p-4 backdrop-blur-md">
            <h4 className="text-xs font-bold tracking-wider text-foreground uppercase">
              Key Responsibilities:
            </h4>
            <ul className="space-y-2 text-xs">
              {job.responsibilities.map((r) => (
                <li key={r} className="flex items-start gap-2.5">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                  <span className="font-medium text-foreground/90">{r}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-3 rounded-2xl border border-border/60 bg-secondary/40 p-4 backdrop-blur-md">
            <h4 className="text-xs font-bold tracking-wider text-foreground uppercase">
              Requirements & Qualifications:
            </h4>
            <ul className="space-y-2 text-xs">
              {job.requirements.map((req) => (
                <li key={req} className="flex items-start gap-2.5">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                  <span className="font-medium text-foreground/90">{req}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-start justify-between gap-4 border-t border-border/60 pt-4 sm:flex-row sm:items-center">
          <div className="flex flex-wrap gap-2">
            {job.perks.slice(0, 2).map((perk) => (
              <span
                key={perk}
                className="flex items-center gap-1.5 rounded-xl border border-border/60 bg-secondary/80 px-3 py-1 text-[11px] font-medium text-foreground"
              >
                <span className="text-brand">✓</span> {perk}
              </span>
            ))}
          </div>

          <Button
            variant="default"
            size="sm"
            onClick={() => onApply(job.id)}
            className="group/btn h-11 w-full cursor-pointer rounded-xl bg-brand px-6 font-bold text-brand-foreground shadow-md shadow-brand/20 hover:bg-brand/90 sm:w-auto"
          >
            <span>Apply for this Position</span>
            <ArrowRight className="ml-1.5 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
          </Button>
        </div>
      </AccordionContent>
    </AccordionItem>
  );
}
