import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { BrainCircuit, Workflow, Layout, ArrowUpRight, CheckCircle2, ArrowRight, HelpCircle } from "lucide-react";
import { MotionWrap } from "@/components/motion/MotionWrap";

export const metadata: Metadata = {
  title: "VOwn",
  description:
    "Explore practical AI automation, software integrations, and website development with VOwn. See what we can help you improve.",
  alternates: {
    canonical: "https://vown.site/services",
  },
  openGraph: {
    title: "VOwn Services | Automation, Integrations & Websites",
    description:
      "Explore practical AI automation, software integrations, and website development with VOwn. See what we can help you improve.",
    url: "https://vown.site/services",
    siteName: "VOwn",
    images: [
      {
        url: "/brand/vown-primary-logo.png",
        width: 1254,
        height: 1254,
        alt: "VOwn Services — AI Automation, Software Integrations & Web Development",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function ServicesPage() {
  const services = [
    {
      id: "ai-automation",
      number: "01",
      title: "AI Automation",
      headline: "Take repeat work off your plate.",
      description:
        "If your team spends too much time copying information, sorting requests, or preparing routine updates, we can help. We design workflows that handle repeatable steps while keeping people involved where decisions matter.",
      icon: BrainCircuit,
      examples: [
        {
          title: "Automatic Document Processing",
          detail: "Capture key details from invoices and receipts, then review them before they reach your records.",
        },
        {
          title: "Smart Inquiry Routing",
          detail: "Organize incoming questions and route them to the right person or inbox.",
        },
        {
          title: "Internal Knowledge Assistants",
          detail: "Help your team find useful information in approved internal guides and documents.",
        },
        {
          title: "Automated Daily Digests",
          detail: "Bring key updates from the tools you use into one easy-to-read summary.",
        },
      ],
      outcome: "Less duplicate work, clearer handoffs, and more time for the tasks that need your attention.",
      contactParam: "ai-automation",
    },
    {
      id: "business-integrations",
      number: "02",
      title: "Business Integrations",
      headline: "Help your systems share the work.",
      description:
        "Your CRM, forms, billing platform, and team tools all hold useful information. We connect compatible systems using APIs or existing connectors so updates can move between them without constant manual copying.",
      icon: Workflow,
      examples: [
        {
          title: "CRM & Customer Sync",
          detail: "Keep customer details aligned across your CRM and other connected tools.",
        },
        {
          title: "Payment & Invoice Automations",
          detail: "Connect payment events with invoices or internal records where your tools support it.",
        },
        {
          title: "Instant Team Alerts",
          detail: "Send useful alerts to your team when important events need attention.",
        },
        {
          title: "Spreadsheet & Database Connectors",
          detail: "Connect spreadsheets and databases so updates do not have to be entered twice.",
        },
      ],
      outcome: "Fewer disconnected steps and a smoother flow of information across your business.",
      contactParam: "business-integrations",
    },
    {
      id: "website-development",
      number: "03",
      title: "Website Development",
      headline: "Make a stronger first impression online.",
      description:
        "A useful website should explain what you do, work well on a phone, and make the next step obvious. We design clear, responsive websites with thoughtful content, simple navigation, and easy ways for visitors to contact you.",
      icon: Layout,
      examples: [
        {
          title: "Designed for Real Devices",
          detail: "Build with performance in mind and test the experience across mobile and desktop screens.",
        },
        {
          title: "Messaging That Makes Sense",
          detail: "Explain your services in plain language with a layout that is easy to follow.",
        },
        {
          title: "Easy Ways to Get in Touch",
          detail: "Give potential customers clear contact options and forms that are simple to complete.",
        },
        {
          title: "Content You Can Maintain",
          detail: "Plan a structure that makes it easier to update your services and information later.",
        },
      ],
      outcome: "A clear, useful online home that helps visitors understand you and take the next step.",
      contactParam: "website-development",
    },
  ];

  const faqs = [
    {
      question: "What kind of work can VOwn automate?",
      answer:
        "Good starting points include form processing, sorting messages, moving data between tools, preparing reports, and sending reminders. We look at how the task works today before suggesting automation.",
    },
    {
      question: "Can you connect the tools we already use?",
      answer:
        "Often, yes. We can assess CRMs, spreadsheets, messaging tools, payment platforms, databases, and custom software. The options depend on the APIs, access, and connectors each tool supports.",
    },
    {
      question: "How do you handle access and sensitive information?",
      answer:
        "We discuss data access before connecting systems, plan for limited permissions, and agree on how credentials and sensitive information will be handled. Any third-party services are part of that discussion.",
    },
    {
      question: "How long does a project usually take?",
      answer:
        "It depends on the scope, the tools involved, and how ready your content or data is. After understanding the project, we can suggest a clear plan and realistic timeline.",
    },
    {
      question: "Will our team be able to use the result?",
      answer:
        "Ease of use is part of the plan. We aim to fit the solution into the way your team already works and explain how to use and maintain it at handover.",
    },
  ];

  const servicesJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://vown.site",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Services",
            item: "https://vown.site/services",
          },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      },
    ],
  };

  return (
    <div className="pt-32 pb-20 sm:pt-40 sm:pb-28 bg-[#F8FAFC] dark:bg-[#090D16] transition-colors duration-200">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesJsonLd) }}
      />
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
            Less friction.
            <br />
            <span className="text-[#334155] dark:text-slate-300">Better ways to work.</span>
          </h1>
          <p className="text-lg sm:text-xl text-[#64748B] dark:text-slate-300 leading-relaxed">
            Start with the work that slows you down. We will help you find a better way to do it.
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
                      Discuss This Service
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
                      Where This Can Help
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
                        <span className="font-semibold text-[#0F172A] dark:text-white">The Goal: </span>
                        <span className="text-[#475569] dark:text-slate-300">{service.outcome}</span>
                      </div>
                      <Link
                        href={`/contact?service=${service.contactParam}`}
                        className="font-semibold text-[#0F172A] dark:text-white hover:underline inline-flex items-center gap-1 shrink-0"
                      >
                        <span>Tell Us About Your Setup</span>
                        <ArrowRight className="w-3 h-3" />
                      </Link>
                    </div>
                  </div>
                </section>
              </MotionWrap>
            );
          })}
        </div>

        {/* AEO / User FAQ Section */}
        <MotionWrap delay={0.12} direction="up" className="mt-20 sm:mt-28">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white dark:bg-[#111827] border border-[#E2E8F0] dark:border-slate-800 shadow-2xs mb-4">
              <HelpCircle className="w-3.5 h-3.5 text-[#334155] dark:text-slate-300" />
              <span className="text-xs font-semibold tracking-tight text-[#334155] dark:text-slate-200">
                Frequently Asked Questions
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] dark:text-white tracking-tight mb-4">
              Good questions deserve clear answers.
            </h2>
            <p className="text-base text-[#64748B] dark:text-slate-400">
              A few things worth knowing before you start a project with VOwn.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="p-6 sm:p-7 rounded-3xl bg-white dark:bg-[#111827] border border-[#E2E8F0] dark:border-slate-800 shadow-2xs hover:shadow-xs transition-shadow"
              >
                <h3 className="text-base sm:text-lg font-bold text-[#0F172A] dark:text-white mb-2.5 flex items-start gap-2">
                  <span className="font-mono text-xs font-semibold text-[#94A3B8] dark:text-slate-500 mt-1">
                    Q{idx + 1}.
                  </span>
                  <span>{faq.question}</span>
                </h3>
                <p className="text-sm text-[#475569] dark:text-slate-300 leading-relaxed pl-6">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </MotionWrap>

        {/* Bottom Consultation Banner */}
        <MotionWrap delay={0.15} direction="up" className="mt-16 sm:mt-24 p-8 sm:p-12 rounded-3xl bg-[#0F172A] dark:bg-[#111827] text-white flex flex-col md:flex-row items-start md:items-center justify-between gap-6 border border-transparent dark:border-slate-800 shadow-xl">
          <div className="max-w-xl">
            <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight mb-2 text-white">
              Not sure where to start?
            </h3>
            <p className="text-sm text-slate-300 dark:text-slate-300 leading-relaxed">
              Tell us what feels slow, messy, or difficult. We&apos;ll help you identify a useful first step.
            </p>
          </div>
          <Button href="/contact" variant="white" size="lg" icon={<ArrowUpRight className="w-4 h-4" />}>
            Tell Us What You Need
          </Button>
        </MotionWrap>

      </div>
    </div>
  );
}
