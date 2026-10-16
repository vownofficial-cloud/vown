export interface VentureItem {
  id: string;
  name: string;
  category: "Digital Products" | "Software Tools" | "Automation";
  tagline: string;
  description: string;
  status: "Active" | "Coming Soon" | "In Development";
  highlights: string[];
}

export const venturesData: VentureItem[] = [
  {
    id: "automation-hub",
    name: "VOwn Automation Hub",
    category: "Automation",
    tagline: "Background automations connecting business forms, spreadsheets, and alerts",
    description:
      "A purpose-built suite of automations that move information between forms, spreadsheets, and databases without manual copying.",
    status: "Active",
    highlights: [
      "Instant notification triggers",
      "Spreadsheet and database syncing",
      "Zero manual data entry",
    ],
  },
  {
    id: "web-foundations",
    name: "VOwn Web Foundations",
    category: "Digital Products",
    tagline: "High-performance websites engineered for clear communication and enquiry conversion",
    description:
      "Ultra-fast web platforms with responsive architecture, accessible navigation, and straightforward contact flows.",
    status: "Active",
    highlights: [
      "Ultra-fast loading speed",
      "Mobile-optimized layouts",
      "Integrated lead capture flows",
    ],
  },
  {
    id: "operations-engine",
    name: "VOwn Operations Engine",
    category: "Software Tools",
    tagline: "Tailored internal tools and focused operational dashboards",
    description:
      "Lightweight internal tools designed to replace chaotic spreadsheets with clean, unified operational workflows.",
    status: "In Development",
    highlights: [
      "Unified customer and enquiry records",
      "Real-time operational coordination",
      "Zero unnecessary enterprise software bloat",
    ],
  },
];
