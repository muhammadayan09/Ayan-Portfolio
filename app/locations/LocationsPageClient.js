'use client';

import Link from 'next/link';
import LocationsCarousel from './LocationsCarousel';

const locationBenefits = [
  {
    title: 'Reusable City Structure',
    desc: 'Each location page can follow a shared structure while still feeling tailored to the city, audience, and business category.',
  },
  {
    title: 'Cleaner Expansion Path',
    desc: 'As you add more locations, the hub page becomes a single place where visitors and search engines can discover all city pages.',
  },
  {
    title: 'Better Internal Linking',
    desc: 'A dedicated locations page gives your site a natural way to connect city pages with services, contact routes, and future case studies.',
  },
];

const buildSteps = [
  {
    step: '01',
    title: 'Choose The City',
    desc: 'We define which city page to launch first and what kind of businesses that page should speak to.',
  },
  {
    step: '02',
    title: 'Shape The Message',
    desc: 'We write the page around website quality, business presentation, and why that city-specific page matters.',
  },
  {
    step: '03',
    title: 'Connect The Pages',
    desc: 'We link locations with services, contact sections, and future city pages so the site grows as a connected system.',
  },
  {
    step: '04',
    title: 'Keep Expanding',
    desc: 'Once one location page is working well, we can roll out the same quality across additional cities without starting from zero.',
  },
];

const contentBlocks = [
  {
    label: 'Why A Hub Page',
    title: 'One Place To Organize Every Location',
    desc: 'Instead of scattering city pages without context, this hub creates a cleaner structure for future expansion. It gives visitors a simple way to browse city-specific pages and makes your site feel more intentional.',
  },
  {
    label: 'How We Use It',
    title: 'Each New City Can Feel Unique Without Reinventing Everything',
    desc: 'The layout, sections, and conversion flow can stay consistent while the messaging, city angle, and examples can be adapted for each location. That keeps the website scalable without making pages feel duplicated.',
  },
];

export default function LocationsPageClient({ featuredLocations }) {
  return (
    <>
      <section className="locations-hero">
        <div className="hero-grid-pattern" />
        <div className="hero-glow hero-glow-a" />
        <div className="hero-glow hero-glow-b" />
        <div className="container">
          <div className="hero-shell">
            <span className="section-label">Locations Hub</span>
            <h1 className="hero-title">Website Service Locations</h1>
            <p className="hero-copy">
              This page is designed to grow with your website. As we add more cities, it can work as
              the central hub for location-specific pages, local website offers, and future business expansion.
            </p>
            <div className="hero-actions">
              <Link href={featuredLocations[0]?.href || '/contact'} className="btn btn-primary">
                Open Live City
              </Link>
              <Link href="/contact/" className="btn btn-outline">
                Request New Location
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section overview-section">
        <div className="container">
          <div className="overview-grid">
            {contentBlocks.map((block) => (
              <article key={block.title} className="overview-card glass-card">
                <span className="overview-label">{block.label}</span>
                <h2>{block.title}</h2>
                <p>{block.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section locations-list-section">
        <div className="container">
          <LocationsCarousel locations={featuredLocations} />
        </div>
      </section>

      <section className="section benefits-section">
        <div className="container">
          <div className="benefits-shell">
            <div className="benefits-copy">
              <span className="section-label">Why This Setup Works</span>
              <h2 className="section-title">A Better Structure For Multi-Location Growth</h2>
              <p>
                If you know more city pages are coming, this hub helps the site stay organized from the start.
                Instead of treating each location like a disconnected page, we build a system that can scale neatly.
              </p>
            </div>
            <div className="benefits-list">
              {locationBenefits.map((item) => (
                <div key={item.title} className="benefit-card glass-card">
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section process-section">
        <div className="container">
          <div className="section-header-center">
            <span className="section-label">Expansion Flow</span>
            <h2 className="section-title">How We Can Add More Cities</h2>
          </div>
          <div className="process-grid">
            {buildSteps.map((item) => (
              <div key={item.step} className="process-card glass-card">
                <span className="process-step">{item.step}</span>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section city-cta-section">
        <div className="container">
          <div className="cta-card locations-cta">
            <div className="locations-cta-grid">
              <div className="locations-cta-copy">
                <div className="cta-line" />
                <span className="section-label">Next Step</span>
                <h2 className="cta-title">Ready To Add More Location Pages?</h2>
                <p className="cta-desc">
                  This hub is now wired so future location routes can automatically appear in the slider.
                  Once a new city page is created inside `app/locations`, it can join this section without manual card updates.
                </p>
                <div className="cta-actions">
                  <Link href={featuredLocations[0]?.href || '/contact'} className="btn btn-primary">
                    View Live City
                  </Link>
                  <Link href="/contact/" className="btn btn-outline">
                    Start Another City
                  </Link>
                </div>
              </div>

              <div className="locations-cta-panel">
                <span className="cta-panel-label">Automatic Flow</span>
                <h3 className="cta-panel-title">Add A City, And The Hub Updates Itself</h3>
                <div className="cta-badges">
                  <span className="cta-badge">Create city folder</span>
                  <span className="cta-badge">Add page.js</span>
                  <span className="cta-badge">Show in slider</span>
                </div>
                <p className="cta-panel-copy">
                  This keeps your locations page scalable as more city pages go live.
                </p>
                <div className="cta-panel-strip">
                  <span>Reusable setup</span>
                  <span>Cleaner growth</span>
                  <span>Less manual work</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .locations-hero {
          position: relative;
          overflow: hidden;
          padding: 150px 0 70px;
          text-align: center;
        }

        .hero-grid-pattern {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(255, 255, 255, 0.025) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.025) 1px, transparent 1px);
          background-size: 36px 36px;
          mask-image: radial-gradient(circle at center, black 35%, transparent 85%);
        }

        .hero-glow {
          position: absolute;
          border-radius: 999px;
          filter: blur(90px);
          opacity: 0.7;
        }

        .hero-glow-a {
          width: 360px;
          height: 360px;
          top: -60px;
          left: -80px;
          background: rgba(108, 99, 255, 0.2);
        }

        .hero-glow-b {
          width: 320px;
          height: 320px;
          right: -80px;
          bottom: -40px;
          background: rgba(0, 212, 170, 0.18);
        }

        .hero-shell {
          position: relative;
          z-index: 1;
          max-width: 820px;
          margin: 0 auto;
        }

        .hero-title {
          font-family: var(--font-display), sans-serif;
          font-size: clamp(2.6rem, 6vw, 4.8rem);
          line-height: 1;
          margin-bottom: 16px;
        }

        .hero-copy {
          color: var(--text-secondary);
          line-height: 1.85;
          font-size: 1rem;
          max-width: 720px;
          margin: 0 auto 28px;
        }

        .hero-actions {
          display: flex;
          gap: 14px;
          justify-content: center;
          flex-wrap: wrap;
        }

        .overview-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 24px;
        }

        .overview-card,
        .benefit-card,
        .process-card {
          padding: 30px;
        }

        .overview-label,
        .process-step {
          display: inline-block;
          font-size: 0.82rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: #00d4aa;
        }

        .overview-card h2,
        .benefit-card h3,
        .process-card h3 {
          font-family: var(--font-display), sans-serif;
        }

        .overview-card h2 {
          font-size: 1.5rem;
          margin: 14px 0 12px;
        }

        .overview-card p,
        .benefit-card p,
        .process-card p,
        .benefits-copy p {
          color: var(--text-secondary);
          line-height: 1.8;
          margin: 0;
        }

        .section-header-center {
          text-align: center;
          margin-bottom: 30px;
        }

        .section-header-center .section-label {
          justify-content: center;
        }

        .benefits-shell {
          display: grid;
          grid-template-columns: 0.9fr 1.1fr;
          gap: 26px;
          align-items: start;
        }

        .benefits-list {
          display: grid;
          gap: 18px;
        }

        .benefit-card h3 {
          font-size: 1.15rem;
          margin-bottom: 10px;
        }

        .process-section {
          background: linear-gradient(180deg, transparent, rgba(108, 99, 255, 0.04));
        }

        .process-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
        }

        .process-step {
          font-family: var(--font-display), sans-serif;
          font-size: 2rem;
          line-height: 1;
          margin-bottom: 16px;
        }

        .process-card h3 {
          font-size: 1.08rem;
          margin-bottom: 10px;
        }

        .locations-cta {
          position: relative;
          overflow: hidden;
          padding: 34px;
          margin-bottom: 32px;
          background:
            radial-gradient(circle at top left, rgba(108, 99, 255, 0.14), transparent 30%),
            radial-gradient(circle at bottom right, rgba(0, 212, 170, 0.14), transparent 35%),
            linear-gradient(145deg, rgba(18, 22, 36, 0.96), rgba(12, 14, 24, 0.94));
          border: 1px solid rgba(255, 255, 255, 0.08);
        }

        .cta-line {
          width: 72px;
          height: 4px;
          border-radius: 999px;
          background: linear-gradient(90deg, #6c63ff, #00d4aa);
          margin-bottom: 18px;
        }

        .locations-cta-grid {
          display: grid;
          grid-template-columns: 1.15fr 0.85fr;
          gap: 24px;
          align-items: center;
        }

        .locations-cta-panel {
          padding: 24px;
          border-radius: 22px;
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.1);
          box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.04);
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

        .cta-panel-title {
          font-family: var(--font-display), sans-serif;
          font-size: 1.3rem;
          line-height: 1.3;
          margin-bottom: 14px;
        }

        .cta-badges {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-bottom: 16px;
        }

        .cta-badge {
          padding: 10px 14px;
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.08);
          color: var(--text-secondary);
          font-size: 0.82rem;
        }

        .cta-panel-copy {
          margin: 0;
          color: var(--text-secondary);
          line-height: 1.75;
        }

        .cta-panel-strip {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-top: 18px;
        }

        .cta-panel-strip span {
          padding: 9px 12px;
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.06);
          color: var(--text-muted);
          font-size: 0.8rem;
        }

        @media (max-width: 1024px) {
          .process-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .benefits-shell,
          .overview-grid,
          .locations-cta-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 768px) {
          .process-grid {
            grid-template-columns: 1fr;
          }

          .hero-actions,
          .cta-actions {
            flex-direction: column;
            align-items: stretch;
          }

          .overview-card,
          .benefit-card,
          .process-card,
          .locations-cta {
            padding: 22px;
          }
        }
      `}</style>
    </>
  );
}

