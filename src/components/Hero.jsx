import React from 'react';
import { motion } from 'framer-motion';
import navbarLogo from '../assets/navbar_logo.png';

const Hero = () => {
  return (
    <section id="hero" style={{ paddingTop: '2rem', paddingBottom: '2rem', background: '#fff' }}>
      <div className="container">
        <h1 style={{ 
          fontSize: 'clamp(2rem, 8vw, 3.5rem)', 
          color: '#333', 
          marginBottom: '1.5rem',
          fontWeight: '500' 
        }}>
          Jai Club Login
        </h1>
        
        <p style={{ 
          fontSize: '1rem', 
          lineHeight: '1.6', 
          color: '#444',
          marginBottom: '2rem'
        }}>
          Experience the ultimate online gaming destination at <a href="https://jaiclub0.club/" style={{ color: '#2196f3', fontWeight: 'bold' }}>Jai Club</a>, a secure and reliable platform where you can enjoy a wide range of popular titles like <strong>Wingo, K3, 5D, Poker, Slots, and Aviator</strong>. By participating in these skill-based games, users can earn impressive real-world rewards. Simply perform a <a href="https://www.jaiclub41.com/#/register?invitationCode=57233103761" style={{ color: '#2196f3', textDecoration: 'underline' }}>Jai Club login</a> to start testing your luck and strategic skills while unlocking exciting prizes and bonuses.
        </p>

        <a href="https://www.jaiclub41.com/#/register?invitationCode=57233103761" style={{ textDecoration: 'none' }}>
          <div style={{
            background: 'linear-gradient(90deg, #ff758c 0%, #70a1ff 100%)',
            padding: '1rem',
            borderRadius: '10px',
            textAlign: 'center',
            color: 'white',
            fontSize: '1.5rem',
            fontWeight: 'bold',
            cursor: 'pointer',
            marginBottom: '2rem',
            boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            Jai Club App
          </div>
        </a>

        <div style={{ textAlign: 'center', marginTop: '1rem' }}>
          <img 
            src={navbarLogo} 
            className="img-fluid"
            alt="Big Jai Club Logo" 
            style={{ maxWidth: '400px' }}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
