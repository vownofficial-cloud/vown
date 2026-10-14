export interface VentureItem {
  id: string;
  name: string;
  category: "City Initiatives" | "Digital Products" | "Software Tools" | "Media & Content";
  tagline: string;
  description: string;
  status: "Active" | "Coming Soon" | "In Development";
  handle?: string;
  // External link is only enabled when verified live
  externalLink?: {
    label: string;
    url: string;
    isLive: boolean;
  };
  highlights: string[];
}

export const venturesData: VentureItem[] = [
  {
    id: "chennai-vown",
    name: "Chennai VOwn",
    category: "City Initiatives",
    tagline: "Local updates, community stories, and city guides for Chennai",
    description:
      "A dedicated initiative delivering Chennai-focused updates, useful local information, community stories, and city-related content. Built to keep residents and visitors connected to what is happening across the city.",
    status: "Coming Soon",
    handle: "@chennai_vown.site",
    externalLink: {
      label: "Follow on Instagram",
      url: "https://www.instagram.com/chennai_vown.site/",
      isLive: true,
    },
    highlights: [
      "Curated city updates & neighborhood highlights",
      "Useful local guides & transit information",
      "Community stories & cultural features",
      "Official handle: @chennai_vown.site",
    ],
  },
  {
    id: "future-city-initiatives",
    name: "Future City Initiatives",
    category: "City Initiatives",
    tagline: "Expanding local digital hubs to new regions",
    description:
      "Following the launch of Chennai VOwn, we plan to bring the same community-first approach and local information guides to additional cities.",
    status: "In Development",
    highlights: [
      "Replicable hyperlocal information framework",
      "Community-driven updates and verified local resources",
      "Expansion roadmap driven by community interest",
    ],
  },
  {
    id: "digital-tools",
    name: "Digital Products & Tools",
    category: "Software Tools",
    tagline: "Purpose-built utilities designed to solve common business bottlenecks",
    description:
      "VOwn incubates focused web utilities and automation tools created to simplify everyday operational workflows.",
    status: "In Development",
    highlights: [
      "Lightweight workflow utilities",
      "Practical business automation templates",
      "Open for collaboration and partnership ideas",
    ],
  },
];
