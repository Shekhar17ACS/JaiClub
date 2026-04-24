import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import navbarLogo from '../assets/navbar_logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const currentPath = location.pathname;

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about-us' },
    { name: 'Contact Us', path: '/contact-us' },
    { name: 'Responsible Gaming', path: '/responsible-gaming' }
  ];

  return (
    <header style={{
      background: '#fff',
      boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
      position: 'sticky',
      top: 0,
      zIndex: 1000,
      borderBottom: '1px solid #f0f0f0'
    }}>
      <div className="container" style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '70px',
        position: 'relative'
      }}>
        <div className="site-logo">
          <Link to="/" onClick={() => setIsOpen(false)}>
            <img
              src={navbarLogo}
              alt="Jai Club Logo"
              style={{ height: '45px', width: 'auto' }}
            />
          </Link>
        </div>

        {/* Desktop Nav */}
        <nav className="desktop-nav">
          {navLinks.map((link) => (
            <Link 
              key={link.path}
              to={link.path}
              style={{ 
                fontWeight: '600', 
                color: currentPath === link.path ? '#1e73be' : '#444', 
                fontSize: '0.95rem', 
                textDecoration: 'none',
                marginLeft: '25px',
                transition: 'color 0.2s'
              }}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Mobile Toggle Button */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: '5px',
            display: 'none',
            zIndex: 1001
          }}
          className="mobile-toggle"
        >
          {isOpen ? (
            <svg viewBox="0 0 24 24" width="28" height="28" fill="#333"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg>
          ) : (
            <svg viewBox="0 0 24 24" width="28" height="28" fill="#333"><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/></svg>
          )}
        </button>

        {/* Mobile Nav Overlay */}
        <div 
          className={`mobile-nav-overlay ${isOpen ? 'active' : ''}`}
          style={{
            position: 'absolute',
            top: '70px',
            left: 0,
            width: '100%',
            background: '#fff',
            padding: '20px 0',
            boxShadow: '0 10px 20px rgba(0,0,0,0.1)',
            display: 'none',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '20px',
            zIndex: 1000
          }}
        >
          {navLinks.map((link) => (
            <Link 
              key={link.path}
              to={link.path}
              onClick={() => setIsOpen(false)}
              style={{ 
                fontWeight: '600', 
                color: currentPath === link.path ? '#1e73be' : '#444', 
                fontSize: '1.1rem', 
                textDecoration: 'none',
                width: '100%',
                textAlign: 'center',
                padding: '10px 0'
              }}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none; }
          .mobile-toggle { display: block !important; }
          .mobile-nav-overlay.active { display: flex !important; }
        }
      `}</style>
    </header>
  );
};

export default Navbar;
