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
    default: "VOwn — AI Automation, Integrations & Web Development",
    template: "%s | VOwn",
  },
  description:
    "VOwn builds intelligent digital experiences through AI automation, seamless integrations, and modern web technology.",
  keywords: [
    "AI Automation",
    "Business Integrations",
    "Website Development",
    "VOwn",
    "vown.site",
    "Autonomous Workflows",
    "API Integrations",
    "Next.js Development",
  ],
  authors: [{ name: "VOwn Team", url: "https://vown.site" }],
  creator: "VOwn",
  publisher: "VOwn",
  alternates: {
    canonical: "https://vown.site",
  },
  openGraph: {
    title: "VOwn — AI Automation, Integrations & Web Development",
    description:
      "VOwn builds intelligent digital experiences through AI automation, seamless integrations, and modern web technology.",
    url: "https://vown.site",
    siteName: "VOwn",
    images: [
      {
        url: "/brand/vown-primary-logo.png",
        width: 1254,
        height: 1254,
        alt: "VOwn Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "VOwn — AI Automation, Integrations & Web Development",
    description:
      "VOwn builds intelligent digital experiences through AI automation, seamless integrations, and modern web technology.",
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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Structured data for Search Engines (JSON-LD)
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://vown.site/#organization",
        name: "VOwn",
        url: "https://vown.site",
        logo: {
          "@type": "ImageObject",
          url: "https://vown.site/brand/vown-primary-logo.png",
          width: 1254,
          height: 1254,
        },
        email: siteConfig.contactEmail,
        description: siteConfig.description,
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
