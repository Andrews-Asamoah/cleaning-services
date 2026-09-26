import Image from "next/image";
import React, { useState } from "react";
import { Sparkles, ArrowLeftRight, CheckCircle2 } from "lucide-react";
import { Tabs, TabsList, TabsTrigger } from "../ui/tabs";

export const BeforeAfterShowcase: React.FC = () => {
  const [activeBeforeAfter, setActiveBeforeAfter] = useState<"office" | "kitchen" | "clinic">("office");
  const [showAfterState, setShowAfterState] = useState(true);

  const beforeAfterExamples = {
    office: {
      title: "Class-A Corporate Headquarters",
      metric: "45,000 sq ft nightly deep cycle",
      desc: "Workstation sanitization, high-traffic carpet restoration, and streak-free glass partition polish.",
      beforeImg: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=1200&q=85",
      afterImg: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=85",
      highlight: "Air particulate count reduced by 64% with hospital-grade HEPA filtration"
    },
    kitchen: {
      title: "Luxury Residential Estate",
      metric: "Private Kitchen & Marble Detailing",
      desc: "Stainless steel hood degreasing, food-safe stone conditioning, and deep appliance restoration.",
      beforeImg: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1200&q=85",
      afterImg: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85",
      highlight: "100% hypoallergenic, pet-safe plant-derived enzymes"
    },
    clinic: {
      title: "Pediatric & Dental Medical Clinic",
      metric: "EPA List N Bio-Sanitization",
      desc: "Electrostatic virucidal treatment, waiting room upholstery care, and sterile operatory wipe-downs.",
      beforeImg: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=1200&q=85",
      afterImg: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=85",
      highlight: "Zero-residue disinfectant with official compliance certification"
    }
  };

  const currentExample = beforeAfterExamples[activeBeforeAfter];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="rounded-3xl bg-card border border-border/70 p-6 sm:p-10 shadow-lg space-y-8">
        
        {/* Header & shadcn Tabs Category Selector */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-muted text-brand text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Visible Transformation</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight font-display">
              The AuraClean Difference
            </h2>
            <p className="text-sm text-muted-foreground max-w-xl">
              See the striking contrast between standard upkeep and our hospital-grade restorative detailing across commercial and residential spaces.
            </p>
          </div>

          {/* Upgraded Tabs with generous spacing and Primary color active state */}
          <Tabs 
            value={activeBeforeAfter} 
            onValueChange={(val) => setActiveBeforeAfter(val as "office" | "kitchen" | "clinic")}
            className="w-fit"
          >
            <TabsList className="bg-secondary/60 p-2 rounded-2xl border border-border/60 h-auto gap-2">
              <TabsTrigger 
                value="office" 
                className="rounded-xl text-xs sm:text-sm font-semibold py-2.5 px-5 cursor-pointer data-[state=active]:bg-primary data-[state=active]:text-primary-foreground transition-all shadow-none data-[state=active]:shadow-md"
              >
                Commercial Office
              </TabsTrigger>
              <TabsTrigger 
                value="kitchen" 
                className="rounded-xl text-xs sm:text-sm font-semibold py-2.5 px-5 cursor-pointer data-[state=active]:bg-primary data-[state=active]:text-primary-foreground transition-all shadow-none data-[state=active]:shadow-md"
              >
                Residential Estate
              </TabsTrigger>
              <TabsTrigger 
                value="clinic" 
                className="rounded-xl text-xs sm:text-sm font-semibold py-2.5 px-5 cursor-pointer data-[state=active]:bg-primary data-[state=active]:text-primary-foreground transition-all shadow-none data-[state=active]:shadow-md"
              >
                Medical Clinic
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>

        {/* Display Frame with Instant Preloading to eliminate lag */}
        <div className="relative rounded-2xl overflow-hidden border border-border/80 bg-background aspect-video max-h-[520px] shadow-xl group">
          
          {/* Preload BOTH images in hidden container so switching is instantaneous with zero lag */}
          <div className="hidden">
            <Image src={currentExample.beforeImg} alt="preload before" width={1200} height={800} priority />
            <Image src={currentExample.afterImg} alt="preload after" width={1200} height={800} priority />
          </div>

          {/* Active Image Render */}
          <Image
            src={showAfterState ? currentExample.afterImg : currentExample.beforeImg}
            alt={currentExample.title}
            fill
            priority
            className="w-full h-full object-cover transition-all duration-150 ease-out"
          />

          {/* State Badge Top-Left */}
          <div className="absolute top-4 left-4 z-10 flex items-center gap-2">
            <span
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold tracking-wide uppercase shadow-md backdrop-blur-md flex items-center gap-1.5 ${
                showAfterState 
                  ? "bg-brand text-brand-foreground" 
                  : "bg-amber-500 text-slate-950"
              }`}
            >
              {showAfterState ? (
                <>
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>AuraClean Polish (After)</span>
                </>
              ) : (
                <>
                  <ArrowLeftRight className="w-3.5 h-3.5" />
                  <span>Prior Condition (Before)</span>
                </>
              )}
            </span>
          </div>

          {/* Bottom-Left Callout Card with translucent background and blur */}
          <div className="absolute bottom-4 left-4 right-4 sm:right-auto sm:max-w-md bg-slate-950/70 dark:bg-slate-900/75 backdrop-blur-xl p-4 rounded-2xl border border-white/15 text-white shadow-2xl z-10">
            <div className="text-sm font-bold text-white flex items-center gap-2 mb-1">
              <span>{currentExample.title}</span>
            </div>
            <p className="text-xs text-slate-200 mb-2 leading-relaxed">
              {currentExample.desc}
            </p>
            <div className="flex items-center gap-1.5 text-[11px] font-medium text-brand">
              <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
              <span className="line-clamp-1">{currentExample.highlight}</span>
            </div>
          </div>

          {/* Switcher Toggle Bottom-Right */}
          <div className="absolute bottom-4 right-4 z-10 flex items-center gap-1.5 bg-slate-950/70 dark:bg-slate-900/75 backdrop-blur-xl p-1.5 rounded-2xl border border-white/15 shadow-2xl">
            <button
              type="button"
              onClick={() => setShowAfterState(false)}
              className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                !showAfterState 
                  ? "bg-amber-500 text-slate-950 font-bold shadow-md" 
                  : "text-slate-300 hover:text-white"
              }`}
            >
              Before
            </button>
            <button
              type="button"
              onClick={() => setShowAfterState(true)}
              className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                showAfterState 
                  ? "bg-brand text-brand-foreground font-bold shadow-md" 
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