import type { Metadata } from "next";
import Link from "next/link";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { WordmarkStrokeAnimation } from "@/components/brand/WordmarkStrokeAnimation";
import { ScrollReveal, TextReveal } from "@/components/motion/ScrollMotion";

export const metadata: Metadata = {
  title: "VOwn | Website Home",
  description:
    "We build websites, connect your apps, and help you stop doing the same tasks by hand.",
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      {/* SECTION 1: THE INTRODUCTION WITH FULL VOWN LOGO STROKE REVEALING ANIMATION */}
      <section
        className="home-intro forest-section"
        aria-labelledby="home-title"
      >
        <div className="shell intro-layout">
          <div className="intro-copy">
            <TextReveal>
              <h1 id="home-title">
                A website for
                <br />
                your business.
                <br />
                <span className="soft-type">
                  Less work on
                  <br />
                  your plate.
                </span>
              </h1>
            </TextReveal>
            <ScrollReveal delay={0.15}>
              <p>
                We build websites, connect the apps you use, and help you stop
                doing the same tasks by hand.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.25} className="actions">
              <Link className="action light" href="/products">
                Explore our products <ArrowUpRight size={18} />
              </Link>
              <Link className="text-link" href="/contact">
                Tell us what you need <ArrowUpRight size={17} />
              </Link>
            </ScrollReveal>
          </div>

          {/* Full VOWN wordmark with stroke reveal loop animation */}
          <div className="brand-composition" aria-hidden="true">
            <WordmarkStrokeAnimation />
          </div>
        </div>

        <div className="shell intro-bottom">
          <a href="#what-we-build" className="scroll-cue">
            Explore what we build <ArrowDown size={16} />
          </a>
        </div>
      </section>

      {/* SECTION 2: WHAT WE BUILD */}
      <section
        className="build-section shell"
        id="what-we-build"
        aria-labelledby="build-title"
      >
        <div className="build-container">
          <div className="section-heading">
            <TextReveal>
              <h2 id="build-title">
                You know the problem.
                <br />
                <span className="serif-word">We help build the answer.</span>
              </h2>
            </TextReveal>
            <ScrollReveal delay={0.12}>
              <p className="section-lead">
                From a website that brings in customers to a task that runs on its own,
                we build digital solutions you and your customers can actually use.
              </p>
            </ScrollReveal>
          </div>

          {/* Aligned capability rows */}
          <div className="build-rows">
            {[
              [
                "01",
                "Websites",
                "A place to show what you do, answer the usual questions, and help customers reach you.",
              ],
              [
                "02",
                "Automation",
                "Still copying details or sending repeat reminders? We help those steps run on their own.",
              ],
              [
                "03",
                "Connected tools",
                "Your form, spreadsheet, and customer records should share information. We help connect them.",
              ],
            ].map(([n, title, copy], index) => (
              <ScrollReveal delay={0.12 + index * 0.08} key={n}>
                <article className="build-row">
                  <span className="row-number">{n}</span>
                  <div className="row-content">
                    <h3>{title}</h3>
                    <p>{copy}</p>
                  </div>
                  <Link
                    href="/contact"
                    className="row-link"
                    aria-label={`Ask us about ${title.toLowerCase()}`}
                  >
                    <ArrowUpRight aria-hidden="true" size={22} />
                  </Link>
                </article>
              </ScrollReveal>
            ))}
            <ScrollReveal delay={0.38}>
              <div className="build-footnote">
                <span>We also build projects of our own.</span>
                <Link href="/products" className="text-link">
                  See what is made by VOwn <ArrowUpRight size={17} />
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* SECTION 3: HOW WE WORK & INVITATION (Requested by user) */}
      <section className="home-method-section" aria-labelledby="method-title">
        <div className="shell build-container">
          <div className="section-heading">
            <TextReveal>
              <h2 id="method-title">
                First, tell us
                <br />
                <span className="serif-word">what is getting in the way.</span>
              </h2>
            </TextReveal>
          </div>

          <div className="method-lines">
            {[
              [
                "01",
                "We listen.",
                "Show us the task, the tools, or the website. We ask questions and understand your workflow before recommending what to build.",
              ],
              [
                "02",
                "We make a plan.",
                "We explain what we can do in plain English and agree on the work, cost, and timeline upfront.",
              ],
              [
                "03",
                "We build and check.",
                "We test every detail and show you how to use what we have built so you feel completely confident.",
              ],
            ].map(([n, t, p], index) => (
              <ScrollReveal delay={0.1 + index * 0.08} key={n}>
                <article className="method-card">
                  <span className="method-number">{n}</span>
                  <div className="method-body">
                    <h3>{t}</h3>
                    <p>{p}</p>
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={0.35}>
            <div className="method-cta">
              <p>
                Have a project or a repetitive problem in mind?
                <br />
                Tell us about it.
              </p>
              <Link className="action" href="/contact">
                Tell us about your idea <ArrowUpRight size={18} />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
