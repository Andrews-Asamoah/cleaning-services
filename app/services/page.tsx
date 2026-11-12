import { B2BInquiryForm } from "@/components/services/b2bInquiryForm";
import { CostEstimator } from "@/components/services/costEstimator";
import { ServiceCatalog } from "@/components/services/serviceCatalog";
import { ServicesHero } from "@/components/services/servicesHero";

export default function ServicesPage() {
  return (
    <div className="space-y-20 pb-20">
      <ServicesHero />
      {/* TODO(Phase 1.1): CTA buttons open the quote dialog via useQuote() */}
      <ServiceCatalog />
      <CostEstimator />
      <B2BInquiryForm />
    </div>
  );
}
