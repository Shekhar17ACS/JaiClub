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
          We appreciate your interest in <a href="https://jaiclub0.club/" style={{ color: 'var(--text-blue)' }}>JaiClub.games</a>. If you have inquiries, feedback, or require assistance with our informational guides, our team is ready to help. Reach out to us through the channels listed below.
        </p>
      </header>

      <section className="container">
        <DetailedTOC customItems={tocItems} />
      </section>

      <section className="container" id="Get_in_Touch">
        <div className="gradient-banner">Get in Touch</div>
        <p>For support inquiries or to provide suggestions, you can connect with us via the email address below:</p>
        <p style={{ margin: '20px 0' }}>
          <strong>Email:</strong> <a href="mailto:contact@jaiclub0.club" style={{ color: 'var(--text-blue)', textDecoration: 'none' }}>contact@jaiclub0.club</a>
        </p>
        <p>Our goal is to respond to all communication promptly, typically within a 24 to 48-hour timeframe.</p>
      </section>

      <section className="container" id="What_You_Can_Contact_Us_For">
        <div className="gradient-banner">What You Can Contact Us For</div>
        <ul style={{ paddingLeft: '20px', marginBottom: '20px' }}>
          <li>Inquiries regarding <a href="https://jaiclub0.club/" style={{ color: 'var(--text-blue)' }}>Jai Club</a> tutorials or walkthroughs</li>
          <li>Ideas for enhancing our site's content and user experience</li>
          <li>Reporting potential errors or outdated platform information</li>
          <li>General feedback and collaborative opportunities</li>
        </ul>
      </section>

      <section className="container" id="Important_Note">
        <div className="gradient-banner">Important Note</div>
        <p>
          <a href="https://jaiclub0.club/" style={{ color: 'var(--text-blue)' }}>Jai Club games</a> is strictly an informational resource and remains independent from the <a href="https://jaiclub0.club/" style={{ color: 'var(--text-blue)' }}>official Jai Club platform</a>. We do not provide direct account management, login troubleshooting, or financial transactional support.
        </p>
        <p style={{ marginTop: '20px' }}>If you are experiencing issues related to your personal account, please reach out to official Jai Club support directly.</p>
      </section>

      <div className="container" style={{ marginTop: '40px' }}>
        <hr style={{ border: 'none', borderTop: '1px solid #ddd', margin: '40px 0 30px' }} />
        <p style={{ fontSize: '15px' }}>
          We value your engagement and thank you for choosing <a href="https://jaiclub0.club/" style={{ color: 'var(--text-blue)', textDecoration: 'none' }}>JaiClub.games</a> as your trusted guide.
        </p>
      </div>
      <Footer />
    </main>
  );
};

export default ContactUs;
