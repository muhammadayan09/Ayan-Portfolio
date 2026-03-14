'use client';

import Link from 'next/link';

const blogPosts = [
  {
    id: 1,
    title: 'How to Build a Responsive Website from Scratch in 2024',
    excerpt: 'Learn the fundamentals of building a responsive website using HTML, CSS, and modern best practices for a seamless multi-device experience.',
    category: 'Web Development',
    date: 'March 5, 2024',
    readTime: '8 min read',
    color: '#6C63FF',
  },
  {
    id: 2,
    title: 'Top 10 WordPress Plugins Every Developer Should Use',
    excerpt: 'A curated list of must-have WordPress plugins for security, performance, SEO, and functionality that every developer needs in their toolkit.',
    category: 'WordPress',
    date: 'February 20, 2024',
    readTime: '6 min read',
    color: '#21759B',
  },
  {
    id: 3,
    title: 'SEO in 2024: Complete Guide for Beginners',
    excerpt: 'Everything you need to know about SEO in 2024 — from keyword research and on-page optimization to technical SEO and link building strategies.',
    category: 'SEO',
    date: 'February 10, 2024',
    readTime: '12 min read',
    color: '#47A248',
  },
  {
    id: 4,
    title: 'Angular vs React vs Next.js: Which Should You Choose?',
    excerpt: 'A deep comparison of three popular frontend frameworks to help you pick the right tool for your next project based on your specific needs.',
    category: 'Frameworks',
    date: 'January 28, 2024',
    readTime: '10 min read',
    color: '#DD0031',
  },
  {
    id: 5,
    title: 'Getting Started with Shopify Development',
    excerpt: 'A beginner-friendly guide to Shopify development — understanding Liquid templating, theme structure, and building your first custom store.',
    category: 'Shopify',
    date: 'January 15, 2024',
    readTime: '9 min read',
    color: '#96BF48',
  },
  {
    id: 6,
    title: 'CSS Grid vs Flexbox: When to Use Which?',
    excerpt: 'Understanding the differences between CSS Grid and Flexbox, with practical examples showing when and how to use each layout system.',
    category: 'CSS',
    date: 'January 5, 2024',
    readTime: '7 min read',
    color: '#1572B6',
  },
];

const categories = ['All', 'Web Development', 'WordPress', 'SEO', 'Frameworks', 'Shopify', 'CSS'];

export default function Blog() {
  return (
    <>
      {/* Page Header */}
      <section className="page-header">
        <div className="page-header-glow" />
        <div className="container">
          <span className="section-label">Insights & Articles</span>
          <h1 className="page-title">My <span className="gradient-text">Blog</span></h1>
          <p className="page-subtitle">
            Sharing knowledge, tutorials, and insights on web development, WordPress, SEO, and more.
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="categories-section">
        <div className="container">
          <div className="categories-scroll">
            {categories.map((cat) => (
              <button key={cat} className={`cat-btn ${cat === 'All' ? 'cat-active' : ''}`}>
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="section">
        <div className="container">
          <div className="blog-grid">
            {blogPosts.map((post) => (
              <article key={post.id} className="blog-card glass-card">
                <div className="blog-card-header">
                  <div className="blog-thumb" style={{ background: `linear-gradient(135deg, ${post.color}30, ${post.color}10)` }}>
                    <span className="blog-thumb-icon" style={{ color: post.color }}>✍️</span>
                  </div>
                </div>
                <div className="blog-card-body">
                  <div className="blog-meta">
                    <span className="blog-category" style={{ color: post.color, background: `${post.color}15` }}>{post.category}</span>
                    <span className="blog-date">{post.date}</span>
                  </div>
                  <h2 className="blog-title">{post.title}</h2>
                  <p className="blog-excerpt">{post.excerpt}</p>
                  <div className="blog-footer">
                    <span className="blog-read-time">📖 {post.readTime}</span>
                    <span className="blog-read-more" style={{ color: post.color }}>Read More →</span>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="blog-info">
            <div className="glass-card blog-info-card">
              <span className="blog-info-icon">📝</span>
              <h3>More Articles Coming Soon!</h3>
              <p>I regularly write about web development, SEO, and digital solutions. Stay tuned for more in-depth tutorials and insights.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="section newsletter-section">
        <div className="container">
          <div className="newsletter-card glass-card">
            <div className="newsletter-bg-glow" />
            <div className="newsletter-content">
              <span className="newsletter-icon">📬</span>
              <h2>Never Miss an Update</h2>
              <p>Subscribe to our newsletter for new posts, frontend tutorials, and digital solutions delivered straight to your inbox.</p>
              <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
                <div className="input-group">
                  <input type="email" placeholder="Enter your email address..." className="newsletter-input" required />
                  <button className="newsletter-submit" type="submit">
                    Subscribe
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
                  </button>
                </div>
                <p className="newsletter-promise">🔒 No spam. Unsubscribe at any time.</p>
              </form>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
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

        /* Categories */
        .categories-section {
          padding: 20px 0;
        }

        .categories-scroll {
          display: flex;
          gap: 10px;
          overflow-x: auto;
          padding-bottom: 8px;
          justify-content: center;
          flex-wrap: wrap;
        }

        .cat-btn {
          padding: 8px 20px;
          border-radius: 50px;
          border: 1px solid var(--border);
          background: transparent;
          color: var(--text-secondary);
          font-size: 0.85rem;
          font-weight: 500;
          cursor: pointer;
          transition: var(--transition);
          white-space: nowrap;
          font-family: 'Inter', sans-serif;
        }

        .cat-btn:hover,
        .cat-active {
          background: var(--primary);
          border-color: var(--primary);
          color: white;
        }

        /* Blog Grid */
        .blog-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 28px;
          margin-bottom: 48px;
        }

        .blog-card {
          padding: 0;
          overflow: hidden;
          cursor: pointer;
        }

        .blog-card:hover {
          transform: translateY(-4px);
        }

        .blog-card-header {
          overflow: hidden;
        }

        .blog-thumb {
          height: 180px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .blog-thumb-icon {
          font-size: 3rem;
          opacity: 0.8;
        }

        .blog-card-body {
          padding: 24px 28px 28px;
        }

        .blog-meta {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 14px;
        }

        .blog-category {
          padding: 4px 12px;
          border-radius: 20px;
          font-size: 0.75rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .blog-date {
          font-size: 0.8rem;
          color: var(--text-muted);
        }

        .blog-title {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 1.15rem;
          font-weight: 700;
          line-height: 1.4;
          margin-bottom: 12px;
          color: var(--text-primary);
        }

        .blog-excerpt {
          font-size: 0.88rem;
          color: var(--text-secondary);
          line-height: 1.7;
          margin-bottom: 20px;
        }

        .blog-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .blog-read-time {
          font-size: 0.82rem;
          color: var(--text-muted);
        }

        .blog-read-more {
          font-size: 0.85rem;
          font-weight: 600;
          cursor: pointer;
          transition: var(--transition);
        }

        .blog-read-more:hover {
          opacity: 0.8;
        }

        /* Info */
        .blog-info {
          text-align: center;
        }

        .blog-info-card {
          display: inline-block;
          padding: 30px 48px;
          max-width: 500px;
        }

        .blog-info-icon {
          font-size: 2.5rem;
          display: block;
          margin-bottom: 16px;
        }

        .blog-info-card h3 {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 1.2rem;
          font-weight: 700;
          margin-bottom: 10px;
        }

        .blog-info-card p {
          font-size: 0.9rem;
          color: var(--text-secondary);
          line-height: 1.7;
        }

        /* Newsletter */
        .newsletter-section {
          padding-bottom: 80px;
        }

        .newsletter-card {
          position: relative;
          padding: 60px 40px;
          border-radius: 24px;
          text-align: center;
          overflow: hidden;
          background: linear-gradient(145deg, rgba(20, 20, 25, 0.8), rgba(25, 25, 30, 0.9));
          border: 1px solid rgba(255, 255, 255, 0.05);
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.4);
        }

        .newsletter-bg-glow {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 800px;
          height: 800px;
          background: radial-gradient(circle, rgba(108, 99, 255, 0.15) 0%, transparent 60%);
          pointer-events: none;
        }

        .newsletter-content {
          position: relative;
          z-index: 1;
          max-width: 600px;
          margin: 0 auto;
        }

        .newsletter-icon {
          font-size: 3.5rem;
          display: block;
          margin-bottom: 20px;
          animation: float 6s ease-in-out infinite;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }

        .newsletter-content h2 {
          font-family: 'Space Grotesk', sans-serif;
          font-size: clamp(1.8rem, 4vw, 2.5rem);
          font-weight: 800;
          margin-bottom: 16px;
          background: linear-gradient(to right, #fff, #a5b4fc);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .newsletter-content p {
          color: var(--text-secondary);
          font-size: 1.05rem;
          line-height: 1.7;
          margin-bottom: 32px;
        }

        .newsletter-form {
          width: 100%;
        }

        .input-group {
          position: relative;
          display: flex;
          background: rgba(0, 0, 0, 0.3);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 50px;
          padding: 6px;
          transition: border-color 0.3s ease, box-shadow 0.3s ease;
        }

        .input-group:focus-within {
          border-color: rgba(108, 99, 255, 0.5);
          box-shadow: 0 0 20px rgba(108, 99, 255, 0.2);
        }

        .newsletter-input {
          flex: 1;
          background: transparent;
          border: none;
          padding: 16px 24px;
          color: #fff;
          font-size: 1rem;
          outline: none;
        }

        .newsletter-input::placeholder {
          color: rgba(255, 255, 255, 0.4);
        }

        .newsletter-submit {
          display: flex;
          align-items: center;
          gap: 8px;
          background: linear-gradient(135deg, #6C63FF, #8B5CF6);
          color: #fff;
          border: none;
          padding: 12px 28px;
          border-radius: 40px;
          font-family: 'Space Grotesk', sans-serif;
          font-weight: 700;
          font-size: 1rem;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 4px 15px rgba(108, 99, 255, 0.3);
        }

        .newsletter-submit:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(108, 99, 255, 0.5);
        }

        .newsletter-promise {
          font-size: 0.8rem !important;
          color: var(--text-muted) !important;
          margin-top: 16px !important;
          margin-bottom: 0 !important;
        }

        @media (max-width: 768px) {
          .blog-grid {
            grid-template-columns: 1fr;
          }

          .categories-scroll {
            justify-content: flex-start;
          }

          .newsletter-card {
            padding: 40px 20px;
          }

          .input-group {
            flex-direction: column;
            border-radius: 16px;
            padding: 12px;
            gap: 12px;
          }

          .newsletter-input {
            padding: 12px;
            text-align: center;
          }

          .newsletter-submit {
            justify-content: center;
            padding: 16px;
          }
        }
      `}</style>
    </>
  );
}
