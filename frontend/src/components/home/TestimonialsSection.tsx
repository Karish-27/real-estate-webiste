import React from 'react';
import { motion } from 'framer-motion';

const TESTIMONIALS = [
  {
    initials: 'RK',
    name:     'Rahul K.',
    role:     'IT Professional, Bangalore',
    quote:    'NestPrime helped me find a 3BHK flat in Whitefield within my budget. The team was professional and handled all the paperwork seamlessly.',
  },
  {
    initials: 'PM',
    name:     'Priya M.',
    role:     'Business Owner, Ahmedabad',
    quote:    'I was relocating from Mumbai. The advisors understood my requirements perfectly and shortlisted only properties that truly matched my criteria. Highly recommend.',
  },
  {
    initials: 'DS',
    name:     'Deepak S.',
    role:     'NRI Investor, Dubai',
    quote:    'Investing remotely felt risky, but NestPrime\'s verified listings and transparent process gave me complete confidence. Excellent experience end-to-end.',
  },
] as const;

const TestimonialsSection: React.FC = () => (
  <section className="py-24" style={{ background: '#F5F3EE' }}>
    <div className="max-w-[1280px] mx-auto px-8">

      <motion.div
        className="mb-14"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.65, ease: 'easeOut' }}
      >
        <div className="nest-label mb-3">Client Stories</div>
        <h2
          className="font-playfair"
          style={{ fontSize: 'clamp(30px,3.5vw,46px)', fontWeight: 600, color: '#1A1A1A', lineHeight: 1.18 }}
        >
          Trusted by Families<br />Across India
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {TESTIMONIALS.map(({ initials, name, role, quote }, i) => (
          <motion.div
            key={name}
            className="group bg-white rounded-2xl p-8 card-lift"
            style={{ border: '1px solid #E8E6E0', boxShadow: '0 2px 12px rgba(0,0,0,0.04)' }}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.65, delay: i * 0.12, ease: 'easeOut' }}
          >
            {/* Stars */}
            <div className="flex gap-0.5 mb-5">
              {[...Array(5)].map((_, si) => (
                <svg key={si} width="14" height="14" viewBox="0 0 24 24" fill="#B5572B">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                </svg>
              ))}
            </div>

            {/* Opening quote mark */}
            <div
              className="font-playfair mb-4"
              style={{ fontSize: 48, lineHeight: 0.7, color: '#1B3A5C', opacity: 0.15 }}
              aria-hidden="true"
            >
              &ldquo;
            </div>

            <p
              className="font-lato mb-7"
              style={{ fontSize: 15, lineHeight: 1.8, fontStyle: 'italic', fontWeight: 300, color: '#3D3D3D' }}
            >
              {quote}
            </p>

            <div className="flex items-center gap-3">
              <div
                className="w-11 h-11 rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold"
                style={{
                  background: 'rgba(27,58,92,0.08)',
                  color: '#1B3A5C',
                }}
              >
                {initials}
              </div>
              <div>
                <div className="text-sm font-semibold" style={{ color: '#1A1A1A' }}>{name}</div>
                <div className="text-xs mt-0.5" style={{ color: '#7A7872' }}>{role}</div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

    </div>
  </section>
);

export default TestimonialsSection;
