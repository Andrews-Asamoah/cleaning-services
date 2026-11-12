import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "../ui/button";

export const CareersTeaser: React.FC = () => {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="relative overflow-hidden rounded-3xl bg-linear-to-br from-teal-900 via-slate-900 to-slate-950 p-8 text-white shadow-xl sm:p-12">
        <div className="pointer-events-none absolute right-0 bottom-0 h-96 w-96 translate-x-10 translate-y-10 rounded-full bg-teal-500/10 blur-3xl" />

        <div className="relative z-10 max-w-2xl space-y-6">
          <span className="inline-block rounded-full border border-teal-400/30 bg-teal-500/20 px-3 py-1 text-xs font-bold tracking-wider text-teal-300 uppercase">
            We Are Hiring Full-Time & Part-Time Cleaners
          </span>
          <h2 className="font-['Outfit',sans-serif] text-3xl leading-tight font-extrabold sm:text-4xl">
            Looking for Stable Hours, Respected Work, and Industry-Leading Pay?
          </h2>
          <p className="text-sm leading-relaxed text-slate-300">
            At AuraClean, our cleaners are the heartbeat of the company. We offer starting wages
            from $21.50–$34/hr, paid 80-hour academy certification, comprehensive healthcare
            benefits, and guaranteed weekend daytime shifts.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <Link href="/careers">
              <Button
                variant="default"
                size="lg"
                className="h-12 cursor-pointer bg-white px-6 font-bold text-slate-950 shadow-md hover:bg-slate-100"
              >
                <span>View Job Openings & Apply Now</span>
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="/careers">
              <Button
                variant="outline"
                size="lg"
                className="h-12 cursor-pointer border-white/30 bg-transparent px-6 text-white hover:bg-white/10 hover:text-white"
              >
                Upload CV Directly
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
