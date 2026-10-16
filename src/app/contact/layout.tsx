import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Contact | VOwn",
  description:
    "Tell us about a website, a task you want to automate, or a question about a VOwn product.",
  alternates: { canonical: "/contact" },
};
export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
