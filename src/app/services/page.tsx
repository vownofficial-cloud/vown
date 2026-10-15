import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { BrainCircuit, Workflow, Layout, ArrowUpRight, CheckCircle2, ArrowRight, HelpCircle } from "lucide-react";
import { MotionWrap } from "@/components/motion/MotionWrap";

export const metadata: Metadata = {
  title: "VOwn",
  description:
    "Less admin. Fewer disconnected tools. A website worth sharing. Discover what VOwn can help you build.",
  alternates: {
    canonical: "https://vown.site/services",
  },
  openGraph: {
    title: "VOwn Services | Automation, Integrations & Websites",
    description:
      "Less admin. Fewer disconnected tools. A website worth sharing. Discover what VOwn can help you build.",
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
      headline: "Copy. Paste. Repeat? Not anymore.",
      description:
        "If you've ever thought, 'Surely there's a faster way to do this,' you're in the right place. We turn repeatable tasks into smart workflows, with people still in control when it matters.",
      icon: BrainCircuit,
      examples: [
        {
          title: "Paperwork, Minus the Paper Chase",
          detail: "Pull useful details from invoices and receipts, with a chance to check them before saving.",
        },
        {
          title: "The Right Message, to the Right Person",
          detail: "Sort enquiries and send them where they'll get the right attention.",
        },
        {
          title: "Answers Without the Hunt",
          detail: "Make it easier to find answers in your own approved documents and guides.",
        },
        {
          title: "The Daily Catch-Up",
          detail: "Get the updates you care about in one easy-to-scan summary.",
        },
      ],
      outcome: "Less time on repeat tasks. More time for the work only your team can do.",
      contactParam: "ai-automation",
    },
    {
      id: "business-integrations",
      number: "02",
      title: "Business Integrations",
      headline: "Your tools should talk to each other.",
      description:
        "Tired of updating the same details in three places? We help compatible apps share information, so your CRM, forms, billing, and team tools can work together.",
      icon: Workflow,
      examples: [
        {
          title: "Your Customer Info, Together",
          detail: "Keep customer updates moving between the tools that need them.",
        },
        {
          title: "Payments Meet Paperwork",
          detail: "Link payments to invoices or records when your platforms allow it.",
        },
        {
          title: "Updates That Reach Your Team",
          detail: "Send a useful heads-up when something important happens.",
        },
        {
          title: "From Spreadsheet to System",
          detail: "Connect spreadsheets and databases instead of entering the same update twice.",
        },
      ],
      outcome: "Less jumping between apps. More confidence in where information goes.",
      contactParam: "business-integrations",
    },
    {
      id: "website-development",
      number: "03",
      title: "Website Development",
      headline: "A website people want to explore.",
      description:
        "Your website has one big job: make people understand what you do and want to know more. We blend sharp design, clear words, and an easy experience across devices.",
      icon: Layout,
      examples: [
        {
          title: "Looks Good on Every Screen",
          detail: "A smooth experience matters on phones, tablets, and laptops alike.",
        },
        {
          title: "Words That Get to the Point",
          detail: "Say what you do in words people actually understand.",
        },
        {
          title: "A Clear Next Step",
          detail: "Make it simple for an interested visitor to get in touch.",
        },
        {
          title: "Easy to Keep Fresh",
          detail: "Make future updates less of a chore with a tidy, maintainable setup.",
        },
      ],
      outcome: "A site that feels like your business and makes the next click easy.",
      contactParam: "website-development",
    },
  ];

  const faqs = [
    {
      question: "What can I put on autopilot?",
      answer:
        "Think forms, follow-ups, updates, reports, and moving information between apps. We'll first look at your workflow to see what makes sense to automate.",
    },
    {
      question: "Do I have to change all my apps?",
      answer:
        "Not necessarily. We start with what you already use and check which apps can connect. The options depend on the access and features your tools provide.",
    },
    {
      question: "What about my data?",
      answer:
        "Your data deserves care. We'll discuss what access is needed, which services are involved, and how sensitive information should be handled before connecting anything.",
    },
    {
      question: "How soon can we get started?",
      answer:
        "It depends on the project. Tell us what you have in mind, and we'll help you work out the scope, first steps, and a realistic timeline.",
    },
    {
      question: "Will this be easy for my team to use?",
      answer:
        "That's the goal. We design around the way your team works and make the handover clear, so using the result doesn't feel like another task.",
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
            Big ideas.
            <br />
            <span className="text-[#334155] dark:text-slate-300">Smarter ways to make them happen.</span>
          </h1>
          <p className="text-lg sm:text-xl text-[#64748B] dark:text-slate-300 leading-relaxed">
            From the boring daily tasks to the website everyone sees, we bring the right tech to the right problem.
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
                      Real-Life Ways It Helps
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
              Straight answers. Zero jargon.
            </h2>
            <p className="text-base text-[#64748B] dark:text-slate-400">
              Curious about how it works? You're not the only one.
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
              Not sure what you need? That's okay.
            </h3>
            <p className="text-sm text-slate-300 dark:text-slate-300 leading-relaxed">
              You don't need a technical plan. Just tell us what's getting in your way, and we'll start there.
            </p>
          </div>
          <Button href="/contact" variant="white" size="lg" icon={<ArrowUpRight className="w-4 h-4" />}>
            Let's Talk It Through
          </Button>
        </MotionWrap>

      </div>
    </div>
  );
}
