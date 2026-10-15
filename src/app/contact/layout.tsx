import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Contact VOwn — Discuss Your Automation, Integration, or Website Project",
  description:
    "Get in touch with the VOwn team. We respond directly within 24 hours to discuss your business automation, software integrations, or custom website requirements.",
  alternates: {
    canonical: "https://vown.site/contact",
  },
  openGraph: {
    title: "Contact VOwn — Discuss Your Automation, Integration, or Website Project",
    description:
      "Get in touch with the VOwn team to discuss your business automation, software integrations, or custom website requirements.",
    url: "https://vown.site/contact",
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
    title: "Contact VOwn — Discuss Your Automation, Integration, or Website Project",
    description:
      "Get in touch with the VOwn team to discuss your business automation, software integrations, or custom website requirements.",
    images: ["/brand/vown-primary-logo.png"],
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://vown.site",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Contact",
        item: "https://vown.site/contact",
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      {children}
    </>
  );
}
