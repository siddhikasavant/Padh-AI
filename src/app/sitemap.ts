import type { MetadataRoute } from "next";

const baseUrl =
"https://padh-ai-beta.vercel.app/";
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/syllabus`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/notes`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/pyqs`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/contributors`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
    },
  ];
}