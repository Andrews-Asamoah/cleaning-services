import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ApplicationSuccessProps {
  fullName: string;
  contact: string;
  reference: string;
  onReset: () => void;
}

export function ApplicationSuccess({
  fullName,
  contact,
  reference,
  onReset,
}: ApplicationSuccessProps) {
  return (
    <div className="space-y-5 py-8 text-center">
      <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 dark:bg-emerald-950 dark:text-emerald-400">
        <CheckCircle2 className="h-10 w-10" />
      </div>

      <div className="space-y-2">
        <span className="rounded-full bg-teal-100 px-3 py-1 font-mono text-xs font-bold text-teal-800 dark:bg-teal-950 dark:text-teal-300">
          Applicant ID #{reference}
        </span>
        <h3 className="font-['Outfit',sans-serif] text-2xl font-bold text-slate-900 dark:text-white">
          Application Successfully Submitted!
        </h3>
        <p className="mx-auto max-w-lg text-sm leading-relaxed text-slate-600 dark:text-slate-300">
          Thank you, <span className="font-semibold">{fullName}</span>. Your resume has been
          delivered to our recruitment team. We will review your qualifications and reach out to{" "}
          <span className="font-semibold">{contact}</span> within 2 business days.
        </p>
      </div>

      <div className="flex justify-center gap-3 pt-4">
        <Button variant="outline" onClick={onReset}>
          Submit Another Application
        </Button>
      </div>
    </div>
  );
}
