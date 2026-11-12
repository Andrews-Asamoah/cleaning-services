"use client";

import { useState, useTransition } from "react";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle2, Mail, PhoneCall, Send } from "lucide-react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Field, FieldError, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { submitQuoteRequest } from "@/app/actions/quote";
import { QUOTE_SERVICE_OPTIONS } from "@/lib/quote/config";
import { quoteSchema, type QuoteFormValues } from "@/lib/validation/quote";
import siteConfig from "@/lib/site-config";
import type { QuotePreset } from "./quote-provider";

interface QuoteDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  preset: QuotePreset;
  /** Changes on every open so the form remounts with the new preset. */
  instanceKey: number;
}

type View = "form" | "fallback" | "success";

const labelClass = "text-xs font-bold tracking-wider text-muted-foreground uppercase";
const inputClass = "h-11 rounded-xl border-border/80 bg-secondary/50";

export function QuoteDialog({ open, onOpenChange, preset, instanceKey }: QuoteDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-h-[90vh] w-full max-w-[calc(100vw-2rem)] overflow-y-auto rounded-2xl border-border/80 bg-card p-5 shadow-2xl sm:max-w-lg sm:p-7">
        <QuoteForm key={instanceKey} preset={preset} onDone={() => onOpenChange(false)} />
      </DialogContent>
    </Dialog>
  );
}

function QuoteForm({ preset, onDone }: { preset: QuotePreset; onDone: () => void }) {
  const [view, setView] = useState<View>("form");
  const [reference, setReference] = useState("");
  const [isPending, startTransition] = useTransition();

  const {
    register,
    control,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<QuoteFormValues>({
    resolver: zodResolver(quoteSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      postcode: "",
      serviceId: preset.serviceId,
      message: "",
      website: "",
    },
  });

  const onSubmit = handleSubmit((values) => {
    startTransition(async () => {
      try {
        const result = await submitQuoteRequest(values);
        if (result.ok) {
          setReference(result.reference);
          setView("success");
          return;
        }
        if (result.error === "validation") {
          for (const [field, messages] of Object.entries(result.fieldErrors)) {
            if (messages?.[0]) {
              setError(field as keyof QuoteFormValues, { message: messages[0] });
            }
          }
          return;
        }
        setView("fallback");
      } catch {
        toast.error("Something went wrong. Please try again, or call us.");
      }
    });
  });

  if (view === "success") {
    return (
      <div className="space-y-5 py-4 text-center">
        <div className="mx-auto flex size-12 items-center justify-center rounded-2xl bg-brand/15 text-brand">
          <CheckCircle2 className="size-6" aria-hidden="true" />
        </div>
        <DialogHeader className="space-y-1.5 text-center">
          <DialogTitle className="font-display text-2xl font-extrabold">
            Thanks, we have your request
          </DialogTitle>
          <DialogDescription>
            Your reference is <span className="font-semibold text-foreground">{reference}</span>. We
            will be in touch shortly with your quote.
          </DialogDescription>
        </DialogHeader>
        <Button onClick={onDone} className="w-full rounded-xl">
          Close
        </Button>
      </div>
    );
  }

  if (view === "fallback") {
    return (
      <div className="space-y-5 py-2">
        <DialogHeader className="space-y-1.5 text-left">
          <DialogTitle className="font-display text-2xl font-extrabold">
            Let’s get your quote another way
          </DialogTitle>
          <DialogDescription>
            We couldn’t send your request online just now, and we don’t want you to lose it. Call or
            email us and we will sort your quote straight away.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-3 sm:grid-cols-2">
          <Button
            className="h-11 rounded-xl bg-brand font-semibold text-brand-foreground hover:bg-brand/90"
            render={<a href={siteConfig.phoneHref} />}
          >
            <PhoneCall className="size-4" aria-hidden="true" />
            {siteConfig.phone}
          </Button>
          <Button
            variant="outline"
            className="h-11 rounded-xl font-semibold"
            render={<a href={siteConfig.emailHref} />}
          >
            <Mail className="size-4" aria-hidden="true" />
            Email us
          </Button>
        </div>
        <Button variant="ghost" className="w-full" onClick={() => setView("form")}>
          Back to the form
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-5">
      <DialogHeader className="space-y-1.5 text-left">
        <DialogTitle className="font-display text-2xl font-extrabold tracking-tight">
          Get a free quote
        </DialogTitle>
        <DialogDescription>
          Tell us a little about what you need. We will reply with a clear price.
        </DialogDescription>
      </DialogHeader>

      <FieldGroup className="gap-4">
        <Field data-invalid={!!errors.fullName}>
          <FieldLabel htmlFor="quote-name" className={labelClass}>
            Full name
          </FieldLabel>
          <Input
            id="quote-name"
            autoComplete="name"
            aria-invalid={!!errors.fullName}
            className={inputClass}
            {...register("fullName")}
          />
          <FieldError errors={[errors.fullName]} />
        </Field>

        <div className="grid gap-4 sm:grid-cols-2">
          <Field data-invalid={!!errors.phone}>
            <FieldLabel htmlFor="quote-phone" className={labelClass}>
              Phone
            </FieldLabel>
            <Input
              id="quote-phone"
              type="tel"
              inputMode="tel"
              autoComplete="tel"
              placeholder="07123 456789"
              aria-invalid={!!errors.phone}
              className={inputClass}
              {...register("phone")}
            />
            <FieldError errors={[errors.phone]} />
          </Field>

          <Field data-invalid={!!errors.postcode}>
            <FieldLabel htmlFor="quote-postcode" className={labelClass}>
              Postcode
            </FieldLabel>
            <Input
              id="quote-postcode"
              autoComplete="postal-code"
              placeholder="EC1A 1AA"
              aria-invalid={!!errors.postcode}
              className={`${inputClass} uppercase`}
              {...register("postcode")}
            />
            <FieldError errors={[errors.postcode]} />
          </Field>
        </div>

        <Field data-invalid={!!errors.email}>
          <FieldLabel htmlFor="quote-email" className={labelClass}>
            Email
          </FieldLabel>
          <Input
            id="quote-email"
            type="email"
            inputMode="email"
            autoComplete="email"
            aria-invalid={!!errors.email}
            className={inputClass}
            {...register("email")}
          />
          <FieldError errors={[errors.email]} />
        </Field>

        <Field data-invalid={!!errors.serviceId}>
          <FieldLabel htmlFor="quote-service" className={labelClass}>
            Service
          </FieldLabel>
          <Controller
            control={control}
            name="serviceId"
            render={({ field }) => (
              <Select
                items={QUOTE_SERVICE_OPTIONS}
                value={field.value ?? null}
                onValueChange={(value) => field.onChange(value ?? undefined)}
              >
                <SelectTrigger
                  id="quote-service"
                  aria-invalid={!!errors.serviceId}
                  className={`${inputClass} w-full`}
                >
                  <SelectValue placeholder="Choose a service" />
                </SelectTrigger>
                <SelectContent className="rounded-xl">
                  {QUOTE_SERVICE_OPTIONS.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            )}
          />
          <FieldError errors={[errors.serviceId]} />
        </Field>

        <Field data-invalid={!!errors.message}>
          <FieldLabel htmlFor="quote-message" className={labelClass}>
            Anything we should know? <span className="font-normal normal-case">(optional)</span>
          </FieldLabel>
          <Textarea
            id="quote-message"
            rows={3}
            aria-invalid={!!errors.message}
            className="rounded-xl border-border/80 bg-secondary/50"
            {...register("message")}
          />
          <FieldError errors={[errors.message]} />
        </Field>

        {/* Honeypot: hidden from people and assistive tech, bots tend to fill it. */}
        <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
          <label htmlFor="quote-website">Website</label>
          <input
            id="quote-website"
            type="text"
            tabIndex={-1}
            autoComplete="off"
            {...register("website")}
          />
        </div>
      </FieldGroup>

      <p className="text-xs leading-relaxed text-muted-foreground">
        We only use your details to reply to this request.
      </p>

      <Button
        type="submit"
        disabled={isPending}
        className="h-12 w-full rounded-xl bg-brand font-bold text-brand-foreground shadow-lg shadow-brand/25 hover:bg-brand/90"
      >
        <Send className="size-4" aria-hidden="true" />
        {isPending ? "Sending…" : "Request my quote"}
      </Button>
    </form>
  );
}
