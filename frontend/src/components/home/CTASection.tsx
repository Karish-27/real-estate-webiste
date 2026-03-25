import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const CTASection: React.FC = () => (
  <section className="py-14 md:py-28 relative overflow-hidden" style={{ background: '#1B3A5C' }}>

    {/* Subtle geometric decoration */}
    <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-[0.06]">
      <svg viewBox="0 0 800 400" className="absolute top-0 left-0 w-full h-full">
        <circle cx="100" cy="200" r="280" fill="none" stroke="white" strokeWidth="1"/>
        <circle cx="700" cy="200" r="220" fill="none" stroke="white" strokeWidth="0.75"/>
        <circle cx="400" cy="-50" r="300" fill="none" stroke="white" strokeWidth="0.75"/>
      </svg>
    </div>

    <div className="max-w-[1280px] mx-auto px-4 md:px-8 text-center relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.75, ease: 'easeOut' }}
      >
        <div
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold mb-6"
          style={{
            background: 'rgba(255,255,255,0.1)',
            border: '1px solid rgba(255,255,255,0.2)',
            color: 'rgba(255,255,255,0.85)',
            letterSpacing: '0.1em',
          }}
        >
          START YOUR JOURNEY TODAY
        </div>

        <h2
          className="font-playfair mb-5"
          style={{ fontSize: 'clamp(34px,4.5vw,58px)', fontWeight: 600, lineHeight: 1.12, color: '#FFFFFF' }}
        >
          Your Perfect Home<br />
          <em style={{ fontStyle: 'italic', color: 'rgba(255,255,255,0.75)' }}>Is Closer Than You Think</em>
        </h2>

        <p
          className="mb-10 max-w-[460px] mx-auto"
          style={{ fontSize: 17, color: 'rgba(255,255,255,0.65)', fontWeight: 300, lineHeight: 1.75 }}
        >
          Join 99,000+ homeowners who trusted NestPrime to find their ideal property across India.
        </p>

        <div className="flex flex-wrap gap-4 justify-center">
          <Link
            to="/signup"
            className="btn-shimmer inline-flex items-center gap-3 px-10 py-4 rounded-lg text-base font-semibold transition-all duration-300"
            style={{ background: '#FFFFFF', color: '#1B3A5C', boxShadow: '0 4px 20px rgba(0,0,0,0.15)' }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.background = '#F0EFEB';
              (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)';
              (e.currentTarget as HTMLElement).style.boxShadow = '0 8px 32px rgba(0,0,0,0.2)';
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.background = '#FFFFFF';
              (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
              (e.currentTarget as HTMLElement).style.boxShadow = '0 4px 20px rgba(0,0,0,0.15)';
            }}
          >
            Browse Properties Free
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M3 9h12M11 5l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center gap-3 px-10 py-4 rounded-lg text-base font-semibold border transition-all duration-300"
            style={{ border: '1.5px solid rgba(255,255,255,0.35)', color: 'rgba(255,255,255,0.85)', background: 'transparent' }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.7)';
              (e.currentTarget as HTMLElement).style.color = '#FFFFFF';
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.35)';
              (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.85)';
            }}
          >
            Talk to an Advisor
          </Link>
        </div>
      </motion.div>
    </div>
  </section>
);

export default CTASection;
