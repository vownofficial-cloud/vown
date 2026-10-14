"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { venturesData } from "@/data/ventures";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { InstagramIcon } from "@/components/ui/Icons";
import { Clock, Copy, Check, ArrowUpRight, Sparkles, Layers, MapPin } from "lucide-react";

export default function VenturesPage() {
  const [copiedHandle, setCopiedHandle] = useState<string | null>(null);

  const handleCopyHandle = (handle: string) => {
    navigator.clipboard.writeText(handle);
    setCopiedHandle(handle);
    setTimeout(() => setCopiedHandle(null), 2500);
  };

  return (
    <div className="py-20 sm:py-28 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="max-w-3xl mb-16 sm:mb-24">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-[#E2E8F0] shadow-2xs mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#334155]" />
            <span className="text-xs font-semibold tracking-tight text-[#334155]">
              Portfolio &amp; Incubation
            </span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-[#0F172A] leading-tight mb-6">
            Our Ventures.
          </h1>
          <p className="text-lg sm:text-xl text-[#64748B] leading-relaxed">
            In addition to client work, VOwn creates and supports independent digital initiatives.
            Our flagship regional venture is <strong className="text-[#0F172A] font-semibold">Chennai VOwn</strong>, alongside focused software experiments currently in development.
          </p>
        </div>

        {/* Ventures Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-16 sm:mb-24">
          {venturesData.map((venture) => {
            const isChennai = venture.id === "chennai-vown";

            return (
              <div
                key={venture.id}
                className={`h-full flex flex-col justify-between p-8 rounded-3xl bg-white border transition-all duration-200 ${
                  isChennai
                    ? "border-[#CBD5E1] shadow-md shadow-slate-200/60 ring-1 ring-slate-900/5"
                    : "border-[#E2E8F0] shadow-2xs hover:shadow-md hover:border-slate-300"
                }`}
              >
                <div>
                  {/* Category & Status Row */}
                  <div className="flex items-center justify-between gap-2 mb-6">
                    <span className="text-[11px] font-mono font-medium text-[#64748B] uppercase tracking-wider px-2 py-0.5 rounded-md bg-slate-100">
                      {venture.category}
                    </span>
                    <Badge variant="default" size="sm" className="font-mono text-[10px]">
                      <Clock className="w-3 h-3 text-[#64748B] mr-1" />
                      {venture.status}
                    </Badge>
                  </div>

                  {/* Venture Identity */}
                  <div className="flex items-center gap-3.5 mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-[#0F172A] text-white flex items-center justify-center shrink-0 p-2 shadow-2xs">
                      {isChennai ? (
                        <div className="relative w-full h-full flex items-center justify-center">
                          <Image
                            src="/brand/vown-primary-logo.png"
                            alt="Chennai VOwn"
                            width={32}
                            height={32}
                            className="object-contain brightness-0 invert"
                          />
                        </div>
                      ) : (
                        <Layers className="w-5 h-5 text-slate-300" />
                      )}
                    </div>
                    <div>
                      <h2 className="text-xl font-bold text-[#0F172A] tracking-tight">
                        {venture.name}
                      </h2>
                      {venture.handle && (
                        <button
                          type="button"
                          onClick={() => handleCopyHandle(venture.handle!)}
                          className="inline-flex items-center gap-1.5 text-xs font-mono text-[#64748B] hover:text-[#0F172A] transition-colors mt-0.5"
                          title="Click to copy handle"
                        >
                          <InstagramIcon className="w-3 h-3 text-[#64748B]" />
                          <span>{venture.handle}</span>
                          {copiedHandle === venture.handle ? (
                            <Check className="w-3 h-3 text-emerald-600" />
                          ) : (
                            <Copy className="w-3 h-3 text-slate-400" />
                          )}
                        </button>
                      )}
                    </div>
                  </div>

                  {/* Tagline & Description */}
                  <p className="text-xs font-medium text-[#334155] mb-2.5">
                    {venture.tagline}
                  </p>
                  <p className="text-sm text-[#475569] leading-relaxed mb-6">
                    {venture.description}
                  </p>

                  {/* Highlights */}
                  <div className="pt-4 border-t border-slate-100">
                    <div className="text-[10px] font-mono uppercase tracking-wider text-[#94A3B8] mb-2.5">
                      Focus Areas
                    </div>
                    <ul className="space-y-1.5">
                      {venture.highlights.map((h) => (
                        <li key={h} className="flex items-start gap-2 text-xs text-[#475569]">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#334155] shrink-0 mt-1.5" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Card Action */}
                <div className="mt-8 pt-5 border-t border-[#E2E8F0]">
                  {venture.externalLink && venture.externalLink.isLive ? (
                    <div className="flex flex-wrap items-center gap-2">
                      <Button
                        href={venture.externalLink.url}
                        isExternal
                        variant="primary"
                        size="sm"
                        icon={<InstagramIcon className="w-3.5 h-3.5" />}
                        iconPosition="left"
                      >
                        {venture.externalLink.label}
                      </Button>
                      <button
                        type="button"
                        onClick={() => handleCopyHandle(venture.handle || "@chennai_vown.site")}
                        className="px-2.5 py-1.5 rounded-lg border border-[#E2E8F0] text-xs font-mono text-[#475569] hover:bg-slate-50 transition-colors"
                      >
                        {copiedHandle ? "Copied!" : "Copy Handle"}
                      </button>
                    </div>
                  ) : (
                    <div className="flex items-center justify-between text-xs text-[#64748B]">
                      <span className="font-mono">In Development</span>
                      <Link
                        href="/contact"
                        className="font-medium text-[#0F172A] hover:underline inline-flex items-center gap-1"
                      >
                        <span>Collaborate</span>
                        <ArrowUpRight className="w-3 h-3" />
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* How We Incubate Ventures */}
        <div className="p-8 sm:p-12 rounded-3xl bg-white border border-[#E2E8F0] shadow-sm mb-16 sm:mb-24">
          <div className="max-w-2xl mb-8">
            <div className="text-xs font-mono uppercase tracking-wider text-[#64748B] mb-2">
              Studio Model
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] tracking-tight mb-3">
              How VOwn approaches independent projects.
            </h2>
            <p className="text-sm sm:text-base text-[#64748B] leading-relaxed">
              We build ventures when we identify genuine local community needs or workflow bottlenecks that standard commercial tools ignore. Every project is funded, built, and operated directly by our team.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-5 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0]">
              <h3 className="text-sm font-bold text-[#0F172A] mb-1">Community First</h3>
              <p className="text-xs text-[#64748B] leading-relaxed">
                Starting with Chennai VOwn, our city projects focus on verified local utility and community storytelling rather than clickbait.
              </p>
            </div>
            <div className="p-5 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0]">
              <h3 className="text-sm font-bold text-[#0F172A] mb-1">Focused Utilities</h3>
              <p className="text-xs text-[#64748B] leading-relaxed">
                Our software tools are built to do one job well without bloated features or unnecessary subscription traps.
              </p>
            </div>
            <div className="p-5 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0]">
              <h3 className="text-sm font-bold text-[#0F172A] mb-1">Honest Milestones</h3>
              <p className="text-xs text-[#64748B] leading-relaxed">
                We announce projects as they reach concrete milestones. No exaggerated user counts or premature launch claims.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="p-8 sm:p-12 rounded-3xl bg-[#0F172A] text-white flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="max-w-xl">
            <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight mb-2">
              Have a venture or regional idea?
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              We partner with local creators, community organizers, and operators to launch high-utility digital ventures.
            </p>
          </div>
          <Button href="/contact" variant="white" size="lg" icon={<ArrowUpRight className="w-4 h-4" />}>
            Contact the Team
          </Button>
        </div>

      </div>
    </div>
  );
}
