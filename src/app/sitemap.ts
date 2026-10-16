import type { MetadataRoute } from "next";
export default function sitemap(): MetadataRoute.Sitemap {
  return ["", "/products", "/about", "/contact"].map((path) => ({
    url: `https://vown.site${path}`,
    changeFrequency: "monthly" as const,
    priority: path ? 0.8 : 1,
  }));
}
