import Image from "next/image";
import React, { useState } from "react";
import { Sparkles, ArrowLeftRight, CheckCircle2 } from "lucide-react";
import { Tabs, TabsList, TabsTrigger } from "../ui/tabs";

export const BeforeAfterShowcase: React.FC = () => {
  const [activeBeforeAfter, setActiveBeforeAfter] = useState<"office" | "kitchen" | "clinic">(
    "office",
  );
  const [showAfterState, setShowAfterState] = useState(true);

  const beforeAfterExamples = {
    office: {
      title: "Class-A Corporate Headquarters",
      metric: "45,000 sq ft nightly deep cycle",
      desc: "Workstation sanitization, high-traffic carpet restoration, and streak-free glass partition polish.",
      beforeImg:
        "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=1200&q=85",
      afterImg:
        "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=85",
      highlight: "Air particulate count reduced by 64% with hospital-grade HEPA filtration",
    },
    kitchen: {
      title: "Luxury Residential Estate",
      metric: "Private Kitchen & Marble Detailing",
      desc: "Stainless steel hood degreasing, food-safe stone conditioning, and deep appliance restoration.",
      beforeImg:
        "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1200&q=85",
      afterImg:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85",
      highlight: "100% hypoallergenic, pet-safe plant-derived enzymes",
    },
    clinic: {
      title: "Pediatric & Dental Medical Clinic",
      metric: "EPA List N Bio-Sanitization",
      desc: "Electrostatic virucidal treatment, waiting room upholstery care, and sterile operatory wipe-downs.",
      beforeImg:
        "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=1200&q=85",
      afterImg:
        "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=85",
      highlight: "Zero-residue disinfectant with official compliance certification",
    },
  };

  const currentExample = beforeAfterExamples[activeBeforeAfter];

  return (
    <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="space-y-8 rounded-3xl border border-border/70 bg-card p-6 shadow-lg sm:p-10">
        {/* Header & shadcn Tabs Category Selector */}
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-center">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-1.5 rounded-full bg-brand-muted px-3 py-1 text-xs font-bold tracking-wider text-brand uppercase">
              <Sparkles className="h-3.5 w-3.5" />
              <span>Visible Transformation</span>
            </div>
            <h2 className="font-display text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
              The AuraClean Difference
            </h2>
            <p className="max-w-xl text-sm text-muted-foreground">
              See the striking contrast between standard upkeep and our hospital-grade restorative
              detailing across commercial and residential spaces.
            </p>
          </div>

          {/* Upgraded Tabs with generous spacing and Primary color active state */}
          <Tabs
            value={activeBeforeAfter}
            onValueChange={(val) => setActiveBeforeAfter(val as "office" | "kitchen" | "clinic")}
            className="w-fit"
          >
            <TabsList className="h-auto gap-2 rounded-2xl border border-border/60 bg-secondary/60 p-2">
              <TabsTrigger
                value="office"
                className="cursor-pointer rounded-xl px-5 py-2.5 text-xs font-semibold shadow-none transition-all data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-md sm:text-sm"
              >
                Commercial Office
              </TabsTrigger>
              <TabsTrigger
                value="kitchen"
                className="cursor-pointer rounded-xl px-5 py-2.5 text-xs font-semibold shadow-none transition-all data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-md sm:text-sm"
              >
                Residential Estate
              </TabsTrigger>
              <TabsTrigger
                value="clinic"
                className="cursor-pointer rounded-xl px-5 py-2.5 text-xs font-semibold shadow-none transition-all data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-md sm:text-sm"
              >
                Medical Clinic
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>

        {/* Display Frame with Instant Preloading to eliminate lag */}
        <div className="group relative aspect-video max-h-[520px] overflow-hidden rounded-2xl border border-border/80 bg-background shadow-xl">
          {/* Preload BOTH images in hidden container so switching is instantaneous with zero lag */}
          <div className="hidden">
            <Image
              src={currentExample.beforeImg}
              alt="preload before"
              width={1200}
              height={800}
              priority
            />
            <Image
              src={currentExample.afterImg}
              alt="preload after"
              width={1200}
              height={800}
              priority
            />
          </div>

          {/* Active Image Render */}
          <Image
            src={showAfterState ? currentExample.afterImg : currentExample.beforeImg}
            alt={currentExample.title}
            fill
            priority
            className="h-full w-full object-cover transition-all duration-150 ease-out"
          />

          {/* State Badge Top-Left */}
          <div className="absolute top-4 left-4 z-10 flex items-center gap-2">
            <span
              className={`flex items-center gap-1.5 rounded-xl px-3.5 py-1.5 text-xs font-bold tracking-wide uppercase shadow-md backdrop-blur-md ${
                showAfterState ? "bg-brand text-brand-foreground" : "bg-amber-500 text-slate-950"
              }`}
            >
              {showAfterState ? (
                <>
                  <Sparkles className="h-3.5 w-3.5" />
                  <span>AuraClean Polish (After)</span>
                </>
              ) : (
                <>
                  <ArrowLeftRight className="h-3.5 w-3.5" />
                  <span>Prior Condition (Before)</span>
                </>
              )}
            </span>
          </div>

          {/* Bottom-Left Callout Card with translucent background and blur */}
          <div className="absolute right-4 bottom-4 left-4 z-10 rounded-2xl border border-white/15 bg-slate-950/70 p-4 text-white shadow-2xl backdrop-blur-xl sm:right-auto sm:max-w-md dark:bg-slate-900/75">
            <div className="mb-1 flex items-center gap-2 text-sm font-bold text-white">
              <span>{currentExample.title}</span>
            </div>
            <p className="mb-2 text-xs leading-relaxed text-slate-200">{currentExample.desc}</p>
            <div className="flex items-center gap-1.5 text-[11px] font-medium text-brand">
              <CheckCircle2 className="h-3.5 w-3.5 shrink-0" />
              <span className="line-clamp-1">{currentExample.highlight}</span>
            </div>
          </div>

          {/* Switcher Toggle Bottom-Right */}
          <div className="absolute right-4 bottom-4 z-10 flex items-center gap-1.5 rounded-2xl border border-white/15 bg-slate-950/70 p-1.5 shadow-2xl backdrop-blur-xl dark:bg-slate-900/75">
            <button
              type="button"
              onClick={() => setShowAfterState(false)}
              className={`cursor-pointer rounded-xl px-3.5 py-2 text-xs font-semibold transition-all ${
                !showAfterState
                  ? "bg-amber-500 font-bold text-slate-950 shadow-md"
                  : "text-slate-300 hover:text-white"
              }`}
            >
              Before
            </button>
            <button
              type="button"
              onClick={() => setShowAfterState(true)}
              className={`cursor-pointer rounded-xl px-3.5 py-2 text-xs font-semibold transition-all ${
                showAfterState
                  ? "bg-brand font-bold text-brand-foreground shadow-md"
                  : "text-slate-300 hover:text-white"
              }`}
            >
              After
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
