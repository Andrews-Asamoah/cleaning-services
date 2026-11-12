"use client";

import { useState } from "react";
import { Building2, Send, ShieldCheck, Sparkles } from "lucide-react";
import { toast } from "sonner";
import { AnimatePresence, motion } from "motion/react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { B2BInquirySuccess } from "./b2bInquirySuccess";

interface B2BData {
  companyName: string;
  contactName: string;
  workEmail: string;
  phone: string;
  squareFootage: string;
  cleaningFrequency: string;
  facilityType: string;
  startDate: string;
  specialNotes: string;
}

const SQUARE_FOOTAGE_OPTIONS = [
  "Under 2,500 sq ft",
  "2,500 - 5,000 sq ft",
  "5,000 - 10,000 sq ft",
  "10,000 - 25,000 sq ft",
  "25,000 - 75,000+ sq ft",
];

const FREQUENCY_OPTIONS = [
  "Nightly (5 Days / Week)",
  "Nightly (7 Days / Week)",
  "Weekly (3 Days / Week)",
  "Weekly (1 Day / Week)",
  "One-Time Deep Turnover",
];

const FACILITY_OPTIONS: { value: string; label: string }[] = [
  { value: "Corporate Office", label: "Corporate Office / Headquarters" },
  { value: "Medical / Dental Clinic", label: "Medical / Dental Clinic" },
  { value: "Co-Working Space", label: "Co-Working / Tech Campus" },
  { value: "Retail / Flagship Store", label: "Retail / Flagship Store" },
  { value: "Educational / Daycare", label: "Educational / Daycare" },
  { value: "Industrial / Warehouse", label: "Industrial / Warehouse" },
];

const DEFAULT_B2B_DATA: B2BData = {
  companyName: "",
  contactName: "",
  workEmail: "",
  phone: "",
  squareFootage: "5,000 - 10,000 sq ft",
  cleaningFrequency: "Weekly (Mon/Wed/Fri)",
  facilityType: "Corporate Office",
  startDate: "Within 2 Weeks",
  specialNotes: "",
};

const CONFETTI_COLORS = ["#14b8a6", "#f59e0b", "#f43f5e", "#6366f1", "#10b981"];

interface ConfettiPiece {
  id: number;
  x: number;
  targetY: number;
  rotate: number;
  delay: number;
  color: string;
  width: number;
  height: number;
}

function generateConfettiPieces(count: number): ConfettiPiece[] {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    x: (Math.random() - 0.5) * 320,
    targetY: 240 + Math.random() * 80,
    rotate: Math.random() * 480 - 240,
    delay: Math.random() * 0.15,
    color: CONFETTI_COLORS[i % CONFETTI_COLORS.length],
    width: 5 + Math.random() * 5,
    height: 8 + Math.random() * 6,
  }));
}

function ConfettiBurst() {
  const [pieces] = useState<ConfettiPiece[]>(() => generateConfettiPieces(28));

  return (
    <div className="pointer-events-none absolute inset-0 z-20 overflow-hidden">
      {pieces.map((piece) => (
        <motion.span
          key={piece.id}
          initial={{ opacity: 1, x: 0, y: 0, rotate: 0 }}
          animate={{
            opacity: 0,
            x: piece.x,
            y: piece.targetY,
            rotate: piece.rotate,
          }}
          transition={{ duration: 1.1, delay: piece.delay, ease: "easeOut" }}
          className="absolute top-0 left-1/2 rounded-[1px]"
          style={{ width: piece.width, height: piece.height, backgroundColor: piece.color }}
        />
      ))}
    </div>
  );
}

export function B2BInquiryForm() {
  const [b2bData, setB2bData] = useState<B2BData>(DEFAULT_B2B_DATA);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [inquiryReference, setInquiryReference] = useState("");

  const updateField = <K extends keyof B2BData>(key: K, value: B2BData[K]) =>
    setB2bData((prev) => ({ ...prev, [key]: value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (
      !b2bData.companyName.trim() ||
      !b2bData.contactName.trim() ||
      !b2bData.workEmail.trim() ||
      !b2bData.phone.trim()
    ) {
      toast.error("Please fill in all mandatory corporate contact fields.");
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      const generatedRef = "B2B-" + Math.floor(100000 + Math.random() * 900000);
      setInquiryReference(generatedRef);
      setIsSubmitting(false);
      setSubmitted(true);
      setShowConfetti(true);

      toast.success(
        `Corporate inquiry dispatched to management! Reference #${generatedRef}. Account Director assigned.`,
        { duration: 5000 },
      );

      setTimeout(() => setShowConfetti(false), 1400);
    }, 1000);
  };

  const handleReset = () => {
    setSubmitted(false);
    setShowConfetti(false);
    setB2bData(DEFAULT_B2B_DATA);
  };

  return (
    <section id="b2b-form-section" className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <Card className="relative overflow-hidden rounded-3xl border border-border/80 bg-card/90 pt-0 shadow-2xl backdrop-blur-2xl dark:bg-card/40">
        {/* Ambient background glow */}
        <div className="pointer-events-none absolute top-0 right-0 h-96 w-96 rounded-full bg-brand/10 blur-3xl" />

        {/* Minimal Modern Header */}
        <div className="relative z-10 flex flex-col justify-between gap-4 border-b border-border/70 bg-secondary/30 p-6 sm:flex-row sm:items-center sm:p-8">
          <div className="space-y-1.5">
            <div className="inline-flex items-center gap-1.5 rounded-full bg-brand-muted px-3 py-1 text-xs font-bold tracking-wider text-brand uppercase">
              <Sparkles className="h-3.5 w-3.5" />
              <span>Priority Enterprise Routing</span>
            </div>
            <h2 className="font-display text-2xl font-extrabold tracking-tight text-foreground sm:text-3xl">
              Corporate & B2B Fast-Inquiry
            </h2>
            <p className="max-w-lg text-xs text-muted-foreground sm:text-sm">
              Submit your corporate facility specifications below for expedited proposal generation
              by our Operations Director.
            </p>
          </div>
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-brand/20 bg-brand/15 text-brand shadow-sm">
            <Building2 className="h-6 w-6" />
          </div>
        </div>

        <CardContent className="relative z-10 p-6 sm:p-8">
          {showConfetti && <ConfettiBurst />}

          <AnimatePresence mode="wait">
            {!submitted ? (
              <motion.form
                key="form"
                onSubmit={handleSubmit}
                noValidate
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <FieldGroup>
                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <Field>
                      <FieldLabel
                        htmlFor="b2b-company"
                        className="text-xs font-bold tracking-wider text-muted-foreground uppercase"
                      >
                        Company / Organization Name *
                      </FieldLabel>
                      <Input
                        id="b2b-company"
                        required
                        placeholder="e.g. Apex Horizon Technologies Inc."
                        value={b2bData.companyName}
                        onChange={(e) => updateField("companyName", e.target.value)}
                        className="h-11 rounded-xl border-border/80 bg-secondary/50 focus-visible:ring-brand"
                      />
                    </Field>

                    <Field>
                      <FieldLabel
                        htmlFor="b2b-contact"
                        className="text-xs font-bold tracking-wider text-muted-foreground uppercase"
                      >
                        Contact Name & Title *
                      </FieldLabel>
                      <Input
                        id="b2b-contact"
                        required
                        placeholder="e.g. Marcus Chen, Facilities Manager"
                        value={b2bData.contactName}
                        onChange={(e) => updateField("contactName", e.target.value)}
                        className="h-11 rounded-xl border-border/80 bg-secondary/50 focus-visible:ring-brand"
                      />
                    </Field>
                  </div>

                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <Field>
                      <FieldLabel
                        htmlFor="b2b-email"
                        className="text-xs font-bold tracking-wider text-muted-foreground uppercase"
                      >
                        Corporate Work Email *
                      </FieldLabel>
                      <Input
                        id="b2b-email"
                        required
                        type="email"
                        placeholder="facilities@company.com"
                        value={b2bData.workEmail}
                        onChange={(e) => updateField("workEmail", e.target.value)}
                        className="h-11 rounded-xl border-border/80 bg-secondary/50 focus-visible:ring-brand"
                      />
                    </Field>

                    <Field>
                      <FieldLabel
                        htmlFor="b2b-phone"
                        className="text-xs font-bold tracking-wider text-muted-foreground uppercase"
                      >
                        Direct Phone / Mobile *
                      </FieldLabel>
                      <Input
                        id="b2b-phone"
                        required
                        type="tel"
                        placeholder="(555) 234-5678"
                        value={b2bData.phone}
                        onChange={(e) => updateField("phone", e.target.value)}
                        className="h-11 rounded-xl border-border/80 bg-secondary/50 focus-visible:ring-brand"
                      />
                    </Field>
                  </div>

                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
                    <Field>
                      <FieldLabel
                        htmlFor="b2b-sqft"
                        className="text-xs font-bold tracking-wider text-muted-foreground uppercase"
                      >
                        Approx. Square Footage *
                      </FieldLabel>
                      <Select
                        value={b2bData.squareFootage}
                        onValueChange={(value) => updateField("squareFootage", value ?? "")}
                      >
                        <SelectTrigger
                          id="b2b-sqft"
                          className="h-11 w-full rounded-xl border-border/80 bg-secondary/50"
                        >
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent className="rounded-xl">
                          {SQUARE_FOOTAGE_OPTIONS.map((opt) => (
                            <SelectItem key={opt} value={opt}>
                              {opt}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </Field>

                    <Field>
                      <FieldLabel
                        htmlFor="b2b-freq"
                        className="text-xs font-bold tracking-wider text-muted-foreground uppercase"
                      >
                        Cleaning Frequency *
                      </FieldLabel>
                      <Select
                        value={b2bData.cleaningFrequency}
                        onValueChange={(value) => updateField("cleaningFrequency", value ?? "")}
                      >
                        <SelectTrigger
                          id="b2b-freq"
                          className="h-11 w-full rounded-xl border-border/80 bg-secondary/50"
                        >
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent className="rounded-xl">
                          {FREQUENCY_OPTIONS.map((opt) => (
                            <SelectItem key={opt} value={opt}>
                              {opt}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </Field>

                    <Field>
                      <FieldLabel
                        htmlFor="b2b-type"
                        className="text-xs font-bold tracking-wider text-muted-foreground uppercase"
                      >
                        Facility Environment *
                      </FieldLabel>
                      <Select
                        value={b2bData.facilityType}
                        onValueChange={(value) => updateField("facilityType", value ?? "")}
                      >
                        <SelectTrigger
                          id="b2b-type"
                          className="h-11 w-full rounded-xl border-border/80 bg-secondary/50"
                        >
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent className="rounded-xl">
                          {FACILITY_OPTIONS.map((opt) => (
                            <SelectItem key={opt.value} value={opt.value}>
                              {opt.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </Field>
                  </div>

                  <Field>
                    <FieldLabel
                      htmlFor="b2b-notes"
                      className="text-xs font-bold tracking-wider text-muted-foreground uppercase"
                    >
                      Specific Requirements, Access Hours or Key Badging
                    </FieldLabel>
                    <Textarea
                      id="b2b-notes"
                      rows={4}
                      placeholder="E.g., After-hours access required after 7:00 PM; need touchpoint sanitization in cleanroom; requires recycling audit..."
                      value={b2bData.specialNotes}
                      onChange={(e) => updateField("specialNotes", e.target.value)}
                      className="rounded-xl border-border/80 bg-secondary/50 focus-visible:ring-brand"
                    />
                  </Field>

                  <div className="flex flex-col items-center justify-between gap-4 border-t border-border/80 pt-4 sm:flex-row">
                    <div className="flex items-center gap-2 text-xs font-medium text-muted-foreground">
                      <ShieldCheck className="h-4 w-4 shrink-0 text-brand" />
                      <span>Direct submission to management inbox • No spam guarantee</span>
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="h-12 w-full cursor-pointer gap-2 rounded-xl bg-brand px-8 font-bold text-brand-foreground shadow-lg shadow-brand/20 transition-all hover:bg-brand/90 sm:w-auto"
                    >
                      {isSubmitting ? (
                        <span>Dispatching to Management...</span>
                      ) : (
                        <>
                          <Send className="h-4 w-4" />
                          <span>Send Corporate B2B Inquiry</span>
                        </>
                      )}
                    </Button>
                  </div>
                </FieldGroup>
              </motion.form>
            ) : (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
              >
                <B2BInquirySuccess
                  contactName={b2bData.contactName}
                  companyName={b2bData.companyName}
                  squareFootage={b2bData.squareFootage}
                  cleaningFrequency={b2bData.cleaningFrequency}
                  reference={inquiryReference}
                  onReset={handleReset}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </CardContent>
      </Card>
    </section>
  );
}
