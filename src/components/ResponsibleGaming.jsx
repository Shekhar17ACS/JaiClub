import React from 'react';
import DetailedTOC from './DetailedTOC';
import Footer from './Footer';

const ResponsibleGaming = () => {
  const tocItems = [
    { label: "1. Our Commitment", id: "Our_Commitment" },
    { label: "2. Responsible Gaming Guidelines", id: "Responsible_Gaming_Guidelines" },
    { label: "3. Know the Risks", id: "Know_the_Risks" },
    { label: "4. Self-Control Tips", id: "Self-Control_Tips" },
    { label: "5. Age Restriction", id: "Age_Restriction" },
    { label: "6. Seek Help if Needed", id: "Seek_Help_if_Needed" },
    { label: "7. Final Note", id: "Final_Note" }
  ];

  return (
    <main style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
      <header className="container" style={{ padding: '2rem 0' }}>
        <h1>Responsible Gaming</h1>
        <p>
          At <a href="https://jaiclub0.club/" style={{ color: 'var(--text-blue)', textDecoration: 'none' }}>jaiclub0.club</a>, our primary mission is to promote <strong>safe and responsible engagement</strong> within the digital gaming community. We provide <strong>educational and informational resources</strong> exclusively intended for individuals who are <strong>18 years of age or older</strong>.
        </p>
        <hr style={{ border: 'none', borderTop: '1px solid #ddd', marginTop: '30px' }} />
      </header>

      <section className="container">
        <DetailedTOC customItems={tocItems} />
      </section>

      <section className="container" id="Our_Commitment">
        <div className="gradient-banner">Our Commitment</div>
        <p>
          <a href="https://jaiclub0.club/" style={{ color: 'var(--text-blue)', textDecoration: 'none' }}>jaiclub0.club</a> functions as an <strong>independent educational hub</strong>. We are not a gaming provider and do not host any direct betting services. Our focus is on empowering users through awareness and encouraging a disciplined approach to online entertainment.
        </p>
        <hr style={{ border: 'none', borderTop: '1px solid #ddd', margin: '30px 0' }} />
      </section>

      <section className="container" id="Responsible_Gaming_Guidelines">
        <div className="gradient-banner">Responsible Gaming Guidelines</div>
        <p>To maintain a positive and balanced relationship with gaming, please consider these essential practices:</p>
        <ul style={{ paddingLeft: '20px', marginBottom: '20px' }}>
          <li>Approach gaming strictly as a form of <strong>recreation and fun</strong></li>
          <li>Set firm <strong>time and financial limits</strong> before you start playing</li>
          <li>Avoid "chasing" losses or gaming when you are stressed or emotional</li>
          <li>Only use discretionary funds; never use money meant for essentials or borrow to play</li>
          <li>Balance your gaming time with work, family, and other social responsibilities</li>
          <li>Stop immediately if you feel any pressure, frustration, or lack of control</li>
        </ul>
        <hr style={{ border: 'none', borderTop: '1px solid #ddd', margin: '30px 0' }} />
      </section>

      <section className="container" id="Know_the_Risks">
        <div className="gradient-banner">Know the Risks</div>
        <p>
          Digital gaming can involve <strong>real financial and psychological risks</strong> if not managed with care. It is vital to recognize that excessive play can impact your well-being and daily life. Maintaining a disciplined schedule and staying self-aware are crucial for a safe experience.
        </p>
        <hr style={{ border: 'none', borderTop: '1px solid #ddd', margin: '30px 0' }} />
      </section>

      <section className="container" id="Self-Control_Tips">
        <div className="gradient-banner">Self-Control Tips</div>
        <ul style={{ paddingLeft: '20px', marginBottom: '20px' }}>
          <li>Keep a close eye on your <strong>total session time and spending</strong></li>
          <li>Avoid long, uninterrupted sessions; set reminders to take breaks</li>
          <li>Ensure gaming remains a secondary interest to your work and personal life</li>
          <li>Think critically and stay mindful when making decisions within any app</li>
        </ul>
        <hr style={{ border: 'none', borderTop: '1px solid #ddd', margin: '30px 0' }} />
      </section>

      <section className="container" id="Age_Restriction">
        <div className="gradient-banner">Age Restriction</div>
        <p>This site and its resources are intended exclusively for individuals <strong>18 years of age or older</strong>.</p>
        <p>Underage participation is strictly prohibited on gaming platforms, and we encourage the use of parental controls to protect minors.</p>
        <hr style={{ border: 'none', borderTop: '1px solid #ddd', margin: '30px 0' }} />
      </section>

      <section className="container" id="Seek_Help_if_Needed">
        <div className="gradient-banner">Seek Help if Needed</div>
        <p>
          If you feel that your gaming habits are starting to negatively affect your finances, relationships, or mental health, we strongly recommend stepping back and consulting with professional support organizations dedicated to responsible gaming.
        </p>
        <hr style={{ border: 'none', borderTop: '1px solid #ddd', margin: '30px 0' }} />
      </section>

      <section className="container" id="Final_Note">
        <div className="gradient-banner">Final Note</div>
        <p>
          The team at <a href="https://jaiclub0.club/" style={{ color: 'var(--text-blue)', textDecoration: 'none' }}>jaiclub0.club</a> advocates for informed decision-making and the continuous practice of healthy, controlled gaming habits. Stay safe and stay in balance.
        </p>
      </section>

      <Footer />
    </main>
  );
};

export default ResponsibleGaming;
