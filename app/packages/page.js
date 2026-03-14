'use client';

import Link from 'next/link';

const packages = [
  {
    name: 'Starter',
    price: '₹7,999',
    period: 'one-time',
    icon: '🚀',
    color: '#6C63FF',
    popular: false,
    description: 'Perfect for startups and personal brands needing a premium, high-converting digital storefront.',
    features: [
      '1-3 Page Responsive Website',
      'Mobile-Friendly Design',
      'Contact Form Integration',
      'Basic SEO Setup',
      'Social Media Links',
      '1 Round of Revisions',
      '3-5 Days Delivery',
    ],
    notIncluded: [
      'Custom Animations',
      'Blog Integration',
      'E-commerce Features',
    ],
  },
  {
    name: 'Professional',
    price: '₹14,999',
    period: 'one-time',
    icon: '💼',
    color: '#00D4AA',
    popular: true,
    description: 'Ideal for scaling businesses seeking a powerful, bespoke digital presence with advanced integrations.',
    features: [
      '5-8 Page Modern Website',
      'Custom UI/UX Design',
      'Fully Responsive & Fast',
      'Advanced SEO Optimization',
      'Blog / News Section',
      'WhatsApp & Contact Integration',
      'Google Analytics Setup',
      'Social Media Integration',
      '3 Rounds of Revisions',
      '7-10 Days Delivery',
    ],
    notIncluded: [
      'E-commerce / Payment Gateway',
      'Custom Admin Panel',
    ],
  },
  {
    name: 'Business',
    price: '₹29,999',
    period: 'one-time',
    icon: '🏢',
    color: '#FF6B6B',
    popular: false,
    description: 'An all-encompassing digital architecture for established enterprises demanding custom eCommerce or CMS solutions.',
    features: [
      '10+ Page Custom Website',
      'WordPress / Shopify / Next.js',
      'E-commerce with Payment Gateway',
      'Custom Admin Dashboard',
      'Advanced Animations & Effects',
      'Performance Optimization',
      'Full SEO & Schema Markup',
      'Email Marketing Integration',
      'Live Chat / WhatsApp Widget',
      'Speed & Security Optimization',
      '5 Rounds of Revisions',
    ],
    notIncluded: [],
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: 'quote',
    icon: '👑',
    color: '#F5A623',
    popular: false,
    description: 'Architecting cutting-edge, highly custom SaaS platforms and enterprise applications from the ground up.',
    features: [
      'Unlimited Pages & Features',
      'Full-Stack Development',
      'Custom API Integrations',
      'SaaS / Web App Development',
      'Advanced Security & Auth',
      'CI/CD Pipeline Setup',
      'Database Design & Management',
      'Dedicated Project Manager',
      'Priority Support & Maintenance',
      'Unlimited Revisions',
      'Timeline as per Scope',
    ],
    notIncluded: [],
  },
];

const addons = [
  { icon: '🔧', title: 'Monthly Maintenance', price: '₹1,999/mo', desc: 'Regular updates, backups, security checks & bug fixes.' },
  { icon: '📝', title: 'Content Writing', price: '₹2,999', desc: 'SEO-optimized content for up to 10 pages of your website.' },
  { icon: '🎨', title: 'Logo & Branding', price: '₹999', desc: 'Professional logo design with brand identity guidelines.' },
  { icon: '📈', title: 'SEO Monthly Pack', price: '₹14,999/mo', desc: 'On-page, off-page SEO, keyword tracking & monthly reports.' },
  { icon: '🛒', title: 'E-commerce Setup', price: '₹7,999', desc: 'Complete store setup with products, payments & shipping.' },
  { icon: '⚡', title: 'Speed Optimization', price: '₹2,999', desc: 'Performance audit & optimization for blazing-fast load times.' },
];

export default function Packages() {
  return (
    <>
      {/* Page Header */}
      <section className="page-header">
        <div className="page-header-glow" />
        <div className="container">
          <span className="section-label">Pricing</span>
          <h1 className="page-title">Website <span className="gradient-text">Packages</span></h1>
          <p className="page-subtitle">
            Transparent, value-driven pricing structures engineered for ambitious projects. Select a tier that aligns with your trajectory or consult with us for a bespoke architecture.
          </p>
        </div>
      </section>

      {/* Packages Grid */}
      <section className="section">
        <div className="container">
          <div className="packages-grid">
            {packages.map((pkg, i) => (
              <div key={i} className={`package-card glass-card ${pkg.popular ? 'popular' : ''}`}>
                {pkg.popular && <div className="popular-badge">⭐ Most Popular</div>}
                
                <div className="package-icon-wrap" style={{ background: `${pkg.color}18` }}>
                  <span className="package-icon">{pkg.icon}</span>
                </div>
                
                <h2 className="package-name">{pkg.name}</h2>
                <p className="package-desc">{pkg.description}</p>
                
                <div className="package-price">
                  <span className="price-amount" style={{ color: pkg.color }}>{pkg.price}</span>
                  {pkg.period !== 'quote' && <span className="price-period">/ {pkg.period}</span>}
                </div>

                <div className="package-features">
                  {pkg.features.map((feature, j) => (
                    <div key={j} className="feature-item">
                      <span className="feature-check" style={{ color: pkg.color }}>✓</span>
                      <span>{feature}</span>
                    </div>
                  ))}
                  {pkg.notIncluded.map((feature, j) => (
                    <div key={j} className="feature-item not-included">
                      <span className="feature-cross">✕</span>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                <a
                  href={`https://wa.me/917983505861?text=${encodeURIComponent(`Hi! I'm interested in the ${pkg.name} package (${pkg.price}). Can we discuss?`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary package-btn"
                  style={{ background: pkg.popular ? `linear-gradient(135deg, ${pkg.color}, ${pkg.color}cc)` : undefined }}
                >
                  {pkg.period === 'quote' ? 'Get Custom Quote' : 'Get Started'}
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Add-ons Section */}
      <section className="section">
        <div className="container">
          <div className="section-header-center">
            <span className="section-label">Extras</span>
            <h2 className="section-title">Add-on Services</h2>
            <p className="section-subtitle" style={{ margin: '0 auto' }}>
              Scale your digital ecosystem with our specialized premium services.
            </p>
          </div>

          <div className="addons-grid">
            {addons.map((addon, i) => (
              <div key={i} className="addon-card glass-card">
                <div className="addon-header">
                  <span className="addon-icon">{addon.icon}</span>
                  <div>
                    <h3 className="addon-title">{addon.title}</h3>
                    <span className="addon-price">{addon.price}</span>
                  </div>
                </div>
                <p className="addon-desc">{addon.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section">
        <div className="container">
          <div className="section-header-center">
            <span className="section-label">How It Works</span>
            <h2 className="section-title">Our Process</h2>
          </div>

          <div className="process-grid">
            {[
              { step: '01', icon: '💬', title: 'Strategic Discovery', desc: 'We align on your core objectives, target demographics, and technical requirements to define a roadmap for success.' },
              { step: '02', icon: '🎨', title: 'UX/UI Architecture', desc: 'Crafting visually stunning, conversion-focused design systems and wireframes exclusively tailored for your brand.' },
              { step: '03', icon: '⚡', title: 'Precision Engineering', desc: 'Executing the build using cutting-edge frameworks, ensuring lightning-fast performance, security, and scalability.' },
              { step: '04', icon: '🚀', title: 'Deployment & Scaling', desc: 'Rigorous QA testing, seamless launch, and continuous post-deployment support to guarantee long-term dominance.' },
            ].map((item, i) => (
              <div key={i} className="process-card glass-card">
                <span className="process-step">{item.step}</span>
                <span className="process-icon">{item.icon}</span>
                <h3 className="process-title">{item.title}</h3>
                <p className="process-desc">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section">
        <div className="container">
          <div className="cta-box glass-card">
            <h2 className="cta-title">Not sure which package is right for you?</h2>
            <p className="cta-desc">Let&apos;s chat! I&apos;ll help you choose the perfect plan based on your goals and budget.</p>
            <div className="cta-actions">
              <a
                href="https://wa.me/917983505861?text=Hi!%20I%20need%20help%20choosing%20the%20right%20package.%20Can%20we%20discuss?"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                💬 Chat on WhatsApp
              </a>
              <Link href="/contact" className="btn btn-outline">
                📧 Send a Message
              </Link>
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
          max-width: 600px;
          margin: 0 auto;
          line-height: 1.8;
        }

        /* Packages Grid */
        .packages-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
          align-items: start;
        }

        .package-card {
          padding: 32px 28px;
          display: flex;
          flex-direction: column;
          position: relative;
          overflow: hidden;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .package-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
        }

        .package-card.popular {
          border: 2px solid #00D4AA;
          box-shadow: 0 0 40px rgba(0, 212, 170, 0.08);
        }

        .popular-badge {
          position: absolute;
          top: 16px;
          right: -32px;
          background: linear-gradient(135deg, #00D4AA, #00B894);
          color: #fff;
          font-size: 0.72rem;
          font-weight: 700;
          padding: 6px 40px;
          transform: rotate(45deg);
          letter-spacing: 0.5px;
        }

        .package-icon-wrap {
          width: 56px;
          height: 56px;
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 20px;
        }

        .package-icon {
          font-size: 1.5rem;
        }

        .package-name {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 1.4rem;
          font-weight: 700;
          margin-bottom: 8px;
        }

        .package-desc {
          font-size: 0.88rem;
          color: var(--text-secondary);
          line-height: 1.7;
          margin-bottom: 20px;
          min-height: 60px;
        }

        .package-price {
          display: flex;
          align-items: baseline;
          gap: 6px;
          margin-bottom: 24px;
          padding-bottom: 24px;
          border-bottom: 1px solid var(--border);
        }

        .price-amount {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 2rem;
          font-weight: 800;
        }

        .price-period {
          font-size: 0.85rem;
          color: var(--text-secondary);
        }

        .package-features {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 10px;
          margin-bottom: 28px;
        }

        .feature-item {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          font-size: 0.88rem;
          line-height: 1.5;
        }

        .feature-check {
          font-weight: 700;
          font-size: 0.9rem;
          flex-shrink: 0;
          margin-top: 1px;
        }

        .feature-item.not-included {
          opacity: 0.4;
          text-decoration: line-through;
        }

        .feature-cross {
          color: #FF6B6B;
          font-weight: 700;
          font-size: 0.9rem;
          flex-shrink: 0;
          margin-top: 1px;
        }

        .package-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          width: 100%;
          text-align: center;
        }

        /* Add-ons */
        .addons-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }

        .addon-card {
          padding: 24px;
          transition: transform 0.3s ease;
        }

        .addon-card:hover {
          transform: translateY(-3px);
        }

        .addon-header {
          display: flex;
          align-items: center;
          gap: 14px;
          margin-bottom: 12px;
        }

        .addon-icon {
          font-size: 1.6rem;
          flex-shrink: 0;
        }

        .addon-title {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 1rem;
          font-weight: 700;
          margin-bottom: 2px;
        }

        .addon-price {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--accent);
        }

        .addon-desc {
          font-size: 0.85rem;
          color: var(--text-secondary);
          line-height: 1.7;
        }

        /* Process */
        .process-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
        }

        .process-card {
          padding: 32px 24px;
          text-align: center;
          position: relative;
          transition: transform 0.3s ease;
        }

        .process-card:hover {
          transform: translateY(-4px);
        }

        .process-step {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 2.5rem;
          font-weight: 800;
          opacity: 0.08;
          position: absolute;
          top: 16px;
          right: 20px;
        }

        .process-icon {
          font-size: 2rem;
          display: block;
          margin-bottom: 16px;
        }

        .process-title {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 1.05rem;
          font-weight: 700;
          margin-bottom: 10px;
        }

        .process-desc {
          font-size: 0.85rem;
          color: var(--text-secondary);
          line-height: 1.7;
        }

        /* CTA */
        .cta-box {
          text-align: center;
          padding: 60px 40px;
          background: linear-gradient(135deg, rgba(108, 99, 255, 0.06), rgba(0, 212, 170, 0.06));
          border: 1px solid rgba(108, 99, 255, 0.15);
        }

        .cta-title {
          font-family: 'Space Grotesk', sans-serif;
          font-size: clamp(1.4rem, 3vw, 1.8rem);
          font-weight: 700;
          margin-bottom: 12px;
        }

        .cta-desc {
          font-size: 1rem;
          color: var(--text-secondary);
          margin-bottom: 28px;
          max-width: 500px;
          margin-left: auto;
          margin-right: auto;
          line-height: 1.7;
        }

        .cta-actions {
          display: flex;
          gap: 16px;
          justify-content: center;
          flex-wrap: wrap;
        }

        /* Section Header */
        .section-header-center {
          text-align: center;
          margin-bottom: 40px;
        }

        .section-header-center .section-label {
          justify-content: center;
        }

        @media (max-width: 1100px) {
          .packages-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 768px) {
          .packages-grid {
            grid-template-columns: 1fr;
            max-width: 420px;
            margin: 0 auto;
          }

          .addons-grid {
            grid-template-columns: 1fr;
          }

          .process-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .cta-box {
            padding: 40px 24px;
          }
        }

        @media (max-width: 480px) {
          .process-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </>
  );
}
