import React from "react";
import type { Metadata } from "next";
import { Button } from "@/components/ui/Button";
import { ArrowUpRight, ShieldCheck, Cpu, Sparkles, HeartHandshake } from "lucide-react";
import { MotionWrap, StaggerContainer, StaggerItem } from "@/components/motion/MotionWrap";

export const metadata: Metadata = {
  title: "About VOwn — Story, Philosophy & Technology Standards",
  description:
    "Learn about VOwn: our mission to build useful automation, reliable integrations, and quality websites for growing businesses.",
};

export default function AboutPage() {
  const beliefs = [
    {
      icon: Cpu,
      title: "Utility Over Hype",
      description:
        "We believe technology should do a real job. We implement automation where it eliminates repetitive friction and saves hours of manual work, rather than chasing temporary industry buzzwords.",
    },
    {
      icon: ShieldCheck,
      title: "Reliable Craft",
      description:
        "We build systems to last. Clean TypeScript code, resilient API error handling, and fast page loads mean your software runs smoothly without constant downtime or technical debt.",
    },
    {
      icon: HeartHandshake,
      title: "Honest Communication",
      description:
        "We speak in plain English. No confusing acronyms, artificial sales pressure, or exaggerated promises. You always know what is being built, how it works, and what it costs.",
    },
    {
      icon: Sparkles,
      title: "Continuous Craft",
      description:
        "Beyond immediate project requirements, we constantly test emerging technologies and refine our tooling. We believe continuous learning leads to better, faster, and more dependable solutions for every client.",
    },
  ];

  const focusAreas = [
    {
      title: "Useful Automation",
      description:
        "Automating invoice processing, data extraction, customer inquiry triage, and internal reporting so teams can focus on high-value human work.",
    },
    {
      title: "Reliable Integrations",
      description:
        "Connecting disparate CRMs, billing systems, communication tools, and databases into automated real-time pipelines with zero manual re-entry.",
    },
    {
      title: "Quality Websites",
      description:
        "Engineering fast, mobile-first websites with clean typography, clear business messaging, and sub-second load times that turn visitors into clients.",
    },
  ];

  const techStack = [
    "Next.js & React",
    "TypeScript",
    "Tailwind CSS",
    "Python AI Workflows",
    "Cloud APIs & Webhooks",
    "Database Synchronization",
    "Core Web Vitals Optimization",
    "Secure Deployment",
  ];

  return (
    <div className="py-20 sm:py-28 bg-[#F8FAFC] dark:bg-[#090D16] transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <MotionWrap delay={0.1} direction="up" className="max-w-3xl mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white dark:bg-[#111827] border border-[#E2E8F0] dark:border-slate-800 shadow-2xs mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#334155] dark:bg-slate-300" />
            <span className="text-xs font-semibold tracking-tight text-[#334155] dark:text-slate-200">
              Who We Are
            </span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-[#0F172A] dark:text-white leading-tight mb-6">
            About VOwn.
          </h1>
          <p className="text-lg sm:text-xl text-[#64748B] dark:text-slate-300 leading-relaxed">
            A technology studio focused on practical software, thoughtful engineering, and enduring client partnerships.
          </p>
        </MotionWrap>

        {/* Story & Mission Statement */}
        <MotionWrap delay={0.2} direction="up" className="p-8 sm:p-14 rounded-3xl bg-white dark:bg-[#111827] border border-[#E2E8F0] dark:border-slate-800 shadow-sm mb-16 sm:mb-24">
          <div className="max-w-4xl">
            <div className="text-xs font-mono uppercase tracking-wider text-[#64748B] dark:text-slate-400 mb-4">
              Our Mission
            </div>
            <blockquote className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#0F172A] dark:text-white tracking-tight leading-snug mb-8">
              &ldquo;VOwn builds connected digital ecosystems through technology, automation,
              and thoughtful design. We focus on useful solutions that help growing businesses operate with confidence.&rdquo;
            </blockquote>

            <div className="space-y-4 text-base sm:text-lg text-[#475569] dark:text-slate-300 leading-relaxed">
              <p>
                Modern businesses frequently lose hundreds of hours every month to disconnected software, repetitive data entry, and slow, outdated websites. We founded VOwn to solve these exact frustrations with thoughtful design and reliable engineering.
              </p>
              <p>
                We operate as a focused technology studio. When working with clients, we build practical automation workflows, connect backend tools, and engineer modern web flagships designed for longevity and real business impact.
              </p>
            </div>
          </div>
        </MotionWrap>

        {/* What We Believe In */}
        <div className="mb-16 sm:mb-24">
          <MotionWrap delay={0.1} direction="up" className="max-w-2xl mb-12">
            <div className="text-xs font-mono uppercase tracking-wider text-[#64748B] dark:text-slate-400 mb-2">
              Studio Values
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] dark:text-white tracking-tight">
              What we believe in.
            </h2>
          </MotionWrap>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {beliefs.map((b) => {
              const Icon = b.icon;
              return (
                <StaggerItem key={b.title}>
                  <div className="h-full p-8 rounded-3xl bg-white dark:bg-[#111827] border border-[#E2E8F0] dark:border-slate-800 shadow-2xs hover:shadow-md dark:hover:border-slate-700 transition-all">
                    <div className="w-12 h-12 rounded-2xl bg-[#F8FAFC] dark:bg-[#0B0F17] border border-[#E2E8F0] dark:border-slate-800 flex items-center justify-center mb-6">
                      <Icon className="w-6 h-6 text-[#0F172A] dark:text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-[#0F172A] dark:text-white mb-3 tracking-tight">
                      {b.title}
                    </h3>
                    <p className="text-sm sm:text-base text-[#64748B] dark:text-slate-400 leading-relaxed">
                      {b.description}
                    </p>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>

        {/* Core Focus Areas */}
        <MotionWrap delay={0.1} direction="up" className="p-8 sm:p-12 rounded-3xl bg-white dark:bg-[#111827] border border-[#E2E8F0] dark:border-slate-800 shadow-sm mb-16 sm:mb-24">
          <div className="max-w-2xl mb-10">
            <div className="text-xs font-mono uppercase tracking-wider text-[#64748B] dark:text-slate-400 mb-2">
              What We Do Best
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] dark:text-white tracking-tight">
              How VOwn approaches technology.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {focusAreas.map((f) => (
              <div key={f.title} className="p-6 rounded-2xl bg-[#F8FAFC] dark:bg-[#0B0F17] border border-[#E2E8F0] dark:border-slate-800">
                <h3 className="text-lg font-bold text-[#0F172A] dark:text-white mb-2">{f.title}</h3>
                <p className="text-xs sm:text-sm text-[#64748B] dark:text-slate-400 leading-relaxed">{f.description}</p>
              </div>
            ))}
          </div>
        </MotionWrap>

        {/* Technology Foundation */}
        <MotionWrap delay={0.15} direction="up" className="p-8 sm:p-10 rounded-3xl bg-[#0F172A] dark:bg-[#111827] text-white mb-16 sm:mb-24 border border-transparent dark:border-slate-800 shadow-xl">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div className="max-w-md">
              <div className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-1">
                Engineering Stack
              </div>
              <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
                Modern, reliable technologies
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 mt-2">
                We select tested, established frameworks that offer long-term stability and fast performance.
              </p>
            </div>

            <div className="flex flex-wrap gap-2 max-w-lg">
              {techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 rounded-xl bg-slate-800 text-slate-200 border border-slate-700 text-xs font-mono"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </MotionWrap>

        {/* Bottom CTA */}
        <MotionWrap delay={0.2} direction="up" className="p-8 sm:p-12 rounded-3xl bg-white dark:bg-[#111827] border border-[#E2E8F0] dark:border-slate-800 shadow-2xs text-center max-w-3xl mx-auto">
          <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] dark:text-white tracking-tight mb-3">
            Interested in working together?
          </h3>
          <p className="text-sm text-[#64748B] dark:text-slate-400 mb-6 max-w-lg mx-auto">
            We welcome conversations with businesses looking to automate tasks, connect software, or launch a new website.
          </p>
          <div className="flex items-center justify-center gap-3">
            <Button href="/contact" variant="primary" size="lg" icon={<ArrowUpRight className="w-4 h-4" />}>
              Get in Touch
            </Button>
          </div>
        </MotionWrap>

      </div>
    </div>
  );
}
