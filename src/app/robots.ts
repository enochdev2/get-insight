import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "Googlebot",
        allow: ["/"],
        disallow: ["/login", "/register", "/profile"],
      },
    ],
    sitemap: "https://www.dev-noch.com.ng/sitemap.xml",
  };
}
