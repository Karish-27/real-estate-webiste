import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { useAuth } from '../../contexts/AuthContext';

const NestLogo: React.FC = () => (
  <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6 18L18 7L30 18V30H22V23H14V30H6V18Z" fill="none" stroke="#1B3A5C" strokeWidth="1.75" strokeLinejoin="round"/>
    <circle cx="18" cy="7" r="2.5" fill="#1B3A5C"/>
    <circle cx="6" cy="18" r="2" fill="#1B3A5C" opacity="0.5"/>
    <circle cx="30" cy="18" r="2" fill="#1B3A5C" opacity="0.5"/>
    <line x1="18" y1="7" x2="6" y2="18" stroke="#1B3A5C" strokeWidth="0.5" opacity="0.3"/>
    <line x1="18" y1="7" x2="30" y2="18" stroke="#1B3A5C" strokeWidth="0.5" opacity="0.3"/>
  </svg>
);

const Navbar: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { user, isAuthenticated, logout } = useAuth();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, 'change', (y) => setScrolled(y > 60));

  const isActive = (path: string) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  const handleLogout = () => {
    logout();
    closeMobileMenu();
    navigate('/');
  };

  const navLinks = [
    { path: '/properties', label: 'Properties' },
    { path: '/ai-hub',     label: 'Insights' },
    { path: '/about',      label: 'About' },
    { path: '/contact',    label: 'Contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0,   opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="fixed top-0 left-0 right-0 z-[1000] transition-all duration-300"
      style={{
        background: scrolled ? 'rgba(255,255,255,0.96)' : '#FFFFFF',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(16px)' : 'none',
        borderBottom: '1px solid #E8E6E0',
        boxShadow: scrolled ? '0 2px 20px rgba(0,0,0,0.07)' : 'none',
      }}
    >
      <div className="max-w-[1280px] mx-auto px-8 flex items-center justify-between h-[70px]">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-2.5" onClick={closeMobileMenu}>
          <NestLogo />
          <span
            className="font-playfair text-2xl tracking-tight"
            style={{ color: '#1A1A1A', fontWeight: 600 }}
          >
            Nest<span style={{ color: '#1B3A5C' }}>Prime</span>
          </span>
        </Link>

        {/* Desktop nav links */}
        <div className="hidden md:flex items-center gap-9">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.path}
              className="relative text-sm font-medium transition-colors duration-200 group"
              style={{ color: isActive(link.path) ? '#1B3A5C' : '#5A5A5A' }}
            >
              {link.label}
              <span
                className="absolute -bottom-0.5 left-0 h-[2px] rounded-full transition-all duration-300"
                style={{
                  width: isActive(link.path) ? '100%' : '0%',
                  background: '#1B3A5C',
                }}
              />
              {!isActive(link.path) && (
                <span
                  className="absolute -bottom-0.5 left-0 h-[2px] rounded-full bg-[#1B3A5C] w-0 group-hover:w-full transition-all duration-300"
                />
              )}
            </Link>
          ))}
        </div>

        {/* Desktop auth / CTA */}
        <div className="hidden md:flex items-center gap-4">
          {isAuthenticated && user ? (
            <>
              <span className="text-sm" style={{ color: '#5A5A5A' }}>
                Hi, <span style={{ color: '#1A1A1A', fontWeight: 600 }}>{user.name}</span>
              </span>
              <button
                onClick={handleLogout}
                className="text-sm px-5 py-2 rounded-md border transition-all duration-200"
                style={{
                  border: '1.5px solid #1B3A5C',
                  color: '#1B3A5C',
                  background: 'transparent',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.background = '#1B3A5C';
                  (e.currentTarget as HTMLButtonElement).style.color = '#FFFFFF';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.background = 'transparent';
                  (e.currentTarget as HTMLButtonElement).style.color = '#1B3A5C';
                }}
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                to="/signin"
                className="text-sm font-medium transition-colors duration-200"
                style={{ color: '#5A5A5A' }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = '#1B3A5C'; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = '#5A5A5A'; }}
              >
                Sign In
              </Link>
              <Link
                to="/signup"
                className="btn-shimmer text-sm px-5 py-2.5 rounded-md font-medium transition-all duration-200"
                style={{
                  background: '#1B3A5C',
                  color: '#FFFFFF',
                }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = '#142D48'; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = '#1B3A5C'; }}
              >
                Get Started
              </Link>
            </>
          )}
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2 rounded-md transition-colors"
          style={{ color: '#1A1A1A' }}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <span className="font-material-icons text-2xl">
            {isMobileMenuOpen ? 'close' : 'menu'}
          </span>
        </button>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
          className="md:hidden absolute top-[70px] left-0 w-full py-6 px-8 flex flex-col gap-5"
          style={{
            background: '#FFFFFF',
            borderBottom: '1px solid #E8E6E0',
            boxShadow: '0 8px 24px rgba(0,0,0,0.08)',
          }}
        >
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.path}
              className="text-base font-medium py-1 transition-colors"
              style={{ color: isActive(link.path) ? '#1B3A5C' : '#3D3D3D' }}
              onClick={closeMobileMenu}
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-4 border-t flex flex-col gap-4" style={{ borderColor: '#E8E6E0' }}>
            {isAuthenticated && user ? (
              <>
                <span className="text-sm" style={{ color: '#7A7872' }}>
                  Signed in as <span style={{ color: '#1A1A1A', fontWeight: 600 }}>{user.name}</span>
                </span>
                <button
                  onClick={handleLogout}
                  className="text-sm py-3 rounded-md text-center border font-medium transition-colors"
                  style={{ border: '1.5px solid #1B3A5C', color: '#1B3A5C' }}
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/signin"
                  className="text-sm py-2 font-medium transition-colors"
                  style={{ color: '#5A5A5A' }}
                  onClick={closeMobileMenu}
                >
                  Sign In
                </Link>
                <Link
                  to="/signup"
                  className="text-sm py-3 rounded-md text-center font-medium transition-colors"
                  style={{ background: '#1B3A5C', color: '#FFFFFF' }}
                  onClick={closeMobileMenu}
                >
                  Get Started
                </Link>
              </>
            )}
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
