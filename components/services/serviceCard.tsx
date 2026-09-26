import { Check, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import type { ServiceDetail } from "@/data/mockData";
import Image from "next/image";

interface ServiceCardProps {
  service: ServiceDetail;
  onRequestProposal: () => void;
}

export function ServiceCard({ service, onRequestProposal }: ServiceCardProps) {
  return (
    <Card className="overflow-hidden pt-0 bg-card/80 backdrop-blur-xl border border-border/80 shadow-lg hover:shadow-2xl transition-all duration-300 rounded-3xl flex flex-col justify-between group">
      {/* Image container flushed to the very top with zero padding */}
      <div className="relative h-64 w-full overflow-hidden">
        <Image
          src={service.imageUrl}
          alt={service.title}
          fill
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-linear-to-t from-slate-950/85 via-slate-950/20 to-transparent flex items-end p-6">
          <div className="text-white space-y-1">
            <Badge variant="default" className="bg-brand text-brand-foreground font-bold tracking-wider uppercase text-[10px] shadow-sm">
              {service.category}
            </Badge>
            <h3 className="text-2xl font-bold font-display tracking-tight text-white">
              {service.title}
            </h3>
          </div>
        </div>
      </div>

      <CardContent className="p-6 sm:p-7 space-y-6 flex-1 flex flex-col justify-between">
        <div className="space-y-5">
          <p className="text-sm text-muted-foreground leading-relaxed font-normal">
            {service.description}
          </p>

          <div className="space-y-2.5">
            <span className="text-xs font-bold uppercase tracking-wider text-foreground block">
              Core Scope Highlights:
            </span>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-muted-foreground">
              {service.features.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <div className="w-4 h-4 rounded-full bg-brand/15 text-brand flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3" />
                  </div>
                  <span className="font-medium text-foreground/90">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-3.5 bg-secondary/50 backdrop-blur-md rounded-2xl border border-border/60 text-xs flex flex-col gap-0.5">
            <span className="font-bold text-foreground">
              Best Suited For:
            </span>
            <span className="text-muted-foreground font-medium">{service.idealFor}</span>
          </div>
        </div>

        <div className="pt-5 border-t border-border/60 flex items-center justify-between gap-4">
          <div>
            <span className="text-[10px] text-muted-foreground uppercase tracking-wider font-semibold block">
              Standard Rate
            </span>
            <span className="text-sm sm:text-base font-extrabold text-brand font-display">
              {service.pricingEstimate}
            </span>
          </div>
          <Button
            variant="default"
            size="sm"
            onClick={onRequestProposal}
            className="font-semibold px-5 rounded-xl bg-brand text-brand-foreground hover:bg-brand/90 shadow-md cursor-pointer group/btn"
          >
            <span>Request Proposal</span>
            <ArrowRight className="w-3.5 h-3.5 ml-1.5 group-hover/btn:translate-x-0.5 transition-transform" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};