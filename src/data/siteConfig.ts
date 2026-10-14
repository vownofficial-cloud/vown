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
  title: "VOwn — AI Automation, Integrations & Web Development",
  description:
    "VOwn builds intelligent digital experiences through AI automation, seamless integrations, and modern web technology.",
  contactEmail: "admin@vown.site",
  brandStatement:
    "VOwn builds intelligent digital experiences through AI automation, seamless integrations, and modern web technology. We focus on useful solutions that help businesses move forward.",
  navItems: [
    { label: "Home", href: "/" },
    { label: "What We Do", href: "/services" },
    { label: "Approach", href: "/approach" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
};
