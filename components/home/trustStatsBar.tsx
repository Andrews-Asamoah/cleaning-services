import React from "react";
import { TRUST_STATS } from "../../data/mockData";

export const TrustStatsBar: React.FC = () => {
  return (
    <section className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
      <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
        {TRUST_STATS.map((stat, i) => (
          <div
            key={i}
            className="group relative flex flex-col justify-center overflow-hidden rounded-2xl border border-white/20 bg-card/75 p-6 text-center shadow-lg backdrop-blur-xl transition-all duration-300 hover:border-brand/60 hover:shadow-2xl sm:p-7 dark:border-white/10 dark:bg-card/40"
          >
            {/* Subtle top accent highlight bar on hover */}
            <div className="absolute inset-x-0 top-0 h-1 bg-brand opacity-0 transition-opacity group-hover:opacity-100" />

            <div className="font-display text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              <span className="text-brand">{stat.value}</span>
            </div>

            <div className="mt-2 text-xs font-bold text-foreground sm:text-sm">{stat.label}</div>

            <div className="mt-1 text-[11px] font-medium text-muted-foreground sm:text-xs">
              {stat.subtext}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
