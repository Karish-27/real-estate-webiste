import React from 'react';
import { motion } from 'framer-motion';

const STEPS = [
  {
    num:   '01',
    title: 'Share Your Requirements',
    desc:  'Tell us about your ideal property - location, budget, size, and lifestyle needs. Our advisors listen carefully to understand exactly what you\'re looking for.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1B3A5C" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
      </svg>
    ),
  },
  {
    num:   '02',
    title: 'Explore Curated Options',
    desc:  'We shortlist verified properties matching your criteria from 12,400+ listings - saving you hours of research and site visits to mismatched properties.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1B3A5C" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/>
        <line x1="11" y1="8" x2="11" y2="14"/><line x1="8" y1="11" x2="14" y2="11"/>
      </svg>
    ),
  },
  {
    num:   '03',
    title: 'Close With Confidence',
    desc:  'From property visits to legal verification and loan assistance - our team stays with you at every step until you get the keys to your new home.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1B3A5C" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
        <polyline points="9 22 9 12 15 12 15 22"/>
      </svg>
    ),
  },
] as const;

const ProcessSection: React.FC = () => (
  <section className="py-12 md:py-24" style={{ background: '#FFFFFF' }}>
    <div className="max-w-[1280px] mx-auto px-4 md:px-8">

      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.65, ease: 'easeOut' }}
      >
        <div className="nest-label mb-3">How It Works</div>
        <h2
          className="font-playfair"
          style={{ fontSize: 'clamp(30px,3.5vw,46px)', fontWeight: 600, color: '#1A1A1A', lineHeight: 1.18 }}
        >
          Three Steps to{' '}
          <em style={{ fontStyle: 'italic', color: '#1B3A5C' }}>Your Perfect Property</em>
        </h2>
        <p className="mt-4 text-sm max-w-[400px] mx-auto" style={{ color: '#7A7872', lineHeight: 1.75 }}>
          A simple, transparent process - no surprises, no hidden steps.
        </p>
      </motion.div>

      <div className="relative grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-0">

        {/* Connecting dashed line - desktop only */}
        <div className="absolute hidden lg:block" style={{ top: 44, left: '18%', width: '64%', height: 1 }}>
          <motion.div
            className="h-full"
            style={{
              background: 'repeating-linear-gradient(90deg, #1B3A5C 0px, #1B3A5C 8px, transparent 8px, transparent 16px)',
              opacity: 0.18,
              transformOrigin: 'left center',
            }}
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 1.4, ease: 'easeOut', delay: 0.3 }}
          />
        </div>

        {STEPS.map(({ num, title, desc, icon }, i) => (
          <motion.div
            key={num}
            className="text-center px-4 md:px-8 flex flex-col items-center"
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.65, delay: i * 0.16, ease: 'easeOut' }}
          >
            {/* Step circle */}
            <div
              className="w-[88px] h-[88px] rounded-full flex items-center justify-center mx-auto mb-7 relative z-10"
              style={{
                background: '#FFFFFF',
                border: '2px solid #E8E6E0',
                boxShadow: '0 4px 16px rgba(27,58,92,0.08)',
              }}
            >
              <div
                className="w-14 h-14 rounded-full flex items-center justify-center"
                style={{ background: 'rgba(27,58,92,0.07)' }}
              >
                {icon}
              </div>
            </div>

            {/* Step number */}
            <div
              className="text-[10px] font-bold mb-2 tracking-widest"
              style={{ color: '#1B3A5C', opacity: 0.5 }}
            >
              STEP {num}
            </div>

            <h4 className="font-inter text-lg font-semibold mb-3" style={{ color: '#1A1A1A' }}>
              {title}
            </h4>
            <p className="text-sm leading-7" style={{ color: '#6B6B6B', maxWidth: 260, margin: '0 auto' }}>
              {desc}
            </p>
          </motion.div>
        ))}
      </div>

    </div>
  </section>
);

export default ProcessSection;
