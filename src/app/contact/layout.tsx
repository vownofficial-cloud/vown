import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact — What's Slowing You Down? Let's Fix It",
  description:
    "Tell us about a workflow bottleneck, tools you want to connect, or a website project. We read every inquiry directly and reply with practical advice.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
