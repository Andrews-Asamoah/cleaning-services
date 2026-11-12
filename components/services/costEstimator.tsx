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
  freq: EstimateFrequency,
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
    freq,
  );

  const scrollToInquiryForm = () => {
    document.getElementById("b2b-form-section")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      {/* Dynamic background card: pristine light card on light mode, frosted slate on dark mode */}
      <div className="relative overflow-hidden rounded-3xl border border-border/80 bg-card/85 p-6 text-card-foreground shadow-2xl backdrop-blur-2xl sm:p-10 dark:border-white/15 dark:bg-slate-900/75 dark:text-white">
        {/* Glassmorphism ambient glow accents */}
        <div className="pointer-events-none absolute top-0 right-0 h-96 w-96 rounded-full bg-brand/10 blur-3xl dark:bg-brand/15" />
        <div className="pointer-events-none absolute bottom-0 left-0 h-80 w-80 rounded-full bg-brand/5 blur-3xl dark:bg-brand/10" />

        <div className="relative z-10 mb-8 max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 rounded-full border border-brand/30 bg-brand-muted px-3 py-1 text-xs font-bold tracking-wider text-brand uppercase">
            <Calculator className="h-3.5 w-3.5" />
            <span>Transparent Planning Tool</span>
          </div>
          <h2 className="font-display text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl dark:text-white">
            Instant Cleaning Budget Estimator
          </h2>
          <p className="text-sm leading-relaxed text-muted-foreground sm:text-base dark:text-slate-300">
            Use our interactive estimator to gauge typical investment and frequency discounts before
            scheduling a physical walk-through.
          </p>
        </div>

        <div className="relative z-10 grid grid-cols-1 items-start gap-8 lg:grid-cols-12">
          {/* Controls Column */}
          <div className="space-y-6 lg:col-span-7">
            <div className="grid grid-cols-2 gap-2 rounded-2xl border border-border/80 bg-secondary/70 p-1.5 backdrop-blur-md">
              <button
                type="button"
                onClick={() => setType("commercial")}
                className={`cursor-pointer rounded-xl py-2.5 text-xs font-semibold transition-all sm:text-sm ${
                  type === "commercial"
                    ? "bg-primary font-bold text-primary-foreground shadow-md"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                Commercial Facility
              </button>
              <button
                type="button"
                onClick={() => setType("residential")}
                className={`cursor-pointer rounded-xl py-2.5 text-xs font-semibold transition-all sm:text-sm ${
                  type === "residential"
                    ? "bg-primary font-bold text-primary-foreground shadow-md"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                Residential Estate
              </button>
            </div>

            <div className="space-y-3 rounded-2xl border border-border/80 bg-secondary/40 p-5 backdrop-blur-md">
              <div className="flex items-center justify-between text-sm font-semibold">
                <span className="text-foreground dark:text-slate-200">Approximate Floor Area</span>
                <span className="font-mono text-base font-bold text-brand sm:text-lg">
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
                className="h-2 w-full cursor-pointer rounded-lg bg-secondary accent-brand"
              />
              <div className="flex justify-between text-[11px] font-medium text-muted-foreground">
                <span>1,000 sq ft</span>
                <span>10,000 sq ft</span>
                <span>25,000+ sq ft</span>
              </div>
            </div>

            <div className="space-y-2.5">
              <span className="text-xs font-bold tracking-wider text-muted-foreground uppercase dark:text-slate-300">
                Cleaning Cadence
              </span>
              <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-4">
                {FREQUENCY_OPTIONS.map((option) => (
                  <button
                    key={option.id}
                    type="button"
                    onClick={() => setFreq(option.id)}
                    className={`cursor-pointer rounded-2xl border p-3.5 text-left text-xs backdrop-blur-md transition-all ${
                      freq === option.id
                        ? "border-brand bg-brand/15 font-bold text-foreground shadow-md shadow-brand/10 dark:text-white"
                        : "border-border/80 bg-secondary/40 text-muted-foreground hover:border-border hover:text-foreground"
                    }`}
                  >
                    <div className="font-bold text-foreground dark:text-white">{option.label}</div>
                    <div className="mt-1 text-[10px] font-semibold text-brand">{option.tag}</div>
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 pt-1 sm:grid-cols-2">
              <div className="space-y-2.5 rounded-2xl border border-border/80 bg-secondary/40 p-4 backdrop-blur-md">
                <Label className="block text-xs font-bold tracking-wider text-foreground uppercase dark:text-slate-200">
                  Number of Restrooms / Hubs
                </Label>
                <div className="flex items-center gap-1.5">
                  {RESTROOM_OPTIONS.map((num) => (
                    <button
                      key={num}
                      type="button"
                      onClick={() => setRestrooms(num)}
                      className={`h-9 w-9 cursor-pointer rounded-xl text-xs font-bold transition-all ${
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

              <div className="flex items-center justify-between rounded-2xl border border-border/80 bg-secondary/40 p-4 backdrop-blur-md">
                <div className="space-y-0.5">
                  <div className="text-xs font-bold text-foreground dark:text-white">
                    Carpet & Grout Steam Care
                  </div>
                  <div className="text-[11px] text-muted-foreground">
                    High-filtration extraction
                  </div>
                </div>
                <input
                  type="checkbox"
                  checked={carpetCare}
                  onChange={(e) => setCarpetCare(e.target.checked)}
                  className="h-5 w-5 cursor-pointer rounded accent-brand"
                />
              </div>
            </div>
          </div>

          {/* Results Summary Column */}
          <div className="space-y-6 rounded-2xl border border-brand/40 bg-secondary/70 p-6 shadow-xl backdrop-blur-2xl sm:p-7 lg:col-span-5 dark:bg-slate-900/80">
            <div className="flex items-center justify-between border-b border-border/80 pb-4 dark:border-white/10">
              <span className="text-xs font-semibold text-muted-foreground dark:text-slate-300">
                Estimated Plan
              </span>
              <span className="rounded-lg bg-brand/20 px-2.5 py-1 text-[10px] font-bold tracking-wider text-brand uppercase">
                Subject to walk-through
              </span>
            </div>

            <div className="space-y-4">
              <div>
                <span className="block text-xs font-medium text-muted-foreground">
                  Estimated Cost Per Visit
                </span>
                <div className="mt-0.5 font-display text-3xl font-extrabold text-foreground sm:text-4xl dark:text-white">
                  ${estimatedPerVisit}
                  <span className="text-xs font-normal text-muted-foreground"> / session</span>
                </div>
              </div>

              <div className="space-y-1 rounded-2xl border border-border/80 bg-background p-4 shadow-inner dark:border-white/10 dark:bg-slate-950/80">
                <span className="block text-xs font-medium text-muted-foreground">
                  Projected Monthly Investment
                </span>
                <div className="font-mono text-2xl font-extrabold text-brand">
                  ${estimatedMonthly.toLocaleString()}{" "}
                  <span className="text-xs font-normal text-muted-foreground">/ month</span>
                </div>
                <p className="pt-1 text-[11px] leading-relaxed text-muted-foreground">
                  Includes verified cleaner crews, professional supplies, equipment, and $5M
                  liability insurance.
                </p>
              </div>

              <div className="space-y-2.5 text-xs font-medium text-foreground dark:text-slate-200">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-brand" />
                  <span>Dedicated account supervisor assigned</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-brand" />
                  <span>30-Day SLA Satisfaction Guarantee</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-brand" />
                  <span>EPA Green Seal hospital-grade formulas</span>
                </div>
              </div>
            </div>

            <Button
              variant="default"
              onClick={scrollToInquiryForm}
              className="group h-12 w-full cursor-pointer rounded-xl bg-brand font-bold text-brand-foreground shadow-lg shadow-brand/25 hover:bg-brand/90"
            >
              <span>Lock In Estimate with B2B Inquiry</span>
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
