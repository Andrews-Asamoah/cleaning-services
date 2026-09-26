"use client";

import { useState } from "react";
import { Calculator, CheckCircle2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

type EstimateType = "commercial" | "residential";
type EstimateFrequency = "daily" | "weekly" | "biweekly" | "once";

const FREQUENCY_OPTIONS: { id: EstimateFrequency; label: string; tag: string }[] = [
  { id: "daily", label: "Daily / Nightly", tag: "30% off" },
  { id: "weekly", label: "Weekly", tag: "15% off" },
  { id: "biweekly", label: "Bi-Weekly", tag: "8% off" },
  { id: "once", label: "One-Time", tag: "Standard" },
];

const RESTROOM_OPTIONS = [1, 2, 3, 5, 8];

function calculateEstimate(
  type: EstimateType,
  sqFt: number,
  restrooms: number,
  carpetCare: boolean,
  freq: EstimateFrequency
) {
  let baseRate = type === "commercial" ? sqFt * 0.08 : sqFt * 0.11;
  baseRate += restrooms * 25;
  if (carpetCare) baseRate += 45;

  let discountMultiplier = 1;
  if (freq === "daily") discountMultiplier = 0.7;
  else if (freq === "weekly") discountMultiplier = 0.85;
  else if (freq === "biweekly") discountMultiplier = 0.92;

  const estimatedPerVisit = Math.round(baseRate * discountMultiplier);
  const estimatedMonthly =
    freq === "daily"
      ? estimatedPerVisit * 22
      : freq === "weekly"
      ? estimatedPerVisit * 4
      : freq === "biweekly"
      ? estimatedPerVisit * 2
      : estimatedPerVisit;

  return { estimatedPerVisit, estimatedMonthly };
}

export function CostEstimator() {
  const [type, setType] = useState<EstimateType>("commercial");
  const [sqFt, setSqFt] = useState(3500);
  const [freq, setFreq] = useState<EstimateFrequency>("weekly");
  const [restrooms, setRestrooms] = useState(3);
  const [carpetCare, setCarpetCare] = useState(true);

  const { estimatedPerVisit, estimatedMonthly } = calculateEstimate(
    type,
    sqFt,
    restrooms,
    carpetCare,
    freq
  );

  const scrollToInquiryForm = () => {
    document.getElementById("b2b-form-section")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Dynamic background card: pristine light card on light mode, frosted slate on dark mode */}
      <div className="bg-card/85 dark:bg-slate-900/75 backdrop-blur-2xl text-card-foreground dark:text-white rounded-3xl p-6 sm:p-10 border border-border/80 dark:border-white/15 shadow-2xl relative overflow-hidden">
        {/* Glassmorphism ambient glow accents */}
        <div className="absolute right-0 top-0 w-96 h-96 bg-brand/10 dark:bg-brand/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute left-0 bottom-0 w-80 h-80 bg-brand/5 dark:bg-brand/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-3xl space-y-3 mb-8 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-muted text-brand border border-brand/30 text-xs font-bold uppercase tracking-wider">
            <Calculator className="w-3.5 h-3.5" />
            <span>Transparent Planning Tool</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display tracking-tight text-foreground dark:text-white">
            Instant Cleaning Budget Estimator
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground dark:text-slate-300 leading-relaxed">
            Use our interactive estimator to gauge typical investment and frequency discounts before scheduling a physical walk-through.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative z-10">
          {/* Controls Column */}
          <div className="lg:col-span-7 space-y-6">
            <div className="grid grid-cols-2 gap-2 p-1.5 bg-secondary/70 backdrop-blur-md rounded-2xl border border-border/80">
              <button
                type="button"
                onClick={() => setType("commercial")}
                className={`py-2.5 text-xs sm:text-sm font-semibold rounded-xl transition-all cursor-pointer ${
                  type === "commercial"
                    ? "bg-primary text-primary-foreground shadow-md font-bold"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                Commercial Facility
              </button>
              <button
                type="button"
                onClick={() => setType("residential")}
                className={`py-2.5 text-xs sm:text-sm font-semibold rounded-xl transition-all cursor-pointer ${
                  type === "residential"
                    ? "bg-primary text-primary-foreground shadow-md font-bold"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                Residential Estate
              </button>
            </div>

            <div className="space-y-3 bg-secondary/40 backdrop-blur-md p-5 rounded-2xl border border-border/80">
              <div className="flex justify-between items-center text-sm font-semibold">
                <span className="text-foreground dark:text-slate-200">Approximate Floor Area</span>
                <span className="text-brand font-bold font-mono text-base sm:text-lg">
                  {sqFt.toLocaleString()} sq ft
                </span>
              </div>
              <input
                type="range"
                min={1000}
                max={25000}
                step={500}
                value={sqFt}
                onChange={(e) => setSqFt(Number(e.target.value))}
                className="w-full accent-brand h-2 bg-secondary rounded-lg cursor-pointer"
              />
              <div className="flex justify-between text-[11px] text-muted-foreground font-medium">
                <span>1,000 sq ft</span>
                <span>10,000 sq ft</span>
                <span>25,000+ sq ft</span>
              </div>
            </div>

            <div className="space-y-2.5">
              <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground dark:text-slate-300">
                Cleaning Cadence
              </span>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {FREQUENCY_OPTIONS.map((option) => (
                  <button
                    key={option.id}
                    type="button"
                    onClick={() => setFreq(option.id)}
                    className={`p-3.5 rounded-2xl text-left border text-xs transition-all cursor-pointer backdrop-blur-md ${
                      freq === option.id
                        ? "border-brand bg-brand/15 text-foreground dark:text-white shadow-md shadow-brand/10 font-bold"
                        : "border-border/80 bg-secondary/40 text-muted-foreground hover:border-border hover:text-foreground"
                    }`}
                  >
                    <div className="font-bold text-foreground dark:text-white">{option.label}</div>
                    <div className="text-[10px] text-brand font-semibold mt-1">{option.tag}</div>
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
              <div className="bg-secondary/40 backdrop-blur-md p-4 rounded-2xl border border-border/80 space-y-2.5">
                <Label className="text-foreground dark:text-slate-200 text-xs font-bold uppercase tracking-wider block">
                  Number of Restrooms / Hubs
                </Label>
                <div className="flex items-center gap-1.5">
                  {RESTROOM_OPTIONS.map((num) => (
                    <button
                      key={num}
                      type="button"
                      onClick={() => setRestrooms(num)}
                      className={`w-9 h-9 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                        restrooms === num
                          ? "bg-brand text-brand-foreground shadow-sm"
                          : "bg-secondary text-foreground hover:bg-secondary/80"
                      }`}
                    >
                      {num}
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between p-4 rounded-2xl bg-secondary/40 backdrop-blur-md border border-border/80">
                <div className="space-y-0.5">
                  <div className="text-xs font-bold text-foreground dark:text-white">
                    Carpet & Grout Steam Care
                  </div>
                  <div className="text-[11px] text-muted-foreground">High-filtration extraction</div>
                </div>
                <input
                  type="checkbox"
                  checked={carpetCare}
                  onChange={(e) => setCarpetCare(e.target.checked)}
                  className="w-5 h-5 accent-brand rounded cursor-pointer"
                />
              </div>
            </div>
          </div>

          {/* Results Summary Column */}
          <div className="lg:col-span-5 bg-secondary/70 dark:bg-slate-900/80 backdrop-blur-2xl p-6 sm:p-7 rounded-2xl border border-brand/40 space-y-6 shadow-xl">
            <div className="flex items-center justify-between pb-4 border-b border-border/80 dark:border-white/10">
              <span className="text-xs font-semibold text-muted-foreground dark:text-slate-300">Estimated Plan</span>
              <span className="text-[10px] px-2.5 py-1 rounded-lg bg-brand/20 text-brand font-bold uppercase tracking-wider">
                Subject to walk-through
              </span>
            </div>

            <div className="space-y-4">
              <div>
                <span className="text-xs text-muted-foreground font-medium block">Estimated Cost Per Visit</span>
                <div className="text-3xl sm:text-4xl font-extrabold text-foreground dark:text-white font-display mt-0.5">
                  ${estimatedPerVisit}
                  <span className="text-xs text-muted-foreground font-normal"> / session</span>
                </div>
              </div>

              <div className="p-4 bg-background dark:bg-slate-950/80 rounded-2xl border border-border/80 dark:border-white/10 space-y-1 shadow-inner">
                <span className="text-xs text-muted-foreground block font-medium">Projected Monthly Investment</span>
                <div className="text-2xl font-extrabold text-brand font-mono">
                  ${estimatedMonthly.toLocaleString()}{" "}
                  <span className="text-xs text-muted-foreground font-normal">/ month</span>
                </div>
                <p className="text-[11px] text-muted-foreground leading-relaxed pt-1">
                  Includes verified cleaner crews, professional supplies, equipment, and $5M liability insurance.
                </p>
              </div>

              <div className="space-y-2.5 text-xs text-foreground dark:text-slate-200 font-medium">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand shrink-0" />
                  <span>Dedicated account supervisor assigned</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand shrink-0" />
                  <span>30-Day SLA Satisfaction Guarantee</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand shrink-0" />
                  <span>EPA Green Seal hospital-grade formulas</span>
                </div>
              </div>
            </div>

            <Button
              variant="default"
              onClick={scrollToInquiryForm}
              className="w-full h-12 bg-brand text-brand-foreground hover:bg-brand/90 font-bold rounded-xl shadow-lg shadow-brand/25 cursor-pointer group"
            >
              <span>Lock In Estimate with B2B Inquiry</span>
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};