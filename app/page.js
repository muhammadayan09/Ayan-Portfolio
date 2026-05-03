'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

const skills = [
  { name: 'Next.js', icon: '⚡', color: '#ffffff', desc: 'Modern React Framework' },
  { name: 'Angular', icon: '🅰️', color: '#DD0031', desc: 'Dynamic Web Applications' },
  { name: 'WordPress', icon: '📝', color: '#21759B', desc: 'Custom CMS Solutions' },
  { name: 'Shopify', icon: '🛒', color: '#96BF48', desc: 'Ecommerce Development' },
  { name: 'Node.js', icon: '🟢', color: '#339933', desc: 'Backend Development' },
  { name: 'SEO', icon: '🔍', color: '#47A248', desc: 'Search Visibility Growth' },
  { name: 'UI/UX Design', icon: '🎨', color: '#F24E1E', desc: 'User-Centered Design' },
  { name: 'Technical SEO', icon: '🚀', color: '#FFB800', desc: 'Performance & Structure' },
];

const stats = [
  { number: '50+', label: 'Projects Delivered' },
  { number: '30+', label: 'Happy Clients' },
  { number: '3+', label: 'Years Experience' },
  { number: '99%', label: 'Client Satisfaction' },
];

const testimonials = [
  {
    name: "Saba Nazim",
    role: "CEO, SHS First Real Estate",
    text: "Partnering with Muhammad Ayan was a game-changer for our digital presence in Dubai. They didn't just build a website; they architected an engine that doubled our online lead generation in the first quarter. Pure engineering excellence.",
    rating: 5,
  },
  {
    name: "Muhammad Mustakeem",
    role: "Owner, Zyra Delight",
    text: "The level of design and technical execution is unmatched. They took our artisan honey brand and transformed it into a blazing-fast, modern e-commerce masterpiece. Our conversion rates have never been higher. Highly recommended!",
    rating: 5,
  },
  {
    name: "Dr. Zaheeruddin Fayeez",
    role: "Founder, Zuf Dental Care",
    text: "Professional, incredibly fast, and detail-oriented. Muhammad Ayan's team delivered a complex dental portal that our patients love. Their understanding of modern UI/UX and healthcare navigation is truly industry-leading.",
    rating: 5,
  },
  {
    name: "Moon",
    role: "Creative Director, Silent Stories Photography",
    text: "It's rare to find an agency that truly understands both design aesthetics and performance. They seamlessly handled our massive photography portfolio while giving us a beautiful, award-winning frontend. Outstanding work!",
    rating: 5,
  },
];

const caseStudies = [
  {
    slug: 'shs-real-estate',
    title: "Luxury Real Estate Hub - Dubai",
    desc: "A premium property portal for SHS Real Estate in Dubai using WordPress, architected for high-performance luxury and off-plan properties.",
    tags: ["WordPress", "Real Estate", "Luxury"],
    url: "https://shsrealestatedubai.com/",
  },
  {
    slug: 'zyra-delight',
    title: "Premium Artisan E-commerce",
    desc: "A sophisticated digital storefront for an artisan brand, Zyra Delight, on Shopify. We focused on immersive storytelling and mobile conversion.",
    tags: ["Shopify", "Branding", "E-commerce"],
    url: "https://zyradelight.com/",
  },
  {
    slug: 'zuf-dental-care',
    title: "High-Converting Dental Website",
    desc: "A performance-driven dental website with SEO optimisation, improving rankings, traffic, and patient enquiries.",
    tags: ["WordPress", "Healthcare", "SEO"],
    url: "https://zufdentalcare.co.uk/",
  },
  {
    slug: 'silent-stories',
    title: "Wedding & Event Photography Platform",
    desc: "A visually stunning photography platform with optimised galleries, fast performance, and lead generation integration.",
    tags: ["WordPress", "Photography", "SEO"],
    url: "https://silentstoriesphotography.com/",
  },
];

export default function Home() {
  const [caseSlide, setCaseSlide] = useState(0);
  const [caseVisible, setCaseVisible] = useState(3);
  const [testimonialSlide, setTestimonialSlide] = useState(0);
  const [testimonialVisible, setTestimonialVisible] = useState(3);
  const [contactName, setContactName] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [contactPhone, setContactPhone] = useState('');
  const [contactMessage, setContactMessage] = useState('');

  // update visibility on resize
  useEffect(() => {
    const updateVisible = () => {
      const w = window.innerWidth;
      if (w <= 480) {
        setCaseVisible(1);
        setTestimonialVisible(1);
      } else if (w <= 768) {
        setCaseVisible(2);
        setTestimonialVisible(2);
      } else if (w <= 1024) {
        setCaseVisible(3);
        setTestimonialVisible(3);
      } else {
        setCaseVisible(3);
        setTestimonialVisible(3);
      }
    };
    updateVisible();
    window.addEventListener('resize', updateVisible);
    return () => window.removeEventListener('resize', updateVisible);
  }, []);

  const maxCaseIndex = Math.max(0, caseStudies.length - caseVisible);
  const safeCaseSlide = Math.min(caseSlide, maxCaseIndex);
  const maxTestimonialIndex = Math.max(0, testimonials.length - testimonialVisible);
  const safeTestimonialSlide = Math.min(testimonialSlide, maxTestimonialIndex);

  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-bg-elements">
          <div className="hero-blob hero-blob-1" />
          <div className="hero-blob hero-blob-2" />
          <div className="hero-blob hero-blob-3" />
          <div className="hero-grid-pattern" />
        </div>

        <div className="container hero-content">
          <div className="hero-text">
            <div className="hero-badge animate-fade-in-up">
              <span className="badge-dot" />
              Accepting New Projects
            </div>

            <h1 className="hero-title animate-fade-in-up delay-1">
              Welcome to <span className="gradient-text">PilatuWeb</span>
            </h1>

            <p className="hero-role animate-fade-in-up delay-2">
              We Build Powerful Digital Experiences That Drive Real Business Growth
            </p>

            <p className="hero-desc animate-fade-in-up delay-3">
              At PilatuWeb, we combine design, development, and SEO to create websites that don’t just look modern — they perform, rank, and convert. From startups to growing businesses, we help brands build a strong online presence with scalable and result-driven solutions.
            </p>

            <div className="hero-actions animate-fade-in-up delay-4">
              <Link href="/contact/" className="btn btn-primary">
                Start Your Project
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </Link>
              <Link href="/case-studies/" className="btn btn-secondary" style={{ marginLeft: '12px', border: '1px solid var(--border)', background: 'var(--bg-glass)', borderRadius: '50px', padding: '12px 28px', color: 'var(--text-primary)', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', fontWeight: 600 }}>
                View Our Work
              </Link>
            </div>

            <div className="hero-tech-stack animate-fade-in-up delay-5">
              <span className="tech-label">Tech Stack</span>
              <div className="tech-icons">
                {['Web Development', 'SEO', 'UI/UX', 'WordPress', 'Shopify'].map((tech) => (
                  <span key={tech} className="tech-chip">{tech}</span>
                ))}
              </div>
            </div>
          </div>

          <div className="hero-visual animate-slide-right delay-2">
            <div className="hero-card-stack">
              <div className="code-window">
                <div className="code-header">
                  <div className="code-dots">
                    <span className="code-dot red" />
                    <span className="code-dot yellow" />
                    <span className="code-dot green" />
                  </div>
                  <span className="code-filename">portfolio.jsx</span>
                </div>
                <div className="code-body">
                  <pre>
                    <code>
{`const agency = {
  company: "PilatuWeb",
  type: "Web Development & SEO",
  skills: [
    "Next.js", "Shopify",
    "WordPress", "SEO",
    "UI/UX Strategy"
  ],
  mission: "Building growth-
    driven digital products"
};`}
                    </code>
                  </pre>
                </div>
              </div>
              <div className="hero-floating-badge badge-1">
                <span>⚡</span> Fast & Optimized
              </div>
              <div className="hero-floating-badge badge-2">
                <span>🎨</span> Pixel Perfect
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            {stats.map((stat, i) => (
              <div key={i} className="stat-card glass-card">
                <span className="stat-number gradient-text">{stat.number}</span>
                <span className="stat-label">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="section tech-section" id="tech-stack">
        <div className="container">
          <div className="section-header-center">
            <span className="section-label">Our Stack</span>
            <h2 className="section-title">Technologies We <span className="gradient-text">Master</span></h2>
            <p className="section-subtitle" style={{ margin: '0 auto' }}>
              We use modern tools and proven technologies to build fast, scalable, and high-performing digital solutions tailored for your business success.
            </p>
          </div>

          <div className="tech-grid">
            {skills.map((skill, i) => (
              <div key={i} className="tech-card glass-card">
                <div className="tech-card-glow" style={{ background: `${skill.color}15` }} />
                <div className="tech-icon-box" style={{ background: `${skill.color}15`, color: skill.color }}>
                  <span className="tech-icon">{skill.icon}</span>
                </div>
                <div className="tech-info">
                  <h3 className="tech-name">{skill.name}</h3>
                  <p className="tech-desc">{skill.desc}</p>
                </div>
                <div className="tech-accent-line" style={{ background: `linear-gradient(90deg, ${skill.color}, transparent)` }} />
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Services Preview */}
      <section className="section services-preview">
        <div className="container">
          <div className="section-header-center">
            <span className="section-label">🚀 Our Services</span>
            <h2 className="section-title">Our Services</h2>
            <p className="section-subtitle" style={{ margin: '0 auto' }}>
              We provide complete digital solutions designed to help your business grow, rank higher, and convert better.
            </p>
          </div>

          <div className="services-grid">
            {[
              {
                icon: '💻',
                title: 'Frontend Engineering',
                desc: 'We build responsive, high-performance interfaces using modern frameworks like React, Next.js, and Angular to deliver seamless user experiences across all devices.',
                tags: ['Next.js', 'React', 'Angular'],
              },
              {
                icon: '🛍️',
                title: 'Ecommerce Solutions',
                desc: 'From Shopify stores to custom ecommerce platforms, we create fast, conversion-focused online stores that drive sales and improve user journeys.',
                tags: ['Shopify', 'Ecommerce', 'Sales'],
              },
              {
                icon: '🚀',
                title: 'Technical SEO',
                desc: 'We optimise your website structure, speed, and indexing to improve search engine visibility and ensure long-term organic growth.',
                tags: ['Optimization', 'Speed', 'SEO'],
              },
              {
                icon: '📝',
                title: 'Responsive CMS Platforms',
                desc: 'We develop scalable CMS websites using WordPress and other platforms, making it easy for you to manage content and grow your business.',
                tags: ['WordPress', 'CMS', 'Development'],
              },
              {
                icon: '🎨',
                title: 'UI/UX Design Strategy',
                desc: 'We design user-focused interfaces that enhance usability, engagement, and conversions through research-driven design decisions.',
                tags: ['Figma', 'UI/UX', 'Research'],
              },
              {
                icon: '⚡',
                title: 'Performance Optimisation',
                desc: 'We improve website speed, performance, and core web vitals to ensure better rankings, lower bounce rates, and improved user experience.',
                tags: ['Web Vitals', 'Optimization', 'Speed'],
              },
            ].map((service, i) => (
              <div key={i} className="service-card glass-card">
                <div className="service-icon">{service.icon}</div>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-desc">{service.desc}</p>
                <div className="service-tags">
                  {service.tags.map((tag) => (
                    <span key={tag} className="service-tag">{tag}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="skills-cta">
            <Link href="/services/" className="btn btn-primary">
              View All Services →
            </Link>
          </div>
        </div>
      </section>


      {/* Case Studies Section */}
      <section className="section case-studies">
        <div className="container">
          <div className="section-header-center case-header">
            <div>
              <span className="section-label">💼 Case Studies</span>
              <h2 className="section-title">Case Studies</h2>
              <p className="section-subtitle" style={{ margin: '0 auto' }}>
                Real projects that demonstrate our ability to deliver performance-driven results.
              </p>
            </div>

            <div className="case-nav-group">
              <button
                className="case-nav prev"
                onClick={() => setCaseSlide(Math.max(0, safeCaseSlide - 1))}
                disabled={safeCaseSlide === 0}
                aria-label="Previous"
              >
                ‹
              </button>
              <button
                className="case-nav next"
                onClick={() =>
                  setCaseSlide(Math.min(safeCaseSlide + 1, maxCaseIndex))
                }
                disabled={safeCaseSlide >= maxCaseIndex}
                aria-label="Next"
              >
                ›
              </button>
            </div>
          </div>

          <div className="case-grid">
            {caseStudies.slice(safeCaseSlide, safeCaseSlide + caseVisible).map((project, i) => (
              <Link key={project.slug} href={`/case-studies/${project.slug}/`} className="case-card-link">
                <div className="case-card glass-card">
                  <div className="case-image" />
                  <div className="case-content">
                    <div className="case-tags">
                      {project.tags.map((tag) => (
                        <span key={tag} className="case-tag">{tag}</span>
                      ))}
                    </div>
                    <h3 className="case-title">{project.title}</h3>
                    <p className="case-desc">{project.desc}</p>
                    <span className="case-read-more">Read More →</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section testimonials-section">
        <div className="container">
          <div className="section-header-center testimonial-header">
            <div>
              <span className="section-label">Testimonial</span>
              <h2 className="section-title">Customer Success Stories</h2>
            </div>

            <div className="testimonial-nav-group">
              <button
                className="case-nav prev"
                onClick={() => setTestimonialSlide(Math.max(0, safeTestimonialSlide - 1))}
                disabled={safeTestimonialSlide === 0}
                aria-label="Previous testimonial"
              >
                ‹
              </button>
              <button
                className="case-nav next"
                onClick={() =>
                  setTestimonialSlide(Math.min(safeTestimonialSlide + 1, maxTestimonialIndex))
                }
                disabled={safeTestimonialSlide >= maxTestimonialIndex}
                aria-label="Next testimonial"
              >
                ›
              </button>
            </div>
          </div>

          <div className="testimonial-slider">
            <div className="testimonial-track-wrapper">
              <div
                className="testimonial-track"
                style={{
                  transform: `translateX(-${(100 / testimonialVisible) * safeTestimonialSlide}%)`,
                }}
              >
                {testimonials.map((item, i) => (
                  <div key={i} className="testimonial-card glass-card">
                    <div className="testimonial-quote">“</div>
                    <h3 className="testimonial-title">{item.title}</h3>
                    <p className="testimonial-text">{item.text}</p>

                    <div className="testimonial-footer">
                      <div className="testimonial-person">
                        <div className="testimonial-avatar">{item.name
                          .split(' ')
                          .map((n) => n[0])
                          .join('')}
                        </div>
                        <div className="testimonial-info">
                          <span className="testimonial-name">{item.name}</span>
                          <span className="testimonial-role">{item.role}</span>
                        </div>
                      </div>
                      <div className="testimonial-rating">
                        {Array.from({ length: 5 }).map((_, starIndex) => (
                          <span
                            key={starIndex}
                            className={`star ${starIndex < item.rating ? 'active' : ''}`}
                          >
                            ★
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section style={{ padding: '80px 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: '60px', alignItems: 'start' }} className="faq-grid">
            {/* Left side - heading */}
            <div style={{ position: 'sticky', top: '120px' }}>
              <span className="section-label">FAQ</span>
              <h2 style={{ fontFamily: "var(--font-display), sans-serif", fontSize: 'clamp(1.8rem, 3vw, 2.4rem)', fontWeight: 800, lineHeight: 1.2, marginBottom: '16px' }}>
                Frequently Asked <span className="gradient-text">Questions</span>
              </h2>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '28px' }}>
                Answers to common questions about our workflow, pricing, and collaboration process.
              </p>
              <a
                href="https://wa.me/917983505861?text=Hi!%20I%20have%20a%20question."
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '12px 24px',
                  borderRadius: '50px',
                  background: 'linear-gradient(135deg, #25D366, #128C7E)',
                  color: '#fff',
                  fontSize: '0.88rem',
                  fontWeight: 600,
                  textDecoration: 'none',
                  boxShadow: '0 4px 20px rgba(37, 211, 102, 0.3)',
                  transition: 'transform 0.2s, box-shadow 0.2s',
                }}
              >
                💬 Ask me anything
              </a>
            </div>

            {/* Right side - FAQ items */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {[
                { num: '01', q: 'What services do you offer as a web development company?', a: 'We specialise in frontend development, SEO, ecommerce solutions, responsive CMS platforms, and performance optimisation for modern businesses.' },
                { num: '02', q: 'How long does it take to complete a project?', a: 'Project timelines vary based on complexity, but most websites are delivered within 2–6 weeks with proper planning and execution.' },
                { num: '03', q: 'Do you work with international clients?', a: 'Yes, we work with clients globally and provide remote communication, updates, and support throughout the project.' },
                { num: '04', q: 'Do you offer SEO services along with development?', a: 'Yes, we integrate SEO strategies directly into development to ensure better rankings and long-term organic growth.' },
                { num: '05', q: 'Will my website be mobile-friendly?', a: 'Absolutely. All websites we build are fully responsive and optimised for mobile, tablet, and desktop devices.' },
              ].map((item, i) => (
                <div
                  key={i}
                  style={{
                    padding: '24px 28px',
                    borderRadius: '16px',
                    background: 'var(--bg-glass)',
                    border: '1px solid var(--border)',
                    backdropFilter: 'blur(10px)',
                    transition: 'all 0.3s ease',
                    cursor: 'default',
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.transform = 'translateY(-3px)';
                    e.currentTarget.style.boxShadow = '0 12px 40px rgba(108, 99, 255, 0.1)';
                    e.currentTarget.style.borderColor = 'rgba(108, 99, 255, 0.3)';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = 'none';
                    e.currentTarget.style.borderColor = 'var(--border)';
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                    <span style={{ fontFamily: "var(--font-display), sans-serif", fontSize: '1.5rem', fontWeight: 800, color: 'rgba(108, 99, 255, 0.15)', flexShrink: 0, lineHeight: 1 }}>{item.num}</span>
                    <div>
                      <h3 style={{ fontFamily: "var(--font-display), sans-serif", fontSize: '1rem', fontWeight: 700, marginBottom: '8px' }}>{item.q}</h3>
                      <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.7, margin: 0 }}>{item.a}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="section contact-section">
        <div className="contact-bg">
          <div className="blob blob-1" />
          <div className="blob blob-2" />
          <div className="shape shape-1" />
        </div>

        <div className="container">
          <div className="section-header-center">
            <span className="section-label">Connect</span>
            <h2 className="section-title">Send Me a Message</h2>
            <p className="section-subtitle" style={{ margin: '0 auto', maxWidth: '520px' }}>
              Fill out the form and we&apos;ll send the details to WhatsApp so we can get back to you quickly.
            </p>
          </div>

          <div className="contact-grid">
            <div className="contact-info glass-card">
              <h3 className="contact-info-title">Let’s build something great</h3>
              <p className="contact-info-text">
                Share your project details and we’ll help you turn your idea into a high-performing digital experience.
              </p>

              <div className="contact-meta">
                <div className="contact-meta-item">
                  <span className="meta-icon">📱</span>
                  <div>
                    <span className="meta-label">WhatsApp</span>
                    <a
                      className="meta-value"
                      href="https://wa.me/917983505861"
                      target="_blank"
                      rel="noreferrer"
                    >
                      +91 79835 05861
                    </a>
                  </div>
                </div>
                <div className="contact-meta-item">
                  <span className="meta-icon">✉️</span>
                  <div>
                    <span className="meta-label">Email</span>
                    <a className="meta-value" href="mailto:pilatuweb2026@gmail.com">
                      pilatuweb2026@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="contact-hints">
                <span className="hint">✅ Quick replies (same day)</span>
                <span className="hint">✅ Open for new client projects</span>
                <span className="hint">✅ Let’s kick off with a brief scope</span>
              </div>
            </div>

            <div className="contact-card glass-card">
              <form
                className="contact-form"
                onSubmit={(e) => {
                  e.preventDefault();
                  const payload = `Name: ${encodeURIComponent(contactName)}%0AEmail: ${encodeURIComponent(
                    contactEmail
                  )}%0APhone: ${encodeURIComponent(contactPhone)}%0AMessage: ${encodeURIComponent(
                    contactMessage
                  )}`;
                  const whatsappUrl = `https://wa.me/917983505861?text=${payload}`;
                  window.open(whatsappUrl, '_blank');
                }}
              >
                <div className="form-row">
                  <div className="input-group">
                    <label>Name</label>
                    <div className="input-with-icon">
                      <span className="input-icon" aria-hidden="true">
                        <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                          <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                        </svg>
                      </span>
                      <input
                        value={contactName}
                        onChange={(e) => setContactName(e.target.value)}
                        placeholder="Your name"
                        required
                      />
                    </div>
                  </div>

                  <div className="input-group">
                    <label>Email</label>
                    <div className="input-with-icon">
                      <span className="input-icon" aria-hidden="true">
                        <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                          <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                        </svg>
                      </span>
                      <input
                        type="email"
                        value={contactEmail}
                        onChange={(e) => setContactEmail(e.target.value)}
                        placeholder="you@example.com"
                        required
                      />
                    </div>
                  </div>
                </div>

                <div className="input-group full-width">
                  <label>Phone</label>
                  <div className="input-with-icon">
                    <span className="input-icon" aria-hidden="true">
                      <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                        <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1v3.5c0 .55-.45 1-1 1C7.16 21 3 16.84 3 11c0-.55.45-1 1-1H7.5c.55 0 1 .45 1 1 0 1.24.2 2.45.57 3.57.11.34.03.73-.25 1.01l-2.2 2.21z" />
                      </svg>
                    </span>
                    <input
                      type="tel"
                      value={contactPhone}
                      onChange={(e) => setContactPhone(e.target.value)}
                      placeholder="+91 79835 05861"
                      required
                    />
                  </div>
                </div>

                <div className="input-group full-width">
                  <label>Message</label>
                  <div className="input-with-icon">
                    <span className="input-icon" aria-hidden="true">
                      <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                        <path d="M20 2H4c-1.1 0-2 .9-2 2v16l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z" />
                      </svg>
                    </span>
                    <textarea
                      value={contactMessage}
                      onChange={(e) => setContactMessage(e.target.value)}
                      placeholder="Tell me about your project..."
                      rows={5}
                      required
                    />
                  </div>
                </div>

                <button type="submit" className="btn btn-primary btn-wide">
                  Send on WhatsApp
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        /* ===== HERO ===== */
        .hero {
          min-height: 100vh;
          display: flex;
          align-items: center;
          position: relative;
          overflow: hidden;
          padding-top: 80px;
        }

        .hero-bg-elements {
          position: absolute;
          inset: 0;
          pointer-events: none;
        }

        .hero-blob {
          position: absolute;
          border-radius: 50%;
          filter: blur(100px);
        }

        .hero-blob-1 {
          width: 500px;
          height: 500px;
          background: rgba(108, 99, 255, 0.12);
          top: -100px;
          left: -100px;
          animation: float 8s ease-in-out infinite;
        }

        .hero-blob-2 {
          width: 400px;
          height: 400px;
          background: rgba(0, 212, 170, 0.08);
          bottom: -50px;
          right: -50px;
          animation: float 10s ease-in-out infinite reverse;
        }

        .hero-blob-3 {
          width: 300px;
          height: 300px;
          background: rgba(255, 107, 107, 0.06);
          top: 50%;
          left: 50%;
          animation: float 12s ease-in-out infinite;
        }

        .hero-grid-pattern {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(255, 255, 255, 0.02) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.02) 1px, transparent 1px);
          background-size: 60px 60px;
        }

        .hero-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: center;
          position: relative;
          z-index: 1;
        }

        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 8px 20px;
          border-radius: 50px;
          background: var(--bg-glass);
          border: 1px solid var(--border);
          font-size: 0.82rem;
          font-weight: 500;
          color: var(--accent);
          margin-bottom: 24px;
          backdrop-filter: blur(10px);
        }

        .badge-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: var(--accent);
          animation: pulse-glow 2s ease infinite;
          box-shadow: 0 0 10px var(--accent-glow);
        }

        .hero-title {
          font-family: var(--font-display), sans-serif;
          font-size: clamp(2.5rem, 5vw, 4rem);
          font-weight: 800;
          line-height: 1.15;
          margin-bottom: 16px;
        }

        .hero-role {
          font-size: 1.2rem;
          color: var(--primary-light);
          font-weight: 500;
          margin-bottom: 16px;
        }

        .hero-desc {
          font-size: 1.05rem;
          color: var(--text-secondary);
          line-height: 1.8;
          margin-bottom: 32px;
          max-width: 520px;
        }

        .hero-actions {
          display: flex;
          gap: 16px;
          margin-bottom: 40px;
          flex-wrap: wrap;
        }

        .hero-tech-stack {
          display: flex;
          align-items: center;
          gap: 16px;
          flex-wrap: wrap;
        }

        .tech-label {
          font-size: 0.8rem;
          color: var(--text-muted);
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .tech-icons {
          display: flex;
          gap: 8px;
          flex-wrap: wrap;
        }

        .tech-chip {
          padding: 4px 14px;
          border-radius: 20px;
          background: var(--bg-card);
          border: 1px solid var(--border);
          font-size: 0.78rem;
          color: var(--text-secondary);
          font-weight: 500;
        }

        /* Hero Visual - Code Window */
        .hero-visual {
          position: relative;
          display: flex;
          justify-content: center;
        }

        .hero-card-stack {
          position: relative;
          width: 100%;
          max-width: 420px;
        }

        .code-window {
          background: var(--bg-card);
          border: 1px solid var(--border);
          border-radius: var(--border-radius);
          overflow: hidden;
          box-shadow: var(--shadow-lg);
        }

        .code-header {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 14px 18px;
          background: var(--bg-secondary);
          border-bottom: 1px solid var(--border);
        }

        .code-dots {
          display: flex;
          gap: 6px;
        }

        .code-dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
        }

        .code-dot.red { background: #FF5F57; }
        .code-dot.yellow { background: #FFBD2E; }
        .code-dot.green { background: #28CA41; }

        .code-filename {
          font-size: 0.78rem;
          color: var(--text-muted);
          font-family: var(--font-display), monospace;
        }

        .code-body {
          padding: 24px;
        }

        .code-body pre {
          margin: 0;
        }

        .code-body code {
          font-family: var(--font-display), monospace;
          font-size: 0.85rem;
          color: var(--text-secondary);
          line-height: 1.8;
        }

        .hero-floating-badge {
          position: absolute;
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 10px 18px;
          border-radius: 12px;
          background: var(--bg-glass);
          backdrop-filter: blur(20px);
          border: 1px solid var(--border);
          font-size: 0.82rem;
          font-weight: 500;
          color: var(--text-primary);
          animation: float 6s ease-in-out infinite;
          box-shadow: var(--shadow-md);
        }

        .badge-1 {
          top: -16px;
          right: -16px;
          animation-delay: 0s;
        }

        .badge-2 {
          bottom: -16px;
          left: -16px;
          animation-delay: 3s;
        }

        /* ===== STATS ===== */
        .stats-section {
          padding: 50px 0;
          position: relative;
          z-index: 1;
        }

        .stats-section::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, transparent, rgba(108, 99, 255, 0.03), transparent);
          pointer-events: none;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
          position: relative;
        }

        .stat-card {
          text-align: center;
          padding: 40px 24px;
          background: linear-gradient(180deg, rgba(30, 30, 46, 0.6) 0%, rgba(20, 20, 30, 0.6) 100%);
          border: 1px solid rgba(255, 255, 255, 0.05);
          border-top: 1px solid rgba(0, 212, 170, 0.2);
          border-radius: 20px;
          position: relative;
          overflow: hidden;
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
        }

        .stat-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 100%;
          background: radial-gradient(circle at top, rgba(0, 212, 170, 0.1) 0%, transparent 70%);
          opacity: 0;
          transition: opacity 0.4s ease;
        }

        .stat-card:hover {
          transform: translateY(-8px) scale(1.02);
          border-top: 1px solid rgba(0, 212, 170, 0.6);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4), 0 0 20px rgba(0, 212, 170, 0.1);
        }

        .stat-card:hover::before {
          opacity: 1;
        }

        .stat-number {
          font-family: var(--font-display), sans-serif;
          font-size: 3.5rem;
          font-weight: 800;
          display: inline-block;
          margin-bottom: 8px;
          background: linear-gradient(135deg, #fff 0%, var(--accent-light) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          position: relative;
          z-index: 2;
          filter: drop-shadow(0 4px 10px rgba(0, 212, 170, 0.2));
        }

        .stat-label {
          font-size: 0.95rem;
          color: var(--text-secondary);
          font-weight: 600;
          letter-spacing: 0.5px;
          text-transform: uppercase;
          position: relative;
          z-index: 2;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
        }

        @media (max-width: 1024px) {
          .stats-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .stat-number {
            font-size: 3rem;
          }
        }

        @media (max-width: 480px) {
          .stats-grid {
            grid-template-columns: 1fr;
          }
        }

        /* ===== SKILLS HIGHLIGHT ===== */
        .section.skills-highlight {
          padding: 30px 0;
          position: relative;
          overflow: hidden;
        }

        .section.skills-highlight::before {
          content: '';
          position: absolute;
          top: -20%;
          left: 50%;
          transform: translateX(-50%);
          width: 120%;
          height: 120%;
          background: radial-gradient(circle at center, rgba(108,99,255,0.06), transparent 70%);
          pointer-events: none;
        }

        .section-header-center {
          text-align: center;
          margin-bottom: 30px;
        }

        /* Case studies header + nav */
        .case-card-link, .case-card-link * {
          text-decoration: none !important;
          color: inherit;
        }

        .case-header {
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          flex-wrap: wrap;
          gap: 30px;
        }

        .case-nav-group {
          position: absolute;
          right: 0;
          top: 50%;
          transform: translateY(-50%);
          display: flex;
          gap: 12px;
          align-items: center;
        }

        @media (max-width: 768px) {
          .case-header {
            justify-content: center;
            text-align: center;
          }

          .case-nav-group {
            position: static;
            transform: none;
            justify-content: center;
            width: 100%;
            margin-top: 20px;
          }
        }

        .section-header-center .section-label {
          justify-content: center;
        }

        .skills-grid {
          display: grid;
          grid-template-columns: inherit;
          gap: 32px;
          margin-bottom: 0;
        }

        /* carousel helpers */
        .skills-slider {
          position: relative;
          overflow: hidden;
          width: 100%;
          margin-bottom: 20px;
        }

        .skills-track {
          display: flex;
          gap: 32px;
          transition: transform 0.6s ease;
        }

        .skill-card {
          flex: 0 0 25%;
          box-sizing: border-box;
        }

        
        
        
        /* override card sizing to make them bigger */
        .skill-card {
          padding: 30px 24px;
          background: var(--bg-card);
          border: 1px solid var(--border);
          border-radius: var(--border-radius-lg);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .skill-card:hover {
          transform: translateY(-4px);
          box-shadow: var(--shadow-md);
        }

        @media (min-width: 1024px) {
          .skills-grid {
            grid-template-columns: repeat(4, 1fr);
          }
        }

        @media (max-width: 1024px) {
          .skill-card {
            flex: 0 0 33.333%;
          }
        }

        @media (max-width: 768px) {
          .skill-card {
            flex: 0 0 50%;
          }
        }

        @media (max-width: 480px) {
          .skill-card {
            flex: 0 0 100%;
          }
        }

        @keyframes slideFade {
          from { opacity: 0.4; }
          to { opacity: 1; }
        }

        .skill-card {
          text-align: center;
          padding: 28px 16px;
          cursor: default;
          background: transparent; /* keep same but overridden by previous rule */
        }

        .skill-icon-wrapper {
          width: 80px;
          height: 80px;
          border-radius: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 24px;
        }

        .skill-icon {
          font-size: 1.8rem;
        }

        .skill-name {
          font-size: 1.1rem;
          font-weight: 700;
          margin-bottom: 16px;
          color: var(--text-primary);
        }

        .skill-bar-container {
          width: 100%;
          height: 4px;
          background: var(--bg-secondary);
          border-radius: 2px;
          overflow: hidden;
        }

        .skill-bar {
          height: 100%;
          border-radius: 2px;
          transition: width 1s ease-out;
        }

        .skills-cta {
          text-align: center;
          margin-top: 20px;
        }

        /* ===== SERVICES PREVIEW ===== */
        .services-preview {
          padding-bottom: 30px;
        }

        .services-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
          margin-bottom: 40px;
        }

        /* case studies */
        .case-studies {
          padding-top: 30px;
        }

        .case-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
          margin-top: 40px;
        }

        .case-card-link {
          text-decoration: none;
          display: block;
        }

        .case-card {
          height: 100%;
          position: relative;
          overflow: hidden;
          border: 1px solid var(--border);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          min-height: 420px;
          display: flex;
          flex-direction: column;
        }

        .case-card:hover {
          transform: translateY(-6px);
          box-shadow: var(--shadow-lg);
        }

        .case-image {
          height: 180px;
          background: linear-gradient(135deg, rgba(108, 99, 255, 0.9), rgba(0, 212, 170, 0.8));
          background-size: 250% 250%;
          animation: gradientShift 8s ease infinite;
        }

        .case-content {
          padding: 24px;
          height: calc(100% - 180px);
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .case-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-bottom: 16px;
        }

        .case-tag {
          padding: 4px 12px;
          border-radius: 18px;
          font-size: 0.75rem;
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.15);
          color: var(--text-secondary);
        }

        .case-title {
          font-size: 1.25rem;
          font-weight: 700;
          margin-bottom: 12px;
          color: var(--text-primary);
        }

        .case-desc {
          color: var(--text-secondary);
          line-height: 1.6;
          margin-bottom: 20px;
          flex-grow: 1;
        }

        .case-actions {
          margin-top: auto;
        }

        .case-nav {
          width: 44px;
          height: 44px;
          border: 1px solid var(--border);
          border-radius: 50%;
          background: var(--bg-card);
          color: var(--text-primary);
          font-size: 1.4rem;
          display: grid;
          place-items: center;
          cursor: pointer;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
          position: relative;
          z-index: 20;
        }

        .case-nav:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: var(--shadow-md);
        }

        .case-nav:disabled {
          opacity: 0.4;
          cursor: not-allowed;
        }

        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        @media (max-width: 1024px) {
          .case-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 768px) {
          .case-grid {
            grid-template-columns: 1fr;
          }
        }

        .testimonials-section {
          background: var(--bg-secondary);
          padding-top: 30px;
          padding-bottom: 30px;
        }

        .testimonial-header {
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          flex-wrap: wrap;
          gap: 24px;
        }

        .testimonial-nav-group {
          position: absolute;
          right: 0;
          top: 50%;
          transform: translateY(-50%);
          display: flex;
          gap: 12px;
        }

        .testimonial-slider {
          margin-top: 40px;
          position: relative;
        }

        .testimonial-track-wrapper {
          overflow: hidden;
        }

        .testimonial-track {
          display: flex;
          gap: 24px;
          transition: transform 0.4s ease;
        }

        .testimonial-card {
          flex: 0 0 calc(33.333% - 18px);
          padding: 32px;
          position: relative;
          min-height: 340px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .testimonial-quote {
          font-size: 4rem;
          line-height: 1;
          color: var(--accent);
          opacity: 0.2;
          position: absolute;
          top: 20px;
          left: 24px;
        }

        .testimonial-title {
          margin-top: 24px;
          font-size: 1.15rem;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 12px;
        }

        .testimonial-text {
          color: var(--text-secondary);
          line-height: 1.7;
          margin-bottom: 24px;
        }

        .testimonial-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 16px;
          flex-wrap: wrap;
        }

        .testimonial-person {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .testimonial-avatar {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: var(--bg-card);
          display: grid;
          place-items: center;
          font-weight: 700;
          color: var(--text-primary);
        }

        .testimonial-info {
          line-height: 1.2;
        }

        .testimonial-name {
          display: block;
          font-weight: 700;
          color: var(--text-primary);
        }

        .testimonial-role {
          display: block;
          font-size: 0.85rem;
          color: var(--text-muted);
        }

        .testimonial-rating {
          display: flex;
          gap: 4px;
          font-size: 0.9rem;
        }

        .star {
          color: var(--text-muted);
        }

        .star.active {
          color: var(--accent);
        }

        @media (max-width: 1024px) {
          .testimonial-card {
            flex: 0 0 calc(50% - 12px);
          }

          .testimonial-nav-group {
            position: static;
            transform: none;
            margin-top: 20px;
          }
        }

        @media (max-width: 768px) {
          .testimonial-card {
            flex: 0 0 100%;
          }

          .testimonial-nav-group {
            position: static;
            transform: none;
            margin-top: 20px;
          }
        }


        .case-read-more {
          display: inline-block;
          margin-top: 16px;
          font-weight: 700;
          color: var(--accent);
          font-size: 0.9rem;
          transition: transform 0.3s ease;
        }

        .case-card:hover .case-read-more {
          transform: translateX(5px);
        }

        /* ===== DIAGRAM SECTION ===== */
        .diagram-section {
          padding: 100px 0;
          position: relative;
          overflow: hidden;
          background: linear-gradient(180deg, transparent, rgba(108, 99, 255, 0.04));
        }

        .diagram-container {
          margin-top: 60px;
          display: flex;
          flex-direction: column;
          align-items: center;
          max-width: 900px;
          margin-left: auto;
          margin-right: auto;
        }

        .diagram-top {
          display: flex;
          justify-content: center;
          width: 100%;
        }

        .d-node {
          position: relative;
          background: rgba(21, 24, 40, 0.9);
          border: 1px solid rgba(255, 255, 255, 0.1);
          padding: 36px 48px;
          border-radius: 28px;
          text-align: center;
          backdrop-filter: blur(20px);
          transition: all 0.4s ease;
          z-index: 5;
          overflow: hidden;
        }

        .d-node:hover {
          transform: translateY(-6px);
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.4);
        }

        .d-node-glow {
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at center, rgba(108, 99, 255, 0.12), transparent 70%);
          z-index: 0;
        }

        .d-node-glow.glow-blue {
          background: radial-gradient(circle at center, rgba(33, 117, 155, 0.15), transparent 70%);
        }

        .d-node-glow.glow-green {
          background: radial-gradient(circle at center, rgba(71, 162, 72, 0.15), transparent 70%);
        }

        .d-node-primary {
          border-color: rgba(108, 99, 255, 0.4);
          box-shadow: 0 0 50px rgba(108, 99, 255, 0.12);
        }

        .d-node-cms {
          border-color: rgba(33, 117, 155, 0.35);
        }

        .d-node-growth {
          border-color: rgba(71, 162, 72, 0.35);
        }

        .d-icon {
          font-size: 3rem;
          margin-bottom: 16px;
          position: relative;
          z-index: 1;
          filter: drop-shadow(0 0 12px rgba(255, 255, 255, 0.15));
        }

        .d-title {
          font-family: var(--font-display), sans-serif;
          font-size: 1.35rem;
          font-weight: 800;
          margin-bottom: 8px;
          position: relative;
          z-index: 1;
          background: linear-gradient(90deg, #fff, rgba(255,255,255,0.75));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .d-sub {
          font-size: 0.88rem;
          color: var(--text-muted);
          font-weight: 500;
          letter-spacing: 0.5px;
          position: relative;
          z-index: 1;
        }

        .diagram-svg-wrap {
          width: 100%;
          height: 120px;
          position: relative;
          z-index: 1;
        }

        .diagram-svg {
          width: 100%;
          height: 100%;
          opacity: 0.6;
        }

        .diagram-bottom {
          display: flex;
          gap: 40px;
          width: 100%;
          justify-content: center;
        }

        .diagram-badge-row {
          margin-top: 50px;
          text-align: center;
        }

        .d-badge {
          display: inline-block;
          padding: 12px 32px;
          background: rgba(108, 99, 255, 0.1);
          border: 1px solid rgba(108, 99, 255, 0.3);
          border-radius: 50px;
          font-size: 0.85rem;
          font-weight: 700;
          color: var(--accent);
          text-transform: uppercase;
          letter-spacing: 2px;
          animation: pulseGlow 3s infinite;
        }

        @keyframes pulseGlow {
          0% { box-shadow: 0 0 0 0 rgba(108, 99, 255, 0.4); }
          70% { box-shadow: 0 0 0 15px rgba(108, 99, 255, 0); }
          100% { box-shadow: 0 0 0 0 rgba(108, 99, 255, 0); }
        }

        @media (max-width: 900px) {
          .diagram-bottom { flex-direction: column; align-items: center; gap: 24px; }
          .diagram-svg-wrap { display: none; }
          .d-node { width: 100%; }
        }

        .service-card {
          padding: 30px;
          cursor: default;
        }

        .service-icon {
          font-size: 2.5rem;
          margin-bottom: 20px;
        }

        .service-title {
          font-family: var(--font-display), sans-serif;
          font-size: 1.2rem;
          font-weight: 600;
          margin-bottom: 12px;
        }

        .service-desc {
          font-size: 0.92rem;
          color: var(--text-secondary);
          line-height: 1.7;
          margin-bottom: 20px;
        }

        .service-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }

        .service-tag {
          padding: 4px 12px;
          border-radius: 20px;
          background: var(--bg-secondary);
          border: 1px solid var(--border);
          font-size: 0.75rem;
          color: var(--text-muted);
          font-weight: 500;
        }

        /* ===== FAQ SECTION ===== */
        .faq-section {
          padding: 20px 0;
          background: linear-gradient(135deg, rgba(15, 18, 30, 0.95), rgba(18, 22, 40, 0.9));
        }

        .faq-accordion {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 16px;
          align-items: start;
          margin-top: 20px;
          max-width: 1100px;
          margin-left: auto;
          margin-right: auto;
        }

        @media (max-width: 850px) {
          .faq-accordion {
            grid-template-columns: 1fr;
          }
        }

        .faq-accordion-item {
          border-radius: 16px;
          border: 1px solid rgba(255, 255, 255, 0.08);
          background: rgba(21, 24, 34, 0.65);
          backdrop-filter: blur(18px);
          overflow: hidden;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .faq-accordion-item:hover {
          border-color: rgba(108, 99, 255, 0.4);
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
        }

        .faq-accordion-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 12px 20px;
        }

        .faq-question {
          font-size: 1.1rem;
          font-weight: 700;
          margin: 0;
          color: var(--text-primary);
          padding-right: 20px;
        }

        .faq-icon {
          font-size: 1.5rem;
          font-weight: 300;
          color: var(--primary-light);
          display: flex;
          align-items: center;
          justify-content: center;
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: rgba(108, 99, 255, 0.1);
          transition: transform 0.3s ease, background 0.3s ease, color 0.3s ease;
        }

        .faq-accordion-item.active .faq-icon {
          background: var(--primary);
          color: #fff;
          transform: rotate(180deg);
        }

        .faq-accordion-item.active {
          border-color: var(--primary);
        }

        .faq-accordion-body {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.4s cubic-bezier(0, 1, 0, 1), padding 0.4s ease, opacity 0.4s ease;
          opacity: 0;
          padding: 0 20px;
        }

        .faq-accordion-item.active .faq-accordion-body {
          max-height: 500px;
          opacity: 1;
          padding: 0 20px 16px 20px;
          transition: max-height 0.4s ease-in-out, padding 0.4s ease, opacity 0.4s ease;
        }

        .faq-answer {
          margin: 0;
          line-height: 1.6;
          color: var(--text-secondary);
          font-size: 0.95rem;
          border-top: 1px solid rgba(255, 255, 255, 0.05);
          padding-top: 16px;
        }

        /* ===== CONTACT SECTION ===== */
        .contact-section {
          position: relative;
          overflow: hidden;
          padding: 30px 0;
          background: linear-gradient(135deg, rgba(10, 12, 26, 0.9), rgba(27, 30, 45, 0.95));
        }

        .contact-bg {
          position: absolute;
          inset: 0;
          pointer-events: none;
          z-index: 0;
        }

        .contact-bg .blob {
          position: absolute;
          border-radius: 50%;
          filter: blur(110px);
          opacity: 0.6;
        }

        .contact-bg .blob-1 {
          width: 520px;
          height: 520px;
          background: rgba(108, 99, 255, 0.28);
          top: -140px;
          left: -130px;
        }

        .contact-bg .blob-2 {
          width: 440px;
          height: 440px;
          background: rgba(0, 212, 170, 0.22);
          bottom: -130px;
          right: -140px;
        }

        .contact-bg .shape-1 {
          position: absolute;
          width: 480px;
          height: 480px;
          border: 2px solid rgba(108, 99, 255, 0.18);
          border-radius: 50%;
          top: 34%;
          left: 10%;
          transform: translate(-50%, -50%) rotate(25deg);
          opacity: 0.55;
        }

        .contact-section .container {
          position: relative;
          z-index: 1;
        }

        .contact-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 30px;
          align-items: start;
          margin-top: 40px;
        }

        @media (min-width: 900px) {
          .contact-grid {
            grid-template-columns: 1.05fr 1fr;
            gap: 40px;
          }
        }

        .glass-card {
          background: rgba(21, 24, 34, 0.72);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: var(--border-radius-lg);
          backdrop-filter: blur(18px);
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.35);
        }

        .contact-info {
          padding: 36px 34px;
        }

        .contact-info-title {
          font-size: 1.65rem;
          font-weight: 700;
          margin-bottom: 14px;
        }

        .contact-info-text {
          color: var(--text-secondary);
          margin-bottom: 26px;
          line-height: 1.75;
        }

        .contact-meta {
          display: grid;
          gap: 14px;
          margin-bottom: 24px;
        }

        .contact-meta-item {
          display: flex;
          align-items: center;
          gap: 14px;
        }

        .meta-icon {
          display: grid;
          place-items: center;
          width: 48px;
          height: 48px;
          border-radius: 16px;
          background: rgba(108, 99, 255, 0.14);
          font-size: 1.25rem;
        }

        .meta-label {
          font-size: 0.75rem;
          font-weight: 600;
          color: var(--text-muted);
          display: block;
        }

        .meta-value {
          font-weight: 700;
          color: var(--text-primary);
          text-decoration: none;
        }

        .meta-value:hover {
          text-decoration: underline;
        }

        .contact-hints {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
        }

        .hint {
          padding: 10px 14px;
          border-radius: 999px;
          background: rgba(0, 212, 170, 0.14);
          border: 1px solid rgba(0, 212, 170, 0.22);
          font-size: 0.82rem;
          color: var(--text-secondary);
        }

        .contact-card {
          padding: 32px 28px;
          max-width: 520px;
          margin: 0 auto;
        }

        .contact-form {
          display: grid;
          gap: 16px;
        }

        .contact-form label {
          display: block;
          font-weight: 600;
          font-size: 0.9rem;
          color: var(--text-secondary);
          margin-bottom: 10px;
        }

        .input-group {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .input-with-icon {
          position: relative;
        }

        .input-icon {
          position: absolute;
          left: 12px;
          top: 50%;
          transform: translateY(-50%);
          width: 18px;
          height: 18px;
          display: grid;
          place-items: center;
          opacity: 0.7;
          pointer-events: none;
        }

        .input-icon svg {
          width: 18px;
          height: 18px;
          color: rgba(255, 255, 255, 0.78);
        }

        .contact-form input,
        .contact-form textarea {
          width: 100%;
          padding: 14px 16px 14px 40px;
          border-radius: 14px;
          border: 1px solid rgba(255, 255, 255, 0.18);
          background: rgba(12, 14, 24, 0.85);
          color: var(--text-primary);
          font-size: 0.95rem;
          margin-top: 6px;
          transition: border-color 0.2s ease, box-shadow 0.2s ease;
        }

        .contact-form textarea {
          min-height: 180px;
        }

        .contact-form input:focus,
        .contact-form textarea:focus {
          outline: none;
          border-color: rgba(108, 99, 255, 0.75);
          box-shadow: 0 0 0 4px rgba(108, 99, 255, 0.18);
        }

        .btn-primary {
          background: linear-gradient(120deg, rgba(108, 99, 255, 0.95), rgba(0, 212, 170, 0.92));
          border: none;
          padding: 14px 0;
          font-weight: 700;
          letter-spacing: 0.8px;
          border-radius: 999px;
          box-shadow: 0 14px 30px rgba(0, 0, 0, 0.35);
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }

        .btn-primary:hover {
          transform: translateY(-1px);
          box-shadow: 0 18px 36px rgba(0, 0, 0, 0.4);
        }

        .btn-primary:active {
          transform: translateY(0);
          box-shadow: 0 12px 24px rgba(0, 0, 0, 0.38);
        }

        .btn-wide {
          width: 100%;
        }

        .contact-form .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 18px;
        }

        @media (max-width: 768px) {
          .contact-form .form-row {
            grid-template-columns: 1fr;
          }
        }

        .contact-form textarea {
          resize: vertical;
        }

        .full-width {
          width: 100%;
        }

        .btn-wide {
          width: 100%;
          justify-content: center;
          padding: 14px 0;
          margin-top: 8px;
        }

        .contact-form .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 18px;
        }

        @media (max-width: 768px) {
          .contact-form .form-row {
            grid-template-columns: 1fr;
          }
        }

        /* ===== CTA SECTION ===== */
        .cta-section {
          padding: 30px 0;
        }

        .cta-card {
          position: relative;
          text-align: center;
          padding: 80px 40px;
          border-radius: var(--border-radius-lg);
          background: var(--bg-card);
          border: 1px solid var(--border);
          overflow: hidden;
        }

        .cta-glow {
          position: absolute;
          top: -50%;
          left: 50%;
          transform: translateX(-50%);
          width: 300px;
          height: 300px;
          background: var(--primary-glow);
          border-radius: 50%;
          filter: blur(100px);
        }

        .cta-title {
          font-family: var(--font-display), sans-serif;
          font-size: clamp(1.8rem, 3vw, 2.5rem);
          font-weight: 700;
          margin-bottom: 16px;
          position: relative;
          z-index: 1;
        }

        .cta-desc {
          font-size: 1.05rem;
          color: var(--text-secondary);
          margin-bottom: 32px;
          max-width: 500px;
          margin-left: auto;
          margin-right: auto;
          position: relative;
          z-index: 1;
        }

        .cta-actions {
          display: flex;
          gap: 16px;
          justify-content: center;
          flex-wrap: wrap;
          position: relative;
          z-index: 1;
        }

        /* ===== RESPONSIVE ===== */
        .tech-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
          margin-top: 48px;
        }

        .tech-card {
          position: relative;
          padding: 32px 24px;
          border-radius: 20px;
          overflow: hidden;
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          cursor: default;
        }

        .tech-card-glow {
          position: absolute;
          inset: 0;
          opacity: 0;
          transition: opacity 0.4s ease;
        }

        .tech-card:hover {
          transform: translateY(-8px);
          border-color: rgba(108, 99, 255, 0.3);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
        }

        .tech-card:hover .tech-card-glow {
          opacity: 1;
        }

        .tech-icon-box {
          width: 56px;
          height: 56px;
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.8rem;
          margin-bottom: 20px;
          position: relative;
          z-index: 2;
        }

        .tech-info {
          position: relative;
          z-index: 2;
        }

        .tech-name {
          font-family: var(--font-display), sans-serif;
          font-size: 1.15rem;
          font-weight: 700;
          margin-bottom: 6px;
        }

        .tech-desc {
          font-size: 0.85rem;
          color: var(--text-secondary);
          line-height: 1.5;
        }

        .tech-accent-line {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 2px;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .tech-card:hover .tech-accent-line {
          opacity: 1;
        }

        @media (max-width: 1024px) {
          .tech-grid { grid-template-columns: repeat(2, 1fr); }
        }

        @media (max-width: 600px) {
          .tech-grid { grid-template-columns: 1fr; }
        }

        @media (max-width: 768px) {
          .hero-content {
            grid-template-columns: 1fr;
            gap: 40px;
            text-align: center;
          }

          .hero-desc {
            max-width: 100%;
          }

          .hero-actions {
            justify-content: center;
          }

          .hero-tech-stack {
            justify-content: center;
          }

          .hero-visual {
            order: -1;
          }

          .hero-card-stack {
            max-width: 340px;
          }

          .stats-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .services-grid {
            grid-template-columns: 1fr;
          }

          .cta-card {
            padding: 48px 24px;
          }
        }
      `}</style>
    </>
  );
}

