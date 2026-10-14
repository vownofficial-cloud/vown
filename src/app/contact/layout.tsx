import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us — Start a Conversation",
  description:
    "Get in touch with VOwn to discuss AI automation workflows, business integrations, website development, or venture collaborations.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
