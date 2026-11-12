"use client";

import { useState } from "react";
import { Briefcase, HelpCircle, Send, Sparkles } from "lucide-react";
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
import { JOB_OPENINGS } from "@/data/mockData";
import { CvUploadField } from "./cvUploadField";
import { ApplicationSuccess } from "./applicationSuccess";

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
          style={{
            width: piece.width,
            height: piece.height,
            backgroundColor: piece.color,
          }}
        />
      ))}
    </div>
  );
}

type ShiftPreference =
  | "Full-Time Daytime"
  | "Full-Time Evening / Night"
  | "Part-Time Flexible Hours"
  | "Weekend Shifts Only";

type ExperienceYears =
  | "No experience (Eager to learn in Academy)"
  | "Less than 1 Year"
  | "1-2 Years"
  | "3-5 Years"
  | "5+ Years (Supervisory experience)";

interface ApplicationData {
  fullName: string;
  email: string;
  phone: string;
  positionId: string;
  shiftPreference: ShiftPreference;
  experienceYears: ExperienceYears;
  coverNote: string;
}

const SHIFT_OPTIONS: { value: ShiftPreference; label: string }[] = [
  { value: "Full-Time Daytime", label: "Full-Time Daytime (Mon - Fri)" },
  { value: "Full-Time Evening / Night", label: "Full-Time Evening / Night (Commercial)" },
  { value: "Part-Time Flexible Hours", label: "Part-Time Flexible Hours" },
  { value: "Weekend Shifts Only", label: "Weekend Shifts Only" },
];

const EXPERIENCE_OPTIONS: { value: ExperienceYears; label: string }[] = [
  {
    value: "No experience (Eager to learn in Academy)",
    label: "No experience (Eager to learn in Academy)",
  },
  { value: "Less than 1 Year", label: "Less than 1 Year" },
  { value: "1-2 Years", label: "1-2 Years" },
  { value: "3-5 Years", label: "3-5 Years" },
  { value: "5+ Years (Supervisory experience)", label: "5+ Years (Supervisory experience)" },
];

const DEFAULT_APPLICATION_DATA = (positionId: string): ApplicationData => ({
  fullName: "",
  email: "",
  phone: "",
  positionId,
  shiftPreference: "Full-Time Daytime",
  experienceYears: "1-2 Years",
  coverNote: "",
});

interface ApplicationFormProps {
  selectedPositionId?: string | null;
}

export function ApplicationForm({ selectedPositionId }: ApplicationFormProps) {
  const safePositionId = selectedPositionId ?? JOB_OPENINGS[0]?.id ?? "";

  const [appData, setAppData] = useState<ApplicationData>(() =>
    DEFAULT_APPLICATION_DATA(safePositionId),
  );

  const [prevSelectedPositionId, setPrevSelectedPositionId] = useState(selectedPositionId);
  if (selectedPositionId !== prevSelectedPositionId) {
    setPrevSelectedPositionId(selectedPositionId);
    if (selectedPositionId) {
      setAppData((prev) => ({ ...prev, positionId: selectedPositionId }));
    }
  }

  const [attachedFile, setAttachedFile] = useState<File | null>(null);
  const [fileError, setFileError] = useState<string | undefined>();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [applicationRef, setApplicationRef] = useState("");

  const updateField = <K extends keyof ApplicationData>(key: K, value: ApplicationData[K]) =>
    setAppData((prev) => ({ ...prev, [key]: value }));

  const handleFileChange = (file: File | null) => {
    if (!file) {
      setFileError(undefined);
      setAttachedFile(null);
      return;
    }
    setFileError(undefined);
    setAttachedFile(file);
    toast.success(`Attached: ${file.name}`);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!appData.fullName.trim() || !appData.email.trim() || !appData.phone.trim()) {
      toast.error("Please fill in your name, email, and phone number.");
      return;
    }

    if (!attachedFile) {
      setFileError("Please attach your CV or resume (.pdf, .doc, .docx).");
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      const generatedRef = "CV-" + Math.floor(100000 + Math.random() * 900000);
      setApplicationRef(generatedRef);
      setIsSubmitting(false);
      setSubmitted(true);
      setShowConfetti(true);

      toast.success(
        `Application received! Reference #${generatedRef}. HR will review within 48 hours.`,
      );

      setTimeout(() => setShowConfetti(false), 1400);
    }, 1200);
  };

  const handleReset = () => {
    setSubmitted(false);
    setShowConfetti(false);
    setAttachedFile(null);
    setFileError(undefined);
    setAppData(DEFAULT_APPLICATION_DATA(safePositionId));
  };

  return (
    <section id="application-form-section" className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <Card className="relative overflow-hidden rounded-3xl border border-border/80 bg-card/90 pt-0 shadow-2xl backdrop-blur-2xl dark:bg-card/40">
        {/* Ambient background glow */}
        <div className="pointer-events-none absolute top-0 right-0 h-96 w-96 rounded-full bg-brand/10 blur-3xl" />

        {/* Minimal Modern Header */}
        <div className="relative z-10 flex flex-col justify-between gap-4 border-b border-border/70 bg-secondary/30 p-6 sm:flex-row sm:items-center sm:p-8">
          <div className="space-y-1.5">
            <div className="inline-flex items-center gap-1.5 rounded-full bg-brand-muted px-3 py-1 text-xs font-bold tracking-wider text-brand uppercase">
              <Sparkles className="h-3.5 w-3.5" />
              <span>Direct Talent Acquisition Pipeline</span>
            </div>
            <h2 className="font-display text-2xl font-extrabold tracking-tight text-foreground sm:text-3xl">
              Submit Your CV / Application
            </h2>
            <p className="max-w-lg text-xs text-muted-foreground sm:text-sm">
              Upload your resume and contact details below. Our HR team manually reviews every
              document and responds within 48 hours.
            </p>
          </div>
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-brand/20 bg-brand/15 text-brand shadow-sm">
            <Briefcase className="h-6 w-6" />
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
                        htmlFor="app-name"
                        className="text-xs font-bold tracking-wider text-muted-foreground uppercase"
                      >
                        Your Full Name *
                      </FieldLabel>
                      <Input
                        id="app-name"
                        required
                        placeholder="e.g. David Alcantara"
                        value={appData.fullName}
                        onChange={(e) => updateField("fullName", e.target.value)}
                        className="h-11 rounded-xl border-border/80 bg-secondary/50 focus-visible:ring-brand"
                      />
                    </Field>

                    <Field>
                      <FieldLabel
                        htmlFor="app-phone"
                        className="text-xs font-bold tracking-wider text-muted-foreground uppercase"
                      >
                        Mobile Phone Number *
                      </FieldLabel>
                      <Input
                        id="app-phone"
                        required
                        type="tel"
                        placeholder="(555) 345-6789"
                        value={appData.phone}
                        onChange={(e) => updateField("phone", e.target.value)}
                        className="h-11 rounded-xl border-border/80 bg-secondary/50 focus-visible:ring-brand"
                      />
                    </Field>
                  </div>

                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <Field>
                      <FieldLabel
                        htmlFor="app-email"
                        className="text-xs font-bold tracking-wider text-muted-foreground uppercase"
                      >
                        Email Address *
                      </FieldLabel>
                      <Input
                        id="app-email"
                        required
                        type="email"
                        placeholder="david.alcantara@email.com"
                        value={appData.email}
                        onChange={(e) => updateField("email", e.target.value)}
                        className="h-11 rounded-xl border-border/80 bg-secondary/50 focus-visible:ring-brand"
                      />
                    </Field>

                    <Field>
                      <FieldLabel
                        htmlFor="app-role"
                        className="text-xs font-bold tracking-wider text-muted-foreground uppercase"
                      >
                        Desired Position *
                      </FieldLabel>
                      <Select
                        value={appData.positionId}
                        onValueChange={(value) => updateField("positionId", value ?? "")}
                      >
                        <SelectTrigger
                          id="app-role"
                          className="h-11 w-full rounded-xl border-border/80 bg-secondary/50"
                        >
                          <SelectValue placeholder="Select a position" />
                        </SelectTrigger>
                        <SelectContent className="rounded-xl">
                          {JOB_OPENINGS.map((j) => (
                            <SelectItem key={j.id} value={j.id}>
                              {j.title} ({j.salary})
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </Field>
                  </div>

                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <Field>
                      <FieldLabel
                        htmlFor="app-shift"
                        className="text-xs font-bold tracking-wider text-muted-foreground uppercase"
                      >
                        Preferred Shift
                      </FieldLabel>
                      <Select
                        value={appData.shiftPreference}
                        onValueChange={(value) =>
                          updateField(
                            "shiftPreference",
                            value as ApplicationData["shiftPreference"],
                          )
                        }
                      >
                        <SelectTrigger
                          id="app-shift"
                          className="h-11 w-full rounded-xl border-border/80 bg-secondary/50"
                        >
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent className="rounded-xl">
                          {SHIFT_OPTIONS.map((opt) => (
                            <SelectItem key={opt.value} value={opt.value}>
                              {opt.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </Field>

                    <Field>
                      <FieldLabel
                        htmlFor="app-exp"
                        className="text-xs font-bold tracking-wider text-muted-foreground uppercase"
                      >
                        Cleaning / Maintenance Experience
                      </FieldLabel>
                      <Select
                        value={appData.experienceYears}
                        onValueChange={(value) =>
                          updateField(
                            "experienceYears",
                            value as ApplicationData["experienceYears"],
                          )
                        }
                      >
                        <SelectTrigger
                          id="app-exp"
                          className="h-11 w-full rounded-xl border-border/80 bg-secondary/50"
                        >
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent className="rounded-xl">
                          {EXPERIENCE_OPTIONS.map((opt) => (
                            <SelectItem key={opt.value} value={opt.value}>
                              {opt.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </Field>
                  </div>

                  <CvUploadField
                    file={attachedFile}
                    onFileChange={handleFileChange}
                    error={fileError}
                  />

                  <Field>
                    <FieldLabel
                      htmlFor="app-note"
                      className="text-xs font-bold tracking-wider text-muted-foreground uppercase"
                    >
                      Brief Introduction or Availability
                    </FieldLabel>
                    <Textarea
                      id="app-note"
                      rows={3}
                      placeholder="Tell us a little bit about yourself, your current location, or when you can start..."
                      value={appData.coverNote}
                      onChange={(e) => updateField("coverNote", e.target.value)}
                      className="rounded-xl border-border/80 bg-secondary/50 focus-visible:ring-brand"
                    />
                  </Field>

                  <div className="flex items-start gap-3 rounded-2xl border border-border/80 bg-secondary/40 p-4 text-xs text-muted-foreground backdrop-blur-md">
                    <HelpCircle className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                    <p className="leading-relaxed">
                      <strong className="text-foreground">Privacy & Review Notice:</strong> All
                      submitted resumes are manually evaluated by our Talent Acquisition Team. Your
                      personal information is encrypted and never shared with third parties.
                    </p>
                  </div>

                  <div className="flex justify-end pt-2">
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="h-12 w-full cursor-pointer gap-2 rounded-xl bg-brand px-8 font-bold text-brand-foreground shadow-lg shadow-brand/20 transition-all hover:bg-brand/90 sm:w-auto"
                    >
                      {isSubmitting ? (
                        <span>Processing Application...</span>
                      ) : (
                        <>
                          <Send className="h-4 w-4" />
                          <span>Submit Application for Manual Review</span>
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
                <ApplicationSuccess
                  fullName={appData.fullName}
                  contact={appData.phone || appData.email}
                  reference={applicationRef}
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
