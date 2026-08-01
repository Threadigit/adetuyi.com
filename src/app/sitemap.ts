import { MetadataRoute } from 'next';
import { getAllPosts } from '@/lib/writing';

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUpdated = new Date('2026-08-01');
  const writingEntries = getAllPosts().map((post) => ({
    url: `https://www.adetuyi.com/writing/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'yearly' as const,
    priority: 0.6,
  }));

  return [
    {
      url: 'https://www.adetuyi.com',
      lastModified: siteUpdated,
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: 'https://www.adetuyi.com/thesis',
      lastModified: siteUpdated,
      changeFrequency: 'yearly',
      priority: 0.8,
    },
    {
      url: 'https://www.adetuyi.com/thesis/powering-nigeria-infrastructure-fund-1',
      lastModified: siteUpdated,
      changeFrequency: 'yearly',
      priority: 0.7,
    },
    {
      url: 'https://www.adetuyi.com/work',
      lastModified: siteUpdated,
      changeFrequency: 'yearly',
      priority: 0.7,
    },
    {
      url: 'https://www.adetuyi.com/writing',
      lastModified: siteUpdated,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: 'https://www.adetuyi.com/speaking',
      lastModified: siteUpdated,
      changeFrequency: 'yearly',
      priority: 0.6,
    },
    {
      url: 'https://www.adetuyi.com/press',
      lastModified: siteUpdated,
      changeFrequency: 'yearly',
      priority: 0.6,
    },
    {
      url: 'https://www.adetuyi.com/resources/prosperity-engine',
      lastModified: siteUpdated,
      changeFrequency: 'yearly',
      priority: 0.7,
    },
    {
      url: 'https://www.adetuyi.com/resources/closing-the-compliance-gap',
      lastModified: siteUpdated,
      changeFrequency: 'yearly',
      priority: 0.7,
    },
    {
      url: 'https://www.adetuyi.com/resources/bootstrapping-for-investors',
      lastModified: siteUpdated,
      changeFrequency: 'yearly',
      priority: 0.7,
    },
    ...writingEntries,
  ];
}
