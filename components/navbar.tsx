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
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { ThemeToggle } from "@/components/theme-toggle";
import { useEffect, useState } from "react";

interface NavbarProps {
  onOpenQuickQuote?: () => void;
}

const navLinks = [
  { label: "Home", href: "/", icon: <Sparkles className="w-4 h-4" /> },
  {
    label: "Services",
    href: "/services",
    icon: <Building2 className="w-4 h-4" />,
  },
  {
    label: "Careers",
    href: "/careers",
    icon: <Briefcase className="w-4 h-4" />,
  },
  {
    label: "Contact",
    href: "/contact",
    icon: <PhoneCall className="w-4 h-4" />,
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
        className={`max-w-7xl mx-auto flex items-center justify-between transition-all duration-300 px-4 sm:px-6 py-3 rounded-2xl sm:rounded-full ${
          isScrolled
            ? "bg-white/80 dark:bg-slate-950/80 backdrop-blur-2xl shadow-xl shadow-slate-950/5 border border-white/40 dark:border-white/10"
            : "bg-white/60 dark:bg-slate-950/60 backdrop-blur-xl shadow-lg shadow-slate-950/5 border border-white/30 dark:border-white/10"
        }`}
      >
        {/* Brand */}
        <Link
          href="/"
          className="flex items-center gap-2.5 group text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand rounded-xl shrink-0"
        >
          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-brand flex items-center justify-center text-brand-foreground shadow-md shadow-brand/25 group-hover:scale-105 transition-transform shrink-0">
            <Sparkles className="w-4.5 h-4.5 sm:w-5 sm:h-5 text-brand-foreground" />
          </div>
          <div className="min-w-0">
            <div className="flex items-center gap-1.5">
              <span className="text-lg sm:text-xl font-extrabold tracking-tight text-foreground whitespace-nowrap font-display">
                Aura<span className="text-brand">Clean</span>
              </span>
              <span className="hidden xl:inline-block px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wider bg-brand-muted text-brand rounded-md">
                & Staffing
              </span>
            </div>
            <p className="text-[11px] text-muted-foreground hidden sm:block truncate">
              Premium Spaces • Trusted Personnel
            </p>
          </div>
        </Link>

        {/* Desktop nav — Floating Capsule Pill */}
        <nav className="hidden lg:flex items-center gap-1 bg-secondary/60 dark:bg-secondary/40 backdrop-blur-md p-1.5 rounded-full border border-border/60">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={isActive ? "page" : undefined}
                className={`flex items-center gap-1.5 px-4 py-1.5 rounded-full text-sm font-semibold whitespace-nowrap transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand ${
                  isActive
                    ? "bg-primary text-primary-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary/80"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Right actions */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          <ThemeToggle />

          <Button
            variant="default"
            size="sm"
            onClick={handleQuoteClick}
            className="hidden md:inline-flex rounded-full px-5 gap-1.5 bg-brand text-brand-foreground hover:bg-brand/90 shadow-sm font-semibold cursor-pointer"
          >
            <CalendarCheck className="w-4 h-4" />
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
                    className="rounded-xl border-border/80 bg-card/60 backdrop-blur-md h-10 w-10 cursor-pointer"
                    aria-label="Open navigation menu"
                  />
                }
              >
                <Menu className="h-5 w-5 text-foreground" />
              </SheetTrigger>
              <SheetContent
                side="right"
                className="w-[85vw] max-w-sm p-6 flex flex-col justify-between overflow-y-auto bg-card/95 backdrop-blur-2xl border-l border-border/80"
              >
                <div>
                  <SheetHeader className="text-left pb-6 border-b border-border/60 px-0">
                    <div className="flex items-center gap-2.5">
                      <div className="w-10 h-10 rounded-xl bg-brand flex items-center justify-center text-brand-foreground shrink-0 shadow-sm">
                        <Sparkles className="w-5 h-5" />
                      </div>
                      <div className="min-w-0">
                        <SheetTitle className="text-lg font-bold truncate font-display text-foreground">
                          AuraClean & Staffing
                        </SheetTitle>
                        <p className="text-xs text-muted-foreground truncate">
                          Commercial & Residential Services
                        </p>
                      </div>
                    </div>
                  </SheetHeader>

                  <div className="py-6 space-y-2">
                    {navLinks.map((link) => {
                      const isActive = pathname === link.href;
                      return (
                        <Link
                          key={link.href}
                          href={link.href}
                          onClick={() => setIsMobileOpen(false)}
                          aria-current={isActive ? "page" : undefined}
                          className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm font-semibold transition-colors min-h-11 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand ${
                            isActive
                              ? "bg-brand text-brand-foreground shadow-sm"
                              : "text-foreground/80 hover:bg-secondary/80 hover:text-foreground"
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            <span className={isActive ? "text-brand-foreground" : "text-muted-foreground"}>
                              {link.icon}
                            </span>
                            <span>{link.label}</span>
                          </div>
                          <ChevronRight className="w-4 h-4 opacity-60 shrink-0" />
                        </Link>
                      );
                    })}
                  </div>

                  <div className="space-y-3 pt-4 border-t border-border/60">
                    <Button
                      className="w-full justify-center gap-2 min-h-11 bg-brand text-brand-foreground hover:bg-brand/90 font-semibold rounded-xl cursor-pointer"
                      onClick={() => {
                        setIsMobileOpen(false);
                        handleQuoteClick();
                      }}
                    >
                      <CalendarCheck className="w-4 h-4" />
                      Request Fast Quote
                    </Button>
                    <Button
                      variant="outline"
                      className="w-full justify-center gap-2 min-h-11 border-border bg-transparent hover:bg-secondary text-foreground font-semibold rounded-xl cursor-pointer"
                      render={
                        <Link
                          href="/careers"
                          onClick={() => setIsMobileOpen(false)}
                        />
                      }
                    >
                      <Briefcase className="w-4 h-4 text-brand" />
                      Submit CV / Join Team
                    </Button>
                  </div>
                </div>

                <div className="pt-6 border-t border-border/60 text-xs text-muted-foreground flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-brand shrink-0" />
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