import Link from 'next/link';

export const metadata = {
  title: 'Terms & Conditions | Muhammad Ayan',
  description: 'Terms and Conditions for Muhammad Ayan frontend development and digital solutions services.',
};

export default function TermsAndConditions() {
  return (
    <div className="legal-container container">
      {/* Background Orbs */}
      <div className="orb orb-1"></div>
      <div className="orb orb-2"></div>

      {/* Hero Section */}
      <section className="legal-hero">
        <div className="legal-badge">
          <span>⚖️</span> Legal Agreement
        </div>
        <h1 className="legal-title gradient-text">Terms & Conditions</h1>
        <p className="legal-subtitle">
          Please review our terms of service and business agreements to ensure a smooth collaboration.
        </p>

        <div className="legal-anchors">
          <a href="#agreement" className="legal-anchor-item">🤝 Agreement</a>
          <a href="#services" className="legal-anchor-item">🚀 Services</a>
          <a href="#payment" className="legal-anchor-item">💳 Payment</a>
          <a href="#responsibilities" className="legal-anchor-item">📝 Responsibilities</a>
        </div>
      </section>

      {/* Content Cards */}
      <div className="legal-cards-wrapper">
        
        {/* Card 1 */}
        <div className="legal-card" id="agreement">
          <div className="legal-section-header">
            <div className="section-number">01</div>
            <h2>Agreement to Terms</h2>
          </div>
          <p>
            By accessing this website and engaging my services, you agree to be bound by these Terms and Conditions 
            of Use, all applicable laws and regulations, and agree that you are responsible for compliance with any 
            applicable local laws. If you do not agree with any of these terms, you are prohibited from using or 
            accessing this site or my services.
          </p>
        </div>

        {/* Card 2 */}
        <div className="legal-card" id="services">
          <div className="legal-section-header">
            <div className="section-number">02</div>
            <h2>Services and Deliverables</h2>
          </div>
          <p>
            As a digital agency and development company, we provide web development, design, and related digital services.
          </p>
          <ul>
            <li><strong>Scope of Work:</strong> All services will be performed according to the agreed-upon project scope, timeline, and quotation provided before the commencement of work.</li>
            <li><strong>Revisions:</strong> The number of revisions is strictly outlined in the initial agreement. Additional revisions outside the scope will be billed at an hourly rate.</li>
            <li><strong>Source Code Insight:</strong> Unless otherwise agreed in writing, intellectual property rights of the source code transfer to the client only upon full and final payment.</li>
          </ul>
        </div>

        {/* Card 3 */}
        <div className="legal-card" id="payment">
          <div className="legal-section-header">
            <div className="section-number">03</div>
            <h2>Payment Terms</h2>
          </div>
          <p>
            To ensure a smooth workflow and commitment from both parties, the following payment terms generally apply 
            unless an alternative agreement is signed:
          </p>
          <ul>
            <li>An upfront deposit (typically 30% - 50%) is required before any development work begins.</li>
            <li>Milestone payments may be required for larger projects.</li>
            <li>Final delivery of files, deployment to live servers, and transfer of ownership take place only after the final remaining balance is paid in full.</li>
          </ul>
        </div>

        {/* Card 4 */}
        <div className="legal-card" id="responsibilities">
          <div className="legal-section-header">
            <div className="section-number">04</div>
            <h2>Client Responsibilities</h2>
          </div>
          <p>
            To ensure the project moves forward smoothly, clients are expected to:
          </p>
          <ul>
            <li>Provide all necessary content (text, images, branding guidelines, etc.) in a timely manner.</li>
            <li>Give prompt feedback on deliverables and milestone approvals.</li>
            <li>Communicate any changes in scope as early as possible. Note that scope creep may lead to additional charges and extended deadlines.</li>
          </ul>
        </div>

      </div>
    </div>
  );
}
