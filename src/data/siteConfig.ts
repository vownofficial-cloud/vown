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
  title: "VOwn · Technology That Moves You Forward",
  description:
    "We automate repetitive work, connect your tools, and build websites that help your business grow.",
  contactEmail: "admin@vown.site",
  brandStatement:
    "Less busywork. More possibilities. VOwn automates repetitive tasks, connects your business tools, and builds websites that help you grow.",
  navItems: [
    { label: "Home", href: "/" },
    { label: "What We Do", href: "/#what-we-do" },
    { label: "Approach", href: "/#approach" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
};
