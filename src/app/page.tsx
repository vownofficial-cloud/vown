import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { ArrowUpRight, ArrowRight, BrainCircuit, Workflow, Layout, Compass, PencilRuler, Code2, RefreshCw, Mail } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";
import { MotionWrap, StaggerContainer, StaggerItem } from "@/components/motion/MotionWrap";

export default function HomePage() {
  const coreHooks = [
    {
      action: "Automate",
      title: "Free up your time.",
      description: "Replace repetitive copying, sorting, and manual paperwork with smart workflows that run in the background.",
      icon: BrainCircuit,
      href: "/services#ai-automation",
    },
    {
      action: "Connect",
      title: "Make tools work together.",
      description: "Link your CRM, payment tools, spreadsheets, and emails so customer information is always in sync.",
      icon: Workflow,
      href: "/services#business-integrations",
    },
    {
      action: "Build",
      title: "Create a stronger web presence.",
      description: "Fast, clean websites engineered to load instantly, look sharp on mobile, and turn visitors into clients.",
      icon: Layout,
      href: "/services#website-development",
    },
  ];

  const approachSteps = [
    { step: "01", name: "Discover", icon: Compass, text: "Find where your team loses the most time." },
    { step: "02", name: "Design", icon: PencilRuler, text: "Map out a simple, clear plan that makes sense." },
    { step: "03", name: "Build", icon: Code2, text: "Engineer dependable solutions tested for real work." },
    { step: "04", name: "Improve", icon: RefreshCw, text: "Launch smoothly and refine as your business grows." },
  ];

  return (
    <div className="flex flex-col">
      {/* 1. Hero Section */}
      <section className="relative pt-24 pb-16 sm:pt-32 sm:pb-24 overflow-hidden bg-grid-subtle border-b border-[#E2E8F0] dark:border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <MotionWrap delay={0.1} direction="up" className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
            {/* Human Studio Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white dark:bg-[#111827] border border-[#E2E8F0] dark:border-slate-800 shadow-2xs mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#334155] dark:bg-slate-300" />
              <span className="text-xs font-semibold tracking-tight text-[#334155] dark:text-slate-200">
                VOwn · Technology that moves you forward
              </span>
            </div>

            {/* Main Punchy Headline */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-[#0F172A] dark:text-white leading-[1.08] mb-6">
              Less busywork.
              <br />
              <span className="text-[#334155] dark:text-slate-300">More possibilities.</span>
            </h1>

            {/* Clear, Customer-Focused Supporting Text */}
            <p className="text-lg sm:text-xl text-[#64748B] dark:text-slate-300 font-normal leading-relaxed max-w-2xl mx-auto mb-8 text-balance">
              We automate repetitive work, connect your tools, and build websites that help your business grow.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5">
              <Button href="/contact" variant="primary" size="lg" icon={<ArrowUpRight className="w-4 h-4" />}>
                Let&apos;s Build Something
              </Button>
              <Button href="/services" variant="secondary" size="lg">
                Explore Services
              </Button>
            </div>
          </MotionWrap>

          {/* Three Core Hooks: Automate / Connect / Build */}
          <MotionWrap delay={0.2} direction="up" className="max-w-5xl mx-auto mt-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {coreHooks.map((hook) => {
                const Icon = hook.icon;
                return (
                  <Link
                    key={hook.action}
                    href={hook.href}
                    className="p-7 rounded-3xl bg-white dark:bg-[#111827] border border-[#E2E8F0] dark:border-slate-800 shadow-2xs hover:shadow-md hover:border-slate-300 dark:hover:border-slate-700 transition-all group flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <div className="w-10 h-10 rounded-xl bg-[#F8FAFC] dark:bg-[#0B0F17] border border-[#E2E8F0] dark:border-slate-800 flex items-center justify-center group-hover:scale-105 transition-transform">
                          <Icon className="w-5 h-5 text-[#0F172A] dark:text-white" />
                        </div>
                        <span className="text-[11px] font-mono uppercase tracking-wider text-[#94A3B8] dark:text-slate-500 font-semibold">
                          {hook.action}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-[#0F172A] dark:text-white mb-2 tracking-tight">
                        {hook.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-[#64748B] dark:text-slate-400 leading-relaxed">
                        {hook.description}
                      </p>
                    </div>

                    <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center gap-1 text-xs font-semibold text-[#334155] dark:text-slate-300 group-hover:text-[#0F172A] dark:group-hover:text-white">
                      <span>Learn how</span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                    </div>
                  </Link>
                );
              })}
            </div>
          </MotionWrap>

        </div>
      </section>

      {/* 2. Services Overview */}
      <section className="py-20 sm:py-24 bg-[#F8FAFC] dark:bg-[#090D16] border-b border-[#E2E8F0] dark:border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <MotionWrap delay={0.1} direction="up" className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div className="max-w-2xl">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#64748B] dark:text-slate-400 mb-2">
                <span className="w-2 h-2 rounded-full bg-[#334155] dark:bg-slate-300" />
                What We Do
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#0F172A] dark:text-white">
                Practical solutions for real business needs.
              </h2>
            </div>
            <Link
              href="/services"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#0F172A] dark:text-white hover:text-[#334155] dark:hover:text-slate-300 transition-colors shrink-0 group"
            >
              <span>See All Services &amp; Examples</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </MotionWrap>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <StaggerItem>
              <div className="h-full p-8 rounded-3xl bg-white dark:bg-[#111827] border border-[#E2E8F0] dark:border-slate-800 shadow-2xs flex flex-col justify-between">
                <div>
                  <div className="text-xs font-mono font-semibold text-[#94A3B8] dark:text-slate-500 mb-3">01 / AUTOMATION</div>
                  <h3 className="text-xl font-bold text-[#0F172A] dark:text-white tracking-tight mb-2">
                    Give repetitive tasks less of your time.
                  </h3>
                  <p className="text-sm text-[#475569] dark:text-slate-300 leading-relaxed">
                    Stop manually typing data from receipts, invoices, or customer forms. We set up smart systems that read, validate, and file records accurately.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800">
                  <Link href="/services#ai-automation" className="text-xs font-semibold text-[#334155] dark:text-slate-300 hover:underline inline-flex items-center gap-1">
                    <span>See automation examples</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            </StaggerItem>

            <StaggerItem>
              <div className="h-full p-8 rounded-3xl bg-white dark:bg-[#111827] border border-[#E2E8F0] dark:border-slate-800 shadow-2xs flex flex-col justify-between">
                <div>
                  <div className="text-xs font-mono font-semibold text-[#94A3B8] dark:text-slate-500 mb-3">02 / INTEGRATIONS</div>
                  <h3 className="text-xl font-bold text-[#0F172A] dark:text-white tracking-tight mb-2">
                    Make your tools work better together.
                  </h3>
                  <p className="text-sm text-[#475569] dark:text-slate-300 leading-relaxed">
                    When someone buys on your website or signs a contract, your CRM, invoice app, and team chat should update automatically. No missed handoffs.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800">
                  <Link href="/services#business-integrations" className="text-xs font-semibold text-[#334155] dark:text-slate-300 hover:underline inline-flex items-center gap-1">
                    <span>See integration examples</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            </StaggerItem>

            <StaggerItem>
              <div className="h-full p-8 rounded-3xl bg-white dark:bg-[#111827] border border-[#E2E8F0] dark:border-slate-800 shadow-2xs flex flex-col justify-between">
                <div>
                  <div className="text-xs font-mono font-semibold text-[#94A3B8] dark:text-slate-500 mb-3">03 / WEBSITES</div>
                  <h3 className="text-xl font-bold text-[#0F172A] dark:text-white tracking-tight mb-2">
                    Turn your website into a real business asset.
                  </h3>
                  <p className="text-sm text-[#475569] dark:text-slate-300 leading-relaxed">
                    Clean layouts, clear explanations, and lightning-fast loading speeds on mobile. A website that clearly communicates your value and wins clients.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800">
                  <Link href="/services#website-development" className="text-xs font-semibold text-[#334155] dark:text-slate-300 hover:underline inline-flex items-center gap-1">
                    <span>See web examples</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            </StaggerItem>
          </StaggerContainer>

        </div>
      </section>

      {/* 3. Our Approach Spotlight */}
      <section className="py-20 sm:py-24 bg-white dark:bg-[#0B0F17] border-b border-[#E2E8F0] dark:border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <MotionWrap delay={0.1} direction="up" className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div className="max-w-2xl">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#64748B] dark:text-slate-400 mb-2">
                <span className="w-2 h-2 rounded-full bg-[#334155] dark:bg-slate-300" />
                How We Work
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#0F172A] dark:text-white">
                Clear thinking. Thoughtful building. Continuous improvement.
              </h2>
            </div>
            <Link
              href="/approach"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#0F172A] dark:text-white hover:text-[#334155] dark:hover:text-slate-300 transition-colors shrink-0 group"
            >
              <span>Read Our Full Process</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </MotionWrap>

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {approachSteps.map((step) => {
              const Icon = step.icon;
              return (
                <StaggerItem key={step.step}>
                  <div className="h-full p-6 rounded-2xl bg-[#F8FAFC] dark:bg-[#111827] border border-[#E2E8F0] dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 transition-colors">
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-9 h-9 rounded-lg bg-white dark:bg-[#0B0F17] border border-[#E2E8F0] dark:border-slate-800 flex items-center justify-center">
                        <Icon className="w-4 h-4 text-[#0F172A] dark:text-white" />
                      </div>
                      <span className="text-xs font-mono font-semibold text-[#94A3B8] dark:text-slate-500">
                        {step.step}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-[#0F172A] dark:text-white mb-1.5">
                      {step.name}
                    </h3>
                    <p className="text-xs text-[#64748B] dark:text-slate-400 leading-relaxed">
                      {step.text}
                    </p>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>

        </div>
      </section>

      {/* 4. Final Contact CTA */}
      <section className="py-20 sm:py-28 bg-[#F8FAFC] dark:bg-[#090D16]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <MotionWrap delay={0.15} direction="up" className="p-8 sm:p-14 rounded-3xl bg-[#0F172A] dark:bg-[#111827] text-white text-center max-w-4xl mx-auto border border-transparent dark:border-slate-800 shadow-xl">
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-4 text-white">
              What&apos;s slowing you down? Let&apos;s fix it.
            </h2>
            <p className="text-base sm:text-lg text-slate-300 dark:text-slate-300 max-w-xl mx-auto leading-relaxed mb-8">
              Tell us what takes up too much time or where your software feels clunky. We&apos;ll show you how to streamline it.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5">
              <Button href="/contact" variant="white" size="lg" icon={<ArrowUpRight className="w-4 h-4" />}>
                Let&apos;s Build Something
              </Button>
              <a
                href={`mailto:${siteConfig.contactEmail}`}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-slate-700 dark:border-slate-700 text-sm font-medium text-slate-300 hover:text-white hover:border-slate-500 transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span className="font-mono">{siteConfig.contactEmail}</span>
              </a>
            </div>
          </MotionWrap>
        </div>
      </section>
    </div>
  );
}
