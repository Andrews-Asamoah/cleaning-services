"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ShieldCheck, ChevronRight, Check, Eye } from "lucide-react";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import { Badge } from "../ui/badge";
import { useQuote } from "@/components/quote/quote-provider";
import { toQuoteServiceId } from "@/lib/quote/config";
import { SERVICES_DATA, ServiceDetail } from "../../data/mockData";

interface ServicesHighlightGridProps {
  onSelectService: (service: ServiceDetail) => void;
}

export const ServicesHighlightGrid: React.FC<ServicesHighlightGridProps> = ({
  onSelectService,
}) => {
  const { openQuote } = useQuote();
  return (
    <section className="mx-auto max-w-7xl space-y-10 px-4 py-12 sm:px-6 lg:px-8">
      {/* Section Header */}
      <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
        <div>
          <div className="mb-3 inline-flex items-center gap-1.5 rounded-full bg-brand-muted px-3 py-1 text-xs font-bold tracking-wider text-brand uppercase">
            <ShieldCheck className="h-4 w-4" />
            <span>Tailored Cleaning Solutions</span>
          </div>
          <h2 className="font-display text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
            Precision Care for Every Environment
          </h2>
          <p className="mt-2 max-w-xl text-sm text-muted-foreground sm:text-base">
            From continuous corporate janitorial staffing to detailed residential deep cycles,
            explore our core service tiers designed for uncompromising hygiene.
          </p>
        </div>
        <Link href="/services">
          <Button
            variant="outline"
            className="group cursor-pointer gap-2 self-start rounded-xl border-border font-semibold text-foreground shadow-sm hover:bg-secondary/80 md:self-auto"
          >
            <span>View Full Service Catalog & Pricing</span>
            <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Button>
        </Link>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3 lg:gap-8">
        {SERVICES_DATA.slice(0, 3).map((service) => (
          <Card
            key={service.id}
            className="group flex flex-col justify-between overflow-hidden rounded-2xl border-border/70 bg-card p-0 transition-all duration-300 hover:shadow-xl"
          >
            {/* Image Wrapper - Flushed to top with p-0 on Card */}
            <div className="relative h-60 overflow-hidden bg-secondary">
              <Image
                src={service.imageUrl}
                alt={service.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-linear-to-t from-slate-950/80 via-slate-950/30 to-transparent" />

              {service.badge && (
                <div className="absolute top-3 left-3 z-10">
                  <Badge
                    variant="default"
                    className="border-0 bg-brand px-2.5 py-0.5 text-[11px] font-semibold text-brand-foreground shadow-sm"
                  >
                    {service.badge}
                  </Badge>
                </div>
              )}

              <div className="absolute right-4 bottom-3 left-4 z-10 text-white">
                <span className="rounded-md bg-black/40 px-2 py-0.5 text-[11px] font-bold tracking-wider text-brand uppercase backdrop-blur-md">
                  {service.category}
                </span>
                <h3 className="mt-1.5 font-display text-lg leading-snug font-extrabold text-white">
                  {service.title}
                </h3>
              </div>
            </div>

            {/* Card Content */}
            <CardContent className="flex flex-1 flex-col justify-between space-y-4 px-5 pb-5 sm:px-6">
              <div className="space-y-4">
                <p className="line-clamp-2 text-xs leading-relaxed text-muted-foreground sm:text-sm">
                  {service.tagline}
                </p>

                <div className="space-y-2.5 pt-1">
                  {service.features.slice(0, 3).map((feature, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-2.5 text-xs text-foreground/90 sm:text-sm"
                    >
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                      <span className="line-clamp-1 font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Footer / Pricing & Actions */}
              <div className="mt-4 flex items-center justify-between border-t border-border/60 pt-4">
                <div>
                  <span className="block text-[10px] font-semibold text-muted-foreground uppercase">
                    Estimate
                  </span>
                  <span className="text-xs font-extrabold text-foreground sm:text-sm">
                    {service.pricingEstimate}
                  </span>
                </div>
                <div className="flex gap-2">
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => onSelectService(service)}
                    className="h-9 cursor-pointer rounded-xl border-border px-3 text-xs font-medium text-foreground hover:bg-secondary"
                  >
                    <Eye className="mr-1 h-3.5 w-3.5 text-muted-foreground" />
                    Details
                  </Button>
                  <Button
                    size="sm"
                    variant="default"
                    onClick={() => openQuote({ serviceId: toQuoteServiceId(service.id) })}
                    className="h-9 cursor-pointer rounded-xl bg-brand px-3.5 text-xs font-semibold text-brand-foreground shadow-sm hover:bg-brand/90"
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
