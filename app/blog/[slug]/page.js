import Link from 'next/link';
import { notFound } from 'next/navigation';
import { blogPosts } from '../../data/blog';

export default function BlogPostPage({ params }) {
  const post = blogPosts.find((entry) => entry.slug === params.slug);

  if (!post) {
    notFound();
  }

  const pageUrl = `https://pilatuweb.netlify.app/blog/${params.slug}/`;
  const articleSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: 'https://pilatuweb.netlify.app/',
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Blog',
            item: 'https://pilatuweb.netlify.app/blog/',
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: post.title,
            item: pageUrl,
          },
        ],
      },
      {
        '@type': 'BlogPosting',
        headline: post.title,
        description: post.excerpt,
        datePublished: post.date,
        dateModified: post.date,
        articleSection: post.category,
        url: pageUrl,
        image: post.image ? [post.image] : undefined,
        author: {
          '@type': 'Organization',
          name: 'PilatuWeb',
        },
        publisher: {
          '@type': 'Organization',
          name: 'PilatuWeb',
        },
      },
    ],
  };

  return (
    <article className="blog-post-dynamic">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

      <section className="page-header">
        <div className="page-header-glow" />
        <div className="container">
          <span className="section-label">{post.category}</span>
          <h1 className="page-title">{post.title}</h1>
          <p className="page-subtitle">
            {post.date} • {post.readTime}
          </p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: '0', paddingBottom: '40px' }}>
        <div className="container" style={{ maxWidth: '1200px' }}>
          <div className="blog-banner">
            <img
              src={post.image || 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop'}
              alt={post.title}
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            />
          </div>
        </div>
      </section>

      <section className="section pt-0">
        <div className="container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div className="blog-content-body glass-card" style={{ padding: '60px 80px' }}>
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
          </div>

          <div className="reading-note glass-card" style={{ marginTop: '40px', padding: '40px 48px' }}>
            <h2>Need help applying this on your website?</h2>
            <p>
              We build fast, crawlable websites with better architecture, stronger technical SEO, and content systems that are easier for Google to discover and index.
            </p>
            <div className="reading-note-actions">
              <Link href="/contact" className="btn btn-primary">
                Talk About Your Project
              </Link>
              <Link href="/blog" className="btn btn-outline">
                Back to Articles
              </Link>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .page-header {
          padding: 140px 0 30px;
          text-align: center;
          position: relative;
          overflow: hidden;
        }

        .page-header-glow {
          position: absolute;
          top: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 600px;
          height: 400px;
          background: radial-gradient(circle, rgba(108, 99, 255, 0.12), transparent 70%);
          pointer-events: none;
        }

        .page-title {
          font-family: var(--font-display), sans-serif;
          font-size: clamp(2.2rem, 4.5vw, 3.5rem);
          font-weight: 800;
          margin-bottom: 16px;
        }

        .page-subtitle {
          font-size: 1.05rem;
          color: var(--text-secondary);
          max-width: 550px;
          margin: 0 auto;
          line-height: 1.8;
        }

        .blog-banner {
          width: 100%;
          height: 550px;
          border-radius: 24px;
          overflow: hidden;
          border: 1px solid rgba(255, 255, 255, 0.05);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.5);
        }

        .reading-note h2 {
          font-family: var(--font-display), sans-serif;
          font-size: 1.8rem;
          margin-bottom: 12px;
        }

        .reading-note p {
          color: var(--text-secondary);
          line-height: 1.8;
          margin-bottom: 24px;
        }

        .reading-note-actions {
          display: flex;
          gap: 16px;
          flex-wrap: wrap;
        }

        @media (max-width: 768px) {
          .blog-banner {
            height: 280px;
            border-radius: 16px;
          }

          .blog-content-body {
            padding: 32px 24px !important;
          }

          .reading-note {
            padding: 28px 24px !important;
          }
        }
      `}</style>
    </article>
  );
}
