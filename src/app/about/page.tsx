import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About VOwn",
  description: "Meet VOwn and discover how we make technology easier.",
  alternates: { canonical: "https://vown.site/about" },
};

export default function AboutPage() {
  return <main className="min-h-screen bg-white dark:bg-[#090D16]" aria-label="About VOwn" />;
}
