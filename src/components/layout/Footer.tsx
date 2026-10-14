"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { siteConfig } from "@/data/siteConfig";
import { Logo } from "@/components/brand/Logo";
import { Mail, ArrowUpRight, Shield, Terminal } from "lucide-react";
import { InstagramIcon } from "@/components/ui/Icons";

export function Footer() {
  const [currentYear, setCurrentYear] = useState<number>(2026);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="bg-white border-t border-[#E2E8F0] pt-16 pb-12 text-[#64748B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12 pb-14 border-b border-[#F1F5F9]">
          
          {/* Brand Info & Statement */}
          <div className="md:col-span-5 space-y-4">
            <Logo variant="wordmark" size="md" showDomainBadge />
            <p className="text-sm text-[#475569] leading-relaxed max-w-sm">
              VOwn builds intelligent digital experiences through AI automation, seamless
              integrations, and modern web technology.
            </p>
            <div className="flex items-center gap-2 pt-2">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-50 border border-slate-200/80 text-[11px] font-mono text-[#334155]">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                vown.site
              </span>
              <span className="text-xs text-[#94A3B8]">Official Headquarters</span>
            </div>
          </div>

          {/* Nav Links Column 1: Navigation */}
          <div className="md:col-span-3 space-y-3">
            <div className="text-xs font-mono uppercase tracking-wider text-[#0F172A] font-semibold">
              Ecosystem
            </div>
            <ul className="space-y-2 text-sm">
              {siteConfig.navItems.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="hover:text-[#0F172A] transition-colors inline-block"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Nav Links Column 2: Ventures & Contact */}
          <div className="md:col-span-4 space-y-3">
            <div className="text-xs font-mono uppercase tracking-wider text-[#0F172A] font-semibold">
              Ventures &amp; Channels
            </div>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a
                  href={siteConfig.socials.instagramChennai}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[#334155] hover:text-[#0F172A] transition-colors group"
                >
                  <InstagramIcon className="w-4 h-4 text-[#64748B] group-hover:text-[#0F172A]" />
                  <span>Chennai VOwn ({siteConfig.socials.instagramChennaiHandle})</span>
                  <ArrowUpRight className="w-3 h-3 text-[#94A3B8] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.contactEmail}`}
                  className="inline-flex items-center gap-2 text-[#334155] hover:text-[#0F172A] transition-colors group"
                >
                  <Mail className="w-4 h-4 text-[#64748B] group-hover:text-[#0F172A]" />
                  <span className="font-mono">{siteConfig.contactEmail}</span>
                  <ArrowUpRight className="w-3 h-3 text-[#94A3B8] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </li>
            </ul>

            <div className="pt-3">
              <div className="p-3 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] text-xs text-[#64748B] leading-relaxed">
                Future ventures and digital products will be published directly under the{" "}
                <span className="font-mono text-[#0F172A]">vown.site</span> domain.
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Credits & Legal Row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#94A3B8]">
          <div className="flex items-center gap-3">
            <span>&copy; {currentYear} VOwn. All rights reserved.</span>
            <span>•</span>
            <span className="font-mono">vown.site</span>
          </div>

          <div className="flex items-center gap-6">
            <span className="hover:text-[#64748B] transition-colors cursor-default">
              Autonomous Systems &amp; Web Flagships
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
}
