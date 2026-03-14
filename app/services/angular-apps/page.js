'use client';

import Link from 'next/link';

export default function AngularApps() {
  return (
    <>
      <section className="page-header">
        <div className="page-header-glow" />
        <div className="container">
          <span className="section-label">Service</span>
          <h1 className="page-title">Angular <span className="gradient-text">Apps</span></h1>
          <p className="page-subtitle">Robust single-page applications with Angular.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>Features</h2>
          <p>Modular architecture, performance optimizations, and REST/GraphQL integrations using Angular framework.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>Development Flow</h2>
          <p>Requirement gathering, component design, implementation, and deployment with continuous updates.</p>
        </div>
      </section>

      <section className="section text-center">
        <div className="container">
          <h2>Want an Angular app?</h2>
          <Link href="/contact" className="btn btn-primary">Reach Out</Link>
        </div>
      </section>
    </>
  );
}
