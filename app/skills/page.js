'use client';

import Link from 'next/link';

const skillCategories = [
  {
    title: 'Frontend Development',
    icon: '💻',
    color: '#6C63FF',
    description: 'Architecting dynamic, lightning-fast interfaces focused on accessibility, performance, and pixel-perfect precision.',
    skills: [
      { name: 'HTML5', level: 95, icon: '🌐' },
      { name: 'CSS3 / SASS', level: 92, icon: '🎨' },
      { name: 'JavaScript (ES6+)', level: 88, icon: '⚡' },
      { name: 'TypeScript', level: 80, icon: '📘' },
      { name: 'Responsive Design', level: 95, icon: '📱' },
    ],
  },
  {
    title: 'Frameworks & Libraries',
    icon: '⚙️',
    color: '#00D4AA',
    description: 'Leveraging cutting-edge ecosystems to engineer robust, enterprise-grade web applications.',
    skills: [
      { name: 'Angular', level: 85, icon: '🅰️' },
      { name: 'Next.js', level: 82, icon: '▲' },
      { name: 'React', level: 80, icon: '⚛️' },
      { name: 'Bootstrap', level: 90, icon: '🅱️' },
      { name: 'jQuery', level: 85, icon: '📦' },
    ],
  },
  {
    title: 'WordPress',
    icon: '📝',
    color: '#21759B',
    description: 'Delivering bespoke WordPress architectures, custom theme development, and secure, high-traffic deployments.',
    skills: [
      { name: 'Theme Development', level: 90, icon: '🎭' },
      { name: 'Plugin Customization', level: 85, icon: '🔌' },
      { name: 'WooCommerce', level: 82, icon: '🛒' },
      { name: 'Elementor / Gutenberg', level: 88, icon: '🧱' },
      { name: 'WordPress Security', level: 80, icon: '🔒' },
    ],
  },
  {
    title: 'SEO & Analytics',
    icon: '🔍',
    color: '#47A248',
    description: 'Executing technical SEO and data-backed strategies to guarantee top rankings and digital dominance.',
    skills: [
      { name: 'On-Page SEO', level: 92, icon: '📄' },
      { name: 'Technical SEO', level: 88, icon: '🔧' },
      { name: 'Keyword Research', level: 85, icon: '🔑' },
      { name: 'Google Analytics', level: 82, icon: '📊' },
      { name: 'Schema Markup', level: 80, icon: '🏷️' },
    ],
  },
  {
    title: 'Shopify',
    icon: '🛍️',
    color: '#96BF48',
    description: 'Engineering highly optimized, custom eCommerce experiences that maximize conversion rates.',
    skills: [
      { name: 'Theme Customization', level: 88, icon: '🎨' },
      { name: 'Liquid Templating', level: 85, icon: '💧' },
      { name: 'Shopify Apps', level: 80, icon: '📱' },
      { name: 'Product Setup', level: 90, icon: '📦' },
      { name: 'Store Optimization', level: 85, icon: '🚀' },
    ],
  },
  {
    title: 'Tools & Workflow',
    icon: '🛠️',
    color: '#FF6B6B',
    description: 'Maintaining a rigorous, CI/CD-driven development lifecycle for rapid, reliable delivery.',
    skills: [
      { name: 'Git / GitHub', level: 88, icon: '📂' },
      { name: 'VS Code', level: 95, icon: '💻' },
      { name: 'Figma', level: 78, icon: '🎨' },
      { name: 'npm / Node.js', level: 82, icon: '📦' },
      { name: 'Terminal / CLI', level: 85, icon: '⌨️' },
    ],
  },
];

export default function Skills() {
  return (
    <>
      {/* Page Header */}
      <section className="page-header">
        <div className="page-header-glow" />
        <div className="container">
          <span className="section-label">Our Expertise</span>
          <h1 className="page-title">Skills &amp; <span className="gradient-text">Technologies</span></h1>
          <p className="page-subtitle">
            A deep dive into the technical arsenal and specialized methodologies we deploy to build elite digital experiences.
          </p>
        </div>
      </section>

      {/* Skills Categories */}
      <section className="section">
        <div className="container">
          <div className="skills-categories">
            {skillCategories.map((category, i) => (
              <div key={i} className="skill-category" id={`skill-${i}`}>
                <div className="category-header">
                  <div className="category-icon-wrap" style={{ background: `${category.color}18` }}>
                    <span className="category-icon">{category.icon}</span>
                  </div>
                  <div>
                    <h2 className="category-title">{category.title}</h2>
                    <p className="category-desc">{category.description}</p>
                  </div>
                </div>

                <div className="category-skills">
                  {category.skills.map((skill, j) => (
                    <div key={j} className="skill-item glass-card">
                      <div className="skill-item-header">
                        <span className="skill-item-icon">{skill.icon}</span>
                        <span className="skill-item-name">{skill.name}</span>
                        <span className="skill-item-level" style={{ color: category.color }}>{skill.level}%</span>
                      </div>
                      <div className="skill-progress-track">
                        <div
                          className="skill-progress-fill"
                          style={{
                            width: `${skill.level}%`,
                            background: `linear-gradient(90deg, ${category.color}, ${category.color}88)`,
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Summary Grid */}
      <section className="section">
        <div className="container">
          <div className="section-header-center">
            <span className="section-label">At a Glance</span>
            <h2 className="section-title">Skill Summary</h2>
          </div>
          <div className="summary-grid">
            {skillCategories.map((cat, i) => (
              <div key={i} className="summary-card glass-card">
                <span className="summary-icon">{cat.icon}</span>
                <h3 className="summary-title">{cat.title}</h3>
                <div className="summary-bar-track">
                  <div className="summary-bar-fill" style={{ width: `${(cat.skills.reduce((a, b) => a + b.level, 0) / cat.skills.length)}%`, background: cat.color }} />
                </div>
                <span className="summary-avg" style={{ color: cat.color }}>
                  {Math.round(cat.skills.reduce((a, b) => a + b.level, 0) / cat.skills.length)}% avg
                </span>
              </div>
            ))}
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

        .skills-categories {
          display: flex;
          flex-direction: column;
          gap: 30px;
        }

        .category-header {
          display: flex;
          gap: 20px;
          align-items: flex-start;
          margin-bottom: 28px;
        }

        .category-icon-wrap {
          width: 60px;
          height: 60px;
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .category-icon {
          font-size: 1.6rem;
        }

        .category-title {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 1.5rem;
          font-weight: 700;
          margin-bottom: 6px;
        }

        .category-desc {
          font-size: 0.92rem;
          color: var(--text-secondary);
          line-height: 1.7;
        }

        .category-skills {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 16px;
        }

        .skill-item {
          padding: 20px 24px;
        }

        .skill-item:hover {
          transform: translateY(-2px);
        }

        .skill-item-header {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 12px;
        }

        .skill-item-icon {
          font-size: 1.2rem;
        }

        .skill-item-name {
          flex: 1;
          font-size: 0.92rem;
          font-weight: 600;
        }

        .skill-item-level {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 0.88rem;
          font-weight: 700;
        }

        .skill-progress-track {
          width: 100%;
          height: 6px;
          background: var(--bg-secondary);
          border-radius: 3px;
          overflow: hidden;
        }

        .skill-progress-fill {
          height: 100%;
          border-radius: 3px;
          transition: width 1.2s ease-out;
        }

        /* Summary */
        .section-header-center {
          text-align: center;
          margin-bottom: 30px;
        }

        .section-header-center .section-label {
          justify-content: center;
        }

        .summary-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }

        .summary-card {
          text-align: center;
          padding: 30px 24px;
        }

        .summary-icon {
          font-size: 2rem;
          display: block;
          margin-bottom: 12px;
        }

        .summary-title {
          font-size: 0.95rem;
          font-weight: 600;
          margin-bottom: 16px;
        }

        .summary-bar-track {
          width: 100%;
          height: 6px;
          background: var(--bg-secondary);
          border-radius: 3px;
          overflow: hidden;
          margin-bottom: 10px;
        }

        .summary-bar-fill {
          height: 100%;
          border-radius: 3px;
        }

        .summary-avg {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 0.85rem;
          font-weight: 700;
        }

        @media (max-width: 768px) {
          .category-header {
            flex-direction: column;
          }

          .category-skills {
            grid-template-columns: 1fr;
          }

          .summary-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
      `}</style>
    </>
  );
}
