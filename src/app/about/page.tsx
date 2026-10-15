import React from "react";
import type { Metadata } from "next";
import { Button } from "@/components/ui/Button";
import { ArrowUpRight, ShieldCheck, Cpu, Sparkles, HeartHandshake } from "lucide-react";
import { MotionWrap, StaggerContainer, StaggerItem } from "@/components/motion/MotionWrap";

export const metadata: Metadata = {
  title: "VOwn",
  description:
    "Meet VOwn, a technology studio focused on useful automation, connected tools, and clear websites for real business needs.",
  alternates: {
    canonical: "https://vown.site/about",
  },
  openGraph: {
    title: "About VOwn | Technology Made Useful",
    description:
      "Meet VOwn, a technology studio focused on useful automation, connected tools, and clear websites for real business needs.",
    url: "https://vown.site/about",
    siteName: "VOwn",
    images: [
      {
        url: "/brand/vown-primary-logo.png",
        width: 1254,
        height: 1254,
        alt: "About VOwn — Technology Studio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function AboutPage() {
  const beliefs = [
    {
      icon: Cpu,
      title: "Practical Comes First",
      description:
        "A good solution solves a real problem. We focus on what will make daily work clearer and easier, not technology added just for show.",
    },
    {
      icon: ShieldCheck,
      title: "Care in the Details",
      description:
        "Thoughtful design and careful testing matter. We pay attention to how a system behaves in everyday use, not just how it looks in a demo.",
    },
    {
      icon: HeartHandshake,
      title: "Straightforward Conversations",
      description:
        "We explain our recommendations, discuss trade-offs, and keep decisions easy to understand. Questions are always part of the process.",
    },
    {
      icon: Sparkles,
      title: "Ready for What Comes Next",
      description:
        "Your needs will change. We aim for solutions that can be understood, maintained, and improved as your business evolves.",
    },
  ];

  const focusAreas = [
    {
      title: "Simplifying Repetitive Work",
      description:
        "Helping teams handle forms, invoices, customer requests, and routine admin work with fewer manual steps.",
    },
    {
      title: "Joining the Dots Between Tools",
      description:
        "Connecting compatible apps so information can move between your website, CRM, billing, and team tools.",
    },
    {
      title: "Making Websites Easier to Use",
      description:
        "Creating responsive websites with useful content, thoughtful layouts, and a clear path to contact your business.",
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

  const aboutJsonLd = {
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
            name: "About",
            item: "https://vown.site/about",
          },
        ],
      },
      {
        "@type": "AboutPage",
        "@id": "https://vown.site/about#webpage",
        url: "https://vown.site/about",
        name: "About VOwn",
        description:
          "VOwn builds useful automations, connected workflows, and clear websites to make everyday business work easier.",
        mainEntity: {
          "@id": "https://vown.site/#organization",
        },
      },
    ],
  };

  return (
    <div className="pt-32 pb-20 sm:pt-40 sm:pb-28 bg-[#F8FAFC] dark:bg-[#090D16] transition-colors duration-200">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutJsonLd) }}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <MotionWrap delay={0.1} direction="up" className="max-w-3xl mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white dark:bg-[#111827] border border-[#E2E8F0] dark:border-slate-800 shadow-2xs mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#334155] dark:bg-slate-300" />
            <span className="text-xs font-semibold tracking-tight text-[#334155] dark:text-slate-200">
              Meet VOwn
            </span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-[#0F172A] dark:text-white leading-tight mb-6">
            Technology should help people,
            <br />
            <span className="text-[#334155] dark:text-slate-300">not get in their way.</span>
          </h1>
          <p className="text-lg sm:text-xl text-[#64748B] dark:text-slate-300 leading-relaxed">
            VOwn builds useful automations, connected workflows, and clear websites to make everyday business work easier.
          </p>
        </MotionWrap>

        {/* Philosophy & Mindset Statement */}
        <MotionWrap delay={0.2} direction="up" className="p-8 sm:p-14 rounded-3xl bg-white dark:bg-[#111827] border border-[#E2E8F0] dark:border-slate-800 shadow-sm mb-16 sm:mb-24">
          <div className="max-w-4xl">
            <div className="text-xs font-mono uppercase tracking-wider text-[#64748B] dark:text-slate-400 mb-4">
              What Drives Us
            </div>
            <blockquote className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#0F172A] dark:text-white tracking-tight leading-snug mb-8">
              &ldquo;The best technology is the kind that makes your day easier. Clear, useful, and built around how people actually work.&rdquo;
            </blockquote>

            <div className="space-y-4 text-base sm:text-lg text-[#475569] dark:text-slate-300 leading-relaxed">
              <p>
                Business tools should help your team move forward, not create extra steps. When information lives in too many places, even simple tasks can become frustrating.
              </p>
              <p>
                We start by understanding the problem. Then we bring the right mix of automation, integrations, and website design to make the experience simpler.
              </p>
            </div>
          </div>
        </MotionWrap>

        {/* What We Believe In */}
        <div className="mb-16 sm:mb-24">
          <MotionWrap delay={0.1} direction="up" className="max-w-2xl mb-12">
            <div className="text-xs font-mono uppercase tracking-wider text-[#64748B] dark:text-slate-400 mb-2">
              What Matters to Us
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] dark:text-white tracking-tight">
              Useful work, done thoughtfully.
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
              Our Focus
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] dark:text-white tracking-tight">
              Three ways we can help your business.
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
                Our Toolkit
              </div>
              <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
                Tools chosen for the job
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 mt-2">
                We choose technologies based on what your project needs, with usability, maintainability, and performance in mind.
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
            Let's make something easier.
          </h3>
          <p className="text-sm text-[#64748B] dark:text-slate-400 mb-6 max-w-lg mx-auto">
            Tell us the problem you want to solve. We can explore a useful way forward together.
          </p>
          <div className="flex items-center justify-center gap-3">
            <Button href="/contact" variant="primary" size="lg" icon={<ArrowUpRight className="w-4 h-4" />}>
              Start a Conversation
            </Button>
          </div>
        </MotionWrap>

      </div>
    </div>
  );
}
