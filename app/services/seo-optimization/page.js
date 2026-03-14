'use client';

import Link from 'next/link';

export default function SeoOptimization() {
  return (
    <>
      <section className="page-header">
        <div className="page-header-glow" />
        <div className="container">
          <span className="section-label">Service</span>
          <h1 className="page-title">SEO <span className="gradient-text">Optimization</span></h1>
          <p className="page-subtitle">Improve visibility & drive organic traffic.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>What We Do</h2>
          <p>Technical audits, on-page optimization, keyword research, schema markup and analytics setup to boost rankings.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>Strategy</h2>
          <p>Comprehensive analysis & ongoing adjustments for long-term growth.</p>
        </div>
      </section>

      <section className="section text-center">
        <div className="container">
          <h2>Need SEO support?</h2>
          <Link href="/contact" className="btn btn-primary">Get in Touch</Link>
        </div>
      </section>
    </>
  );
}
