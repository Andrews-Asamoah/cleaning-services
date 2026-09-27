import React from "react";
import { TRUST_STATS } from "@/lib/mockData";

export const TrustStatsBar: React.FC = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {TRUST_STATS.map((stat, i) => (
          <div
            key={i}
            className="p-6 sm:p-7 rounded-2xl bg-card/75 dark:bg-card/40 backdrop-blur-xl border border-white/20 dark:border-white/10 shadow-lg text-center flex flex-col justify-center transition-all duration-300 hover:border-brand/60 hover:shadow-2xl group relative overflow-hidden"
          >
            {/* Subtle top accent highlight bar on hover */}
            <div className="absolute inset-x-0 top-0 h-1 bg-brand opacity-0 group-hover:opacity-100 transition-opacity" />

            <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground font-display tracking-tight">
              <span className="text-brand">{stat.value}</span>
            </div>
            
            <div className="text-xs sm:text-sm font-bold text-foreground mt-2">
              {stat.label}
            </div>
            
            <div className="text-[11px] sm:text-xs text-muted-foreground mt-1 font-medium">
              {stat.subtext}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};