import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { BrainCircuit, Workflow, Layout, ArrowUpRight, CheckCircle2, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "What We Do — AI Automation, Integrations & Web Development",
  description:
    "Explore VOwn's core services: AI automation to eliminate repetitive tasks, business integrations to connect software, and modern website development.",
};

export default function ServicesPage() {
  const services = [
    {
      id: "ai-automation",
      number: "01",
      title: "AI Automation",
      headline: "Smart workflows that eliminate repetitive daily tasks.",
      description:
        "We build practical AI systems that handle time-consuming operational work. Rather than chasing novelties, we focus on workflows where automation directly eliminates bottlenecks, processes information reliably, and frees your team to focus on meaningful work.",
      icon: BrainCircuit,
      capabilities: [
        {
          title: "Document & Data Extraction",
          detail: "Automatically extract, validate, and format data from invoices, receipts, PDFs, and customer forms.",
        },
        {
          title: "Intelligent Inquiry Routing",
          detail: "Classify incoming emails, support tickets, and messages to dispatch them to the right team instantly.",
        },
        {
          title: "Custom AI Assistants",
          detail: "Deploy context-aware assistants trained on your internal documentation and operational manuals.",
        },
        {
          title: "Automated Reporting & Summaries",
          detail: "Generate automated daily summaries and operational digests from scattered system logs.",
        },
      ],
      deliverables: "Custom prompt pipelines, privacy-first data handling, edge-case testing, and team training.",
      contactParam: "ai-automation",
    },
    {
      id: "business-integrations",
      number: "02",
      title: "Business Integrations",
      headline: "Connecting your software so data moves automatically.",
      description:
        "Modern businesses rely on dozens of separate applications. We connect your CRMs, billing systems, spreadsheets, and communication apps into seamless, bi-directional pipelines so information stays up to date everywhere without manual copy-pasting.",
      icon: Workflow,
      capabilities: [
        {
          title: "CRM & Database Synchronization",
          detail: "Keep customer profiles, sales records, and contact histories synchronized across HubSpot, Salesforce, and Postgres.",
        },
        {
          title: "Payment & Billing Webhooks",
          detail: "Connect Stripe or accounting platforms to automatically provision user accounts, issue receipts, and notify finance.",
        },
        {
          title: "Communication Bridges",
          detail: "Trigger automated notifications and actionable alerts in Slack, Microsoft Teams, or via SMS.",
        },
        {
          title: "Legacy & Spreadsheet Connectors",
          detail: "Bridge Google Sheets and older software with modern cloud APIs without disrupting current habits.",
        },
      ],
      deliverables: "API orchestration, webhook monitors, zero-data-loss retry logic, and clear schema documentation.",
      contactParam: "business-integrations",
    },
    {
      id: "website-development",
      number: "03",
      title: "Website Development",
      headline: "Fast, modern websites designed around clear business goals.",
      description:
        "We build clean, responsive digital flagships engineered for speed, clarity, and trust. Using modern Next.js and React, we ensure your website loads in under a second, looks impeccable on mobile, and turns visitors into clients.",
      icon: Layout,
      capabilities: [
        {
          title: "Modern Next.js & React Architecture",
          detail: "Engineered with clean TypeScript, component modularity, and server-side rendering for optimal speed.",
        },
        {
          title: "Responsive & Accessible Design",
          detail: "Meticulously tested layouts across mobile, tablet, and desktop screens with full accessibility compliance.",
        },
        {
          title: "Core Web Vitals & SEO Setup",
          detail: "Sub-second load times, structured Schema.org data, clean OpenGraph tags, and semantic HTML5.",
        },
        {
          title: "Easy Content Management",
          detail: "Intuitive content editing options that empower your team to update copy and pages without writing code.",
        },
      ],
      deliverables: "Production Next.js codebase, custom domain deployment, SEO verification, and ongoing maintenance.",
      contactParam: "website-development",
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
              Core Capabilities
            </span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-[#0F172A] leading-tight mb-6">
            What We Do.
          </h1>
          <p className="text-lg sm:text-xl text-[#64748B] leading-relaxed">
            We build smart automation, connect your business software, and develop clean modern
            websites tailored to your goals. Honest engineering, transparent communication, and zero unnecessary complexity.
          </p>
        </div>

        {/* Detailed Service Areas */}
        <div className="space-y-12 sm:space-y-16">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <section
                key={service.id}
                id={service.id}
                className="p-8 sm:p-12 rounded-3xl bg-white border border-[#E2E8F0] shadow-sm hover:shadow-md transition-shadow duration-200"
              >
                {/* Service Header Row */}
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 pb-8 border-b border-[#F1F5F9]">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] flex items-center justify-center shrink-0">
                      <Icon className="w-6 h-6 text-[#0F172A]" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-mono text-xs font-semibold text-[#94A3B8]">
                          {service.number}
                        </span>
                        <span className="text-xs text-[#CBD5E1]">/</span>
                        <span className="text-xs font-semibold text-[#64748B] uppercase tracking-wider font-mono">
                          {service.title}
                        </span>
                      </div>
                      <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] tracking-tight">
                        {service.headline}
                      </h2>
                    </div>
                  </div>

                  <Button
                    href={`/contact?service=${service.contactParam}`}
                    variant="primary"
                    size="sm"
                    className="shrink-0 self-start md:self-auto"
                    icon={<ArrowUpRight className="w-3.5 h-3.5" />}
                  >
                    Discuss This Service
                  </Button>
                </div>

                {/* Description */}
                <div className="py-8 border-b border-[#F1F5F9]">
                  <p className="text-base sm:text-lg text-[#334155] leading-relaxed max-w-4xl">
                    {service.description}
                  </p>
                </div>

                {/* Capabilities Grid */}
                <div className="pt-8">
                  <div className="text-xs font-mono uppercase tracking-wider text-[#94A3B8] mb-6">
                    What We Build &amp; Support
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {service.capabilities.map((cap) => (
                      <div
                        key={cap.title}
                        className="p-5 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] flex flex-col justify-between"
                      >
                        <div>
                          <div className="flex items-center gap-2 text-sm font-bold text-[#0F172A] mb-1.5">
                            <CheckCircle2 className="w-4 h-4 text-[#334155] shrink-0" />
                            <span>{cap.title}</span>
                          </div>
                          <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
                            {cap.detail}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Deliverables Summary */}
                  <div className="mt-8 p-4 rounded-xl bg-slate-50 border border-slate-200/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
                    <div>
                      <span className="font-semibold text-[#0F172A]">Core Outcomes: </span>
                      <span className="text-[#475569]">{service.deliverables}</span>
                    </div>
                    <Link
                      href={`/contact?service=${service.contactParam}`}
                      className="font-semibold text-[#0F172A] hover:underline inline-flex items-center gap-1 shrink-0"
                    >
                      <span>Inquire now</span>
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              </section>
            );
          })}
        </div>

        {/* Bottom Consultation Banner */}
        <div className="mt-16 sm:mt-24 p-8 sm:p-12 rounded-3xl bg-[#0F172A] text-white flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="max-w-xl">
            <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight mb-2">
              Need a tailored system combination?
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              Many projects require both custom integrations and modern web development. Tell us what you need and we will propose a practical plan.
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
