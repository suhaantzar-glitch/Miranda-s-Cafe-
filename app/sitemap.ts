import type { MetadataRoute } from "next";
import { business } from "@/data/business";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${business.siteUrl}/`, changeFrequency: "monthly", priority: 1 },
    { url: `${business.siteUrl}/menu`, changeFrequency: "weekly", priority: 0.9 },
  ];
}
