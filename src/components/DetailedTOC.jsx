import React, { useState } from 'react';

const DetailedTOC = ({ customItems }) => {
  const [isOpen, setIsOpen] = useState(true);

  const defaultItems = [
    { label: "1. Jai Club App", id: "Jai_Club_App" },
    { label: "2. Why Choose Jai Club?", id: "Why_Choose_Jai_Club" },
    { label: "2.0.1. How Jai Club Platform Works", id: "How_Jai_Club_Platform_Works" },
    { label: "3. How to Register on Jai Club (Easy Steps)", id: "How_to_Register_on_Jai_Club_Easy_Steps" },
    { label: "4. Jai Club Login – How to Sign In", id: "Jai_Club_Login_How_to_Sign_In" },
    { label: "5. Jai Club App Download & Installation Guide", id: "Jai_Club_App_Download_Installation_Guide" },
    { label: "5.1. Steps to Download and Install Jai Club App", id: "Steps_to_Download_and_Install_Jai_Club_App" },
    { label: "6. Game Categories on Jai Club", id: "Game_Categories_on_Jai_Club" },
    { label: "6.0.1. Colour Prediction & Lottery Games", id: "Game_Categories_on_Jai_Club" },
    { label: "6.0.2. Instant Play Entertainment Games", id: "Game_Categories_on_Jai_Club" },
    { label: "6.0.3. Slots & Casino Style Games", id: "Game_Categories_on_Jai_Club" },
    { label: "6.0.4. Popular & Trending Games", id: "Game_Categories_on_Jai_Club" },
    { label: "6.0.5. Card & Arcade Gaming Options", id: "Game_Categories_on_Jai_Club" },
    { label: "7. How to Deposit Money in Jai Club", id: "How_to_Deposit_Money_in_Jai_Club" },
    { label: "7.1. Steps to Add Balance", id: "How_to_Deposit_Money_in_Jai_Club" },
    { label: "8. How to Add Bank Account in Jai Club", id: "How_to_Deposit_Money_in_Jai_Club" },
    { label: "8.1. Step-by-Step Process", id: "How_to_Deposit_Money_in_Jai_Club" },
    { label: "9. How to Play Wingo Colour Prediction on Jai Club", id: "How_to_Play_Wingo_Colour_Prediction_on_Jai_Club" },
    { label: "10. Steps to Play Wingo on Jai Club", id: "How_to_Play_Wingo_Colour_Prediction_on_Jai_Club" },
    { label: "10.1. Wingo Colour & Number Logic", id: "How_to_Play_Wingo_Colour_Prediction_on_Jai_Club" },
    { label: "11. Jai Club Refer & Earn Program", id: "Daily_Bonus_Invite_Members_Earn_More" },
    { label: "12. How to Use Jai Club Referral Program", id: "Daily_Bonus_Invite_Members_Earn_More" },
    { label: "13. Why Should You Choose Jai Club as an Agent?", id: "Permanent_Salary_System_for_Jai_Club_Agents" },
    { label: "13.1. Permanent Salary System for Jai Club Agents", id: "Permanent_Salary_System_for_Jai_Club_Agents" },
    { label: "13.1.1. Daily Salary System", id: "Permanent_Salary_System_for_Jai_Club_Agents" },
    { label: "14. Daily Bonus – Invite Members & Earn More", id: "Daily_Bonus_Invite_Members_Earn_More" },
    { label: "14.1. Invite Bonus Structure", id: "Daily_Bonus_Invite_Members_Earn_More" },
    { label: "15. How to Withdraw Money from Jai Club", id: "How_to_Withdraw_Money_from_Jai_Club" },
    { label: "15.1. Steps to Withdraw Money", id: "How_to_Withdraw_Money_from_Jai_Club" },
    { label: "15.1.1. Withdrawal Details", id: "How_to_Withdraw_Money_from_Jai_Club" },
    { label: "16. Jai Club Withdrawal & Earning Proof", id: "Permanent_Salary_System_for_Jai_Club_Agents" },
    { label: "17. Jai Club Alternatives", id: "Jai_Club_FAQ" },
    { label: "18. How to Use a Jai Club Gift Code", id: "How_to_Use_a_Jai_Club_Gift_Code" },
    { label: "18.1. Steps to Redeem Jai Club Gift Code", id: "How_to_Use_a_Jai_Club_Gift_Code" },
    { label: "19. How to Contact Jai Club Customer Support", id: "Support" },
    { label: "19.1. Steps to Contact Support", id: "Support" },
    { label: "20. Jai Club Official Verified Website Link", id: "Support" },
    { label: "20.1. Official Links List", id: "Support" },
    { label: "21. Responsible Gaming on Jai Club", id: "Jai_Club_FAQ" },
    { label: "21.0.1. Responsible Gaming Guidelines", id: "Jai_Club_FAQ" },
    { label: "21.1. What is Jai Club?", id: "Jai_Club_FAQ" },
    { label: "21.2. How can I download the Jai Club app?", id: "Jai_Club_FAQ" },
    { label: "21.3. What is the minimum deposit amount?", id: "Jai_Club_FAQ" },
    { label: "21.4. Is Jai Club safe to use?", id: "Jai_Club_FAQ" },
    { label: "21.5. What payment methods are supported?", id: "Jai_Club_FAQ" },
    { label: "21.6. Is Jai Club available 24/7?", id: "Jai_Club_FAQ" },
    { label: "21.7. Is Jai Club available on Play Store?", id: "Jai_Club_FAQ" },
    { label: "21.8. What payment methods are supported?", id: "Jai_Club_FAQ" },
    { label: "21.9. What is the minimum withdrawal amount?", id: "Jai_Club_FAQ" },
    { label: "21.10. Is Jai Club free to join?", id: "Jai_Club_FAQ" },
    { label: "21.11. Conclusion", id: "Jai_Club_FAQ" }
  ];

  const items = customItems || defaultItems;

  const handleScroll = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="container" style={{ padding: '2rem 1rem' }}>
      <div style={{
        border: '1px solid #ddd',
        padding: '1.2rem',
        borderRadius: '8px',
        background: '#fff',
        maxWidth: '450px',
        boxShadow: '0 2px 8px rgba(0,0,0,0.05)'
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: isOpen ? '1rem' : '0' }}>
          <h3 style={{
            fontSize: '1.4rem',
            margin: 0,
            color: '#1e73be',
            background: 'none',
            padding: 0,
            border: 'none',
            boxShadow: 'none',
            textAlign: 'left',
            width: 'auto'
          }}>Table of Contents</h3>

          <div
            onClick={() => setIsOpen(!isOpen)}
            style={{
              border: '1px solid #ccc',
              padding: '4px 6px',
              borderRadius: '4px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '4px',
              background: '#fff'
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
              <div style={{ width: '14px', height: '1.2px', background: '#888' }}></div>
              <div style={{ width: '14px', height: '1.2px', background: '#888' }}></div>
              <div style={{ width: '14px', height: '1.2px', background: '#888' }}></div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', fontSize: '6px', color: '#888', lineHeight: 1 }}>
              <span>▲</span>
              <span>▼</span>
            </div>
          </div>
        </div>

        <div style={{
          maxHeight: isOpen ? '2500px' : '0',
          overflow: 'hidden',
          transition: 'max-height 0.4s ease-in-out',
          opacity: isOpen ? 1 : 0
        }}>
          <ul style={{ listStyle: 'none', padding: '10px 0 0 5px' }}>
            {items.map((item, index) => {
              const dots = item.label.split('.').length;
              const paddingLeft = dots === 1 ? '0' : (dots === 3 ? '1.5rem' : '2.5rem');

              return (
                <li key={index} style={{
                  marginBottom: '10px',
                  paddingLeft: paddingLeft,
                  fontSize: '0.95rem'
                }}>
                  <a
                    href={`#${item.id}`}
                    onClick={(e) => handleScroll(e, item.id)}
                    style={{
                      color: '#333',
                      textDecoration: 'none',
                      display: 'block',
                      transition: 'all 0.2s ease'
                    }}
                    onMouseOver={(e) => {
                      e.target.style.color = '#1e73be';
                    }}
                    onMouseOut={(e) => {
                      e.target.style.color = '#333';
                    }}
                  >
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default DetailedTOC;
