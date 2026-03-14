'use client';

import Link from 'next/link';

export default function FrontendDevelopment() {
  return (
    <>
      {/* Header */}
      <section className="page-header">
        <div className="page-header-glow" />
        <div className="container">
          <span className="section-label">Service</span>
          <h1 className="page-title">Frontend <span className="gradient-text">Development</span></h1>
          <p className="page-subtitle">Responsive, interactive interfaces built with modern frameworks.</p>
        </div>
      </section>

      {/* What we do */}
      <section className="section">
        <div className="container">
          <h2>What We Offer</h2>
          <p>From landing pages to complex SPA/MPA applications, we deliver clean, maintainable frontends using HTML, CSS, JavaScript, Angular, Next.js and React.</p>
        </div>
      </section>

      {/* Process */}
      <section className="section">
        <div className="container">
          <h2>How it Works</h2>
          <ul>
            <li>Discovery &amp; planning</li>
            <li>UI/UX design</li>
            <li>Development &amp; testing</li>
            <li>Deployment &amp; maintenance</li>
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="section text-center">
        <div className="container">
          <h2>Ready to start?</h2>
          <Link href="/contact" className="btn btn-primary">Contact Us</Link>
        </div>
      </section>

      <style jsx>{`
        ul {padding-left:20px;}
        li {margin-bottom:8px;}
      `}</style>
    </>
  );
}
