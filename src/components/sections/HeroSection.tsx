"use client";

import React from "react";
import { Button } from "@/components/ui/Button";
import { HeroGraphic } from "@/components/motion/HeroGraphic";
import { ArrowUpRight, MessageSquare } from "lucide-react";
import { MotionWrap } from "@/components/motion/MotionWrap";

export function HeroSection() {
  const coreTags = [
    "AI Automation",
    "Integrations",
    "Web Development",
    "Digital Ventures",
  ];

  return (
    <section
      id="hero"
      className="relative min-h-[90vh] flex flex-col justify-center pt-28 pb-16 sm:pt-36 sm:pb-20 overflow-hidden bg-grid-subtle"
    >
      {/* Subtle atmospheric ambient glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[320px] bg-gradient-to-b from-slate-200/40 via-slate-100/20 to-transparent blur-3xl pointer-events-none -z-10 rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        {/* Top Eyebrow / Label */}
        <MotionWrap delay={0.1} direction="down" className="flex flex-col items-center text-center mb-5">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/90 border border-[#E2E8F0] shadow-2xs backdrop-blur-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-[#334155]" />
            <span className="text-xs font-semibold tracking-tight text-[#334155]">
              VOwn Studio &amp; Ventures
            </span>
          </div>
        </MotionWrap>

        {/* Main Headline & Supporting Text */}
        <div className="max-w-4xl mx-auto text-center mb-8">
          <MotionWrap delay={0.2} direction="up" distance={16}>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-[#0F172A] leading-[1.08]">
              Building What&apos;s Next.
            </h1>
          </MotionWrap>

          <MotionWrap delay={0.3} direction="up" distance={16}>
            <p className="mt-5 text-lg sm:text-xl lg:text-2xl text-[#64748B] max-w-2xl mx-auto font-normal leading-relaxed text-balance">
              We build smarter workflows, connected systems, and modern websites that help businesses move forward.
            </p>
          </MotionWrap>

          {/* Call to Actions */}
          <MotionWrap
            delay={0.4}
            direction="up"
            distance={16}
            className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3.5"
          >
            <Button
              href="#services"
              variant="primary"
              size="lg"
              icon={<ArrowUpRight className="w-4 h-4" />}
            >
              Explore Our Services
            </Button>
            <Button
              href="#contact"
              variant="secondary"
              size="lg"
              icon={<MessageSquare className="w-4 h-4 text-[#64748B]" />}
              iconPosition="left"
            >
              Let&apos;s Talk
            </Button>
          </MotionWrap>

          {/* Clean Core Tags Row: AI Automation · Integrations · Web Development · Digital Ventures */}
          <MotionWrap delay={0.45} direction="up" distance={12} className="mt-7">
            <div className="inline-flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-xs sm:text-sm font-medium text-[#475569] px-4 py-2 rounded-xl bg-white/60 border border-[#E2E8F0]/70">
              {coreTags.map((tag, idx) => (
                <React.Fragment key={tag}>
                  <span>{tag}</span>
                  {idx < coreTags.length - 1 && (
                    <span className="text-[#CBD5E1] select-none">·</span>
                  )}
                </React.Fragment>
              ))}
            </div>
          </MotionWrap>
        </div>

        {/* Lightweight Interactive Connected Systems Motion Graphic */}
        <MotionWrap delay={0.5} direction="up" distance={20} className="mt-4 sm:mt-8">
          <HeroGraphic />
        </MotionWrap>
      </div>
    </section>
  );
}
