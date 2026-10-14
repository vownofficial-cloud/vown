export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  iconName: "brain-circuit" | "workflow" | "code-browser";
  capabilities: string[];
}

export const servicesData: ServiceItem[] = [
  {
    id: "ai-automation",
    number: "01",
    title: "AI Automation",
    tagline: "Automate repetitive tasks so your team can focus on what matters",
    description:
      "Build smarter workflows that reduce repetitive work and help businesses operate efficiently. From processing documents to smart customer support, we build practical AI tools that save hours every week.",
    iconName: "brain-circuit",
    capabilities: [
      "Custom AI assistants & workflows",
      "Document processing & data extraction",
      "Automated customer inquiry handling",
      "Tailored AI tools for your daily tasks",
    ],
  },
  {
    id: "business-integrations",
    number: "02",
    title: "Business Integrations",
    tagline: "Connect your apps and software so data moves automatically",
    description:
      "Connect tools, services, and systems to create seamless digital workflows. We link your CRMs, billing systems, forms, and communication apps so data stays up to date without manual copy-pasting.",
    iconName: "workflow",
    capabilities: [
      "CRM, database & spreadsheet sync",
      "Automated email & notification triggers",
      "Third-party API & webhook connections",
      "Connecting tools like Slack, Notion & Stripe",
    ],
  },
  {
    id: "website-development",
    number: "03",
    title: "Website Development",
    tagline: "Fast, modern websites designed around clear business goals",
    description:
      "Create fast, responsive, modern websites designed around business goals. We focus on clear messaging, quick load times, and intuitive design that turns visitors into clients.",
    iconName: "code-browser",
    capabilities: [
      "Clean, modern responsive design",
      "Fast page load times (Core Web Vitals)",
      "Built with modern Next.js & React",
      "Search-engine friendly (SEO ready)",
    ],
  },
];
