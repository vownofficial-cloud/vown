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
  title: "VOwn · Your workday, upgraded",
  description:
    "Smart automations, connected tools, and websites made for real people. Less hassle, more momentum.",
  contactEmail: "admin@vown.site",
  brandStatement:
    "Your time matters. We build helpful automations, bring your tools together, and make websites that work beautifully.",
  navItems: [
    { label: "Home", href: "/" },
    { label: "What We Do", href: "/#what-we-do" },
    { label: "Approach", href: "/#approach" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
};
