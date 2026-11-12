import { SERVICES_DATA } from "@/data/mockData";
import { ServiceCard } from "./serviceCard";
import { Layers } from "lucide-react";

export function ServiceCatalog() {
  return (
    <section className="mx-auto max-w-7xl space-y-10 px-4 py-12 sm:px-6 lg:px-8">
      {/* Section Header */}
      <div className="max-w-2xl space-y-3 text-left">
        <div className="inline-flex items-center gap-2 rounded-full bg-brand-muted px-3 py-1 text-xs font-bold tracking-wider text-brand uppercase">
          <Layers className="h-3.5 w-3.5" />
          <span>Comprehensive Offerings</span>
        </div>
        <h2 className="font-display text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
          Engineered Cleaning Capabilities
        </h2>
        <p className="text-sm text-muted-foreground sm:text-base">
          Explore our full suite of professional commercial janitorial programs and bespoke
          residential detailing services.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        {SERVICES_DATA.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
    </section>
  );
}
