"use client";

import React from "react";
import { motion, useScroll, useSpring, useReducedMotion } from "framer-motion";

export function ScrollProgress() {
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 280,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div
      aria-hidden="true"
      className="absolute bottom-0 left-0 right-0 h-[2px] pointer-events-none overflow-hidden bg-transparent"
    >
      <motion.div
        style={shouldReduceMotion ? { scaleX: scrollYProgress } : { scaleX }}
        className="h-full w-full origin-left bg-[#334155] dark:bg-slate-200 transition-colors duration-200"
      />
    </div>
  );
}

