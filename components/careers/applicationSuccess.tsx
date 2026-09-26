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
    <div className="py-8 text-center space-y-5">
      <div className="w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 mx-auto flex items-center justify-center">
        <CheckCircle2 className="w-10 h-10" />
      </div>

      <div className="space-y-2">
        <span className="text-xs font-mono font-bold bg-teal-100 text-teal-800 dark:bg-teal-950 dark:text-teal-300 px-3 py-1 rounded-full">
          Applicant ID #{reference}
        </span>
        <h3 className="text-2xl font-bold font-['Outfit',sans-serif] text-slate-900 dark:text-white">
          Application Successfully Submitted!
        </h3>
        <p className="text-sm text-slate-600 dark:text-slate-300 max-w-lg mx-auto leading-relaxed">
          Thank you, <span className="font-semibold">{fullName}</span>. Your
          resume has been delivered to our recruitment team. We will review
          your qualifications and reach out to{" "}
          <span className="font-semibold">{contact}</span> within 2 business
          days.
        </p>
      </div>

      <div className="pt-4 flex justify-center gap-3">
        <Button variant="outline" onClick={onReset}>
          Submit Another Application
        </Button>
      </div>
    </div>
  );
}