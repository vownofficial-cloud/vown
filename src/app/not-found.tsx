import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { ArrowLeft, Home, Layers, Compass, Mail } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page Not Found (404) | VOwn",
  description: "The page you are looking for does not exist or has moved. Explore VOwn services, our approach, or get in touch.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFound() {
  const quickLinks = [
    { label: "Homepage", href: "/", icon: Home, description: "Return to the main overview" },
    { label: "What We Do", href: "/services", icon: Layers, description: "Explore AI automation, integrations & web" },
    { label: "Our Approach", href: "/approach", icon: Compass, description: "Discover our 4-step building process" },
    { label: "Get in Touch", href: "/contact", icon: Mail, description: "Send our team a message" },
  ];

  return (
    <div className="min-h-[75vh] flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8 bg-[#F8FAFC] dark:bg-[#090D16] transition-colors duration-200">
      <div className="max-w-xl w-full text-center">
        {/* Status Pill */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white dark:bg-[#111827] border border-[#E2E8F0] dark:border-slate-800 shadow-2xs mb-6">
          <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
          <span className="text-xs font-mono font-semibold tracking-wider text-[#334155] dark:text-slate-300">
            ERROR 404 · PAGE NOT FOUND
          </span>
        </div>

        {/* Heading */}
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-[#0F172A] dark:text-white mb-4">
          Looking for something that isn&apos;t here?
        </h1>
        <p className="text-base text-[#475569] dark:text-slate-400 mb-8 max-w-md mx-auto leading-relaxed">
          The link you followed may be broken, out of date, or moved. Here are the most helpful places to go next:
        </p>

        {/* Quick Links Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8 text-left">
          {quickLinks.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.href}
                href={item.href}
                className="p-4 rounded-2xl bg-white dark:bg-[#111827] border border-[#E2E8F0] dark:border-slate-800 shadow-2xs hover:shadow-md hover:border-slate-300 dark:hover:border-slate-700 transition-all group flex flex-col justify-between"
              >
                <div className="flex items-center gap-2.5 mb-1.5">
                  <div className="w-7 h-7 rounded-lg bg-slate-50 dark:bg-slate-800 flex items-center justify-center text-[#334155] dark:text-slate-300 group-hover:scale-105 transition-transform">
                    <Icon className="w-3.5 h-3.5" />
                  </div>
                  <span className="font-semibold text-sm text-[#0F172A] dark:text-white group-hover:text-slate-700 dark:group-hover:text-slate-200">
                    {item.label}
                  </span>
                </div>
                <p className="text-xs text-[#64748B] dark:text-slate-400">
                  {item.description}
                </p>
              </Link>
            );
          })}
        </div>

        {/* Back to Home CTA */}
        <Link href="/">
          <Button variant="primary" size="md" className="gap-2 shadow-xs">
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Button>
        </Link>
      </div>
    </div>
  );
}
