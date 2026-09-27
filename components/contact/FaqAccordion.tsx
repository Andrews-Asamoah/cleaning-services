import React from "react";
import { HelpCircle } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FAQS } from "@/lib/mockData";

export const FaqAccordion: React.FC = () => (
  <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
    <div className="text-center space-y-3 max-w-xl mx-auto">
      <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-muted text-brand border border-brand/30 text-xs font-bold uppercase tracking-wider">
        <HelpCircle className="w-3.5 h-3.5 text-brand" />
        <span>Clear Answers</span>
      </div>
      <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground font-display tracking-tight">
        Frequently Asked Questions
      </h2>
      <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
        Have questions before booking or applying? Here are the most common inquiries we receive.
      </p>
    </div>

    <Accordion defaultValue={["item-0"]} className="w-full space-y-3.5">
      {FAQS.map((faq, index) => (
        <AccordionItem
          key={index}
          value={`item-${index}`}
          className="bg-card/75 dark:bg-card/40 backdrop-blur-xl border border-border/80 rounded-2xl px-6 py-1 shadow-md transition-all duration-300 hover:border-brand/50 group overflow-hidden"
        >
          <AccordionTrigger className="text-sm sm:text-base font-bold text-foreground font-display py-4 hover:no-underline group-hover:text-brand transition-colors cursor-pointer">
            {faq.question}
          </AccordionTrigger>
          <AccordionContent className="text-xs sm:text-sm text-muted-foreground leading-relaxed pb-5 font-normal">
            {faq.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  </section>
);