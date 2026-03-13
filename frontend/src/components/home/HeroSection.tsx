import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

/* ── Stagger variants ── */
const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.14, delayChildren: 0.2 } },
};
const item = {
  hidden:  { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: 'easeOut' as const } },
};

/* ── Day-time cityscape illustration ── */
const CityIllustration: React.FC = () => (
  <svg viewBox="0 0 480 280" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }}>
    <defs>
      <linearGradient id="sky" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%"   stopColor="#D6E8F5"/>
        <stop offset="100%" stopColor="#EEF5FA"/>
      </linearGradient>
      <linearGradient id="ground" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%"   stopColor="#E8E6E0"/>
        <stop offset="100%" stopColor="#D8D5CC"/>
      </linearGradient>
    </defs>
    {/* Sky */}
    <rect width="480" height="280" fill="url(#sky)"/>
    {/* Clouds */}
    <ellipse cx="100" cy="44" rx="38" ry="14" fill="white" opacity="0.8"/>
    <ellipse cx="130" cy="38" rx="28" ry="12" fill="white" opacity="0.9"/>
    <ellipse cx="72"  cy="40" rx="24" ry="10" fill="white" opacity="0.7"/>
    <ellipse cx="370" cy="56" rx="42" ry="13" fill="white" opacity="0.75"/>
    <ellipse cx="400" cy="50" rx="30" ry="10" fill="white" opacity="0.85"/>
    {/* Sun glow */}
    <circle cx="400" cy="55" r="22" fill="rgba(255,210,120,0.18)"/>
    <circle cx="400" cy="55" r="14" fill="rgba(255,210,120,0.22)"/>
    <circle cx="400" cy="55" r="8"  fill="rgba(255,200,80,0.35)"/>
    {/* Ground */}
    <rect x="0" y="240" width="480" height="40" fill="url(#ground)"/>
    {/* Road */}
    <rect x="170" y="240" width="140" height="40" fill="#D0CEC6"/>
    <rect x="230" y="245" width="20" height="6"  fill="white" opacity="0.5" rx="2"/>
    <rect x="230" y="257" width="20" height="6"  fill="white" opacity="0.5" rx="2"/>
    {/* Main building — modern facade */}
    <rect x="148" y="90" width="184" height="150" fill="#F2EFE9"/>
    <rect x="148" y="90" width="184" height="150" fill="none" stroke="#D0CEC8" strokeWidth="1"/>
    {/* Rooftop trim */}
    <rect x="142" y="84" width="196" height="10" fill="#E8E5DE"/>
    <rect x="142" y="84" width="196" height="10" fill="none" stroke="#D0CEC8" strokeWidth="0.75"/>
    {/* Windows row 1 */}
    <rect x="165" y="104" width="30" height="22" fill="#C8DFF0" rx="2" opacity="0.85"/>
    <rect x="205" y="104" width="30" height="22" fill="#D4E8F5" rx="2" opacity="0.9"/>
    <rect x="245" y="104" width="30" height="22" fill="#C0DAF0" rx="2" opacity="0.8"/>
    <rect x="285" y="104" width="30" height="22" fill="#CCE2F5" rx="2" opacity="0.85"/>
    {/* Windows row 2 */}
    <rect x="165" y="140" width="30" height="22" fill="#D8E9F5" rx="2"/>
    <rect x="205" y="140" width="30" height="22" fill="#C4DDF0" rx="2"/>
    <rect x="245" y="140" width="30" height="22" fill="#D2E6F5" rx="2"/>
    <rect x="285" y="140" width="30" height="22" fill="#C8E0F0" rx="2"/>
    {/* Windows row 3 */}
    <rect x="165" y="176" width="30" height="22" fill="#D0E4F5" rx="2"/>
    <rect x="205" y="176" width="30" height="22" fill="#CCE1F0" rx="2"/>
    <rect x="285" y="176" width="30" height="22" fill="#D4E7F5" rx="2"/>
    {/* Entry door */}
    <rect x="216" y="200" width="48" height="40" fill="#BFD8EC" rx="3"/>
    <rect x="216" y="200" width="48" height="40" fill="none" stroke="#A8C8E0" strokeWidth="1" rx="3"/>
    <circle cx="240" cy="222" r="2.5" fill="#7AAEC5"/>
    {/* Left building */}
    <rect x="28" y="138" width="98" height="102" fill="#EAE7E0"/>
    <rect x="28" y="138" width="98" height="102" fill="none" stroke="#D5D2CA" strokeWidth="0.75"/>
    <rect x="38"  cy="152" width="18" height="14" fill="#C5DCF0" rx="1" opacity="0.8"/>
    <rect x="38"  y="152" width="18" height="14" fill="#C5DCF0" rx="1"/>
    <rect x="64"  y="152" width="18" height="14" fill="#D0E4F5" rx="1"/>
    <rect x="90"  y="152" width="18" height="14" fill="#C8DFF0" rx="1"/>
    <rect x="38"  y="178" width="18" height="14" fill="#D5E8F5" rx="1"/>
    <rect x="64"  y="178" width="18" height="14" fill="#C0DAF0" rx="1"/>
    <rect x="90"  y="178" width="18" height="14" fill="#CCDEF5" rx="1"/>
    <rect x="38"  y="204" width="18" height="14" fill="#CCE2F0" rx="1"/>
    <rect x="64"  y="204" width="18" height="14" fill="#D2E6F5" rx="1"/>
    {/* Right building */}
    <rect x="354" y="116" width="102" height="124" fill="#EDE9E2"/>
    <rect x="354" y="116" width="102" height="124" fill="none" stroke="#D5D2CA" strokeWidth="0.75"/>
    <rect x="364" y="130" width="20" height="16" fill="#CCE0F2" rx="1"/>
    <rect x="392" y="130" width="20" height="16" fill="#D4E8F5" rx="1"/>
    <rect x="420" y="130" width="20" height="16" fill="#C8DCF0" rx="1"/>
    <rect x="364" y="158" width="20" height="16" fill="#D0E4F2" rx="1"/>
    <rect x="392" y="158" width="20" height="16" fill="#CCE0F2" rx="1"/>
    <rect x="420" y="158" width="20" height="16" fill="#D4E8F5" rx="1"/>
    <rect x="364" y="186" width="20" height="16" fill="#CCE0F0" rx="1"/>
    <rect x="392" y="186" width="20" height="16" fill="#D2E5F0" rx="1"/>
    {/* Greenery */}
    <ellipse cx="144" cy="240" rx="18" ry="22" fill="#7EAC6E" opacity="0.7"/>
    <ellipse cx="336" cy="240" rx="18" ry="22" fill="#7EAC6E" opacity="0.7"/>
    <rect x="140" y="236" width="8" height="20" fill="#5A8050" opacity="0.5"/>
    <rect x="332" y="236" width="8" height="20" fill="#5A8050" opacity="0.5"/>
  </svg>
);

const HeroSection: React.FC = () => {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top  + rect.height / 2;
    const rx = ((e.clientY - cy) / (rect.height / 2)) * -4;
    const ry = ((e.clientX - cx) / (rect.width  / 2)) *  4;
    card.style.transform = `perspective(1000px) rotateX(${rx}deg) rotateY(${ry}deg) scale(1.01)`;
    card.style.transition = 'transform 0.1s ease';
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    if (!card) return;
    card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)';
    card.style.transition = 'transform 0.5s ease';
  };

  return (
    <section
      className="relative overflow-hidden flex items-center min-h-screen pt-[70px]"
      style={{ background: '#FAFAF8' }}
    >
      {/* Subtle background pattern */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            radial-gradient(circle at 15% 50%, rgba(27,58,92,0.04) 0%, transparent 55%),
            radial-gradient(circle at 85% 30%, rgba(181,87,43,0.04) 0%, transparent 50%)
          `,
        }}
      />
      {/* Decorative geometric lines — blueprint style */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-[0.035]">
        <svg viewBox="0 0 800 600" className="absolute bottom-0 right-0 w-[55%]">
          <rect x="380" y="60"  width="340" height="440" fill="none" stroke="#1B3A5C" strokeWidth="0.8"/>
          <rect x="420" y="30"  width="260" height="470" fill="none" stroke="#1B3A5C" strokeWidth="0.6"/>
          <line x1="380" y1="200" x2="720" y2="200" stroke="#1B3A5C" strokeWidth="0.4"/>
          <line x1="380" y1="320" x2="720" y2="320" stroke="#1B3A5C" strokeWidth="0.4"/>
          <line x1="380" y1="420" x2="720" y2="420" stroke="#1B3A5C" strokeWidth="0.4"/>
          <line x1="550" y1="30"  x2="550" y2="500" stroke="#1B3A5C" strokeWidth="0.3"/>
          <rect x="400" y="120" width="36" height="48" fill="none" stroke="#1B3A5C" strokeWidth="0.4"/>
          <rect x="450" y="120" width="36" height="48" fill="none" stroke="#1B3A5C" strokeWidth="0.4"/>
          <rect x="500" y="120" width="36" height="48" fill="none" stroke="#1B3A5C" strokeWidth="0.4"/>
        </svg>
      </div>

      <div className="max-w-[1280px] mx-auto px-8 py-20 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* ── Left ── */}
          <motion.div variants={container} initial="hidden" animate="visible">

            {/* Eyebrow */}
            <motion.div variants={item} className="flex items-center gap-3 mb-7">
              <div
                className="flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold"
                style={{
                  background: 'rgba(27,58,92,0.08)',
                  color: '#1B3A5C',
                  border: '1px solid rgba(27,58,92,0.12)',
                  letterSpacing: '0.06em',
                }}
              >
                <span
                  className="w-1.5 h-1.5 rounded-full"
                  style={{ background: '#22C55E', animation: 'pulse-dot 2.4s infinite' }}
                />
                Premium Real Estate
              </div>
            </motion.div>

            {/* H1 */}
            <motion.h1
              variants={item}
              className="font-playfair mb-5"
              style={{ fontSize: 'clamp(36px,5vw,64px)', lineHeight: 1.1, fontWeight: 600, color: '#1A1A1A' }}
            >
              Find Your Perfect<br />
              <em style={{ fontStyle: 'italic', color: '#1B3A5C' }}>Home & Investment</em>
            </motion.h1>

            {/* Sub */}
            <motion.p
              variants={item}
              className="mb-10 max-w-[500px]"
              style={{ fontSize: 17, color: '#5A5A5A', lineHeight: 1.78, fontWeight: 400 }}
            >
              Discover curated residential and commercial properties across India's most sought-after
              locations — guided by expert advisors who put your goals first.
            </motion.p>

            {/* CTAs */}
            <motion.div variants={item} className="flex flex-wrap gap-4 mb-12">
              <Link
                to="/properties"
                className="btn-shimmer inline-flex items-center gap-2 px-8 py-3.5 rounded-lg text-sm font-semibold transition-all duration-300"
                style={{ background: '#1B3A5C', color: '#FFFFFF', boxShadow: '0 4px 16px rgba(27,58,92,0.22)' }}
              >
                Browse Properties
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg text-sm font-semibold border transition-all duration-300"
                style={{ border: '1.5px solid #1B3A5C', color: '#1B3A5C', background: 'transparent' }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.background = '#1B3A5C';
                  (e.currentTarget as HTMLElement).style.color = '#FFFFFF';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.background = 'transparent';
                  (e.currentTarget as HTMLElement).style.color = '#1B3A5C';
                }}
              >
                Talk to an Advisor
              </Link>
            </motion.div>

            {/* Stat pills */}
            <motion.div variants={item} className="flex flex-wrap gap-3">
              {[
                '12,400+ Active Listings',
                '99K+ Happy Clients',
                '47 Cities Covered',
              ].map((text) => (
                <div
                  key={text}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium"
                  style={{
                    background: '#FFFFFF',
                    border: '1px solid #E8E6E0',
                    color: '#5A5A5A',
                    boxShadow: '0 1px 4px rgba(0,0,0,0.06)',
                  }}
                >
                  <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: '#1B3A5C' }}/>
                  {text}
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* ── Right: Property Card ── */}
          <motion.div
            variants={item}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.45 }}
          >
            <div
              ref={cardRef}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              className="rounded-2xl overflow-hidden cursor-default"
              style={{
                background: '#FFFFFF',
                border: '1px solid #E8E6E0',
                boxShadow: '0 8px 40px rgba(0,0,0,0.1)',
              }}
            >
              {/* Illustration */}
              <div className="relative h-[268px] bg-[#EEF5FA]">
                <CityIllustration />
                {/* Premium badge */}
                <div
                  className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1.5 rounded-lg text-[10px] font-semibold"
                  style={{
                    background: '#FFFFFF',
                    border: '1px solid #E8E6E0',
                    color: '#1B3A5C',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
                    letterSpacing: '0.05em',
                  }}
                >
                  <span className="w-1.5 h-1.5 rounded-full" style={{ background: '#22C55E' }}/>
                  VERIFIED LISTING
                </div>
                {/* Price tag */}
                <div
                  className="absolute top-4 right-4 px-3 py-1.5 rounded-lg text-xs font-bold"
                  style={{
                    background: '#1B3A5C',
                    color: '#FFFFFF',
                    boxShadow: '0 2px 8px rgba(27,58,92,0.3)',
                  }}
                >
                  ₹2.8 Cr
                </div>
              </div>

              {/* Card content */}
              <div className="p-6">
                <div className="font-playfair text-xl mb-1 font-semibold" style={{ color: '#1A1A1A' }}>
                  The Meridian, Apt 14B
                </div>
                <div className="flex items-center gap-1.5 text-xs mb-5" style={{ color: '#7A7872' }}>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" fill="#B5572B"/>
                    <circle cx="12" cy="9" r="2.5" fill="white"/>
                  </svg>
                  Ashram Road, Ahmedabad · 2,840 sqft · 3 BHK
                </div>

                {/* Match score */}
                <div
                  className="flex items-center justify-between p-4 rounded-xl mb-4"
                  style={{ background: '#F5F4F0', border: '1px solid #E8E6E0' }}
                >
                  <div>
                    <div className="text-[10px] font-semibold mb-1" style={{ color: '#1B3A5C', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
                      Suitability
                    </div>
                    <div className="text-xs" style={{ color: '#7A7872' }}>Based on your profile</div>
                  </div>
                  <div className="flex-1 mx-4">
                    <div className="h-1.5 rounded-full overflow-hidden" style={{ background: '#E8E6E0' }}>
                      <motion.div
                        className="h-full rounded-full"
                        style={{ background: 'linear-gradient(90deg, #1B3A5C, #3A6B9F)' }}
                        initial={{ width: '0%' }}
                        animate={{ width: '94%' }}
                        transition={{ delay: 1.1, duration: 1.2, ease: 'easeOut' }}
                      />
                    </div>
                  </div>
                  <div className="font-playfair text-2xl font-semibold" style={{ color: '#1B3A5C' }}>94%</div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {['Ready to Move', 'Prime Location', 'Vastu Compliant', 'Bank Approved'].map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 rounded-full text-[10px] font-semibold"
                      style={{
                        background: 'rgba(27,58,92,0.07)',
                        color: '#1B3A5C',
                        border: '1px solid rgba(27,58,92,0.12)',
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
