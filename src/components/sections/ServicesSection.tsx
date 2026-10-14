"use client";

import React from "react";
import { servicesData, ServiceItem } from "@/data/services";
import { MotionWrap, StaggerContainer, StaggerItem } from "@/components/motion/MotionWrap";
import { BrainCircuit, Workflow, Layout, ArrowUpRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export function ServicesSection() {
  const getIcon = (iconName: ServiceItem["iconName"]) => {
    switch (iconName) {
      case "brain-circuit":
        return <BrainCircuit className="w-6 h-6 text-[#0F172A]" />;
      case "workflow":
        return <Workflow className="w-6 h-6 text-[#0F172A]" />;
      case "code-browser":
        return <Layout className="w-6 h-6 text-[#0F172A]" />;
    }
  };

  return (
    <section id="services" className="py-24 sm:py-32 relative bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <MotionWrap delay={0.1} direction="up">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#64748B] mb-3">
              <span className="w-2 h-2 rounded-full bg-[#334155]" />
              Our Services
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#0F172A] leading-tight">
              What We Do.
            </h2>
            <p className="mt-4 text-lg text-[#64748B] leading-relaxed">
              We build smart automation, connect your business software, and develop clean modern websites tailored to your goals.
            </p>
          </MotionWrap>
        </div>

        {/* 3 Main Service Cards Grid */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8" staggerDelay={0.15}>
          {servicesData.map((service) => (
            <StaggerItem key={service.id}>
              <div className="group relative h-full flex flex-col justify-between p-7 sm:p-8 rounded-3xl bg-white border border-[#E2E8F0] shadow-sm hover:shadow-xl hover:shadow-slate-200/50 hover:border-slate-300 transition-all duration-300">
                
                {/* Top Bar: Icon & Service Number */}
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-center justify-center transition-transform duration-300 group-hover:scale-105 group-hover:bg-slate-100">
                      {getIcon(service.iconName)}
                    </div>
                    <span className="font-mono text-sm font-semibold text-[#94A3B8] group-hover:text-[#334155] transition-colors">
                      {service.number}
                    </span>
                  </div>

                  {/* Title & Tagline */}
                  <h3 className="text-xl sm:text-2xl font-bold text-[#0F172A] tracking-tight group-hover:text-[#334155] transition-colors">
                    {service.title}
                  </h3>
                  <p className="mt-1 text-xs font-mono text-[#64748B]">
                    {service.tagline}
                  </p>

                  {/* Primary Description */}
                  <p className="mt-4 text-sm sm:text-base text-[#334155] leading-relaxed">
                    {service.description}
                  </p>

                  {/* Capabilities List */}
                  <div className="mt-6 pt-6 border-t border-slate-100">
                    <div className="text-[11px] font-mono uppercase tracking-wider text-[#94A3B8] mb-3">
                      Key Capabilities
                    </div>
                    <ul className="space-y-2">
                      {service.capabilities.map((cap) => (
                        <li key={cap} className="flex items-center gap-2 text-xs sm:text-sm text-[#475569]">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#334155] shrink-0" />
                          <span>{cap}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Bottom Card Action */}
                <div className="mt-8 pt-4">
                  <Link
                    href={`#contact?service=${service.id}`}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0F172A] group-hover:text-[#334155] group-hover:translate-x-1 transition-all duration-200"
                  >
                    <span>Inquire about {service.title}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

      </div>
    </section>
  );
}
