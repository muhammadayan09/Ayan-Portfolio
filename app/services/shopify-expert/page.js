'use client';

import Link from 'next/link';

export default function ShopifyExpert() {
  return (
    <>
      <section className="page-header">
        <div className="page-header-glow" />
        <div className="container">
          <span className="section-label">Service</span>
          <h1 className="page-title">Shopify <span className="gradient-text">Expert</span></h1>
          <p className="page-subtitle">E-commerce stores that convert.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>Services</h2>
          <p>Custom Shopify themes, product setup, payment integration, and performance tuning.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>Approach</h2>
          <p>User-focused design combined with marketing tools to increase sales.</p>
        </div>
      </section>

      <section className="section text-center">
        <div className="container">
          <h2>Looking for a Shopify store?</h2>
          <Link href="/contact" className="btn btn-primary">Let's Build</Link>
        </div>
      </section>
    </>
  );
}
