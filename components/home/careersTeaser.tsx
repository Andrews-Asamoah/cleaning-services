import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "../ui/button";

export const CareersTeaser: React.FC = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="rounded-3xl bg-linear-to-br from-teal-900 via-slate-900 to-slate-950 p-8 sm:p-12 text-white relative overflow-hidden shadow-xl">
        <div className="absolute right-0 bottom-0 translate-x-10 translate-y-10 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-2xl space-y-6">
          <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-teal-500/20 text-teal-300 border border-teal-400/30 inline-block">
            We Are Hiring Full-Time & Part-Time Cleaners
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-['Outfit',sans-serif] leading-tight">
            Looking for Stable Hours, Respected Work, and Industry-Leading Pay?
          </h2>
          <p className="text-sm text-slate-300 leading-relaxed">
            At AuraClean, our cleaners are the heartbeat of the company. We offer starting wages from $21.50–$34/hr, paid 80-hour academy certification, comprehensive healthcare benefits, and guaranteed weekend daytime shifts.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <Link href="/careers">
            <Button
              variant="default"
              size="lg"
              className="bg-white text-slate-950 hover:bg-slate-100 font-bold shadow-md h-12 px-6 cursor-pointer"
            >             
                <span>View Job Openings & Apply Now</span>
                <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
            </Link>
            <Link href="/careers">
            <Button             
              variant="outline"
              size="lg"
              className="border-white/30 text-white bg-transparent hover:bg-white/10 hover:text-white h-12 px-6 cursor-pointer"
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