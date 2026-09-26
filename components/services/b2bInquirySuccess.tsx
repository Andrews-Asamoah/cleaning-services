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
    <div className="py-8 text-center space-y-5">
      <div className="w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 mx-auto flex items-center justify-center">
        <CheckCircle2 className="w-10 h-10" />
      </div>

      <div className="space-y-2">
        <span className="text-xs font-mono font-bold bg-teal-100 text-teal-800 dark:bg-teal-950 dark:text-teal-300 px-3 py-1 rounded-full">
          Reference #{reference}
        </span>
        <h3 className="text-2xl font-bold font-['Outfit',sans-serif] text-slate-900 dark:text-white">
          B2B Inquiry Successfully Transmitted!
        </h3>
        <p className="text-sm text-slate-600 dark:text-slate-300 max-w-lg mx-auto leading-relaxed">
          Thank you, <span className="font-semibold">{contactName}</span>. Your
          facility inquiry for <span className="font-semibold">{companyName}</span>{" "}
          ({squareFootage}, {cleaningFrequency}) has been placed in our
          priority management queue.
        </p>
      </div>

      <div className="p-4 bg-slate-50 dark:bg-slate-800/60 rounded-xl border border-slate-200 dark:border-slate-700 max-w-md mx-auto text-xs text-left space-y-1.5 text-slate-600 dark:text-slate-300">
        <div className="font-semibold text-slate-900 dark:text-white mb-1">
          What happens next:
        </div>
        <div className="flex items-center gap-2">
          <Clock className="w-3.5 h-3.5 text-teal-600" />
          <span>A dedicated Account Director will email a preliminary SLA within 2 hours.</span>
        </div>
        <div className="flex items-center gap-2">
          <Calendar className="w-3.5 h-3.5 text-teal-600" />
          <span>We will coordinate an on-site physical walk-through at your convenience.</span>
        </div>
      </div>

      <div className="pt-4 flex justify-center gap-3">
        <Button variant="outline" onClick={onReset}>
          Submit Another Inquiry
        </Button>
        <Button
          variant="default"
          onClick={() => {
            window.location.href = `mailto:operations@auracleanstaffing.com?subject=Inquiry%20${reference}%20-%20${encodeURIComponent(
              companyName
            )}`;
          }}
        >
          Open Mail Client Backup
        </Button>
      </div>
    </div>
  );
}
