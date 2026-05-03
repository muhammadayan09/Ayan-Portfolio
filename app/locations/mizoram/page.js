'use client';

import Link from 'next/link';

const serviceLanes = [
  {
    title: 'Business Website Builds',
    stat: 'Modern launch',
    desc: 'We design polished business websites for Mizoram brands that need credibility, clarity, and a stronger digital first impression.',
  },
  {
    title: 'Redesign And Cleanup',
    stat: 'Sharper UX',
    desc: 'If your current site feels outdated, slow, or visually inconsistent, we rebuild it into a cleaner and more confident experience.',
  },
  {
    title: 'Landing Pages That Convert',
    stat: 'Lead-ready',
    desc: 'We create focused pages for services, campaigns, and offers so visitors understand your value quickly and take action.',
  },
];

const outcomes = [
  'Premium website look with better visual consistency',
  'Mobile-friendly sections that feel smooth on every screen',
  'Clearer messaging and stronger contact flow',
  'A digital presence built around trust, not clutter',
];

const process = [
  {
    step: '01',
    title: 'Business Discovery',
    desc: 'We understand your business goals, audience, and current website gaps before defining the direction.',
  },
  {
    step: '02',
    title: 'Page Structure',
    desc: 'We map each section for clarity so users can understand your offer without friction.',
  },
  {
    step: '03',
    title: 'Design And Development',
    desc: 'We build a fast, visually refined website with modern layouts, better hierarchy, and clean interactions.',
  },
  {
    step: '04',
    title: 'Launch Support',
    desc: 'Once live, we help refine content, page flow, and presentation so the website keeps performing better over time.',
  },
];

const sectors = [
  'Healthcare websites',
  'Real estate businesses',
  'Professional service firms',
  'Coaching and education brands',
  'Studios and creative businesses',
  'Local ecommerce stores',
];

const faqItems = [
  {
    num: '01',
    q: 'What kind of websites do you build for Mizoram businesses?',
    a: 'We build business websites, service-led websites, redesigns, landing pages, and modern brand websites tailored to how your company presents itself online.',
  },
  {
    num: '02',
    q: 'Can you redesign my existing website instead of making a new one?',
    a: 'Yes. If your current website is outdated or inconsistent, we can redesign it with better layout, cleaner visuals, and a stronger contact journey.',
  },
  {
    num: '03',
    q: 'Will the website work well on mobile devices?',
    a: 'Absolutely. We build for mobile-first browsing so the pages feel smooth, readable, and properly structured across screen sizes.',
  },
  {
    num: '04',
    q: 'Do you help with content direction as well?',
    a: 'Yes. We help shape the section order, headline direction, content hierarchy, and messaging so the website feels more professional and complete.',
  },
  {
    num: '05',
    q: 'How fast can a Mizoram website project go live?',
    a: 'That depends on scope, but focused websites and landing pages can usually move much faster when content and decisions are ready.',
  },
];

export default function MizoramLocationPage() {
  return (
    <>
      <section className="delhi-hero">
        <div className="hero-noise" />
        <div className="hero-orbit hero-orbit-a" />
        <div className="hero-orbit hero-orbit-b" />
        <div className="container">
          <div className="hero-grid">
            <div className="hero-copy">
              <span className="eyebrow">Mizoram Website Page</span>
              <h1>
                Website Agency In <span>Mizoram</span> For Modern Business Growth
              </h1>
              <p className="hero-lead">
                We build clean, high-performing websites for Mizoram businesses that want to look
                more professional, feel more premium, and convert visitors with confidence.
              </p>
              <p className="hero-support">
                Whether you need a fresh business website, a redesign, or a focused service page,
                PilatuWeb helps you launch a stronger online presence with thoughtful structure and modern design.
              </p>
              <div className="hero-actions">
                <Link href="/contact/" className="btn btn-primary">
                  Start A Website Project
                </Link>
                <Link href="/services/" className="btn btn-outline">
                  Explore Services
                </Link>
              </div>
            </div>

            <div className="hero-panel">
              <div className="signal-card glass-card">
                <div className="signal-top">
                  <span className="signal-tag">What We Focus On</span>
                  <span className="signal-dot" />
                </div>
                <div className="signal-grid">
                  <div>
                    <strong>Clear Website Structure</strong>
                    <p>Visitors should understand what you do in seconds, not minutes.</p>
                  </div>
                  <div>
                    <strong>Professional Visuals</strong>
                    <p>Layouts, spacing, typography, and sections designed to feel intentional.</p>
                  </div>
                  <div>
                    <strong>Mobile Experience</strong>
                    <p>Your website should read well and feel smooth on smaller screens too.</p>
                  </div>
                  <div>
                    <strong>Lead Generation</strong>
                    <p>Calls to action and content flow shaped around real enquiries.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section intro-strip">
        <div className="container">
          <div className="intro-card">
            <div>
              <span className="section-label">Mizoram Presence</span>
              <h2 className="section-title">A Better Website Can Change How Your Business Is Perceived</h2>
            </div>
            <p>
              In a crowded market like Mizoram, your website needs to feel dependable, polished, and easy to
              understand. We focus on website quality first so your business looks sharper from the first click.
            </p>
          </div>
        </div>
      </section>

      <section className="section lanes-section">
        <div className="container">
          <div className="section-header-center">
            <span className="section-label">Website Services</span>
            <h2 className="section-title">What We Can Build For Mizoram Businesses</h2>
          </div>
          <div className="lanes-grid">
            {serviceLanes.map((lane) => (
              <article key={lane.title} className="lane-card glass-card">
                <span className="lane-stat">{lane.stat}</span>
                <h3>{lane.title}</h3>
                <p>{lane.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section outcomes-section">
        <div className="container outcomes-grid">
          <div className="outcomes-copy">
            <span className="section-label">What You Get</span>
            <h2 className="section-title">A Website That Looks Better And Works Harder</h2>
            <p>
              We do not build generic pages just to fill space. The goal is a website that feels
              stronger visually, explains your offer clearly, and helps people trust your business faster.
            </p>
          </div>
          <div className="outcomes-list glass-card">
            {outcomes.map((item) => (
              <div key={item} className="outcome-item">
                <span className="outcome-mark">+</span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section process-section">
        <div className="container">
          <div className="section-header-center">
            <span className="section-label">How We Work</span>
            <h2 className="section-title">Our Mizoram Website Process</h2>
          </div>
          <div className="process-grid">
            {process.map((item) => (
              <div key={item.step} className="process-card glass-card">
                <span className="process-step">{item.step}</span>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section sectors-section">
        <div className="container sectors-wrap">
          <div className="sectors-panel">
            <span className="section-label">Best Fit</span>
            <h2 className="section-title">Businesses We Can Support Well</h2>
          </div>
          <div className="sector-cloud">
            {sectors.map((sector) => (
              <span key={sector} className="sector-pill">
                {sector}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '80px 0' }}>
        <div className="container">
          <div className="faq-grid-home">
            <div className="faq-sticky">
              <span className="section-label">FAQ</span>
              <h2 className="faq-title">
                Mizoram Website <span className="gradient-text">Questions</span>
              </h2>
              <p className="faq-copy">
                A few quick answers about how we approach website projects for businesses in Mizoram.
              </p>
              <a
                href="https://wa.me/917983505861?text=Hi!%20I%20want%20a%20website%20for%20my%20Mizoram%20business."
                target="_blank"
                rel="noopener noreferrer"
                className="faq-whatsapp"
              >
                Ask About Your Website
              </a>
            </div>

            <div className="faq-cards">
              {faqItems.map((item) => (
                <div key={item.num} className="faq-item-home">
                  <div className="faq-item-inner">
                    <span className="faq-num">{item.num}</span>
                    <div>
                      <h3>{item.q}</h3>
                      <p>{item.a}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="cta-card delhi-cta">
            <div className="cta-line" />
            <div className="delhi-cta-grid">
              <div className="delhi-cta-copy">
                <span className="section-label">Ready To Launch</span>
                <h2 className="cta-title">Need A Better Website For Your Mizoram Business?</h2>
                <p className="cta-desc">
                  We can help you create a business website, landing page, or redesign that feels more polished and more effective.
                </p>
                <div className="cta-actions">
                  <Link href="/contact/" className="btn btn-primary">
                    Book A Discussion
                  </Link>
                  <Link href="/locations/" className="btn btn-outline">
                    View Locations
                  </Link>
                </div>
              </div>

              <div className="delhi-cta-panel">
                <span className="cta-panel-label">What You Can Start With</span>
                <div className="cta-points">
                  <span className="cta-point">Business website</span>
                  <span className="cta-point">Landing page</span>
                  <span className="cta-point">Website redesign</span>
                  <span className="cta-point">Modern service page</span>
                </div>
                <p className="cta-panel-copy">
                  If you already know the city and service focus, we can turn it into a polished page structure quickly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .delhi-hero {
          position: relative;
          overflow: hidden;
          padding: 150px 0 70px;
          background:
            radial-gradient(circle at 15% 20%, rgba(255, 153, 0, 0.18), transparent 28%),
            radial-gradient(circle at 85% 25%, rgba(0, 212, 170, 0.16), transparent 24%),
            linear-gradient(160deg, rgba(15, 18, 30, 0.98), rgba(22, 26, 45, 0.95));
        }
        .hero-noise { position: absolute; inset: 0; background-image: linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px); background-size: 32px 32px; mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.85), transparent); pointer-events: none; }
        .hero-orbit { position: absolute; border-radius: 999px; border: 1px solid rgba(255,255,255,0.08); pointer-events: none; }
        .hero-orbit-a { width: 540px; height: 540px; top: -180px; right: -80px; transform: rotate(15deg); }
        .hero-orbit-b { width: 360px; height: 360px; bottom: -140px; left: -80px; transform: rotate(-12deg); }
        .hero-grid, .intro-card, .outcomes-grid, .sectors-wrap { display: grid; grid-template-columns: 1.2fr 0.8fr; gap: 34px; align-items: center; position: relative; z-index: 1; }
        .eyebrow { display: inline-block; margin-bottom: 18px; padding: 8px 14px; border-radius: 999px; background: rgba(255,153,0,0.14); border: 1px solid rgba(255,153,0,0.24); color: #ffd39a; font-size: 0.82rem; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; }
        .hero-copy h1, .faq-title { font-family: var(--font-display), sans-serif; font-size: clamp(2.5rem, 7vw, 5rem); line-height: 0.98; letter-spacing: -0.04em; margin-bottom: 20px; }
        .hero-copy h1 span { color: #ffb24c; }
        .hero-lead { font-size: 1.16rem; line-height: 1.8; color: var(--text-primary); max-width: 60ch; margin-bottom: 14px; }
        .hero-support, .intro-card p, .outcomes-copy p, .lane-card p, .process-card p, .faq-copy, .faq-item-home p { color: var(--text-secondary); line-height: 1.85; }
        .hero-actions, .cta-actions { display: flex; gap: 14px; flex-wrap: wrap; }
        .signal-card, .outcomes-list, .lane-card, .process-card, .faq-item-home { padding: 28px; background: linear-gradient(180deg, rgba(255,255,255,0.04), rgba(255,255,255,0.02)), rgba(18,22,36,0.82); }
        .signal-top { display: flex; align-items: center; justify-content: space-between; margin-bottom: 24px; }
        .signal-tag, .lane-stat { font-size: 0.82rem; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; }
        .signal-tag { color: var(--text-muted); }
        .signal-dot { width: 12px; height: 12px; border-radius: 50%; background: #00d4aa; box-shadow: 0 0 20px rgba(0,212,170,0.7); }
        .signal-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 14px; }
        .signal-grid div { padding: 16px; border-radius: 18px; background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.06); }
        .signal-grid strong, .lane-card h3, .process-card h3, .faq-item-home h3 { display: block; margin-bottom: 8px; font-family: var(--font-display), sans-serif; }
        .signal-grid p { margin: 0; color: var(--text-secondary); line-height: 1.65; font-size: 0.88rem; }
        .intro-strip { padding-top: 24px; }
        .intro-card { grid-template-columns: 0.95fr 1.05fr; padding: 28px 30px; border-radius: 28px; background: linear-gradient(135deg, rgba(255,153,0,0.08), rgba(108,99,255,0.08)); border: 1px solid rgba(255,255,255,0.08); }
        .section-header-center { text-align: center; margin-bottom: 30px; }
        .section-header-center .section-label { justify-content: center; }
        .lanes-grid, .process-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 22px; }
        .lane-card { position: relative; overflow: hidden; }
        .lane-stat, .process-step { display: inline-block; margin-bottom: 16px; color: #ffb24c; }
        .outcomes-grid, .sectors-wrap { grid-template-columns: 0.9fr 1.1fr; }
        .outcome-item { display: grid; grid-template-columns: 28px 1fr; gap: 14px; padding: 14px 0; border-bottom: 1px solid rgba(255,255,255,0.07); color: var(--text-secondary); }
        .outcome-item:last-child { border-bottom: none; }
        .outcome-mark { color: #00d4aa; font-size: 1.1rem; font-weight: 700; }
        .process-section { background: linear-gradient(180deg, transparent, rgba(255,178,76,0.04)); }
        .process-grid { grid-template-columns: repeat(4, 1fr); gap: 20px; }
        .process-card { min-height: 220px; }
        .process-step { font-family: var(--font-display), sans-serif; font-size: 2rem; line-height: 1; font-weight: 700; }
        .sector-cloud { display: flex; flex-wrap: wrap; gap: 12px; }
        .sector-pill { padding: 14px 18px; border-radius: 999px; background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.08); color: var(--text-secondary); font-size: 0.94rem; }
        .faq-grid-home { display: grid; grid-template-columns: 1fr 1.5fr; gap: 60px; align-items: start; }
        .faq-sticky { position: sticky; top: 120px; }
        .faq-title { font-size: clamp(1.8rem, 3vw, 2.4rem); line-height: 1.2; margin-bottom: 16px; }
        .faq-copy { font-size: 0.95rem; margin-bottom: 28px; }
        .faq-whatsapp { display: inline-flex; align-items: center; gap: 8px; padding: 12px 24px; border-radius: 50px; background: linear-gradient(135deg, #25d366, #128c7e); color: #fff; font-size: 0.88rem; font-weight: 600; text-decoration: none; box-shadow: 0 4px 20px rgba(37,211,102,0.3); }
        .faq-cards { display: flex; flex-direction: column; gap: 16px; }
        .faq-item-home { border-radius: 16px; border: 1px solid var(--border); backdrop-filter: blur(10px); transition: all 0.3s ease; }
        .faq-item-home:hover { transform: translateY(-3px); box-shadow: 0 12px 40px rgba(108,99,255,0.1); border-color: rgba(108,99,255,0.3); }
        .faq-item-inner { display: flex; align-items: flex-start; gap: 16px; }
        .faq-num { font-family: var(--font-display), sans-serif; font-size: 1.5rem; font-weight: 800; color: rgba(108,99,255,0.15); flex-shrink: 0; line-height: 1; }
        .faq-item-home h3 { font-size: 1rem; font-weight: 700; margin-bottom: 8px; }
        .faq-item-home p { font-size: 0.88rem; margin: 0; }
        .delhi-cta {
          position: relative;
          overflow: hidden;
          padding: 34px;
          margin-bottom: 30px;
          background:
            radial-gradient(circle at top, rgba(255,178,76,0.12), transparent 35%),
            linear-gradient(145deg, rgba(20, 22, 36, 0.96), rgba(16, 18, 30, 0.94));
          border: 1px solid rgba(255,255,255,0.08);
        }
        .delhi-cta-grid {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: 24px;
          align-items: center;
        }
        .delhi-cta-copy {
          max-width: 680px;
        }
        .delhi-cta-panel {
          padding: 22px;
          border-radius: 22px;
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.08);
        }
        .cta-panel-label {
          display: inline-block;
          margin-bottom: 14px;
          color: #ffb24c;
          font-size: 0.82rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }
        .cta-points {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-bottom: 16px;
        }
        .cta-point {
          padding: 10px 14px;
          border-radius: 999px;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.07);
          color: var(--text-secondary);
          font-size: 0.85rem;
        }
        .cta-panel-copy {
          margin: 0;
          color: var(--text-secondary);
          line-height: 1.75;
          font-size: 0.92rem;
        }
        .cta-line { width: 72px; height: 4px; border-radius: 999px; background: linear-gradient(90deg, #ffb24c, #00d4aa); margin: 0 0 22px; }
        @media (max-width: 1024px) { .hero-grid, .intro-card, .outcomes-grid, .sectors-wrap, .faq-grid-home { grid-template-columns: 1fr; } .lanes-grid, .process-grid { grid-template-columns: repeat(2, 1fr); } .faq-sticky { position: static; } }
        @media (max-width: 1024px) { .delhi-cta-grid { grid-template-columns: 1fr; } }
        @media (max-width: 768px) { .delhi-hero { padding: 130px 0 56px; } .signal-grid, .lanes-grid, .process-grid { grid-template-columns: 1fr; } .hero-actions, .cta-actions { flex-direction: column; align-items: stretch; } .signal-card, .lane-card, .outcomes-list, .process-card, .faq-item-home, .delhi-cta { padding: 20px; } }
      `}</style>
    </>
  );
}

