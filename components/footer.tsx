import Link from "next/link";
import { Sparkles, Phone, Mail, MapPin } from "lucide-react";
import siteConfig from "@/lib/site-config";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Services & Pricing", href: "/services" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
];

const legalLinks = [
  { label: "Privacy Policy", href: "/privacy" }, // PLACEHOLDER page
  { label: "Terms of Service", href: "/terms" }, // PLACEHOLDER page
];

// lucide-react v1 removed all brand/trademarked icons (Facebook, Instagram,
// LinkedIn, GitHub logo, Slack, Figma, etc.) over trademark risk. These are
// minimal inline SVGs standing in for them — swap for an icon set of your
// choosing (e.g. Simple Icons) if you want more polished brand marks.
function FacebookIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5.02 3.66 9.18 8.44 9.94v-7.03H7.9v-2.91h2.54V9.85c0-2.51 1.49-3.9 3.77-3.9 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.89h2.78l-.45 2.91h-2.33V22c4.78-.76 8.44-4.92 8.44-9.94Z" />
    </svg>
  );
}
function InstagramIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      {...props}
    >
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}
function LinkedinIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M4.98 3.5a2.5 2.5 0 1 0 .02 5 2.5 2.5 0 0 0-.02-5ZM3 9h4v12H3V9Zm7 0h3.6v1.64h.05c.5-.95 1.73-1.96 3.56-1.96 3.8 0 4.5 2.5 4.5 5.75V21h-4v-5.6c0-1.34-.02-3.06-1.87-3.06-1.87 0-2.16 1.46-2.16 2.97V21h-4V9Z" />
    </svg>
  );
}

const socialIconMap = {
  facebook: FacebookIcon,
  instagram: InstagramIcon,
  linkedin: LinkedinIcon,
  twitter: null, // not in siteConfig — add if needed
} as const;

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="border-t border-border bg-background"
      aria-label="Site footer"
    >
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8">
          {/* ── Brand column ──────────────────────────────────────────────── */}
          <div className="lg:col-span-5">
            <Link
              href="/"
              className="inline-flex items-center gap-2.5 group w-fit focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand rounded-lg"
              aria-label={`${siteConfig.name} — home`}
            >
              <span className="flex size-9 items-center justify-center rounded-xl bg-linear-to-tr from-teal-600 via-teal-500 to-cyan-400 text-white shadow-sm shrink-0 group-hover:scale-105 transition-transform">
                <Sparkles className="size-4.5" aria-hidden="true" />
              </span>
              <span className="font-display text-xl font-semibold tracking-tight text-foreground">
                {siteConfig.name}
              </span>
            </Link>

            <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted-foreground">
              {siteConfig.description}
            </p>

            {/* Contact details */}
            <address className="mt-7 not-italic space-y-3 text-sm">
              <a
                href={siteConfig.phoneHref}
                className="flex items-center gap-2.5 text-muted-foreground hover:text-brand transition-colors"
              >
                <Phone className="size-4 shrink-0" aria-hidden="true" />
                {siteConfig.phone}
              </a>
              <a
                href={siteConfig.emailHref}
                className="flex items-center gap-2.5 text-muted-foreground hover:text-brand transition-colors break-all"
              >
                <Mail className="size-4 shrink-0" aria-hidden="true" />
                {siteConfig.email}
              </a>
              <p className="flex items-start gap-2.5 text-muted-foreground">
                <MapPin className="size-4 shrink-0 mt-0.5" aria-hidden="true" />
                {siteConfig.address.full}
              </p>
            </address>

            {/* Social links */}
            <nav aria-label="Social media links" className="mt-7">
              <ul className="flex items-center gap-3" role="list">
                {siteConfig.socials.map(({ label, href, icon }) => {
                  const Icon = socialIconMap[icon];
                  if (!Icon) return null;
                  return (
                    <li key={icon}>
                      <a
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${siteConfig.name} on ${label}`}
                        className="flex size-9 items-center justify-center
                      rounded-full border border-border text-muted-foreground
                      hover:border-brand hover:text-brand transition-colors"
                      >
                        <Icon className="size-4" aria-hidden="true" />
                      </a>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </div>

          {/* ── Link columns ──────────────────────────────────────────────── */}
          <div className="lg:col-span-7 grid grid-cols-2 gap-10 sm:grid-cols-3 lg:pl-8 lg:border-l lg:border-border">
            <nav aria-label="Quick links">
              <h2 className="text-sm font-semibold uppercase tracking-wider text-foreground mb-4">
                Quick links
              </h2>
              <ul role="list" className="space-y-2.5">
                {quickLinks.map(({ label, href }) => (
                  <li key={href}>
                    <Link
                      href={href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <div>
              <h2 className="text-sm font-semibold uppercase tracking-wider text-foreground mb-4">
                Service areas
              </h2>
              <ul role="list" className="space-y-2.5">
                {siteConfig.serviceAreas.map(({ name }) => (
                  <li key={name} className="text-sm text-muted-foreground">
                    {name}
                  </li>
                ))}
              </ul>
            </div>

            <div className="col-span-2 sm:col-span-1">
              <h2 className="text-sm font-semibold uppercase tracking-wider text-foreground mb-4">
                Hours
              </h2>
              <ul role="list" className="space-y-2.5">
                {siteConfig.hours.map(({ days, hours }) => (
                  <li key={days} className="text-sm text-muted-foreground">
                    <span className="block text-foreground/80">{days}</span>
                    {hours}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* ── Bottom bar ────────────────────────────────────────────────── */}
        <div className="mt-14 border-t border-border pt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-muted-foreground">
            &copy; {year} {siteConfig.name}. All rights reserved.
          </p>
          <nav aria-label="Legal links">
            <ul className="flex items-center gap-5" role="list">
              {legalLinks.map(({ label, href }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-xs text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
}
