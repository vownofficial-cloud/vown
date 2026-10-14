"use client";

import React from "react";
import { MotionWrap } from "@/components/motion/MotionWrap";
import { ShieldCheck, Cpu, Sparkles, CheckCircle2 } from "lucide-react";

export function AboutSection() {
  const pillars = [
    {
      icon: Cpu,
      title: "Practical AI Solutions",
      description:
        "We implement AI automation where it solves real operational bottlenecks, saving hours of manual work rather than chasing temporary hype.",
    },
    {
      icon: ShieldCheck,
      title: "Reliable Systems",
      description:
        "Every integration, automation, and website is built with clean, reliable architecture so your tools run smoothly without constant maintenance.",
    },
    {
      icon: Sparkles,
      title: "Built for the Long Term",
      description:
        "Whether crafting client solutions or developing our own projects like Chennai VOwn, we focus on genuine usefulness and thoughtful craftsmanship.",
    },
  ];

  const techStack = [
    "Next.js & React",
    "TypeScript",
    "Tailwind CSS",
    "Python AI Engines",
    "API Integrations",
    "Automated Workflows",
    "Cloud Services",
    "Database Sync",
  ];

  return (
    <section id="about" className="py-24 sm:py-32 bg-white relative border-b border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14 sm:mb-16">
          <MotionWrap delay={0.1} direction="up">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#64748B] mb-3">
              <span className="w-2 h-2 rounded-full bg-[#334155]" />
              Who We Are
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#0F172A] leading-tight">
              About VOwn.
            </h2>
          </MotionWrap>
        </div>

        {/* Studio Core Statement */}
        <div className="max-w-4xl mb-16 sm:mb-20">
          <MotionWrap delay={0.2} direction="up">
            <blockquote className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#0F172A] tracking-tight leading-snug">
              &ldquo;VOwn is building a connected digital ecosystem through technology, automation,
              and creative ideas. We focus on useful solutions that help businesses and digital
              ventures grow.&rdquo;
            </blockquote>
            <p className="mt-6 text-base sm:text-lg text-[#64748B] leading-relaxed">
              We focus on useful technology that saves time and helps businesses move forward.
              Our goal is to eliminate repetitive manual tasks with smart automation, while
              incubating digital platforms that serve communities and future ventures.
            </p>
          </MotionWrap>
        </div>

        {/* 3 Core Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {pillars.map((pillar, i) => {
            const Icon = pillar.icon;
            return (
              <MotionWrap key={pillar.title} delay={0.15 * (i + 1)} direction="up">
                <div className="p-7 rounded-3xl bg-[#F8FAFC] border border-[#E2E8F0] h-full flex flex-col justify-between">
                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-white border border-[#E2E8F0] flex items-center justify-center mb-5 shadow-2xs">
                      <Icon className="w-6 h-6 text-[#334155]" />
                    </div>
                    <h3 className="text-xl font-bold text-[#0F172A] mb-3 tracking-tight">
                      {pillar.title}
                    </h3>
                    <p className="text-sm text-[#64748B] leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              </MotionWrap>
            );
          })}
        </div>

        {/* Technology Foundation Bar */}
        <div className="p-8 rounded-3xl bg-slate-900 text-white relative overflow-hidden">
          <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div>
              <div className="text-xs font-mono uppercase tracking-widest text-slate-400 mb-1">
                Technology Foundation
              </div>
              <div className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                Built on Modern, Reliable Standards
              </div>
            </div>

            {/* Tech Badges */}
            <div className="flex flex-wrap gap-2">
              {techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-lg bg-slate-800 text-slate-200 border border-slate-700/80 text-xs font-mono"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
