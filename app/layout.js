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
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
