"use client";

import React, { useState } from "react";
import { venturesData, VentureItem } from "@/data/ventures";
import { MotionWrap, StaggerContainer, StaggerItem } from "@/components/motion/MotionWrap";
import {
  ExternalLink,
  Check,
  Copy,
  Clock,
  Layers,
  ArrowUpRight,
  MapPin,
  Sparkles,
} from "lucide-react";
import { InstagramIcon } from "@/components/ui/Icons";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import Image from "next/image";

export function VenturesSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [copiedHandle, setCopiedHandle] = useState<string | null>(null);

  const categories = ["All", "City Initiatives", "Software Tools"];

  const filteredVentures =
    selectedCategory === "All"
      ? venturesData
      : venturesData.filter((v) => v.category === selectedCategory);

  const handleCopyHandle = (handle: string) => {
    navigator.clipboard.writeText(handle);
    setCopiedHandle(handle);
    setTimeout(() => setCopiedHandle(null), 2500);
  };

  return (
    <section id="ventures" className="py-24 sm:py-32 bg-[#F8FAFC] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <MotionWrap delay={0.1} direction="up">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#64748B] mb-3">
              <span className="w-2 h-2 rounded-full bg-[#334155]" />
              Ventures &amp; Projects
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#0F172A] leading-tight">
              Our Ventures.
            </h2>
            <p className="mt-4 text-lg text-[#64748B] leading-relaxed">
              In addition to client work, VOwn creates and supports independent digital initiatives.
              Our first regional venture is <strong className="text-[#0F172A] font-semibold">Chennai VOwn</strong>, with more city hubs and digital tools currently in development.
            </p>
          </MotionWrap>

          {/* Category Filter Tabs for Growth */}
          <div className="mt-8 flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-medium transition-all ${
                  selectedCategory === cat
                    ? "bg-[#0F172A] text-white shadow-2xs"
                    : "bg-white text-[#64748B] border border-[#E2E8F0] hover:text-[#0F172A] hover:bg-slate-50"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Ventures Grid */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8" staggerDelay={0.1}>
          {filteredVentures.map((venture) => {
            const isChennai = venture.id === "chennai-vown";

            return (
              <StaggerItem key={venture.id}>
                <div
                  className={`h-full flex flex-col justify-between p-7 sm:p-8 rounded-3xl bg-white border transition-all duration-300 ${
                    isChennai
                      ? "border-[#CBD5E1] shadow-md shadow-slate-200/60 ring-1 ring-slate-900/5"
                      : "border-[#E2E8F0] shadow-2xs hover:shadow-lg hover:border-slate-300"
                  }`}
                >
                  <div>
                    {/* Category & Status */}
                    <div className="flex items-center justify-between gap-2 mb-5">
                      <span className="text-[11px] font-mono font-medium text-[#64748B] uppercase tracking-wider px-2 py-0.5 rounded-md bg-slate-100">
                        {venture.category}
                      </span>
                      <Badge
                        variant={venture.status === "Active" ? "status" : "default"}
                        size="sm"
                        className="font-mono text-[10px]"
                      >
                        <Clock className="w-3 h-3 text-[#64748B] mr-1" />
                        {venture.status}
                      </Badge>
                    </div>

                    {/* Logo & Name */}
                    <div className="flex items-center gap-3.5 mb-4">
                      <div className="w-12 h-12 rounded-2xl bg-[#0F172A] text-white flex items-center justify-center shrink-0 shadow-2xs p-2">
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
                        <h3 className="text-xl font-bold text-[#0F172A] tracking-tight">
                          {venture.name}
                        </h3>
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
                        Overview
                      </div>
                      <ul className="space-y-1.5">
                        {venture.highlights.map((h) => (
                          <li
                            key={h}
                            className="flex items-start gap-2 text-xs text-[#475569]"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-[#334155] shrink-0 mt-1.5" />
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="mt-7 pt-5 border-t border-[#E2E8F0]">
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
                        <a
                          href="#contact?inquiry=venture"
                          className="font-medium text-[#0F172A] hover:underline inline-flex items-center gap-1"
                        >
                          <span>Inquire</span>
                          <ArrowUpRight className="w-3 h-3" />
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

        {/* Clear Notice about Venture Studio */}
        <div className="mt-12 p-6 rounded-2xl bg-white border border-[#E2E8F0] shadow-2xs flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center shrink-0">
              <Sparkles className="w-5 h-5 text-[#334155]" />
            </div>
            <div>
              <div className="text-sm font-bold text-[#0F172A]">
                Have a venture or regional idea?
              </div>
              <div className="text-xs text-[#64748B]">
                We partner with operators and creators to build dedicated digital platforms and city initiatives.
              </div>
            </div>
          </div>
          <Button href="#contact" variant="outline" size="sm">
            Contact the Team
          </Button>
        </div>

      </div>
    </section>
  );
}
