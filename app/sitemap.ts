import type { MetadataRoute } from "next";
import { site } from "@/content/site";

const routes = ["", "/homoeopathy", "/assessment", "/bihar", "/doctors", "/about", "/contact", "/privacy"];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return routes.map((route) => ({
    url: `${site.url}${route}`,
    lastModified,
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}
