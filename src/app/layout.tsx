import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/data/siteConfig";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ThemeProvider } from "@/components/theme/ThemeProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#F8FAFC" },
    { media: "(prefers-color-scheme: dark)", color: "#090D16" },
  ],
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://vown.site"),
  title: {
    default: "VOwn",
    template: "%s",
  },
  description:
    "VOwn builds practical automations, connected workflows, and clear websites for teams that want less busywork.",
  keywords: [
    "AI Automation for Business",
    "Business Process Automation",
    "Business Software Integrations",
    "Website Development",
    "Workflow Automation",
    "CRM Integration",
    "API Integrations",
    "Next.js Web Development",
    "VOwn",
    "vown.site",
  ],
  authors: [{ name: "VOwn Team", url: "https://vown.site" }],
  creator: "VOwn",
  publisher: "VOwn",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://vown.site",
  },
  openGraph: {
    title: "VOwn · Better systems for better work",
    description:
      "Automations, connected tools, and clear websites that help your team spend less time on busywork.",
    url: "https://vown.site",
    siteName: "VOwn",
    images: [
      {
        url: "/brand/vown-primary-logo.png",
        width: 1254,
        height: 1254,
        alt: "VOwn - Technology That Moves You Forward",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "VOwn · Better systems for better work",
    description:
      "Automations, connected tools, and clear websites that help your team spend less time on busywork.",
    images: ["/brand/vown-primary-logo.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/brand/vown-primary-logo.png", sizes: "192x192", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || undefined,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Enriched structured data for Search & Answer Engines (JSON-LD)
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfessionalService",
        "@id": "https://vown.site/#organization",
        name: "VOwn",
        alternateName: "VOwn Technology Studio",
        url: "https://vown.site",
        logo: {
          "@type": "ImageObject",
          url: "https://vown.site/brand/vown-primary-logo.png",
          width: 1254,
          height: 1254,
          caption: "VOwn Logo",
        },
        image: "https://vown.site/brand/vown-primary-logo.png",
        email: siteConfig.contactEmail,
        description:
          "VOwn helps businesses reduce repetitive work, connect everyday software, and build clear, responsive websites.",
        knowsAbout: [
          "AI Automation",
          "Business Process Automation",
          "Software Integrations",
          "API Integration",
          "Custom Web Development",
          "Next.js Development",
          "Operational Efficiency",
        ],
        priceRange: "$$",
        areaServed: {
          "@type": "AdministrativeArea",
          name: "Global",
        },
      },
      {
        "@type": "WebSite",
        "@id": "https://vown.site/#website",
        url: "https://vown.site",
        name: "VOwn",
        description: siteConfig.description,
        publisher: {
          "@id": "https://vown.site/#organization",
        },
        inLanguage: "en-US",
      },
    ],
  };

  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <head>
        {/* Anti-FOUC script for instant theme application */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var saved = localStorage.getItem('vown-theme');
                  var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                  if (saved === 'dark' || (!saved && prefersDark)) {
                    document.documentElement.classList.add('dark');
                    document.documentElement.style.colorScheme = 'dark';
                  } else {
                    document.documentElement.classList.remove('dark');
                    document.documentElement.style.colorScheme = 'light';
                  }
                } catch(e) {}
              })();
            `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-[#F8FAFC] dark:bg-[#090D16] text-[#0F172A] dark:text-[#F8FAFC] font-sans selection:bg-[#334155] dark:selection:bg-slate-700 selection:text-white transition-colors duration-200">
        <ThemeProvider>
          <Navbar />
          <main className="flex-1 flex flex-col">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
