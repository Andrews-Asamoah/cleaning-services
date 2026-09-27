import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ShieldCheck, ChevronRight, Check, Eye } from "lucide-react";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import { Badge } from "../ui/badge";
import { SERVICES_DATA, ServiceDetail } from "@/lib/mockData";

interface ServicesHighlightGridProps {
  onOpenQuickQuote: () => void;
  onSelectService: (service: ServiceDetail) => void;
}

export const ServicesHighlightGrid: React.FC<ServicesHighlightGridProps> = ({
  onOpenQuickQuote,
  onSelectService,
}) => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 py-12">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-muted text-brand text-xs font-bold uppercase tracking-wider mb-3">
            <ShieldCheck className="w-4 h-4" />
            <span>Tailored Cleaning Solutions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight font-display">
            Precision Care for Every Environment
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground mt-2 max-w-xl">
            From continuous corporate janitorial staffing to detailed residential deep cycles, explore our core service tiers designed for uncompromising hygiene.
          </p>
        </div>
        <Link href="/services">
          <Button 
            variant="outline"
            className="gap-2 self-start md:self-auto rounded-xl cursor-pointer border-border hover:bg-secondary/80 text-foreground font-semibold group shadow-sm"
          > 
            <span>View Full Service Catalog & Pricing</span>
            <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </Button>
        </Link>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
        {SERVICES_DATA.slice(0, 3).map((service) => (
          <Card
            key={service.id}
            className="flex flex-col justify-between overflow-hidden p-0 group hover:shadow-xl transition-all duration-300 border-border/70 bg-card rounded-2xl"
          >
            {/* Image Wrapper - Flushed to top with p-0 on Card */}
            <div className="relative h-60 overflow-hidden bg-secondary">
              <Image
                src={service.imageUrl}
                alt={service.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-linear-to-t from-slate-950/80 via-slate-950/30 to-transparent" />
              
              {service.badge && (
                <div className="absolute top-3 left-3 z-10">
                  <Badge variant="default" className="bg-brand text-brand-foreground shadow-sm font-semibold text-[11px] px-2.5 py-0.5 border-0">
                    {service.badge}
                  </Badge>
                </div>
              )}

              <div className="absolute bottom-3 left-4 right-4 text-white z-10">
                <span className="text-[11px] font-bold text-brand tracking-wider uppercase bg-black/40 backdrop-blur-md px-2 py-0.5 rounded-md">
                  {service.category}
                </span>
                <h3 className="text-lg font-extrabold font-display leading-snug mt-1.5 text-white">
                  {service.title}
                </h3>
              </div>
            </div>

            {/* Card Content */}
            <CardContent className="px-5 pb-5 sm:px-6 space-y-4 flex-1 flex flex-col justify-between">
              <div className="space-y-4">
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed line-clamp-2">
                  {service.tagline}
                </p>

                <div className="space-y-2.5 pt-1">
                  {service.features.slice(0, 3).map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-foreground/90">
                      <Check className="w-4 h-4 text-brand mt-0.5 shrink-0" />
                      <span className="line-clamp-1 font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Footer / Pricing & Actions */}
              <div className="pt-4 border-t border-border/60 flex items-center justify-between mt-4">
                <div>
                  <span className="text-[10px] uppercase font-semibold text-muted-foreground block">Estimate</span>
                  <span className="text-xs sm:text-sm font-extrabold text-foreground">
                    {service.pricingEstimate}
                  </span>
                </div>
                <div className="flex gap-2">
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => onSelectService(service)}
                    className="text-xs h-9 px-3 rounded-xl cursor-pointer border-border hover:bg-secondary text-foreground font-medium"
                  >
                    <Eye className="w-3.5 h-3.5 mr-1 text-muted-foreground" />
                    Details
                  </Button>
                  <Button
                    size="sm"
                    variant="default"
                    onClick={onOpenQuickQuote}
                    className="text-xs h-9 px-3.5 rounded-xl cursor-pointer bg-brand text-brand-foreground hover:bg-brand/90 font-semibold shadow-sm"
                  >
                    Book
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};