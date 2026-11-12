"use client";

import dynamic from "next/dynamic";
import { createContext, useCallback, useContext, useMemo, useState } from "react";
import type { QuoteServiceId } from "@/lib/quote/config";

export interface QuotePreset {
  /** Preselect a service in the dialog (e.g. from a service card). */
  serviceId?: QuoteServiceId;
}

interface QuoteContextValue {
  isOpen: boolean;
  openQuote: (preset?: QuotePreset) => void;
  closeQuote: () => void;
}

const QuoteContext = createContext<QuoteContextValue | null>(null);

// Loaded on first open so the form code is not part of the initial page JS.
const QuoteDialog = dynamic(() => import("./quote-dialog").then((m) => m.QuoteDialog), {
  ssr: false,
});

export function QuoteProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [hasOpened, setHasOpened] = useState(false);
  const [openCount, setOpenCount] = useState(0);
  const [preset, setPreset] = useState<QuotePreset>({});

  const openQuote = useCallback((next?: QuotePreset) => {
    setPreset(next ?? {});
    setOpenCount((n) => n + 1); // remount the form so the preset applies
    setHasOpened(true);
    setIsOpen(true);
  }, []);

  const closeQuote = useCallback(() => setIsOpen(false), []);

  const value = useMemo(() => ({ isOpen, openQuote, closeQuote }), [isOpen, openQuote, closeQuote]);

  return (
    <QuoteContext value={value}>
      {children}
      {hasOpened ? (
        <QuoteDialog
          open={isOpen}
          onOpenChange={setIsOpen}
          preset={preset}
          instanceKey={openCount}
        />
      ) : null}
    </QuoteContext>
  );
}

/** Open the shared quote dialog from any client component. */
export function useQuote(): QuoteContextValue {
  const ctx = useContext(QuoteContext);
  if (!ctx) {
    throw new Error("useQuote must be used inside <QuoteProvider> (mounted in app/layout.tsx).");
  }
  return ctx;
}
