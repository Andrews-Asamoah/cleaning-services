"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Sparkles,
  Menu,
  PhoneCall,
  Briefcase,
  ChevronRight,
  ShieldCheck,
  Building2,
  CalendarCheck,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";

import { ThemeToggle } from "@/components/theme-toggle";
import { useEffect, useState } from "react";

interface NavbarProps {
  onOpenQuickQuote?: () => void;
}

const navLinks = [
  { label: "Home", href: "/", icon: <Sparkles className="h-4 w-4" /> },
  {
    label: "Services",
    href: "/services",
    icon: <Building2 className="h-4 w-4" />,
  },
  {
    label: "Careers",
    href: "/careers",
    icon: <Briefcase className="h-4 w-4" />,
  },
  {
    label: "Contact",
    href: "/contact",
    icon: <PhoneCall className="h-4 w-4" />,
  },
];

export const Navbar: React.FC<NavbarProps> = ({ onOpenQuickQuote }) => {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const handleQuoteClick = () => {
    if (onOpenQuickQuote) {
      onOpenQuickQuote();
    } else {
      console.warn("Quick quote handler not provided to Navbar");
    }
  };

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="sticky top-4 z-40 w-full px-4 sm:px-6 lg:px-8">
      {/* Floating Modern Glassmorphism Capsule Navbar Container */}
      <div
        className={`mx-auto flex max-w-7xl items-center justify-between rounded-2xl px-4 py-3 transition-all duration-300 sm:rounded-full sm:px-6 ${
          isScrolled
            ? "border border-white/40 bg-white/80 shadow-xl shadow-slate-950/5 backdrop-blur-2xl dark:border-white/10 dark:bg-slate-950/80"
            : "border border-white/30 bg-white/60 shadow-lg shadow-slate-950/5 backdrop-blur-xl dark:border-white/10 dark:bg-slate-950/60"
        }`}
      >
        {/* Brand */}
        <Link
          href="/"
          className="group flex shrink-0 items-center gap-2.5 rounded-xl text-left focus-visible:ring-2 focus-visible:ring-brand focus-visible:outline-none"
        >
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-brand text-brand-foreground shadow-md shadow-brand/25 transition-transform group-hover:scale-105 sm:h-10 sm:w-10">
            <Sparkles className="h-4.5 w-4.5 text-brand-foreground sm:h-5 sm:w-5" />
          </div>
          <div className="min-w-0">
            <div className="flex items-center gap-1.5">
              <span className="font-display text-lg font-extrabold tracking-tight whitespace-nowrap text-foreground sm:text-xl">
                Aura<span className="text-brand">Clean</span>
              </span>
              <span className="hidden rounded-md bg-brand-muted px-1.5 py-0.5 text-[10px] font-bold tracking-wider text-brand uppercase xl:inline-block">
                & Staffing
              </span>
            </div>
            <p className="hidden truncate text-[11px] text-muted-foreground sm:block">
              Premium Spaces • Trusted Personnel
            </p>
          </div>
        </Link>

        {/* Desktop nav — Floating Capsule Pill */}
        <nav className="hidden items-center gap-1 rounded-full border border-border/60 bg-secondary/60 p-1.5 backdrop-blur-md lg:flex dark:bg-secondary/40">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={isActive ? "page" : undefined}
                className={`flex items-center gap-1.5 rounded-full px-4 py-1.5 text-sm font-semibold whitespace-nowrap transition-all focus-visible:ring-2 focus-visible:ring-brand focus-visible:outline-none ${
                  isActive
                    ? "bg-primary text-primary-foreground shadow-sm"
                    : "text-muted-foreground hover:bg-secondary/80 hover:text-foreground"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Right actions */}
        <div className="flex shrink-0 items-center gap-2 sm:gap-3">
          <ThemeToggle />

          <Button
            variant="default"
            size="sm"
            onClick={handleQuoteClick}
            className="hidden cursor-pointer gap-1.5 rounded-full bg-brand px-5 font-semibold text-brand-foreground shadow-sm hover:bg-brand/90 md:inline-flex"
          >
            <CalendarCheck className="h-4 w-4" />
            <span>Fast Quote</span>
          </Button>

          {/* Mobile/tablet drawer */}
          <div className="lg:hidden">
            <Sheet open={isMobileOpen} onOpenChange={setIsMobileOpen}>
              <SheetTrigger
                render={
                  <Button
                    variant="outline"
                    size="icon"
                    className="h-10 w-10 cursor-pointer rounded-xl border-border/80 bg-card/60 backdrop-blur-md"
                    aria-label="Open navigation menu"
                  />
                }
              >
                <Menu className="h-5 w-5 text-foreground" />
              </SheetTrigger>
              <SheetContent
                side="right"
                className="flex w-[85vw] max-w-sm flex-col justify-between overflow-y-auto border-l border-border/80 bg-card/95 p-6 backdrop-blur-2xl"
              >
                <div>
                  <SheetHeader className="border-b border-border/60 px-0 pb-6 text-left">
                    <div className="flex items-center gap-2.5">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand text-brand-foreground shadow-sm">
                        <Sparkles className="h-5 w-5" />
                      </div>
                      <div className="min-w-0">
                        <SheetTitle className="truncate font-display text-lg font-bold text-foreground">
                          AuraClean & Staffing
                        </SheetTitle>
                        <p className="truncate text-xs text-muted-foreground">
                          Commercial & Residential Services
                        </p>
                      </div>
                    </div>
                  </SheetHeader>

                  <div className="space-y-2 py-6">
                    {navLinks.map((link) => {
                      const isActive = pathname === link.href;
                      return (
                        <Link
                          key={link.href}
                          href={link.href}
                          onClick={() => setIsMobileOpen(false)}
                          aria-current={isActive ? "page" : undefined}
                          className={`flex min-h-11 w-full items-center justify-between rounded-xl px-4 py-3 text-sm font-semibold transition-colors focus-visible:ring-2 focus-visible:ring-brand focus-visible:outline-none ${
                            isActive
                              ? "bg-brand text-brand-foreground shadow-sm"
                              : "text-foreground/80 hover:bg-secondary/80 hover:text-foreground"
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            <span
                              className={
                                isActive ? "text-brand-foreground" : "text-muted-foreground"
                              }
                            >
                              {link.icon}
                            </span>
                            <span>{link.label}</span>
                          </div>
                          <ChevronRight className="h-4 w-4 shrink-0 opacity-60" />
                        </Link>
                      );
                    })}
                  </div>

                  <div className="space-y-3 border-t border-border/60 pt-4">
                    <Button
                      className="min-h-11 w-full cursor-pointer justify-center gap-2 rounded-xl bg-brand font-semibold text-brand-foreground hover:bg-brand/90"
                      onClick={() => {
                        setIsMobileOpen(false);
                        handleQuoteClick();
                      }}
                    >
                      <CalendarCheck className="h-4 w-4" />
                      Request Fast Quote
                    </Button>
                    <Button
                      variant="outline"
                      className="min-h-11 w-full cursor-pointer justify-center gap-2 rounded-xl border-border bg-transparent font-semibold text-foreground hover:bg-secondary"
                      render={<Link href="/careers" onClick={() => setIsMobileOpen(false)} />}
                    >
                      <Briefcase className="h-4 w-4 text-brand" />
                      Submit CV / Join Team
                    </Button>
                  </div>
                </div>

                <div className="flex items-center gap-2 border-t border-border/60 pt-6 text-xs text-muted-foreground">
                  <ShieldCheck className="h-4 w-4 shrink-0 text-brand" />
                  <span>Licensed, $5M Insured & Bonded Facility Service</span>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};
