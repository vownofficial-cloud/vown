"use client";

import React from "react";
import Link from "next/link";
import { siteConfig } from "@/data/siteConfig";
import { Logo } from "@/components/brand/Logo";
import { Mail, ArrowUpRight } from "lucide-react";

export function Footer() {
  const currentYear = 2026;

  return (
    <footer className="bg-white dark:bg-[#0B0F17] border-t border-[#E2E8F0] dark:border-slate-800/80 pt-16 pb-12 text-[#64748B] dark:text-slate-400 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12 pb-14 border-b border-[#F1F5F9] dark:border-slate-800/60">
          
          {/* Brand Info & Statement */}
          <div className="md:col-span-5 space-y-4">
            <Logo variant="wordmark" size="md" href="/" showDomainBadge />
            <p className="text-sm text-[#475569] dark:text-slate-300 leading-relaxed max-w-sm">
              Better workflows. Connected tools. Clear websites. We build useful technology to help your business run more smoothly.
            </p>
            <div className="flex items-center gap-2 pt-2">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-50 dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700 text-[11px] font-mono text-[#334155] dark:text-slate-300">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                vown.site
              </span>
              <span className="text-xs text-[#94A3B8] dark:text-slate-500">Automation · Integrations · Web</span>
            </div>
          </div>

          {/* Navigation Column */}
          <div className="md:col-span-3 space-y-3">
            <div className="text-xs font-mono uppercase tracking-wider text-[#0F172A] dark:text-white font-semibold">
              Navigation
            </div>
            <ul className="space-y-2.5 text-sm">
              {siteConfig.navItems.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="hover:text-[#0F172A] dark:hover:text-white transition-colors inline-block"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div className="md:col-span-4 space-y-3">
            <div className="text-xs font-mono uppercase tracking-wider text-[#0F172A] dark:text-white font-semibold">
              Get in Touch
            </div>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a
                  href={`mailto:${siteConfig.contactEmail}`}
                  className="inline-flex items-center gap-2 text-[#334155] dark:text-slate-300 hover:text-[#0F172A] dark:hover:text-white transition-colors group"
                >
                  <Mail className="w-4 h-4 text-[#64748B] dark:text-slate-400 group-hover:text-[#0F172A] dark:group-hover:text-white" />
                  <span className="font-mono">{siteConfig.contactEmail}</span>
                  <ArrowUpRight className="w-3 h-3 text-[#94A3B8] dark:text-slate-500 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </li>
            </ul>

            <div className="pt-3">
              <div className="p-3.5 rounded-xl bg-[#F8FAFC] dark:bg-[#111827] border border-[#E2E8F0] dark:border-slate-800 text-xs text-[#64748B] dark:text-slate-400 leading-relaxed">
                Have a project in mind? Write to{" "}
                <span className="font-mono text-[#0F172A] dark:text-white">admin@vown.site</span>. Tell us what you need and we&apos;ll take it from there.
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#94A3B8] dark:text-slate-500">
          <div className="flex items-center gap-3">
            <span>&copy; {currentYear} VOwn. All rights reserved.</span>
            <span>•</span>
            <span className="font-mono">vown.site</span>
          </div>

          <div className="flex items-center gap-4">
            <Link href="/services" className="hover:text-[#0F172A] dark:hover:text-white transition-colors">
              Services
            </Link>
            <Link href="/approach" className="hover:text-[#0F172A] dark:hover:text-white transition-colors">
              Approach
            </Link>
            <Link href="/about" className="hover:text-[#0F172A] dark:hover:text-white transition-colors">
              About
            </Link>
            <Link href="/contact" className="hover:text-[#0F172A] dark:hover:text-white transition-colors">
              Contact
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
