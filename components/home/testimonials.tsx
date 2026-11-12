import React from "react";
import Image from "next/image";
import { Star, Quote, CheckCircle2 } from "lucide-react";
import { Card } from "../ui/card";
import { TESTIMONIALS } from "@/data/mockData";

export const TestimonialsGrid: React.FC = () => {
  return (
    <section className="relative mx-auto max-w-7xl overflow-hidden px-4 py-16 sm:px-6 lg:px-8">
      {/* Background ambient decorative glow */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -z-10 h-125 w-125 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand/5 blur-3xl" />

      {/* Section Header */}
      <div className="mx-auto mb-12 max-w-2xl space-y-3 text-center">
        <div className="inline-flex items-center gap-2 rounded-full bg-brand-muted px-3 py-1 text-xs font-bold tracking-wider text-brand uppercase">
          <Star className="h-3.5 w-3.5 fill-current" />
          <span>Client Endorsements</span>
        </div>
        <h2 className="font-display text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
          Trusted by Leaders & Homeowners
        </h2>
        <p className="text-base text-muted-foreground">
          Hear from facilities directors, medical clinicians, and busy executives who rely on our
          elite cleaning teams.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8">
        {TESTIMONIALS.map((review, idx) => (
          <Card
            key={review.id}
            className={`group relative flex flex-col justify-between overflow-hidden rounded-2xl border-border/60 bg-card p-8 shadow-sm transition-all duration-300 hover:border-brand/40 hover:shadow-xl ${
              idx === 0 ? "md:-translate-y-2" : ""
            }`}
          >
            {/* Decorative watermark quote icon */}
            <Quote className="pointer-events-none absolute top-6 right-6 h-12 w-12 text-brand/10 transition-colors group-hover:text-brand/20" />

            <div className="relative z-10 space-y-4">
              {/* Rating stars and verified badge */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current drop-shadow-xs" />
                  ))}
                </div>
                <div className="flex items-center gap-1 rounded-full bg-secondary/60 px-2.5 py-1 text-xs font-medium text-muted-foreground">
                  <CheckCircle2 className="h-3.5 w-3.5 text-brand" />
                  <span>Verified Client</span>
                </div>
              </div>

              {/* Review Text */}
              <p className="text-base leading-relaxed font-normal text-foreground/90">
                &ldquo;{review.text}&rdquo;
              </p>
            </div>

            {/* Author Meta Information */}
            <div className="relative z-10 mt-6 flex items-center gap-4 border-t border-border/40 pt-6">
              <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full border-2 border-brand/30 shadow-inner">
                <Image
                  src={review.avatar}
                  alt={review.author}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div>
                <h4 className="text-sm font-bold text-foreground">{review.author}</h4>
                <p className="text-xs font-semibold tracking-wide text-brand">{review.role}</p>
                <p className="text-[11px] font-medium text-muted-foreground">{review.company}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};
