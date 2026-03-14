import './globals.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

export const metadata = {
  title: 'Muhammad Ayan | Frontend Developer & Digital Expert',
  description: 'Professional portfolio of Muhammad Ayan — Frontend Developer, WordPress Expert, SEO Specialist, and Shopify Developer. Building modern, fast, and user-friendly web experiences.',
  keywords: 'Frontend Developer, WordPress, SEO, Shopify, Angular, Next.js, Web Developer',
  authors: [{ name: 'Muhammad Ayan' }],
  openGraph: {
    title: 'Muhammad Ayan | Frontend Developer & Digital Expert',
    description: 'Building modern, fast, and user-friendly web experiences.',
    type: 'website',
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
