import Link from 'next/link';

export const metadata = {
  title: 'Privacy Policy | Muhammad Ayan',
  description: 'Privacy Policy for Muhammad Ayan frontend development and digital solutions services.',
};

export default function PrivacyPolicy() {
  return (
    <div className="legal-container container">
      {/* Background Orbs */}
      <div className="orb orb-1"></div>
      <div className="orb orb-2"></div>

      {/* Hero Section */}
      <section className="legal-hero">
        <div className="legal-badge">
          <span>🛡️</span> Your Privacy Matters
        </div>
        <h1 className="legal-title gradient-text">Privacy Policy</h1>
        <p className="legal-subtitle">
          Learn how we collect, use, and protect your personal information with transparency and care.
        </p>

        <div className="legal-anchors">
          <a href="#information" className="legal-anchor-item">🔍 Information</a>
          <a href="#usage" className="legal-anchor-item">⏱️ Usage</a>
          <a href="#security" className="legal-anchor-item">🔒 Security</a>
          <a href="#contact" className="legal-anchor-item">✉️ Contact</a>
        </div>
      </section>

      {/* Content Cards */}
      <div className="legal-cards-wrapper">
        
        {/* Card 1 */}
        <div className="legal-card" id="information">
          <div className="legal-section-header">
            <div className="section-number">01</div>
            <h2>Information We Collect</h2>
          </div>
          <p>
            Welcome to Muhammad Ayan's portfolio and digital solutions services. This Privacy Policy 
            explains how I collect, use, disclose, and safeguard your information when you visit my 
            website or use my services. Please read this privacy policy carefully. If you do not agree 
            with the terms of this privacy policy, please do not access the site.
          </p>
          <p>
            I may collect information about you in a variety of ways. The information I may collect via 
            the website includes:
          </p>
          <ul>
            <li><strong>Personal Data:</strong> Personally identifiable information, such as your name, email address, and phone number, that you voluntarily give to me when you choose to participate in various activities related to the website.</li>
            <li><strong>Derivative Data:</strong> Information my servers automatically collect when you access the website, such as your IP address, your browser type, your operating system, your access times, and the pages you have viewed.</li>
          </ul>
        </div>

        {/* Card 2 */}
        <div className="legal-card" id="usage">
          <div className="legal-section-header">
            <div className="section-number">02</div>
            <h2>Use of Your Information</h2>
          </div>
          <p>
            Having accurate information about you permits me to provide you with a smooth, efficient, 
            and customized experience. Specifically, I may use information collected about you via the 
            website to:
          </p>
          <ul>
            <li>Provide, maintain, and improve our services and communication.</li>
            <li>Respond to your contact inquiries and project requests rapidly.</li>
            <li>Send you detailed project quotations, timelines, or service details.</li>
            <li>Analyze usage patterns and compile anonymous statistical data to enhance user experience.</li>
          </ul>
        </div>

        {/* Card 3 */}
        <div className="legal-card" id="security">
          <div className="legal-section-header">
            <div className="section-number">03</div>
            <h2>Disclosure & Security</h2>
          </div>
          <p>
            I value your privacy and do not sell, trade, or rent your personal identification information 
            to others. I may share generic aggregated demographic information not linked to any personal 
            identification information regarding visitors with business partners, trusted affiliates, and 
            advertisers.
          </p>
          <p>
            I use administrative, technical, and physical security measures to help protect your personal 
            information. While I have taken reasonable steps to secure the personal information you provide 
            me, please be aware that despite my efforts, no security measures are perfect or impenetrable, 
            and no method of data transmission can be guaranteed against any interception or other type 
            of misuse.
          </p>
        </div>

        {/* Card 4 */}
        <div className="legal-card" id="contact">
          <div className="legal-section-header">
            <div className="section-number">04</div>
            <h2>Contact Us</h2>
          </div>
          <p>
            If you have questions or comments about this Privacy Policy, please contact me directly. 
            I typically respond within 24 hours.
          </p>
          <div className="contact-details mt-4">
            <p><strong>Email:</strong> <a href="mailto:iamayan469@gmail.com" style={{color: 'var(--primary-light)', textDecoration: 'none'}}>iamayan469@gmail.com</a></p>
            <p><strong>WhatsApp:</strong> <a href="https://wa.me/917983505861" style={{color: 'var(--primary-light)', textDecoration: 'none'}}>+91 79835 05861</a></p>
          </div>
        </div>

      </div>
    </div>
  );
}
