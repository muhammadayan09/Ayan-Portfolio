import { blogPosts } from '../../data/blog';

export const dynamicParams = false;

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }) {
  const post = blogPosts.find((entry) => entry.slug === params.slug);
  const canonical = `https://pilatuweb.netlify.app/blog/${params.slug}/`;

  if (!post) {
    return {
      title: 'Blog | PilatuWeb',
      description: 'Latest insights on web development, SEO, and modern technologies.',
      alternates: {
        canonical,
      },
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  return {
    title: `${post.title} | PilatuWeb`,
    description: post.excerpt,
    alternates: {
      canonical,
    },
    openGraph: {
      title: `${post.title} | PilatuWeb`,
      description: post.excerpt,
      url: canonical,
      type: 'article',
      images: post.image ? [{ url: post.image }] : [],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${post.title} | PilatuWeb`,
      description: post.excerpt,
      images: post.image ? [post.image] : [],
    },
  };
}

export default function BlogSlugLayout({ children }) {
  return children;
}
