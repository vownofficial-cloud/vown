"use client";

import { motion } from "framer-motion";
import React from "react";

// Premium easing curve matching high-end iOS / luxury agency websites
const LUXURY_EASE = [0.16, 1, 0.3, 1] as const;

export function ScrollReveal({
  children,
  delay = 0,
  duration = 0.85,
  yOffset = 36,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  yOffset?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: yOffset }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration,
        delay,
        ease: LUXURY_EASE,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function TextReveal({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28, filter: "blur(6px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{
        duration: 0.9,
        delay,
        ease: LUXURY_EASE,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/**
 * Top & Bottom ambient blur edge overlays
 * Creates a soft, cinematic, expensive depth as content scrolls beneath the top header
 * and above the bottom viewport edge.
 */
export function ViewportEdgeBlur() {
  return (
    <>
      <div className="viewport-edge-blur top" aria-hidden="true" />
      <div className="viewport-edge-blur bottom" aria-hidden="true" />
    </>
  );
}
