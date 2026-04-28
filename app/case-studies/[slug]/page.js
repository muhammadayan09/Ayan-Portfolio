import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getCaseStudyBySlug } from '../../data/caseStudies';

export default function CaseStudyDetail({ params }) {
  const data = getCaseStudyBySlug(params.slug);

  if (!data) {
    notFound();
  }

  const pageUrl = `https://pilatuweb.netlify.app/case-studies/${params.slug}/`;
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: 'https://pilatuweb.netlify.app/',
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Case Studies',
            item: 'https://pilatuweb.netlify.app/case-studies/',
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: data.title,
            item: pageUrl,
          },
        ],
      },
      {
        '@type': 'Article',
        headline: data.title,
        description: data.summary,
        url: pageUrl,
        author: {
          '@type': 'Organization',
          name: 'PilatuWeb',
        },
        publisher: {
          '@type': 'Organization',
          name: 'PilatuWeb',
        },
        articleSection: 'Case Studies',
      },
    ],
  };

  return (
    <div className="case-study-detail">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <section className="case-hero">
        <div className="container">
          <div className="hero-flex animate-up">
            <div className="hero-text">
              <span className="case-badge" style={{ background: `${data.color}20`, color: data.color }}>
                {data.category}
              </span>
              <h1 className="case-h1">{data.title}</h1>
              <p className="case-subtitle">
                Client: <span className="highlight">{data.client}</span>
              </p>

              <div className="case-stats">
                {data.stats.map((stat) => (
                  <div key={stat.label} className="stat-box">
                    <div className="stat-val" style={{ color: data.color }}>
                      {stat.value}
                    </div>
                    <div className="stat-lab">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="hero-glow" style={{ background: data.color }} />
      </section>

      <section className="case-section bg-alt">
        <div className="container">
          <div className="grid-split">
            <div className="content-side">
              <span className="section-label">01. The Challenge</span>
              <h2 className="case-h2">
                The <span className="gradient-text">Problem</span> We Solved
              </h2>
              <p className="case-p">{data.challenge}</p>
              {data.challengeExtra && <p className="case-p">{data.challengeExtra}</p>}
              <div className="tech-stack">
                <h3 className="tech-title">Technologies Used:</h3>
                <div className="tech-pills">
                  {data.tech.map((tech) => (
                    <span key={tech} className="tech-pill">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              {data.issues && (
                <div className="tech-stack" style={{ marginTop: '24px' }}>
                  <h3 className="tech-title">Key Issues:</h3>
                  <div className="tech-pills">
                    {data.issues.map((issue) => (
                      <span
                        key={issue}
                        className="tech-pill"
                        style={{ borderColor: 'rgba(255,107,107,0.3)', color: '#FF6B6B' }}
                      >
                        {issue}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
            <div className="visual-side">
              <div className="problem-card glass-card">
                <div className="problem-icon">!</div>
                <div className="problem-text">{data.issues.join(' • ')}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="case-section">
        <div className="container">
          <div className="grid-split reverse">
            <div className="content-side">
              <span className="section-label">02. The Solution</span>
              <h2 className="case-h2">
                {data.solutionHeading ? (
                  <>
                    {data.solutionHeading[0]}
                    <span className="gradient-text">{data.solutionHeading[1]}</span>
                    {data.solutionHeading[2]}
                  </>
                ) : (
                  <>
                    Architecting <span className="gradient-text">Excellence</span>
                  </>
                )}
              </h2>
              <p className="case-p">{data.solutionIntro}</p>
              <p className="case-p">{data.solutionDetail}</p>
              <div className="process-list">
                {data.process.map((step, i) => (
                  <div key={step.title} className="process-item">
                    <span className="step-num" style={{ background: data.color }}>
                      {i + 1}
                    </span>
                    <div className="step-text">
                      <h3>{step.title}</h3>
                      <p>{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="visual-side">
              <div className="solution-mockup glass-card">
                <div className="mockup-header">
                  <div className="dot" />
                  <div className="dot" />
                  <div className="dot" />
                </div>
                <div className="mockup-body">
                  <div className="skeleton-hero" style={{ background: `${data.color}15` }} />
                  <div className="skeleton-grid" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="case-section bg-gradient">
        <div className="container text-center">
          <span className="section-label white">03. Impact</span>
          <h2 className="case-h2 white">
            The <span className="gradient-text">Results</span>
          </h2>
          <p className="case-p max-700 mx-auto white-op">{data.result}</p>
          <div className="result-stats-grid">
            {data.resultStats.map((result) => (
              <div key={result} className="result-stat-item glass-card">
                <span className="result-check">+</span>
                <span>{result}</span>
              </div>
            ))}
          </div>

          <div className="case-cta-box glass-card scale-hover">
            <h3>Have a Similar Project?</h3>
            <p>{data.ctaDesc}</p>
            <div className="cta-btns">
              <Link href="/contact" className="btn btn-primary">
                Start Your Success Story
              </Link>
              <Link href="/case-studies" className="btn btn-outline">
                View Other Case Studies
              </Link>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .case-study-detail {
          padding-top: 80px;
        }

        .case-section {
          padding: 100px 0;
        }

        .bg-alt {
          background: rgba(255, 255, 255, 0.02);
        }

        .bg-gradient {
          background: linear-gradient(180deg, transparent, rgba(108, 99, 255, 0.1));
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 24px;
        }

        .text-center {
          text-align: center;
        }

        .mx-auto {
          margin-left: auto;
          margin-right: auto;
        }

        .max-700 {
          max-width: 700px;
        }

        .white {
          color: #fff;
        }

        .white-op {
          color: rgba(255, 255, 255, 0.8);
        }

        .case-hero {
          min-height: 80vh;
          display: flex;
          align-items: center;
          position: relative;
          overflow: hidden;
        }

        .hero-glow {
          position: absolute;
          top: 0;
          right: 0;
          width: 50vw;
          height: 100%;
          filter: blur(150px);
          opacity: 0.15;
          z-index: -1;
        }

        .case-badge {
          display: inline-block;
          padding: 8px 16px;
          border-radius: 50px;
          font-weight: 700;
          font-size: 0.8rem;
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-bottom: 24px;
        }

        .case-h1 {
          font-family: var(--font-display), sans-serif;
          font-size: clamp(2.5rem, 6vw, 4.5rem);
          font-weight: 800;
          line-height: 1.1;
          margin-bottom: 12px;
        }

        .case-subtitle {
          font-size: 1.25rem;
          color: var(--text-secondary);
          margin-bottom: 48px;
        }

        .highlight {
          color: var(--text-primary);
          font-weight: 700;
        }

        .case-stats {
          display: flex;
          gap: 40px;
          flex-wrap: wrap;
        }

        .stat-val {
          font-size: 2.5rem;
          font-weight: 800;
          line-height: 1;
        }

        .stat-lab {
          font-size: 0.85rem;
          color: var(--text-muted);
          font-weight: 600;
          margin-top: 8px;
          text-transform: uppercase;
        }

        .grid-split {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: center;
        }

        .grid-split.reverse {
          direction: rtl;
        }

        .grid-split.reverse .content-side {
          direction: ltr;
        }

        .case-h2 {
          font-family: var(--font-display), sans-serif;
          font-size: 2.8rem;
          font-weight: 800;
          margin-bottom: 24px;
        }

        .case-p {
          font-size: 1.1rem;
          line-height: 1.8;
          color: var(--text-secondary);
          margin-bottom: 32px;
        }

        .tech-title,
        .step-text h3 {
          margin-bottom: 10px;
        }

        .tech-pills {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
        }

        .tech-pill {
          padding: 6px 14px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 8px;
          font-size: 0.85rem;
          font-weight: 600;
        }

        .process-list {
          display: grid;
          gap: 24px;
        }

        .process-item {
          display: flex;
          gap: 20px;
        }

        .step-num {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          display: grid;
          place-items: center;
          flex-shrink: 0;
          font-weight: 800;
          color: #000;
          font-size: 0.9rem;
        }

        .step-text p {
          font-size: 0.9rem;
          color: var(--text-muted);
        }

        .problem-card {
          padding: 40px;
          text-align: center;
        }

        .problem-icon {
          font-size: 3rem;
          margin-bottom: 20px;
        }

        .problem-text {
          font-weight: 700;
          color: var(--text-secondary);
        }

        .solution-mockup {
          height: 400px;
          padding: 20px;
          overflow: hidden;
        }

        .mockup-header {
          display: flex;
          gap: 8px;
          margin-bottom: 16px;
        }

        .dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.2);
        }

        .skeleton-hero {
          height: 160px;
          border-radius: 12px;
          margin-bottom: 20px;
        }

        .skeleton-grid {
          height: 200px;
          background: rgba(255, 255, 255, 0.05);
          border-radius: 12px;
        }

        .result-stats-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 16px;
          max-width: 600px;
          margin: 40px auto 0;
        }

        .result-stat-item {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 16px 20px;
          font-weight: 600;
          font-size: 0.95rem;
        }

        .result-check {
          color: #00d4aa;
          font-size: 1.1rem;
        }

        .case-cta-box {
          margin-top: 60px;
          padding: 60px;
          text-align: center;
        }

        .case-cta-box h3 {
          font-size: 2rem;
          font-weight: 700;
          margin-bottom: 12px;
        }

        .case-cta-box p {
          color: var(--text-secondary);
          margin-bottom: 32px;
        }

        .cta-btns {
          display: flex;
          gap: 16px;
          justify-content: center;
          flex-wrap: wrap;
        }

        @media (max-width: 900px) {
          .grid-split {
            grid-template-columns: 1fr;
            gap: 40px;
          }

          .grid-split.reverse {
            direction: ltr;
          }

          .visual-side {
            order: -1;
          }

          .case-hero {
            min-height: auto;
            padding: 60px 0;
          }

          .result-stats-grid {
            grid-template-columns: 1fr;
          }
        }

        .animate-up {
          animation: fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}
