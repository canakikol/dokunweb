import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/club/giris", "/club/kayit"],
      },
    ],
    sitemap: "https://dokun.co/sitemap.xml",
    host: "https://dokun.co",
  };
}
