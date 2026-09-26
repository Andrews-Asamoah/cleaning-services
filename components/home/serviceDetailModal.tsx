import React from "react";
import { CheckCircle2, Sparkles, ArrowRight } from "lucide-react";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "../ui/dialog";
import { ServiceDetail } from "../../data/mockData";

interface ServiceDetailModalProps {
  selectedService: ServiceDetail | null;
  onClose: () => void;
  onOpenQuickQuote: () => void;
}

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({
  selectedService,
  onClose,
  onOpenQuickQuote,
}) => {
  if (!selectedService) return null;

  return (
    <Dialog open={!!selectedService} onOpenChange={(open) => !open && onClose()}>
      {/* w-full with max-w-[calc(100vw-2rem)] ensures proper mobile margins, while max-w-2xl gives a wider desktop layout. max-h-[85vh] adds scrolling if needed */}
      <DialogContent className="w-full max-w-[calc(100vw-2rem)] sm:max-w-2xl mx-auto max-h-[85vh] overflow-y-auto p-5 sm:p-7 rounded-2xl border-border/80 bg-card shadow-2xl">
        <DialogHeader className="space-y-1.5 text-left">
          <div className="flex items-center gap-2">
            <Badge variant="secondary" className="w-fit bg-brand-muted text-brand border-0 font-semibold px-2.5 py-0.5 text-[10px] uppercase tracking-wider">
              {selectedService.category}
            </Badge>
          </div>
          
          <div className="flex items-start gap-3">
            <div className="p-2 rounded-xl bg-brand/10 text-brand shrink-0 mt-0.5">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <DialogTitle className="text-xl sm:text-2xl font-extrabold text-foreground tracking-tight font-display">
                {selectedService.title}
              </DialogTitle>
              <DialogDescription className="text-xs sm:text-sm text-muted-foreground mt-0.5">
                {selectedService.tagline}
              </DialogDescription>
            </div>
          </div>
        </DialogHeader>

        <div className="space-y-4 my-3 text-sm text-foreground/80">
          <p className="leading-relaxed text-xs sm:text-sm text-foreground/90 font-normal">
            {selectedService.description}
          </p>
          
          {/* Included Checkpoints Box - 2 columns on desktop to reduce length */}
          <div className="bg-secondary/40 p-4 rounded-xl space-y-2.5 border border-border/60">
            <h4 className="text-[11px] font-bold uppercase tracking-wider text-foreground">
              Included Protocol Checkpoints:
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm">
              {selectedService.features.map((feat, i) => (
                <div key={i} className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-brand mt-0.5 shrink-0" />
                  <span className="text-foreground/90 font-medium">{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Pricing Highlight Card */}
          <div className="flex items-center justify-between p-3.5 rounded-xl bg-brand/5 border border-brand/20">
            <div className="space-y-0.5">
              <span className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground block">
                Estimated Investment
              </span>
              <span className="text-[11px] text-foreground/70">Customized to your space</span>
            </div>
            <span className="font-extrabold text-brand text-sm sm:text-base">
              {selectedService.pricingEstimate}
            </span>
          </div>
        </div>

        {/* Action Footers */}
        <div className="flex items-center justify-end gap-2.5 pt-3 border-t border-border/60">
          <Button 
            variant="outline" 
            onClick={onClose} 
            className="cursor-pointer border-border hover:bg-secondary/80 text-foreground text-xs h-9 px-3"
          >
            Close
          </Button>
          <Button
            variant="default"
            onClick={() => {
              onClose();
              onOpenQuickQuote();
            }}
            className="cursor-pointer bg-brand text-brand-foreground hover:bg-brand/90 font-semibold group shadow-sm hover:shadow-md transition-all text-xs h-9 px-4"
          >
            <span>Request Consultation</span>
            <ArrowRight className="w-3.5 h-3.5 ml-1.5 group-hover:translate-x-0.5 transition-transform" />
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};