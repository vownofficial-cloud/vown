import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Ventures — Independent Projects & Initiatives",
  description:
    "Explore VOwn's portfolio of independent digital ventures and initiatives, featuring Chennai VOwn (@chennai_vown.site) and focused software utilities.",
};

export default function VenturesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
