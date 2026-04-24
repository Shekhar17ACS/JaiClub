import { Link, useLocation } from 'react-router-dom';
import navbarLogo from '../assets/navbar_logo.png';

const Navbar = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <header style={{
      background: '#fff',
      boxShadow: '0 2px 5px rgba(0,0,0,0.05)',
      position: 'sticky',
      top: 0,
      zIndex: 1000,
      padding: '20px 0',
      borderBottom: '1px solid #f0f0f0'
    }}>
      <div className="container" style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <div className="site-logo">
          <Link to="/" style={{ display: 'block' }}>
            <img
              src={navbarLogo}
              alt="Jai Club Logo"
              style={{ height: '55px', width: 'auto' }}
            />
          </Link>
        </div>

        <nav style={{ display: 'flex', gap: '25px', alignItems: 'center' }}>
          <Link to="/"
            style={{ fontWeight: '500', color: currentPath === '/' ? '#1e73be' : '#333', fontSize: '1rem', textDecoration: 'none' }}>
            Home
          </Link>
          <Link to="/about-us"
            style={{ fontWeight: '500', color: currentPath === '/about-us' ? '#1e73be' : '#333', fontSize: '1rem', textDecoration: 'none' }}>
            About Us
          </Link>
          <Link to="/contact-us"
            style={{ fontWeight: '500', color: currentPath === '/contact-us' ? '#1e73be' : '#333', fontSize: '1rem', textDecoration: 'none' }}>
            Contact Us
          </Link>
          <Link to="/responsible-gaming"
            style={{ fontWeight: '500', color: currentPath === '/responsible-gaming' ? '#1e73be' : '#333', fontSize: '1rem', textDecoration: 'none' }}>
            Responsible Gaming
          </Link>

          <button style={{
            background: 'none',
            border: 'none',
            display: 'none',
            cursor: 'pointer'
          }}>
            <svg viewBox="0 0 512 512" width="24" height="24"><path d="M0 96c0-13.255 10.745-24 24-24h464c13.255 0 24 10.745 24 24s-10.745 24-24 24H24c-13.255 0-24-10.745-24-24zm0 160c0-13.255 10.745-24 24-24h464c13.255 0 24 10.745 24 24s-10.745 24-24 24H24c-13.255 0-24-10.745-24-24zm0 160c0-13.255 10.745-24 24-24h464c13.255 0 24 10.745 24 24s-10.745 24-24 24H24c-13.255 0-24-10.745-24-24z" /></svg>
          </button>
        </nav>
      </div>
      <style>{`
        @media (max-width: 768px) {
          nav a { display: none; }
          button { display: block !important; }
        }
      `}</style>
    </header>
  );
};

export default Navbar;
