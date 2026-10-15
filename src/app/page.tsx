import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { ArrowUpRight, ArrowRight, BrainCircuit, Workflow, Layout, Compass, PencilRuler, Code2, RefreshCw, Mail } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";
import { MotionWrap, StaggerContainer, StaggerItem } from "@/components/motion/MotionWrap";

export const metadata: Metadata = {
  title: "VOwn",
  description:
    "Own your time back. VOwn creates smart automations, connected tools, and easy-to-use websites for growing businesses.",
  alternates: {
    canonical: "https://vown.site",
  },
  openGraph: {
    title: "VOwn | Automation, Integrations & Website Development",
    description:
      "Less copy-paste. Fewer workarounds. Discover automation, integrations, and websites that make work feel easier.",
    url: "https://vown.site",
    siteName: "VOwn",
    images: [
      {
        url: "/brand/vown-primary-logo.png",
        width: 1254,
        height: 1254,
        alt: "VOwn - Technology That Moves You Forward",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function HomePage() {
  const homeJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Core Services by VOwn",
    itemListElement: [
      {
        "@type": "Service",
        position: 1,
        name: "AI Automation",
        description: "Forms, updates, follow-ups. Let smart workflows take care of the repeatable stuff.",
        url: "https://vown.site/services#ai-automation",
        provider: {
          "@type": "Organization",
          name: "VOwn",
        },
      },
      {
        "@type": "Service",
        position: 2,
        name: "Business Software Integrations",
        description: "Bring your forms, CRM, and billing tools together. Less switching tabs, less chasing updates.",
        url: "https://vown.site/services#business-integrations",
        provider: {
          "@type": "Organization",
          name: "VOwn",
        },
      },
      {
        "@type": "Service",
        position: 3,
        name: "Website Development",
        description: "A sharp, easy-to-use website that tells your story and makes getting in touch simple.",
        url: "https://vown.site/services#website-development",
        provider: {
          "@type": "Organization",
          name: "VOwn",
        },
      },
    ],
  };
  const coreHooks = [
    {
      action: "Automate",
      title: "Put the repeat work on autopilot.",
      description: "Forms, updates, follow-ups. Let smart workflows take care of the repeatable stuff.",
      icon: BrainCircuit,
      href: "/services#ai-automation",
    },
    {
      action: "Connect",
      title: "Your tools, finally in sync.",
      description: "Bring your forms, CRM, and billing tools together. Less switching tabs, less chasing updates.",
      icon: Workflow,
      href: "/services#business-integrations",
    },
    {
      action: "Build",
      title: "Make a site people remember.",
      description: "A sharp, easy-to-use website that tells your story and makes getting in touch simple.",
      icon: Layout,
      href: "/services#website-development",
    },
  ];

  const approachSteps = [
    { step: "01", name: "Discover", icon: Compass, text: "Tell us what's working, what's not, and what you'd love to change." },
    { step: "02", name: "Design", icon: PencilRuler, text: "Turn the idea into a clear, easy-to-follow plan." },
    { step: "03", name: "Build", icon: Code2, text: "Build it, connect it, and test it with real-world tasks." },
    { step: "04", name: "Improve", icon: RefreshCw, text: "Get it out there, listen to feedback, and make it better." },
  ];

  return (
    <div className="flex flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeJsonLd) }}
      />
      {/* 1. Hero Section */}
      <section className="relative pt-32 pb-16 sm:pt-40 sm:pb-24 overflow-hidden bg-[#F8FAFC] dark:bg-[#090D16] bg-grid-subtle border-b border-[#E2E8F0] dark:border-slate-800/80 transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <MotionWrap delay={0.1} direction="up" className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
            {/* Human Studio Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white dark:bg-[#111827] border border-[#E2E8F0] dark:border-slate-800 shadow-2xs mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#334155] dark:bg-slate-300" />
              <span className="text-xs font-semibold tracking-tight text-[#334155] dark:text-slate-200">
                VOwn · Your workday, upgraded
              </span>
            </div>

            {/* Main Punchy Headline */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-[#0F172A] dark:text-white leading-[1.08] mb-6">
              Own your time back.
              <br />
              <span className="text-[#334155] dark:text-slate-300">Make room for big ideas.</span>
            </h1>

            {/* Clear, Customer-Focused Supporting Text */}
            <p className="text-lg sm:text-xl text-[#64748B] dark:text-slate-300 font-normal leading-relaxed max-w-2xl mx-auto mb-8 text-balance">
              Still copying the same details twice or jumping between apps? We make everyday work easier with smart automation, connected tools, and websites people enjoy using.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5">
              <Button href="/contact" variant="primary" size="lg" icon={<ArrowUpRight className="w-4 h-4" />}>
                Let's Make It Happen
              </Button>
              <Button href="/#what-we-do" variant="secondary" size="lg">
                See What We Do
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
                      <span>See what's possible</span>
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
      <section id="what-we-do" className="scroll-mt-20 sm:scroll-mt-24 py-20 sm:py-24 bg-[#F8FAFC] dark:bg-[#090D16] border-b border-[#E2E8F0] dark:border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <MotionWrap delay={0.1} direction="up" className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div className="max-w-2xl">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#64748B] dark:text-slate-400 mb-2">
                <span className="w-2 h-2 rounded-full bg-[#334155] dark:bg-slate-300" />
                What We Do
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#0F172A] dark:text-white">
                Small fixes. Big difference.
              </h2>
            </div>
            <Link
              href="/services"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#0F172A] dark:text-white hover:text-[#334155] dark:hover:text-slate-300 transition-colors shrink-0 group"
            >
              <span>Explore All Services</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </MotionWrap>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <StaggerItem>
              <div className="h-full p-8 rounded-3xl bg-white dark:bg-[#111827] border border-[#E2E8F0] dark:border-slate-800 shadow-2xs flex flex-col justify-between">
                <div>
                  <div className="text-xs font-mono font-semibold text-[#94A3B8] dark:text-slate-500 mb-3">01 / AUTOMATION</div>
                  <h3 className="text-xl font-bold text-[#0F172A] dark:text-white tracking-tight mb-2">
                    Leave the boring bits behind.
                  </h3>
                  <p className="text-sm text-[#475569] dark:text-slate-300 leading-relaxed">
                    Invoices, forms, follow-ups. The little tasks add up. We help automate the steps you do again and again.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800">
                  <Link href="/services#ai-automation" className="text-xs font-semibold text-[#334155] dark:text-slate-300 hover:underline inline-flex items-center gap-1">
                    <span>See automation in action</span>
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
                    Less app-hopping. More flow.
                  </h3>
                  <p className="text-sm text-[#475569] dark:text-slate-300 leading-relaxed">
                    Let your tools share updates, so your team can spend less time chasing information and more time moving forward.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800">
                  <Link href="/services#business-integrations" className="text-xs font-semibold text-[#334155] dark:text-slate-300 hover:underline inline-flex items-center gap-1">
                    <span>Explore integrations</span>
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
                    Look good. Make it easy to connect.
                  </h3>
                  <p className="text-sm text-[#475569] dark:text-slate-300 leading-relaxed">
                    Give your visitors a clear story, a smooth mobile experience, and a simple way to say hello.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800">
                  <Link href="/services#website-development" className="text-xs font-semibold text-[#334155] dark:text-slate-300 hover:underline inline-flex items-center gap-1">
                    <span>Explore website solutions</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            </StaggerItem>
          </StaggerContainer>

        </div>
      </section>

      {/* 3. Our Approach Spotlight */}
      <section id="approach" className="scroll-mt-20 sm:scroll-mt-24 py-20 sm:py-24 bg-white dark:bg-[#0B0F17] border-b border-[#E2E8F0] dark:border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <MotionWrap delay={0.1} direction="up" className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div className="max-w-2xl">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#64748B] dark:text-slate-400 mb-2">
                <span className="w-2 h-2 rounded-full bg-[#334155] dark:bg-slate-300" />
                Our Approach
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#0F172A] dark:text-white">
                No complicated process. Just progress.
              </h2>
            </div>
            <Link
              href="/approach"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#0F172A] dark:text-white hover:text-[#334155] dark:hover:text-slate-300 transition-colors shrink-0 group"
            >
              <span>See How We Work</span>
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
              There's a better way. Let's find it.
            </h2>
            <p className="text-base sm:text-lg text-slate-300 dark:text-slate-300 max-w-xl mx-auto leading-relaxed mb-8">
              Got a task that takes forever or an idea you're excited about? Tell us. We'll help you explore the next step.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5">
              <Button href="/contact" variant="white" size="lg" icon={<ArrowUpRight className="w-4 h-4" />}>
                Let's Make It Happen
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
