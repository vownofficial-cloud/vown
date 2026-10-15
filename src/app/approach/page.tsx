import React from "react";
import type { Metadata } from "next";
import { Button } from "@/components/ui/Button";
import { CheckCircle2, ArrowUpRight, Compass, PencilRuler, Code2, RefreshCw } from "lucide-react";
import { MotionWrap, StaggerContainer, StaggerItem } from "@/components/motion/MotionWrap";

export const metadata: Metadata = {
  title: "VOwn",
  description:
    "See how VOwn plans, builds, tests, and improves practical automations, business integrations, and websites.",
  alternates: {
    canonical: "https://vown.site/approach",
  },
  openGraph: {
    title: "How VOwn Works | From Idea to Launch",
    description:
      "See how VOwn plans, builds, tests, and improves practical automations, business integrations, and websites.",
    url: "https://vown.site/approach",
    siteName: "VOwn",
    images: [
      {
        url: "/brand/vown-primary-logo.png",
        width: 1254,
        height: 1254,
        alt: "VOwn Approach — Discover, Design, Build, Improve",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function ApproachPage() {
  const stages = [
    {
      step: "01",
      name: "Discover",
      phase: "Phase 1",
      tagline: "Understand the real problem",
      icon: Compass,
      description:
        "First, we listen. We look at the work you do today, the tools involved, and the steps causing delays. Together, we agree on the problem to solve and what a good result should look like.",
      deliverables: [
        "A clear picture of today's workflow",
        "The tools and people involved",
        "A shared goal and starting scope",
      ],
    },
    {
      step: "02",
      name: "Design",
      phase: "Phase 2",
      tagline: "Turn ideas into a clear plan",
      icon: PencilRuler,
      description:
        "We map out how the solution should work before building it. That means deciding what connects, what changes, and what needs a human check. We review the plan with you so there are fewer surprises.",
      deliverables: [
        "A proposed workflow or page layout",
        "The key connections and decisions",
        "A practical delivery plan",
      ],
    },
    {
      step: "03",
      name: "Build",
      phase: "Phase 3",
      tagline: "Build, connect, and test",
      icon: Code2,
      description:
        "With the plan agreed, we build the solution in manageable steps. We test realistic situations, check important details, and make changes where the experience can be improved.",
      deliverables: [
        "Working features to review",
        "Checks for key integrations",
        "Testing on relevant devices and workflows",
      ],
    },
    {
      step: "04",
      name: "Improve",
      phase: "Phase 4",
      tagline: "Launch and learn",
      icon: RefreshCw,
      description:
        "We help you move from testing to everyday use. Your team gets an explanation of how things work, and we discuss any follow-up changes or support that might be useful.",
      deliverables: [
        "A practical launch checklist",
        "A handover your team can follow",
        "Next-step recommendations",
      ],
    },
  ];

  const principles = [
    {
      title: "Clear Communication",
      description:
        "You should know who to speak to, what is being worked on, and when to expect an update. We keep the conversation focused and understandable.",
    },
    {
      title: "Decisions You Can Follow",
      description:
        "We explain what we are recommending and why. You can ask questions, review the plan, and make informed choices along the way.",
    },
    {
      title: "A Thoughtful Handover",
      description:
        "We discuss access, documentation, account ownership, and future maintenance before handover, so you know how the finished solution will be managed.",
    },
  ];

  const approachJsonLd = {
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
            name: "Approach",
            item: "https://vown.site/approach",
          },
        ],
      },
      {
        "@type": "HowTo",
        name: "VOwn's Four-Step Project Process",
        description:
          "How VOwn discovers needs, plans the solution, builds carefully, and supports a clear launch.",
        step: stages.map((stage, idx) => ({
          "@type": "HowToStep",
          position: idx + 1,
          name: stage.name,
          itemListElement: {
            "@type": "HowToDirection",
            text: `${stage.tagline}. ${stage.description}`,
          },
        })),
      },
    ],
  };

  return (
    <div className="pt-32 pb-20 sm:pt-40 sm:pb-28 bg-[#F8FAFC] dark:bg-[#090D16] transition-colors duration-200">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(approachJsonLd) }}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <MotionWrap delay={0.1} direction="up" className="max-w-3xl mb-16 sm:mb-24">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white dark:bg-[#111827] border border-[#E2E8F0] dark:border-slate-800 shadow-2xs mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#334155] dark:bg-slate-300" />
            <span className="text-xs font-semibold tracking-tight text-[#334155] dark:text-slate-200">
              Our Process
            </span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-[#0F172A] dark:text-white leading-tight mb-6">
            Start with clarity.
            <br />
            <span className="text-[#334155] dark:text-slate-300">Build with purpose.</span>
          </h1>
          <p className="text-lg sm:text-xl text-[#64748B] dark:text-slate-300 leading-relaxed">
            From the first conversation to launch, we use four simple steps to turn a real problem into a useful solution.
          </p>
        </MotionWrap>

        {/* Process Stages: Horizontal Cards */}
        <div className="mb-20 sm:mb-28">
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {stages.map((stage) => {
              const Icon = stage.icon;
              return (
                <StaggerItem key={stage.step}>
                  <div className="h-full p-7 sm:p-8 rounded-3xl bg-white dark:bg-[#111827] border border-[#E2E8F0] dark:border-slate-800 shadow-2xs flex flex-col justify-between relative hover:border-slate-300 dark:hover:border-slate-700 transition-colors">
                    <div>
                      {/* Top Phase Header */}
                      <div className="flex items-center justify-between mb-6">
                        <div className="w-10 h-10 rounded-xl bg-[#F8FAFC] dark:bg-[#0B0F17] border border-[#E2E8F0] dark:border-slate-800 flex items-center justify-center">
                          <Icon className="w-5 h-5 text-[#0F172A] dark:text-white" />
                        </div>
                        <span className="text-xs font-mono font-semibold text-[#94A3B8] dark:text-slate-500">
                          {stage.step}
                        </span>
                      </div>

                      <div className="text-[11px] font-mono uppercase tracking-wider text-[#64748B] dark:text-slate-400 mb-1">
                        {stage.phase}
                      </div>
                      <h2 className="text-2xl font-extrabold text-[#0F172A] dark:text-white tracking-tight mb-2">
                        {stage.name}
                      </h2>
                      <p className="text-xs font-medium text-[#334155] dark:text-slate-300 mb-4">
                        {stage.tagline}
                      </p>
                      <p className="text-sm text-[#475569] dark:text-slate-300 leading-relaxed mb-6">
                        {stage.description}
                      </p>
                    </div>

                    {/* Deliverables Checklist */}
                    <div className="pt-5 border-t border-slate-100 dark:border-slate-800">
                      <div className="text-[10px] font-mono uppercase tracking-wider text-[#94A3B8] dark:text-slate-500 mb-3">
                        What We Work Toward
                      </div>
                      <ul className="space-y-2">
                        {stage.deliverables.map((item) => (
                          <li key={item} className="flex items-start gap-2 text-xs text-[#334155] dark:text-slate-300">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>

        {/* How We Collaborate */}
        <MotionWrap delay={0.1} direction="up" className="p-8 sm:p-12 rounded-3xl bg-white dark:bg-[#111827] border border-[#E2E8F0] dark:border-slate-800 shadow-sm mb-16 sm:mb-24">
          <div className="max-w-2xl mb-8">
            <div className="text-xs font-mono uppercase tracking-wider text-[#64748B] dark:text-slate-400 mb-2">
              How We Collaborate
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] dark:text-white tracking-tight">
              Good work comes from good communication.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {principles.map((p) => (
              <div key={p.title} className="p-5 rounded-2xl bg-[#F8FAFC] dark:bg-[#0B0F17] border border-[#E2E8F0] dark:border-slate-800">
                <h3 className="text-base font-bold text-[#0F172A] dark:text-white mb-2">{p.title}</h3>
                <p className="text-xs sm:text-sm text-[#64748B] dark:text-slate-400 leading-relaxed">{p.description}</p>
              </div>
            ))}
          </div>
        </MotionWrap>

        {/* Bottom CTA */}
        <MotionWrap delay={0.15} direction="up" className="p-8 sm:p-12 rounded-3xl bg-[#0F172A] dark:bg-[#111827] text-white flex flex-col md:flex-row items-start md:items-center justify-between gap-6 border border-transparent dark:border-slate-800 shadow-xl">
          <div className="max-w-xl">
            <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight mb-2 text-white">
              Ready to make something work better?
            </h3>
            <p className="text-sm text-slate-300 dark:text-slate-300 leading-relaxed">
              Tell us what you want to improve. We can talk through the challenge and a sensible place to begin.
            </p>
          </div>
          <Button href="/contact" variant="white" size="lg" icon={<ArrowUpRight className="w-4 h-4" />}>
            Let's Talk About It
          </Button>
        </MotionWrap>

      </div>
    </div>
  );
}
