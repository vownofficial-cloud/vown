import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { ArrowUpRight, ArrowRight, BrainCircuit, Workflow, Layout, Compass, PencilRuler, Code2, RefreshCw, Mail } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";
import { MotionWrap, StaggerContainer, StaggerItem } from "@/components/motion/MotionWrap";

export default function HomePage() {
  const servicePreviews = [
    {
      id: "ai-automation",
      number: "01",
      title: "AI Automation",
      description: "Build smarter workflows that reduce repetitive work and help businesses operate efficiently.",
      icon: BrainCircuit,
    },
    {
      id: "business-integrations",
      number: "02",
      title: "Business Integrations",
      description: "Connect tools, services, and systems to create seamless digital workflows.",
      icon: Workflow,
    },
    {
      id: "website-development",
      number: "03",
      title: "Website Development",
      description: "Create fast, responsive, modern websites designed around business goals.",
      icon: Layout,
    },
  ];

  const approachSteps = [
    { step: "01", name: "Discover", icon: Compass, text: "Audit bottlenecks & workflows" },
    { step: "02", name: "Design", icon: PencilRuler, text: "Blueprint plain-English plans" },
    { step: "03", name: "Build", icon: Code2, text: "Engineer modular, tested code" },
    { step: "04", name: "Improve", icon: RefreshCw, text: "Continuous telemetry & scale" },
  ];

  return (
    <div className="flex flex-col">
      {/* 1. Hero Section */}
      <section className="relative pt-24 pb-20 sm:pt-32 sm:pb-28 overflow-hidden bg-grid-subtle border-b border-[#E2E8F0] dark:border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <MotionWrap delay={0.1} direction="up" className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
            {/* Studio Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white dark:bg-[#111827] border border-[#E2E8F0] dark:border-slate-800 shadow-2xs mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#334155] dark:bg-slate-300" />
              <span className="text-xs font-semibold tracking-tight text-[#334155] dark:text-slate-200">
                VOwn Technology Studio
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-[#0F172A] dark:text-white leading-[1.08] mb-6">
              Building What&apos;s Next.
            </h1>

            {/* Supporting Text */}
            <p className="text-lg sm:text-xl text-[#64748B] dark:text-slate-300 font-normal leading-relaxed text-balance max-w-2xl mx-auto mb-8">
              We build smarter workflows, connected systems, and modern websites that help businesses move forward.
            </p>

            {/* Two Clear Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5">
              <Button href="/services" variant="primary" size="lg" icon={<ArrowUpRight className="w-4 h-4" />}>
                Explore Our Services
              </Button>
              <Button href="/contact" variant="secondary" size="lg">
                Start a Conversation
              </Button>
            </div>

            {/* Clean Core Tags */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-2 text-xs sm:text-sm text-[#475569] dark:text-slate-400">
              <span className="px-3 py-1 rounded-lg bg-white dark:bg-[#111827] border border-[#E2E8F0] dark:border-slate-800 shadow-2xs">
                AI Automation
              </span>
              <span className="text-slate-300 dark:text-slate-700">·</span>
              <span className="px-3 py-1 rounded-lg bg-white dark:bg-[#111827] border border-[#E2E8F0] dark:border-slate-800 shadow-2xs">
                Integrations
              </span>
              <span className="text-slate-300 dark:text-slate-700">·</span>
              <span className="px-3 py-1 rounded-lg bg-white dark:bg-[#111827] border border-[#E2E8F0] dark:border-slate-800 shadow-2xs">
                Web Development
              </span>
            </div>
          </MotionWrap>

          {/* Tasteful Visual Element: Studio Architectural Composition */}
          <MotionWrap delay={0.25} direction="up" className="max-w-4xl mx-auto">
            <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#111827] border border-[#E2E8F0] dark:border-slate-800 shadow-sm transition-colors duration-200">
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-[#F1F5F9] dark:border-slate-800/80 text-xs text-[#64748B] dark:text-slate-400">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-slate-300 dark:bg-slate-700" />
                  <span className="w-2 h-2 rounded-full bg-slate-300 dark:bg-slate-700" />
                  <span className="w-2 h-2 rounded-full bg-slate-300 dark:bg-slate-700" />
                  <span className="ml-2 font-mono text-[11px] text-[#334155] dark:text-slate-300">
                    vown.site // Architecture
                  </span>
                </div>
                <div className="font-mono text-[11px] text-[#94A3B8] dark:text-slate-500">
                  Creative Engineering
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-left">
                <div className="p-4 rounded-2xl bg-[#F8FAFC] dark:bg-[#0B0F17] border border-[#E2E8F0] dark:border-slate-800">
                  <div className="text-xs font-mono text-[#94A3B8] dark:text-slate-500 mb-1">
                    01 / Automation
                  </div>
                  <div className="text-sm font-bold text-[#0F172A] dark:text-white mb-1">
                    Smart Workflows
                  </div>
                  <div className="text-xs text-[#64748B] dark:text-slate-400 leading-relaxed">
                    Custom pipelines that eliminate repetitive manual steps.
                  </div>
                </div>
                <div className="p-4 rounded-2xl bg-[#F8FAFC] dark:bg-[#0B0F17] border border-[#E2E8F0] dark:border-slate-800">
                  <div className="text-xs font-mono text-[#94A3B8] dark:text-slate-500 mb-1">
                    02 / Integrations
                  </div>
                  <div className="text-sm font-bold text-[#0F172A] dark:text-white mb-1">
                    Connected Systems
                  </div>
                  <div className="text-xs text-[#64748B] dark:text-slate-400 leading-relaxed">
                    Linking apps, software, and databases in real time.
                  </div>
                </div>
                <div className="p-4 rounded-2xl bg-[#F8FAFC] dark:bg-[#0B0F17] border border-[#E2E8F0] dark:border-slate-800">
                  <div className="text-xs font-mono text-[#94A3B8] dark:text-slate-500 mb-1">
                    03 / Web Platforms
                  </div>
                  <div className="text-sm font-bold text-[#0F172A] dark:text-white mb-1">
                    Modern Websites
                  </div>
                  <div className="text-xs text-[#64748B] dark:text-slate-400 leading-relaxed">
                    Fast, responsive digital presences built to convert.
                  </div>
                </div>
              </div>
            </div>
          </MotionWrap>

        </div>
      </section>

      {/* 2. Services Preview */}
      <section className="py-20 sm:py-28 bg-[#F8FAFC] dark:bg-[#090D16] border-b border-[#E2E8F0] dark:border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <MotionWrap delay={0.1} direction="up" className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
            <div className="max-w-2xl">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#64748B] dark:text-slate-400 mb-2">
                <span className="w-2 h-2 rounded-full bg-[#334155] dark:bg-slate-300" />
                What We Do
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#0F172A] dark:text-white">
                Disciplined technology for real business needs.
              </h2>
            </div>
            <Link
              href="/services"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#0F172A] dark:text-white hover:text-[#334155] dark:hover:text-slate-300 transition-colors shrink-0 group"
            >
              <span>View All Services</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </MotionWrap>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {servicePreviews.map((service) => {
              const Icon = service.icon;
              return (
                <StaggerItem key={service.id}>
                  <div className="h-full p-7 sm:p-8 rounded-3xl bg-white dark:bg-[#111827] border border-[#E2E8F0] dark:border-slate-800 shadow-2xs hover:shadow-md hover:border-slate-300 dark:hover:border-slate-700 transition-all duration-200 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-5">
                        <div className="w-11 h-11 rounded-xl bg-[#F8FAFC] dark:bg-[#0B0F17] border border-[#E2E8F0] dark:border-slate-800 flex items-center justify-center">
                          <Icon className="w-5 h-5 text-[#0F172A] dark:text-white" />
                        </div>
                        <span className="font-mono text-xs font-semibold text-[#94A3B8] dark:text-slate-500">
                          {service.number}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-[#0F172A] dark:text-white tracking-tight mb-2">
                        {service.title}
                      </h3>
                      <p className="text-sm text-[#475569] dark:text-slate-300 leading-relaxed">
                        {service.description}
                      </p>
                    </div>

                    <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800">
                      <Link
                        href={`/services#${service.id}`}
                        className="text-xs font-semibold text-[#334155] dark:text-slate-300 hover:text-[#0F172A] dark:hover:text-white inline-flex items-center gap-1"
                      >
                        <span>Explore details</span>
                        <ArrowUpRight className="w-3 h-3" />
                      </Link>
                    </div>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>

        </div>
      </section>

      {/* 3. Our Approach Spotlight */}
      <section className="py-20 sm:py-28 bg-white dark:bg-[#0B0F17] border-b border-[#E2E8F0] dark:border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <MotionWrap delay={0.1} direction="up" className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
            <div className="max-w-2xl">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#64748B] dark:text-slate-400 mb-2">
                <span className="w-2 h-2 rounded-full bg-[#334155] dark:bg-slate-300" />
                How We Work
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#0F172A] dark:text-white">
                Our Four-Stage Methodology.
              </h2>
            </div>
            <Link
              href="/approach"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#0F172A] dark:text-white hover:text-[#334155] dark:hover:text-slate-300 transition-colors shrink-0 group"
            >
              <span>Explore Approach Details</span>
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
                    <h3 className="text-lg font-bold text-[#0F172A] dark:text-white mb-1">
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
              Have an idea? Let&apos;s build it.
            </h2>
            <p className="text-base sm:text-lg text-slate-300 dark:text-slate-300 max-w-xl mx-auto leading-relaxed mb-8">
              Tell us what you&apos;re working on and explore how VOwn can help through automation, integrations, or modern web engineering.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5">
              <Button href="/contact" variant="white" size="lg" icon={<ArrowUpRight className="w-4 h-4" />}>
                Start a Conversation
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
