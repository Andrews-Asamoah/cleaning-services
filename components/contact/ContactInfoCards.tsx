import { Phone, Mail, MapPin, AlertTriangle } from "lucide-react";

export const ContactInfoCards: React.FC = () => (
  <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {/* Phone Card */}
      <div className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-border/80 bg-card/75 p-7 shadow-lg backdrop-blur-xl transition-all duration-300 hover:border-brand/50 hover:shadow-2xl dark:bg-card/40">
        <div className="absolute inset-x-0 top-0 h-1 bg-brand opacity-0 transition-opacity group-hover:opacity-100" />

        <div className="space-y-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-border/60 bg-secondary/80 text-brand shadow-sm transition-transform group-hover:scale-105">
            <Phone className="h-5 w-5" />
          </div>
          <div>
            <h3 className="font-display text-base font-bold tracking-tight text-foreground">
              Phone & Urgent Dispatch
            </h3>
            <p className="mt-1 text-xs font-medium text-muted-foreground">
              Mon - Sat, 8:00 AM - 8:00 PM GMT
            </p>
          </div>
        </div>
        <div className="mt-4 border-t border-border/60 pt-4 font-mono text-sm font-extrabold text-brand">
          +44 (0) 800 582 AURA
        </div>
      </div>

      {/* Email Card */}
      <div className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-border/80 bg-card/75 p-7 shadow-lg backdrop-blur-xl transition-all duration-300 hover:border-brand/50 hover:shadow-2xl dark:bg-card/40">
        <div className="absolute inset-x-0 top-0 h-1 bg-brand opacity-0 transition-opacity group-hover:opacity-100" />

        <div className="space-y-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-border/60 bg-secondary/80 text-brand shadow-sm transition-transform group-hover:scale-105">
            <Mail className="h-5 w-5" />
          </div>
          <div>
            <h3 className="font-display text-base font-bold tracking-tight text-foreground">
              Direct Email Inquiries
            </h3>
            <p className="mt-1 text-xs font-medium text-muted-foreground">
              Typical response in under 2 hours
            </p>
          </div>
        </div>
        <div className="mt-4 truncate border-t border-border/60 pt-4 font-mono text-xs font-extrabold text-brand sm:text-sm">
          inquiries@auracleanstaffing.co.uk
        </div>
      </div>

      {/* HQ Location Card */}
      <div className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-border/80 bg-card/75 p-7 shadow-lg backdrop-blur-xl transition-all duration-300 hover:border-brand/50 hover:shadow-2xl dark:bg-card/40">
        <div className="absolute inset-x-0 top-0 h-1 bg-brand opacity-0 transition-opacity group-hover:opacity-100" />

        <div className="space-y-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-border/60 bg-secondary/80 text-brand shadow-sm transition-transform group-hover:scale-105">
            <MapPin className="h-5 w-5" />
          </div>
          <div>
            <h3 className="font-display text-base font-bold tracking-tight text-foreground">
              Operations Headquarters
            </h3>
            <p className="mt-1 text-xs font-medium text-muted-foreground">
              The Scalpel, Level 14, 52 Lime St
            </p>
          </div>
        </div>
        <div className="mt-4 border-t border-border/60 pt-4 text-xs font-semibold text-foreground/90">
          London, EC3M 7AF, United Kingdom
        </div>
      </div>

      {/* Emergency Spill Line Card */}
      <div className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-border/80 bg-card/75 p-7 shadow-lg backdrop-blur-xl transition-all duration-300 hover:border-rose-500/50 hover:shadow-2xl dark:bg-card/40">
        <div className="absolute inset-x-0 top-0 h-1 bg-rose-500 opacity-0 transition-opacity group-hover:opacity-100" />

        <div className="space-y-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-border/60 bg-secondary/80 text-rose-500 shadow-sm transition-transform group-hover:scale-105">
            <AlertTriangle className="h-5 w-5" />
          </div>
          <div>
            <h3 className="font-display text-base font-bold tracking-tight text-foreground">
              Emergency Spill Line
            </h3>
            <p className="mt-1 text-xs font-medium text-muted-foreground">
              Water leaks, event spills & biohazard
            </p>
          </div>
        </div>
        <div className="mt-4 border-t border-border/60 pt-4 font-mono text-xs font-bold text-rose-500">
          Priority UK Contract Line #24
        </div>
      </div>
    </div>
  </section>
);
