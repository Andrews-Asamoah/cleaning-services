import { ContactHeader } from "@/components/contact/ContactHeader";
import { ContactInfoCards } from "@/components/contact/ContactInfoCards";
import { ContactFormCard } from "@/components/contact/ContactFormCard";
import { LocationCard } from "@/components/contact/LocationCard";
import { FaqAccordion } from "@/components/contact/FaqAccordion";

export default function ContactPage() {
  return (
    <div className="space-y-20 pb-20">
      {/* 1. Header Banner */}
      <ContactHeader />

      {/* 2. Contact Information Cards */}
      <ContactInfoCards />

      {/* 3. General Query Form & Interactive Map / Location Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-7">
            <ContactFormCard />
          </div>
          <div className="lg:col-span-5">
            <LocationCard />
          </div>
        </div>
      </section>

      {/* 4. Frequently Asked Questions Accordion */}
      <FaqAccordion />
    </div>
  );
}
