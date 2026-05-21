import { MetadataRoute } from 'next';
import { getAllPosts } from '@/lib/writing';

export default function sitemap(): MetadataRoute.Sitemap {
  const writingEntries = getAllPosts().map((post) => ({
    url: `https://adetuyi.com/writing/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'yearly' as const,
    priority: 0.6,
  }));

  return [
    {
      url: 'https://adetuyi.com',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: 'https://adetuyi.com/thesis',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.7,
    },
    {
      url: 'https://adetuyi.com/writing',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    ...writingEntries,
  ];
}
