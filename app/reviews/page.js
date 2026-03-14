'use client';

const reviews = [
  { quote: 'Ayan transformed our website – amazing work!', author: 'Client A' },
  { quote: 'Professional, fast and very talented.', author: 'Client B' },
  { quote: 'Exceeded my expectations in every way.', author: 'Client C' },
];

export default function Reviews() {
  return (
    <>
      {/* header */}
      <section className="page-header">
        <div className="page-header-glow" />
        <div className="container">
          <span className="section-label">Happy Clients</span>
          <h1 className="page-title">Client <span className="gradient-text">Reviews</span></h1>
          <p className="page-subtitle">Hear what people are saying about working with me.</p>
        </div>
      </section>

      {/* slider */}
      <section className="section">
        <div className="container reviews-slider">
          {reviews.map((r,i)=>(
            <div key={i} className="review-card glass-card">
              <p>"{r.quote}"</p>
              <span className="review-author">{r.author}</span>
            </div>
          ))}
        </div>
      </section>

      {/* summary */}
      <section className="section">
        <div className="container text-center">
          <p>I take pride in the feedback I receive; it helps me improve and grow continually.</p>
        </div>
      </section>

      {/* CTA */}
      <section className="section text-center">
        <div className="container">
          <h2>Want to be my next happy client?</h2>
          <a href="/contact" className="btn btn-primary">Get In Touch</a>
        </div>
      </section>

      <style jsx>{`
        .reviews-slider {
          display: flex;
          gap: 24px;
          overflow-x: auto;
          padding-bottom: 16px;
        }
        .review-card {
          min-width: 80%;
          padding: 24px;
          text-align: center;
        }
      `}</style>
    </>
  );
}
