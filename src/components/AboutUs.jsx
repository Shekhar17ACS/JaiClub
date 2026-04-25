import React from 'react';
import DetailedTOC from './DetailedTOC';
import Footer from './Footer';

const AboutUs = () => {
  const tocItems = [
    { label: "1. Who We Are", id: "Who_We_Are" },
    { label: "2. What We Offer", id: "What_We_Offer" },
    { label: "3. Our Purpose", id: "Our_Purpose" },
    { label: "4. Important Disclaimer", id: "Important_Disclaimer" },
    { label: "5. Responsible Use", id: "Responsible_Use" },
    { label: "6. Contact Us", id: "Contact_Us" }
  ];

  return (
    <main style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
      <header className="container" style={{ padding: '2rem 0' }}>
        <h1>About Us</h1>
        <p>
          Welcome to <a href="https://jaiclub0.club/" style={{ color: 'var(--text-blue)' }}>jaiclub0.club</a>, the ultimate digital manual for the <a href="https://jaiclub0.club/" style={{ color: 'var(--text-blue)' }}>Jai Club</a> community. We are dedicated to providing players with precise, expert-level insights into the platform's features, ensuring your journey from registration to gameplay is smooth and well-informed.
        </p>
      </header>

      <section className="container">
        <DetailedTOC customItems={tocItems} />
      </section>

      <section className="container" id="Who_We_Are">
        <div className="gradient-banner">Who We Are</div>
        <p>
          <a href="https://jaiclub0.club/" style={{ color: 'var(--text-blue)' }}>jaiclub0.club</a> is an independent educational platform designed to empower <a href="https://jaiclub0.club/" style={{ color: 'var(--text-blue)' }}>Jai Club</a> enthusiasts. Our team focuses on delivering structured tutorials and deep-dive analysis, making it easier for both new and experienced users to master the platform's dynamics.
        </p>
      </section>

      <section className="container" id="What_We_Offer">
        <div className="gradient-banner">What We Offer</div>
        <p>At <a href="https://jaiclub0.club/" style={{ color: 'var(--text-blue)' }}>jaiclub0.club</a>, we specialize in high-quality, actionable content including:</p>
        <ul style={{ paddingLeft: '20px', marginBottom: '20px' }}>
          <li>Complete signup and secure login walkthroughs</li>
          <li>Comprehensive app installation and configuration guides</li>
          <li>Expert overviews of diverse game formats and rules</li>
          <li>Essential knowledge on funding and account management</li>
          <li>Strategic insights into the referral and bonus structures</li>
          <li>Optimized tips for a superior and secure user experience</li>
        </ul>
        <p>Every piece of content is meticulously researched and updated to stay in sync with the latest platform innovations.</p>
      </section>

      <section className="container" id="Our_Purpose">
        <div className="gradient-banner">Our Purpose</div>
        <p>We aim to eliminate confusion by offering the most reliable and thorough resources for anyone exploring <a href="https://jaiclub0.club/" style={{ color: 'var(--text-blue)' }}>Jai Club</a>. Our mission is to foster a well-informed community where every participant can enjoy the platform with absolute clarity.</p>
      </section>

      <section className="container" id="Important_Disclaimer">
        <div className="gradient-banner">Important Disclaimer</div>
        <p>
          It is important to note that <a href="https://jaiclub0.club/" style={{ color: 'var(--text-blue)' }}>jaiclub0.club</a> is <strong>not the official <a href="https://jaiclub0.club/" style={{ color: 'var(--text-blue)' }}>Jai Club platform</a></strong>. We do not host games, process payments, or provide direct gaming services. Our purpose is purely educational and informational for the gaming community.
        </p>
      </section>

      <section className="container" id="Responsible_Use">
        <div className="gradient-banner">Responsible Use</div>
        <p>We strongly advocate for mindful interaction with gaming ecosystems. We encourage all users to maintain a balanced lifestyle and always respect their personal and financial boundaries.</p>
      </section>

      <section className="container" id="Contact_Us" style={{ paddingBottom: '30px' }}>
        <div className="gradient-banner">Contact Us</div>
        <p>Should you have any inquiries, suggestions, or constructive feedback, please do not hesitate to contact our team:</p>
        <p><strong>Email:</strong> <a href="mailto:contact@jaiclub0.club" style={{ color: 'var(--text-blue)', textDecoration: 'none' }}>contact@jaiclub0.club</a></p>
      </section>

      <div className="container">
        <hr style={{ border: 'none', borderTop: '1px solid #ddd', margin: '40px 0 30px' }} />
        <p style={{ fontSize: '15px', color: '#333' }}>
          Thank you for choosing <a href="https://jaiclub0.club/" style={{ color: 'var(--text-blue)', textDecoration: 'none' }}>jaiclub0.club</a>. Our dedicated team is committed to keeping you informed and helping you navigate your gaming journey with ease.
        </p>
      </div>
      <Footer />
    </main>
  );
};

export default AboutUs;
