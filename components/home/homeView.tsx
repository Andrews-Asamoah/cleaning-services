"use client";

import React, { useState } from "react";
import { ServiceDetail } from "@/data/mockData";
import { HeroSection } from "./heroSection";

// Imported sub-components
import { TrustStatsBar } from "./trustStatsBar";
import { ServicesHighlightGrid } from "./service-highlights";
import { BeforeAfterShowcase } from "./beforeAfterShowcase";
import { TestimonialsGrid } from "./testimonials";
import { CareersTeaser } from "./careersTeaser";
import { ServiceDetailModal } from "./serviceDetailModal";

export const HomeView: React.FC = () => {
  const [selectedService, setSelectedService] = useState<ServiceDetail | null>(null);

  return (
    <div className="space-y-20 pb-20">
      <HeroSection />
      <TrustStatsBar />
      <ServicesHighlightGrid onSelectService={setSelectedService} />
      <BeforeAfterShowcase />
      <TestimonialsGrid />
      <CareersTeaser />

      <ServiceDetailModal
        selectedService={selectedService}
        onClose={() => setSelectedService(null)}
      />
    </div>
  );
};
