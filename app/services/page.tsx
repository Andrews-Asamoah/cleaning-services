import { B2BInquiryForm } from "@/components/services/b2bInquiryForm";
import { CostEstimator } from "@/components/services/costEstimator";
import { ServiceCatalog } from "@/components/services/serviceCatalog";
import { ServicesHero } from "@/components/services/servicesHero";


interface ServicesPageProps {
  onOpenQuickQuote: () => void;
}

export default function ServicesPage({ onOpenQuickQuote }: ServicesPageProps) {
  return (
    <div className="space-y-20 pb-20">
      <ServicesHero />
      <ServiceCatalog onOpenQuickQuote={onOpenQuickQuote} />
      <CostEstimator />
      <B2BInquiryForm />
    </div>
  );
}
