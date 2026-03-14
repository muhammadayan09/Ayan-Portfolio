'use client';

import Link from 'next/link';

export default function NextJsDevelopment() {
  return (
    <>
      <section className="page-header">
        <div className="page-header-glow" />
        <div className="container">
          <span className="section-label">Service</span>
          <h1 className="page-title">Next.js <span className="gradient-text">Development</span></h1>
          <p className="page-subtitle">SEO-friendly, performant React apps.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>Offerings</h2>
          <p>Static sites, server-side rendering, and API routes; full-stack capabilities with Next.js and Node.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>Process</h2>
          <p>Architecture planning, component development, backend integration, and deployment on Vercel or custom host.</p>
        </div>
      </section>

      <section className="section text-center">
        <div className="container">
          <h2>Ready for a Next.js project?</h2>
          <Link href="/contact" className="btn btn-primary">Talk to Me</Link>
        </div>
      </section>
    </>
  );
}
