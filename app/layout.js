import './globals.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

export const metadata = {
  title: 'Website Development Company in India | PilatuWeb',
  description: 'Top website development company in India offering WordPress, Shopify, SEO & custom web solutions to grow your business online.',
  keywords: 'website development company India, web development agency India, SEO agency India, Shopify development India, WordPress development India, UI UX design, ecommerce development',
  robots: 'index, follow',
  alternates: {
    canonical: 'https://pilatuweb.com/',
  },
  openGraph: {
    title: 'Website Development Company in India | PilatuWeb',
    description: 'Top website development company in India offering WordPress, Shopify, SEO & custom web solutions to grow your business online.',
    url: 'https://pilatuweb.com/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Website Development Company in India | PilatuWeb',
    description: 'Top website development company in India offering WordPress, Shopify, SEO & custom web solutions to grow your business online.',
  },
  icons: {
    icon: '/platuweb-fav.png',
  },
  verification: {
    google: 'MBrfZiFRPKaKG1NMPBRYC4ky4LBXN8lpGTlRcFKw-OI',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <style dangerouslySetInnerHTML={{ __html: `
          body { opacity: 0; transition: opacity 0.15s ease-in; }
          body.ready { opacity: 1; }
        `}} />
        <script dangerouslySetInnerHTML={{ __html: `
          if (document.readyState === 'complete' || document.readyState === 'interactive') {
            document.body.classList.add('ready');
          } else {
            window.addEventListener('DOMContentLoaded', function() {
              document.body.classList.add('ready');
            });
          }
        `}} />
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
