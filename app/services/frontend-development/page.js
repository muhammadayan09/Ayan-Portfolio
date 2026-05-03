'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function FrontendDevelopment() {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [hoveredStep, setHoveredStep] = useState(null);

  return (
    <>
      {/* Hero with animated background */}
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
            Frontend Development
          </div>
          <h1 className="svc-hero-title">
            We Build <span className="gradient-text">Pixel-Perfect</span><br />
            Web Interfaces
          </h1>
          <p className="svc-hero-desc">
            From landing pages to complex enterprise dashboards, we create fast, responsive, and visually engaging web interfaces that turn visitors into customers.
          </p>
          <div className="svc-hero-actions">
            <Link href="/contact/" className="btn btn-primary">Start Your Project →</Link>
            <a href="https://wa.me/917983505861?text=Hi!%20I%20need%20frontend%20development." target="_blank" rel="noopener noreferrer" className="btn btn-outline">💬 Chat on WhatsApp</a>
          </div>
          <div className="svc-hero-stats">
            {[
              { num: '50+', label: 'Frontends Built' },
              { num: '99%', label: 'Client Satisfaction' },
              { num: '< 1s', label: 'Avg Load Time' },
            ].map((s, i) => (
              <div key={i} className="svc-hero-stat">
                <span className="svc-hero-stat-num">{s.num}</span>
                <span className="svc-hero-stat-label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features with glowing cards */}
      <section className="svc-features">
        <div className="container">
          <div className="svc-section-header">
            <span className="section-label">WHAT WE OFFER</span>
            <h2 className="svc-section-title">Our Frontend <span className="gradient-text">Capabilities</span></h2>
            <p className="svc-section-subtitle">We don’t just write code — we build experiences that are fast, scalable, and designed to perform.</p>
          </div>
          <div className="svc-features-grid">
            {[
              { icon: '⚡', title: 'Lightning-Fast Applications', desc: 'We develop high-performance web apps using modern frameworks like React and Next.js for instant loading and smooth performance.', color: '#FFB800' },
              { icon: '📱', title: 'Responsive Design', desc: 'Every interface is fully responsive and optimised for mobile, tablet, and desktop devices.', color: '#00D4AA' },
              { icon: '🎨', title: 'Pixel-Perfect UI', desc: 'We convert your Figma or design files into clean, accurate, and production-ready code.', color: '#6C63FF' },
              { icon: '♿', title: 'Accessibility Focused', desc: 'We follow accessibility standards to ensure your website is usable by all users, including those with disabilities.', color: '#FF6B6B' },
              { icon: '🔄', title: 'Smooth Animations', desc: 'We add subtle animations and interactions to improve user engagement without affecting performance.', color: '#4ECDC4' },
              { icon: '🧩', title: 'Component-Based Architecture', desc: 'We build reusable and scalable components to maintain consistency and speed up future development.', color: '#F093FB' },
            ].map((item, i) => (
              <div
                key={i}
                className={`svc-feature-card ${hoveredCard === i ? 'active' : ''}`}
                onMouseEnter={() => setHoveredCard(i)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="svc-feature-card-glow" style={{ background: `${item.color}15` }} />
                <div className="svc-feature-icon" style={{ background: `${item.color}15`, color: item.color }}>
                  {item.icon}
                </div>
                <h3 className="svc-feature-title">{item.title}</h3>
                <p className="svc-feature-desc">{item.desc}</p>
                <div className="svc-feature-line" style={{ background: `linear-gradient(90deg, ${item.color}, transparent)` }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process - Timeline style */}
      <section className="svc-process">
        <div className="svc-process-bg" />
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="svc-section-header">
            <span className="section-label">OUR PROCESS</span>
            <h2 className="svc-section-title">From Idea to <span className="gradient-text">Launch</span></h2>
            <p className="svc-section-subtitle">A proven workflow that ensures your project is delivered with quality and precision.</p>
          </div>
          <div className="svc-timeline">
            {[
              { num: '01', title: 'Discovery & Strategy', desc: 'We analyse your requirements, audience, and goals to define a clear development roadmap.', icon: '🔍' },
              { num: '02', title: 'UI/UX Design', desc: 'We design user-friendly and conversion-focused layouts based on your brand identity.', icon: '✏️' },
              { num: '03', title: 'Development & Testing', desc: 'We build fast, scalable, and clean frontend code with cross-browser and device testing.', icon: '💻' },
              { num: '04', title: 'Launch & Optimisation', desc: 'We deploy your project and optimise performance, speed, and user experience.', icon: '🚀' },
            ].map((step, i) => (
              <div
                key={i}
                className={`svc-timeline-item ${hoveredStep === i ? 'active' : ''}`}
                onMouseEnter={() => setHoveredStep(i)}
                onMouseLeave={() => setHoveredStep(null)}
              >
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

      {/* Tech Stack - Interactive */}
      <section className="svc-features" style={{ paddingTop: '40px' }}>
        <div className="container">
          <div className="svc-section-header">
            <span className="section-label">TECHNOLOGIES</span>
            <h2 className="svc-section-title">Our Tech <span className="gradient-text">Stack</span></h2>
            <p className="svc-section-subtitle" style={{ margin: '0 auto', marginBottom: '40px' }}>
              We use modern technologies to ensure high performance and scalability.
            </p>
          </div>
          <div className="svc-tech-grid">
            {[
              { name: 'HTML5', icon: '🌐', color: '#E34F26' },
              { name: 'CSS3', icon: '🎨', color: '#1572B6' },
              { name: 'JavaScript', icon: '⚡', color: '#F7DF1E' },
              { name: 'TypeScript', icon: '📘', color: '#3178C6' },
              { name: 'React', icon: '⚛️', color: '#61DAFB' },
              { name: 'Angular', icon: '🅰️', color: '#DD0031' },
              { name: 'Next.js', icon: '▲', color: '#ffffff' },
              { name: 'Tailwind CSS', icon: '💨', color: '#06B6D4' },
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

      {/* CTA - Bold design */}
      <section className="svc-cta">
        <div className="svc-cta-bg">
          <div className="svc-cta-orb svc-cta-orb-1" />
          <div className="svc-cta-orb svc-cta-orb-2" />
        </div>
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="svc-cta-content">
            <span className="section-label" style={{ justifyContent: 'center' }}>LET’S TALK</span>
            <h2 className="svc-cta-title">
              Ready to Build Something <span className="gradient-text">Amazing?</span>
            </h2>
            <p className="svc-cta-desc">
              Tell us about your project and let’s create a frontend experience that delivers performance and results.
            </p>
            <div className="svc-cta-actions">
              <Link href="/contact/" className="svc-cta-btn-primary">
                Start Your Project
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </Link>
              <a href="https://wa.me/917983505861" target="_blank" rel="noopener noreferrer" className="svc-cta-btn-secondary">
                👉 WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        /* ===== HERO ===== */
        .svc-hero {
          position: relative;
          min-height: 90vh;
          display: flex;
          align-items: center;
          padding: 140px 0 80px;
          overflow: hidden;
        }
        .svc-hero-bg {
          position: absolute;
          inset: 0;
          pointer-events: none;
        }
        .svc-hero-orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(120px);
          animation: floatOrb 8s ease-in-out infinite;
        }
        .svc-hero-orb-1 {
          width: 600px;
          height: 600px;
          background: rgba(108, 99, 255, 0.15);
          top: -200px;
          right: -100px;
        }
        .svc-hero-orb-2 {
          width: 400px;
          height: 400px;
          background: rgba(0, 212, 170, 0.1);
          bottom: -100px;
          left: -100px;
          animation-delay: 3s;
        }
        .svc-hero-orb-3 {
          width: 300px;
          height: 300px;
          background: rgba(255, 107, 107, 0.08);
          top: 50%;
          left: 50%;
          animation-delay: 5s;
        }
        .svc-hero-grid {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px);
          background-size: 60px 60px;
        }
        @keyframes floatOrb {
          0%, 100% { transform: translateY(0) scale(1); }
          50% { transform: translateY(-30px) scale(1.05); }
        }

        .svc-hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 8px 20px;
          border-radius: 50px;
          background: var(--bg-glass);
          border: 1px solid var(--border);
          font-size: 0.82rem;
          font-weight: 600;
          color: var(--accent);
          margin-bottom: 28px;
          backdrop-filter: blur(10px);
          animation: fadeInUp 0.6s ease both;
        }
        .svc-hero-badge-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: var(--accent);
          box-shadow: 0 0 12px var(--accent);
          animation: pulse 2s ease infinite;
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(0.8); }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .svc-hero-title {
          font-family: var(--font-display), sans-serif;
          font-size: clamp(2.5rem, 5vw, 3.8rem);
          font-weight: 800;
          line-height: 1.15;
          margin-bottom: 20px;
          animation: fadeInUp 0.6s ease 0.1s both;
        }
        .svc-hero-desc {
          font-size: 1.05rem;
          color: var(--text-secondary);
          line-height: 1.8;
          max-width: 600px;
          margin-bottom: 32px;
          animation: fadeInUp 0.6s ease 0.2s both;
        }
        .svc-hero-actions {
          display: flex;
          gap: 16px;
          flex-wrap: wrap;
          margin-bottom: 48px;
          animation: fadeInUp 0.6s ease 0.3s both;
        }
        .svc-hero-stats {
          display: flex;
          gap: 40px;
          flex-wrap: wrap;
          animation: fadeInUp 0.6s ease 0.4s both;
        }
        .svc-hero-stat {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }
        .svc-hero-stat-num {
          font-family: var(--font-display), sans-serif;
          font-size: 1.8rem;
          font-weight: 800;
          background: linear-gradient(135deg, #fff, var(--accent-light));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .svc-hero-stat-label {
          font-size: 0.8rem;
          color: var(--text-muted);
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        /* ===== SECTION HEADER ===== */
        .svc-section-header { text-align: center; margin-bottom: 56px; }
        .svc-section-title {
          font-family: var(--font-display), sans-serif;
          font-size: clamp(1.6rem, 3vw, 2.4rem);
          font-weight: 800;
          margin-bottom: 12px;
        }
        .svc-section-subtitle {
          font-size: 0.95rem;
          color: var(--text-secondary);
          max-width: 520px;
          margin: 0 auto;
          line-height: 1.7;
        }

        /* ===== FEATURES ===== */
        .svc-features { padding: 80px 0; }
        .svc-features-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }
        .svc-feature-card {
          position: relative;
          padding: 32px 28px;
          border-radius: 20px;
          background: rgba(20, 20, 35, 0.6);
          border: 1px solid var(--border);
          backdrop-filter: blur(10px);
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          overflow: hidden;
          cursor: default;
        }
        .svc-feature-card-glow {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 100%;
          border-radius: 20px;
          opacity: 0;
          transition: opacity 0.4s ease;
        }
        .svc-feature-card:hover .svc-feature-card-glow,
        .svc-feature-card.active .svc-feature-card-glow {
          opacity: 1;
        }
        .svc-feature-card:hover {
          transform: translateY(-8px);
          border-color: rgba(108, 99, 255, 0.3);
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3), 0 0 30px rgba(108, 99, 255, 0.08);
        }
        .svc-feature-icon {
          position: relative;
          z-index: 2;
          width: 56px;
          height: 56px;
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.6rem;
          margin-bottom: 20px;
          transition: transform 0.3s ease;
        }
        .svc-feature-card:hover .svc-feature-icon {
          transform: scale(1.1) rotate(5deg);
        }
        .svc-feature-title {
          position: relative;
          z-index: 2;
          font-family: var(--font-display), sans-serif;
          font-size: 1.1rem;
          font-weight: 700;
          margin-bottom: 10px;
        }
        .svc-feature-desc {
          position: relative;
          z-index: 2;
          font-size: 0.88rem;
          color: var(--text-secondary);
          line-height: 1.7;
          margin: 0;
        }
        .svc-feature-line {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 2px;
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        .svc-feature-card:hover .svc-feature-line {
          opacity: 1;
        }

        /* ===== PROCESS TIMELINE ===== */
        .svc-process {
          position: relative;
          padding: 80px 0;
          overflow: hidden;
        }
        .svc-process-bg {
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at 30% 50%, rgba(108, 99, 255, 0.05), transparent 60%),
                      radial-gradient(circle at 70% 50%, rgba(0, 212, 170, 0.04), transparent 60%);
          pointer-events: none;
        }
        .svc-timeline {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 24px;
        }
        .svc-timeline-item {
          display: flex;
          gap: 20px;
          padding: 32px 28px;
          border-radius: 20px;
          background: rgba(20, 20, 35, 0.5);
          border: 1px solid var(--border);
          backdrop-filter: blur(10px);
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          cursor: default;
        }
        .svc-timeline-item:hover,
        .svc-timeline-item.active {
          transform: translateY(-6px);
          border-color: rgba(0, 212, 170, 0.3);
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3), 0 0 30px rgba(0, 212, 170, 0.06);
        }
        .svc-timeline-num-wrap {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
          flex-shrink: 0;
        }
        .svc-timeline-num {
          font-family: var(--font-display), sans-serif;
          font-size: 2rem;
          font-weight: 800;
          background: linear-gradient(135deg, var(--accent), var(--primary-light));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          line-height: 1;
        }
        .svc-timeline-icon {
          font-size: 1.2rem;
          transition: transform 0.3s ease;
        }
        .svc-timeline-item:hover .svc-timeline-icon {
          transform: scale(1.3);
        }
        .svc-timeline-title {
          font-family: var(--font-display), sans-serif;
          font-size: 1.1rem;
          font-weight: 700;
          margin-bottom: 8px;
        }
        .svc-timeline-desc {
          font-size: 0.88rem;
          color: var(--text-secondary);
          line-height: 1.7;
          margin: 0;
        }

        /* ===== TECH STACK ===== */
        .svc-tech-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 16px;
        }
        .svc-tech-item {
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 10px;
          padding: 28px 16px;
          border-radius: 16px;
          background: rgba(20, 20, 35, 0.5);
          border: 1px solid var(--border);
          transition: all 0.3s ease;
          cursor: default;
          overflow: hidden;
        }
        .svc-tech-glow {
          position: absolute;
          inset: 0;
          border-radius: 16px;
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        .svc-tech-item:hover .svc-tech-glow {
          opacity: 1;
        }
        .svc-tech-item:hover {
          transform: translateY(-4px);
          border-color: rgba(108, 99, 255, 0.3);
          box-shadow: 0 12px 40px rgba(0, 0, 0, 0.2);
        }
        .svc-tech-icon {
          position: relative;
          z-index: 2;
          font-size: 2rem;
          transition: transform 0.3s ease;
        }
        .svc-tech-item:hover .svc-tech-icon {
          transform: scale(1.2) rotate(5deg);
        }
        .svc-tech-name {
          position: relative;
          z-index: 2;
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--text-secondary);
        }

        /* ===== CTA ===== */
        .svc-cta {
          position: relative;
          padding: 100px 0;
          overflow: hidden;
        }
        .svc-cta-bg {
          position: absolute;
          inset: 0;
          pointer-events: none;
        }
        .svc-cta-orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(100px);
        }
        .svc-cta-orb-1 {
          width: 500px;
          height: 500px;
          background: rgba(108, 99, 255, 0.12);
          top: -100px;
          left: 20%;
          animation: floatOrb 6s ease-in-out infinite;
        }
        .svc-cta-orb-2 {
          width: 400px;
          height: 400px;
          background: rgba(0, 212, 170, 0.08);
          bottom: -100px;
          right: 20%;
          animation: floatOrb 8s ease-in-out infinite reverse;
        }
        .svc-cta-content {
          text-align: center;
          padding: 60px 40px;
          border-radius: 24px;
          background: linear-gradient(135deg, rgba(108, 99, 255, 0.08), rgba(0, 212, 170, 0.05));
          border: 1px solid rgba(108, 99, 255, 0.15);
          backdrop-filter: blur(20px);
          position: relative;
          overflow: hidden;
        }
        .svc-cta-content::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(108, 99, 255, 0.5), transparent);
        }
        .svc-cta-title {
          font-family: var(--font-display), sans-serif;
          font-size: clamp(1.5rem, 3vw, 2.4rem);
          font-weight: 800;
          margin-bottom: 16px;
        }
        .svc-cta-desc {
          font-size: 1rem;
          color: var(--text-secondary);
          max-width: 500px;
          margin: 0 auto 32px;
          line-height: 1.7;
        }
        .svc-cta-actions {
          display: flex;
          gap: 16px;
          justify-content: center;
          flex-wrap: wrap;
        }
        .svc-cta-btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 14px 32px;
          border-radius: 50px;
          background: linear-gradient(135deg, var(--accent), var(--primary-light));
          color: #fff;
          font-size: 0.95rem;
          font-weight: 700;
          text-decoration: none;
          transition: all 0.3s ease;
          box-shadow: 0 4px 20px rgba(0, 212, 170, 0.3);
        }
        .svc-cta-btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 32px rgba(0, 212, 170, 0.4);
        }
        .svc-cta-btn-secondary {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 14px 32px;
          border-radius: 50px;
          background: transparent;
          border: 1px solid var(--border);
          color: var(--text-primary);
          font-size: 0.95rem;
          font-weight: 600;
          text-decoration: none;
          transition: all 0.3s ease;
        }
        .svc-cta-btn-secondary:hover {
          border-color: rgba(108, 99, 255, 0.4);
          background: rgba(108, 99, 255, 0.05);
          transform: translateY(-2px);
        }

        /* ===== RESPONSIVE ===== */
        @media (max-width: 1024px) {
          .svc-features-grid { grid-template-columns: repeat(2, 1fr); }
          .svc-tech-grid { grid-template-columns: repeat(4, 1fr); }
        }
        @media (max-width: 768px) {
          .svc-hero { min-height: auto; padding: 120px 0 60px; }
          .svc-hero-title { font-size: clamp(1.8rem, 5vw, 2.5rem); }
          .svc-features-grid { grid-template-columns: 1fr; }
          .svc-timeline { grid-template-columns: 1fr; }
          .svc-tech-grid { grid-template-columns: repeat(2, 1fr); }
          .svc-hero-stats { gap: 24px; }
          .svc-cta-content { padding: 40px 24px; }
        }
        @media (max-width: 480px) {
          .svc-tech-grid { grid-template-columns: repeat(2, 1fr); }
        }
      `}</style>
    </>
  );
}

