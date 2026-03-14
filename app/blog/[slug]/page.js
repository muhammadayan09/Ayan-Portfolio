'use client';

import Link from 'next/link';
import { notFound } from 'next/navigation';
import { useState } from 'react';
import { blogPosts } from '../../data/blog';

export default function BlogPostPage({ params }) {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  const [commentName, setCommentName] = useState('');
  const [commentText, setCommentText] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (commentName && commentText) {
      setSubmitted(true);
      setCommentName('');
      setCommentText('');
      setTimeout(() => setSubmitted(false), 5000);
    }
  };

  return (
    <article className="blog-post-dynamic">
      {/* Page Header (About Us Style) */}
      <section className="page-header" style={{ paddingBottom: '60px' }}>
        <div className="page-header-glow" style={{ background: `${post.color}15` }} />
        <div className="container" style={{ maxWidth: '1000px', textAlign: 'center' }}>
          <div className="blog-meta-top" style={{ marginBottom: '24px', display: 'flex', gap: '12px', alignItems: 'center', justifyContent: 'center' }}>
            <span style={{ color: post.color, background: `${post.color}15`, padding: '8px 16px', borderRadius: '40px', fontSize: '0.9rem', fontWeight: 600, letterSpacing: '1px', textTransform: 'uppercase' }}>
              {post.category}
            </span>
          </div>
          <h1 className="page-title" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', lineHeight: 1.1, marginBottom: '24px' }}>
            {post.title}
          </h1>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', color: 'var(--text-muted)', fontSize: '1.05rem', fontWeight: 500 }}>
            <span>📅 {post.date}</span>
            <span>•</span>
            <span>⏱️ {post.readTime}</span>
          </div>
        </div>
      </section>

      {/* Banner Image Section */}
      <section className="section" style={{ paddingTop: '0', paddingBottom: '40px' }}>
        <div className="container" style={{ maxWidth: '1100px' }}>
          <div className="blog-banner glass-card" style={{ padding: '0', overflow: 'hidden', borderRadius: '24px', border: `1px solid ${post.color}30` }}>
            <img 
              src={post.image || 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop'} 
              alt={post.title} 
              style={{ width: '100%', height: '500px', objectFit: 'cover', display: 'block' }} 
            />
          </div>
        </div>
      </section>

      {/* Content Body */}
      <section className="section pt-0">
        <div className="container" style={{ maxWidth: '850px', margin: '0 auto' }}>
          <div className="blog-content-body glass-card" style={{ padding: '50px 60px' }}>
            {/* The actual premium content injected safely */}
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
          </div>

          {/* Comments Section */}
          <div className="comments-section glass-card" style={{ marginTop: '40px', padding: '40px' }}>
            <h3 style={{ fontSize: '1.8rem', marginBottom: '24px', fontFamily: "'Space Grotesk', sans-serif" }}>Join the Discussion</h3>
            
            <div className="existing-comments" style={{ marginBottom: '40px' }}>
              <div className="comment-card" style={{ padding: '20px', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '12px', marginBottom: '16px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
                  <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: post.color, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', color: '#fff' }}>
                    S
                  </div>
                  <div>
                    <h4 style={{ margin: 0, fontSize: '1rem', color: '#fff' }}>Sarah Jenkins</h4>
                    <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>2 days ago</span>
                  </div>
                </div>
                <p style={{ margin: 0, color: 'var(--text-secondary)', lineHeight: 1.6 }}>Incredible depth in this article. The points on architecture and performance optimization are exactly what we've been trying to implement. Thanks for sharing!</p>
              </div>
            </div>

            <form onSubmit={handleCommentSubmit} className="comment-form">
              <h4 style={{ marginBottom: '16px', color: '#fff' }}>Leave a comment</h4>
              {submitted && (
                <div style={{ padding: '12px 16px', background: 'rgba(71, 162, 72, 0.15)', border: '1px solid #47A248', color: '#47A248', borderRadius: '8px', marginBottom: '20px', fontWeight: 500 }}>
                  Thank you! Your comment is under review and will be published shortly.
                </div>
              )}
              <div style={{ marginBottom: '16px' }}>
                <input 
                  type="text" 
                  placeholder="Your Name" 
                  value={commentName}
                  onChange={(e) => setCommentName(e.target.value)}
                  style={{ width: '100%', padding: '14px 20px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', color: '#fff', fontSize: '1rem', outline: 'none' }} 
                  required 
                />
              </div>
              <div style={{ marginBottom: '20px' }}>
                <textarea 
                  placeholder="Write your thoughts..." 
                  value={commentText}
                  onChange={(e) => setCommentText(e.target.value)}
                  style={{ width: '100%', padding: '16px 20px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', color: '#fff', fontSize: '1rem', outline: 'none', minHeight: '120px', resize: 'vertical' }} 
                  required 
                />
              </div>
              <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                Post Comment
              </button>
            </form>
          </div>

          <div style={{ marginTop: '40px', textAlign: 'center' }}>
            <Link href="/blog" className="btn btn-outline" style={{ display: 'inline-flex', padding: '12px 28px' }}>
              ← Return to Articles
            </Link>
          </div>
        </div>
      </section>

    </article>
  );
}
