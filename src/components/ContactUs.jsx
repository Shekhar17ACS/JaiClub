import React from 'react';
import DetailedTOC from './DetailedTOC';
import Footer from './Footer';

const ContactUs = () => {
  const tocItems = [
    { label: "1. Get in Touch", id: "Get_in_Touch" },
    { label: "2. What You Can Contact Us For", id: "What_You_Can_Contact_Us_For" },
    { label: "3. Important Note", id: "Important_Note" }
  ];

  return (
    <main style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
      <header className="container" style={{ padding: '2rem 0' }}>
        <h1>Contact Us</h1>
        <p>
          Thank you for your interest in <a href="https://jaiclub0.club/" style={{ color: 'var(--text-blue)' }}>jaiclub0.club</a>. We value our community's feedback and are here to assist you with any questions regarding our Jai Club informational guides. Whether you have a suggestion or need clarification on a tutorial, our team is ready to help.
        </p>
      </header>

      <section className="container">
        <DetailedTOC customItems={tocItems} />
      </section>

      <section className="container" id="Get_in_Touch">
        <div className="gradient-banner">Get in Touch</div>
        <p>For all support inquiries, content suggestions, or partnership opportunities, you can connect with our editorial team via email:</p>
        <p style={{ margin: '20px 0' }}>
          <strong>Email:</strong> <a href="mailto:contact@jaiclub0.club" style={{ color: 'var(--text-blue)', textDecoration: 'none' }}>contact@jaiclub0.club</a>
        </p>
        <p>We aim to review and respond to all messages promptly, generally within a 24 to 48-hour business window.</p>
      </section>

      <section className="container" id="What_You_Can_Contact_Us_For">
        <div className="gradient-banner">What You Can Contact Us For</div>
        <ul style={{ paddingLeft: '20px', marginBottom: '20px' }}>
          <li>Inquiries related to <a href="https://jaiclub0.club/" style={{ color: 'var(--text-blue)' }}>Jai Club</a> registration and login walkthroughs</li>
          <li>Suggestions for enhancing our site's content and design</li>
          <li>Reporting outdated platform information or technical errors</li>
          <li>General feedback and potential collaborative ventures</li>
        </ul>
      </section>

      <section className="container" id="Important_Note">
        <div className="gradient-banner">Important Note</div>
        <p>
          <a href="https://jaiclub0.club/" style={{ color: 'var(--text-blue)' }}>jaiclub0.club</a> is an independent informational resource and is not affiliated with the <a href="https://jaiclub0.club/" style={{ color: 'var(--text-blue)' }}>official Jai Club platform</a>. We do not have access to user accounts and cannot assist with login recovery, transaction disputes, or account-specific troubleshooting.
        </p>
        <p style={{ marginTop: '20px' }}>For any issues directly related to your Jai Club account, please reach out to the official Jai Club support channels.</p>
      </section>

      <div className="container" style={{ marginTop: '40px' }}>
        <hr style={{ border: 'none', borderTop: '1px solid #ddd', margin: '40px 0 30px' }} />
        <p style={{ fontSize: '15px' }}>
          We appreciate your trust in <a href="https://jaiclub0.club/" style={{ color: 'var(--text-blue)', textDecoration: 'none' }}>jaiclub0.club</a> and thank you for engaging with our community.
        </p>
      </div>
      <Footer />
    </main>
  );
};

export default ContactUs;
