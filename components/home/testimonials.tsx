import React from "react";
import Image from "next/image";
import { Star, Quote, CheckCircle2 } from "lucide-react";
import { Card } from "../ui/card";
import { TESTIMONIALS } from "@/lib/mockData";

export const TestimonialsGrid: React.FC = () => {
  return (
    <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 overflow-hidden">
      {/* Background ambient decorative glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-125 h-125 bg-brand/5 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-muted text-brand text-xs font-bold uppercase tracking-wider">
          <Star className="w-3.5 h-3.5 fill-current" />
          <span>Client Endorsements</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight font-display">
          Trusted by Leaders & Homeowners
        </h2>
        <p className="text-base text-muted-foreground">
          Hear from facilities directors, medical clinicians, and busy executives who rely on our elite cleaning teams.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
        {TESTIMONIALS.map((review, idx) => (
          <Card
            key={review.id}
            className={`relative p-8 flex flex-col justify-between border-border/60 bg-card hover:border-brand/40 shadow-sm hover:shadow-xl transition-all duration-300 group rounded-2xl overflow-hidden ${
              idx === 0 ? "md:-translate-y-2" : ""
            }`}
          >
            {/* Decorative watermark quote icon */}
            <Quote className="absolute top-6 right-6 w-12 h-12 text-brand/10 group-hover:text-brand/20 transition-colors pointer-events-none" />

            <div className="space-y-4 relative z-10">
              {/* Rating stars and verified badge */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current drop-shadow-xs" />
                  ))}
                </div>
                <div className="flex items-center gap-1 text-xs text-muted-foreground font-medium bg-secondary/60 px-2.5 py-1 rounded-full">
                  <CheckCircle2 className="w-3.5 h-3.5 text-brand" />
                  <span>Verified Client</span>
                </div>
              </div>

              {/* Review Text */}
              <p className="text-base text-foreground/90 leading-relaxed font-normal">
                &ldquo;{review.text}&rdquo;
              </p>
            </div>

            {/* Author Meta Information */}
            <div className="flex items-center gap-4 pt-6 border-t border-border/40 mt-6 relative z-10">
              <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-brand/30 shrink-0 shadow-inner">
                <Image
                  src={review.avatar}
                  alt={review.author}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div>
                <h4 className="text-sm font-bold text-foreground">
                  {review.author}
                </h4>
                <p className="text-xs text-brand font-semibold tracking-wide">
                  {review.role}
                </p>
                <p className="text-[11px] text-muted-foreground font-medium">
                  {review.company}
                </p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};