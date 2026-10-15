import React from "react";
import type { Metadata } from "next";
import { Button } from "@/components/ui/Button";
import { ArrowUpRight, ShieldCheck, Cpu, Sparkles, HeartHandshake } from "lucide-react";
import { MotionWrap, StaggerContainer, StaggerItem } from "@/components/motion/MotionWrap";

export const metadata: Metadata = {
  title: "VOwn",
  description:
    "Meet VOwn. We make everyday work easier with smart automations, connected tools, and websites that make sense.",
  alternates: {
    canonical: "https://vown.site/about",
  },
  openGraph: {
    title: "About VOwn | Less Hype, More Help",
    description:
      "Meet VOwn. We make everyday work easier with smart automations, connected tools, and websites that make sense.",
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
      title: "Less Hype. More Help.",
      description:
        "We don't add tech just to sound clever. We focus on the stuff that actually makes your day better.",
    },
    {
      icon: ShieldCheck,
      title: "Little Details. Big Difference.",
      description:
        "A great idea is only useful if it works in real life. We care about the small things that make it feel right.",
    },
    {
      icon: HeartHandshake,
      title: "Good Conversations. No Jargon.",
      description:
        "No confusing buzzwords. Just clear advice, real questions, and decisions you can feel good about.",
    },
    {
      icon: Sparkles,
      title: "Built for What's Next",
      description:
        "Your business won't stand still. We make decisions with tomorrow in mind, not just launch day.",
    },
  ];

  const focusAreas = [
    {
      title: "Goodbye, Repeat Tasks",
      description:
        "Less time sorting forms, chasing updates, and doing the same admin work again.",
    },
    {
      title: "Hello, Connected Tools",
      description:
        "Your CRM, website, and other tools sharing information instead of living in separate worlds.",
    },
    {
      title: "Websites That Feel Effortless",
      description:
        "Clear words, smooth layouts, and a website that makes it easy to take the next step.",
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
          "We're a technology studio for teams who want to spend less time fighting their tools and more time getting things done.",
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
            Tech should make life easier.
            <br />
            <span className="text-[#334155] dark:text-slate-300">Full stop.</span>
          </h1>
          <p className="text-lg sm:text-xl text-[#64748B] dark:text-slate-300 leading-relaxed">
            We're a technology studio for teams who want to spend less time fighting their tools and more time getting things done.
          </p>
        </MotionWrap>

        {/* Philosophy & Mindset Statement */}
        <MotionWrap delay={0.2} direction="up" className="p-8 sm:p-14 rounded-3xl bg-white dark:bg-[#111827] border border-[#E2E8F0] dark:border-slate-800 shadow-sm mb-16 sm:mb-24">
          <div className="max-w-4xl">
            <div className="text-xs font-mono uppercase tracking-wider text-[#64748B] dark:text-slate-400 mb-4">
              Why We Do It
            </div>
            <blockquote className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#0F172A] dark:text-white tracking-tight leading-snug mb-8">
              &ldquo;The best tech doesn't demand your attention. It gives your attention back.&rdquo;
            </blockquote>

            <div className="space-y-4 text-base sm:text-lg text-[#475569] dark:text-slate-300 leading-relaxed">
              <p>
                One more spreadsheet. One more tab. One more task you wish you could skip. We know how quickly the little things pile up.
              </p>
              <p>
                That's where VOwn comes in. We find a smarter way to handle the everyday stuff, using automation, connected tools, or a better website.
              </p>
            </div>
          </div>
        </MotionWrap>

        {/* What We Believe In */}
        <div className="mb-16 sm:mb-24">
          <MotionWrap delay={0.1} direction="up" className="max-w-2xl mb-12">
            <div className="text-xs font-mono uppercase tracking-wider text-[#64748B] dark:text-slate-400 mb-2">
              The VOwn Way
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] dark:text-white tracking-tight">
              Good tech. Good people. Good decisions.
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
              A little less hassle, in three big ways.
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
                Behind the Scenes
              </div>
              <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
                The right tools, not every tool
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 mt-2">
                We pick what fits your project best. The goal isn't a long list of tech names. It's a result that works for you.
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
            Let's build your next good thing.
          </h3>
          <p className="text-sm text-[#64748B] dark:text-slate-400 mb-6 max-w-lg mx-auto">
            No perfect brief needed. Bring the idea, the messy process, or the big question. We'll take it from there.
          </p>
          <div className="flex items-center justify-center gap-3">
            <Button href="/contact" variant="primary" size="lg" icon={<ArrowUpRight className="w-4 h-4" />}>
              Let's Talk
            </Button>
          </div>
        </MotionWrap>

      </div>
    </div>
  );
}
