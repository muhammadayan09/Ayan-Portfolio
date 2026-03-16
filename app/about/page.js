'use client';

import Link from 'next/link';



const values = [
  { icon: '🎯', title: 'Pixel Perfect', desc: 'Every element is crafted with attention to detail and design precision.' },
  { icon: '⚡', title: 'Performance First', desc: 'Speed and optimization are at the core of every project we deliver.' },
  { icon: '🤝', title: 'Client Focused', desc: 'Your success is my priority — I listen, plan, and deliver beyond expectations.' },
  { icon: '🔄', title: 'Continuous Learning', desc: 'Technology evolves fast and so do I — always learning, always growing.' },
];

const whyChoose = [
  { icon: '🏆', title: '50+ Projects Delivered', desc: 'From startups to established businesses, we have a proven track record of shipping high-quality digital products on time.' },
  { icon: '💡', title: 'Strategy-Driven Design', desc: 'Every design decision is backed by data and strategy — not just aesthetics. We build for conversion and engagement.' },
  { icon: '🛡️', title: 'Ongoing Support', desc: "Our relationship doesn't end at launch. We provide continuous maintenance, updates, and growth support." },
  { icon: '🌍', title: 'Global Clientele', desc: "We've worked with clients across the UK, UAE, US, and India — bringing world-class standards to every project." },
  { icon: '📈', title: 'SEO & Performance Obsessed', desc: 'Every site we build is optimized for search engines, fast load times, and mobile-first responsiveness.' },
  { icon: '🔧', title: 'Full-Stack Expertise', desc: 'From frontend magic with React & Next.js to backend systems with WordPress & Shopify — we cover the full stack.' },
];

const processSteps = [
  { num: '01', title: 'Discovery & Strategy', desc: 'We dive deep into your brand, audience, and goals to create a tailored digital strategy.', color: '#6C63FF' },
  { num: '02', title: 'Design & Prototype', desc: 'Pixel-perfect designs are crafted and prototyped, ensuring every detail matches your vision.', color: '#00D4AA' },
  { num: '03', title: 'Development & Testing', desc: 'Clean, performant code is written and rigorously tested across devices and browsers.', color: '#FF6B6B' },
  { num: '04', title: 'Launch & Growth', desc: 'We deploy, monitor, and optimize — ensuring your site scales with your business.', color: '#FFA726' },
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
                We are Muhammad Ayan, a boutique digital agency obsessed with pushing the boundaries of what&apos;s possible on the web. We don&apos;t just build websites; we architect high-performance digital engines designed to scale your business, captivate your audience, and drive measurable ROI.
              </p>
              <p className="about-para">
                Our expertise spans the entire modern digital ecosystem. From engineering lightning-fast, highly interactive frontend architectures with Next.js and React, to deploying conversion-optimized Shopify and WordPress platforms, we bring a meticulous, engineering-first approach to every project we touch.
              </p>
              <p className="about-para">
                We believe that true digital excellence requires a perfect symphony of stunning aesthetics, robust technical architecture, and ruthless performance optimization. Whether partnering with ambitious startups or established enterprises, our mission remains the same: to deliver pixel-perfect, SEO-optimized masterpieces that elevate your brand far above the competition.
              </p>
              <div className="about-actions">
                <Link href="https://wa.me/917983505861" target="_blank" rel="noopener noreferrer" className="btn btn-primary">Contact Us</Link>
                <Link href="/services" className="btn btn-outline">View Services</Link>
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

      {/* Why Choose Us */}
      <section className="section why-section">
        <div className="container">
          <div className="section-header-center">
            <span className="section-label">Our Edge</span>
            <h2 className="section-title">Why <span className="gradient-text">Choose Us</span></h2>
            <p className="section-subtitle" style={{ margin: '0 auto' }}>
              We don&apos;t just build websites — we build competitive advantages.
            </p>
          </div>
          <div className="why-grid">
            {whyChoose.map((item, i) => (
              <div key={i} className="why-card glass-card">
                <div className="why-icon-wrap">
                  <span className="why-icon">{item.icon}</span>
                </div>
                <h3 className="why-title">{item.title}</h3>
                <p className="why-desc">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="section process-section">
        <div className="container">
          <div className="section-header-center">
            <span className="section-label">How We Work</span>
            <h2 className="section-title">Our <span className="gradient-text">Process</span></h2>
            <p className="section-subtitle" style={{ margin: '0 auto' }}>
              A proven 4-step workflow that takes your project from concept to a revenue-generating digital asset.
            </p>
          </div>
          <div className="process-grid">
            {processSteps.map((step, i) => (
              <div key={i} className="process-card glass-card">
                <div className="process-num" style={{ color: step.color }}>{step.num}</div>
                <div className="process-line" style={{ background: `linear-gradient(to bottom, ${step.color}, transparent)` }} />
                <h3 className="process-title">{step.title}</h3>
                <p className="process-desc">{step.desc}</p>
              </div>
            ))}
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

        .about-intro-grid {
          display: grid;
          grid-template-columns: 1fr 1.5fr;
          gap: 60px;
          align-items: start;
        }

        .about-image-card { text-align: center; padding: 30px 32px; }

        .about-avatar {
          width: 140px; height: 140px; border-radius: 50%;
          border: 3px solid var(--primary);
          display: flex; align-items: center; justify-content: center;
          margin: 0 auto 20px;
          box-shadow: 0 0 40px var(--primary-glow);
          overflow: hidden; background: var(--bg-card);
        }

        .about-avatar-img { width: 100%; height: 100%; object-fit: cover; }

        .about-name-card h3 { font-family: 'Space Grotesk', sans-serif; font-size: 1.3rem; font-weight: 700; margin-bottom: 4px; }
        .about-name-card p { color: var(--primary-light); font-size: 0.9rem; font-weight: 500; margin-bottom: 24px; }

        .about-quick-facts { display: flex; flex-direction: column; gap: 12px; }
        .quick-fact { display: flex; align-items: center; gap: 10px; font-size: 0.9rem; color: var(--text-secondary); padding: 10px 16px; border-radius: var(--border-radius-sm); background: var(--bg-secondary); }

        .about-heading { font-family: 'Space Grotesk', sans-serif; font-size: clamp(1.5rem, 3vw, 2rem); font-weight: 700; line-height: 1.3; margin-bottom: 24px; }
        .about-para { font-size: 1rem; color: var(--text-secondary); line-height: 1.85; margin-bottom: 16px; }
        .about-actions { display: flex; gap: 16px; margin-top: 28px; }

        .section-header-center { text-align: center; margin-bottom: 30px; }
        .section-header-center .section-label { justify-content: center; }

        .values-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 20px; }
        .value-card { text-align: center; padding: 30px 20px; }
        .value-icon { font-size: 2.5rem; display: block; margin-bottom: 16px; }
        .value-title { font-family: 'Space Grotesk', sans-serif; font-size: 1rem; font-weight: 600; margin-bottom: 10px; }
        .value-desc { font-size: 0.85rem; color: var(--text-secondary); line-height: 1.7; }

        /* ===== WHY CHOOSE US ===== */
        .why-section { background: rgba(255,255,255,0.01); }

        .why-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }

        .why-card {
          padding: 36px 28px;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .why-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.3);
          border-color: rgba(108, 99, 255, 0.3);
        }

        .why-icon-wrap {
          width: 56px; height: 56px; border-radius: 16px;
          background: rgba(108, 99, 255, 0.1);
          display: flex; align-items: center; justify-content: center;
          margin-bottom: 20px;
        }

        .why-icon { font-size: 1.8rem; }
        .why-title { font-family: 'Space Grotesk', sans-serif; font-size: 1.15rem; font-weight: 700; margin-bottom: 12px; }
        .why-desc { font-size: 0.9rem; color: var(--text-secondary); line-height: 1.75; }

        /* ===== OUR PROCESS ===== */
        .process-section {
          background: linear-gradient(180deg, transparent, rgba(108, 99, 255, 0.04));
        }

        .process-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
        }

        .process-card {
          padding: 36px 24px;
          text-align: center;
          position: relative;
          overflow: hidden;
          transition: all 0.3s ease;
        }

        .process-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.3);
        }

        .process-num {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 3rem;
          font-weight: 900;
          opacity: 0.8;
          margin-bottom: 8px;
        }

        .process-line {
          width: 2px; height: 40px;
          margin: 0 auto 20px;
          border-radius: 2px;
        }

        .process-title { font-family: 'Space Grotesk', sans-serif; font-size: 1.1rem; font-weight: 700; margin-bottom: 12px; }
        .process-desc { font-size: 0.88rem; color: var(--text-secondary); line-height: 1.7; }

        @media (max-width: 1024px) {
          .why-grid { grid-template-columns: repeat(2, 1fr); }
          .process-grid { grid-template-columns: repeat(2, 1fr); }
        }

        @media (max-width: 768px) {
          .about-intro-grid { grid-template-columns: 1fr; gap: 32px; }
          .values-grid { grid-template-columns: repeat(2, 1fr); }
          .why-grid { grid-template-columns: 1fr; }
          .process-grid { grid-template-columns: repeat(2, 1fr); }
        }

        @media (max-width: 480px) {
          .process-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </>
  );
}
