import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail } from 'lucide-react';

const NestLogo: React.FC = () => (
  <svg width="28" height="28" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6 18L18 7L30 18V30H22V23H14V30H6V18Z" fill="none" stroke="#1B3A5C" strokeWidth="1.75" strokeLinejoin="round"/>
    <circle cx="18" cy="7" r="2.5" fill="#1B3A5C"/>
    <circle cx="6"  cy="18" r="2"  fill="#1B3A5C" opacity="0.5"/>
    <circle cx="30" cy="18" r="2"  fill="#1B3A5C" opacity="0.5"/>
  </svg>
);

const IconFacebook  = () => <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>;
const IconX         = () => <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>;
const IconInstagram = () => <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>;
const IconLinkedIn  = () => <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>;
const IconYouTube   = () => <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="white"/></svg>;

const SOCIAL_LINKS = [
  { Icon: IconFacebook,  href: 'https://facebook.com',  label: 'Facebook' },
  { Icon: IconX,         href: 'https://twitter.com',   label: 'X (Twitter)' },
  { Icon: IconInstagram, href: 'https://instagram.com', label: 'Instagram' },
  { Icon: IconLinkedIn,  href: 'https://linkedin.com',  label: 'LinkedIn' },
  { Icon: IconYouTube,   href: 'https://youtube.com',   label: 'YouTube' },
];

const Footer: React.FC = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setEmail('');
  };

  return (
    <footer style={{ background: '#1B3A5C' }}>

      {/* Upper footer */}
      <div className="max-w-[1280px] mx-auto px-8 py-16">
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
              {SOCIAL_LINKS.map(({ Icon, href, label }) => (
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
                  <span style={{ color: 'rgba(255,255,255,0.8)' }}><Icon /></span>
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
                { to: '#',           label: 'Careers' },
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
                  <span>502, Devpath Building,<br />Ashram Road, Ahmedabad</span>
                </a>
              </li>
              <li>
                <a href="tel:+919876543210" className="flex items-center gap-3 text-sm transition-colors duration-200" style={{ color: 'rgba(255,255,255,0.65)' }}>
                  <Phone className="w-4 h-4 flex-shrink-0" style={{ color: 'rgba(255,255,255,0.5)' }} />
                  +91 98765 43210
                </a>
              </li>
              <li>
                <a href="mailto:hello@nestprime.in" className="flex items-center gap-3 text-sm transition-colors duration-200" style={{ color: 'rgba(255,255,255,0.65)' }}>
                  <Mail className="w-4 h-4 flex-shrink-0" style={{ color: 'rgba(255,255,255,0.5)' }} />
                  hello@nestprime.in
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
            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                required
                className="w-full text-sm px-4 py-3 rounded-lg outline-none transition-colors duration-200"
                style={{
                  background:  'rgba(255,255,255,0.1)',
                  border:      '1px solid rgba(255,255,255,0.2)',
                  color:       '#FFFFFF',
                }}
                onFocus={(e)  => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.5)'; }}
                onBlur={(e)   => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.2)'; }}
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
