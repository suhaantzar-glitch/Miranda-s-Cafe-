import type { MetadataRoute } from "next";
import { business } from "@/data/business";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: business.fullName,
    short_name: business.name,
    description: `${business.fullName} — Vermont-style deli & cafe in Canton, NY.`,
    start_url: "/",
    display: "standalone",
    background_color: "#fbf6ec",
    theme_color: "#9a4e12",
    icons: [{ src: "/icon.svg", sizes: "any", type: "image/svg+xml" }],
  };
}
