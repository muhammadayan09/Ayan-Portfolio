'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';

const projectData = {
  'shs-real-estate': {
    title: "Luxury Real Estate Hub",
    client: "SHS Real Estate Dubai",
    category: "Real Estate Portal",
    tech: ["WordPress", "PHP", "MySQL", "Google Maps API", "Advanced Custom Fields"],
    stats: [
      { label: "Lead Gen", value: "+45%" },
      { label: "Site Speed", value: "0.8s" },
      { label: "Rankings", value: "Top 3" }
    ],
    challenge: "SHS Real Estate needed a ultra-premium portal to compete in the Dubai luxury market. The existing site was slow, not mobile-friendly, and didn't reflect the high-end nature of their $10M+ listings.",
    solution: "We engineered a custom WordPress architecture using headless-ready techniques for maximum speed. We integrated a dynamic off-plan property module and a seamless WhatsApp-first lead flow. Visuals were optimized for retina displays while maintaining perfect PageSpeed scores.",
    process: [
      { title: "Strategic Architecture", desc: "Mapping the user journey for high-net-worth investors." },
      { title: "Performance Engineering", desc: "Optimizing image delivery and backend queries for instant loading." },
      { title: "Premium UI Design", desc: "Crafting a 'glassmorphism' aesthetic that screams luxury." },
      { title: "Lead Optimization", desc: "Integrating one-click WhatsApp and expert advisor routing." }
    ],
    result: "The new portal transformed their digital presence. Within 3 months, organic traffic doubled, and lead quality improved significantly. The site is now recognized as a benchmark for real estate UI in Dubai.",
    color: "#cfa968"
  },
  'zyra-delight': {
    title: "Premium Artisan E-commerce",
    client: "Zyra Delight",
    category: "Luxury E-commerce",
    tech: ["Shopify Plus", "Liquid", "React", "Klaviyo", "SEO"],
    stats: [
      { label: "Revenue", value: "+65%" },
      { label: "Mobile Conv", value: "4.2%" },
      { label: "Bounce Rate", value: "-30%" }
    ],
    challenge: "Zyra Delight's artisan products were world-class, but their online store felt generic. They were struggling with high bounce rates on mobile and low customer retention.",
    solution: "We performed a complete brand immersion and rebuilt their Shopify store from the ground up. We replaced standard templates with custom Liquid sections and interactive product storytelling components. We focused on 'The Joy of Unboxing' digital experience.",
    process: [
      { title: "Storytelling UX", desc: "Creating a narrative-driven shopping experience." },
      { title: "Custom Shopify Dev", desc: "Developing bespoke Liquid sections for unique product layouts." },
      { title: "Mobile Mastering", desc: "Optimizing the checkout flow for one-handed mobile use." },
      { title: "Retention Strategy", desc: "Integrating SMS and Email automation tailored to artisan buyers." }
    ],
    result: "Zyra Delight saw an immediate 65% jump in monthly revenue. The brand successfully transitioned from 'just a store' to a luxury destination. Customer lifetime value increased by 40% due to the improved experience.",
    color: "#96BF48"
  }
};

export default function CaseStudyDetail() {
  const { slug } = useParams();
  const [mounted, setMounted] = useState(false);
  const data = projectData[slug] || projectData['shs-real-estate']; // fallback for demo

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="case-study-detail">
      {/* SECTION 1: HERO */}
      <section className="case-hero">
        <div className="container">
          <div className={`hero-flex ${mounted ? 'animate-up' : ''}`}>
            <div className="hero-text">
              <span className="case-badge" style={{ background: `${data.color}20`, color: data.color }}>
                {data.category}
              </span>
              <h1 className="case-h1">{data.title}</h1>
              <p className="case-subtitle">Client: <span className="highlight">{data.client}</span></p>
              
              <div className="case-stats">
                {data.stats.map((stat, i) => (
                  <div key={i} className="stat-box">
                    <div className="stat-val" style={{ color: data.color }}>{stat.value}</div>
                    <div className="stat-lab">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="hero-glow" style={{ background: data.color }} />
      </section>

      {/* SECTION 2: THE CHALLENGE */}
      <section className="case-section bg-alt">
        <div className="container">
          <div className="grid-split">
            <div className="content-side">
              <span className="section-label">01. The Challenge</span>
              <h2 className="case-h2">The <span className="gradient-text">Problem</span> We Solved</h2>
              <p className="case-p">{data.challenge}</p>
              <div className="tech-stack">
                <h4 className="tech-title">Technologies Used:</h4>
                <div className="tech-pills">
                  {data.tech.map(t => <span key={t} className="tech-pill">{t}</span>)}
                </div>
              </div>
            </div>
            <div className="visual-side">
              <div className="problem-card glass-card">
                <div className="problem-icon">⚠️</div>
                <div className="problem-text">Outdated Architecture • Slow Load Times • Low Conversion</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: THE SOLUTION */}
      <section className="case-section">
        <div className="container">
          <div className="grid-split reverse">
            <div className="content-side">
              <span className="section-label">02. The Solution</span>
              <h2 className="case-h2">Architecting <span className="gradient-text">Excellence</span></h2>
              <p className="case-p">{data.solution}</p>
              <div className="process-list">
                {data.process.map((step, i) => (
                  <div key={i} className="process-item">
                    <span className="step-num" style={{ background: data.color }}>{i+1}</span>
                    <div className="step-text">
                      <h5>{step.title}</h5>
                      <p>{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="visual-side">
              <div className="solution-mockup glass-card">
                <div className="mockup-header">
                  <div className="dot" /> <div className="dot" /> <div className="dot" />
                </div>
                <div className="mockup-body">
                  <div className="skeleton-hero" style={{ background: `${data.color}15` }} />
                  <div className="skeleton-grid" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: RESULTS & CTA */}
      <section className="case-section bg-gradient">
        <div className="container text-center">
            <span className="section-label white">03. Impact</span>
            <h2 className="case-h2 white">The <span className="gradient-text">Outcome</span></h2>
            <p className="case-p max-700 mx-auto white-op">{data.result}</p>
            
            <div className="case-cta-box glass-card scale-hover">
              <h3>Have a similar project?</h3>
              <p>Let's discuss how we can bring these results to your brand.</p>
              <div className="cta-btns">
                <Link href="/contact" className="btn btn-primary">Start Your Success Story</Link>
                <Link href="/case-studies" className="btn btn-outline">View Other Studies</Link>
              </div>
            </div>
        </div>
      </section>

      <style jsx>{`
        .case-study-detail { padding-top: 80px; }
        .case-section { padding: 100px 0; }
        .bg-alt { background: rgba(255,255,255,0.02); }
        .bg-gradient { background: linear-gradient(180deg, transparent, rgba(108, 99, 255, 0.1)); }
        
        .container { max-width: 1200px; margin: 0 auto; padding: 0 24px; }
        .text-center { text-align: center; }
        .mx-auto { margin-left: auto; margin-right: auto; }
        .max-700 { max-width: 700px; }
        .white { color: #fff; }
        .white-op { color: rgba(255,255,255,0.8); }

        .case-hero {
          height: 80vh;
          display: flex;
          align-items: center;
          position: relative;
          overflow: hidden;
        }

        .hero-glow {
          position: absolute;
          top: 0; right: 0;
          width: 50vw; height: 100%;
          filter: blur(150px);
          opacity: 0.15;
          z-index: -1;
        }

        .case-badge {
          display: inline-block;
          padding: 8px 16px;
          border-radius: 50px;
          font-weight: 700;
          font-size: 0.8rem;
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-bottom: 24px;
        }

        .case-h1 { font-family: 'Space Grotesk', sans-serif; font-size: clamp(2.5rem, 6vw, 4.5rem); font-weight: 800; line-height: 1.1; margin-bottom: 12px; }
        .case-subtitle { font-size: 1.25rem; color: var(--text-secondary); margin-bottom: 48px; }
        .highlight { color: var(--text-primary); font-weight: 700; }

        .case-stats { display: flex; gap: 40px; }
        .stat-val { font-size: 2.5rem; font-weight: 800; line-height: 1; }
        .stat-lab { font-size: 0.85rem; color: var(--text-muted); font-weight: 600; margin-top: 8px; text-transform: uppercase; }

        .grid-split { display: grid; grid-template-columns: 1fr 1fr; gap: 80px; align-items: center; }
        .grid-split.reverse { direction: rtl; }
        .grid-split.reverse .content-side { direction: ltr; }
        
        .case-h2 { font-family: 'Space Grotesk', sans-serif; font-size: 2.8rem; font-weight: 800; margin-bottom: 24px; }
        .case-p { font-size: 1.1rem; line-height: 1.8; color: var(--text-secondary); margin-bottom: 32px; }

        .tech-pills { display: flex; flex-wrap: wrap; gap: 10px; }
        .tech-pill { padding: 6px 14px; background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1); border-radius: 8px; font-size: 0.85rem; font-weight: 600; }

        .process-list { display: grid; gap: 24px; }
        .process-item { display: flex; gap: 20px; }
        .step-num { width: 32px; height: 32px; border-radius: 50%; display: grid; place-items: center; flex-shrink: 0; font-weight: 800; color: #000; font-size: 0.9rem; }
        .step-text h5 { font-weight: 700; margin-bottom: 4px; font-size: 1.1rem; }
        .step-text p { font-size: 0.9rem; color: var(--text-muted); }

        .problem-card { padding: 40px; text-align: center; }
        .problem-icon { font-size: 3rem; margin-bottom: 20px; }
        .problem-text { font-weight: 700; color: var(--text-secondary); }

        .solution-mockup { height: 400px; padding: 20px; overflow: hidden; }
        .mockup-header { display: flex; gap: 8px; margin-bottom: 16px; }
        .dot { width: 8px; height: 8px; border-radius: 50%; background: rgba(255,255,255,0.2); }
        .skeleton-hero { height: 160px; border-radius: 12px; margin-bottom: 20px; }
        .skeleton-grid { height: 200px; background: rgba(255,255,255,0.05); border-radius: 12px; }

        .case-cta-box { margin-top: 60px; padding: 60px; text-align: center; }
        .case-cta-box h3 { font-size: 2rem; font-weight: 700; margin-bottom: 12px; }
        .case-cta-box p { color: var(--text-secondary); margin-bottom: 32px; }
        .cta-btns { display: flex; gap: 16px; justify-content: center; }

        @media (max-width: 900px) {
          .grid-split { grid-template-columns: 1fr; gap: 40px; }
          .grid-split.reverse { direction: ltr; }
          .visual-side { order: -1; }
          .case-hero { height: auto; padding: 60px 0; }
          .case-stats { flex-wrap: wrap; }
        }

        .animate-up { animation: fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
