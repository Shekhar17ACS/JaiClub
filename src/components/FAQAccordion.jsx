import React, { useState } from 'react';

const FAQAccordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    { q: "What is Jai Club?", a: "Jai Club is a premier digital marketplace for interactive gaming, featuring a variety of prediction challenges, slots, and lottery-style rounds in a protected setting." },
    { q: "How can I download the Jai Club app?", a: "To get the official app, visit our website's download area and click the <a href='https://www.jaiclub41.com/#/register?invitationCode=57233103761' style='color:#2196f3;text-decoration:underline;'>Download App</a> link to retrieve the APK directly to your device." },
    { q: "What is the minimum deposit amount?", a: "In most cases, the starting deposit for Jai Club is ₹100, although this can vary based on your chosen payment provider." },
    { q: "Is Jai Club safe to use?", a: "Absolutely. Jai Club prioritizes user security by implementing robust encryption protocols and secure database management for all personal data." },
    { q: "What payment methods are supported?", a: "Users can choose from multiple transaction methods, including UPI (Paytm, Google Pay, PhonePe), direct bank transfers, and USDT." },
    { q: "Is Jai Club available 24/7?", a: "Yes, our platform and its entire suite of games are accessible for your enjoyment 24 hours a day, every day of the week." },
    { q: "Is Jai Club available on Play Store?", a: "Jai Club is currently offered as a direct APK download through the official website rather than as a listing on the Google Play Store." },
    { q: "What is the minimum withdrawal amount?", a: "The lowest amount you can withdraw is set at ₹110, with funds typically transferred swiftly to your verified bank account." },
    { q: "Is Jai Club free to join?", a: "Signing up for a <a href='https://www.jaiclub41.com/#/register?invitationCode=57233103761' style='color:#2196f3;text-decoration:underline;'>Jai Club account</a> is completely free of charge. All you need is an active mobile number to create your profile." }
  ];

  const toggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="container" style={{ margin: '40px auto' }}>
      {faqs.map((faq, index) => (
        <div key={index} style={{ marginBottom: '15px', borderRadius: '12px', overflow: 'hidden' }}>
          <div 
            onClick={() => toggle(index)}
            className="gradient-banner" 
            style={{ 
              margin: 0, 
              cursor: 'pointer', 
              fontSize: '18px', 
              padding: '18px 25px',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              borderRadius: '12px'
            }}
          >
            <span style={{ flex: 1, textAlign: 'center' }}>{faq.q}</span>
            <span style={{ fontSize: '24px', marginLeft: '10px' }}>{activeIndex === index ? '−' : '+'}</span>
          </div>
          
          <div style={{
            maxHeight: activeIndex === index ? '500px' : '0',
            overflow: 'hidden',
            transition: 'all 0.3s ease-out',
            background: '#fff',
            border: activeIndex === index ? '1px solid #eee' : 'none',
            borderBottomLeftRadius: '12px',
            borderBottomRightRadius: '12px'
          }}>
            <div style={{ padding: '20px', color: '#555', lineHeight: '1.6' }}>
              {faq.a}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FAQAccordion;
