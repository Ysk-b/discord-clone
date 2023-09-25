import { MetadataRoute } from 'next';

const robots = (): MetadataRoute.Robots => {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      // Reject crawling for the pages under test directory
      disallow: '/test/',
    },
    sitemap: 'http://localhost:3000/sitemap.xml',
  };
};

export default robots;
