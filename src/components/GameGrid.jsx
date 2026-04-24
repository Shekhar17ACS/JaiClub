import React from 'react';
import { motion } from 'framer-motion';

const games = [
  { name: 'Money Coming', img: 'https://jaiclub.games/wp-content/uploads/2026/01/Money-Coming.webp' },
  { name: 'Fortune Gems 2', img: 'https://jaiclub.games/wp-content/uploads/2026/01/Fortune-Gems-2.webp' },
  { name: 'Fortune Gems', img: 'https://jaiclub.games/wp-content/uploads/2026/01/Fortune-Gems.webp' },
  { name: 'Hot Spin', img: 'https://jaiclub.games/wp-content/uploads/2026/01/Hot-Spin.webp' },
  { name: 'Crazy 777', img: 'https://jaiclub.games/wp-content/uploads/2026/01/Crazy-777.webp' },
  { name: 'WildFire Wins', img: 'https://jaiclub.games/wp-content/uploads/2026/01/Wildfire-Wins.webp' },
];

const GameGrid = () => {
  return (
    <section id="games" style={{ background: 'rgba(0,0,0,0.2)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <h2 style={{ fontSize: '2.5rem' }}>Recommended <span className="gradient-text">Games</span></h2>
          <div className="title-underline" style={{ margin: '0.5rem auto' }}></div>
          <p style={{ color: 'var(--text-muted)', marginTop: '1rem' }}>Experience the most popular games on Jai Club</p>
        </div>
        
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))', 
          gap: '2rem' 
        }}>
          {games.map((game, index) => (
            <motion.div 
              key={index}
              whileHover={{ y: -10, scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300 }}
              style={{ 
                background: 'var(--bg-card)', 
                borderRadius: '15px', 
                overflow: 'hidden',
                boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
                cursor: 'pointer'
              }}
            >
              <img 
                src={game.img} 
                alt={game.name} 
                style={{ width: '100%', display: 'block' }}
              />
              <div style={{ padding: '1rem', textAlign: 'center' }}>
                <h4 style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>{game.name}</h4>
                <button style={{ 
                  background: 'rgba(255,255,255,0.1)', 
                  border: '1px solid rgba(255,255,255,0.1)',
                  color: 'white',
                  padding: '0.4rem 1rem',
                  borderRadius: '20px',
                  fontSize: '0.8rem'
                }}>
                  Play Now
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GameGrid;
