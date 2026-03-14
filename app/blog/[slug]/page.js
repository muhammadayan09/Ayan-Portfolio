import Link from 'next/link';
import { notFound } from 'next/navigation';
import { blogPosts } from '../../data/blog';

export function generateMetadata({ params }) {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) {
    return {
      title: 'Post Not Found | Muhammad Ayan',
    };
  }
  return {
    title: `${post.title} | Muhammad Ayan`,
    description: post.excerpt,
  };
}

export default function BlogPostPage({ params }) {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="blog-post-dynamic">
      {/* Dynamic Header */}
      <section className="page-header" style={{ paddingBottom: '40px' }}>
        <div className="page-header-glow" style={{ background: `${post.color}20` }} />
        <div className="container" style={{ maxWidth: '800px', textAlign: 'left', margin: '0 auto' }}>
          <div className="blog-meta-top" style={{ marginBottom: '20px', display: 'flex', gap: '12px', alignItems: 'center' }}>
            <span style={{ color: post.color, background: `${post.color}15`, padding: '6px 14px', borderRadius: '40px', fontSize: '0.85rem', fontWeight: 600 }}>
              {post.category}
            </span>
            <span style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>{post.date}</span>
            <span style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>• {post.readTime}</span>
          </div>
          <h1 className="page-title text-left" style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', lineHeight: 1.2, marginBottom: '24px' }}>
            {post.title}
          </h1>
          <p className="page-subtitle text-left" style={{ fontSize: '1.2rem', color: 'var(--text-secondary)' }}>
            {post.excerpt}
          </p>
        </div>
      </section>

      {/* Content Body */}
      <section className="section pt-0">
        <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div className="blog-content-body glass-card" style={{ padding: '40px' }}>
            {/* The actual premium content injected safely */}
            <div dangerouslySetInnerHTML={{ __html: post.content.replace(/\n\n/g, '</p><p>').replace(/## (.*)/g, '<h2>$1</h2>') }} />
          </div>

          <div style={{ marginTop: '40px', textAlign: 'center' }}>
            <Link href="/blog" className="btn btn-secondary" style={{ display: 'inline-block' }}>
              ← Back to Blog
            </Link>
          </div>
        </div>
      </section>

    </article>
  );
}
