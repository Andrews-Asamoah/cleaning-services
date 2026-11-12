import { CheckCircle2, Clock, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

interface B2BInquirySuccessProps {
  contactName: string;
  companyName: string;
  squareFootage: string;
  cleaningFrequency: string;
  reference: string;
  onReset: () => void;
}

export function B2BInquirySuccess({
  contactName,
  companyName,
  squareFootage,
  cleaningFrequency,
  reference,
  onReset,
}: B2BInquirySuccessProps) {
  return (
    <div className="space-y-5 py-8 text-center">
      <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 dark:bg-emerald-950 dark:text-emerald-400">
        <CheckCircle2 className="h-10 w-10" />
      </div>

      <div className="space-y-2">
        <span className="rounded-full bg-teal-100 px-3 py-1 font-mono text-xs font-bold text-teal-800 dark:bg-teal-950 dark:text-teal-300">
          Reference #{reference}
        </span>
        <h3 className="font-['Outfit',sans-serif] text-2xl font-bold text-slate-900 dark:text-white">
          B2B Inquiry Successfully Transmitted!
        </h3>
        <p className="mx-auto max-w-lg text-sm leading-relaxed text-slate-600 dark:text-slate-300">
          Thank you, <span className="font-semibold">{contactName}</span>. Your facility inquiry for{" "}
          <span className="font-semibold">{companyName}</span> ({squareFootage}, {cleaningFrequency}
          ) has been placed in our priority management queue.
        </p>
      </div>

      <div className="mx-auto max-w-md space-y-1.5 rounded-xl border border-slate-200 bg-slate-50 p-4 text-left text-xs text-slate-600 dark:border-slate-700 dark:bg-slate-800/60 dark:text-slate-300">
        <div className="mb-1 font-semibold text-slate-900 dark:text-white">What happens next:</div>
        <div className="flex items-center gap-2">
          <Clock className="h-3.5 w-3.5 text-teal-600" />
          <span>A dedicated Account Director will email a preliminary SLA within 2 hours.</span>
        </div>
        <div className="flex items-center gap-2">
          <Calendar className="h-3.5 w-3.5 text-teal-600" />
          <span>We will coordinate an on-site physical walk-through at your convenience.</span>
        </div>
      </div>

      <div className="flex justify-center gap-3 pt-4">
        <Button variant="outline" onClick={onReset}>
          Submit Another Inquiry
        </Button>
        <Button
          variant="default"
          onClick={() => {
            window.location.href = `mailto:operations@auracleanstaffing.com?subject=Inquiry%20${reference}%20-%20${encodeURIComponent(
              companyName,
            )}`;
          }}
        >
          Open Mail Client Backup
        </Button>
      </div>
    </div>
  );
}
