import React, { useState, useSyncExternalStore } from "react";
import { useReducedMotion } from "framer-motion";
import { Brain, Cpu, GitBranch, Layers, Sparkles, Terminal } from "lucide-react";

const emptySubscribe = () => () => {};

export function HeroGraphic() {
  const shouldReduceMotion = useReducedMotion();
  const [activeNode, setActiveNode] = useState<number | null>(null);
  const mounted = useSyncExternalStore(emptySubscribe, () => true, () => false);

  // System nodes data
  const nodes = [
    {
      id: 0,
      title: "AI Workflows",
      subtitle: "Smart Automation",
      cx: 140,
      cy: 160,
      icon: Brain,
      tag: "Task Automation",
      color: "#0F172A",
    },
    {
      id: 1,
      title: "Integrations",
      subtitle: "Connected Tools",
      cx: 360,
      cy: 90,
      icon: GitBranch,
      tag: "Apps & Software",
      color: "#334155",
    },
    {
      id: 2,
      title: "Web Platforms",
      subtitle: "Modern Websites",
      cx: 580,
      cy: 170,
      icon: Layers,
      tag: "Clean & Responsive",
      color: "#0F172A",
    },
    {
      id: 3,
      title: "Data Sync",
      subtitle: "Real-time Updates",
      cx: 240,
      cy: 310,
      icon: Cpu,
      tag: "Automated Data",
      color: "#475569",
    },
    {
      id: 4,
      title: "Ventures",
      subtitle: "Digital Initiatives",
      cx: 480,
      cy: 320,
      icon: Sparkles,
      tag: "Chennai VOwn & Labs",
      color: "#334155",
    },
  ];

  // Interconnected paths
  const connections = [
    { from: 0, to: 1, d: "M 140 160 Q 240 110 360 90" },
    { from: 1, to: 2, d: "M 360 90 Q 470 110 580 170" },
    { from: 0, to: 3, d: "M 140 160 Q 180 240 240 310" },
    { from: 1, to: 3, d: "M 360 90 Q 300 200 240 310" },
    { from: 1, to: 4, d: "M 360 90 Q 420 200 480 320" },
    { from: 2, to: 4, d: "M 580 170 Q 540 250 480 320" },
    { from: 3, to: 4, d: "M 240 310 Q 360 340 480 320" },
  ];

  return (
    <div className="relative w-full max-w-4xl mx-auto py-4 select-none">
      {/* Background radial gradient glow */}
      <div className="absolute inset-0 bg-radial-[circle_at_center_rgba(226,232,240,0.6)] from-white/90 via-transparent to-transparent pointer-events-none -z-10" />

      {/* Frame Container */}
      <div className="relative rounded-3xl bg-white/70 border border-[#E2E8F0] shadow-xl shadow-slate-200/50 backdrop-blur-md overflow-hidden p-4 sm:p-8">
        
        {/* Subtle decorative top toolbar */}
        <div className="flex items-center justify-between pb-4 mb-4 border-b border-[#F1F5F9] text-xs font-mono text-[#64748B]">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-slate-300" />
            <span className="w-2.5 h-2.5 rounded-full bg-slate-300" />
            <span className="w-2.5 h-2.5 rounded-full bg-slate-300" />
            <span className="ml-2 font-medium text-[#334155] flex items-center gap-1.5">
              <Terminal className="w-3.5 h-3.5 text-[#334155]" />
              VOwn Connected Ecosystem
            </span>
          </div>
          <div className="hidden sm:flex items-center gap-3">
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 text-[10px] font-semibold border border-emerald-200/60">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              SYSTEM ACTIVE
            </span>
            <span className="text-[11px] text-[#94A3B8]">vown.site // v2.6</span>
          </div>
        </div>

        {/* Interactive SVG Diagram */}
        <div className="relative w-full aspect-[720/420] max-h-[440px]">
          <svg
            viewBox="0 0 720 420"
            className="w-full h-full overflow-visible"
            aria-label="VOwn Connected Systems Diagram"
          >
            <defs>
              {/* Gradients */}
              <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#94A3B8" stopOpacity="0.4" />
                <stop offset="50%" stopColor="#334155" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#94A3B8" stopOpacity="0.4" />
              </linearGradient>

              <radialGradient id="nodeGlow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#334155" stopOpacity="0.15" />
                <stop offset="100%" stopColor="#334155" stopOpacity="0" />
              </radialGradient>

              {/* Data packet filter glow */}
              <filter id="packetGlow" x="-50%" y="-50%" width="200%" height="200%">
                <feDropShadow dx="0" dy="0" stdDeviation="2" floodColor="#0F172A" floodOpacity="0.3" />
              </filter>
            </defs>

            {/* Background geometric grid and concentric rings */}
            <circle cx="360" cy="210" r="170" fill="none" stroke="#E2E8F0" strokeWidth="1" strokeDasharray="3 3" opacity="0.6" />
            <circle cx="360" cy="210" r="110" fill="none" stroke="#E2E8F0" strokeWidth="1" opacity="0.4" />

            {/* Connecting lines */}
            {connections.map((c, i) => {
              const isHighlighted =
                activeNode === null || activeNode === c.from || activeNode === c.to;
              return (
                <g key={`conn-${i}`}>
                  {/* Base connection stroke */}
                  <path
                    d={c.d}
                    fill="none"
                    stroke={isHighlighted ? "#CBD5E1" : "#E2E8F0"}
                    strokeWidth={isHighlighted ? 2 : 1}
                    className="transition-colors duration-300"
                  />

                  {/* Flowing data pulses */}
                  {!shouldReduceMotion && mounted && (
                    <path
                      d={c.d}
                      fill="none"
                      stroke="#334155"
                      strokeWidth="2.5"
                      strokeDasharray="8 80"
                      strokeLinecap="round"
                      filter="url(#packetGlow)"
                      className="opacity-70"
                    >
                      <animate
                        attributeName="stroke-dashoffset"
                        from="200"
                        to="0"
                        dur={`${3.5 + (i % 3) * 0.8}s`}
                        repeatCount="indefinite"
                      />
                    </path>
                  )}
                </g>
              );
            })}

            {/* Interactive Nodes */}
            {nodes.map((node) => {
              const isHovered = activeNode === node.id;

              return (
                <g
                  key={`node-${node.id}`}
                  className="cursor-pointer group"
                  onMouseEnter={() => setActiveNode(node.id)}
                  onMouseLeave={() => setActiveNode(null)}
                >
                  {/* Outer pulse circle */}
                  <circle
                    cx={node.cx}
                    cy={node.cy}
                    r={isHovered ? 40 : 32}
                    fill="url(#nodeGlow)"
                    className="transition-all duration-300"
                  />

                  {/* Node container */}
                  <circle
                    cx={node.cx}
                    cy={node.cy}
                    r={24}
                    fill="#FFFFFF"
                    stroke={isHovered ? "#0F172A" : "#CBD5E1"}
                    strokeWidth={isHovered ? 2.5 : 1.5}
                    className="transition-all duration-200 drop-shadow-xs"
                  />

                  {/* Center accent dot or icon representation */}
                  <circle
                    cx={node.cx}
                    cy={node.cy}
                    r={5}
                    fill={isHovered ? "#0F172A" : "#334155"}
                    className="transition-colors duration-200"
                  />

                  {/* Node label card */}
                  <foreignObject
                    x={node.cx - 75}
                    y={node.cy + 28}
                    width="150"
                    height="65"
                    className="overflow-visible pointer-events-none"
                  >
                    <div className="flex flex-col items-center text-center">
                      <span className={`text-[12px] font-semibold tracking-tight transition-colors duration-200 ${
                        isHovered ? "text-[#0F172A]" : "text-[#1E293B]"
                      }`}>
                        {node.title}
                      </span>
                      <span className="text-[10px] text-[#64748B] font-mono leading-tight">
                        {node.subtitle}
                      </span>
                      {isHovered && (
                        <span className="mt-1 px-1.5 py-0.2 rounded text-[9px] font-mono bg-[#0F172A] text-white animate-fade-in shadow-xs">
                          {node.tag}
                        </span>
                      )}
                    </div>
                  </foreignObject>
                </g>
              );
            })}
          </svg>
        </div>

        {/* Live status bar */}
        <div className="mt-4 pt-4 border-t border-[#F1F5F9] grid grid-cols-2 sm:grid-cols-4 gap-3 text-center sm:text-left">
          <div className="p-2 rounded-lg bg-slate-50/70 border border-slate-100">
            <div className="text-[10px] uppercase font-mono text-[#64748B]">System</div>
            <div className="text-xs font-semibold text-[#0F172A] flex items-center justify-center sm:justify-start gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              Active &amp; Connected
            </div>
          </div>
          <div className="p-2 rounded-lg bg-slate-50/70 border border-slate-100">
            <div className="text-[10px] uppercase font-mono text-[#64748B]">Performance</div>
            <div className="text-xs font-semibold text-[#0F172A]">Fast &amp; Lightweight</div>
          </div>
          <div className="p-2 rounded-lg bg-slate-50/70 border border-slate-100">
            <div className="text-[10px] uppercase font-mono text-[#64748B]">Ventures</div>
            <div className="text-xs font-semibold text-[#0F172A]">Chennai VOwn &amp; Labs</div>
          </div>
          <div className="p-2 rounded-lg bg-slate-50/70 border border-slate-100">
            <div className="text-[10px] uppercase font-mono text-[#64748B]">Domain</div>
            <div className="text-xs font-semibold text-[#0F172A] font-mono">vown.site</div>
          </div>
        </div>

      </div>
    </div>
  );
}
