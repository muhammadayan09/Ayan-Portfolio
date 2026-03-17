'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function SeoOptimization() {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [hoveredStep, setHoveredStep] = useState(null);

  return (
    <>
      <section className="svc-hero">
        <div className="svc-hero-bg"><div className="svc-hero-orb svc-hero-orb-1" /><div className="svc-hero-orb svc-hero-orb-2" /><div className="svc-hero-orb svc-hero-orb-3" /><div className="svc-hero-grid" /></div>
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="svc-hero-badge"><span className="svc-hero-badge-dot" />SEO Optimization</div>
          <h1 className="svc-hero-title">Dominate <span className="gradient-text">Google</span><br />Search Rankings</h1>
          <p className="svc-hero-desc">We use data-driven SEO strategies to increase your organic traffic, improve search visibility, and turn your website into a powerful lead-generation system.</p>
          <div className="svc-hero-actions">
            <Link href="/contact" className="btn btn-primary">Get a Free Audit →</Link>
            <a href="https://wa.me/917983505861?text=Hi!%20I%20need%20SEO%20services." target="_blank" rel="noopener noreferrer" className="btn btn-outline">💬 Chat on WhatsApp</a>
          </div>
          <div className="svc-hero-stats">
            {[{ num: '300%', label: 'Average Traffic Growth' }, { num: '#1', label: 'Page Rankings Achieved' }, { num: '40+', label: 'SEO Projects Delivered' }].map((s, i) => (
              <div key={i} className="svc-hero-stat"><span className="svc-hero-stat-num">{s.num}</span><span className="svc-hero-stat-label">{s.label}</span></div>
            ))}
          </div>
        </div>
      </section>

      <section className="svc-features">
        <div className="container">
          <div className="svc-section-header">
            <span className="section-label">What We Do</span>
            <h2 className="svc-section-title">Our SEO <span className="gradient-text">Services</span></h2>
            <p className="svc-section-subtitle">A great website means nothing if it can&apos;t be found. We make sure your business shows up where it matters.</p>
          </div>
          <div className="svc-features-grid">
            {[
              { icon: '🔍', title: 'Technical SEO Audits', desc: 'We analyse your website\u0027s structure, crawlability, indexing, and performance to identify issues that impact rankings.', color: '#6C63FF' },
              { icon: '📝', title: 'On-Page Optimisation', desc: 'We optimise titles, meta tags, headings, content, and internal linking to improve relevance and visibility.', color: '#00D4AA' },
              { icon: '📊', title: 'Schema & Rich Results', desc: 'We implement structured data to enhance search listings with rich snippets and improved click-through rates.', color: '#FFB800' },
              { icon: '📈', title: 'Analytics & Reporting', desc: 'We set up Google Analytics and Search Console with detailed reporting to track performance and growth.', color: '#FF6B6B' },
              { icon: '🔗', title: 'Link Building', desc: 'We build high-quality backlinks through strategic outreach to improve domain authority and rankings.', color: '#4ECDC4' },
              { icon: '🎯', title: 'Keyword Strategy', desc: 'We research high-intent keywords to target the right audience and maximise organic growth.', color: '#F093FB' },
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
            <span className="section-label">Our Strategy</span>
            <h2 className="svc-section-title">SEO <span className="gradient-text">Workflow</span></h2>
            <p className="svc-section-subtitle">A proven, step-by-step approach to achieving consistent ranking improvements.</p>
          </div>
          <div className="svc-timeline">
            {[
              { num: '01', title: 'Audit & Analysis', desc: 'We perform a complete SEO audit, competitor analysis, and identify growth opportunities.', icon: '🔍' },
              { num: '02', title: 'Keyword Strategy', desc: 'We select high-value keywords based on search intent, competition, and business goals.', icon: '🎯' },
              { num: '03', title: 'Implementation', desc: 'We optimise technical SEO, on-page elements, and content for maximum performance.', icon: '⚙️' },
              { num: '04', title: 'Monitor & Grow', desc: 'We continuously track rankings, analyse data, and refine strategies for long-term growth.', icon: '📈' },
            ].map((step, i) => (
              <div key={i} className={`svc-timeline-item ${hoveredStep === i ? 'active' : ''}`} onMouseEnter={() => setHoveredStep(i)} onMouseLeave={() => setHoveredStep(null)}>
                <div className="svc-timeline-num-wrap"><span className="svc-timeline-num">{step.num}</span><span className="svc-timeline-icon">{step.icon}</span></div>
                <div className="svc-timeline-content"><h3 className="svc-timeline-title">{step.title}</h3><p className="svc-timeline-desc">{step.desc}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="svc-features" style={{ paddingTop: '40px' }}>
        <div className="container">
          <div className="svc-section-header"><span className="section-label">Tools & Platforms</span><h2 className="svc-section-title">We Work <span className="gradient-text">With</span></h2><p className="svc-section-subtitle">We use industry-leading tools to deliver accurate insights and measurable results.</p></div>
          <div className="svc-tech-grid">
            {[
              { name: 'Google Analytics', icon: '📊', color: '#F9AB00' },{ name: 'Google Search Console', icon: '🔍', color: '#4285F4' },{ name: 'Ahrefs', icon: '🔗', color: '#1C64F2' },{ name: 'SEMrush', icon: '📈', color: '#FF642D' },
              { name: 'Screaming Frog', icon: '🐸', color: '#7BBD42' },{ name: 'PageSpeed Insights', icon: '⚡', color: '#4285F4' },{ name: 'Schema.org', icon: '🏷️', color: '#E34C26' },{ name: 'GTmetrix', icon: '🚀', color: '#68A063' },
            ].map((tech, i) => (
              <div key={i} className="svc-tech-item"><span className="svc-tech-icon">{tech.icon}</span><span className="svc-tech-name">{tech.name}</span><div className="svc-tech-glow" style={{ background: `${tech.color}20` }} /></div>
            ))}
          </div>
        </div>
      </section>

      <section className="svc-cta">
        <div className="svc-cta-bg"><div className="svc-cta-orb svc-cta-orb-1" /><div className="svc-cta-orb svc-cta-orb-2" /></div>
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="svc-cta-content">
            <span className="section-label" style={{ justifyContent: 'center' }}>Let&apos;s Rank</span>
            <h2 className="svc-cta-title">Ready to Rank #1 on <span className="gradient-text">Google?</span></h2>
            <p className="svc-cta-desc">Let&apos;s build an SEO strategy that drives real organic traffic and converts visitors into customers.</p>
            <div className="svc-cta-actions">
              <Link href="/contact" className="svc-cta-btn-primary">Get a Free Audit <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg></Link>
              <a href="https://wa.me/917983505861" target="_blank" rel="noopener noreferrer" className="svc-cta-btn-secondary">💬 WhatsApp Us</a>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .svc-hero{position:relative;min-height:90vh;display:flex;align-items:center;padding:140px 0 80px;overflow:hidden}.svc-hero-bg{position:absolute;inset:0;pointer-events:none}.svc-hero-orb{position:absolute;border-radius:50%;filter:blur(120px);animation:floatOrb 8s ease-in-out infinite}.svc-hero-orb-1{width:600px;height:600px;background:rgba(71,164,72,.12);top:-200px;right:-100px}.svc-hero-orb-2{width:400px;height:400px;background:rgba(0,212,170,.1);bottom:-100px;left:-100px;animation-delay:3s}.svc-hero-orb-3{width:300px;height:300px;background:rgba(108,99,255,.08);top:50%;left:50%;animation-delay:5s}.svc-hero-grid{position:absolute;inset:0;background-image:linear-gradient(rgba(255,255,255,.02) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.02) 1px,transparent 1px);background-size:60px 60px}@keyframes floatOrb{0%,100%{transform:translateY(0) scale(1)}50%{transform:translateY(-30px) scale(1.05)}}.svc-hero-badge{display:inline-flex;align-items:center;gap:10px;padding:8px 20px;border-radius:50px;background:var(--bg-glass);border:1px solid var(--border);font-size:.82rem;font-weight:600;color:var(--accent);margin-bottom:28px;backdrop-filter:blur(10px);animation:fadeInUp .6s ease both}.svc-hero-badge-dot{width:8px;height:8px;border-radius:50%;background:var(--accent);box-shadow:0 0 12px var(--accent);animation:pulse 2s ease infinite}@keyframes pulse{0%,100%{opacity:1;transform:scale(1)}50%{opacity:.5;transform:scale(.8)}}@keyframes fadeInUp{from{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}.svc-hero-title{font-family:'Space Grotesk',sans-serif;font-size:clamp(2.5rem,5vw,3.8rem);font-weight:800;line-height:1.15;margin-bottom:20px;animation:fadeInUp .6s ease .1s both}.svc-hero-desc{font-size:1.05rem;color:var(--text-secondary);line-height:1.8;max-width:600px;margin-bottom:32px;animation:fadeInUp .6s ease .2s both}.svc-hero-actions{display:flex;gap:16px;flex-wrap:wrap;margin-bottom:48px;animation:fadeInUp .6s ease .3s both}.svc-hero-stats{display:flex;gap:40px;flex-wrap:wrap;animation:fadeInUp .6s ease .4s both}.svc-hero-stat{display:flex;flex-direction:column;gap:4px}.svc-hero-stat-num{font-family:'Space Grotesk',sans-serif;font-size:1.8rem;font-weight:800;background:linear-gradient(135deg,#fff,var(--accent-light));-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text}.svc-hero-stat-label{font-size:.8rem;color:var(--text-muted);font-weight:500;text-transform:uppercase;letter-spacing:1px}.svc-section-header{text-align:center;margin-bottom:56px}.svc-section-title{font-family:'Space Grotesk',sans-serif;font-size:clamp(1.6rem,3vw,2.4rem);font-weight:800;margin-bottom:12px}.svc-section-subtitle{font-size:.95rem;color:var(--text-secondary);max-width:520px;margin:0 auto;line-height:1.7}.svc-features{padding:80px 0}.svc-features-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:24px}.svc-feature-card{position:relative;padding:32px 28px;border-radius:20px;background:rgba(20,20,35,.6);border:1px solid var(--border);backdrop-filter:blur(10px);transition:all .4s cubic-bezier(.175,.885,.32,1.275);overflow:hidden;cursor:default}.svc-feature-card-glow{position:absolute;top:0;left:0;right:0;height:100%;border-radius:20px;opacity:0;transition:opacity .4s ease}.svc-feature-card:hover .svc-feature-card-glow,.svc-feature-card.active .svc-feature-card-glow{opacity:1}.svc-feature-card:hover{transform:translateY(-8px);border-color:rgba(108,99,255,.3);box-shadow:0 20px 60px rgba(0,0,0,.3),0 0 30px rgba(108,99,255,.08)}.svc-feature-icon{position:relative;z-index:2;width:56px;height:56px;border-radius:16px;display:flex;align-items:center;justify-content:center;font-size:1.6rem;margin-bottom:20px;transition:transform .3s ease}.svc-feature-card:hover .svc-feature-icon{transform:scale(1.1) rotate(5deg)}.svc-feature-title{position:relative;z-index:2;font-family:'Space Grotesk',sans-serif;font-size:1.1rem;font-weight:700;margin-bottom:10px}.svc-feature-desc{position:relative;z-index:2;font-size:.88rem;color:var(--text-secondary);line-height:1.7;margin:0}.svc-feature-line{position:absolute;bottom:0;left:0;right:0;height:2px;opacity:0;transition:opacity .3s ease}.svc-feature-card:hover .svc-feature-line{opacity:1}.svc-process{position:relative;padding:80px 0;overflow:hidden}.svc-process-bg{position:absolute;inset:0;background:radial-gradient(circle at 30% 50%,rgba(71,164,72,.04),transparent 60%),radial-gradient(circle at 70% 50%,rgba(0,212,170,.04),transparent 60%);pointer-events:none}.svc-timeline{display:grid;grid-template-columns:repeat(2,1fr);gap:24px}.svc-timeline-item{display:flex;gap:20px;padding:32px 28px;border-radius:20px;background:rgba(20,20,35,.5);border:1px solid var(--border);backdrop-filter:blur(10px);transition:all .4s cubic-bezier(.175,.885,.32,1.275);cursor:default}.svc-timeline-item:hover,.svc-timeline-item.active{transform:translateY(-6px);border-color:rgba(0,212,170,.3);box-shadow:0 20px 60px rgba(0,0,0,.3),0 0 30px rgba(0,212,170,.06)}.svc-timeline-num-wrap{display:flex;flex-direction:column;align-items:center;gap:8px;flex-shrink:0}.svc-timeline-num{font-family:'Space Grotesk',sans-serif;font-size:2rem;font-weight:800;background:linear-gradient(135deg,var(--accent),var(--primary-light));-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;line-height:1}.svc-timeline-icon{font-size:1.2rem;transition:transform .3s ease}.svc-timeline-item:hover .svc-timeline-icon{transform:scale(1.3)}.svc-timeline-title{font-family:'Space Grotesk',sans-serif;font-size:1.1rem;font-weight:700;margin-bottom:8px}.svc-timeline-desc{font-size:.88rem;color:var(--text-secondary);line-height:1.7;margin:0}.svc-tech-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:16px}.svc-tech-item{position:relative;display:flex;flex-direction:column;align-items:center;gap:10px;padding:28px 16px;border-radius:16px;background:rgba(20,20,35,.5);border:1px solid var(--border);transition:all .3s ease;cursor:default;overflow:hidden}.svc-tech-glow{position:absolute;inset:0;border-radius:16px;opacity:0;transition:opacity .3s ease}.svc-tech-item:hover .svc-tech-glow{opacity:1}.svc-tech-item:hover{transform:translateY(-4px);border-color:rgba(108,99,255,.3);box-shadow:0 12px 40px rgba(0,0,0,.2)}.svc-tech-icon{position:relative;z-index:2;font-size:2rem;transition:transform .3s ease}.svc-tech-item:hover .svc-tech-icon{transform:scale(1.2) rotate(5deg)}.svc-tech-name{position:relative;z-index:2;font-size:.85rem;font-weight:600;color:var(--text-secondary)}.svc-cta{position:relative;padding:100px 0;overflow:hidden}.svc-cta-bg{position:absolute;inset:0;pointer-events:none}.svc-cta-orb{position:absolute;border-radius:50%;filter:blur(100px)}.svc-cta-orb-1{width:500px;height:500px;background:rgba(71,164,72,.1);top:-100px;left:20%;animation:floatOrb 6s ease-in-out infinite}.svc-cta-orb-2{width:400px;height:400px;background:rgba(0,212,170,.08);bottom:-100px;right:20%;animation:floatOrb 8s ease-in-out infinite reverse}.svc-cta-content{text-align:center;padding:60px 40px;border-radius:24px;background:linear-gradient(135deg,rgba(108,99,255,.08),rgba(0,212,170,.05));border:1px solid rgba(108,99,255,.15);backdrop-filter:blur(20px);position:relative;overflow:hidden}.svc-cta-content::before{content:'';position:absolute;top:0;left:0;right:0;height:1px;background:linear-gradient(90deg,transparent,rgba(108,99,255,.5),transparent)}.svc-cta-title{font-family:'Space Grotesk',sans-serif;font-size:clamp(1.5rem,3vw,2.4rem);font-weight:800;margin-bottom:16px}.svc-cta-desc{font-size:1rem;color:var(--text-secondary);max-width:500px;margin:0 auto 32px;line-height:1.7}.svc-cta-actions{display:flex;gap:16px;justify-content:center;flex-wrap:wrap}.svc-cta-btn-primary{display:inline-flex;align-items:center;gap:10px;padding:14px 32px;border-radius:50px;background:linear-gradient(135deg,var(--accent),var(--primary-light));color:#fff;font-size:.95rem;font-weight:700;text-decoration:none;transition:all .3s ease;box-shadow:0 4px 20px rgba(0,212,170,.3)}.svc-cta-btn-primary:hover{transform:translateY(-2px);box-shadow:0 8px 32px rgba(0,212,170,.4)}.svc-cta-btn-secondary{display:inline-flex;align-items:center;gap:8px;padding:14px 32px;border-radius:50px;background:transparent;border:1px solid var(--border);color:var(--text-primary);font-size:.95rem;font-weight:600;text-decoration:none;transition:all .3s ease}.svc-cta-btn-secondary:hover{border-color:rgba(108,99,255,.4);background:rgba(108,99,255,.05);transform:translateY(-2px)}@media(max-width:1024px){.svc-features-grid{grid-template-columns:repeat(2,1fr)}}@media(max-width:768px){.svc-hero{min-height:auto;padding:120px 0 60px}.svc-hero-title{font-size:clamp(1.8rem,5vw,2.5rem)}.svc-features-grid{grid-template-columns:1fr}.svc-timeline{grid-template-columns:1fr}.svc-tech-grid{grid-template-columns:repeat(2,1fr)}.svc-hero-stats{gap:24px}.svc-cta-content{padding:40px 24px}}@media(max-width:480px){.svc-tech-grid{grid-template-columns:repeat(2,1fr)}}
      `}</style>
    </>
  );
}
