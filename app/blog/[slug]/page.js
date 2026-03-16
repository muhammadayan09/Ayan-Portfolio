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
      {/* Page Header — About Us Style */}
      <section className="page-header">
        <div className="page-header-glow" />
        <div className="container">
          <span className="section-label">{post.category}</span>
          <h1 className="page-title">{post.title}</h1>
          <p className="page-subtitle">
            📅 {post.date} &nbsp;&bull;&nbsp; ⏱️ {post.readTime}
          </p>
        </div>
      </section>

      {/* Full Width Banner Image */}
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

      {/* Content Body */}
      <section className="section pt-0">
        <div className="container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div className="blog-content-body glass-card" style={{ padding: '60px 80px' }}>
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
          </div>

          {/* Comments Section */}
          <div className="comments-section glass-card" style={{ marginTop: '40px', padding: '50px 80px' }}>
            <h3 style={{ fontSize: '2rem', marginBottom: '32px', fontFamily: "'Space Grotesk', sans-serif", color: '#fff' }}>Join the Discussion</h3>
            
            <div className="existing-comments" style={{ marginBottom: '40px' }}>
              <div className="comment-card" style={{ padding: '24px', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '16px', marginBottom: '16px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
                  <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: post.color, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', fontSize: '1.2rem', color: '#fff' }}>
                    S
                  </div>
                  <div>
                    <h4 style={{ margin: 0, fontSize: '1.1rem', color: '#fff', fontWeight: 600 }}>Sarah Jenkins</h4>
                    <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>2 days ago</span>
                  </div>
                </div>
                <p style={{ margin: 0, color: 'var(--text-secondary)', lineHeight: 1.7, fontSize: '1.05rem' }}>This is an incredibly detailed and brilliantly written piece. The insights on modern architecture and performance optimization are exactly what our agency has been trying to implement. Bookmarking this for my engineering team. Thanks for sharing!</p>
              </div>
            </div>

            <form onSubmit={handleCommentSubmit} className="comment-form">
              <h4 style={{ marginBottom: '20px', color: '#fff', fontSize: '1.2rem', fontWeight: 600 }}>Leave a comment</h4>
              {submitted && (
                <div style={{ padding: '16px 20px', background: 'rgba(71, 162, 72, 0.15)', border: '1px solid #47A248', color: '#47A248', borderRadius: '12px', marginBottom: '24px', fontWeight: 500, fontSize: '1.05rem', display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <span>✅</span> Thank you! Your comment is under review and will be published shortly.
                </div>
              )}
              <div style={{ marginBottom: '20px' }}>
                <input 
                  type="text" 
                  placeholder="Your Full Name" 
                  value={commentName}
                  onChange={(e) => setCommentName(e.target.value)}
                  style={{ width: '100%', padding: '16px 24px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', color: '#fff', fontSize: '1.05rem', outline: 'none', transition: 'border-color 0.3s ease' }} 
                  onFocus={(e) => e.target.style.borderColor = post.color}
                  onBlur={(e) => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
                  required 
                />
              </div>
              <div style={{ marginBottom: '24px' }}>
                <textarea 
                  placeholder="Share your thoughts or ask a question..." 
                  value={commentText}
                  onChange={(e) => setCommentText(e.target.value)}
                  style={{ width: '100%', padding: '20px 24px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', color: '#fff', fontSize: '1.05rem', outline: 'none', minHeight: '160px', resize: 'vertical', transition: 'border-color 0.3s ease' }} 
                  onFocus={(e) => e.target.style.borderColor = post.color}
                  onBlur={(e) => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
                  required 
                />
              </div>
              <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center', padding: '16px', fontSize: '1.1rem', borderRadius: '12px' }}>
                Post Comment
              </button>
            </form>
          </div>

          <div style={{ marginTop: '50px', textAlign: 'center' }}>
            <Link href="/blog" className="btn btn-outline" style={{ display: 'inline-flex', padding: '14px 32px', fontSize: '1.05rem' }}>
              ← Return to Articles
            </Link>
          </div>
        </div>
      </section>

      <style jsx>{`
        /* Page Header — matches About Us exactly */
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
          font-family: 'Space Grotesk', sans-serif;
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

        /* Blog Banner */
        .blog-banner {
          width: 100%;
          height: 550px;
          border-radius: 24px;
          overflow: hidden;
          border: 1px solid rgba(255, 255, 255, 0.05);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.5);
        }

        @media (max-width: 768px) {
          .blog-banner {
            height: 280px;
            border-radius: 16px;
          }
        }
      `}</style>
    </article>
  );
}
