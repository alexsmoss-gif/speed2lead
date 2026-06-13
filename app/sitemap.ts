import type { MetadataRoute } from "next";
import { siteUrl } from "./data";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    "",
    "/lead-response-training",
    "/dealership-sales-training",
    "/internet-lead-management",
    "/about",
    "/contact",
  ].map((path) => ({
    url: `${siteUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: path === "" ? 1 : 0.8,
  }));
}
