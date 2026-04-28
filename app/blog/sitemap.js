import { blogPosts } from '../data/blog';

const baseUrl = 'https://pilatuweb.netlify.app';

function toIsoDate(dateString) {
  const parsed = new Date(dateString);
  return Number.isNaN(parsed.getTime()) ? '2026-03-24T00:00:00.000Z' : parsed.toISOString();
}

export default function sitemap() {
  return blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}/`,
    lastModified: toIsoDate(post.date),
    changeFrequency: 'monthly',
    priority: 0.7,
  }));
}
