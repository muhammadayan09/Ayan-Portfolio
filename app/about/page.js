'use client';

import Link from 'next/link';



const values = [
  { icon: '🎯', title: 'Pixel Perfect', desc: 'Every element is crafted with attention to detail and design precision.' },
  { icon: '⚡', title: 'Performance First', desc: 'Speed and optimization are at the core of every project we deliver.' },
  { icon: '🤝', title: 'Client Focused', desc: 'Your success is my priority — I listen, plan, and deliver beyond expectations.' },
  { icon: '🔄', title: 'Continuous Learning', desc: 'Technology evolves fast and so do I — always learning, always growing.' },
];

export default function About() {
  return (
    <>
      {/* Page Header */}
      <section className="page-header">
        <div className="page-header-glow" />
        <div className="container">
          <span className="section-label">Get To Know Me</span>
          <h1 className="page-title">About <span className="gradient-text">Muhammad Ayan</span></h1>
          <p className="page-subtitle">
            An elite team of digital craftsmen dedicated to building sophisticated, high-performance web experiences that dominate your industry.
          </p>
        </div>
      </section>

      {/* Intro Section */}
      <section className="section">
        <div className="container">
          <div className="about-intro-grid">
            <div className="about-image-col">
              <div className="about-image-card glass-card">
                <div className="about-avatar">
                  <img src="/muhammad-ayan.png" alt="Muhammad Ayan" className="about-avatar-img" />
                </div>
                <div className="about-name-card">
                  <h3>Muhammad Ayan</h3>
                  <p>Frontend Developer</p>
                </div>
                <div className="about-quick-facts">
                  <div className="quick-fact">
                    <span className="fact-icon">📍</span>
                    <span>India</span>
                  </div>
                  <div className="quick-fact">
                    <span className="fact-icon">💼</span>
                    <span>Company Owner</span>
                  </div>
                  <div className="quick-fact">
                    <span className="fact-icon">🎓</span>
                    <span>Self-Taught</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="about-text-col">
              <h2 className="about-heading">
                Transforming Ambitious Brands Through <span className="gradient-text">Uncompromising Digital Execution</span>
              </h2>
              <p className="about-para">
                We are Muhammad Ayan, a boutique digital agency obsessed with pushing the boundaries of what's possible on the web. We don't just build websites; we architect high-performance digital engines designed to scale your business, captivate your audience, and drive measurable ROI.
              </p>
              <p className="about-para">
                Our expertise spans the entire modern digital ecosystem. From engineering lightning-fast, highly interactive frontend architectures with Next.js and React, to deploying conversion-optimized Shopify and WordPress platforms, we bring a meticulous, engineering-first approach to every project we touch. 
              </p>
              <p className="about-para">
                We believe that true digital excellence requires a perfect symphony of stunning aesthetics, robust technical architecture, and ruthless performance optimization. Whether partnering with ambitious startups or established enterprises, our mission remains the same: to deliver pixel-perfect, SEO-optimized masterpieces that elevate your brand far above the competition.
              </p>
              <div className="about-actions">
                <Link href="https://wa.me/917983505861" target="_blank" rel="noopener noreferrer" className="btn btn-primary">Contact Us</Link>
                <Link href="/skills" className="btn btn-outline">View Skills</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section values-section" style={{ padding: '30px 0' }}>
        <div className="container">
          <div className="section-header-center">
            <span className="section-label">Our Core Principles</span>
            <h2 className="section-title">The Standards We Live By</h2>
          </div>
          <div className="values-grid">
            {values.map((v, i) => (
              <div key={i} className="value-card glass-card">
                <span className="value-icon">{v.icon}</span>
                <h3 className="value-title">{v.title}</h3>
                <p className="value-desc">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      <style jsx>{`
        /* Page Header */
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

        /* Intro Grid */
        .about-intro-grid {
          display: grid;
          grid-template-columns: 1fr 1.5fr;
          gap: 60px;
          align-items: start;
        }

        .about-image-card {
          text-align: center;
          padding: 30px 32px;
        }

        .about-avatar {
          width: 140px;
          height: 140px;
          border-radius: 50%;
          border: 3px solid var(--primary);
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 20px;
          box-shadow: 0 0 40px var(--primary-glow);
          overflow: hidden;
          background: var(--bg-card);
        }

        .about-avatar-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .about-name-card h3 {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 1.3rem;
          font-weight: 700;
          margin-bottom: 4px;
        }

        .about-name-card p {
          color: var(--primary-light);
          font-size: 0.9rem;
          font-weight: 500;
          margin-bottom: 24px;
        }

        .about-quick-facts {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .quick-fact {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 0.9rem;
          color: var(--text-secondary);
          padding: 10px 16px;
          border-radius: var(--border-radius-sm);
          background: var(--bg-secondary);
        }

        .about-heading {
          font-family: 'Space Grotesk', sans-serif;
          font-size: clamp(1.5rem, 3vw, 2rem);
          font-weight: 700;
          line-height: 1.3;
          margin-bottom: 24px;
        }

        .about-para {
          font-size: 1rem;
          color: var(--text-secondary);
          line-height: 1.85;
          margin-bottom: 16px;
        }

        .about-actions {
          display: flex;
          gap: 16px;
          margin-top: 28px;
        }

        /* Values */
        .section-header-center {
          text-align: center;
          margin-bottom: 30px;
        }

        .section-header-center .section-label {
          justify-content: center;
        }

        .values-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
        }

        .value-card {
          text-align: center;
          padding: 30px 20px;
        }

        .value-icon {
          font-size: 2.5rem;
          display: block;
          margin-bottom: 16px;
        }

        .value-title {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 1rem;
          font-weight: 600;
          margin-bottom: 10px;
        }

        .value-desc {
          font-size: 0.85rem;
          color: var(--text-secondary);
          line-height: 1.7;
        }

        /* Timeline */
        .timeline {
          position: relative;
          max-width: 700px;
          margin: 0 auto;
        }

        .timeline-line {
          position: absolute;
          top: 0;
          bottom: 0;
          left: 50%;
          width: 2px;
          background: var(--gradient-primary);
          transform: translateX(-50%);
        }

        .timeline-item {
          position: relative;
          width: 50%;
          padding: 20px;
        }

        .timeline-item.left {
          padding-right: 50px;
        }

        .timeline-item.right {
          margin-left: 50%;
          padding-left: 50px;
        }

        .timeline-dot {
          position: absolute;
          width: 14px;
          height: 14px;
          border-radius: 50%;
          background: var(--primary);
          box-shadow: 0 0 20px var(--primary-glow);
          top: 32px;
          z-index: 2;
        }

        .timeline-item.left .timeline-dot {
          right: -7px;
        }

        .timeline-item.right .timeline-dot {
          left: -7px;
        }

        .timeline-card {
          padding: 24px;
        }

        .timeline-card:hover {
          transform: translateY(-2px);
        }

        .timeline-year {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 0.82rem;
          font-weight: 700;
          color: var(--accent);
          letter-spacing: 1px;
        }

        .timeline-title {
          font-size: 1rem;
          font-weight: 600;
          margin: 8px 0;
        }

        .timeline-desc {
          font-size: 0.88rem;
          color: var(--text-secondary);
          line-height: 1.7;
        }

        @media (max-width: 768px) {
          .about-intro-grid {
            grid-template-columns: 1fr;
            gap: 32px;
          }

          .values-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .timeline-line {
            left: 20px;
          }

          .timeline-item,
          .timeline-item.left,
          .timeline-item.right {
            width: 100%;
            margin-left: 0;
            padding-left: 60px;
            padding-right: 0;
          }

          .timeline-item.left .timeline-dot,
          .timeline-item.right .timeline-dot {
            left: 13px;
            right: auto;
          }
        }
      `}</style>
    </>
  );
}
