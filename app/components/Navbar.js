'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/services', label: 'Services' },
    { href: '/skills', label: 'Skills' },
    { href: '/case-studies', label: 'Case Studies' },
    { href: '/reviews', label: 'Reviews' },
    { href: '/blog', label: 'Blog' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <nav className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="nav-container">
        {/* Logo — 340px */}
        <Link href="/" className="nav-brand" aria-label="Home">
          <Image 
            src="/ayan-logo-1.png" 
            alt="Ayan logo" 
            width={340} 
            height={90} 
            priority 
            style={{ width: '340px', height: 'auto', objectPosition: 'left center', transform: 'translate(-35px, 4px)', marginRight: '-80px' }} 
          />
        </Link>

        {/* Center Nav Links */}
        <div className={`nav-links ${isOpen ? 'nav-open' : ''}`}>
          <button className="mobile-close" onClick={() => setIsOpen(false)} aria-label="Close menu">
            ✕
          </button>
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`nav-link ${pathname === link.href ? 'nav-link-active' : ''}`}
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* CTA Button */}
        <Link href="https://wa.me/917983505861" target="_blank" rel="noopener noreferrer" className="nav-cta" onClick={() => setIsOpen(false)}>
          <span className="cta-icon">🚀</span>
          Contact Us
        </Link>

        {/* Mobile Toggle */}
        <button
          className={`nav-toggle ${isOpen ? 'nav-toggle-active' : ''}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation"
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {isOpen && <div className="nav-overlay" onClick={() => setIsOpen(false)} />}
    </nav>
  );
}
