'use client';

import Link from 'next/link';
import { useEffect, useState, useRef } from 'react';

const skills = [
  { name: 'HTML', icon: '🌐', color: '#E34F26' },
  { name: 'CSS', icon: '🎨', color: '#1572B6' },
  { name: 'Angular', icon: '🅰️', color: '#DD0031' },
  { name: 'Next.js', icon: '⚡', color: '#000000' },
  { name: 'WordPress', icon: '📝', color: '#21759B' },
  { name: 'SEO', icon: '🔍', color: '#47A248' },
  { name: 'Shopify', icon: '🛒', color: '#96BF48' },
];

const stats = [
  { number: '50+', label: 'Projects Completed' },
  { number: '30+', label: 'Happy Clients' },
  { number: '3+', label: 'Years Experience' },
  { number: '99%', label: 'Client Satisfaction' },
];

const testimonials = [
  {
    title: 'Discover how innovative financial management',
    text: 'Discover how innovative financial management solutions can transform your financial life, making it simpler and more efficient.',
    name: 'Melinda Parker',
    role: 'Sales Manager',
    rating: 5,
  },
  {
    title: 'Experience effortless connectivity with your',
    text: 'Experience seamless integration that enables smooth and efficient financial management with your bank.',
    name: 'Benjamin Evans',
    role: 'Product Designer',
    rating: 5,
  },
  {
    title: 'Streamline your contract management process',
    text: 'Streamline your contract management process with intuitive tools that simplify every stage, from drafting and negotiation to execution and monitoring.',
    name: 'James Miller',
    role: 'Design Lead',
    rating: 5,
  },
  {
    title: 'Accelerate growth with data-driven insights',
    text: 'We used analytics to optimize conversion flow, resulting in higher engagement and more qualified leads.',
    name: 'Sasha Nguyen',
    role: 'Growth Strategist',
    rating: 5,
  },
];

const caseStudies = [
  {
    title: 'E-commerce Revamp',
    desc: 'Redesigned checkout experience to boost conversions and reduce bounce rate.',
    tags: ['Shopify', 'UX', 'Performance'],
  },
  {
    title: 'SaaS Dashboard',
    desc: 'Built a scalable dashboard with real-time analytics and modular components.',
    tags: ['Next.js', 'React', 'Tailwind'],
  },
  {
    title: 'Landing Page Optimization',
    desc: 'Improved load speed and conversion flow for high-traffic marketing campaigns.',
    tags: ['SEO', 'A/B Testing', 'Accessibility'],
  },
  {
    title: 'Brand Refresh & UI Upgrade',
    desc: 'Delivered a modern UI refresh that improved engagement and brand consistency.',
    tags: ['Design', 'Figma', 'Accessibility'],
  },
];

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const [slideIndex, setSlideIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(4);
  const [caseSlide, setCaseSlide] = useState(0);
  const [caseVisible, setCaseVisible] = useState(4);
  const [testimonialSlide, setTestimonialSlide] = useState(0);
  const [testimonialVisible, setTestimonialVisible] = useState(3);
  const [contactName, setContactName] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [contactPhone, setContactPhone] = useState('');
  const [contactMessage, setContactMessage] = useState('');
  const trackRef = useRef(null);
  const logoRef = useRef(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  // update visibleCount on resize (for skills & case studies)
  useEffect(() => {
    const updateVisible = () => {
      const w = window.innerWidth;
      if (w <= 480) {
        setVisibleCount(1);
        setCaseVisible(1);
        setTestimonialVisible(1);
      } else if (w <= 768) {
        setVisibleCount(2);
        setCaseVisible(2);
        setTestimonialVisible(2);
      } else if (w <= 1024) {
        setVisibleCount(3);
        setCaseVisible(3);
        setTestimonialVisible(3);
      } else {
        setVisibleCount(4);
        setCaseVisible(4);
        setTestimonialVisible(3);
      }
    };
    updateVisible();
    window.addEventListener('resize', updateVisible);
    return () => window.removeEventListener('resize', updateVisible);
  }, []);

  // auto-advance by one card, respecting visibleCount
  useEffect(() => {
    const trackItems = [...skills, ...skills.slice(0, visibleCount)];
    const maxIndex = trackItems.length - visibleCount;
    const iv = setInterval(() => {
      setSlideIndex((s) => s + 1);
    }, 3000);
    return () => clearInterval(iv);
  }, [visibleCount]);

  // handle wrap-around when index enters cloned segment
  useEffect(() => {
    const trackItems = [...skills, ...skills.slice(0, visibleCount)];
    const maxIndex = trackItems.length - visibleCount;
    if (slideIndex > maxIndex) {
      const reset = () => {
        if (trackRef.current) {
          trackRef.current.style.transition = 'none';
          setSlideIndex(0);
          void trackRef.current.offsetWidth;
          trackRef.current.style.transition = '';
        }
      };
      setTimeout(reset, 600);
    }
  }, [slideIndex, visibleCount]);

  // keep case slider index within bounds when visibility changes
  useEffect(() => {
    const maxCaseIndex = Math.max(0, caseStudies.length - caseVisible);
    if (caseSlide > maxCaseIndex) {
      setCaseSlide(maxCaseIndex);
    }

    const maxTestimonialIndex = Math.max(0, testimonials.length - testimonialVisible);
    if (testimonialSlide > maxTestimonialIndex) {
      setTestimonialSlide(maxTestimonialIndex);
    }
  }, [caseSlide, caseVisible, testimonialSlide, testimonialVisible]);

  // update tracking transform in pixels since gap breaks percent logic
  useEffect(() => {
    if (!trackRef.current) return;
    const cards = trackRef.current.querySelectorAll('.skill-card');
    if (cards.length === 0) return;
    const gap = 32; // must match CSS gap/margin
    const cardWidth = cards[0].offsetWidth + gap;
    trackRef.current.style.transform = `translateX(-${slideIndex * cardWidth}px)`;
  }, [slideIndex, visibleCount]);

  // auto-scroll logos by duplicating track content
  useEffect(() => {
    if (!logoRef.current) return;
    const track = logoRef.current;
    // duplicate items for seamless loop
    track.innerHTML += track.innerHTML;
  }, []);

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
            <div className={`hero-badge ${mounted ? 'animate-fade-in-up' : ''}`}>
              <span className="badge-dot" />
              Accepting New Projects
            </div>

            <h1 className={`hero-title ${mounted ? 'animate-fade-in-up delay-1' : ''}`}>
              Hi, I&apos;m <span className="gradient-text">Muhammad Ayan</span>
            </h1>

            <p className={`hero-role ${mounted ? 'animate-fade-in-up delay-2' : ''}`}>
              Frontend Developer &amp; Digital Solutions Expert
            </p>

            <p className={`hero-desc ${mounted ? 'animate-fade-in-up delay-3' : ''}`}>
              I craft modern, performant web experiences using cutting-edge technologies.
              From pixel-perfect frontends to complete e-commerce solutions — I bring your vision to life.
            </p>

            <div className={`hero-actions ${mounted ? 'animate-fade-in-up delay-4' : ''}`}>
              <Link href="/contact" className="btn btn-primary">
                Let&apos;s Work Together
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </Link>
              <Link href="/skills" className="btn btn-outline">
                View My Skills
              </Link>
            </div>

            <div className={`hero-tech-stack ${mounted ? 'animate-fade-in-up delay-5' : ''}`}>
              <span className="tech-label">Tech Stack</span>
              <div className="tech-icons">
                {['HTML', 'CSS', 'Angular', 'Next.js', 'WordPress'].map((tech) => (
                  <span key={tech} className="tech-chip">{tech}</span>
                ))}
              </div>
            </div>
          </div>

          <div className={`hero-visual ${mounted ? 'animate-slide-right delay-2' : ''}`}>
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
{`const developer = {
  name: "Muhammad Ayan",
  role: "Frontend Developer",
  skills: [
    "HTML", "CSS",
    "Angular", "Next.js",
    "WordPress", "Shopify"
  ],
  passion: "Building amazing
    web experiences ✨"
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

      {/* Skills Highlight */}
      <section className="section skills-highlight">
        <div className="container">
          <div className="section-header-center">
            <span className="section-label">My Expertise</span>
            <h2 className="section-title">Skills &amp; Technologies</h2>
            <p className="section-subtitle" style={{ margin: '0 auto' }}>
              Proficient in modern web technologies to deliver exceptional digital experiences.
            </p>
          </div>

          {/* carousel wrapper */}
          <div className="skills-slider">
            <div
              ref={trackRef}
              className="skills-track"
            >
              {[...skills, ...skills.slice(0, visibleCount)].map((skill, i) => (
                <div key={i} className="skill-card glass-card" style={{ animationDelay: `${i * 0.1}s` }}>
                  <div className="skill-icon-wrapper" style={{ background: `${skill.color}20` }}>
                    <span className="skill-icon">{skill.icon}</span>
                  </div>
                  <h3 className="skill-name">{skill.name}</h3>
                  <div className="skill-bar-container">
                    <div
                      className="skill-bar"
                      style={{
                        width: `${80 + (i % skills.length) * 3}%`,
                        background: `linear-gradient(90deg, ${skill.color}, ${skill.color}88)`,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="skills-cta">
            <Link href="/skills" className="btn btn-outline">
              View All Skills →
            </Link>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="section services-preview">
        <div className="container">
          <div className="section-header-center">
            <span className="section-label">What I Do</span>
            <h2 className="section-title">Services I Offer</h2>
            <p className="section-subtitle" style={{ margin: '0 auto' }}>
              End-to-end web solutions tailored to your business needs.
            </p>
          </div>

          <div className="services-grid">
            {[
              {
                icon: '💻',
                title: 'Frontend Development',
                desc: 'Building responsive, interactive, and pixel-perfect user interfaces with modern frameworks.',
                tags: ['HTML', 'CSS', 'Angular', 'Next.js'],
              },
              {
                icon: '🛍️',
                title: 'Shopify Development',
                desc: 'Custom Shopify stores, theme customization, and e-commerce solutions that drive sales.',
                tags: ['Shopify', 'Liquid', 'E-commerce'],
              },
              {
                icon: '📝',
                title: 'WordPress Development',
                desc: 'Custom WordPress themes, plugins, and complete website solutions for any business.',
                tags: ['WordPress', 'PHP', 'WooCommerce'],
              },
              {
                icon: '🚀',
                title: 'SEO Optimization',
                desc: 'Technical and on-page SEO strategies to boost your search rankings and organic traffic.',
                tags: ['On-Page', 'Technical', 'Analytics'],
              },
              {
                icon: '📦',
                title: 'API Integration',
                desc: 'Seamless connection of third-party services and data sources using REST/GraphQL.',
                tags: ['REST', 'GraphQL', 'Webhooks'],
              },
              {
                icon: '🔒',
                title: 'Security Audits',
                desc: 'Thorough vulnerability assessments and hardening for web applications.',
                tags: ['Penetration', 'OWASP', 'Best Practices'],
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
            <Link href="/services" className="btn btn-primary">
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
              <span className="section-label">Work</span>
              <h2 className="section-title">Case Studies</h2>
              <p className="section-subtitle" style={{ margin: '0 auto' }}>
                Real projects that showcase the outcomes, designs and impact I deliver.
              </p>
            </div>

            <div className="case-nav-group">
              <button
                className="case-nav prev"
                onClick={() => setCaseSlide((s) => Math.max(0, s - 1))}
                disabled={caseSlide === 0}
                aria-label="Previous"
              >
                ‹
              </button>
              <button
                className="case-nav next"
                onClick={() =>
                  setCaseSlide((s) =>
                    Math.min(s + 1, Math.max(0, caseStudies.length - caseVisible))
                  )
                }
                disabled={caseSlide >= caseStudies.length - caseVisible}
                aria-label="Next"
              >
                ›
              </button>
            </div>
          </div>

          <div className="case-slider">
            <div className="case-track-wrapper">
              <div
                className="case-track"
                style={{
                  transform: `translateX(-${(100 / caseVisible) * caseSlide}%)`,
                }}
              >
                {caseStudies.map((project, i) => (
                  <div key={i} className="case-card glass-card">
                    <div className="case-image" />
                    <div className="case-content">
                      <div className="case-tags">
                        {project.tags.map((tag) => (
                          <span key={tag} className="case-tag">{tag}</span>
                        ))}
                      </div>
                      <h3 className="case-title">{project.title}</h3>
                      <p className="case-desc">{project.desc}</p>
                      <div className="case-actions">
                        <Link href="/case-studies" className="btn btn-outline">
                          View Case Study
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
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
                onClick={() => setTestimonialSlide((s) => Math.max(0, s - 1))}
                disabled={testimonialSlide === 0}
                aria-label="Previous testimonial"
              >
                ‹
              </button>
              <button
                className="case-nav next"
                onClick={() =>
                  setTestimonialSlide((s) =>
                    Math.min(s + 1, Math.max(0, testimonials.length - testimonialVisible))
                  )
                }
                disabled={testimonialSlide >= testimonials.length - testimonialVisible}
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
                  transform: `translateX(-${(100 / testimonialVisible) * testimonialSlide}%)`,
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
      <section className="section faq-section">
        <div className="container">
          <div className="section-header-center">
            <span className="section-label">FAQ</span>
            <h2 className="section-title">Frequently Asked Questions</h2>
            <p className="section-subtitle" style={{ margin: '0 auto', maxWidth: '520px' }}>
              Answers to common questions about my workflow, pricing, and collaboration process.
            </p>
          </div>

          <div className="faq-grid">
            {[
              {
                question: 'How do you typically start a new project?',
                answer:
                  'I begin with a discovery call to understand your goals, timeline, and desired outcome. Then I create a proposal outlining scope, milestones, and next steps.',
              },
              {
                question: 'What technologies do you use for frontend projects?',
                answer:
                  'I build modern frontends using Next.js, React, and Tailwind, with clean HTML/CSS and accessible UX. I also integrate with headless CMS and e-commerce platforms when needed.',
              },
              {
                question: 'Can you work with an existing design or Figma file?',
                answer:
                  'Yes — I can convert your Figma, Sketch, or Adobe XD designs into pixel-perfect, responsive web pages and make iterating fast and easy.',
              },
            ].map((item, i) => (
              <div key={i} className="faq-card glass-card">
                <h3 className="faq-question">{item.question}</h3>
                <p className="faq-answer">{item.answer}</p>
              </div>
            ))}
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
              Fill out the form and I’ll send the details to WhatsApp so I can get back to you quickly.
            </p>
          </div>

          <div className="contact-grid">
            <div className="contact-info glass-card">
              <h3 className="contact-info-title">Let’s build something great.</h3>
              <p className="contact-info-text">
                Share a few details about your project and I’ll follow up on WhatsApp with next steps.
                Prefer email? Use the info below.
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
                    <a className="meta-value" href="mailto:hello@ayan.dev">
                      hello@ayan.dev
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
          font-family: 'Space Grotesk', sans-serif;
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
          font-family: 'Space Grotesk', monospace;
        }

        .code-body {
          padding: 24px;
        }

        .code-body pre {
          margin: 0;
        }

        .code-body code {
          font-family: 'Space Grotesk', 'Courier New', monospace;
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
          font-family: 'Space Grotesk', sans-serif;
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

        .case-slider {
          position: relative;
          display: flex;
          align-items: center;
          gap: 12px;
          margin-top: 40px;
        }

        .case-track-wrapper {
          flex: 1;
          overflow: hidden;
        }

        .case-track {
          display: flex;
          gap: 24px;
          transition: transform 0.4s ease;
        }

        .case-card {
          flex: 0 0 calc(33.333% - 16px);
          position: relative;
          overflow: hidden;
          border: 1px solid var(--border);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          min-height: 420px;
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
          .case-card {
            flex: 0 0 calc(50% - 12px);
          }
        }

        @media (max-width: 768px) {
          .case-card {
            flex: 0 0 100%;
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


        .service-card {
          padding: 30px;
          cursor: default;
        }

        .service-icon {
          font-size: 2.5rem;
          margin-bottom: 20px;
        }

        .service-title {
          font-family: 'Space Grotesk', sans-serif;
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
          padding: 30px 0;
          background: linear-gradient(135deg, rgba(15, 18, 30, 0.95), rgba(18, 22, 40, 0.9));
        }

        .faq-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
          margin-top: 40px;
        }

        .faq-card {
          padding: 28px 22px;
          border-radius: var(--border-radius-lg);
          border: 1px solid rgba(255, 255, 255, 0.08);
          background: rgba(21, 24, 34, 0.65);
          backdrop-filter: blur(18px);
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }

        .faq-card:hover {
          transform: translateY(-4px);
          box-shadow: var(--shadow-md);
        }

        .faq-question {
          font-size: 1.05rem;
          font-weight: 700;
          margin-bottom: 12px;
          color: var(--text-primary);
        }

        .faq-answer {
          line-height: 1.7;
          color: var(--text-secondary);
        }

        @media (max-width: 1024px) {
          .faq-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 768px) {
          .faq-grid {
            grid-template-columns: 1fr;
          }
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
          font-family: 'Space Grotesk', sans-serif;
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
