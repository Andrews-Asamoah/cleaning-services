import Image from "next/image";
import Link from "next/link";
import { Sparkles, Building2, Briefcase, ArrowRight, CheckCircle2, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

export const HeroSection: React.FC = () => {
  return (
    <section className="relative overflow-hidden pt-8 pb-16 lg:pt-14 lg:pb-24">
      {/* Background Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-brand/10 blur-3xl rounded-full -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-muted text-brand border border-brand/30 text-xs font-semibold shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-brand" />
            <span>Certified Facility Care & Specialist Custodial Recruitment</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground font-display leading-[1.12]">
            Pristine Spaces,{" "}
            <span className="text-brand">
              Trusted Professionals.
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed font-normal max-w-2xl mx-auto">
            We pair corporate headquarters and prestige private homes with rigorously vetted cleaning specialists—backed by $5M insurance, hospital-grade eco-protocols, and rapid deployment.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/services">
              <Button
                size="lg"
                variant="default"
                className="w-full sm:w-auto h-13 px-8 text-base bg-brand text-brand-foreground hover:bg-brand/90 shadow-lg shadow-brand/20 group gap-2.5 cursor-pointer rounded-xl font-semibold transition-all"
              >
                <Building2 className="w-5 h-5 text-brand-foreground/90" />
                <span>Looking for Cleaning Services</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            
            <Link href="/careers">
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto h-13 px-8 text-base border-border hover:bg-secondary text-foreground gap-2.5 cursor-pointer rounded-xl font-semibold transition-all"
              >
                <Briefcase className="w-5 h-5 text-brand" />
                <span>Join Our Team / Submit CV</span>
              </Button>
            </Link>
          </div>

          <div className="pt-6 flex flex-wrap items-center justify-center gap-y-2 gap-x-6 text-xs font-medium text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-brand" />
              Same-Day B2B Walkthroughs
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-brand" />
              100% Background Checked Staff
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-brand" />
              Non-Toxic Green Seal Formulas
            </span>
          </div>
        </div>

        {/* Hero Visual Showcase with Glassmorphism Overlay Cards */}
        <div className="mt-12 relative rounded-3xl overflow-hidden border border-border/80 shadow-2xl h-80 sm:h-[440px] lg:h-[500px]">
          <Image
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=80"
            alt="Pristine commercial and residential spaces maintained by AuraClean"
            fill
            priority
            className="object-cover object-center"
          />

          {/* Bottom Floating Glassmorphism Container */}
          <div className="absolute inset-x-0 bottom-0 p-4 sm:p-8 flex items-end z-10">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between w-full gap-4">
              
              {/* Glassmorphism Card 1: Enterprise Info */}
              <div className="bg-slate-950/60 dark:bg-slate-900/65 backdrop-blur-xl px-5 py-4 rounded-2xl border border-white/20 shadow-2xl max-w-sm text-white">
                <span className="px-2.5 py-0.5 rounded-md text-[10px] font-extrabold bg-brand text-brand-foreground uppercase tracking-wider inline-block mb-1.5 shadow-xs">
                  Verified Excellence
                </span>
                <h3 className="text-base sm:text-lg font-bold font-display text-white">
                  Enterprise Cleanliness Standard
                </h3>
                <p className="text-xs text-slate-200 mt-0.5 leading-relaxed">
                  Serving over 120 corporate properties and 800+ residential homes weekly.
                </p>
              </div>

              {/* Glassmorphism Card 2: Rating & Avatars */}
              <div className="bg-slate-950/60 dark:bg-slate-900/65 backdrop-blur-xl px-4 py-3.5 rounded-2xl border border-white/20 shadow-2xl flex items-center gap-3.5 text-white">
                <div className="flex -space-x-2">
                  <div className="relative h-8 w-8 rounded-full ring-2 ring-white/80 overflow-hidden">
                    <Image src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80" alt="Cleaner" fill className="object-cover" />
                  </div>
                  <div className="relative h-8 w-8 rounded-full ring-2 ring-white/80 overflow-hidden">
                    <Image src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80" alt="Supervisor" fill className="object-cover" />
                  </div>
                  <div className="relative h-8 w-8 rounded-full ring-2 ring-white/80 overflow-hidden">
                    <Image src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=100&q=80" alt="Operations" fill className="object-cover" />
                  </div>
                </div>
                <div className="text-left">
                  <div className="flex items-center text-amber-400 text-xs">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                  <span className="text-xs font-bold text-white">4.9/5 Rating (1,400+ Reviews)</span>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};