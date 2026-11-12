"use client";
import Image from "next/image";
import { Building, Clock, ShieldCheck } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export const LocationCard: React.FC = () => (
  <div className="space-y-6">
    <Card className="group overflow-hidden rounded-3xl border-border/80 bg-card/75 pt-0 shadow-2xl backdrop-blur-xl dark:bg-card/40">
      <div className="relative h-52 overflow-hidden bg-secondary/50">
        <Image
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80"
          alt="AuraClean Corporate Headquarters Building"
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 flex items-end bg-linear-to-t from-slate-950/85 via-slate-950/30 to-transparent p-5 text-white">
          <div className="space-y-0.5">
            <span className="text-[10px] font-bold tracking-wider text-brand uppercase">
              Central Operations Hub
            </span>
            <h4 className="font-display text-lg font-bold tracking-tight text-white">
              The Scalpel, London, UK
            </h4>
          </div>
        </div>
      </div>

      <CardContent className="space-y-5 p-6 text-xs">
        <div className="space-y-3 font-medium text-muted-foreground">
          <div className="flex items-start gap-2.5">
            <Building className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
            <span className="text-foreground/90">
              Level 14, Tower B • Client Consultations by Appointment
            </span>
          </div>
          <div className="flex items-start gap-2.5">
            <Clock className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
            <span className="text-foreground/90">
              Staff Walkthroughs Scheduled Monday – Saturday
            </span>
          </div>
        </div>

        <div className="space-y-1 rounded-2xl border border-border/60 bg-secondary/50 p-4 text-muted-foreground backdrop-blur-md">
          <div className="font-bold text-foreground">Parking & Access:</div>
          <p className="leading-relaxed">
            Underground visitor parking available via East Concourse. Photo ID required at security
            desk for building badging.
          </p>
        </div>
      </CardContent>
    </Card>

    <div className="space-y-2 rounded-3xl border border-brand/30 bg-brand-muted p-5 text-xs shadow-sm backdrop-blur-xl">
      <div className="flex items-center gap-2 font-bold text-foreground">
        <ShieldCheck className="h-4 w-4 text-brand" />
        <span>Need Emergency Dispatch?</span>
      </div>
      <p className="leading-relaxed font-medium text-muted-foreground">
        Existing B2B contract clients can access the direct 24/7 on-call supervisor hotline listed
        in your SLA client binder.
      </p>
    </div>
  </div>
);
