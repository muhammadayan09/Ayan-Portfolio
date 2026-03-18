import { blogPosts } from './data/blog';

export default async function sitemap() {
  const baseUrl = 'https://pilatuweb.netlify.app';

  // Static Pages
  const staticPages = [
    '',
    '/about',
    '/contact',
    '/packages',
    '/services',
    '/services/angular-apps',
    '/services/frontend-development',
    '/services/next-js-development',
    '/services/seo-optimization',
    '/services/shopify-expert',
    '/services/wordpress-development',
    '/case-studies',
    '/blog',
    '/privacy-policy',
    '/terms-and-conditions',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1 : 0.8,
  }));

  // Dynamic Case Studies
  const caseStudies = [
    'shs-real-estate',
    'zyra-delight',
    'zuf-dental-care',
    'silent-stories',
  ].map((slug) => ({
    url: `${baseUrl}/case-studies/${slug}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  // Blog posts are read from the content data so new entries are picked up automatically.
  const blogPostEntries = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'monthly',
    priority: 0.6,
  }));

  return [...staticPages, ...caseStudies, ...blogPostEntries];
}
