"use client";

import React, { useState } from "react";
import { approachSteps } from "@/data/approach";
import { MotionWrap } from "@/components/motion/MotionWrap";
import { ArrowRight, CheckCircle, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

export function ApproachSection() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section id="approach" className="py-24 sm:py-32 bg-white relative border-y border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <MotionWrap delay={0.1} direction="up">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#64748B] mb-3">
              <span className="w-2 h-2 rounded-full bg-[#334155]" />
              How We Work
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#0F172A] leading-tight">
              Our Approach.
            </h2>
            <p className="mt-4 text-lg text-[#64748B] leading-relaxed">
              We focus on practical solutions, thoughtful design, and continuous improvement. From the first conversation to long-term updates, here is how we bring your project to life.
            </p>
          </MotionWrap>
        </div>

        {/* Connected Process Flow Bar */}
        <div className="mb-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
            {approachSteps.map((step, index) => {
              const isActive = activeStep === index;
              return (
                <button
                  key={step.step}
                  type="button"
                  onClick={() => setActiveStep(index)}
                  className={cn(
                    "text-left p-4 sm:p-5 rounded-2xl border transition-all duration-200 relative group cursor-pointer",
                    isActive
                      ? "bg-[#0F172A] text-white border-[#0F172A] shadow-md shadow-slate-900/10"
                      : "bg-[#F8FAFC] text-[#334155] border-[#E2E8F0] hover:border-[#CBD5E1] hover:bg-slate-100/60"
                  )}
                  aria-pressed={isActive}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span
                      className={cn(
                        "text-xs font-mono font-semibold",
                        isActive ? "text-slate-300" : "text-[#94A3B8]"
                      )}
                    >
                      {step.step}
                    </span>
                    <span
                      className={cn(
                        "text-[10px] uppercase font-mono px-2 py-0.5 rounded-full border",
                        isActive
                          ? "bg-slate-800 text-slate-200 border-slate-700"
                          : "bg-white text-[#64748B] border-[#E2E8F0]"
                      )}
                    >
                      {step.phase}
                    </span>
                  </div>
                  <div
                    className={cn(
                      "text-base sm:text-lg font-bold tracking-tight",
                      isActive ? "text-white" : "text-[#0F172A]"
                    )}
                  >
                    {step.name}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Step Detailed Showcase Panel */}
        <div className="p-8 sm:p-12 rounded-3xl bg-[#F8FAFC] border border-[#E2E8F0] shadow-sm relative overflow-hidden">
          {/* Subtle decorative background watermark */}
          <div className="absolute right-4 bottom-2 text-8xl sm:text-9xl font-extrabold text-slate-200/50 select-none pointer-events-none font-mono">
            {approachSteps[activeStep].step}
          </div>

          <div className="relative z-10 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#E2E8F0] text-xs font-mono text-[#334155] mb-4 shadow-2xs">
              <Sparkles className="w-3.5 h-3.5 text-[#334155]" />
              <span>{approachSteps[activeStep].phase}: {approachSteps[activeStep].name}</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] tracking-tight mb-4">
              {approachSteps[activeStep].summary}
            </h3>

            <p className="text-base text-[#475569] leading-relaxed mb-8">
              {approachSteps[activeStep].details}
            </p>

            {/* Deliverables */}
            <div>
              <div className="text-xs uppercase font-mono tracking-wider text-[#64748B] mb-3">
                Phase Deliverables &amp; Outcomes
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {approachSteps[activeStep].deliverables.map((item) => (
                  <div
                    key={item}
                    className="p-3.5 rounded-xl bg-white border border-[#E2E8F0] flex items-center gap-2.5 text-xs sm:text-sm font-medium text-[#0F172A] shadow-2xs"
                  >
                    <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Stepper Navigation */}
            <div className="mt-8 pt-6 border-t border-[#E2E8F0] flex items-center justify-between">
              <span className="text-xs text-[#64748B] font-mono">
                Step {activeStep + 1} of {approachSteps.length}
              </span>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  disabled={activeStep === 0}
                  onClick={() => setActiveStep((prev) => Math.max(0, prev - 1))}
                  className="px-3 py-1.5 rounded-lg border border-[#E2E8F0] bg-white text-xs font-medium text-[#334155] disabled:opacity-40 hover:bg-slate-50 transition-colors"
                >
                  Previous
                </button>
                <button
                  type="button"
                  disabled={activeStep === approachSteps.length - 1}
                  onClick={() =>
                    setActiveStep((prev) => Math.min(approachSteps.length - 1, prev + 1))
                  }
                  className="px-3 py-1.5 rounded-lg border border-[#0F172A] bg-[#0F172A] text-xs font-medium text-white disabled:opacity-40 hover:bg-slate-800 transition-colors inline-flex items-center gap-1"
                >
                  <span>Next Step</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
