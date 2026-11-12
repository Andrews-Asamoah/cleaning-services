import React from "react";
import { HelpCircle } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FAQS } from "@/data/mockData";

export const FaqAccordion: React.FC = () => (
  <section className="mx-auto max-w-4xl space-y-8 px-4 py-12 sm:px-6 lg:px-8">
    <div className="mx-auto max-w-xl space-y-3 text-center">
      <div className="inline-flex items-center gap-2 rounded-full border border-brand/30 bg-brand-muted px-3.5 py-1.5 text-xs font-bold tracking-wider text-brand uppercase">
        <HelpCircle className="h-3.5 w-3.5 text-brand" />
        <span>Clear Answers</span>
      </div>
      <h2 className="font-display text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
        Frequently Asked Questions
      </h2>
      <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
        Have questions before booking or applying? Here are the most common inquiries we receive.
      </p>
    </div>

    <Accordion defaultValue={["item-0"]} className="w-full space-y-3.5">
      {FAQS.map((faq, index) => (
        <AccordionItem
          key={index}
          value={`item-${index}`}
          className="group overflow-hidden rounded-2xl border border-border/80 bg-card/75 px-6 py-1 shadow-md backdrop-blur-xl transition-all duration-300 hover:border-brand/50 dark:bg-card/40"
        >
          <AccordionTrigger className="cursor-pointer py-4 font-display text-sm font-bold text-foreground transition-colors group-hover:text-brand hover:no-underline sm:text-base">
            {faq.question}
          </AccordionTrigger>
          <AccordionContent className="pb-5 text-xs leading-relaxed font-normal text-muted-foreground sm:text-sm">
            {faq.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  </section>
);
