'use client';

import Link from 'next/link';
import { useEffect, useMemo, useState } from 'react';

function useVisibleCards() {
  const [visible, setVisible] = useState(3);

  useEffect(() => {
    const updateVisible = () => {
      const width = window.innerWidth;
      if (width <= 700) {
        setVisible(1);
      } else if (width <= 1040) {
        setVisible(2);
      } else {
        setVisible(3);
      }
    };

    updateVisible();
    window.addEventListener('resize', updateVisible);
    return () => window.removeEventListener('resize', updateVisible);
  }, []);

  return visible;
}

export default function LocationsCarousel({ locations }) {
  const visible = useVisibleCards();
  const [index, setIndex] = useState(0);
  const maxIndex = useMemo(
    () => Math.max(0, locations.length - visible),
    [locations.length, visible]
  );

  useEffect(() => {
    if (index > maxIndex) {
      setIndex(maxIndex);
    }
  }, [index, maxIndex]);

  return (
    <div className="locations-slider-shell">
      <div className="slider-toolbar">
        <div>
          <span className="section-label">Live Locations</span>
          <h2 className="section-title">Current Location Pages In One Slider</h2>
        </div>
        {locations.length > visible ? (
          <div className="slider-controls">
            <button
              className="slider-btn"
              onClick={() => setIndex((current) => Math.max(0, current - 1))}
              disabled={index === 0}
              aria-label="Previous location"
            >
              {'<'}
            </button>
            <button
              className="slider-btn"
              onClick={() => setIndex((current) => Math.min(maxIndex, current + 1))}
              disabled={index >= maxIndex}
              aria-label="Next location"
            >
              {'>'}
            </button>
          </div>
        ) : null}
      </div>

      <div className="slider-window">
        <div
          className="slider-track"
          style={{ transform: `translateX(-${index * (100 / visible)}%)` }}
        >
          {locations.map((item) => (
            <article key={item.slug} className="location-card glass-card">
              <div className="location-top">
                <span className="location-city">{item.city}</span>
                <span className="location-tone">{item.tone}</span>
              </div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
              <div className="focus-tags">
                {item.focus.map((tag) => (
                  <span key={tag} className="focus-tag">
                    {tag}
                  </span>
                ))}
              </div>
              <Link href={item.href} className="location-link">
                View Location Page
              </Link>
            </article>
          ))}
        </div>
      </div>

      <style jsx>{`
        .locations-slider-shell {
          position: relative;
        }

        .slider-toolbar {
          display: flex;
          justify-content: space-between;
          align-items: end;
          gap: 16px;
          margin-bottom: 26px;
        }

        .slider-controls {
          display: flex;
          gap: 10px;
        }

        .slider-btn {
          width: 46px;
          height: 46px;
          border-radius: 50%;
          border: 1px solid rgba(255, 255, 255, 0.1);
          background: rgba(255, 255, 255, 0.03);
          color: #fff;
          font-size: 1rem;
          cursor: pointer;
          transition: all 0.25s ease;
        }

        .slider-btn:hover:not(:disabled) {
          transform: translateY(-2px);
          border-color: rgba(108, 99, 255, 0.45);
        }

        .slider-btn:disabled {
          opacity: 0.35;
          cursor: not-allowed;
        }

        .slider-window {
          overflow: hidden;
        }

        .slider-track {
          display: flex;
          transition: transform 0.35s ease;
        }

        .location-card {
          flex: 0 0 calc(100% / 3);
          padding: 30px;
          margin-right: 24px;
        }

        .location-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 10px;
          margin-bottom: 16px;
        }

        .location-city,
        .location-tone {
          display: inline-block;
          font-size: 0.82rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }

        .location-city {
          color: #00d4aa;
        }

        .location-tone {
          color: #ffb24c;
        }

        .location-card h3 {
          font-family: var(--font-display), sans-serif;
          font-size: 1.35rem;
          margin-bottom: 12px;
        }

        .location-card p {
          color: var(--text-secondary);
          line-height: 1.8;
          margin: 0;
        }

        .focus-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin: 22px 0;
        }

        .focus-tag {
          padding: 8px 14px;
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.08);
          color: var(--text-secondary);
          font-size: 0.82rem;
        }

        .location-link {
          display: inline-flex;
          align-items: center;
          padding: 12px 22px;
          border-radius: 999px;
          text-decoration: none;
          color: #fff;
          background: linear-gradient(135deg, #6c63ff, #00d4aa);
          font-weight: 600;
        }

        @media (max-width: 1040px) {
          .location-card {
            flex-basis: calc(100% / 2);
          }
        }

        @media (max-width: 700px) {
          .slider-toolbar {
            flex-direction: column;
            align-items: stretch;
          }

          .slider-controls {
            align-self: flex-start;
          }

          .location-card {
            flex-basis: 100%;
            margin-right: 16px;
            padding: 22px;
          }
        }
      `}</style>
    </div>
  );
}

