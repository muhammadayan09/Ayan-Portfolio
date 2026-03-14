'use client';

import Link from 'next/link';

export default function WordpressDevelopment() {
  return (
    <>
      <section className="page-header">
        <div className="page-header-glow" />
        <div className="container">
          <span className="section-label">Service</span>
          <h1 className="page-title">WordPress <span className="gradient-text">Development</span></h1>
          <p className="page-subtitle">Custom themes, plugins and full CMS solutions.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>Capabilities</h2>
          <p>I build bespoke WordPress sites, personalize existing themes, integrate WooCommerce, and ensure speed and security.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>Workflow</h2>
          <p>Planning &amp; wireframing &gt; Theme development &gt; Plugin customization &gt; Launch &amp; support.</p>
        </div>
      </section>

      <section className="section text-center">
        <div className="container">
          <h2>Want a WordPress site?</h2>
          <Link href="/contact" className="btn btn-primary">Let's Talk</Link>
        </div>
      </section>
    </>
  );
}
