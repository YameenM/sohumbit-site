import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: "https://sohumbit.com", lastModified: new Date() },
    { url: "https://sohumbit.com/about", lastModified: new Date() },
    { url: "https://sohumbit.com/products", lastModified: new Date() },
    { url: "https://sohumbit.com/services", lastModified: new Date() },
    { url: "https://sohumbit.com/how-we-work", lastModified: new Date() },
    { url: "https://sohumbit.com/contact", lastModified: new Date() },
  ];
}
