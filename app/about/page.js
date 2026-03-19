 'use client';

import Image from 'next/image';
import Link from 'next/link';



const values = [
  { icon: '🎯', title: 'Pixel Precision', desc: 'Every element is carefully designed with attention to detail, ensuring a clean and professional look across all devices.' },
  { icon: '⚡', title: 'Performance First', desc: 'Speed, responsiveness, and optimisation are at the core of every project we deliver.' },
  { icon: '🤝', title: 'Client-Focused Approach', desc: 'We prioritise your goals, understand your business needs, and deliver solutions that create real impact.' },
  { icon: '🔄', title: 'Continuous Improvement', desc: 'We stay updated with the latest technologies and trends to provide modern and effective solutions.' },
];

const whyChoose = [
  { icon: '🏆', title: '50+ Projects Delivered', desc: 'We have successfully delivered projects across different industries with a strong focus on quality and performance.' },
  { icon: '💡', title: 'Strategy-Driven Execution', desc: 'Every project is backed by research, planning, and a clear digital strategy to ensure better results.' },
  { icon: '🛡️', title: 'Ongoing Support', desc: 'We provide continuous support, updates, and improvements to keep your website performing at its best.' },
  { icon: '🌍', title: 'Global Client Experience', desc: 'We work with clients across different regions, delivering solutions that meet international standards.' },
  { icon: '📈', title: 'SEO & Performance Focused', desc: 'Every website we build is optimised for search engines, speed, and user experience.' },
  { icon: '🔧', title: 'Full-Stack Capabilities', desc: 'From frontend development to backend systems and CMS platforms, we handle complete digital solutions.' },
];

const processSteps = [
  { num: '01', title: 'Discovery & Strategy', desc: 'We understand your business, goals, and audience to create a clear and effective digital strategy.', color: '#6C63FF' },
  { num: '02', title: 'Design & Planning', desc: 'We design user-focused layouts and plan every detail to ensure a smooth and engaging experience.', color: '#00D4AA' },
  { num: '03', title: 'Development & Testing', desc: 'We build fast, scalable, and secure websites, followed by thorough testing across all devices.', color: '#FF6B6B' },
  { num: '04', title: 'Launch & Growth', desc: 'We deploy your website and continue optimising it for performance, SEO, and long-term growth.', color: '#FFA726' },
];

export default function About() {
  return (
    <>
      {/* Page Header */}
      <section className="page-header">
        <div className="page-header-glow" />
        <div className="container">
          <span className="section-label">GET TO KNOW US</span>
          <h1 className="page-title">About <span className="gradient-text">PilatuWeb</span></h1>
          <p className="page-subtitle">
            A Digital Agency Focused on Building High-Performance Web Experiences That Drive Growth
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
                  <Image src="/muhammad-ayan.png" alt="Muhammad Ayan" fill className="about-avatar-img" sizes="140px" />
                </div>
                <div className="about-name-card">
                  <h3>PilatuWeb Team</h3>
                  <p>Web Development & SEO Experts</p>
                </div>
                <div className="about-quick-facts">
                  <div className="quick-fact">
                    <span className="fact-icon">📍</span>
                    <span>FF91 Gaur City Centre, Gaur Chowk, West, Sector 4, Greater Noida, Uttar Pradesh 203207 India</span>
                  </div>
                  <div className="quick-fact">
                    <span className="fact-icon">🏢</span>
                    <span>Digital Agency</span>
                  </div>
                  <div className="quick-fact">
                    <span className="fact-icon">🚀</span>
                    <span>Growth-Focused Team</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="about-text-col">
              <h2 className="about-heading">
                Transforming Businesses Through <span className="gradient-text">Smart Digital Execution</span>
              </h2>
              <p className="about-para">
                PilatuWeb is a performance-driven digital agency built with a clear goal — to create websites and digital systems that actually deliver results. We don’t just focus on design or code; we focus on how your website performs in real-world conditions.
              </p>
              <p className="about-para">
                From building fast, scalable frontend architectures using modern frameworks to developing high-converting WordPress and Shopify platforms, we approach every project with precision and strategy.
              </p>
              <p className="about-para">
                We understand that a website is not just an online presence — it is a business tool. That’s why every solution we deliver is designed to improve visibility, enhance user experience, and increase conversions.
              </p>
              <p className="about-para">
                Our process combines clean design, strong technical foundations, and SEO-driven structure to ensure your website performs well across search engines and user expectations.
              </p>
              <p className="about-para">
                Whether you’re a startup looking to establish your presence or a growing business aiming to scale, PilatuWeb helps you build a strong digital foundation that supports long-term growth.
              </p>
              <div className="about-actions">
                <Link href="/contact" className="btn btn-primary">Contact Us</Link>
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
            <span className="section-label">OUR CORE PRINCIPLES</span>
            <h2 className="section-title">The Standards We Follow</h2>
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
            <span className="section-label">OUR EDGE</span>
            <h2 className="section-title">Why Choose <span className="gradient-text">PilatuWeb</span></h2>
            <p className="section-subtitle" style={{ margin: '0 auto' }}>
              We don’t just build websites — we build systems that help businesses grow.
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
            <span className="section-label">HOW WE WORK</span>
            <h2 className="section-title">Our <span className="gradient-text">Process</span></h2>
            <p className="section-subtitle" style={{ margin: '0 auto' }}>
              A structured workflow designed to deliver consistent and high-quality results.
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

        .about-name-card h3 { font-family: var(--font-display), sans-serif; font-size: 1.3rem; font-weight: 700; margin-bottom: 4px; }
        .about-name-card p { color: var(--primary-light); font-size: 0.9rem; font-weight: 500; margin-bottom: 24px; }

        .about-quick-facts { display: flex; flex-direction: column; gap: 12px; }
        .quick-fact { display: flex; align-items: center; gap: 10px; font-size: 0.9rem; color: var(--text-secondary); padding: 10px 16px; border-radius: var(--border-radius-sm); background: var(--bg-secondary); }

        .about-heading { font-family: var(--font-display), sans-serif; font-size: clamp(1.5rem, 3vw, 2rem); font-weight: 700; line-height: 1.3; margin-bottom: 24px; }
        .about-para { font-size: 1rem; color: var(--text-secondary); line-height: 1.85; margin-bottom: 16px; }
        .about-actions { display: flex; gap: 16px; margin-top: 28px; }

        .section-header-center { text-align: center; margin-bottom: 30px; }
        .section-header-center .section-label { justify-content: center; }

        .values-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 20px; }
        .value-card { text-align: center; padding: 30px 20px; }
        .value-icon { font-size: 2.5rem; display: block; margin-bottom: 16px; }
        .value-title { font-family: var(--font-display), sans-serif; font-size: 1rem; font-weight: 600; margin-bottom: 10px; }
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
        .why-title { font-family: var(--font-display), sans-serif; font-size: 1.15rem; font-weight: 700; margin-bottom: 12px; }
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
          font-family: var(--font-display), sans-serif;
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

        .process-title { font-family: var(--font-display), sans-serif; font-size: 1.1rem; font-weight: 700; margin-bottom: 12px; }
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

