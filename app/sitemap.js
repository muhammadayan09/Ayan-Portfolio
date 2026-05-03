import { blogPosts } from './data/blog';
import { caseStudies } from './data/caseStudies';
import { getLocationPages } from './locations/location-data';

const baseUrl = 'https://pilatuweb.netlify.app';
const staticLastModified = '2026-03-24T00:00:00.000Z';
const caseStudyLastModified = '2026-03-24T00:00:00.000Z';
const locationLastModified = '2026-03-24T00:00:00.000Z';

function withTrailingSlash(route) {
  if (!route || route === '/') {
    return `${baseUrl}/`;
  }

  return `${baseUrl}${route.endsWith('/') ? route : `${route}/`}`;
}

function toIsoDate(dateString) {
  const parsed = new Date(dateString);
  return Number.isNaN(parsed.getTime()) ? staticLastModified : parsed.toISOString();
}

export default async function sitemap() {
  const locationPages = await getLocationPages();

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
    '/locations',
    '/privacy-policy',
    '/terms-and-conditions',
  ].map((route) => ({
    url: withTrailingSlash(route),
    lastModified: staticLastModified,
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1 : 0.8,
  }));

  const caseStudyEntries = caseStudies.map((study) => ({
    url: withTrailingSlash(`/case-studies/${study.slug}`),
    lastModified: study.updatedAt || caseStudyLastModified,
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  const blogPostEntries = blogPosts.map((post) => ({
    url: withTrailingSlash(`/blog/${post.slug}`),
    lastModified: toIsoDate(post.date),
    changeFrequency: 'monthly',
    priority: 0.6,
  }));

  const locationEntries = locationPages.map((location) => ({
    url: withTrailingSlash(location.href),
    lastModified: location.updatedAt || locationLastModified,
    changeFrequency: 'monthly',
    priority: 0.75,
  }));

  return [...staticPages, ...locationEntries, ...caseStudyEntries, ...blogPostEntries];
}
