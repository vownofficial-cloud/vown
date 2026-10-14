import React from "react";
import type { Metadata } from "next";
import { Button } from "@/components/ui/Button";
import { ArrowUpRight, ShieldCheck, Cpu, Sparkles, HeartHandshake } from "lucide-react";
import { MotionWrap, StaggerContainer, StaggerItem } from "@/components/motion/MotionWrap";

export const metadata: Metadata = {
  title: "About VOwn — Technology Should Solve Problems, Not Create More",
  description:
    "Learn about VOwn: our mission, practical mindset, and focus on building useful digital solutions for growing businesses.",
};

export default function AboutPage() {
  const beliefs = [
    {
      icon: Cpu,
      title: "Utility Over Hype",
      description:
        "Technology should do a real job. We build automations and websites that eliminate repetitive friction and save real time, rather than chasing temporary industry buzzwords.",
    },
    {
      icon: ShieldCheck,
      title: "Reliable Craft",
      description:
        "We build systems to last. Clean code, tested data connections, and fast page loads mean your software runs smoothly without constant downtime or headaches.",
    },
    {
      icon: HeartHandshake,
      title: "Honest Communication",
      description:
        "We talk in plain English. No confusing acronyms, artificial sales pressure, or inflated claims. You always know what is being built, how it works, and what it costs.",
    },
    {
      icon: Sparkles,
      title: "Long-Term Value",
      description:
        "We measure success by whether your business operates better six months and two years down the road—not just on the day we launch.",
    },
  ];

  const focusAreas = [
    {
      title: "Automating Busywork",
      description:
        "Extracting data from forms, processing invoices, routing customer messages, and handling repetitive admin tasks so your team can focus on people.",
    },
    {
      title: "Connecting Your Tools",
      description:
        "Linking your website, CRM, billing, and communication tools into automated pipelines with zero manual re-typing.",
    },
    {
      title: "Building Clear Websites",
      description:
        "Designing fast, responsive websites with clean typography, clear business messaging, and instant load times that turn visitors into clients.",
    },
  ];

  const toolsWeTrust = [
    "Next.js & React",
    "TypeScript",
    "Tailwind CSS",
    "Python Workflows",
    "Stripe & Billing APIs",
    "CRM & Database Sync",
    "High-Speed Cloud Hosting",
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
            Technology should solve problems,
            <br />
            <span className="text-[#334155] dark:text-slate-300">not create more.</span>
          </h1>
          <p className="text-lg sm:text-xl text-[#64748B] dark:text-slate-300 leading-relaxed">
            VOwn is a technology studio focused on practical digital solutions that help growing businesses run smoother and save time.
          </p>
        </MotionWrap>

        {/* Philosophy & Mindset Statement */}
        <MotionWrap delay={0.2} direction="up" className="p-8 sm:p-14 rounded-3xl bg-white dark:bg-[#111827] border border-[#E2E8F0] dark:border-slate-800 shadow-sm mb-16 sm:mb-24">
          <div className="max-w-4xl">
            <div className="text-xs font-mono uppercase tracking-wider text-[#64748B] dark:text-slate-400 mb-4">
              Our Mindset
            </div>
            <blockquote className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#0F172A] dark:text-white tracking-tight leading-snug mb-8">
              &ldquo;Too much business software is slow, disconnected, and frustrating to use. We started VOwn to build the opposite: practical automations, clean websites, and tools that make daily work simpler.&rdquo;
            </blockquote>

            <div className="space-y-4 text-base sm:text-lg text-[#475569] dark:text-slate-300 leading-relaxed">
              <p>
                Every day, businesses lose hours copying data between different software, answering the same questions, and fighting slow websites. Technology is supposed to help you get more done, not add to your to-do list.
              </p>
              <p>
                We work closely with business owners and small teams to identify what&apos;s holding them back. Then we build focused, dependable solutions that remove the friction and keep working quietly in the background.
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
              How We Help
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] dark:text-white tracking-tight">
              Where we focus our efforts.
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

        {/* Tools We Trust */}
        <MotionWrap delay={0.15} direction="up" className="p-8 sm:p-10 rounded-3xl bg-[#0F172A] dark:bg-[#111827] text-white mb-16 sm:mb-24 border border-transparent dark:border-slate-800 shadow-xl">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div className="max-w-md">
              <div className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-1">
                Reliable Tools
              </div>
              <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
                Modern, tested technologies
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 mt-2">
                We select tools with proven track records so your systems remain stable, secure, and fast.
              </p>
            </div>

            <div className="flex flex-wrap gap-2 max-w-lg">
              {toolsWeTrust.map((tech) => (
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
