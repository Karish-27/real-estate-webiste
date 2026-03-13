import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

interface Property {
  name: string;
  location: string;
  city: string;
  price: string;
  beds: number;
  baths: number;
  sqft: string;
  badge: string;
  type: string;
  Illustration: React.FC;
}

/* ── Daytime Ahmedabad apartment illustration ── */
const AhmedabadIllustration: React.FC = () => (
  <svg viewBox="0 0 400 220" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }}>
    <defs>
      <linearGradient id="skya" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#DDEEF8"/><stop offset="100%" stopColor="#EEF6FB"/>
      </linearGradient>
    </defs>
    <rect width="400" height="220" fill="url(#skya)"/>
    <ellipse cx="60" cy="38" rx="36" ry="11" fill="white" opacity="0.85"/>
    <ellipse cx="88" cy="32" rx="26" ry="9"  fill="white" opacity="0.9"/>
    <rect x="100" y="70"  width="200" height="150" fill="#F0EDE6"/>
    <rect x="100" y="70"  width="200" height="150" fill="none" stroke="#D8D4CC" strokeWidth="0.75"/>
    <rect x="92"  y="62"  width="216" height="12"  fill="#E5E0D8"/>
    <rect x="115" y="85"  width="28" height="20" fill="#C2DAF0" rx="1.5"/>
    <rect x="153" y="85"  width="28" height="20" fill="#CAE0F5" rx="1.5"/>
    <rect x="191" y="85"  width="28" height="20" fill="#BDDAF0" rx="1.5"/>
    <rect x="229" y="85"  width="28" height="20" fill="#C5DCF2" rx="1.5"/>
    <rect x="267" y="85"  width="28" height="20" fill="#C0D8F0" rx="1.5"/>
    <rect x="115" y="118" width="28" height="20" fill="#CCE0F5" rx="1.5"/>
    <rect x="153" y="118" width="28" height="20" fill="#C0D9F0" rx="1.5"/>
    <rect x="191" y="118" width="28" height="20" fill="#C8DCF2" rx="1.5"/>
    <rect x="267" y="118" width="28" height="20" fill="#C5DAF0" rx="1.5"/>
    <rect x="115" y="150" width="28" height="20" fill="#CADef5" rx="1.5"/>
    <rect x="229" y="150" width="28" height="20" fill="#C2D8F0" rx="1.5"/>
    <rect x="267" y="150" width="28" height="20" fill="#CCE0F5" rx="1.5"/>
    <rect x="170" y="182" width="60" height="38" fill="#B8D4EC" rx="3"/>
    <rect x="170" y="182" width="60" height="38" fill="none" stroke="#A5C8E5" strokeWidth="0.75" rx="3"/>
    <rect x="0"   y="210" width="400" height="10" fill="#E0DDD5"/>
    <ellipse cx="88"  cy="210" rx="20" ry="25" fill="#7EAC6E" opacity="0.65"/>
    <ellipse cx="312" cy="208" rx="18" ry="23" fill="#7EAC6E" opacity="0.65"/>
  </svg>
);

/* ── Daytime Bangalore villa illustration ── */
const BangaloreIllustration: React.FC = () => (
  <svg viewBox="0 0 400 220" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }}>
    <defs>
      <linearGradient id="skyb" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#E0EDF8"/><stop offset="100%" stopColor="#EDF5FA"/>
      </linearGradient>
    </defs>
    <rect width="400" height="220" fill="url(#skyb)"/>
    <ellipse cx="300" cy="35" rx="40" ry="12" fill="white" opacity="0.8"/>
    <ellipse cx="335" cy="28" rx="28" ry="10" fill="white" opacity="0.85"/>
    {/* Villa */}
    <rect x="80"  y="110" width="240" height="110" fill="#F4F0E8"/>
    <rect x="80"  y="110" width="240" height="110" fill="none" stroke="#D8D4CC" strokeWidth="0.75"/>
    <polygon points="80,110 200,55 320,110" fill="#E8E2D8"/>
    <polygon points="80,110 200,55 320,110" fill="none" stroke="#D2CBC0" strokeWidth="0.75"/>
    <rect x="85"  y="125" width="70"  height="95"  fill="#EAE7DF" stroke="#D5D1C9" strokeWidth="0.5"/>
    <rect x="245" y="125" width="70"  height="95"  fill="#EAE7DF" stroke="#D5D1C9" strokeWidth="0.5"/>
    {/* Windows */}
    <rect x="96"  y="135" width="22" height="18" fill="#C0D8F0" rx="1"/>
    <rect x="126" y="135" width="22" height="18" fill="#CAE0F5" rx="1"/>
    <rect x="256" y="135" width="22" height="18" fill="#C5DCF2" rx="1"/>
    <rect x="286" y="135" width="22" height="18" fill="#BDDAF0" rx="1"/>
    {/* Door */}
    <rect x="172" y="162" width="56" height="58" fill="#C2D8EE" rx="3"/>
    <rect x="172" y="162" width="56" height="58" fill="none" stroke="#A8C8E2" strokeWidth="0.75" rx="3"/>
    <circle cx="200" cy="193" r="3" fill="#8AAEC5"/>
    {/* Greenery */}
    <ellipse cx="50"  cy="210" rx="30" ry="38" fill="#74A464" opacity="0.7"/>
    <ellipse cx="350" cy="208" rx="28" ry="36" fill="#74A464" opacity="0.7"/>
    <rect x="0"  y="215" width="400" height="5" fill="#D8D4C8"/>
  </svg>
);

/* ── Daytime Mumbai high-rise illustration ── */
const MumbaiIllustration: React.FC = () => (
  <svg viewBox="0 0 400 220" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }}>
    <defs>
      <linearGradient id="skym" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#DAEAF8"/><stop offset="100%" stopColor="#EBF4FA"/>
      </linearGradient>
    </defs>
    <rect width="400" height="220" fill="url(#skym)"/>
    <ellipse cx="140" cy="30" rx="44" ry="13" fill="white" opacity="0.8"/>
    <ellipse cx="170" cy="22" rx="32" ry="11" fill="white" opacity="0.9"/>
    {/* Tall tower */}
    <rect x="155" y="18"  width="90"  height="202" fill="#EDEAE2"/>
    <rect x="155" y="18"  width="90"  height="202" fill="none" stroke="#D5D1C9" strokeWidth="0.75"/>
    <rect x="148" y="12"  width="104" height="10"  fill="#E3DFD6"/>
    {/* Windows */}
    {[28, 52, 76, 100, 124, 148, 172].map((y, ri) => (
      [163, 189, 215].map((x) => (
        <rect key={`${ri}-${x}`} x={x} y={y} width="18" height="14" fill="#C0D7F0" rx="1" opacity="0.85"/>
      ))
    ))}
    {/* Side buildings */}
    <rect x="30"  y="88"  width="110" height="132" fill="#F0EDE5"/>
    <rect x="30"  y="88"  width="110" height="132" fill="none" stroke="#D8D4CC" strokeWidth="0.6"/>
    <rect x="260" y="70"  width="115" height="150" fill="#EEEBE3"/>
    <rect x="260" y="70"  width="115" height="150" fill="none" stroke="#D8D4CC" strokeWidth="0.6"/>
    {/* Side windows */}
    <rect x="40"  y="100" width="16" height="12" fill="#C8DEF2" rx="1"/>
    <rect x="62"  y="100" width="16" height="12" fill="#BDDAF0" rx="1"/>
    <rect x="84"  y="100" width="16" height="12" fill="#C5DCF2" rx="1"/>
    <rect x="270" y="84"  width="16" height="12" fill="#C2DAF0" rx="1"/>
    <rect x="292" y="84"  width="16" height="12" fill="#CCE0F5" rx="1"/>
    <rect x="314" y="84"  width="16" height="12" fill="#C0D8F0" rx="1"/>
    <rect x="0" y="215" width="400" height="5" fill="#D8D5CC"/>
  </svg>
);

const PROPERTIES: Property[] = [
  {
    name: 'The Meridian, Apt 14B',
    location: 'Ashram Road',
    city: 'Ahmedabad, GJ',
    price: '₹2.8 Cr',
    beds: 3, baths: 3, sqft: '2,840',
    badge: 'Ready to Move',
    type: '3 BHK Apartment',
    Illustration: AhmedabadIllustration,
  },
  {
    name: 'Greenview Villa, Phase II',
    location: 'Whitefield',
    city: 'Bangalore, KA',
    price: '₹4.5 Cr',
    beds: 4, baths: 4, sqft: '3,200',
    badge: 'Under Construction',
    type: '4 BHK Villa',
    Illustration: BangaloreIllustration,
  },
  {
    name: 'Skyline Tower, 28F',
    location: 'Lower Parel',
    city: 'Mumbai, MH',
    price: '₹7.2 Cr',
    beds: 3, baths: 3, sqft: '1,950',
    badge: 'New Launch',
    type: '3 BHK High-Rise',
    Illustration: MumbaiIllustration,
  },
];

const BADGE_COLORS: Record<string, { bg: string; color: string }> = {
  'Ready to Move':       { bg: 'rgba(34,197,94,0.12)',  color: '#15803D' },
  'Under Construction':  { bg: 'rgba(234,179,8,0.12)',  color: '#92400E' },
  'New Launch':          { bg: 'rgba(27,58,92,0.1)',    color: '#1B3A5C' },
};

const PropertyCard: React.FC<{ property: Property; delay: number }> = ({ property, delay }) => {
  const [hovered, setHovered] = useState(false);
  const { Illustration } = property;
  const badgeStyle = BADGE_COLORS[property.badge] || BADGE_COLORS['New Launch'];

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.65, delay, ease: 'easeOut' }}
      className="rounded-2xl overflow-hidden cursor-pointer"
      style={{
        background: '#FFFFFF',
        border:     hovered ? '1px solid #1B3A5C' : '1px solid #E8E6E0',
        transform:  hovered ? 'translateY(-6px)' : 'translateY(0)',
        boxShadow:  hovered
          ? '0 16px 48px rgba(27,58,92,0.14)'
          : '0 2px 12px rgba(0,0,0,0.05)',
        transition: 'all 0.35s cubic-bezier(0.4,0,0.2,1)',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative" style={{ height: 220, background: '#F0EDF8' }}>
        <Illustration />

        {/* Hover overlay */}
        <div
          className="absolute inset-0 flex items-center justify-center transition-opacity duration-300"
          style={{ background: 'rgba(27,58,92,0.55)', opacity: hovered ? 1 : 0 }}
        >
          <Link
            to="/properties"
            className="px-6 py-3 rounded-lg text-sm font-semibold"
            style={{
              background:  '#FFFFFF',
              color:       '#1B3A5C',
              transform:   hovered ? 'translateY(0)' : 'translateY(10px)',
              transition:  'transform 0.25s ease',
              boxShadow:   '0 4px 16px rgba(0,0,0,0.15)',
            }}
          >
            View Property
          </Link>
        </div>

        {/* Badge */}
        <div
          className="absolute top-4 left-4 px-3 py-1 rounded-full text-[10px] font-bold"
          style={{ ...badgeStyle, letterSpacing: '0.05em' }}
        >
          {property.badge}
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-start justify-between mb-1">
          <div className="font-playfair text-xl font-semibold" style={{ color: '#1A1A1A' }}>
            {property.price}
          </div>
          <div className="text-[10px] font-semibold px-2.5 py-1 rounded-md" style={{ background: 'rgba(27,58,92,0.07)', color: '#1B3A5C' }}>
            {property.type}
          </div>
        </div>
        <div className="text-sm font-medium mb-0.5" style={{ color: '#3D3D3D' }}>{property.name}</div>
        <div className="flex items-center gap-1.5 text-xs mb-4" style={{ color: '#9A9890' }}>
          <svg width="11" height="11" viewBox="0 0 24 24" fill="#B5572B">
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
          </svg>
          {property.location}, {property.city}
        </div>
        <div className="flex gap-5 pt-4" style={{ borderTop: '1px solid #F0EEE8' }}>
          {[
            { val: String(property.beds),  lbl: 'Beds' },
            { val: String(property.baths), lbl: 'Baths' },
            { val: property.sqft,          lbl: 'Sq.ft.' },
          ].map(({ val, lbl }) => (
            <div key={lbl} className="text-xs" style={{ color: '#9A9890' }}>
              <div className="text-sm font-semibold mb-0.5" style={{ color: '#3D3D3D' }}>{val}</div>
              {lbl}
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const CuratedListingsSection: React.FC = () => (
  <section className="py-24" style={{ background: '#FAFAF8' }}>
    <div className="max-w-[1280px] mx-auto px-8">
      <motion.div
        className="flex items-end justify-between mb-14"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.65, ease: 'easeOut' }}
      >
        <div>
          <div className="nest-label mb-3">Featured Listings</div>
          <h2 className="font-playfair" style={{ fontSize: 'clamp(30px,3.5vw,46px)', fontWeight: 600, color: '#1A1A1A', lineHeight: 1.18 }}>
            Handpicked Properties<br />Across India
          </h2>
        </div>
        <Link
          to="/properties"
          className="hidden md:flex items-center gap-2 text-sm font-semibold transition-all duration-200"
          style={{ color: '#1B3A5C' }}
          onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.opacity = '0.7'; }}
          onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.opacity = '1'; }}
        >
          View All Properties
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </Link>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {PROPERTIES.map((p, i) => (
          <PropertyCard key={p.name} property={p} delay={i * 0.12} />
        ))}
      </div>
    </div>
  </section>
);

export default CuratedListingsSection;
