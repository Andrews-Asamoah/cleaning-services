import Image from "next/image";
import Link from "next/link";
import { Sparkles, Building2, Briefcase, ArrowRight, CheckCircle2, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

export const HeroSection: React.FC = () => {
  return (
    <section className="relative overflow-hidden pt-8 pb-16 lg:pt-14 lg:pb-24">
      {/* Background Glow */}
      <div className="pointer-events-none absolute top-1/4 left-1/2 -z-10 h-[350px] w-[600px] -translate-x-1/2 rounded-full bg-brand/10 blur-3xl" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl space-y-6 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-brand/30 bg-brand-muted px-4 py-1.5 text-xs font-semibold text-brand shadow-xs">
            <Sparkles className="h-3.5 w-3.5 text-brand" />
            <span>Certified Facility Care & Specialist Custodial Recruitment</span>
          </div>

          <h1 className="font-display text-4xl leading-[1.12] font-extrabold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Pristine Spaces, <span className="text-brand">Trusted Professionals.</span>
          </h1>

          <p className="mx-auto max-w-2xl text-lg leading-relaxed font-normal text-muted-foreground sm:text-xl">
            We pair corporate headquarters and prestige private homes with rigorously vetted
            cleaning specialists—backed by $5M insurance, hospital-grade eco-protocols, and rapid
            deployment.
          </p>

          <div className="flex flex-col items-center justify-center gap-4 pt-2 sm:flex-row">
            <Link href="/services">
              <Button
                size="lg"
                variant="default"
                className="group h-13 w-full cursor-pointer gap-2.5 rounded-xl bg-brand px-8 text-base font-semibold text-brand-foreground shadow-lg shadow-brand/20 transition-all hover:bg-brand/90 sm:w-auto"
              >
                <Building2 className="h-5 w-5 text-brand-foreground/90" />
                <span>Looking for Cleaning Services</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>

            <Link href="/careers">
              <Button
                size="lg"
                variant="outline"
                className="h-13 w-full cursor-pointer gap-2.5 rounded-xl border-border px-8 text-base font-semibold text-foreground transition-all hover:bg-secondary sm:w-auto"
              >
                <Briefcase className="h-5 w-5 text-brand" />
                <span>Join Our Team / Submit CV</span>
              </Button>
            </Link>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 pt-6 text-xs font-medium text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="h-4 w-4 text-brand" />
              Same-Day B2B Walkthroughs
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="h-4 w-4 text-brand" />
              100% Background Checked Staff
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="h-4 w-4 text-brand" />
              Non-Toxic Green Seal Formulas
            </span>
          </div>
        </div>

        {/* Hero Visual Showcase with Glassmorphism Overlay Cards */}
        <div className="relative mt-12 h-80 overflow-hidden rounded-3xl border border-border/80 shadow-2xl sm:h-[440px] lg:h-[500px]">
          <Image
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=80"
            alt="Pristine commercial and residential spaces maintained by AuraClean"
            fill
            priority
            className="object-cover object-center"
          />

          {/* Bottom Floating Glassmorphism Container */}
          <div className="absolute inset-x-0 bottom-0 z-10 flex items-end p-4 sm:p-8">
            <div className="flex w-full flex-col items-start justify-between gap-4 md:flex-row md:items-center">
              {/* Glassmorphism Card 1: Enterprise Info */}
              <div className="max-w-sm rounded-2xl border border-white/20 bg-slate-950/60 px-5 py-4 text-white shadow-2xl backdrop-blur-xl dark:bg-slate-900/65">
                <span className="mb-1.5 inline-block rounded-md bg-brand px-2.5 py-0.5 text-[10px] font-extrabold tracking-wider text-brand-foreground uppercase shadow-xs">
                  Verified Excellence
                </span>
                <h3 className="font-display text-base font-bold text-white sm:text-lg">
                  Enterprise Cleanliness Standard
                </h3>
                <p className="mt-0.5 text-xs leading-relaxed text-slate-200">
                  Serving over 120 corporate properties and 800+ residential homes weekly.
                </p>
              </div>

              {/* Glassmorphism Card 2: Rating & Avatars */}
              <div className="flex items-center gap-3.5 rounded-2xl border border-white/20 bg-slate-950/60 px-4 py-3.5 text-white shadow-2xl backdrop-blur-xl dark:bg-slate-900/65">
                <div className="flex -space-x-2">
                  <div className="relative h-8 w-8 overflow-hidden rounded-full ring-2 ring-white/80">
                    <Image
                      src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80"
                      alt="Cleaner"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="relative h-8 w-8 overflow-hidden rounded-full ring-2 ring-white/80">
                    <Image
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80"
                      alt="Supervisor"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="relative h-8 w-8 overflow-hidden rounded-full ring-2 ring-white/80">
                    <Image
                      src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=100&q=80"
                      alt="Operations"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="text-left">
                  <div className="flex items-center text-xs text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-3.5 w-3.5 fill-current" />
                    ))}
                  </div>
                  <span className="text-xs font-bold text-white">
                    4.9/5 Rating (1,400+ Reviews)
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
