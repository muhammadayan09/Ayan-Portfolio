import Link from 'next/link';
import { caseStudies } from '../data/caseStudies';

export default function CaseStudiesPage() {
  const itemListSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'PilatuWeb Case Studies',
    url: 'https://pilatuweb.netlify.app/case-studies/',
    hasPart: caseStudies.map((project, index) => ({
      '@type': 'CreativeWork',
      position: index + 1,
      name: project.title,
      url: `https://pilatuweb.netlify.app/case-studies/${project.slug}/`,
      description: project.summary,
    })),
  };

  return (
    <div className="case-studies-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />

      <section className="hero-simple">
        <div className="container">
          <div className="hero-content animate-fade-in-up">
            <span className="section-label">Our Work</span>
            <h1 className="hero-title">
              Case <span className="gradient-text">Studies</span>
            </h1>
            <p className="hero-desc">
              Detailed insights into how we solve complex problems and deliver high-impact digital solutions.
            </p>
          </div>
        </div>
        <div className="hero-glow" />
      </section>

      <section className="projects-grid-section">
        <div className="container">
          <div className="projects-grid">
            {caseStudies.map((project, i) => (
              <Link
                key={project.slug}
                href={`/case-studies/${project.slug}/`}
                className="project-card-wrapper"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="project-card glass-card">
                  <div className="project-image-box">
                    <div
                      className="project-overlay"
                      style={{ background: `linear-gradient(to bottom, transparent, ${project.color}33)` }}
                    />
                    <div className="project-badge" style={{ borderColor: project.color, color: project.color }}>
                      Showcase
                    </div>
                  </div>
                  <div className="project-info">
                    <div className="project-tags">
                      {project.tech.slice(0, 3).map((tag) => (
                        <span key={tag} className="tag">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h2 className="project-title">{project.title}</h2>
                    <p className="project-text">{project.summary}</p>
                    <div className="view-project">
                      Explore Full Case Study
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        .case-studies-page {
          padding-top: 100px;
          min-height: 100vh;
        }

        .hero-simple {
          padding: 80px 0;
          text-align: center;
          position: relative;
          overflow: hidden;
        }

        .hero-glow {
          position: absolute;
          top: -20%;
          left: 50%;
          transform: translateX(-50%);
          width: 600px;
          height: 600px;
          background: var(--primary-glow);
          filter: blur(120px);
          opacity: 0.3;
          z-index: -1;
        }

        .hero-title {
          font-family: var(--font-display), sans-serif;
          font-size: clamp(2.5rem, 5vw, 4.5rem);
          font-weight: 800;
          line-height: 1.1;
          margin-bottom: 24px;
        }

        .hero-desc {
          font-size: 1.2rem;
          color: var(--text-secondary);
          max-width: 700px;
          margin: 0 auto;
        }

        .projects-grid-section {
          padding-bottom: 100px;
        }

        .projects-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 32px;
        }

        .project-card-wrapper {
          text-decoration: none !important;
          color: inherit;
        }

        .project-card-wrapper * {
          text-decoration: none !important;
        }

        .project-card {
          height: 100%;
          display: flex;
          flex-direction: column;
          border-radius: 24px;
          overflow: hidden;
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }

        .project-card:hover {
          transform: translateY(-10px);
          border-color: var(--accent);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
        }

        .project-image-box {
          height: 280px;
          background: linear-gradient(135deg, #1a1e2e, #121420);
          position: relative;
        }

        .project-badge {
          position: absolute;
          top: 20px;
          right: 20px;
          padding: 6px 16px;
          border: 1px solid;
          border-radius: 50px;
          font-size: 0.75rem;
          font-weight: 700;
          text-transform: uppercase;
        }

        .project-info {
          padding: 32px;
          display: flex;
          flex-direction: column;
          flex-grow: 1;
        }

        .project-tags {
          display: flex;
          gap: 8px;
          margin-bottom: 16px;
          flex-wrap: wrap;
        }

        .tag {
          font-size: 0.7rem;
          padding: 4px 10px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 6px;
          color: var(--text-muted);
        }

        .project-title {
          font-family: var(--font-display), sans-serif;
          font-size: 1.5rem;
          font-weight: 700;
          margin-bottom: 12px;
        }

        .project-text {
          color: var(--text-secondary);
          line-height: 1.6;
          margin-bottom: 24px;
        }

        .view-project {
          margin-top: auto;
          display: flex;
          align-items: center;
          gap: 12px;
          font-weight: 700;
          color: var(--accent);
          font-size: 0.95rem;
        }

        .view-project svg {
          transition: transform 0.3s ease;
        }

        .project-card:hover .view-project svg {
          transform: translateX(6px);
        }

        @media (max-width: 900px) {
          .projects-grid {
            grid-template-columns: 1fr;
          }
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
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
