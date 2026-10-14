import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { ArrowUpRight, ArrowRight, BrainCircuit, Workflow, Layout, Sparkles, MapPin, Mail } from "lucide-react";
import { InstagramIcon } from "@/components/ui/Icons";
import { siteConfig } from "@/data/siteConfig";
import Image from "next/image";

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

  return (
    <div className="flex flex-col">
      {/* 1. Hero Section */}
      <section className="relative pt-24 pb-20 sm:pt-32 sm:pb-28 overflow-hidden bg-grid-subtle border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
            {/* Studio Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-[#E2E8F0] shadow-2xs mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#334155]" />
              <span className="text-xs font-semibold tracking-tight text-[#334155]">
                VOwn Studio &amp; Ventures
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-[#0F172A] leading-[1.08] mb-6">
              Building What&apos;s Next.
            </h1>

            {/* Supporting Text */}
            <p className="text-lg sm:text-xl text-[#64748B] font-normal leading-relaxed text-balance max-w-2xl mx-auto mb-8">
              VOwn builds intelligent digital experiences through AI automation, seamless integrations, and modern web technology.
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
          </div>

          {/* Tasteful Visual Element: Calm Studio Composition */}
          <div className="max-w-4xl mx-auto">
            <div className="p-6 sm:p-8 rounded-3xl bg-white border border-[#E2E8F0] shadow-sm">
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-[#F1F5F9] text-xs text-[#64748B]">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-slate-300" />
                  <span className="w-2 h-2 rounded-full bg-slate-300" />
                  <span className="w-2 h-2 rounded-full bg-slate-300" />
                  <span className="ml-2 font-mono text-[11px] text-[#334155]">vown.site // Digital Focus</span>
                </div>
                <div className="font-mono text-[11px] text-[#94A3B8]">Creative Engineering</div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-left">
                <div className="p-4 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0]">
                  <div className="text-xs font-mono text-[#94A3B8] mb-1">01 / Automation</div>
                  <div className="text-sm font-bold text-[#0F172A] mb-1">Smart Workflows</div>
                  <div className="text-xs text-[#64748B] leading-relaxed">
                    Custom pipelines that eliminate repetitive manual steps.
                  </div>
                </div>
                <div className="p-4 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0]">
                  <div className="text-xs font-mono text-[#94A3B8] mb-1">02 / Integrations</div>
                  <div className="text-sm font-bold text-[#0F172A] mb-1">Connected Systems</div>
                  <div className="text-xs text-[#64748B] leading-relaxed">
                    Linking apps, software, and databases in real time.
                  </div>
                </div>
                <div className="p-4 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0]">
                  <div className="text-xs font-mono text-[#94A3B8] mb-1">03 / Web Platforms</div>
                  <div className="text-sm font-bold text-[#0F172A] mb-1">Modern Websites</div>
                  <div className="text-xs text-[#64748B] leading-relaxed">
                    Fast, responsive digital presences built to convert.
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 2. Services Preview */}
      <section className="py-20 sm:py-28 bg-[#F8FAFC] border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
            <div className="max-w-2xl">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#64748B] mb-2">
                <span className="w-2 h-2 rounded-full bg-[#334155]" />
                What We Do
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#0F172A]">
                Disciplined technology for real business needs.
              </h2>
            </div>
            <Link
              href="/services"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#0F172A] hover:text-[#334155] transition-colors shrink-0 group"
            >
              <span>View All Services</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {servicePreviews.map((service) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.id}
                  className="p-7 sm:p-8 rounded-3xl bg-white border border-[#E2E8F0] shadow-2xs hover:shadow-md hover:border-slate-300 transition-all duration-200 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-11 h-11 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] flex items-center justify-center">
                        <Icon className="w-5 h-5 text-[#0F172A]" />
                      </div>
                      <span className="font-mono text-xs font-semibold text-[#94A3B8]">
                        {service.number}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-[#0F172A] tracking-tight mb-2">
                      {service.title}
                    </h3>
                    <p className="text-sm text-[#475569] leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-100">
                    <Link
                      href="/services"
                      className="text-xs font-semibold text-[#334155] hover:text-[#0F172A] inline-flex items-center gap-1"
                    >
                      <span>Explore details</span>
                      <ArrowUpRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 3. Ventures Preview */}
      <section className="py-20 sm:py-28 bg-white border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
            <div className="max-w-2xl">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#64748B] mb-2">
                <span className="w-2 h-2 rounded-full bg-[#334155]" />
                Independent Initiatives
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#0F172A]">
                Our Ventures &amp; Projects.
              </h2>
            </div>
            <Link
              href="/ventures"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#0F172A] hover:text-[#334155] transition-colors shrink-0 group"
            >
              <span>Explore Ventures</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {/* Chennai VOwn Preview Card */}
            <div className="p-7 sm:p-8 rounded-3xl bg-[#F8FAFC] border border-[#CBD5E1] shadow-2xs hover:shadow-md transition-all duration-200 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="text-[11px] font-mono uppercase font-semibold text-[#64748B] px-2 py-0.5 rounded bg-white border border-[#E2E8F0]">
                    City Initiative
                  </span>
                  <Badge variant="default" size="sm" className="font-mono text-[10px]">
                    Coming Soon
                  </Badge>
                </div>

                <div className="flex items-center gap-3.5 mb-3">
                  <div className="w-12 h-12 rounded-2xl bg-[#0F172A] text-white flex items-center justify-center p-2 shrink-0">
                    <Image
                      src="/brand/vown-primary-logo.png"
                      alt="Chennai VOwn"
                      width={32}
                      height={32}
                      className="object-contain brightness-0 invert"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#0F172A] tracking-tight">Chennai VOwn</h3>
                    <div className="text-xs font-mono text-[#64748B]">@chennai_vown.site</div>
                  </div>
                </div>

                <p className="text-sm text-[#475569] leading-relaxed">
                  A local digital window into Chennai: verified news, neighborhood highlights, community stories, and city guides.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#E2E8F0] flex items-center justify-between">
                <span className="text-xs text-[#64748B]">A VOwn Regional Initiative</span>
                <Link
                  href="/ventures"
                  className="text-xs font-semibold text-[#0F172A] hover:underline inline-flex items-center gap-1"
                >
                  <span>Learn more</span>
                  <ArrowUpRight className="w-3 h-3" />
                </Link>
              </div>
            </div>

            {/* Software Experiments Card */}
            <div className="p-7 sm:p-8 rounded-3xl bg-[#F8FAFC] border border-[#E2E8F0] shadow-2xs hover:shadow-md transition-all duration-200 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="text-[11px] font-mono uppercase font-semibold text-[#64748B] px-2 py-0.5 rounded bg-white border border-[#E2E8F0]">
                    Digital Products
                  </span>
                  <Badge variant="default" size="sm" className="font-mono text-[10px]">
                    In Development
                  </Badge>
                </div>

                <div className="flex items-center gap-3.5 mb-3">
                  <div className="w-12 h-12 rounded-2xl bg-white border border-[#E2E8F0] flex items-center justify-center p-2 shrink-0">
                    <Sparkles className="w-6 h-6 text-[#334155]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#0F172A] tracking-tight">Software Utilities</h3>
                    <div className="text-xs text-[#64748B]">Workflow Tools &amp; Experiments</div>
                  </div>
                </div>

                <p className="text-sm text-[#475569] leading-relaxed">
                  Purpose-built tools and lightweight automations designed to solve specific operational bottlenecks.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#E2E8F0] flex items-center justify-between">
                <span className="text-xs text-[#64748B]">VOwn Product Lab</span>
                <Link
                  href="/ventures"
                  className="text-xs font-semibold text-[#0F172A] hover:underline inline-flex items-center gap-1"
                >
                  <span>View roadmap</span>
                  <ArrowUpRight className="w-3 h-3" />
                </Link>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 4. Final Contact CTA */}
      <section className="py-20 sm:py-28 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 sm:p-14 rounded-3xl bg-[#0F172A] text-white text-center max-w-4xl mx-auto relative overflow-hidden">
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-4">
              Have an idea? Let&apos;s build it.
            </h2>
            <p className="text-base sm:text-lg text-slate-300 max-w-xl mx-auto leading-relaxed mb-8">
              Tell us what you&apos;re working on and explore how VOwn can help through automation, integrations, or modern web engineering.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5">
              <Button href="/contact" variant="white" size="lg" icon={<ArrowUpRight className="w-4 h-4" />}>
                Start a Conversation
              </Button>
              <a
                href={`mailto:${siteConfig.contactEmail}`}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-slate-700 text-sm font-medium text-slate-300 hover:text-white hover:border-slate-500 transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span className="font-mono">{siteConfig.contactEmail}</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
