import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail } from 'lucide-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faBehance, faDribbble, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const SOCIAL_LINKS = [
  { icon: faGithub,   href: 'https://github.com/Karish-27',   label: 'GitHub' },
  { icon: faBehance,  href: 'https://www.behance.net/krutikp',  label: 'Behance' },
  { icon: faDribbble, href: 'https://dribbble.com/Krutik_Parmar', label: 'Dribbble' },
  { icon: faLinkedin, href: 'https://www.linkedin.com/in/karishma-kumavat-480891241', label: 'LinkedIn' },
];

const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setEmail('');
    setTimeout(() => setSubscribed(false), 4000);
  };

  return (
    <footer style={{ background: '#1B3A5C' }}>

      {/* Upper footer */}
      <div className="max-w-[1280px] mx-auto px-4 md:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-14">

          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-2.5 mb-5">
              <svg width="28" height="28" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 18L18 7L30 18V30H22V23H14V30H6V18Z" fill="none" stroke="#FFFFFF" strokeWidth="1.75" strokeLinejoin="round"/>
                <circle cx="18" cy="7" r="2.5" fill="#FFFFFF"/>
                <circle cx="6"  cy="18" r="2"  fill="#FFFFFF" opacity="0.5"/>
                <circle cx="30" cy="18" r="2"  fill="#FFFFFF" opacity="0.5"/>
              </svg>
              <span className="font-playfair text-xl font-semibold" style={{ color: '#FFFFFF' }}>
                NestPrime
              </span>
            </Link>
            <p className="text-sm leading-7 mb-6" style={{ color: 'rgba(255,255,255,0.6)', fontWeight: 300 }}>
              Your trusted partner for buying, selling, and investing in premium residential
              and commercial real estate across India.
            </p>
            <div className="flex gap-2">
              {SOCIAL_LINKS.map(({ icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-200"
                  style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.15)' }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.2)';
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.1)';
                  }}
                >
                  <FontAwesomeIcon icon={icon} style={{ color: 'rgba(255,255,255,0.8)', width: 15, height: 15 }} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold mb-5 uppercase tracking-widest" style={{ color: 'rgba(255,255,255,0.45)', fontSize: 11 }}>Quick Links</h4>
            <ul className="flex flex-col gap-3">
              {[
                { to: '/properties', label: 'Browse Properties' },
                { to: '/ai-hub',     label: 'Market Insights' },
                { to: '/about',      label: 'About Us' },
                { to: '/contact',    label: 'Contact' },
                // { to: '#',           label: 'Careers' },
              ].map(({ to, label }) => (
                <li key={label}>
                  <Link
                    to={to}
                    className="text-sm transition-all duration-200"
                    style={{ color: 'rgba(255,255,255,0.65)' }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = '#FFFFFF'; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.65)'; }}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold mb-5 uppercase tracking-widest" style={{ color: 'rgba(255,255,255,0.45)', fontSize: 11 }}>Contact Us</h4>
            <ul className="flex flex-col gap-4">
              <li>
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-sm leading-6 transition-colors duration-200"
                  style={{ color: 'rgba(255,255,255,0.65)' }}
                >
                  <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: 'rgba(255,255,255,0.5)' }} />
                  <span>12, Akshar Avenue,<br />Race Course Road, Vadodara</span>
                </a>
              </li>
              <li>
                <a href="tel:+919876543210" className="flex items-center gap-3 text-sm transition-colors duration-200" style={{ color: 'rgba(255,255,255,0.65)' }}>
                  <Phone className="w-4 h-4 flex-shrink-0" style={{ color: 'rgba(255,255,255,0.5)' }} />
                  +91 9512490729
                </a>
              </li>
              <li>
                <a href="mailto:hello@nestprime.in" className="flex items-center gap-3 text-sm transition-colors duration-200" style={{ color: 'rgba(255,255,255,0.65)' }}>
                  <Mail className="w-4 h-4 flex-shrink-0" style={{ color: 'rgba(255,255,255,0.5)' }} />
                 karishmakumavat27@gmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-sm font-semibold mb-5 uppercase tracking-widest" style={{ color: 'rgba(255,255,255,0.45)', fontSize: 11 }}>Stay Updated</h4>
            <p className="text-sm leading-6 mb-5" style={{ color: 'rgba(255,255,255,0.6)', fontWeight: 300 }}>
              Market trends, new listings, and expert insights - delivered to your inbox.
            </p>
            {subscribed ? (
              <div
                className="flex flex-col items-center justify-center gap-2 py-5 px-4 rounded-lg text-center"
                style={{ background: 'rgba(34,197,94,0.12)', border: '1px solid rgba(34,197,94,0.3)' }}
              >
                <div className="w-9 h-9 rounded-full flex items-center justify-center mb-1" style={{ background: 'rgba(34,197,94,0.2)' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#22C55E" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                </div>
                <p className="text-sm font-semibold" style={{ color: '#22C55E' }}>You're subscribed!</p>
                <p className="text-xs" style={{ color: 'rgba(255,255,255,0.5)' }}>Thanks for joining. Check your inbox soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  required
                  className="w-full text-sm px-4 py-3 rounded-lg outline-none transition-colors duration-200"
                  style={{
                    background: 'rgba(255,255,255,0.1)',
                    border:     '1px solid rgba(255,255,255,0.2)',
                    color:      '#FFFFFF',
                  }}
                  onFocus={(e) => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.5)'; }}
                  onBlur={(e)  => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.2)'; }}
                />
                <button
                  type="submit"
                  className="w-full text-sm py-3 rounded-lg font-semibold transition-all duration-200"
                  style={{ background: '#B5572B', color: '#FFFFFF' }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = '#9E4A22'; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = '#B5572B'; }}
                >
                  Subscribe
                </button>
              </form>
            )}
            <p className="text-xs mt-3" style={{ color: 'rgba(255,255,255,0.35)' }}>No spam. Unsubscribe anytime.</p>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8"
          style={{ borderTop: '1px solid rgba(255,255,255,0.12)' }}
        >
          <p className="text-xs text-center md:text-left" style={{ color: 'rgba(255,255,255,0.35)' }}>
            © 2025 NestPrime Realty Pvt. Ltd. · All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            {['Privacy', 'Terms', 'Contact', 'Careers'].map((itemLabel) => (
              <Link
                key={itemLabel}
                to={itemLabel === 'Contact' ? '/contact' : `/${itemLabel.toLowerCase()}`}
                className="text-xs transition-colors duration-200"
                style={{ color: 'rgba(255,255,255,0.4)' }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = '#FFFFFF'; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.4)'; }}
              >
                {itemLabel}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
