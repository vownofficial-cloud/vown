import React from "react";
import type { Metadata } from "next";
import { Button } from "@/components/ui/Button";
import { CheckCircle2, ArrowUpRight, Compass, PencilRuler, Code2, RefreshCw } from "lucide-react";

export const metadata: Metadata = {
  title: "Our Approach — How We Work",
  description:
    "Learn about VOwn's four-phase methodology: Discover, Design, Build, and Improve. Practical solutions and continuous improvement.",
};

export default function ApproachPage() {
  const stages = [
    {
      step: "01",
      name: "Discover",
      phase: "Phase 1",
      tagline: "Uncovering your real bottlenecks",
      icon: Compass,
      description:
        "We begin by understanding how your business currently operates. We look at your day-to-day workflows, identify manual bottlenecks, and map the software tools your team already uses. No guesswork—only clear, agreed-upon objectives.",
      deliverables: [
        "Workflow & bottleneck audit",
        "Software ecosystem mapping",
        "Clear scope and milestone plan",
      ],
    },
    {
      step: "02",
      name: "Design",
      phase: "Phase 2",
      tagline: "Planning with clarity and precision",
      icon: PencilRuler,
      description:
        "Before writing code, we blueprint the entire solution. We map out data flows, define integration requirements, and design clean, intuitive user interfaces so every detail is clear before development starts.",
      deliverables: [
        "Clean wireframes & UI prototypes",
        "Data flows and API schemas",
        "Milestone timeline and deliverables",
      ],
    },
    {
      step: "03",
      name: "Build",
      phase: "Phase 3",
      tagline: "Engineering clean, reliable software",
      icon: Code2,
      description:
        "We write clean, modular, and performant code using modern standards (Next.js, TypeScript, Python). Every automation pipeline and web page is tested across multiple devices and edge cases for reliable performance.",
      deliverables: [
        "Production-ready Next.js / API codebase",
        "Automated integration & webhook pipelines",
        "Rigorous edge-case & mobile testing",
      ],
    },
    {
      step: "04",
      name: "Improve",
      phase: "Phase 4",
      tagline: "Launching and continuous refinement",
      icon: RefreshCw,
      description:
        "Deployment is just the beginning. We set up monitoring, help onboard your team, and continuously refine performance based on real-world use as your business moves forward.",
      deliverables: [
        "Seamless production launch & domain setup",
        "Live error & performance monitoring",
        "Ongoing support and feature iterations",
      ],
    },
  ];

  const principles = [
    {
      title: "Direct Team Communication",
      description: "You work directly with the developers and designers building your system. No account-manager telephone games.",
    },
    {
      title: "Plain English Explanations",
      description: "We explain technical trade-offs in understandable terms so you can make informed business decisions.",
    },
    {
      title: "You Own Everything",
      description: "Code, credentials, accounts, and designs belong to your company from day one. Zero vendor lock-in.",
    },
  ];

  return (
    <div className="py-20 sm:py-28 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="max-w-3xl mb-16 sm:mb-24">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-[#E2E8F0] shadow-2xs mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#334155]" />
            <span className="text-xs font-semibold tracking-tight text-[#334155]">
              How We Work
            </span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-[#0F172A] leading-tight mb-6">
            Our Approach.
          </h1>
          <p className="text-lg sm:text-xl text-[#64748B] leading-relaxed">
            We focus on practical solutions, thoughtful design, and continuous improvement. From the
            first conversation to long-term updates, here is how we bring your project to life.
          </p>
        </div>

        {/* Process Stages: Refined Horizontal on Desktop, Vertical on Mobile */}
        <div className="mb-20 sm:mb-28">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {stages.map((stage, idx) => {
              const Icon = stage.icon;
              return (
                <div
                  key={stage.step}
                  className="p-7 sm:p-8 rounded-3xl bg-white border border-[#E2E8F0] shadow-2xs flex flex-col justify-between relative hover:border-slate-300 transition-colors"
                >
                  <div>
                    {/* Top Phase Header */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-10 h-10 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] flex items-center justify-center">
                        <Icon className="w-5 h-5 text-[#0F172A]" />
                      </div>
                      <span className="text-xs font-mono font-semibold text-[#94A3B8]">
                        {stage.step}
                      </span>
                    </div>

                    <div className="text-[11px] font-mono uppercase tracking-wider text-[#64748B] mb-1">
                      {stage.phase}
                    </div>
                    <h2 className="text-2xl font-extrabold text-[#0F172A] tracking-tight mb-2">
                      {stage.name}
                    </h2>
                    <p className="text-xs font-medium text-[#334155] mb-4">
                      {stage.tagline}
                    </p>
                    <p className="text-sm text-[#475569] leading-relaxed mb-6">
                      {stage.description}
                    </p>
                  </div>

                  {/* Deliverables Checklist */}
                  <div className="pt-5 border-t border-slate-100">
                    <div className="text-[10px] font-mono uppercase tracking-wider text-[#94A3B8] mb-3">
                      Key Deliverables
                    </div>
                    <ul className="space-y-2">
                      {stage.deliverables.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-xs text-[#334155]">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Working Principles */}
        <div className="p-8 sm:p-12 rounded-3xl bg-white border border-[#E2E8F0] shadow-sm mb-16 sm:mb-24">
          <div className="max-w-2xl mb-8">
            <div className="text-xs font-mono uppercase tracking-wider text-[#64748B] mb-2">
              Working Principles
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] tracking-tight">
              What to expect when working with VOwn.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {principles.map((p) => (
              <div key={p.title} className="p-5 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0]">
                <h3 className="text-base font-bold text-[#0F172A] mb-2">{p.title}</h3>
                <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">{p.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="p-8 sm:p-12 rounded-3xl bg-[#0F172A] text-white flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="max-w-xl">
            <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight mb-2">
              Ready to start your project?
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              We begin with a discovery conversation to understand your workflow and goals. No pressure, just a clear discussion.
            </p>
          </div>
          <Button href="/contact" variant="white" size="lg" icon={<ArrowUpRight className="w-4 h-4" />}>
            Start a Conversation
          </Button>
        </div>

      </div>
    </div>
  );
}
