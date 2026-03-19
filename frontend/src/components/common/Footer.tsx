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

const IconGitHub   = () => <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z"/></svg>;
const IconBehance  = () => <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M7.5 11.5c.828 0 1.5-.672 1.5-1.5S8.328 8.5 7.5 8.5H4v3h3.5zm.5 2H4v3.5h4c.828 0 1.5-.672 1.5-1.5v-.5c0-.828-.672-1.5-1.5-1.5zM0 6h11.5c2.485 0 4.5 2.015 4.5 4.5 0 1.38-.622 2.614-1.6 3.45C15.47 14.82 16 16.09 16 17.5c0 2.485-2.015 4.5-4.5 4.5H0V6zm15.5 2.5h6v1h-6v-1zm.75 4c-.414 0-.75.336-.75.75h5c0-1.519-1.231-2.75-2.75-2.75-1.519 0-2.75 1.231-2.75 2.75 0 1.519 1.231 2.75 2.75 2.75.88 0 1.661-.413 2.154-1.053l-.898-.523A1.745 1.745 0 0 1 18.5 15c-.698 0-1.297-.41-1.582-1h4.064A2.745 2.745 0 0 0 21 13.25c0-1.519-1.231-2.75-2.75-2.75z"/></svg>;
const IconDribbble = () => <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm6.605 4.61a8.502 8.502 0 0 1 1.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 0 0-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0 1 12 3.475zm-3.633.803a53.896 53.896 0 0 1 3.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 0 1 4.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 0 1-2.19-5.705zM12 20.547a8.482 8.482 0 0 1-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.32 35.32 0 0 1 1.823 6.475 8.4 8.4 0 0 1-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 0 1-3.655 5.715z"/></svg>;
const IconLinkedIn = () => <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>;

const SOCIAL_LINKS = [
  { Icon: IconGitHub,   href: 'https://github.com/Karish-27',   label: 'GitHub' },
  { Icon: IconBehance,  href: 'https://www.behance.net/krutikp',  label: 'Behance' },
  { Icon: IconDribbble, href: 'https://dribbble.com/Krutik_Parmar', label: 'Dribbble' },
  { Icon: IconLinkedIn, href: 'https://www.linkedin.com/in/karishma-kumavat-480891241', label: 'LinkedIn' },
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
                  <span>14, Shapath Complex,<br />S.G. Highway, Ahmedabad</span>
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
