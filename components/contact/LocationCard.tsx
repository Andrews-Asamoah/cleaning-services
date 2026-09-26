"use client"
import Image from "next/image";
import { Building, Clock, ShieldCheck } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export const LocationCard: React.FC = () => (
  <div className="space-y-6">
    <Card className="border-border/80 pt-0 bg-card/75 dark:bg-card/40 backdrop-blur-xl overflow-hidden shadow-2xl rounded-3xl group">
      <div className="relative h-52 bg-secondary/50 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80"
          alt="AuraClean Corporate Headquarters Building"
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-linear-to-t from-slate-950/85 via-slate-950/30 to-transparent flex items-end p-5 text-white">
          <div className="space-y-0.5">
            <span className="text-[10px] font-bold text-brand uppercase tracking-wider">
              Central Operations Hub
            </span>
            <h4 className="text-lg font-bold font-display tracking-tight text-white">
              The Scalpel, London, UK
            </h4>
          </div>
        </div>
      </div>

      <CardContent className="p-6 space-y-5 text-xs">
        <div className="space-y-3 text-muted-foreground font-medium">
          <div className="flex items-start gap-2.5">
            <Building className="w-4 h-4 text-brand mt-0.5 shrink-0" />
            <span className="text-foreground/90">Level 14, Tower B • Client Consultations by Appointment</span>
          </div>
          <div className="flex items-start gap-2.5">
            <Clock className="w-4 h-4 text-brand mt-0.5 shrink-0" />
            <span className="text-foreground/90">Staff Walkthroughs Scheduled Monday – Saturday</span>
          </div>
        </div>

        <div className="p-4 bg-secondary/50 backdrop-blur-md rounded-2xl border border-border/60 text-muted-foreground space-y-1">
          <div className="font-bold text-foreground">
            Parking & Access:
          </div>
          <p className="leading-relaxed">
            Underground visitor parking available via East Concourse. Photo ID required at security desk for building badging.
          </p>
        </div>
      </CardContent>
    </Card>

    <div className="p-5 rounded-3xl bg-brand-muted backdrop-blur-xl border border-brand/30 text-xs space-y-2 shadow-sm">
      <div className="flex items-center gap-2 font-bold text-foreground">
        <ShieldCheck className="w-4 h-4 text-brand" />
        <span>Need Emergency Dispatch?</span>
      </div>
      <p className="text-muted-foreground leading-relaxed font-medium">
        Existing B2B contract clients can access the direct 24/7 on-call supervisor hotline listed in your SLA client binder.
      </p>
    </div>
  </div>
);