import { MetadataRoute } from 'next';

const sitemap = (): MetadataRoute.Sitemap => {
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
};

export default sitemap;
