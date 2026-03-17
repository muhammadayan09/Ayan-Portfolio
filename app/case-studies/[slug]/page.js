'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';

const projectData = {
  'shs-real-estate': {
    title: "Luxury Real Estate Hub",
    client: "SHS Real Estate Dubai",
    category: "Real Estate Portal",
    tech: ["WordPress", "PHP", "MySQL", "Google Maps API", "Advanced Custom Fields"],
    issues: ["Outdated Structure", "Slow Performance", "Weak User Experience", "Low Conversion Rate"],
    stats: [
      { label: "Lead Generation", value: "+45%" },
      { label: "Load Time", value: "0.8s" },
      { label: "Keyword Rankings", value: "Top 3" }
    ],
    challenge: "SHS Real Estate Dubai needed a premium digital platform to match the luxury standard of their property portfolio. Their previous website struggled with slow loading times, poor mobile responsiveness, and a generic design that failed to reflect high-value listings.",
    challengeExtra: "The user journey was not optimised for conversions, resulting in missed opportunities and low-quality leads.",
    solutionIntro: "We redesigned and rebuilt the platform with a performance-first approach, focusing on speed, scalability, and user engagement.",
    solutionDetail: "A custom WordPress architecture was developed to support dynamic property listings, advanced filtering, and seamless navigation. We also integrated lead-focused features like instant WhatsApp contact and strategically placed enquiry forms to improve conversion rates.",
    solutionHeading: ["Architecting a ", "High-Performance", " Experience"],
    process: [
      { title: "Strategic Architecture", desc: "We mapped user journeys to align with high-intent buyers and investors." },
      { title: "Performance Optimisation", desc: "Optimised images, caching, and backend queries for fast loading speeds." },
      { title: "Premium UI/UX Design", desc: "Created a clean, modern interface that reflects the luxury market." },
      { title: "Lead Generation System", desc: "Integrated WhatsApp and enquiry flows to capture high-quality leads." }
    ],
    result: "The new website significantly improved performance, usability, and overall user experience. Within the first 3 months, the platform saw a strong increase in organic visibility and lead generation. The improved structure and SEO optimisation helped key pages rank higher on Google. The website is now positioned as a high-end real estate platform that effectively converts visitors into serious enquiries.",
    resultStats: [
      "45% Increase in Leads",
      "2X Growth in Organic Traffic",
      "Top 3 Rankings for Target Keywords",
      "0.8s Page Load Speed"
    ],
    ctaDesc: "Let\u0027s build a high-performance website that drives real business results.",
    color: "#cfa968"
  },
  'zyra-delight': {
    title: "Premium Artisan E-commerce",
    client: "Zyra Delight",
    category: "Luxury E-commerce",
    tech: ["Shopify Plus", "Liquid", "React", "Klaviyo", "SEO"],
    issues: ["Outdated Design", "Poor Mobile UX", "Low Conversion Rate", "Weak Brand Experience"],
    stats: [
      { label: "Revenue Growth", value: "+65%" },
      { label: "Mobile Conversion", value: "4.2%" },
      { label: "Bounce Rate", value: "-30%" }
    ],
    challenge: "Zyra Delight offered high-quality artisan products, but their online store did not reflect the premium nature of their brand. The design felt generic, and the user experience lacked emotional engagement.",
    challengeExtra: "The store struggled with high bounce rates, low mobile conversions, and poor retention, leading to missed revenue opportunities.",
    solutionIntro: "We completely redesigned and rebuilt the Shopify store with a focus on storytelling, performance, and conversion optimisation.",
    solutionDetail: "The goal was to transform the shopping experience from a simple transaction into an emotional journey that connects with customers.",
    solutionHeading: ["Architecting a ", "Conversion-Focused", " Experience"],
    process: [
      { title: "Storytelling Experience", desc: "We crafted product pages that tell a story, creating emotional engagement and increasing purchase intent." },
      { title: "Custom Shopify Development", desc: "Developed bespoke Liquid sections and interactive components tailored to the brand identity." },
      { title: "Mobile Optimisation", desc: "Optimised the entire store for mobile users, ensuring a smooth and fast checkout experience." },
      { title: "Retention & Automation", desc: "Integrated email and SMS marketing flows to improve customer retention and lifetime value." }
    ],
    result: "The redesigned Shopify store delivered immediate improvements in both user experience and business performance. Within the first few months, the brand saw a significant increase in conversions, engagement, and revenue. The improved UX and storytelling approach helped position Zyra Delight as a premium ecommerce brand.",
    resultStats: [
      "65% Increase in Revenue",
      "4.2% Mobile Conversion Rate",
      "30% Reduction in Bounce Rate",
      "Higher Customer Retention"
    ],
    ctaDesc: "Let\u0027s build an ecommerce experience that drives real sales and long-term growth.",
    color: "#96BF48"
  },
  'zuf-dental-care': {
    title: "High-Converting Dental Website",
    client: "Zuf Dental Care",
    category: "Dental SEO Project",
    tech: ["WordPress", "PHP", "MySQL", "On-Page SEO", "Technical SEO", "Local SEO"],
    issues: ["Low Google Rankings", "Poor Website Structure", "Slow Speed", "Low Enquiry Rate"],
    stats: [
      { label: "Organic Traffic Growth", value: "+120%" },
      { label: "Local Keyword Rankings", value: "Top 3" },
      { label: "Patient Enquiries", value: "+70%" }
    ],
    challenge: "Zuf Dental Care needed a modern, professional website that could attract new patients and rank well in local search results. Their previous online presence was weak, with low visibility on Google and minimal patient enquiries.",
    challengeExtra: "The website lacked proper SEO structure, had slow loading speeds, and did not clearly communicate services, which made it difficult for users to take action.",
    solutionIntro: "We designed and developed a clean, user-friendly WordPress website focused on patient experience and SEO performance.",
    solutionDetail: "Alongside development, we implemented a complete SEO strategy to improve visibility, rankings, and lead generation.",
    solutionHeading: ["Building a ", "Performance-Driven", " Dental Platform"],
    process: [
      { title: "SEO-Focused Website Structure", desc: "We created clear service pages targeting high-intent keywords like dental treatments and emergency care." },
      { title: "On-Page Optimisation", desc: "Optimised meta tags, headings, internal linking, and content to improve relevance and rankings." },
      { title: "Technical SEO Improvements", desc: "Improved website speed, mobile responsiveness, and indexing to meet Google standards." },
      { title: "Local SEO Strategy", desc: "Optimised Google Business Profile, local keywords, and location-based content to attract nearby patients." }
    ],
    result: "The new website and SEO strategy significantly improved online visibility and patient engagement. Within a few months, Zuf Dental Care saw a strong increase in organic traffic, better keyword rankings, and more patient enquiries. The website now works as a powerful lead-generation system for the clinic.",
    resultStats: [
      "120% Increase in Organic Traffic",
      "Top 3 Rankings for Local Keywords",
      "70% Growth in Patient Enquiries",
      "Improved Website Speed & UX"
    ],
    ctaDesc: "Let\u0027s build and optimise your website to attract more customers and grow your business.",
    color: "#3498db"
  },
  'silent-stories': {
    title: "Wedding & Event Photography Platform",
    client: "[Client Name / Studio Name]",
    category: "Photography & Event Services",
    tech: ["WordPress", "Elementor", "PHP", "MySQL", "Gallery Plugins", "WhatsApp Integration"],
    issues: ["Outdated Design", "Slow Image Loading", "Poor Portfolio Display", "Low Enquiry Rate"],
    stats: [
      { label: "Booking Increase", value: "+60%" },
      { label: "Load Time", value: "1.2s" },
      { label: "Local Rankings", value: "Top 5" }
    ],
    challenge: "The photography business offered high-quality wedding and event coverage, but their website failed to showcase their work effectively. The design was outdated, slow, and lacked emotional storytelling — which is critical in the photography industry.",
    challengeExtra: "Visitors were not engaging with the portfolio, and the enquiry process was complicated, resulting in fewer bookings.",
    solutionIntro: "We redesigned the entire website with a strong focus on visual storytelling, speed, and conversion optimisation.",
    solutionDetail: "The goal was to create an emotional connection with visitors and make it easy for them to explore work and book services.",
    solutionHeading: ["Crafting a ", "Visual-First", " Experience"],
    process: [
      { title: "Portfolio-Focused Design", desc: "We created visually engaging gallery layouts that highlight wedding and event photography in a premium way." },
      { title: "Performance Optimisation", desc: "Images were optimised and lazy-loaded to maintain high quality while ensuring fast loading speed." },
      { title: "Mobile-First Experience", desc: "Designed a seamless mobile browsing experience since most users explore photography on mobile devices." },
      { title: "Lead Generation Integration", desc: "Integrated WhatsApp, quick enquiry forms, and call buttons to simplify booking and increase conversions." }
    ],
    result: "The new website transformed how the photography business presents its work online. Visitors now spend more time exploring galleries, leading to higher engagement and more enquiries. Within a few months, the business saw a noticeable increase in bookings and improved local visibility on Google.",
    resultStats: [
      "60% Increase in Bookings",
      "Higher User Engagement",
      "Top 5 Rankings for Local Keywords",
      "Faster Website Performance (1.2s Load Time)"
    ],
    ctaDesc: "Let\u0027s build a visually stunning website that turns visitors into real bookings.",
    color: "#ffffff"
  }
};

export default function CaseStudyDetail() {
  const { slug } = useParams();
  const [mounted, setMounted] = useState(false);
  const data = projectData[slug] || projectData['shs-real-estate']; // fallback for demo

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="case-study-detail">
      {/* SECTION 1: HERO */}
      <section className="case-hero">
        <div className="container">
          <div className={`hero-flex ${mounted ? 'animate-up' : ''}`}>
            <div className="hero-text">
              <span className="case-badge" style={{ background: `${data.color}20`, color: data.color }}>
                {data.category}
              </span>
              <h1 className="case-h1">{data.title}</h1>
              <p className="case-subtitle">Client: <span className="highlight">{data.client}</span></p>
              
              <div className="case-stats">
                {data.stats.map((stat, i) => (
                  <div key={i} className="stat-box">
                    <div className="stat-val" style={{ color: data.color }}>{stat.value}</div>
                    <div className="stat-lab">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="hero-glow" style={{ background: data.color }} />
      </section>

      {/* SECTION 2: THE CHALLENGE */}
      <section className="case-section bg-alt">
        <div className="container">
          <div className="grid-split">
            <div className="content-side">
              <span className="section-label">01. The Challenge</span>
              <h2 className="case-h2">The <span className="gradient-text">Problem</span> We Solved</h2>
              <p className="case-p">{data.challenge}</p>
              {data.challengeExtra && <p className="case-p">{data.challengeExtra}</p>}
              <div className="tech-stack">
                <h4 className="tech-title">Technologies Used:</h4>
                <div className="tech-pills">
                  {data.tech.map(t => <span key={t} className="tech-pill">{t}</span>)}
                </div>
              </div>
              {data.issues && (
                <div className="tech-stack" style={{ marginTop: '24px' }}>
                  <h4 className="tech-title">Key Issues:</h4>
                  <div className="tech-pills">
                    {data.issues.map(issue => <span key={issue} className="tech-pill" style={{ borderColor: 'rgba(255,107,107,0.3)', color: '#FF6B6B' }}>{issue}</span>)}
                  </div>
                </div>
              )}
            </div>
            <div className="visual-side">
              <div className="problem-card glass-card">
                <div className="problem-icon">⚠️</div>
                <div className="problem-text">{data.issues ? data.issues.join(' • ') : 'Outdated Architecture • Slow Load Times • Low Conversion'}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: THE SOLUTION */}
      <section className="case-section">
        <div className="container">
          <div className="grid-split reverse">
            <div className="content-side">
              <span className="section-label">02. The Solution</span>
              <h2 className="case-h2">{data.solutionHeading ? <>{data.solutionHeading[0]}<span className="gradient-text">{data.solutionHeading[1]}</span>{data.solutionHeading[2]}</> : <>Architecting <span className="gradient-text">Excellence</span></>}</h2>
              {data.solutionIntro ? (
                <>
                  <p className="case-p">{data.solutionIntro}</p>
                  <p className="case-p">{data.solutionDetail}</p>
                </>
              ) : (
                <p className="case-p">{data.solution}</p>
              )}
              <div className="process-list">
                {data.process.map((step, i) => (
                  <div key={i} className="process-item">
                    <span className="step-num" style={{ background: data.color }}>{i+1}</span>
                    <div className="step-text">
                      <h5>{step.title}</h5>
                      <p>{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="visual-side">
              <div className="solution-mockup glass-card">
                <div className="mockup-header">
                  <div className="dot" /> <div className="dot" /> <div className="dot" />
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

      {/* SECTION 4: RESULTS & CTA */}
      <section className="case-section bg-gradient">
        <div className="container text-center">
            <span className="section-label white">03. Impact</span>
            <h2 className="case-h2 white">The <span className="gradient-text">Results</span></h2>
            <p className="case-p max-700 mx-auto white-op">{data.result}</p>
            {data.resultStats && (
              <div className="result-stats-grid">
                {data.resultStats.map((rs, i) => (
                  <div key={i} className="result-stat-item glass-card">
                    <span className="result-check">✔</span>
                    <span>{rs}</span>
                  </div>
                ))}
              </div>
            )}
            
            <div className="case-cta-box glass-card scale-hover">
              <h3>Have a Similar Project?</h3>
              <p>{data.ctaDesc || 'Let\u0027s discuss how we can bring these results to your brand.'}</p>
              <div className="cta-btns">
                <Link href="/contact" className="btn btn-primary">Start Your Success Story</Link>
                <Link href="/case-studies" className="btn btn-outline">View Other Case Studies</Link>
              </div>
            </div>
        </div>
      </section>

      <style jsx>{`
        .case-study-detail { padding-top: 80px; }
        .case-section { padding: 100px 0; }
        .bg-alt { background: rgba(255,255,255,0.02); }
        .bg-gradient { background: linear-gradient(180deg, transparent, rgba(108, 99, 255, 0.1)); }
        
        .container { max-width: 1200px; margin: 0 auto; padding: 0 24px; }
        .text-center { text-align: center; }
        .mx-auto { margin-left: auto; margin-right: auto; }
        .max-700 { max-width: 700px; }
        .white { color: #fff; }
        .white-op { color: rgba(255,255,255,0.8); }

        .case-hero {
          height: 80vh;
          display: flex;
          align-items: center;
          position: relative;
          overflow: hidden;
        }

        .hero-glow {
          position: absolute;
          top: 0; right: 0;
          width: 50vw; height: 100%;
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

        .case-h1 { font-family: 'Space Grotesk', sans-serif; font-size: clamp(2.5rem, 6vw, 4.5rem); font-weight: 800; line-height: 1.1; margin-bottom: 12px; }
        .case-subtitle { font-size: 1.25rem; color: var(--text-secondary); margin-bottom: 48px; }
        .highlight { color: var(--text-primary); font-weight: 700; }

        .case-stats { display: flex; gap: 40px; }
        .stat-val { font-size: 2.5rem; font-weight: 800; line-height: 1; }
        .stat-lab { font-size: 0.85rem; color: var(--text-muted); font-weight: 600; margin-top: 8px; text-transform: uppercase; }

        .grid-split { display: grid; grid-template-columns: 1fr 1fr; gap: 80px; align-items: center; }
        .grid-split.reverse { direction: rtl; }
        .grid-split.reverse .content-side { direction: ltr; }
        
        .case-h2 { font-family: 'Space Grotesk', sans-serif; font-size: 2.8rem; font-weight: 800; margin-bottom: 24px; }
        .case-p { font-size: 1.1rem; line-height: 1.8; color: var(--text-secondary); margin-bottom: 32px; }

        .tech-pills { display: flex; flex-wrap: wrap; gap: 10px; }
        .tech-pill { padding: 6px 14px; background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1); border-radius: 8px; font-size: 0.85rem; font-weight: 600; }

        .process-list { display: grid; gap: 24px; }
        .process-item { display: flex; gap: 20px; }
        .step-num { width: 32px; height: 32px; border-radius: 50%; display: grid; place-items: center; flex-shrink: 0; font-weight: 800; color: #000; font-size: 0.9rem; }
        .step-text h5 { font-weight: 700; margin-bottom: 4px; font-size: 1.1rem; }
        .step-text p { font-size: 0.9rem; color: var(--text-muted); }

        .problem-card { padding: 40px; text-align: center; }
        .problem-icon { font-size: 3rem; margin-bottom: 20px; }
        .problem-text { font-weight: 700; color: var(--text-secondary); }

        .solution-mockup { height: 400px; padding: 20px; overflow: hidden; }
        .mockup-header { display: flex; gap: 8px; margin-bottom: 16px; }
        .dot { width: 8px; height: 8px; border-radius: 50%; background: rgba(255,255,255,0.2); }
        .skeleton-hero { height: 160px; border-radius: 12px; margin-bottom: 20px; }
        .skeleton-grid { height: 200px; background: rgba(255,255,255,0.05); border-radius: 12px; }

        .result-stats-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 16px; max-width: 600px; margin: 40px auto 0; }
        .result-stat-item { display: flex; align-items: center; gap: 12px; padding: 16px 20px; font-weight: 600; font-size: 0.95rem; }
        .result-check { color: #00D4AA; font-size: 1.1rem; }
        .case-cta-box { margin-top: 60px; padding: 60px; text-align: center; }
        .case-cta-box h3 { font-size: 2rem; font-weight: 700; margin-bottom: 12px; }
        .case-cta-box p { color: var(--text-secondary); margin-bottom: 32px; }
        .cta-btns { display: flex; gap: 16px; justify-content: center; }

        @media (max-width: 900px) {
          .grid-split { grid-template-columns: 1fr; gap: 40px; }
          .grid-split.reverse { direction: ltr; }
          .visual-side { order: -1; }
          .case-hero { height: auto; padding: 60px 0; }
          .case-stats { flex-wrap: wrap; }
          .result-stats-grid { grid-template-columns: 1fr; }
        }

        .animate-up { animation: fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
