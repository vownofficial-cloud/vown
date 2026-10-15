export interface NavItem {
  label: string;
  href: string;
}

export interface SiteConfig {
  name: string;
  domain: string;
  url: string;
  title: string;
  description: string;
  contactEmail: string;
  navItems: NavItem[];
  brandStatement: string;
}

export const siteConfig: SiteConfig = {
  name: "VOwn",
  domain: "vown.site",
  url: "https://vown.site",
  title: "VOwn · Better systems for better work",
  description:
    "We build automations, connect business tools, and create clear websites that make work easier.",
  contactEmail: "admin@vown.site",
  brandStatement:
    "Less workarounds. Better workflows. VOwn helps teams save time with practical automation, connected software, and thoughtful websites.",
  navItems: [
    { label: "Home", href: "/" },
    { label: "What We Do", href: "/#what-we-do" },
    { label: "Approach", href: "/#approach" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
};
