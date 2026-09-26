import { Badge } from "@/components/ui/badge";
import { Accordion } from "@/components/ui/accordion";
import { JOB_OPENINGS } from "@/data/mockData";
import { JobOpeningItem } from "./jobOpeningItem";

interface JobOpeningsAccordionProps {
  onApply: (jobId: string) => void;
}

export function JobOpeningsAccordion({ onApply }: JobOpeningsAccordionProps) {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-teal-600 dark:text-teal-400">
            Immediate Hires Available
          </span>
          <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white font-['Outfit',sans-serif]">
            Current Job Opportunities
          </h2>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
            Select a position to review responsibilities, required
            qualifications, and apply directly.
          </p>
        </div>

        <Badge variant="outline" className="self-start md:self-auto text-xs py-1 px-3">
          {JOB_OPENINGS.length} Active Positions
        </Badge>
      </div>

      <Accordion
        defaultValue={[JOB_OPENINGS[0]?.id]}
        className="w-full space-y-4"
      >
        {JOB_OPENINGS.map((job) => (
          <JobOpeningItem key={job.id} job={job} onApply={onApply} />
        ))}
      </Accordion>
    </section>
  );
}