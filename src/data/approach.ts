export interface ApproachStep {
  step: string;
  name: string;
  phase: string;
  summary: string;
  details: string;
  deliverables: string[];
}

export const approachSteps: ApproachStep[] = [
  {
    step: "01",
    name: "Discover",
    phase: "Phase 1",
    summary: "Uncover core bottlenecks, business requirements, and operational realities.",
    details:
      "We begin by understanding your exact workflows, identifying repetitive manual steps, and assessing your current software ecosystem. No guesswork—only clear objectives.",
    deliverables: [
      "Process Bottleneck Audit",
      "System Architecture Map",
      "Feasibility & ROI Assessment",
    ],
  },
  {
    step: "02",
    name: "Design",
    phase: "Phase 2",
    summary: "Architect elegant, resilient solutions with thoughtful human interaction.",
    details:
      "We blueprint data flows, integration schemas, and intuitive user interfaces. Every touchpoint is planned for speed, clarity, and zero cognitive friction.",
    deliverables: [
      "Interactive Wireframes & Prototypes",
      "Data Contract & API Schemas",
      "Technical Specification Plan",
    ],
  },
  {
    step: "03",
    name: "Build",
    phase: "Phase 3",
    summary: "Engineer production-grade software using modern, tested technology.",
    details:
      "We write clean, modular, and performant code. Whether training agentic workflows, connecting webhooks, or styling interfaces, we prioritize rock-solid stability.",
    deliverables: [
      "Production Next.js / API codebase",
      "Automated Integration Pipelines",
      "End-to-End Quality Validation",
    ],
  },
  {
    step: "04",
    name: "Improve",
    phase: "Phase 4",
    summary: "Iterate continuously based on live telemetry, feedback, and scale.",
    details:
      "Deployment is just the beginning. We instrument telemetry, gather real-world usage data, and optimize bottlenecks to keep your systems fast and ahead of change.",
    deliverables: [
      "Performance & Error Telemetry",
      "Continuous Optimization Cycles",
      "Adaptive Expansion Roadmap",
    ],
  },
];
