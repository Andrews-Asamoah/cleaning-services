import { Check, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import type { ServiceDetail } from "@/data/mockData";
import Image from "next/image";

interface ServiceCardProps {
  service: ServiceDetail;
  onRequestProposal?: () => void;
}

export function ServiceCard({ service, onRequestProposal }: ServiceCardProps) {
  return (
    <Card className="group flex flex-col justify-between overflow-hidden rounded-3xl border border-border/80 bg-card/80 pt-0 shadow-lg backdrop-blur-xl transition-all duration-300 hover:shadow-2xl">
      {/* Image container flushed to the very top with zero padding */}
      <div className="relative h-64 w-full overflow-hidden">
        <Image
          src={service.imageUrl}
          alt={service.title}
          fill
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 flex items-end bg-linear-to-t from-slate-950/85 via-slate-950/20 to-transparent p-6">
          <div className="space-y-1 text-white">
            <Badge
              variant="default"
              className="bg-brand text-[10px] font-bold tracking-wider text-brand-foreground uppercase shadow-sm"
            >
              {service.category}
            </Badge>
            <h3 className="font-display text-2xl font-bold tracking-tight text-white">
              {service.title}
            </h3>
          </div>
        </div>
      </div>

      <CardContent className="flex flex-1 flex-col justify-between space-y-6 p-6 sm:p-7">
        <div className="space-y-5">
          <p className="text-sm leading-relaxed font-normal text-muted-foreground">
            {service.description}
          </p>

          <div className="space-y-2.5">
            <span className="block text-xs font-bold tracking-wider text-foreground uppercase">
              Core Scope Highlights:
            </span>
            <ul className="grid grid-cols-1 gap-2.5 text-xs text-muted-foreground sm:grid-cols-2">
              {service.features.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <div className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-brand/15 text-brand">
                    <Check className="h-3 w-3" />
                  </div>
                  <span className="font-medium text-foreground/90">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-0.5 rounded-2xl border border-border/60 bg-secondary/50 p-3.5 text-xs backdrop-blur-md">
            <span className="font-bold text-foreground">Best Suited For:</span>
            <span className="font-medium text-muted-foreground">{service.idealFor}</span>
          </div>
        </div>

        <div className="flex items-center justify-between gap-4 border-t border-border/60 pt-5">
          <div>
            <span className="block text-[10px] font-semibold tracking-wider text-muted-foreground uppercase">
              Standard Rate
            </span>
            <span className="font-display text-sm font-extrabold text-brand sm:text-base">
              {service.pricingEstimate}
            </span>
          </div>
          <Button
            variant="default"
            size="sm"
            onClick={onRequestProposal}
            className="group/btn cursor-pointer rounded-xl bg-brand px-5 font-semibold text-brand-foreground shadow-md hover:bg-brand/90"
          >
            <span>Request Proposal</span>
            <ArrowRight className="ml-1.5 h-3.5 w-3.5 transition-transform group-hover/btn:translate-x-0.5" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
