import React from 'react';

const FeaturesTable = () => {
  const data = [
    { label: 'App Name', value: 'Jai Club' },
    { label: 'Latest Version', value: '1.1' },
    { label: 'Platform Type', value: 'Color Prediction, Jili, Limbo, and Aviator' },
    { label: 'App Size', value: '12MB' },
    { label: 'Official Website', value: 'https://jaiclub0.club/' },
    { label: 'Referral Code', value: '57233103761' },
    { label: 'Welcome Bonus', value: 'Up to ₹100' },
  ];

  return (
    <section id="about">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '2.5rem' }}>Jai Club App <span className="gradient-text">Overview</span></h2>
          <div className="title-underline" style={{ margin: '0.5rem auto' }}></div>
        </div>
        
        <div className="table-responsive glass" style={{ borderRadius: '20px' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', minWidth: '500px' }}>
            <thead>
              <tr style={{ background: 'var(--secondary-gradient)' }}>
                <th style={{ padding: '1.2rem', color: 'white' }}>Feature</th>
                <th style={{ padding: '1.2rem', color: 'white' }}>Details</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr key={index} style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                  <td style={{ padding: '1rem', fontWeight: '600', color: 'var(--text-muted)' }}>{item.label}</td>
                  <td style={{ padding: '1rem', color: 'white' }}>{item.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default FeaturesTable;
