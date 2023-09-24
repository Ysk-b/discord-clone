import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://test.com',
      lastModified: new Date(),
    },
    {
      url: 'https://test.com/about',
      lastModified: new Date(),
    },
    {
      url: 'https://test.com/blog',
      lastModified: new Date(),
    },
  ];
}
