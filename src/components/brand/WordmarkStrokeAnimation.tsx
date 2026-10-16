"use client";

import { motion } from "framer-motion";
import { VOWN_WORDMARK_PATH } from "./wordmarkPath";

export function WordmarkStrokeAnimation() {
  return (
    <div className="wordmark-stage" aria-label="VOwn animated logo wordmark">
      <svg
        className="wordmark-svg"
        viewBox="0 0 1159 387"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Subtle glow filter for the drawing stroke */}
          <filter id="strokeGlow" x="-10%" y="-10%" width="120%" height="120%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* 
          Stroke revealing loop animation:
          1. 0s - 2.2s: Strokes draw out the full VOWN letter outlines.
          2. 2.2s - 2.8s: Solid cream fill fades in to reveal the full logo.
          3. 2.8s - 4.4s: Full solid VOWN logo holds in pristine sharpness.
          4. 4.4s - 5.5s: Fill fades out and strokes retract back into zero.
          5. Repeats infinitely.
        */}
        <motion.path
          d={VOWN_WORDMARK_PATH}
          stroke="#EDE6D8"
          strokeWidth={3}
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="#EDE6D8"
          fillRule="evenodd"
          filter="url(#strokeGlow)"
          initial={{ pathLength: 0, fillOpacity: 0 }}
          animate={{
            pathLength: [0, 1, 1, 1, 0],
            fillOpacity: [0, 0, 1, 1, 0],
          }}
          transition={{
            duration: 5.6,
            repeat: Infinity,
            ease: "easeInOut",
            times: [0, 0.4, 0.52, 0.82, 1],
          }}
        />
      </svg>
    </div>
  );
}
