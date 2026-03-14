'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [budget, setBudget] = useState('');
  const [service, setService] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = `*New Project Inquiry*%0A%0A👤 Name: ${encodeURIComponent(name)}%0A📧 Email: ${encodeURIComponent(email)}%0A📱 Phone: ${encodeURIComponent(phone)}%0A💼 Service: ${encodeURIComponent(service)}%0A💰 Budget: ${encodeURIComponent(budget)}%0A%0A📝 Message:%0A${encodeURIComponent(message)}`;
    window.open(`https://wa.me/917983505861?text=${text}`, '_blank');
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <>
      {/* Hero Header */}
      <section className="contact-hero">
        <div className="hero-bg">
          <div className="hero-orb orb-1" />
          <div className="hero-orb orb-2" />
          <div className="hero-orb orb-3" />
          <div className="hero-grid" />
        </div>

        <div className="container hero-inner">
          <div className="hero-text">
            <span className="section-label">Let&apos;s Connect</span>
            <h1 className="hero-title">
              Have a Project?<br />
              <span className="gradient-text">Let&apos;s Talk.</span>
            </h1>
            <p className="hero-desc">
              We partner with visionary brands to architect elite digital experiences. Whether you need a high-performance web application, a besopke eCommerce platform, or a complete digital overhaul, our team is ready to engineer your success.
            </p>
          </div>

          <div className="hero-stats">
            {[
              { number: '24h', label: 'Avg. Response Time' },
              { number: '50+', label: 'Projects Delivered' },
              { number: '100%', label: 'Client Satisfaction' },
            ].map((stat, i) => (
              <div key={i} className="hero-stat">
                <span className="hero-stat-number gradient-text">{stat.number}</span>
                <span className="hero-stat-label">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="section contact-methods-section">
        <div className="container">
          <div className="methods-grid">
            {[
              {
                icon: '💬',
                title: 'WhatsApp',
                subtitle: 'Fastest way to reach me',
                value: '+91 7983505861',
                href: 'https://wa.me/917983505861',
                color: '#25D366',
                btnText: 'Chat Now',
                external: true,
              },
              {
                icon: '📧',
                title: 'Email',
                subtitle: 'For detailed discussions',
                value: 'iamayan469@gmail.com',
                href: 'mailto:iamayan469@gmail.com',
                color: '#6C63FF',
                btnText: 'Send Email',
                external: false,
              },
              {
                icon: '📱',
                title: 'Phone',
                subtitle: 'Direct call for urgent needs',
                value: '+91 7983505861',
                href: 'tel:+917983505861',
                color: '#FF6B6B',
                btnText: 'Call Now',
                external: false,
              },
              {
                icon: '📍',
                title: 'Location',
                subtitle: 'Based in',
                value: 'India (Remote Worldwide)',
                href: null,
                color: '#F5A623',
                btnText: null,
                external: false,
              },
            ].map((method, i) => (
              <div key={i} className="method-card glass-card">
                <div className="method-icon-ring" style={{ borderColor: `${method.color}40`, background: `${method.color}10` }}>
                  <span className="method-icon">{method.icon}</span>
                </div>
                <h3 className="method-title">{method.title}</h3>
                <p className="method-subtitle">{method.subtitle}</p>
                <span className="method-value">{method.value}</span>
                {method.btnText && (
                  <a
                    href={method.href}
                    target={method.external ? '_blank' : undefined}
                    rel={method.external ? 'noopener noreferrer' : undefined}
                    className="method-btn"
                    style={{ background: method.color }}
                  >
                    {method.btnText}
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="section contact-main">
        <div className="container">
          <div className="contact-layout">
            {/* Left: Info Side */}
            <div className="contact-info-side">
              <div className="info-badge">
                <div className="badge-pulse" />
                <span>Currently Available for Projects</span>
              </div>

              <h2 className="info-title">
                Ready to Architect<br />
                Your <span className="gradient-text">Digital Future?</span>
              </h2>

              <p className="info-desc">
                Fill out the form and our team will get back to you within 24 hours. 
                For faster response, message us directly on WhatsApp.
              </p>

              {/* Why Choose Us */}
              <div className="why-list">
                {[
                  { icon: '⚡', text: 'Elite Engineering Standards' },
                  { icon: '🎨', text: 'Pixel-Perfect Bespoke Design' },
                  { icon: '📱', text: 'Uncompromising Performance' },
                  { icon: '🔍', text: 'Technical SEO Optimization' },
                  { icon: '🛡️', text: 'Dedicated Post-Launch Support' },
                ].map((item, i) => (
                  <div key={i} className="why-item">
                    <span className="why-icon">{item.icon}</span>
                    <span>{item.text}</span>
                  </div>
                ))}
              </div>

              {/* Quick WhatsApp */}
              <a
                href="https://wa.me/917983505861?text=Hi!%20I%20have%20a%20project%20to%20discuss."
                target="_blank"
                rel="noopener noreferrer"
                className="whatsapp-float"
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Prefer WhatsApp? Chat instantly →
              </a>
            </div>

            {/* Right: Form Side */}
            <div className="contact-form-card glass-card">
              {submitted ? (
                <div className="success-state">
                  <div className="success-circle">
                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#00D4AA" strokeWidth="2.5" strokeLinecap="round">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                  </div>
                  <h3>Message Sent! 🎉</h3>
                  <p>Thank you for reaching out. We&apos;ll get back to you within 24 hours.</p>
                  <button className="btn btn-outline" onClick={() => setSubmitted(false)}>Send Another</button>
                </div>
              ) : (
                <>
                  <div className="form-header">
                    <h2 className="form-title">Submit Inquiry</h2>
                    <p className="form-subtitle">Tell us about your objectives, timeline, and technical requirements. We&apos;ll craft a tailored proposal to elevate your brand.</p>
                  </div>

                  <form onSubmit={handleSubmit} className="contact-form">
                    <div className="form-row">
                      <div className="input-group">
                        <label>Your Name *</label>
                        <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Muhammad Ayan" required />
                      </div>
                      <div className="input-group">
                        <label>Email Address *</label>
                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@example.com" required />
                      </div>
                    </div>

                    <div className="form-row">
                      <div className="input-group">
                        <label>Phone / WhatsApp</label>
                        <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="+91 79835 05861" />
                      </div>
                      <div className="input-group">
                        <label>Budget Range</label>
                        <select value={budget} onChange={(e) => setBudget(e.target.value)}>
                          <option value="">Select budget</option>
                          <option value="Under ₹10,000">Under ₹10,000</option>
                          <option value="₹10,000 - ₹25,000">₹10,000 - ₹25,000</option>
                          <option value="₹25,000 - ₹50,000">₹25,000 - ₹50,000</option>
                          <option value="₹50,000+">₹50,000+</option>
                        </select>
                      </div>
                    </div>

                    <div className="input-group">
                      <label>Service Needed</label>
                      <select value={service} onChange={(e) => setService(e.target.value)}>
                        <option value="">Select a service</option>
                        <option value="Frontend Development">Frontend Development</option>
                        <option value="WordPress Development">WordPress Development</option>
                        <option value="Shopify Store">Shopify Store</option>
                        <option value="Next.js / React App">Next.js / React App</option>
                        <option value="SEO Optimization">SEO Optimization</option>
                        <option value="Website Redesign">Website Redesign</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>

                    <div className="input-group">
                      <label>Project Details *</label>
                      <textarea
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Describe your project, goals, timeline, and any specific requirements..."
                        rows={5}
                        required
                      />
                    </div>

                    <button
                      type="submit"
                      style={{
                        width: '100%',
                        padding: '18px 32px',
                        border: 'none',
                        borderRadius: '14px',
                        background: 'linear-gradient(135deg, #6C63FF, #8B5CF6)',
                        color: '#fff',
                        fontFamily: "'Space Grotesk', sans-serif",
                        fontSize: '1.1rem',
                        fontWeight: 700,
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '10px',
                        boxShadow: '0 8px 30px rgba(108, 99, 255, 0.4)',
                        transition: 'all 0.3s ease',
                        letterSpacing: '0.5px',
                      }}
                      onMouseOver={(e) => {
                        e.currentTarget.style.transform = 'translateY(-3px)';
                        e.currentTarget.style.boxShadow = '0 12px 40px rgba(108, 99, 255, 0.55)';
                      }}
                      onMouseOut={(e) => {
                        e.currentTarget.style.transform = 'translateY(0)';
                        e.currentTarget.style.boxShadow = '0 8px 30px rgba(108, 99, 255, 0.4)';
                      }}
                    >
                      Send Message
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
                    </button>

                    <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)', textAlign: 'center', marginTop: '12px' }}>
                      🔒 Your information is safe and will never be shared.
                    </p>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section style={{ padding: '80px 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: '60px', alignItems: 'start' }}>
            {/* Left side - heading */}
            <div style={{ position: 'sticky', top: '120px' }}>
              <span className="section-label">FAQ</span>
              <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 'clamp(1.8rem, 3vw, 2.4rem)', fontWeight: 800, lineHeight: 1.2, marginBottom: '16px' }}>
                Got <span className="gradient-text">Questions?</span>
              </h2>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '28px' }}>
                Here are answers to some of the most common things people ask me before starting a project.
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
                { num: '01', q: 'How quickly can you start?', a: 'We can usually start within 2-3 days after finalizing the scope and requirements of your project.' },
                { num: '02', q: 'Do you offer ongoing support?', a: 'Yes! We offer monthly maintenance packages to keep your website updated, secure, and performing optimally.' },
                { num: '03', q: 'What if I need changes after delivery?', a: 'Every package includes revision rounds. Additional changes can be made at a reasonable rate after delivery.' },
                { num: '04', q: 'Do you work with international clients?', a: 'Absolutely! We work with clients worldwide. Communication is easy via WhatsApp, email, or video calls.' },
                { num: '05', q: 'How does pricing work?', a: 'We offer transparent package-based pricing. Check our Packages page or contact us for a custom quote tailored to your needs.' },
                { num: '06', q: 'What do you need to get started?', a: 'A brief about your project, reference designs (if any), content/copy, and brand assets like logo and colors.' },
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
                    <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '1.5rem', fontWeight: 800, color: 'rgba(108, 99, 255, 0.15)', flexShrink: 0, lineHeight: 1 }}>{item.num}</span>
                    <div>
                      <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '1rem', fontWeight: 700, marginBottom: '8px' }}>{item.q}</h3>
                      <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.7, margin: 0 }}>{item.a}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        /* ===== HERO ===== */
        .contact-hero {
          min-height: 70vh;
          display: flex;
          align-items: center;
          position: relative;
          overflow: hidden;
          padding: 140px 0 60px;
        }

        .hero-bg {
          position: absolute;
          inset: 0;
          pointer-events: none;
        }

        .hero-orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(100px);
        }

        .hero-orb.orb-1 {
          width: 500px;
          height: 500px;
          background: rgba(108, 99, 255, 0.12);
          top: -120px;
          right: -100px;
          animation: float 8s ease-in-out infinite;
        }

        .hero-orb.orb-2 {
          width: 350px;
          height: 350px;
          background: rgba(0, 212, 170, 0.08);
          bottom: -80px;
          left: -80px;
          animation: float 10s ease-in-out infinite reverse;
        }

        .hero-orb.orb-3 {
          width: 250px;
          height: 250px;
          background: rgba(255, 107, 107, 0.06);
          top: 40%;
          left: 40%;
          animation: float 12s ease-in-out infinite;
        }

        .hero-grid {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(255,255,255,0.015) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.015) 1px, transparent 1px);
          background-size: 60px 60px;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-30px); }
        }

        .hero-inner {
          position: relative;
          z-index: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }

        .hero-title {
          font-family: 'Space Grotesk', sans-serif;
          font-size: clamp(2.5rem, 5vw, 4rem);
          font-weight: 800;
          line-height: 1.15;
          margin-bottom: 20px;
        }

        .hero-desc {
          font-size: 1.08rem;
          color: var(--text-secondary);
          line-height: 1.8;
          max-width: 580px;
          margin: 0 auto 40px;
        }

        .hero-stats {
          display: flex;
          gap: 48px;
        }

        .hero-stat {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .hero-stat-number {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 2rem;
          font-weight: 800;
        }

        .hero-stat-label {
          font-size: 0.82rem;
          color: var(--text-muted);
          margin-top: 4px;
        }

        /* ===== METHODS ===== */
        .contact-methods-section {
          padding-top: 20px;
        }

        .methods-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
        }

        .method-card {
          padding: 32px 24px;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .method-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 16px 48px rgba(0,0,0,0.12);
        }

        .method-icon-ring {
          width: 64px;
          height: 64px;
          border-radius: 50%;
          border: 2px solid;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 16px;
        }

        .method-icon {
          font-size: 1.6rem;
        }

        .method-title {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 1.1rem;
          font-weight: 700;
          margin-bottom: 4px;
        }

        .method-subtitle {
          font-size: 0.78rem;
          color: var(--text-muted);
          margin-bottom: 8px;
        }

        .method-value {
          font-size: 0.88rem;
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: 16px;
        }

        .method-btn {
          display: inline-block;
          padding: 8px 24px;
          border-radius: 50px;
          color: #fff;
          font-size: 0.82rem;
          font-weight: 600;
          text-decoration: none;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }

        .method-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(0,0,0,0.2);
        }

        /* ===== MAIN CONTACT ===== */
        .contact-layout {
          display: grid;
          grid-template-columns: 1fr 1.2fr;
          gap: 48px;
          align-items: start;
        }

        .contact-info-side {
          position: sticky;
          top: 120px;
        }

        .info-badge {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 8px 20px;
          border-radius: 50px;
          background: rgba(0, 212, 170, 0.08);
          border: 1px solid rgba(0, 212, 170, 0.2);
          font-size: 0.82rem;
          color: #00D4AA;
          font-weight: 500;
          margin-bottom: 28px;
        }

        .badge-pulse {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #00D4AA;
          box-shadow: 0 0 10px rgba(0, 212, 170, 0.5);
          animation: pulse-glow 2s ease infinite;
        }

        @keyframes pulse-glow {
          0%, 100% { opacity: 1; box-shadow: 0 0 10px rgba(0, 212, 170, 0.5); }
          50% { opacity: 0.5; box-shadow: 0 0 20px rgba(0, 212, 170, 0.8); }
        }

        .info-title {
          font-family: 'Space Grotesk', sans-serif;
          font-size: clamp(1.8rem, 3vw, 2.4rem);
          font-weight: 800;
          line-height: 1.2;
          margin-bottom: 16px;
        }

        .info-desc {
          font-size: 0.95rem;
          color: var(--text-secondary);
          line-height: 1.8;
          margin-bottom: 32px;
        }

        .why-list {
          display: flex;
          flex-direction: column;
          gap: 14px;
          margin-bottom: 32px;
        }

        .why-item {
          display: flex;
          align-items: center;
          gap: 12px;
          font-size: 0.9rem;
          color: var(--text-secondary);
        }

        .why-icon {
          font-size: 1.1rem;
          flex-shrink: 0;
        }

        .whatsapp-float {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 14px 28px;
          border-radius: 50px;
          background: linear-gradient(135deg, #25D366, #128C7E);
          color: #fff;
          font-weight: 600;
          font-size: 0.9rem;
          text-decoration: none;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
          box-shadow: 0 4px 24px rgba(37, 211, 102, 0.3);
        }

        .whatsapp-float:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 32px rgba(37, 211, 102, 0.4);
        }

        /* ===== FORM ===== */
        .contact-form-card {
          padding: 40px;
        }

        .contact-form-card:hover {
          transform: none;
        }

        .form-header {
          margin-bottom: 32px;
        }

        .form-title {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 1.5rem;
          font-weight: 700;
          margin-bottom: 8px;
        }

        .form-subtitle {
          font-size: 0.9rem;
          color: var(--text-secondary);
        }

        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
        }

        .input-group {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .input-group label {
          font-size: 0.82rem;
          font-weight: 600;
          color: var(--text-secondary);
          letter-spacing: 0.3px;
        }

        .input-group input,
        .input-group select,
        .input-group textarea {
          width: 100%;
          padding: 14px 18px;
          border-radius: 12px;
          background: var(--bg-secondary);
          border: 1.5px solid var(--border);
          color: var(--text-primary);
          font-family: 'Inter', sans-serif;
          font-size: 0.9rem;
          transition: all 0.2s ease;
          outline: none;
        }

        .input-group input::placeholder,
        .input-group textarea::placeholder {
          color: var(--text-muted);
        }

        .input-group input:focus,
        .input-group select:focus,
        .input-group textarea:focus {
          border-color: var(--primary);
          box-shadow: 0 0 0 4px var(--primary-glow);
          background: var(--bg-primary);
        }

        .input-group select {
          cursor: pointer;
          appearance: none;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%23888' stroke-width='2'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E");
          background-repeat: no-repeat;
          background-position: right 16px center;
          padding-right: 40px;
        }

        .input-group textarea {
          resize: vertical;
          min-height: 120px;
        }

        /* ===== RESPONSIVE ===== */
        @media (max-width: 1024px) {
          .contact-layout {
            grid-template-columns: 1fr;
            gap: 40px;
          }

          .contact-info-side {
            position: static;
          }

          .methods-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 768px) {
          .hero-stats {
            gap: 24px;
          }

          .hero-stat-number {
            font-size: 1.5rem;
          }

          .methods-grid {
            grid-template-columns: 1fr;
            max-width: 400px;
            margin: 0 auto;
          }

          .form-row {
            grid-template-columns: 1fr;
          }

          .contact-form-card {
            padding: 28px;
          }

          .faq-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 480px) {
          .hero-stats {
            flex-direction: column;
            gap: 16px;
          }
        }
      `}</style>
    </>
  );
}
