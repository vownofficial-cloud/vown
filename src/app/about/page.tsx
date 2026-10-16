import type { Metadata } from "next";
import Image from "next/image";
import { MotionWrap } from "@/components/motion/MotionWrap";

export const metadata: Metadata = {
  title: "Meet V | About VOwn",
  description:
    "Meet V, VOwn's friendly anime tech guide. He makes AI, automation, websites, and technology easy to understand.",
  alternates: { canonical: "https://vown.site/about" },
};

export default function AboutPage() {
  return (
    <div className="relative isolate min-h-screen overflow-hidden bg-[#f5f7fb] dark:bg-[#070b14]">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(44,93,255,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(44,93,255,0.045)_1px,transparent_1px)] bg-[size:42px_42px] [mask-image:linear-gradient(to_bottom,black_20%,transparent_88%)] dark:opacity-50"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-56 top-40 size-[34rem] rounded-full bg-blue-400/15 blur-[120px] dark:bg-blue-500/10"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-24 size-[38rem] rounded-full bg-indigo-300/20 blur-[130px] dark:bg-indigo-500/10"
      />

      <section className="relative mx-auto grid min-h-screen w-full max-w-[1440px] items-center gap-0 px-5 pb-0 pt-28 sm:gap-8 sm:px-8 sm:pt-32 lg:grid-cols-[0.92fr_1.08fr] lg:gap-0 lg:px-12 lg:pt-24 xl:px-16">
        <MotionWrap
          direction="up"
          duration={0.7}
          once={false}
          className="relative z-20 mx-auto max-w-2xl text-center lg:mx-0 lg:text-left"
        >
          <p className="mb-4 text-base font-semibold tracking-[-0.02em] text-blue-600 sm:text-lg lg:text-xl xl:text-2xl dark:text-blue-400">
            Meet V — the face of VOwn.
          </p>
          <h1 className="text-balance text-[clamp(3.75rem,8.5vw,7.75rem)] font-black leading-[0.86] tracking-[-0.075em] text-slate-950 dark:text-white">
            Hey, I&apos;m <span className="text-blue-600 dark:text-blue-400">V.</span>
          </h1>
          <p className="mx-auto mt-7 max-w-2xl text-balance text-[clamp(1.55rem,2.65vw,2.55rem)] font-semibold leading-[1.12] tracking-[-0.045em] text-slate-800 dark:text-slate-100 lg:mx-0">
            Tech sounds complicated?
            <br />
            I&apos;ll make it simple.
          </p>
          <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg leading-8 text-slate-600 sm:text-xl sm:leading-9 lg:mx-0 lg:text-[1.35rem] lg:leading-10 xl:text-2xl dark:text-slate-300">
            I&apos;m your anime-style tech guide for AI, automation, websites,
            and everything in between. Scroll with me — I&apos;ll show you what
            VOwn is all about.
          </p>

          <div className="mt-7 flex items-center justify-center gap-4 sm:mt-9 lg:justify-start">
            <span className="h-px w-10 bg-blue-500" />
            <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.28em] text-slate-500 dark:text-slate-400">
              01 / Welcome
            </span>
          </div>
        </MotionWrap>

        <MotionWrap
          direction="right"
          delay={0.12}
          duration={0.85}
          distance={28}
          className="relative mx-auto mt-6 flex w-[calc(100%+2.5rem)] max-w-[720px] items-end justify-center overflow-hidden sm:mt-0 sm:min-h-[680px] sm:w-full lg:min-h-[calc(100vh-7rem)]"
        >
          <div
            aria-hidden="true"
            className="absolute bottom-[8%] left-1/2 aspect-square w-[78%] -translate-x-1/2 rounded-full border border-blue-300/50 dark:border-blue-400/15"
          />
          <div
            aria-hidden="true"
            className="absolute bottom-[15%] left-1/2 aspect-square w-[62%] -translate-x-1/2 rounded-full bg-blue-500/10 blur-3xl dark:bg-blue-500/15"
          />
          <div
            aria-hidden="true"
            className="absolute bottom-[7%] left-1/2 h-10 w-[58%] -translate-x-1/2 rounded-[100%] bg-slate-950/15 blur-xl dark:bg-black/40"
          />

          <Image
            src="/characters/v-welcome-v2.png"
            alt="V, VOwn's friendly anime tech guide, smiling and waving hello"
            width={704}
            height={1056}
            priority
            sizes="(max-width: 1023px) 92vw, 52vw"
            className="relative z-10 -mb-px block h-auto w-full max-w-[470px] object-contain object-bottom drop-shadow-[0_28px_30px_rgba(12,34,80,0.18)] sm:max-h-[min(78vh,880px)] sm:w-auto sm:max-w-full"
          />

        </MotionWrap>
      </section>
    </div>
  );
}
