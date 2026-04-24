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
          Welcome to <a href="https://jaiclub0.club/" style={{ color: 'var(--text-blue)' }}>JaiClub.games</a>, your premier destination for clear and actionable insights into the <a href="https://jaiclub0.club/" style={{ color: 'var(--text-blue)' }}>Jai Club</a> ecosystem. We are committed to helping users navigate the platform with confidence, covering everything from account setup and login to exploring the latest app features.
        </p>
      </header>

      <section className="container">
        <DetailedTOC customItems={tocItems} />
      </section>

      <section className="container" id="Who_We_Are">
        <div className="gradient-banner">Who We Are</div>
        <p>
          <a href="https://jaiclub0.club/" style={{ color: 'var(--text-blue)' }}>JaiClub.games</a> functions as an independent information hub tailored for players seeking straightforward and precise guidance on <a href="https://jaiclub0.club/" style={{ color: 'var(--text-blue)' }}>Jai Club</a>. We offer structured tutorials, platform deep-dives, and practical tips to ensure both newcomers and seasoned users can make the most of their experience.
        </p>
      </section>

      <section className="container" id="What_We_Offer">
        <div className="gradient-banner">What We Offer</div>
        <p>At <a href="https://jaiclub0.club/" style={{ color: 'var(--text-blue)' }}>JaiClub.games</a>, our priority is providing high-quality, easy-to-digest content that includes:</p>
        <ul style={{ paddingLeft: '20px', marginBottom: '20px' }}>
          <li>Walkthroughs for portal access and signup</li>
          <li>Detailed app procurement and setup tutorials</li>
          <li>Overviews of game types and mechanics</li>
          <li>Key details on funding and retrieval of balances</li>
          <li>Insights into the referral and rewards network</li>
          <li>Best practices for an optimized user journey</li>
        </ul>
        <p>Our resources are crafted with the user in mind—optimized for clarity and updated frequently to reflect the most current platform developments.</p>
      </section>

      <section className="container" id="Our_Purpose">
        <div className="gradient-banner">Our Purpose</div>
        <p>We strive to demystify complex systems and offer dependable resources for those exploring <a href="https://jaiclub0.club/" style={{ color: 'var(--text-blue)' }}>Jai Club</a>. Our objective is to build a supportive community where participants can find the guidance they need without any ambiguity.</p>
      </section>

      <section className="container" id="Important_Disclaimer">
        <div className="gradient-banner">Important Disclaimer</div>
        <p>
          Please be aware that <a href="https://jaiclub0.club/" style={{ color: 'var(--text-blue)' }}>JaiClub.games</a> is <strong>not the official <a href="https://jaiclub0.club/" style={{ color: 'var(--text-blue)' }}>Jai Club hub</a></strong> and does not facilitate gaming transactions or services directly. We do not host games on this site; our mission is entirely educational and informational.
        </p>
      </section>

      <section className="container" id="Responsible_Use">
        <div className="gradient-banner">Responsible Use</div>
        <p>We urge all participants to interact with the platform mindfully. Always maintain a balanced approach to gaming and respect your own predetermined limits.</p>
      </section>

      <section className="container" id="Contact_Us" style={{ paddingBottom: '30px' }}>
        <div className="gradient-banner">Contact Us</div>
        <p>Should you have any inquiries, suggestions, or constructive feedback, please do not hesitate to contact our team:</p>
        <p><strong>Email:</strong> <a href="mailto:contact@jaiclub0.club" style={{ color: 'var(--text-blue)', textDecoration: 'none' }}>contact@jaiclub0.club</a></p>
      </section>

      <div className="container">
        <hr style={{ border: 'none', borderTop: '1px solid #ddd', margin: '40px 0 30px' }} />
        <p style={{ fontSize: '15px', color: '#333' }}>
          We appreciate your visit to <a href="https://jaiclub0.club/" style={{ color: 'var(--text-blue)', textDecoration: 'none' }}>JaiClub.games</a>. Our team is here to ensure you stay well-informed and enjoy a streamlined gaming journey.
        </p>
      </div>
      <Footer />
    </main>
  );
};

export default AboutUs;
