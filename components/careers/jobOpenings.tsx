import { Badge } from "@/components/ui/badge";
import { Accordion } from "@/components/ui/accordion";
import { JOB_OPENINGS } from "@/data/mockData";
import { JobOpeningItem } from "./jobOpeningItem";

interface JobOpeningsAccordionProps {
  onApply: (jobId: string) => void;
}

export function JobOpeningsAccordion({ onApply }: JobOpeningsAccordionProps) {
  return (
    <section className="mx-auto max-w-7xl space-y-8 px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
        <div>
          <span className="text-xs font-bold tracking-wider text-teal-600 uppercase dark:text-teal-400">
            Immediate Hires Available
          </span>
          <h2 className="font-['Outfit',sans-serif] text-3xl font-extrabold text-slate-900 dark:text-white">
            Current Job Opportunities
          </h2>
          <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
            Select a position to review responsibilities, required qualifications, and apply
            directly.
          </p>
        </div>

        <Badge variant="outline" className="self-start px-3 py-1 text-xs md:self-auto">
          {JOB_OPENINGS.length} Active Positions
        </Badge>
      </div>

      <Accordion defaultValue={[JOB_OPENINGS[0]?.id]} className="w-full space-y-4">
        {JOB_OPENINGS.map((job) => (
          <JobOpeningItem key={job.id} job={job} onApply={onApply} />
        ))}
      </Accordion>
    </section>
  );
}
