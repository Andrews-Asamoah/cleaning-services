"use client";

import React from "react";
import { CheckCircle2, Sparkles, ArrowRight } from "lucide-react";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "../ui/dialog";
import { ServiceDetail } from "../../data/mockData";
import { useQuote } from "@/components/quote/quote-provider";
import { toQuoteServiceId } from "@/lib/quote/config";

interface ServiceDetailModalProps {
  selectedService: ServiceDetail | null;
  onClose: () => void;
}

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({
  selectedService,
  onClose,
}) => {
  const { openQuote } = useQuote();
  if (!selectedService) return null;

  return (
    <Dialog open={!!selectedService} onOpenChange={(open) => !open && onClose()}>
      {/* w-full with max-w-[calc(100vw-2rem)] ensures proper mobile margins, while max-w-2xl gives a wider desktop layout. max-h-[85vh] adds scrolling if needed */}
      <DialogContent className="mx-auto max-h-[85vh] w-full max-w-[calc(100vw-2rem)] overflow-y-auto rounded-2xl border-border/80 bg-card p-5 shadow-2xl sm:max-w-2xl sm:p-7">
        <DialogHeader className="space-y-1.5 text-left">
          <div className="flex items-center gap-2">
            <Badge
              variant="secondary"
              className="w-fit border-0 bg-brand-muted px-2.5 py-0.5 text-[10px] font-semibold tracking-wider text-brand uppercase"
            >
              {selectedService.category}
            </Badge>
          </div>

          <div className="flex items-start gap-3">
            <div className="mt-0.5 shrink-0 rounded-xl bg-brand/10 p-2 text-brand">
              <Sparkles className="h-4 w-4" />
            </div>
            <div>
              <DialogTitle className="font-display text-xl font-extrabold tracking-tight text-foreground sm:text-2xl">
                {selectedService.title}
              </DialogTitle>
              <DialogDescription className="mt-0.5 text-xs text-muted-foreground sm:text-sm">
                {selectedService.tagline}
              </DialogDescription>
            </div>
          </div>
        </DialogHeader>

        <div className="my-3 space-y-4 text-sm text-foreground/80">
          <p className="text-xs leading-relaxed font-normal text-foreground/90 sm:text-sm">
            {selectedService.description}
          </p>

          {/* Included Checkpoints Box - 2 columns on desktop to reduce length */}
          <div className="space-y-2.5 rounded-xl border border-border/60 bg-secondary/40 p-4">
            <h4 className="text-[11px] font-bold tracking-wider text-foreground uppercase">
              Included Protocol Checkpoints:
            </h4>
            <div className="grid grid-cols-1 gap-2 text-xs sm:grid-cols-2 sm:text-sm">
              {selectedService.features.map((feat, i) => (
                <div key={i} className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-brand" />
                  <span className="font-medium text-foreground/90">{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Pricing Highlight Card */}
          <div className="flex items-center justify-between rounded-xl border border-brand/20 bg-brand/5 p-3.5">
            <div className="space-y-0.5">
              <span className="block text-[10px] font-semibold tracking-wider text-muted-foreground uppercase">
                Estimated Investment
              </span>
              <span className="text-[11px] text-foreground/70">Customized to your space</span>
            </div>
            <span className="text-sm font-extrabold text-brand sm:text-base">
              {selectedService.pricingEstimate}
            </span>
          </div>
        </div>

        {/* Action Footers */}
        <div className="flex items-center justify-end gap-2.5 border-t border-border/60 pt-3">
          <Button
            variant="outline"
            onClick={onClose}
            className="h-9 cursor-pointer border-border px-3 text-xs text-foreground hover:bg-secondary/80"
          >
            Close
          </Button>
          <Button
            variant="default"
            onClick={() => {
              onClose();
              openQuote({ serviceId: toQuoteServiceId(selectedService.id) });
            }}
            className="group h-9 cursor-pointer bg-brand px-4 text-xs font-semibold text-brand-foreground shadow-sm transition-all hover:bg-brand/90 hover:shadow-md"
          >
            <span>Request Consultation</span>
            <ArrowRight className="ml-1.5 h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};
