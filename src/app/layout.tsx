import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SiteShell } from "@/components/layout/SiteShell";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const mono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#1F3A34",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://vown.site"),
  title: "VOwn | Website Home",
  description:
    "We build websites, connect your apps, and help you stop doing the same tasks by hand.",
  openGraph: {
    title: "VOwn",
    description: "Websites, connected tools, and a little less manual work.",
    siteName: "VOwn",
    type: "website",
    images: [
      {
        url: "/brand/vown-primary-logo.png",
        width: 1254,
        height: 1254,
        alt: "VOwn",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "VOwn",
    description: "Websites, connected tools, and a little less manual work.",
    images: ["/brand/vown-primary-logo.png"],
  },
  robots: { index: true, follow: true },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || undefined,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "VOwn",
    url: "https://vown.site",
    logo: "https://vown.site/brand/vown-primary-logo.png",
    email: "admin@vown.site",
  };

  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${geist.variable} ${mono.variable}`}
    >
      <body id="top">
        <SiteShell>{children}</SiteShell>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
