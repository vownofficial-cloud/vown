import type { Metadata } from "next";
import { MotionWrap } from "@/components/motion/MotionWrap";

export const metadata: Metadata = {
  title: "About VOwn | Meet V",
  description: "Meet V, your friendly guide to the people and purpose behind VOwn.",
  alternates: { canonical: "https://vown.site/about" },
};

export default function AboutPage() {
  return (
    <main className="relative isolate min-h-[85vh] overflow-hidden bg-[#F8FAFC] dark:bg-[#090D16]" aria-label="About VOwn">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-grid-subtle" />
      <div aria-hidden="true" className="pointer-events-none absolute -right-48 top-10 size-[42rem] rounded-full bg-blue-200/40 blur-[100px] dark:bg-blue-600/10" />

      <section className="relative mx-auto grid min-h-[85vh] w-full max-w-7xl items-center gap-12 px-6 pb-16 pt-36 sm:px-8 lg:grid-cols-[1fr_1fr] lg:gap-8 lg:px-12 lg:pb-12 lg:pt-32">
        <MotionWrap direction="up" duration={0.65} className="relative z-10 max-w-2xl">
          <p className="mb-6 inline-flex rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.2em] text-blue-700 dark:border-blue-500/30 dark:bg-blue-500/10 dark:text-blue-300">
            Meet your guide
          </p>
          <h1 className="text-[clamp(3.5rem,8vw,6.5rem)] font-black leading-[0.99] tracking-[-0.06em] text-slate-950 dark:text-white">
            Hey, I&apos;m <span className="text-blue-600 dark:text-blue-400">V.</span>
          </h1>
          <h2 className="mt-7 max-w-xl text-[clamp(1.4rem,3vw,2.1rem)] font-bold leading-[1.2] tracking-[-0.04em] text-slate-800 dark:text-slate-100">
            Tech can be confusing.<br />I make it click.
          </h2>
          <p className="mt-6 max-w-lg text-base leading-8 text-slate-600 dark:text-slate-300 sm:text-lg">
            Welcome to VOwn. I&apos;m here to show you who we are, what we believe, and how we make technology work for people — not the other way around.
          </p>
          <p className="mt-9 text-xs font-semibold uppercase tracking-[0.25em] text-slate-500 dark:text-slate-400">
            Chapter 01 <span className="mx-2 text-blue-500">/</span> Welcome
          </p>
        </MotionWrap>

        <MotionWrap direction="right" delay={0.18} duration={0.75} className="relative mx-auto flex h-[min(68vh,570px)] w-full max-w-[580px] items-end justify-center lg:h-[min(76vh,700px)]">
          <div aria-hidden="true" className="absolute inset-x-[8%] bottom-[8%] aspect-square rounded-full bg-gradient-to-br from-blue-200/80 via-sky-100/60 to-transparent blur-2xl dark:from-blue-600/20 dark:via-slate-700/10" />
          <div aria-hidden="true" className="absolute inset-x-[10%] bottom-0 aspect-square rounded-full border border-blue-200/60 dark:border-blue-500/20" />
          <div aria-hidden="true" className="absolute bottom-[12%] text-[18rem] font-black leading-none tracking-[-0.12em] text-blue-500/[0.07] dark:text-blue-400/[0.1] sm:text-[24rem]">V</div>
          <div
            role="img"
            aria-label="V, VOwn's friendly anime guide, smiling and welcoming you"
            className="relative z-10 h-full w-full bg-[url('/characters/v-welcome.png')] bg-bottom bg-contain bg-no-repeat drop-shadow-[0_18px_22px_rgba(22,45,82,0.10)]"
          />
        </MotionWrap>
      </section>
    </main>
  );
}
