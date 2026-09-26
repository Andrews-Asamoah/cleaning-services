/**
 * app/layout.tsx — Root layout
 * ─────────────────────────────────────────────────────────────────────────────

 */
import type { Metadata } from "next";
import { Fraunces, DM_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import siteConfig from "@/lib/site-config";

// Display font — Fraunces variable with optical size axis
const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  axes: ["opsz"], // optical size axis for crisp display at large sizes
});

// Body font — DM Sans variable
const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.name} — Professional Cleaning & Staffing`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  metadataBase: new URL(siteConfig.url),
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: siteConfig.name,
    title: `${siteConfig.name} — Professional Cleaning & Staffing`,
    description: siteConfig.description,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} — Professional Cleaning & Staffing`,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${fraunces.variable} ${dmSans.variable} h-full`}
    >
      <body className="flex min-h-full flex-col antialiased">
       <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
            <a
              href="#main-content"
              className={[
                "sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-100",
                "focus:rounded-md focus:bg-brand focus:px-4 focus:py-2",
                "focus:text-brand-foreground focus:text-sm focus:font-medium",
              ].join(" ")}
            >
              Skip to main content
            </a>

            <Navbar />

            <main id="main-content" className="flex-1" tabIndex={-1}>
              {children}
            </main>

            <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
