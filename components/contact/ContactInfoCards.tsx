import { Phone, Mail, MapPin, AlertTriangle } from "lucide-react";

export const ContactInfoCards: React.FC = () => (
  <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {/* Phone Card */}
      <div className="p-7 rounded-3xl bg-card/75 dark:bg-card/40 backdrop-blur-xl border border-border/80 shadow-lg hover:border-brand/50 hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group relative overflow-hidden">
        <div className="absolute inset-x-0 top-0 h-1 bg-brand opacity-0 group-hover:opacity-100 transition-opacity" />
        
        <div className="space-y-4">
          <div className="w-12 h-12 rounded-2xl bg-secondary/80 border border-border/60 text-brand flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform">
            <Phone className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-base font-bold text-foreground font-display tracking-tight">
              Phone & Urgent Dispatch
            </h3>
            <p className="text-xs text-muted-foreground mt-1 font-medium">
              Mon - Sat, 8:00 AM - 8:00 PM GMT
            </p>
          </div>
        </div>
        <div className="pt-4 mt-4 border-t border-border/60 text-sm font-extrabold text-brand font-mono">
          +44 (0) 800 582 AURA
        </div>
      </div>

      {/* Email Card */}
      <div className="p-7 rounded-3xl bg-card/75 dark:bg-card/40 backdrop-blur-xl border border-border/80 shadow-lg hover:border-brand/50 hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group relative overflow-hidden">
        <div className="absolute inset-x-0 top-0 h-1 bg-brand opacity-0 group-hover:opacity-100 transition-opacity" />

        <div className="space-y-4">
          <div className="w-12 h-12 rounded-2xl bg-secondary/80 border border-border/60 text-brand flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform">
            <Mail className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-base font-bold text-foreground font-display tracking-tight">
              Direct Email Inquiries
            </h3>
            <p className="text-xs text-muted-foreground mt-1 font-medium">
              Typical response in under 2 hours
            </p>
          </div>
        </div>
        <div className="pt-4 mt-4 border-t border-border/60 text-xs sm:text-sm font-extrabold text-brand truncate font-mono">
          inquiries@auracleanstaffing.co.uk
        </div>
      </div>

      {/* HQ Location Card */}
      <div className="p-7 rounded-3xl bg-card/75 dark:bg-card/40 backdrop-blur-xl border border-border/80 shadow-lg hover:border-brand/50 hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group relative overflow-hidden">
        <div className="absolute inset-x-0 top-0 h-1 bg-brand opacity-0 group-hover:opacity-100 transition-opacity" />

        <div className="space-y-4">
          <div className="w-12 h-12 rounded-2xl bg-secondary/80 border border-border/60 text-brand flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform">
            <MapPin className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-base font-bold text-foreground font-display tracking-tight">
              Operations Headquarters
            </h3>
            <p className="text-xs text-muted-foreground mt-1 font-medium">
              The Scalpel, Level 14, 52 Lime St
            </p>
          </div>
        </div>
        <div className="pt-4 mt-4 border-t border-border/60 text-xs font-semibold text-foreground/90">
          London, EC3M 7AF, United Kingdom
        </div>
      </div>

      {/* Emergency Spill Line Card */}
      <div className="p-7 rounded-3xl bg-card/75 dark:bg-card/40 backdrop-blur-xl border border-border/80 shadow-lg hover:border-rose-500/50 hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group relative overflow-hidden">
        <div className="absolute inset-x-0 top-0 h-1 bg-rose-500 opacity-0 group-hover:opacity-100 transition-opacity" />

        <div className="space-y-4">
          <div className="w-12 h-12 rounded-2xl bg-secondary/80 border border-border/60 text-rose-500 flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform">
            <AlertTriangle className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-base font-bold text-foreground font-display tracking-tight">
              Emergency Spill Line
            </h3>
            <p className="text-xs text-muted-foreground mt-1 font-medium">
              Water leaks, event spills & biohazard
            </p>
          </div>
        </div>
        <div className="pt-4 mt-4 border-t border-border/60 text-xs font-bold text-rose-500 font-mono">
          Priority UK Contract Line #24
        </div>
      </div>
    </div>
  </section>
);