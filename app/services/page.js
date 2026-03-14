'use client';

import Link from 'next/link';

const services = [
  {
    icon: '💻',
    title: 'Frontend Development',
    slug: 'frontend-development',
    desc: 'We engineer immersive, lightning-fast web experiences using modern frameworks like Next.js and React. Our frontends are built for absolute scale, accessibility, and pixel-perfect precision.',
    features: ['Responsive UI Architecture', 'Cross-browser Compatibility', 'Core Web Vitals Optimization', 'Component-Driven Design', 'Seamless API Integration', 'Advanced Micro-Animations'],
    tech: ['HTML', 'CSS', 'JavaScript', 'Angular', 'Next.js', 'React'],
    color: '#6C63FF',
  },
  {
    icon: '📝',
    title: 'WordPress Development',
    slug: 'wordpress-development',
    desc: 'Empower your team with lightning-fast, highly secure headless CMS architectures and bespoke WordPress integrations engineered for ultimate flexibility and limitless scaling.',
    features: ['Headless CMS Integration', 'Bespoke Theme Development', 'High-volume WooCommerce', 'Enterprise-grade Security', 'Automated Content Migration', 'Server-side Optimization'],
    tech: ['WordPress', 'PHP', 'MySQL', 'Next.js', 'GraphQL'],
    color: '#21759B',
  },
  {
    icon: '🔍',
    title: 'SEO Optimization',
    slug: 'seo-optimization',
    desc: 'A stunning digital presence is useless if nobody finds it. We execute aggressive, data-backed technical SEO strategies to guarantee top-tier search rankings and explosive organic acquisition.',
    features: ['Complete Technical Audits', 'Advanced Schema Protocol', 'Core Web Vitals Engineering', 'Competitor Gap Analysis', 'Semantic HTML Structuring', 'Performance Monitoring'],
    tech: ['Google Search Console', 'Ahrefs', 'Semrush', 'Lighthouse'],
    color: '#47A248',
  },
  {
    icon: '🛍️',
    title: 'Shopify Expert',
    slug: 'shopify-expert',
    desc: 'We architect high-converting online stores that dominate your market. From bespoke Shopify theme development to complex headless commerce, we turn casual scrollers into loyal buyers.',
    features: ['Bespoke Theme Engineering', 'Complex App Customizations', 'Headless Commerce via Next.js', 'Frictionless Checkouts', 'Conversion Rate Optimization', 'Global Store Migration'],
    tech: ['Shopify Plus', 'Liquid templating', 'Hydrogen', 'GraphQL'],
    color: '#96BF48',
  },
];

const process_steps = [
  { number: '01', title: 'Strategic Autopsy', desc: 'Thoroughly analyzing your brand objectives, competitors, and technical architecture to forge an impenetrable blueprint.' },
  { number: '02', title: 'UX/UI Wireframing', desc: 'Mapping user journeys and crafting pixel-perfect, conversion-optimized interfaces prior to development.' },
  { number: '03', title: 'Precision Engineering', desc: 'Executing the build with cutting-edge frameworks, uncompromising code quality, and surgical precision.' },
  { number: '04', title: 'Deployment & Scale', desc: 'Rigorous performance auditing, frictionless launch, and ongoing specialized support.' },
];

export default function Services() {
  return (
    <>
      {/* Page Header */}
      <section className="page-header">
        <div className="page-header-glow" />
        <div className="container">
          <span className="section-label">What We Offer</span>
          <h1 className="page-title">Our <span className="gradient-text">Services</span></h1>
          <p className="page-subtitle">
            Premium, highly-engineered digital architectures designed to scale your enterprise and dominate the web.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="section services-section">
        <div className="container">
          <div className="services-list">
            {services.map((service, i) => (
              <div key={i} className="service-detail-card glass-card">
                <div className="service-detail-header">
                  <div className="service-icon-large" style={{ background: `${service.color}18` }}>
                    <span>{service.icon}</span>
                  </div>
                  <div>
                    <h2 className="service-detail-title">{service.title}</h2>
                    <p className="service-detail-desc">{service.desc}</p>
                  </div>
                </div>

                <div className="service-detail-body">
                  <div className="service-features">
                    <h4 className="features-heading">What&apos;s Included</h4>
                    <ul className="features-list">
                      {service.features.map((f, j) => (
                        <li key={j} className="feature-item">
                          <span className="feature-check" style={{ color: service.color }}>✓</span>
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="service-tech">
                    <h4 className="features-heading">Technologies</h4>
                    <div className="tech-tags">
                      {service.tech.map((t) => (
                        <span key={t} className="tech-tag" style={{ borderColor: `${service.color}40` }}>{t}</span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="service-read-more">
                  <Link href={`/services/${service.slug}`} className="read-more-btn" style={{ borderColor: `${service.color}40`, color: service.color }}>
                    Read More →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section process-section">
        <div className="container">
          <div className="section-header-center">
            <span className="section-label">How We Work</span>
            <h2 className="section-title">Our Process</h2>
            <p className="section-subtitle" style={{ margin: '0 auto' }}>
              A streamlined workflow that ensures quality delivery on every project.
            </p>
          </div>

          <div className="process-grid">
            {process_steps.map((step, i) => (
              <div key={i} className="process-card glass-card">
                <span className="process-number gradient-text">{step.number}</span>
                <h3 className="process-title">{step.title}</h3>
                <p className="process-desc">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="container">
          <div className="services-cta-card">
            <h2>Need a Custom Solution?</h2>
            <p>Our engineering team is ready to architect the perfect bespoke solution for your toughest digital challenges.</p>
            <div className="cta-btns">
              <Link href="/contact" className="btn btn-primary">Start a Project</Link>
              <a href="https://wa.me/917983505861" target="_blank" rel="noopener noreferrer" className="btn btn-outline">💬 WhatsApp</a>
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

        .services-list {
          display: flex;
          flex-direction: column;
          gap: 32px;
        }

        /* services-section spacing tweaks */
        .services-section {
          padding: 30px 0;
        }

        .service-detail-card {
          padding: 40px;
          background: var(--bg-card);
          border: 1px solid var(--border);
          border-radius: var(--border-radius-lg);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .service-detail-card:hover {
          transform: translateY(-6px);
          box-shadow: var(--shadow-md);
        }

        .service-detail-card:hover {
          transform: translateY(-2px);
        }

        .service-detail-header {
          display: flex;
          gap: 24px;
          margin-bottom: 32px;
          align-items: flex-start;
        }

        .service-icon-large {
          width: 72px;
          height: 72px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 2rem;
          flex-shrink: 0;
          background: var(--bg-primary);
          box-shadow: 0 0 12px var(--primary-glow);
          transition: transform 0.3s;
        }

        .service-icon-large:hover {
          transform: scale(1.1);
        }

        .service-detail-title {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 1.5rem;
          font-weight: 700;
          margin-bottom: 10px;
        }

        .service-detail-desc {
          font-size: 0.95rem;
          color: var(--text-secondary);
          line-height: 1.8;
        }

        .service-detail-body {
          display: grid;
          grid-template-columns: 1.5fr 1fr;
          gap: 40px;
        }

        .features-heading {
          font-size: 0.85rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 1px;
          color: var(--text-muted);
          margin-bottom: 16px;
        }

        .features-list {
          list-style: none;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 10px;
        }

        .feature-item {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 0.9rem;
          color: var(--text-secondary);
        }

        .feature-check {
          font-weight: 700;
          font-size: 1rem;
        }

        .tech-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }

        .tech-tag {
          padding: 6px 14px;
          border-radius: 20px;
          background: var(--bg-secondary);
          border: 1px solid var(--border);
          font-size: 0.8rem;
          color: var(--text-secondary);
          font-weight: 500;
        }

        /* Read More */
        .service-read-more {
          margin-top: 24px;
          padding-top: 20px;
          border-top: 1px solid var(--border);
        }

        .read-more-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 10px 24px;
          border-radius: 50px;
          border: 1px solid;
          background: transparent;
          font-size: 0.9rem;
          font-weight: 600;
          text-decoration: none;
          transition: var(--transition);
        }

        .read-more-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.3);
        }

        /* Process */
        .section-header-center {
          text-align: center;
          margin-bottom: 30px;
        }

        .section-header-center .section-label {
          justify-content: center;
        }

        .process-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
        }

        .process-card {
          text-align: center;
          padding: 30px 20px;
          position: relative;
        }

        .process-number {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 2.5rem;
          font-weight: 800;
          display: block;
          margin-bottom: 16px;
        }

        .process-title {
          font-size: 1.05rem;
          font-weight: 600;
          margin-bottom: 10px;
        }

        .process-desc {
          font-size: 0.85rem;
          color: var(--text-secondary);
          line-height: 1.7;
        }

        /* CTA */
        .services-cta-card {
          text-align: center;
          padding: 30px 40px;
          background: var(--bg-card);
          border: 1px solid var(--border);
          border-radius: var(--border-radius-lg);
        }

        .services-cta-card h2 {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 1.8rem;
          font-weight: 700;
          margin-bottom: 12px;
        }

        .services-cta-card p {
          color: var(--text-secondary);
          margin-bottom: 28px;
        }

        .cta-btns {
          display: flex;
          gap: 16px;
          justify-content: center;
          flex-wrap: wrap;
        }

        @media (max-width: 768px) {
          .service-detail-card {
            padding: 24px;
          }

          .service-detail-header {
            flex-direction: column;
          }

          .service-detail-body {
            grid-template-columns: 1fr;
            gap: 24px;
          }

          .features-list {
            grid-template-columns: 1fr;
          }

          .process-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
      `}</style>
    </>
  );
}
