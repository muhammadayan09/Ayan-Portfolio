'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function WordpressDevelopment() {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [hoveredStep, setHoveredStep] = useState(null);

  return (
    <>
      <section className="svc-hero">
        <div className="svc-hero-bg">
          <div className="svc-hero-orb svc-hero-orb-1" />
          <div className="svc-hero-orb svc-hero-orb-2" />
          <div className="svc-hero-orb svc-hero-orb-3" />
          <div className="svc-hero-grid" />
        </div>
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="svc-hero-badge">
            <span className="svc-hero-badge-dot" />
            WordPress Expert
          </div>
          <h1 className="svc-hero-title">
            Custom <span className="gradient-text">WordPress</span><br />
            Solutions
          </h1>
          <p className="svc-hero-desc">
            We build bespoke WordPress sites that are fast, secure, and easy to manage. 
            No bloated themes or plugins — just pure performance and custom CMS architectures.
          </p>
          <div className="svc-hero-actions">
            <Link href="/contact" className="btn btn-primary">Start Building →</Link>
            <a href="https://wa.me/917983505861" target="_blank" rel="noopener noreferrer" className="btn btn-outline">💬 Chat on WhatsApp</a>
          </div>
          <div className="svc-hero-stats">
            {[
              { num: '40+', label: 'Themes Built' },
              { num: '98/100', label: 'Speed Score' },
              { num: 'Zero', label: 'Security Breaches' },
            ].map((s, i) => (
              <div key={i} className="svc-hero-stat">
                <span className="svc-hero-stat-num">{s.num}</span>
                <span className="svc-hero-stat-label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="svc-features">
        <div className="container">
          <div className="svc-section-header">
            <span className="section-label">What We Do</span>
            <h2 className="svc-section-title">WordPress <span className="gradient-text">Capabilities</span></h2>
            <p className="svc-section-subtitle">Premium CMS development tailored for high-performance business applications.</p>
          </div>
          <div className="svc-features-grid">
            {[
              { icon: '🎨', title: 'Custom Theme Dev', desc: 'Bespoke, coded-from-scratch WordPress themes with zero bloat and maximum speed.', color: '#21759B' },
              { icon: '🔌', title: 'Plugin Engineering', desc: 'Custom plugin development for unique functionality that off-the-shelf solutions can&apos;t provide.', color: '#00D4AA' },
              { icon: '🛍️', title: 'WooCommerce Mastery', desc: 'Scalable eCommerce solutions built on WordPress for a flexible, powerful online store.', color: '#6C63FF' },
              { icon: '🔒', title: 'Security Hardening', desc: 'Enterprise-grade security configurations to protect your data and prevent vulnerabilities.', color: '#FFB800' },
              { icon: '⚡', title: 'Core Web Vitals', desc: 'Meticulous optimization ensuring your WordPress site passes every performance test.', color: '#FF6B6B' },
              { icon: '🛠️', title: 'Headless WordPress', desc: 'Combining the power of WordPress CMS with modern frontends like Next.js for ultimate performance.', color: '#F093FB' },
            ].map((item, i) => (
              <div key={i} className={`svc-feature-card ${hoveredCard === i ? 'active' : ''}`} onMouseEnter={() => setHoveredCard(i)} onMouseLeave={() => setHoveredCard(null)}>
                <div className="svc-feature-card-glow" style={{ background: `${item.color}15` }} />
                <div className="svc-feature-icon" style={{ background: `${item.color}15`, color: item.color }}>{item.icon}</div>
                <h3 className="svc-feature-title">{item.title}</h3>
                <p className="svc-feature-desc">{item.desc}</p>
                <div className="svc-feature-line" style={{ background: `linear-gradient(90deg, ${item.color}, transparent)` }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="svc-process">
        <div className="svc-process-bg" />
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="svc-section-header">
            <span className="section-label">How We Build</span>
            <h2 className="svc-section-title">Development <span className="gradient-text">Process</span></h2>
            <p className="svc-section-subtitle">A streamlined, transparent workflow for your custom WordPress project.</p>
          </div>
          <div className="svc-timeline">
            {[
              { num: '01', title: 'Plan & Wireframe', desc: 'We define the sitemap, content architecture, and functionality requirements for your CMS.', icon: '📋' },
              { num: '02', title: 'Theme Development', desc: 'Hand-coding your custom theme with clean PHP, CSS, and interactive JavaScript.', icon: '💻' },
              { num: '03', title: 'Content & Plugins', desc: 'Setting up custom post types, fields, and essential security & performance plugins.', icon: '⚙️' },
              { num: '04', title: 'Launch & Support', desc: 'Final testing, server optimization, SSL setup, and handover with training.', icon: '🚀' },
            ].map((step, i) => (
              <div key={i} className={`svc-timeline-item ${hoveredStep === i ? 'active' : ''}`} onMouseEnter={() => setHoveredStep(i)} onMouseLeave={() => setHoveredStep(null)}>
                <div className="svc-timeline-num-wrap">
                  <span className="svc-timeline-num">{step.num}</span>
                  <span className="svc-timeline-icon">{step.icon}</span>
                </div>
                <div className="svc-timeline-content">
                  <h3 className="svc-timeline-title">{step.title}</h3>
                  <p className="svc-timeline-desc">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="svc-features" style={{ paddingTop: '40px' }}>
        <div className="container">
          <div className="svc-section-header">
            <span className="section-label">Technologies</span>
            <h2 className="svc-section-title">WordPress <span className="gradient-text">Stack</span></h2>
          </div>
          <div className="svc-tech-grid">
            {[
              { name: 'PHP 8.x', icon: '🐘', color: '#777BB4' },
              { name: 'MySQL', icon: '🐬', color: '#00758F' },
              { name: 'WordPress', icon: '📝', color: '#21759B' },
              { name: 'WooCommerce', icon: '🛍️', color: '#96588A' },
              { name: 'Elementor', icon: '🎨', color: '#92278F' },
              { name: 'ACF Pro', icon: '🛠️', color: '#00D4AA' },
              { name: 'Redux', icon: '📦', color: '#764ABC' },
              { name: 'Cloudflare', icon: '☁️', color: '#F38020' },
            ].map((tech, i) => (
              <div key={i} className="svc-tech-item">
                <span className="svc-tech-icon">{tech.icon}</span>
                <span className="svc-tech-name">{tech.name}</span>
                <div className="svc-tech-glow" style={{ background: `${tech.color}20` }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="svc-cta">
        <div className="svc-cta-bg">
          <div className="svc-cta-orb svc-cta-orb-1" />
          <div className="svc-cta-orb svc-cta-orb-2" />
        </div>
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="svc-cta-content">
            <span className="section-label" style={{ justifyContent: 'center' }}>Get Started</span>
            <h2 className="svc-cta-title">
              Ready for a Better <span className="gradient-text">WordPress?</span>
            </h2>
            <p className="svc-cta-desc">
              Let&apos;s build a website that is as easy to manage as it is beautiful to look at.
            </p>
            <div className="svc-cta-actions">
              <Link href="/contact" className="svc-cta-btn-primary">
                Start My Build
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </Link>
              <a href="https://wa.me/917983505861" target="_blank" rel="noopener noreferrer" className="svc-cta-btn-secondary">
                💬 WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .svc-hero { position: relative; min-height: 90vh; display: flex; align-items: center; padding: 140px 0 80px; overflow: hidden; }
        .svc-hero-bg { position: absolute; inset: 0; pointer-events: none; }
        .svc-hero-orb { position: absolute; border-radius: 50%; filter: blur(120px); animation: floatOrb 8s ease-in-out infinite; }
        .svc-hero-orb-1 { width: 600px; height: 600px; background: rgba(33, 117, 155, 0.15); top: -200px; right: -100px; }
        .svc-hero-orb-2 { width: 400px; height: 400px; background: rgba(0, 212, 170, 0.1); bottom: -100px; left: -100px; animation-delay: 3s; }
        .svc-hero-orb-3 { width: 300px; height: 300px; background: rgba(108, 99, 255, 0.08); top: 50%; left: 50%; animation-delay: 5s; }
        .svc-hero-grid { position: absolute; inset: 0; background-image: linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px); background-size: 60px 60px; }
        @keyframes floatOrb { 0%, 100% { transform: translateY(0) scale(1); } 50% { transform: translateY(-30px) scale(1.05); } }
        .svc-hero-badge { display: inline-flex; align-items: center; gap: 10px; padding: 8px 20px; border-radius: 50px; background: var(--bg-glass); border: 1px solid var(--border); font-size: 0.82rem; font-weight: 600; color: var(--accent); margin-bottom: 28px; backdrop-filter: blur(10px); animation: fadeInUp 0.6s ease both; }
        .svc-hero-badge-dot { width: 8px; height: 8px; border-radius: 50%; background: var(--accent); box-shadow: 0 0 12px var(--accent); animation: pulse 2s ease infinite; }
        @keyframes pulse { 0%, 100% { opacity: 1; transform: scale(1); } 50% { opacity: 0.5; transform: scale(0.8); } }
        @keyframes fadeInUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
        .svc-hero-title { font-family: 'Space Grotesk', sans-serif; font-size: clamp(2.5rem, 5vw, 3.8rem); font-weight: 800; line-height: 1.15; margin-bottom: 20px; animation: fadeInUp 0.6s ease 0.1s both; }
        .svc-hero-desc { font-size: 1.05rem; color: var(--text-secondary); line-height: 1.8; max-width: 600px; margin-bottom: 32px; animation: fadeInUp 0.6s ease 0.2s both; }
        .svc-hero-actions { display: flex; gap: 16px; flex-wrap: wrap; margin-bottom: 48px; animation: fadeInUp 0.6s ease 0.3s both; }
        .svc-hero-stats { display: flex; gap: 40px; flex-wrap: wrap; animation: fadeInUp 0.6s ease 0.4s both; }
        .svc-hero-stat { display: flex; flex-direction: column; gap: 4px; }
        .svc-hero-stat-num { font-family: 'Space Grotesk', sans-serif; font-size: 1.8rem; font-weight: 800; background: linear-gradient(135deg, #fff, var(--accent-light)); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }
        .svc-hero-stat-label { font-size: 0.8rem; color: var(--text-muted); font-weight: 500; text-transform: uppercase; letter-spacing: 1px; }
        .svc-section-header { text-align: center; margin-bottom: 56px; }
        .svc-section-title { font-family: 'Space Grotesk', sans-serif; font-size: clamp(1.6rem, 3vw, 2.4rem); font-weight: 800; margin-bottom: 12px; }
        .svc-section-subtitle { font-size: 0.95rem; color: var(--text-secondary); max-width: 520px; margin: 0 auto; line-height: 1.7; }
        .svc-features { padding: 80px 0; }
        .svc-features-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; }
        .svc-feature-card { position: relative; padding: 32px 28px; border-radius: 20px; background: rgba(20, 20, 35, 0.6); border: 1px solid var(--border); backdrop-filter: blur(10px); transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275); overflow: hidden; cursor: default; }
        .svc-feature-card-glow { position: absolute; top: 0; left: 0; right: 0; height: 100%; border-radius: 20px; opacity: 0; transition: opacity 0.4s ease; }
        .svc-feature-card:hover .svc-feature-card-glow, .svc-feature-card.active .svc-feature-card-glow { opacity: 1; }
        .svc-feature-card:hover { transform: translateY(-8px); border-color: rgba(108, 99, 255, 0.3); box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3), 0 0 30px rgba(108, 99, 255, 0.08); }
        .svc-feature-icon { position: relative; z-index: 2; width: 56px; height: 56px; border-radius: 16px; display: flex; align-items: center; justify-content: center; font-size: 1.6rem; margin-bottom: 20px; transition: transform 0.3s ease; }
        .svc-feature-card:hover .svc-feature-icon { transform: scale(1.1) rotate(5deg); }
        .svc-feature-title { position: relative; z-index: 2; font-family: 'Space Grotesk', sans-serif; font-size: 1.1rem; font-weight: 700; margin-bottom: 10px; }
        .svc-feature-desc { position: relative; z-index: 2; font-size: 0.88rem; color: var(--text-secondary); line-height: 1.7; margin: 0; }
        .svc-feature-line { position: absolute; bottom: 0; left: 0; right: 0; height: 2px; opacity: 0; transition: opacity 0.3s ease; }
        .svc-feature-card:hover .svc-feature-line { opacity: 1; }
        .svc-process { position: relative; padding: 80px 0; overflow: hidden; }
        .svc-process-bg { position: absolute; inset: 0; background: radial-gradient(circle at 30% 50%, rgba(33, 117, 155, 0.05), transparent 60%), radial-gradient(circle at 70% 50%, rgba(0, 212, 170, 0.04), transparent 60%); pointer-events: none; }
        .svc-timeline { display: grid; grid-template-columns: repeat(2, 1fr); gap: 24px; }
        .svc-timeline-item { display: flex; gap: 20px; padding: 32px 28px; border-radius: 20px; background: rgba(20, 20, 35, 0.5); border: 1px solid var(--border); backdrop-filter: blur(10px); transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275); cursor: default; }
        .svc-timeline-item:hover, .svc-timeline-item.active { transform: translateY(-6px); border-color: rgba(0, 212, 170, 0.3); box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3), 0 0 30px rgba(0, 212, 170, 0.06); }
        .svc-timeline-num-wrap { display: flex; flex-direction: column; align-items: center; gap: 8px; flex-shrink: 0; }
        .svc-timeline-num { font-family: 'Space Grotesk', sans-serif; font-size: 2rem; font-weight: 800; background: linear-gradient(135deg, var(--accent), var(--primary-light)); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; line-height: 1; }
        .svc-timeline-icon { font-size: 1.2rem; transition: transform 0.3s ease; }
        .svc-timeline-item:hover .svc-timeline-icon { transform: scale(1.3); }
        .svc-timeline-title { font-family: 'Space Grotesk', sans-serif; font-size: 1.1rem; font-weight: 700; margin-bottom: 8px; }
        .svc-timeline-desc { font-size: 0.88rem; color: var(--text-secondary); line-height: 1.7; margin: 0; }
        .svc-tech-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px; }
        .svc-tech-item { position: relative; display: flex; flex-direction: column; align-items: center; gap: 10px; padding: 28px 16px; border-radius: 16px; background: rgba(20, 20, 35, 0.5); border: 1px solid var(--border); transition: all 0.3s ease; cursor: default; overflow: hidden; }
        .svc-tech-glow { position: absolute; inset: 0; border-radius: 16px; opacity: 0; transition: opacity 0.3s ease; }
        .svc-tech-item:hover .svc-tech-glow { opacity: 1; }
        .svc-tech-item:hover { transform: translateY(-4px); border-color: rgba(108, 99, 255, 0.3); box-shadow: 0 12px 40px rgba(0, 0, 0, 0.2); }
        .svc-tech-icon { position: relative; z-index: 2; font-size: 2rem; transition: transform 0.3s ease; }
        .svc-tech-item:hover .svc-tech-icon { transform: scale(1.2) rotate(5deg); }
        .svc-tech-name { position: relative; z-index: 2; font-size: 0.85rem; font-weight: 600; color: var(--text-secondary); }
        .svc-cta { position: relative; padding: 100px 0; overflow: hidden; }
        .svc-cta-bg { position: absolute; inset: 0; pointer-events: none; }
        .svc-cta-orb { position: absolute; border-radius: 50%; filter: blur(100px); }
        .svc-cta-orb-1 { width: 500px; height: 500px; background: rgba(33, 117, 155, 0.12); top: -100px; left: 20%; animation: floatOrb 6s ease-in-out infinite; }
        .svc-cta-orb-2 { width: 400px; height: 400px; background: rgba(0, 212, 170, 0.08); bottom: -100px; right: 20%; animation: floatOrb 8s ease-in-out infinite reverse; }
        .svc-cta-content { text-align: center; padding: 60px 40px; border-radius: 24px; background: linear-gradient(135deg, rgba(108, 99, 255, 0.08), rgba(0, 212, 170, 0.05)); border: 1px solid rgba(108, 99, 255, 0.15); backdrop-filter: blur(20px); position: relative; overflow: hidden; }
        .svc-cta-content::before { content: ''; position: absolute; top: 0; left: 0; right: 0; height: 1px; background: linear-gradient(90deg, transparent, rgba(108, 99, 255, 0.5), transparent); }
        .svc-cta-title { font-family: 'Space Grotesk', sans-serif; font-size: clamp(1.5rem, 3vw, 2.4rem); font-weight: 800; margin-bottom: 16px; }
        .svc-cta-desc { font-size: 1rem; color: var(--text-secondary); max-width: 500px; margin: 0 auto 32px; line-height: 1.7; }
        .svc-cta-btn-primary { display: inline-flex; align-items: center; gap: 10px; padding: 14px 32px; border-radius: 50px; background: linear-gradient(135deg, var(--accent), var(--primary-light)); color: #fff; font-size: 0.95rem; font-weight: 700; text-decoration: none; transition: all 0.3s ease; box-shadow: 0 4px 20px rgba(0, 212, 170, 0.3); }
        .svc-cta-btn-primary:hover { transform: translateY(-2px); box-shadow: 0 8px 32px rgba(0, 212, 170, 0.4); }
        .svc-cta-btn-secondary { display: inline-flex; align-items: center; gap: 8px; padding: 14px 32px; border-radius: 50px; background: transparent; border: 1px solid var(--border); color: var(--text-primary); font-size: 0.95rem; font-weight: 600; text-decoration: none; transition: all 0.3s ease; }
        .svc-cta-btn-secondary:hover { border-color: rgba(108, 99, 255, 0.4); background: rgba(108, 99, 255, 0.05); transform: translateY(-2px); }
        @media (max-width: 1024px) { .svc-features-grid { grid-template-columns: repeat(2, 1fr); } .svc-tech-grid { grid-template-columns: repeat(4, 1fr); } }
        @media (max-width: 768px) { .svc-hero { min-height: auto; padding: 120px 0 60px; } .svc-hero-title { font-size: clamp(1.8rem, 5vw, 2.5rem); } .svc-features-grid { grid-template-columns: 1fr; } .svc-timeline { grid-template-columns: 1fr; } .svc-tech-grid { grid-template-columns: repeat(2, 1fr); } .svc-hero-stats { gap: 24px; } .svc-cta-content { padding: 40px 24px; } }
        @media (max-width: 480px) { .svc-tech-grid { grid-template-columns: repeat(2, 1fr); } }
      `}</style>
    </>
  );
}
