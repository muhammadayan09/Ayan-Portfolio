import { blogPosts } from '../../data/blog';

const blogMeta = {
  'architecting-high-performance-web-applications-2024': {
    title: 'High-Performance Web Applications Guide 2024',
    description: 'Learn how to build high-performance web applications in 2024 with modern frameworks, scalability, and speed optimization.',
  },
  'future-of-headless-decoupling-wordpress-limitless-scale': {
    title: 'Headless WordPress Guide | Scalable Websites',
    description: 'Discover headless WordPress architecture and how it enables scalable, fast, and flexible website development.',
  },
  'technical-seo-mastery-engineering-search-dominance': {
    title: 'Technical SEO Guide | Rank Higher on Google',
    description: 'Master technical SEO with strategies for speed, indexing, and optimization to improve rankings and organic traffic.',
  },
  'nextjs-14-vs-react-enterprise-shift-server-components': {
    title: 'Next.js vs React | Best Framework for 2024',
    description: 'Compare Next.js vs React and understand why businesses are shifting to server components for better performance.',
  },
  'headless-commerce-shopify-frictionless-checkouts': {
    title: 'Shopify Headless Commerce Guide | Fast Checkout',
    description: 'Learn how to build headless Shopify stores with fast checkout and better user experience for higher conversions.',
  },
  'modern-css-architecture-advanced-micro-animations': {
    title: 'Modern CSS Architecture & Micro Animations Guide',
    description: 'Explore modern CSS techniques and micro animations to create visually engaging and high-performance websites.',
  },
};

export async function generateMetadata({ params }) {
  const slug = (await params).slug;
  const meta = blogMeta[slug];
  if (meta) {
    return {
      title: meta.title,
      description: meta.description,
    };
  }
  return {
    title: 'Blog | PilatuWeb',
    description: 'Latest insights on web development, SEO, and modern technologies.',
  };
}

export default function BlogSlugLayout({ children }) {
  return children;
}
