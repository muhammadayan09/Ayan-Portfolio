import { blogPosts } from '../data/blog';

export default function sitemap() {
  const baseUrl = 'https://pilatuweb.netlify.app';

  return blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'monthly',
    priority: 0.7,
  }));
}
