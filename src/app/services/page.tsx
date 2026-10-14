import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { BrainCircuit, Workflow, Layout, ArrowUpRight, CheckCircle2, ArrowRight } from "lucide-react";
import { MotionWrap } from "@/components/motion/MotionWrap";

export const metadata: Metadata = {
  title: "What We Do — The Right Tools. Working Smarter Together",
  description:
    "We automate repetitive work, connect business tools, and build modern websites that help your business grow.",
};

export default function ServicesPage() {
  const services = [
    {
      id: "ai-automation",
      number: "01",
      title: "AI Automation",
      headline: "Give repetitive tasks less of your time.",
      description:
        "Every company loses hours each week to repetitive digital chores: copying form responses, re-typing invoice details, or manually sorting emails. We build reliable automations that take over routine tasks so your team can focus on what actually moves your business forward.",
      icon: BrainCircuit,
      examples: [
        {
          title: "Automatic Document Processing",
          detail: "Read and extract invoice totals, receipt numbers, and vendor details automatically with zero manual typing.",
        },
        {
          title: "Smart Inquiry Routing",
          detail: "Sort incoming customer questions and support emails directly to the right person or department instantly.",
        },
        {
          title: "Internal Knowledge Assistants",
          detail: "Help your team get instant answers from company guidelines, operational manuals, and product documents.",
        },
        {
          title: "Automated Daily Digests",
          detail: "Receive a simple daily summary of sales, open tickets, or system milestones directly in your inbox.",
        },
      ],
      outcome: "Hours saved every week, fewer manual errors, and faster response times for your customers.",
      contactParam: "ai-automation",
    },
    {
      id: "business-integrations",
      number: "02",
      title: "Business Integrations",
      headline: "Make your tools work better together.",
      description:
        "You probably use different software for email, payments, invoicing, and customer records. When those tools don't talk to each other, you waste time copying data and fixing discrepancies. We connect your systems so information moves between them automatically in real time.",
      icon: Workflow,
      examples: [
        {
          title: "CRM & Customer Sync",
          detail: "When a new client signs up, their details automatically update across your CRM, email list, and project board.",
        },
        {
          title: "Payment & Invoice Automations",
          detail: "Connect Stripe or payment gateways to create invoices, record receipts, and update accounting records right away.",
        },
        {
          title: "Instant Team Alerts",
          detail: "Notify your team in Slack, Teams, or SMS immediately when high-priority sales leads or urgent issues arrive.",
        },
        {
          title: "Spreadsheet & Database Connectors",
          detail: "Keep Google Sheets and existing tools in sync with your live databases without forcing employees to change habits.",
        },
      ],
      outcome: "Zero duplicate data entry, no missed customer follow-ups, and records that are always up to date.",
      contactParam: "business-integrations",
    },
    {
      id: "website-development",
      number: "03",
      title: "Website Development",
      headline: "Turn your online presence into a better business asset.",
      description:
        "Your website is often the first impression a potential client has of your business. If it loads slowly, looks cluttered on mobile, or makes it hard to understand what you do, visitors leave. We design clean, ultra-fast websites that clearly communicate your value and make contacting you effortless.",
      icon: Layout,
      examples: [
        {
          title: "Fast Loading on Any Device",
          detail: "Pages load in less than a second on mobile phones and desktop computers so visitors never bounce in frustration.",
        },
        {
          title: "Clear, Compelling Messaging",
          detail: "Clean typography and intuitive layout that explain what you do clearly within the first five seconds.",
        },
        {
          title: "Frictionless Contact & Booking",
          detail: "Simple inquiry forms that route directly to your inbox, letting interested leads reach you in seconds.",
        },
        {
          title: "Easy to Edit and Update",
          detail: "Built on modern frameworks so you can quickly update text, add new offerings, or announce changes.",
        },
      ],
      outcome: "A credible digital home that earns customer trust and turns visitors into new inquiries.",
      contactParam: "website-development",
    },
  ];

  return (
    <div className="py-20 sm:py-28 bg-[#F8FAFC] dark:bg-[#090D16] transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <MotionWrap delay={0.1} direction="up" className="max-w-3xl mb-16 sm:mb-24">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white dark:bg-[#111827] border border-[#E2E8F0] dark:border-slate-800 shadow-2xs mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#334155] dark:bg-slate-300" />
            <span className="text-xs font-semibold tracking-tight text-[#334155] dark:text-slate-200">
              What We Do
            </span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-[#0F172A] dark:text-white leading-tight mb-6">
            The right tools.
            <br />
            <span className="text-[#334155] dark:text-slate-300">Working smarter together.</span>
          </h1>
          <p className="text-lg sm:text-xl text-[#64748B] dark:text-slate-300 leading-relaxed">
            We solve the everyday digital friction that holds businesses back. Here is exactly what we build and how it helps you.
          </p>
        </MotionWrap>

        {/* Detailed Service Areas */}
        <div className="space-y-12 sm:space-y-16">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <MotionWrap
                key={service.id}
                delay={0.1}
                direction="up"
                className="w-full"
              >
                <section
                  id={service.id}
                  className="p-8 sm:p-12 rounded-3xl bg-white dark:bg-[#111827] border border-[#E2E8F0] dark:border-slate-800 shadow-sm hover:shadow-md dark:hover:border-slate-700 transition-all duration-200"
                >
                  {/* Service Header Row */}
                  <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 pb-8 border-b border-[#F1F5F9] dark:border-slate-800/80">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-2xl bg-[#F8FAFC] dark:bg-[#0B0F17] border border-[#E2E8F0] dark:border-slate-800 flex items-center justify-center shrink-0">
                        <Icon className="w-6 h-6 text-[#0F172A] dark:text-white" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="font-mono text-xs font-semibold text-[#94A3B8] dark:text-slate-500">
                            {service.number}
                          </span>
                          <span className="text-xs text-[#CBD5E1] dark:text-slate-700">/</span>
                          <span className="text-xs font-semibold text-[#64748B] dark:text-slate-400 uppercase tracking-wider font-mono">
                            {service.title}
                          </span>
                        </div>
                        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] dark:text-white tracking-tight">
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
                      Ask About This Service
                    </Button>
                  </div>

                  {/* Problem & Solution Explanation */}
                  <div className="py-8 border-b border-[#F1F5F9] dark:border-slate-800/80">
                    <p className="text-base sm:text-lg text-[#334155] dark:text-slate-300 leading-relaxed max-w-4xl">
                      {service.description}
                    </p>
                  </div>

                  {/* Practical Examples */}
                  <div className="pt-8">
                    <div className="text-xs font-mono uppercase tracking-wider text-[#94A3B8] dark:text-slate-500 mb-6">
                      Everyday Examples &amp; Solutions
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {service.examples.map((item) => (
                        <div
                          key={item.title}
                          className="p-5 rounded-2xl bg-[#F8FAFC] dark:bg-[#0B0F17] border border-[#E2E8F0] dark:border-slate-800 flex flex-col justify-between"
                        >
                          <div>
                            <div className="flex items-center gap-2 text-sm font-bold text-[#0F172A] dark:text-white mb-1.5">
                              <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                              <span>{item.title}</span>
                            </div>
                            <p className="text-xs sm:text-sm text-[#64748B] dark:text-slate-400 leading-relaxed">
                              {item.detail}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Practical Outcome Box */}
                    <div className="mt-8 p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
                      <div>
                        <span className="font-semibold text-[#0F172A] dark:text-white">Practical Outcome: </span>
                        <span className="text-[#475569] dark:text-slate-300">{service.outcome}</span>
                      </div>
                      <Link
                        href={`/contact?service=${service.contactParam}`}
                        className="font-semibold text-[#0F172A] dark:text-white hover:underline inline-flex items-center gap-1 shrink-0"
                      >
                        <span>Discuss your setup</span>
                        <ArrowRight className="w-3 h-3" />
                      </Link>
                    </div>
                  </div>
                </section>
              </MotionWrap>
            );
          })}
        </div>

        {/* Bottom Consultation Banner */}
        <MotionWrap delay={0.15} direction="up" className="mt-16 sm:mt-24 p-8 sm:p-12 rounded-3xl bg-[#0F172A] dark:bg-[#111827] text-white flex flex-col md:flex-row items-start md:items-center justify-between gap-6 border border-transparent dark:border-slate-800 shadow-xl">
          <div className="max-w-xl">
            <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight mb-2 text-white">
              Not sure which service you need first?
            </h3>
            <p className="text-sm text-slate-300 dark:text-slate-300 leading-relaxed">
              Tell us about your current day-to-day workflow. We&apos;ll give you an honest recommendation on the easiest place to start saving time.
            </p>
          </div>
          <Button href="/contact" variant="white" size="lg" icon={<ArrowUpRight className="w-4 h-4" />}>
            Start a Conversation
          </Button>
        </MotionWrap>

      </div>
    </div>
  );
}
