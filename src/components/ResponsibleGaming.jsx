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
          At <a href="https://jaiclub0.club/" style={{ color: 'var(--text-blue)', textDecoration: 'none' }}>Jai Club</a> (https://jaiclub0.club/), our mission is to advocate for <strong>safe and responsible engagement</strong> with digital gaming platforms. All content shared here is exclusively for <strong>informational and educational purposes</strong> and is intended for individuals who are <strong>18 years of age or older</strong>.
        </p>
        <hr style={{ border: 'none', borderTop: '1px solid #ddd', marginTop: '30px' }} />
      </header>

      <section className="container">
        <DetailedTOC customItems={tocItems} />
      </section>

      <section className="container" id="Our_Commitment">
        <div className="gradient-banner">Our Commitment</div>
        <p>
          <a href="https://jaiclub0.club/" style={{ color: 'var(--text-blue)', textDecoration: 'none' }}>Jai Club</a> operates as an <strong>independent educational hub</strong>. We do not host games or provide any direct betting services. Instead, we focus on increasing user awareness and encouraging a balanced approach to online entertainment.
        </p>
        <hr style={{ border: 'none', borderTop: '1px solid #ddd', margin: '30px 0' }} />
      </section>

      <section className="container" id="Responsible_Gaming_Guidelines">
        <div className="gradient-banner">Responsible Gaming Guidelines</div>
        <p>To ensure a safe and balanced experience, follow these important tips:</p>
        <ul style={{ paddingLeft: '20px', marginBottom: '20px' }}>
          <li>Treat gaming strictly as a form of <strong>leisure and fun</strong>, not as a source of income</li>
          <li>Establish defined <strong>budgetary and time constraints</strong> before you begin</li>
          <li>Avoid trying to recover lost funds or playing under emotional stress</li>
          <li>Never utilize <strong>funds meant for essentials or borrowed money</strong></li>
          <li>Integrate frequent breaks and prioritize your daily responsibilities</li>
          <li>Cease activity immediately if you feel any pressure or discomfort</li>
        </ul>
        <hr style={{ border: 'none', borderTop: '1px solid #ddd', margin: '30px 0' }} />
      </section>

      <section className="container" id="Know_the_Risks">
        <div className="gradient-banner">Know the Risks</div>
        <p>
          Engaging in online gaming activities can carry <strong>financial implications and emotional risks</strong>. If not managed carefully, use can become excessive and impact your daily life. It is crucial to remain mindful and maintain a disciplined schedule.
        </p>
        <hr style={{ border: 'none', borderTop: '1px solid #ddd', margin: '30px 0' }} />
      </section>

      <section className="container" id="Self-Control_Tips">
        <div className="gradient-banner">Self-Control Tips</div>
        <ul style={{ paddingLeft: '20px', marginBottom: '20px' }}>
          <li>Monitor your <strong>session duration and expenditures</strong> closely</li>
          <li>Avoid prolonged and uninterrupted gaming sessions</li>
          <li>Ensure gaming stays in balance with your work and social life</li>
          <li>Practice mindfulness when making in-app decisions</li>
        </ul>
        <hr style={{ border: 'none', borderTop: '1px solid #ddd', margin: '30px 0' }} />
      </section>

      <section className="container" id="Age_Restriction">
        <div className="gradient-banner">Age Restriction</div>
        <p>This resource is strictly limited to individuals who are <strong>18 years or older</strong>.</p>
        <p>Minors are strictly prohibited from accessing or engaging with these types of platforms.</p>
        <hr style={{ border: 'none', borderTop: '1px solid #ddd', margin: '30px 0' }} />
      </section>

      <section className="container" id="Seek_Help_if_Needed">
        <div className="gradient-banner">Seek Help if Needed</div>
        <p>
          If you suspect that your gaming habits are negatively influencing your well-being, finances, or personal relationships, we strongly suggest taking a break and consulting with professional support organizations.
        </p>
        <hr style={{ border: 'none', borderTop: '1px solid #ddd', margin: '30px 0' }} />
      </section>

      <section className="container" id="Final_Note">
        <div className="gradient-banner">Final Note</div>
        <p>
          The team at <a href="https://jaiclub0.club/" style={{ color: 'var(--text-blue)', textDecoration: 'none' }}>Jai Club</a> advocates for informed decision-making and the continuous practice of safe and controlled gaming habits.
        </p>
      </section>

      <Footer />
    </main>
  );
};

export default ResponsibleGaming;
