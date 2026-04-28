import Link from 'next/link';

export default function NotFound() {
  return (
    <section style={styles.shell}>
      <div style={styles.bgGlowA} />
      <div style={styles.bgGlowB} />
      <div className="container" style={styles.container}>
        <div style={styles.badge}>404 Page</div>
        <h1 style={styles.title}>This Page Took A Wrong Turn</h1>
        <p style={styles.copy}>
          The page you are looking for does not exist, may have moved, or the URL might be incomplete.
          Let&apos;s get you back to a page that is actually useful.
        </p>

        <div style={styles.card}>
          <div style={styles.code}>404</div>
          <div style={styles.meta}>
            <h2 style={styles.cardTitle}>Page Not Found</h2>
            <p style={styles.cardCopy}>
              Try heading back to the homepage, explore services, or open the locations pages.
            </p>
          </div>
        </div>

        <div style={styles.actions}>
          <Link href="/" className="btn btn-primary">
            Back To Home
          </Link>
          <Link href="/locations" className="btn btn-outline">
            View Locations
          </Link>
          <Link href="/contact" className="btn btn-outline">
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}

const styles = {
  shell: {
    position: 'relative',
    minHeight: 'calc(100vh - 180px)',
    padding: '150px 0 90px',
    overflow: 'hidden',
  },
  container: {
    position: 'relative',
    zIndex: 1,
    textAlign: 'center',
    maxWidth: '900px',
  },
  bgGlowA: {
    position: 'absolute',
    width: '420px',
    height: '420px',
    left: '-120px',
    top: '40px',
    borderRadius: '999px',
    background: 'rgba(108, 99, 255, 0.18)',
    filter: 'blur(90px)',
  },
  bgGlowB: {
    position: 'absolute',
    width: '360px',
    height: '360px',
    right: '-80px',
    bottom: '20px',
    borderRadius: '999px',
    background: 'rgba(0, 212, 170, 0.16)',
    filter: 'blur(90px)',
  },
  badge: {
    display: 'inline-block',
    marginBottom: '18px',
    padding: '8px 14px',
    borderRadius: '999px',
    background: 'rgba(108, 99, 255, 0.12)',
    border: '1px solid rgba(108, 99, 255, 0.22)',
    color: '#bdb7ff',
    fontSize: '0.82rem',
    fontWeight: 700,
    letterSpacing: '0.08em',
    textTransform: 'uppercase',
  },
  title: {
    fontFamily: "var(--font-display), sans-serif",
    fontSize: 'clamp(2.5rem, 7vw, 4.8rem)',
    lineHeight: 1,
    marginBottom: '16px',
  },
  copy: {
    maxWidth: '680px',
    margin: '0 auto 32px',
    color: 'var(--text-secondary)',
    lineHeight: 1.85,
  },
  card: {
    display: 'grid',
    gridTemplateColumns: '180px 1fr',
    gap: '22px',
    alignItems: 'center',
    textAlign: 'left',
    margin: '0 auto 30px',
    maxWidth: '760px',
    padding: '26px',
    background: 'rgba(21, 24, 34, 0.72)',
    border: '1px solid rgba(255,255,255,0.08)',
    borderRadius: '24px',
    backdropFilter: 'blur(18px)',
  },
  code: {
    fontFamily: "var(--font-display), sans-serif",
    fontSize: '4.8rem',
    fontWeight: 800,
    lineHeight: 1,
    color: '#6c63ff',
    textAlign: 'center',
  },
  meta: {},
  cardTitle: {
    fontFamily: "var(--font-display), sans-serif",
    fontSize: '1.6rem',
    marginBottom: '8px',
  },
  cardCopy: {
    color: 'var(--text-secondary)',
    lineHeight: 1.8,
    margin: 0,
  },
  actions: {
    display: 'flex',
    gap: '14px',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
};

