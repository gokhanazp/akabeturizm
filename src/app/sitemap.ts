import type { MetadataRoute } from "next";
import { site } from "@/data/site";
import { tours } from "@/data/tours";
import { posts } from "@/data/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes = [
    "",
    "/hac",
    "/umre",
    "/yurt-ici-turlar",
    "/hakkimizda",
    "/iletisim",
    "/blog",
  ].map((path) => ({
    url: `${site.url}${path}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: path === "" ? 1 : 0.8,
  }));

  const categoryBase: Record<string, string> = {
    umre: "umre",
    hac: "hac",
    yurtici: "yurt-ici-turlar",
  };

  const tourRoutes = tours.map((t) => ({
    url: `${site.url}/${categoryBase[t.category]}/${t.slug}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  const blogRoutes = posts.map((p) => ({
    url: `${site.url}/blog/${p.slug}`,
    lastModified: new Date(p.date),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...tourRoutes, ...blogRoutes];
}
