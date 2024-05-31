import { MetadataRoute } from "next";

interface SitemapItem {
  loc: string;
  lastmod: string;
  changefreq: string;
  priority: number;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://vkportfolio-nine.vercel.app"; // Update with your base URL

  const sections: SitemapItem[] = [
    {
      loc: `${baseUrl}#aboutme`,
      lastmod: new Date().toISOString(),
      changefreq: "weekly",
      priority: 1.0,
    },
    {
      loc: `${baseUrl}#skills`,
      lastmod: new Date().toISOString(),
      changefreq: "weekly",
      priority: 1.0,
    },
    {
      loc: `${baseUrl}#experience`,
      lastmod: new Date().toISOString(),
      changefreq: "weekly",
      priority: 1.0,
    },
    {
      loc: `${baseUrl}#certification`,
      lastmod: new Date().toISOString(),
      changefreq: "weekly",
      priority: 1.0,
    },
    {
      loc: `${baseUrl}#achievements`,
      lastmod: new Date().toISOString(),
      changefreq: "weekly",
      priority: 1.0,
    },
  ];

  return sections.map((item) => ({
    url: item.loc,
    lastmod: item.lastmod,
    changefreq: item.changefreq,
    priority: item.priority,
  }));
}
