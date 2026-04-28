import './globals.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { Inter, Space_Grotesk } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sans',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-display',
});

export const metadata = {
  metadataBase: new URL('https://pilatuweb.netlify.app'),
  title: 'Website Development Company in India | PilatuWeb',
  description: 'Top website development company in India offering WordPress, Shopify, SEO & custom web solutions to grow your business online.',
  keywords: 'website development company India, web development agency India, SEO agency India, Shopify development India, WordPress development India, UI UX design, ecommerce development',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  alternates: {
    canonical: 'https://pilatuweb.netlify.app/',
  },
  openGraph: {
    title: 'Website Development Company in India | PilatuWeb',
    description: 'Top website development company in India offering WordPress, Shopify, SEO & custom web solutions to grow your business online.',
    url: 'https://pilatuweb.netlify.app/',
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
    <html lang="en">
      <body className={`${inter.variable} ${spaceGrotesk.variable}`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
