export interface NavItem {
  label: string;
  href: string;
}
export const siteConfig = {
  name: "VOwn",
  domain: "vown.site",
  url: "https://vown.site",
  title: "VOwn | Website Home",
  description:
    "We build websites, connect your apps, and help you stop doing the same tasks by hand.",
  contactEmail: "admin@vown.site",
  brandStatement: "Websites, connected tools, and a little less manual work.",
  navItems: [
    { label: "Home", href: "/" },
    { label: "Products", href: "/products" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ] as NavItem[],
};
