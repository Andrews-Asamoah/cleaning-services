import { SERVICES_DATA } from "@/data/mockData";
import { ServiceCard } from "./serviceCard";
import { Layers } from "lucide-react";

interface ServiceCatalogProps {
  onOpenQuickQuote: () => void;
}

export function ServiceCatalog({ onOpenQuickQuote }: ServiceCatalogProps) {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10">
      {/* Section Header */}
      <div className="text-left space-y-3 max-w-2xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-muted text-brand text-xs font-bold uppercase tracking-wider">
          <Layers className="w-3.5 h-3.5" />
          <span>Comprehensive Offerings</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight font-display">
          Engineered Cleaning Capabilities
        </h2>
        <p className="text-sm sm:text-base text-muted-foreground">
          Explore our full suite of professional commercial janitorial programs and bespoke residential detailing services.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {SERVICES_DATA.map((service) => (
          <ServiceCard
            key={service.id}
            service={service}
            onRequestProposal={onOpenQuickQuote}
          />
        ))}
      </div>
    </section>
  );
};