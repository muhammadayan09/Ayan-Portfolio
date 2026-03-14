'use client';

import Link from 'next/link';

const projects = [
  { title: 'Project Alpha', desc: 'E-commerce site built with Next.js and Shopify.', color: '#6C63FF' },
  { title: 'Project Beta', desc: 'WordPress corporate blog with custom theme.', color: '#21759B' },
  { title: 'Project Gamma', desc: 'Angular dashboard for internal analytics.', color: '#00D4AA' },
];

export default function CaseStudies() {
  return (
    <>
      {/* Page header */}
      <section className="page-header">
        <div className="page-header-glow" />
        <div className="container">
          <span className="section-label">My Work</span>
          <h1 className="page-title">Case <span className="gradient-text">Studies</span></h1>
          <p className="page-subtitle">
            Real projects, real results — dive into detailed breakdowns of my most impactful work.
          </p>
        </div>
      </section>

      {/* Project gallery */}
      <section className="section">
        <div className="container">
          <div className="case-grid">
            {projects.map((p, i) => (
              <div key={i} className="case-card glass-card" style={{ borderColor: p.color }}>
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process details */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">How I Deliver</h2>
          <p>Every case study follows a clear process from discovery to launch. I document requirements, design, development, and optimisation so clients see the path to success.</p>
        </div>
      </section>

      {/* CTA */}
      <section className="section text-center">
        <div className="container">
          <h2>Interested in a similar project?</h2>
          <Link href="/contact" className="btn btn-primary">Let's Talk</Link>
        </div>
      </section>

      <style jsx>{`
        .case-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit,minmax(250px,1fr));
          gap: 24px;
        }
        .case-card {
          padding: 24px;
        }
      `}</style>
    </>
  );
}
