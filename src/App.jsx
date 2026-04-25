import React, { useState } from 'react';
import Navbar from './components/Navbar';
import DetailedTOC from './components/DetailedTOC';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import ResponsibleGaming from './components/ResponsibleGaming';
import FAQAccordion from './components/FAQAccordion';
import Footer from './components/Footer';
import { Route, Routes, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

// Asset Imports
import appLogo from './assets/app_logo.jpeg';
import appInterface from './assets/app_interface.png';
import registrationGuide from './assets/registration_guide.png';
import loginGuide from './assets/login_guide.png';
import appDownload from './assets/app_download.png';
import gamesOverview from './assets/games_overview.png';
import depositStep1 from './assets/deposit_step1.png';
import depositStep2 from './assets/deposit_step2.png';
import wingoGuide from './assets/wingo_guide.jpeg';
import salaryProof from './assets/salary_proof.jpeg';
import inviteBonus from './assets/invite_bonus.jpeg';
import earningProof from './assets/earning_proof.png';
import giftCodePromo from './assets/gift_code_promo.png';
import supportSelfService from './assets/support_self_service.png';
import customerCareRep from './assets/customer_care_rep.png';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const FeatureTable = () => (
  <div className="container" style={{ padding: '0' }}>
    <div className="table-responsive">
      <table style={{ margin: '1rem 0' }}>
        <thead>
          <tr>
            <th>Feature</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>App Name</td>
            <td><a href="https://www.jaiclub41.com/#/register?invitationCode=57233103761" style={{ color: 'var(--text-blue)', fontWeight: 'bold' }}>Jai Club</a></td>
          </tr>
          <tr>
            <td>Latest Version</td>
            <td>1.1</td>
          </tr>
          <tr>
            <td>Platform Type</td>
            <td>Color Prediction, Jili, Limbo, and Aviator</td>
          </tr>
          <tr>
            <td>App Size</td>
            <td>12MB</td>
          </tr>
          <tr>
            <td>Official Website</td>
            <td>https://jaiclub0.club/</td>
          </tr>
          <tr>
            <td>Referral Code</td>
            <td><strong>57233103761</strong></td>
          </tr>
          <tr>
            <td>Welcome Bonus</td>
            <td>Up to ₹100</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
);

const GameCategories = () => {
  const games = [
    { icon: "🎯", title: "Colour Prediction & Lottery Games", text: "Dive into the world of rapid-result prediction and exciting lottery games, crafted for those who love quick decision-making and seamless interaction.", id: "Colour_Prediction_Lottery_Games" },
    { icon: "⚡", title: "Instant Play Entertainment Games", text: "Perfect for quick gaming bursts, our instant-play titles offer a streamlined interface and responsive performance across all your devices.", id: "Instant_Play_Entertainment_Games" },
    { icon: "🎰", title: "Slots & Casino Style Games", text: "Explore a collection of immersive slots and classic casino games featuring dynamic visuals and engaging gameplay mechanics for everyone.", id: "Slots_Casino_Style_Games" },
    { icon: "🏆", title: "Popular & Trending Games", text: "Get access to the most sought-after and trending Jai Club titles, favored by users for their high entertainment value and easy accessibility.", id: "Popular_Trending_Games" },
    { icon: "🃏", title: "Card & Arcade Gaming Options", text: "Enjoy a curated selection of card games and arcade-style challenges, ideal for casual players looking for lighthearted and fun experiences.", id: "Card_Arcade_Gaming_Options" }
  ];

  return (
    <section className="container" id="Game_Categories_on_Jai_Club">
      <div className="gradient-banner">Game Categories on Jai Club</div>
      <div style={{ textAlign: 'center', margin: '2rem 0' }}>
        <img
          src={gamesOverview}
          className="img-fluid"
          alt="Jai Club Games"
          style={{ borderRadius: '30px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}
        />
      </div>

      {games.map((game, i) => (
        <div key={i} id={game.id} style={{ marginBottom: '30px' }}>
          <div style={{ fontSize: '24px', marginBottom: '10px' }}>{game.icon}</div>
          <div style={{
            background: '#1e2235',
            color: '#fff',
            padding: '12px 20px',
            borderRadius: '8px',
            fontWeight: '700',
            fontSize: '18px',
            textAlign: 'center',
            marginBottom: '10px'
          }}>
            {game.title}
          </div>
          <p style={{ color: '#333', lineHeight: '1.6' }}>{game.text}</p>
        </div>
      ))}
    </section>
  );
};

const SalarySystem = () => (
  <section className="container" id="Permanent_Salary_System_for_Jai_Club_Agents">
    <div className="gradient-banner">Permanent Salary System for Jai Club Agents</div>
    <p>Jai Club features a dedicated rewards program for active agents, offering daily incentives based on the collective deposit performance of their group. As your team grows and deposit activity increases, you can unlock higher daily benefits, creating a consistent earning stream.</p>
    <div style={{ textAlign: 'center', margin: '2rem 0' }}>
      <img src={salaryProof} className="img-fluid" alt="Salary Proof" style={{ borderRadius: '20px' }} />
    </div>

    <div style={{
      background: '#1e2235',
      color: '#fff',
      padding: '12px 20px',
      borderRadius: '8px',
      fontWeight: '700',
      fontSize: '18px',
      margin: '20px 0'
    }}>
      Daily Salary System
    </div>
    <div className="table-responsive">
      <table>
        <thead>
          <tr>
            <th>Team Members</th>
            <th>Minimum Team Deposit Amount</th>
            <th>Daily Salary Amount</th>
          </tr>
        </thead>
        <tbody>
          {[
            ["10", "₹5,000", "₹600"],
            ["25", "₹10,000", "₹1,300"],
            ["40", "₹20,000", "₹2,500"],
            ["60", "₹35,000", "₹4,000"],
            ["80", "₹60,000", "₹6,000"],
            ["100", "₹80,000", "₹8,000"],
            ["150", "₹1,30,000", "₹13,000"],
            ["200", "₹2,20,000", "₹20,000"],
            ["500", "₹5,00,000", "₹50,000"]
          ].map((row, i) => (
            <tr key={i}>
              {row.map((cell, j) => <td key={j}>{cell}</td>)}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    <p style={{ marginTop: '20px' }}>This incentive structure is built to appreciate agents who prioritize team expansion and sustain high engagement levels. It serves as an effective method for generating steady daily income as you broaden your Jai Club circle.</p>
  </section>
);

const InviteBonus = () => (
  <section className="container" id="Daily_Bonus_Invite_Members_Earn_More">
    <div className="gradient-banner">Daily Bonus – Invite Members & Earn More</div>
    <p>Broaden your network by inviting new participants and unlock meaningful daily bonus milestones. Higher recruitment and increased deposit activity directly translate into greater bonus potential for you.</p>
    <div style={{ textAlign: 'center', margin: '2rem 0' }}>
      <img src={inviteBonus} className="img-fluid" alt="Invite Bonus" style={{ borderRadius: '20px' }} />
    </div>
    <div className="gradient-banner" id="Invite_Bonus_Structure">Invite Bonus Structure</div>
    <div className="table-responsive">
      <table>
        <thead>
          <tr>
            <th>Invite Accounts</th>
            <th>Required Deposit</th>
            <th>Bonus Reward</th>
          </tr>
        </thead>
        <tbody>
          {[
            ["1 Person", "₹300", "₹38"],
            ["3 People", "₹300", "₹158"],
            ["10 People", "₹500", "₹580"],
            ["30 People", "₹800", "₹1,800"],
            ["50 People", "₹1,200", "₹2,800"],
            ["75 People", "₹1,200", "₹4,500"],
            ["100 People", "₹1,200", "₹5,800"],
            ["200 People", "₹1,200", "₹11,800"],
            ["500 People", "₹1,200", "₹29,000"],
            ["1000 People", "₹1,200", "₹58,000"],
            ["2000 People", "₹1,200", "₹1,18,000"],
            ["5000 People", "₹1,200", "₹3,00,000"]
          ].map((row, i) => (
            <tr key={i}>
              {row.map((cell, j) => <td key={j}>{cell}</td>)}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    <p style={{ marginTop: '20px' }}>This rewards framework acknowledges the efforts of active agents who consistently bring in new users and support them in meeting deposit goals. Strengthen your team and watch your daily earnings rise.</p>
  </section>
);

const Support = () => (
  <section className="container" id="Support">
    <div className="gradient-banner">Connecting with Jai Club Support</div>
    <p>To get in touch with the <strong>support team</strong>, you can use the built-in help features within the app or website. Just follow these straightforward steps:</p>

    <div className="gradient-banner">Guidelines to Contact Support</div>
    <p>Submit your inquiry</p>
    <ul style={{ listStyle: 'disc', paddingLeft: '20px' }}>
      <li style={{ marginBottom: '8px' }}>Launch the <strong>Jai Club app</strong> or access our desktop portal</li>
      <li style={{ marginBottom: '8px' }}>Navigate to the <strong>Help/Support</strong> area</li>
      <li style={{ marginBottom: '8px' }}>Select the support link to activate the <strong>live assistance or help center</strong></li>
      <li style={{ marginBottom: '8px' }}>Provide your <strong>official UID number</strong> for account verification</li>
      <li style={{ marginBottom: '8px' }}>You'll find two primary support paths:</li>
    </ul>

    <div style={{ textAlign: 'center', margin: '2rem 0' }}>
      <img src={supportSelfService} className="img-fluid" alt="Self Service Center" style={{ borderRadius: '4px' }} />
    </div>

    <ul style={{ listStyle: 'disc', paddingLeft: '20px' }}>
      <li style={{ marginBottom: '8px' }}><strong>Automated Self-Service Center</strong></li>
      <li style={{ marginBottom: '8px' }}><strong>Direct Agent Assistance</strong></li>
    </ul>

    <p style={{ marginTop: '20px' }}>Choose the category that best describes your concern.</p>
    <p>Provide the necessary details regarding your issue. After your submission is reviewed, check under [Question in progress] to track the status of your reported case.</p>

    <div style={{ textAlign: 'center', margin: '2rem 0' }}>
      <img src={customerCareRep} className="img-fluid" alt="Customer Care" style={{ borderRadius: '20px' }} />
    </div>
  </section>
);

const FAQ = () => (
  <section className="container" id="Jai_Club_FAQ">
    <div className="gradient-banner">Jai Club FAQ</div>
    <FAQAccordion />
  </section>
);

function App() {
  return (
    <div className="App" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <ScrollToTop />
      <Navbar />

      <Routes>
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/responsible-gaming" element={<ResponsibleGaming />} />
        <Route path="/" element={
          <main style={{ flex: 1, display: 'flex', flexDirection: 'column', paddingTop: '10px' }}>
            <header className="container" id="Jai_Club_Login" style={{ padding: '2rem 0' }}>
              <h1><a href="https://jaiclub0.club/" style={{ color: 'inherit', textDecoration: 'none' }}>Jai Club Login</a></h1>
              <p style={{ fontSize: '1.1rem' }}>
                At its core, <strong><a href="https://jaiclub0.club/" style={{ color: 'var(--text-blue)' }}>Jai Club</a> provides a highly secure gaming environment</strong> where members can engage with popular options like <strong>Wingo, K3, 5D, Poker, Slots, and Aviator</strong>. By leveraging your gaming skills, you can earn substantial rewards. With a quick <strong><a href="https://jaiclub0.club/" style={{ color: 'var(--text-blue)' }}>Jai Club login</a></strong>, you can explore various entertaining challenges and aim for exclusive prizes.
              </p>
            </header>

            <section className="container" id="Jai_Club_App">
              <div className="gradient-banner">Jai Club App</div>
              <div style={{ textAlign: 'center', margin: '2rem 0' }}>
                <img
                  src={appLogo}
                  className="img-fluid"
                  alt="Jai Club Logo"
                  style={{ borderRadius: '20px' }}
                />
              </div>
              <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                <a href="https://www.jaiclub41.com/#/register?invitationCode=57233103761" className="btn-primary">Register Download</a>
              </div>
              <p>
                This comprehensive resource is designed for anyone looking to master the <strong><a href="https://jaiclub0.club/" style={{ color: 'var(--text-blue)' }}>Jai Club login</a></strong> process, complete account registration, and perform the <strong>app download</strong>. Here, you'll find tutorials on <strong>platform features, earning structures, and secure withdrawal methods</strong> to ensure a seamless experience.
              </p>
            </section>

            <FeatureTable />
            <DetailedTOC />

            <section className="container" id="Why_Choose_Jai_Club">
              <div className="gradient-banner">Why Partner with Jai Club?</div>
              <p>
                <strong><a href="https://jaiclub0.club/" style={{ color: 'var(--text-blue)' }}>Jai Club</a> stands out as a leading digital gaming hub</strong>, offering a rich variety of interactive and prediction-style games, such as <strong>Wingo, K3, 5D, Slots, Plinko, Limbo, and Aviator</strong>.
              </p>
              <div style={{ textAlign: 'center', margin: '2rem 0' }}>
                <img
                  src={appInterface}
                  className="img-fluid"
                  alt="Jai Club App Interface"
                  style={{ borderRadius: '30px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}
                />
              </div>
              <h4 id="How_Jai_Club_Platform_Works">Platform Mechanics & Workflow</h4>
              <ul>
                <li>Establish your profile using an active phone number</li>
                <li>Verify your identity via secure OTP confirmation</li>
                <li>Transfer funds into your digital wallet safely</li>
                <li>Pick from hit titles like <strong>Colour Prediction, WinGo, K3, 5D, Slots, or Rummy</strong></li>
                <li>Submit your entry before the start of each round</li>
                <li>System-driven results are produced fairly and automatically</li>
                <li>Winnings are instantly added to your account balance</li>
                <li>Retrieve your funds efficiently once the withdrawal criteria are met</li>
              </ul>
            </section>

            <section className="container" id="How_to_Register_on_Jai_Club_Easy_Steps">
              <a href="https://www.jaiclub41.com/#/register?invitationCode=57233103761" style={{ textDecoration: 'none' }}>
                <div className="gradient-banner">Jai Club Signup Walkthrough</div>
              </a>
              <p>Launching your journey with <strong><a href="https://jaiclub0.club/" style={{ color: 'var(--text-blue)' }}>Jai Club</a></strong> is designed to be effortless and secure. Follow this simple walkthrough to set up your new account in minutes:</p>
              <div style={{ textAlign: 'center', margin: '2rem 0' }}>
                <img
                  src={registrationGuide}
                  className="img-fluid"
                  alt="Jai Club Registration"
                  style={{ borderRadius: '30px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}
                />
              </div>
              <ul>
                <li>Navigate to the official <a href="https://www.jaiclub41.com/#/register?invitationCode=57233103761" style={{ color: 'var(--text-blue)' }}>Jai Club registration portal</a> on any browser</li>
                <li>Input your primary mobile number to initiate account creation</li>
                <li>Generate a complex and robust password for account protection</li>
                <li>Enter the OTP received on your mobile device for verification</li>
                <li>Optionally include an invite code to activate special starter perks</li>
                <li>Submit the form and begin exploring the Jai Club library</li>
              </ul>
            </section>

            <section className="container" id="Jai_Club_Login_How_to_Sign_In">
              <h2>Accessing Your Account – <a href="https://jaiclub0.club/" style={{ color: 'inherit', textDecoration: 'none' }}>Jai Club Login</a></h2>
              <p>Accessing the <strong>Jai Club Lottery Game</strong> ecosystem is a straightforward process. If you already possess an account, simply use the following steps to get back into the action:</p>
              <div style={{ textAlign: 'center', margin: '2rem 0' }}>
                <img
                  src={loginGuide}
                  className="img-fluid"
                  alt="Jai Club Login"
                  style={{ borderRadius: '30px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}
                />
              </div>
              <ul>
                <li>Open the installed application or use the secure web address</li>
                <li>Choose the <strong>Login</strong> feature on the landing screen</li>
                <li>Provide your registered mobile credentials and password</li>
                <li>Tap <strong>Sign In</strong> to enter your Jai Club dashboard</li>
              </ul>
            </section>

            <section className="container" id="Jai_Club_App_Download_Installation_Guide">
              <div className="gradient-banner">Jai Club App Procurement & Setup</div>
              <p>Establishing the <strong>Jai Club app</strong> on your mobile device is a quick process. Since the platform uses an APK format for Android, ensure you retrieve the official file from a trusted source to maintain security and performance.</p>
              <div style={{ margin: '2rem 0' }}>
                <a href="https://jaiclub0.club/" className="btn-primary">Download Now</a>
              </div>
              <h3 id="Steps_to_Download_and_Install_Jai_Club_App" style={{ marginTop: '3rem' }}>Instructions for App Deployment</h3>
              <ul style={{ textAlign: 'left', display: 'inline-block', maxWidth: '600px' }}>
                <li>Head over to our official digital platform</li>
                <li>Choose the <strong>App Download</strong> or <strong>APK Installation</strong> link</li>
                <li>Allow the system to finish retrieving the Jai Club file</li>
                <li>Permit <strong>Installations from Unknown Sources</strong> in your OS settings</li>
                <li>Execute the APK file and select <strong>Install</strong> to proceed</li>
              </ul>
              <div style={{ textAlign: 'center', margin: '2rem 0' }}>
                <img
                  src={appDownload}
                  className="img-fluid"
                  alt="Jai Club App Download"
                  style={{ borderRadius: '30px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}
                />
              </div>
            </section>

            <GameCategories />

            <section className="container" id="How_to_Deposit_Money_in_Jai_Club">
              <div className="gradient-banner">Funding Your Jai Club Account</div>
              <p>Funding your <strong>Jai Club wallet</strong> is a secure and streamlined process, allowing you to focus on your favorite games without delay.</p>
              <div style={{ textAlign: 'center', margin: '2rem 0' }}>
                <img src={depositStep1} className="img-fluid" alt="Deposit" style={{ borderRadius: '20px' }} />
              </div>
              <div style={{ textAlign: 'center', margin: '2rem 0' }}>
                <img src={depositStep2} className="img-fluid" alt="Deposit Step 2" style={{ borderRadius: '20px' }} />
              </div>
            </section>

            <section className="container" id="How_to_Play_Wingo_Colour_Prediction_on_Jai_Club">
              <div className="gradient-banner">Mastering Wingo Colour Prediction</div>
              <div style={{ textAlign: 'center', margin: '2rem 0' }}>
                <img src={wingoGuide} className="img-fluid" alt="Wingo" style={{ borderRadius: '20px' }} />
              </div>
            </section>

            <SalarySystem />
            <InviteBonus />

            <section className="container" id="How_to_Withdraw_Money_from_Jai_Club">
              <div className="gradient-banner">Withdrawing Your Winnings</div>
              <p>Removing your earned funds from <strong>Jai Club</strong> is a protected, efficient, and user-friendly experience.</p>

              <div className="gradient-banner">Payout Procedure</div>

              <div style={{ marginBottom: '20px' }}>
                <p><strong>Step 1: Sign Into Your Profile</strong><br />
                  Login to your verified account via the Jai Club app or the official web portal.</p>

                <p><strong>Step 2: Enter the Wallet Area</strong><br />
                  Locate and select the <strong>Wallet</strong> or <strong>Withdraw</strong> command within your user dashboard.</p>

                <p><strong>Step 3: Pick Your Preferred Payout Channel</strong><br />
                  Select how you'd like to receive your funds:</p>
                <ul style={{ listStyle: 'disc', paddingLeft: '40px' }}>
                  <li>Local Bank Account</li>
                  <li>Linked UPI Address</li>
                </ul>

                <p><strong>Step 4: Specify the Transfer Amount</strong><br />
                  Input the precise sum you wish to transfer based on active platform thresholds.</p>

                <p><strong>Step 5: Finalize the Request</strong><br />
                  Confirm all details and submit the <strong>Withdrawal</strong> request to begin processing.</p>
              </div>

              <hr style={{ border: 'none', borderTop: '1px solid #ddd', margin: '30px 0' }} />

              <div style={{
                background: '#1e2235',
                color: '#fff',
                padding: '12px 20px',
                borderRadius: '8px',
                fontWeight: '700',
                fontSize: '18px',
                margin: '20px 0'
              }}>
                Payout Specifications
              </div>

              <ul style={{ listStyle: 'disc', paddingLeft: '20px' }}>
                <li style={{ marginBottom: '8px' }}><strong>Minimum Threshold:</strong> Usually begins at ₹100 (subject to change)</li>
                <li style={{ marginBottom: '8px' }}><strong>Upper Limits:</strong> Determined by status levels and platform policies</li>
                <li style={{ marginBottom: '8px' }}><strong>Expected Wait Time:</strong> Typically resolved within several hours</li>
                <li style={{ marginBottom: '8px' }}><strong>Daily Allowance:</strong> A specific number of daily requests may be enforced</li>
              </ul>

               <div className="gradient-banner" id="Jai_Club_Withdrawal_Earning_Proof">Engagement & Payout Verification</div>
              <p>The visual evidence provided above reflects authentic user engagement and is shared to offer clarity on platform dynamics. These payment confirmations demonstrate genuine withdrawals and account updates resulting from active participation.</p>
               <div className="table-responsive">
                <div style={{ textAlign: 'center', margin: '2rem 0' }}>
                  <img src={earningProof} className="img-fluid" alt="Earning Proof" style={{ borderRadius: '20px' }} />
                </div>
              </div>
            </section>

            <section className="container" id="Jai_Club_Alternatives">
              <div className="gradient-banner">Jai Club Alternatives</div>
              <p>If you're exploring environments comparable to <a href="https://jaiclub0.club/" style={{ color: 'var(--text-blue)', textDecoration: 'none' }}>Jai Club</a>, there are several reputable alternatives. These sites offer similar gaming formats, user interfaces, and varied entertainment categories for diverse preferences.</p>
              <ul style={{ listStyle: 'disc', paddingLeft: '20px' }}>
                <li style={{ marginBottom: '8px' }}><a href="https://jaiclub0.club/" style={{ color: 'var(--text-blue)', textDecoration: 'none' }}>Daman</a></li>
                <li style={{ marginBottom: '8px' }}><a href="https://jaiclub0.club/" style={{ color: 'var(--text-blue)', textDecoration: 'none' }}>13l</a></li>
              </ul>
            </section>

            <section className="container" id="How_to_Use_a_Jai_Club_Gift_Code">
              <div className="gradient-banner">Redeeming a Jai Club Reward Code</div>
              <p>Redeeming a <strong>gift code</strong> is an excellent way to access additional bonuses, promotional offers, and extra wallet credits on our platform.</p>
              <div style={{ textAlign: 'center', margin: '2rem 0' }}>
                <img src={giftCodePromo} className="img-fluid" alt="Gift Code" style={{ borderRadius: '20px' }} />
              </div>

              <div className="gradient-banner" id="Steps_to_Redeem_Jai_Club_Gift_Code">Code Redemption Steps</div>
              <ul style={{ listStyle: 'disc', paddingLeft: '20px', marginTop: '20px' }}>
                <li style={{ marginBottom: '8px' }}>Log in via your verified phone number credentials</li>
                <li style={{ marginBottom: '8px' }}>Select the <strong>Gift/Promo Code</strong> section in your portal</li>
                <li style={{ marginBottom: '8px' }}>Carefully input your active reward code</li>
                <li style={{ marginBottom: '8px' }}>Submit the code for instant verification</li>
                <li style={{ marginBottom: '8px' }}>Enjoy the rewards instantly credited to your wallet balance</li>
              </ul>
            </section>

            <Support />
            <FAQ />

            <section className="container" id="Jai_Club_Official_Verified_Website_Link">
              <div className="gradient-banner">Verified Portal Links for Jai Club</div>
              <p>Jai Club has emerged as a premier digital entertainment space, featuring lottery predictions, casino-style slots, and baccarat. Below are the official and verified Jai Club access links to ensure you connect with the platform securely.</p>

              <div className="gradient-banner" id="Official_Links_List">Trusted Domain Directory</div>
              <p style={{ marginTop: '20px' }}>Use the links below for safe access. View the complete <a href="https://jaiclub0.club/" style={{ color: 'var(--text-blue)' }}>Security List</a></p>

              <div className="table-responsive">
                <table style={{ marginTop: '20px' }}>
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Domain</th>
                      <th>Description</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ["1", "jaiclub00.com", "Main Official Domain", "Open"],
                      ["2", "jaiclub10.com", "Main Official Domain", "Visit"],
                      ["3", "jaiclub04.com", "Main Official Domain", "Visit"],
                      ["4", "jaiclub01.com", "Main Official Domain", "Visit"],
                      ["5", "jaiclub06.com", "Main Official Domain", "Visit"],
                      ["6", "jaiclub08.com", "Main Official Domain", "Visit"]
                    ].map((row, i) => (
                      <tr key={i}>
                        <td>{row[0]}</td>
                        <td>{row[1]}</td>
                        <td>{row[2]}</td>
                        <td><a href="https://jaiclub0.club/" style={{ color: 'var(--text-blue)' }}>{row[3]}</a></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            <section className="container" id="Responsible_Gaming_on_Jai_Club">
              <div className="gradient-banner">Safe Usage Habits on Jai Club</div>
              <p>Engaging with the <a href="https://jaiclub0.club/" style={{ color: 'var(--text-blue)', textDecoration: 'none' }}>Jai Club</a> ecosystem should always be about safe, controlled, and responsible fun. Striking a healthy balance between leisure and discipline is vital for every user.</p>

              <div style={{
                background: '#1e2235',
                color: '#fff',
                padding: '12px 20px',
                borderRadius: '8px',
                fontWeight: '700',
                fontSize: '18px',
                margin: '20px 0'
              }}>
                Guidelines for Balanced Play
              </div>

              <ul style={{ listStyle: 'disc', paddingLeft: '20px' }}>
                <li style={{ marginBottom: '10px' }}><strong>Set a Spending Limit:</strong> Decide a budget in advance and avoid exceeding it under any circumstances.</li>
                <li style={{ marginBottom: '10px' }}><strong>Control Your Playing Time:</strong> Do not spend long continuous hours on the platform. Take regular breaks to stay balanced.</li>
                <li style={{ marginBottom: '10px' }}><strong>Focus on Entertainment:</strong> Use Jai Club for fun and engagement rather than treating it as a guaranteed source of income.</li>
                <li style={{ marginBottom: '10px' }}><strong>Avoid Recovering Losses:</strong> Do not increase your bets in an attempt to recover previous losses, as it may lead to further risk.</li>
                <li style={{ marginBottom: '10px' }}><strong>Stay Mentally Aware:</strong> If you feel pressure, frustration, or stress while playing, it is best to stop immediately.</li>
                <li style={{ marginBottom: '10px' }}><strong>Protect Your Account:</strong> Keep your login credentials private and do not share them with anyone.</li>
                <li style={{ marginBottom: '10px' }}><strong>Age Restriction:</strong> Jai Club is strictly intended for users who are 18 years or older.</li>
              </ul>
            </section>

            <section className="container" id="Conclusion">
              <div className="gradient-banner">Conclusion</div>
              <p>
                <strong><a href="https://jaiclub0.club/" style={{ color: 'var(--text-blue)' }}>Jai Club</a></strong> provides a sophisticated and intuitive hub for dynamic gaming and prediction-based challenges. With its seamless signup, prompt payout system, and diverse gaming library, it delivers a top-tier experience for enthusiasts.
              </p>
              <p>By approaching the platform with mindfulness and self-regulation, users can ensure a consistently positive and managed gaming journey.</p>
            </section>

            <section className="container" style={{ textAlign: 'center', margin: '60px auto 40px' }}>
              <h3 style={{ fontSize: '24px', fontWeight: '700', color: '#333', marginBottom: '10px' }}>How useful was this post?</h3>
              <p style={{ color: '#666', marginBottom: '20px' }}>Click on a star to rate it!</p>
              <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', marginBottom: '15px' }}>
                {[1, 2, 3, 4, 5].map(star => (
                  <span key={star} style={{ fontSize: '38px', color: '#ffd700', cursor: 'pointer', filter: 'drop-shadow(0 2px 2px rgba(0,0,0,0.1))' }}>★</span>
                ))}
              </div>
              <p style={{ color: '#666', fontSize: '15px' }}>Average rating 4.9 / 5. Vote count: 287462</p>
            </section>

            <Footer />
          </main>
        } />
      </Routes>
    </div>
  );
}

export default App;
