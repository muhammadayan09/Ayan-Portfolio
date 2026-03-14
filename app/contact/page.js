'use client';

import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  const contactInfo = [
    {
      icon: '📧',
      label: 'Email',
      value: 'iamayan469@gmail.com',
      href: 'mailto:iamayan469@gmail.com',
      color: '#6C63FF',
    },
    {
      icon: '📱',
      label: 'Phone',
      value: '+91 7983505861',
      href: 'tel:+917983505861',
      color: '#00D4AA',
    },
    {
      icon: '💬',
      label: 'WhatsApp',
      value: '+91 7983505861',
      href: 'https://wa.me/917983505861',
      color: '#25D366',
    },
  ];

  return (
    <>
      {/* Page Header */}
      <section className="page-header">
        <div className="page-header-glow" />
        <div className="container">
          <span className="section-label">Get In Touch</span>
          <h1 className="page-title">Contact <span className="gradient-text">Me</span></h1>
          <p className="page-subtitle">
            Have a project in mind or need help with your website? Let&apos;s connect and bring your vision to life.
          </p>
        </div>
      </section>

      {/* Contact Info */}
      <section className="section">
        <div className="container">
          <div className="contact-info">
            <h2 className="contact-info-title">
              Let&apos;s Work <span className="gradient-text">Together</span>
            </h2>
            <p className="contact-info-desc">
              Whether you need a new website, want to revamp an existing one, or need help with SEO and digital solutions — I&apos;m here to help. Reach out through any of these channels.
            </p>

            <div className="contact-cards">
              {contactInfo.map((info, i) => (
                <a key={i} href={info.href} target={info.label === 'WhatsApp' ? '_blank' : undefined} rel={info.label === 'WhatsApp' ? 'noopener noreferrer' : undefined} className="contact-card glass-card">
                  <div className="contact-card-icon" style={{ background: `${info.color}18` }}>
                    <span>{info.icon}</span>
                  </div>
                  <div>
                    <span className="contact-card-label">{info.label}</span>
                    <span className="contact-card-value">{info.value}</span>
                  </div>
                </a>
              ))}
            </div>

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/917983505861"
              target="_blank"
              rel="noopener noreferrer"
              className="whatsapp-btn"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Chat on WhatsApp
            </a>

            {/* Availability */}
            <div className="availability glass-card">
              <div className="avail-dot" />
              <div>
                <span className="avail-title">Currently Available</span>
                <span className="avail-desc">Open for new projects and collaborations</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="section">
        <div className="container">
          <div className="contact-form-wrapper glass-card">
            <h3 className="form-heading">Send a Message</h3>
            {submitted ? (
              <div className="form-success">
                <span className="success-icon">✅</span>
                <h4>Message Sent!</h4>
                <p>Thank you for reaching out. I&apos;ll get back to you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label htmlFor="name" className="form-label">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="Your name"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email" className="form-label">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="you@example.com"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="subject" className="form-label">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="Project inquiry"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message" className="form-label">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="form-input form-textarea"
                    placeholder="Tell me about your project..."
                    rows="5"
                    required
                  />
                </div>

                <button type="submit" className="btn btn-primary form-submit">
                  Send Message
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/></svg>
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Social / Map CTA */}
      <section className="section">
        <div className="container text-center">
          <h2>Follow Me</h2>
          <p>Connect with me on social media or view my location.</p>
          <div className="social-links">
            <a href="#" className="btn btn-outline">LinkedIn</a>
            <a href="#" className="btn btn-outline">Twitter</a>
            <a href="#" className="btn btn-outline">GitHub</a>
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

        /* Grid */
        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 48px;
          align-items: start;
        }

        .contact-info-title {
          font-family: 'Space Grotesk', sans-serif;
          font-size: clamp(1.5rem, 2.5vw, 2rem);
          font-weight: 700;
          margin-bottom: 16px;
        }

        .contact-info-desc {
          font-size: 0.95rem;
          color: var(--text-secondary);
          line-height: 1.8;
          margin-bottom: 32px;
        }

        .contact-cards {
          display: flex;
          flex-direction: column;
          gap: 16px;
          margin-bottom: 28px;
        }

        .contact-card {
          display: flex;
          align-items: center;
          gap: 16px;
          padding: 20px 24px;
          text-decoration: none;
          cursor: pointer;
        }

        .contact-card:hover {
          transform: translateY(-2px);
        }

        .contact-card-icon {
          width: 48px;
          height: 48px;
          border-radius: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.3rem;
          flex-shrink: 0;
        }

        .contact-card-label {
          display: block;
          font-size: 0.78rem;
          color: var(--text-muted);
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-bottom: 2px;
        }

        .contact-card-value {
          display: block;
          font-size: 0.95rem;
          font-weight: 600;
          color: var(--text-primary);
        }

        /* WhatsApp */
        .whatsapp-btn {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 14px 32px;
          border-radius: 50px;
          background: #25D366;
          color: white;
          font-weight: 600;
          font-size: 0.95rem;
          text-decoration: none;
          transition: var(--transition);
          box-shadow: 0 4px 20px rgba(37, 211, 102, 0.3);
          margin-bottom: 28px;
        }

        .whatsapp-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 30px rgba(37, 211, 102, 0.4);
        }

        /* Availability */
        .availability {
          display: flex;
          align-items: center;
          gap: 14px;
          padding: 20px 24px;
        }

        .avail-dot {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: #25D366;
          box-shadow: 0 0 12px rgba(37, 211, 102, 0.5);
          animation: pulse-glow 2s ease infinite;
          flex-shrink: 0;
        }

        .avail-title {
          display: block;
          font-size: 0.92rem;
          font-weight: 600;
          color: var(--accent);
        }

        .avail-desc {
          display: block;
          font-size: 0.82rem;
          color: var(--text-muted);
        }

        /* Form */
        .contact-form-wrapper {
          padding: 30px;
        }

        .contact-form-wrapper:hover {
          transform: none;
        }

        .form-heading {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 1.3rem;
          font-weight: 700;
          margin-bottom: 28px;
        }

        .form-group {
          margin-bottom: 20px;
        }

        .form-label {
          display: block;
          font-size: 0.85rem;
          font-weight: 600;
          margin-bottom: 8px;
          color: var(--text-secondary);
        }

        .form-input {
          width: 100%;
          padding: 14px 18px;
          border-radius: var(--border-radius-sm);
          background: var(--bg-secondary);
          border: 1px solid var(--border);
          color: var(--text-primary);
          font-family: 'Inter', sans-serif;
          font-size: 0.92rem;
          transition: var(--transition);
          outline: none;
        }

        .form-input::placeholder {
          color: var(--text-muted);
        }

        .form-input:focus {
          border-color: var(--primary);
          box-shadow: 0 0 0 3px var(--primary-glow);
        }

        .form-textarea {
          resize: vertical;
          min-height: 120px;
        }

        .form-submit {
          width: 100%;
          justify-content: center;
          padding: 16px;
          font-size: 1rem;
        }

        /* Success */
        .form-success {
          text-align: center;
          padding: 48px 24px;
        }

        .success-icon {
          font-size: 3rem;
          display: block;
          margin-bottom: 16px;
        }

        .form-success h4 {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 1.3rem;
          font-weight: 700;
          margin-bottom: 8px;
          color: var(--accent);
        }

        .form-success p {
          color: var(--text-secondary);
          font-size: 0.92rem;
        }

        @media (max-width: 768px) {
          .contact-grid {
            grid-template-columns: 1fr;
            gap: 32px;
          }

          .contact-form-wrapper {
            padding: 28px;
          }
        }
      `}</style>
    </>
  );
}
