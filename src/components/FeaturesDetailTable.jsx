import React from 'react';

const FeaturesDetailTable = () => {
  const data = [
    { label: 'App Name', value: 'Jai Club', isLink: true },
    { label: 'Latest Version', value: '1.1' },
    { label: 'Platform Type', value: 'Color Prediction ,Jili, Limbo, and Aviator' },
    { label: 'App Size', value: '12MB' },
    { label: 'Official Website', value: 'https://jaiclub0.club/' },
    { label: 'Referral Code', value: '57233103761', isBold: true },
    { label: 'Welcome Bonus', value: 'Up to ₹100' },
  ];

  return (
    <section className="container" style={{ padding: '2rem 1rem' }}>
      <a href="https://www.jaiclub41.com/#/register?invitationCode=57233103761" style={{ textDecoration: 'none' }}>
        <div style={{
          background: 'linear-gradient(90deg, #ff758c 0%, #70a1ff 100%)',
          padding: '1rem',
          borderRadius: '10px',
          textAlign: 'center',
          color: 'white',
          fontSize: '1.7rem',
          fontWeight: 'bold',
          cursor: 'pointer',
          marginBottom: '1.5rem',
          boxShadow: '0 4px 15px rgba(0,0,0,0.1)'
        }}>
          REGISTER & DOWNLOAD
        </div>
      </a>
      
      <p style={{ fontSize: '1rem', lineHeight: '1.6', color: '#444', marginBottom: '2rem' }}>
        Explore this detailed resource to master the <strong><a href="https://www.jaiclub41.com/#/register?invitationCode=57233103761" style={{ color: '#2196f3', fontWeight: 'bold' }}>Jai Club login</a></strong> sequence, set up your account, and perform the <strong>app installation</strong>. We also provide insights into <strong>key platform functionalities, earning avenues, and protected withdrawal processes</strong>.
      </p>

      <div className="table-responsive" style={{ border: '1px solid #aaa', borderRadius: '4px' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', minWidth: '500px' }}>
          <thead>
            <tr style={{ background: '#fcfcfc', borderBottom: '1px solid #aaa' }}>
              <th style={{ padding: '1rem', borderRight: '1px solid #aaa', textAlign: 'center', width: '50%' }}>Feature</th>
              <th style={{ padding: '1rem', textAlign: 'center' }}>Details</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index} style={{ borderBottom: index === data.length - 1 ? 'none' : '1px solid #aaa' }}>
                <td style={{ padding: '0.8rem 1rem', borderRight: '1px solid #aaa', color: '#333' }}>{item.label}</td>
                <td style={{ padding: '0.8rem 1rem', color: '#333' }}>
                  {item.isLink ? <a href="https://www.jaiclub41.com/#/register?invitationCode=57233103761" style={{ color: '#2196f3', textDecoration: 'underline' }}>{item.value}</a> : item.isBold ? <strong>{item.value}</strong> : item.value}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default FeaturesDetailTable;
