import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

interface Stat {
  prefix?:  string;
  target:   number;
  suffix:   string;
  decimals: number;
  label:    string;
  icon:     React.ReactNode;
}

const STATS: Stat[] = [
  {
    prefix: '₹', target: 4.2, suffix: 'B+', decimals: 1,
    label: 'Total Property Value Transacted',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1B3A5C" strokeWidth="1.75" strokeLinecap="round">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
      </svg>
    ),
  },
  {
    target: 99, suffix: 'K+', decimals: 0,
    label: 'Happy Homeowners',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1B3A5C" strokeWidth="1.75" strokeLinecap="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
  },
  {
    target: 3.1, suffix: 'x', decimals: 1,
    label: 'Faster Than Traditional Search',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1B3A5C" strokeWidth="1.75" strokeLinecap="round">
        <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
      </svg>
    ),
  },
  {
    target: 4.9, suffix: '★', decimals: 1,
    label: 'Avg Client Rating',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1B3A5C" strokeWidth="1.75" strokeLinecap="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
      </svg>
    ),
  },
];

const CountUp: React.FC<Stat & { run: boolean }> = ({ prefix = '', target, suffix, decimals, run }) => {
  const [val, setVal] = useState(0);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    if (!run) return;
    const duration = 1800;
    const start    = performance.now();

    const tick = (now: number) => {
      const elapsed  = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased    = 1 - Math.pow(1 - progress, 3);
      setVal(parseFloat((eased * target).toFixed(decimals)));
      if (progress < 1) rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [run, target, decimals]);

  return <span>{prefix}{val.toFixed(decimals)}{suffix}</span>;
};

const StatsSection: React.FC = () => {
  const ref    = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section className="py-20" style={{ background: '#F5F3EE' }}>
      <div className="max-w-[1280px] mx-auto px-8">

        {/* Section header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="nest-label mb-3 block">By The Numbers</span>
          <h2 className="font-playfair text-3xl font-semibold" style={{ color: '#1A1A1A' }}>
            Trusted by Thousands Across India
          </h2>
        </motion.div>

        <motion.div
          ref={ref}
          className="grid grid-cols-2 lg:grid-cols-4 gap-5"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          {STATS.map(({ prefix, target, suffix, decimals, label, icon }, i) => (
            <motion.div
              key={label}
              className="bg-white rounded-2xl p-7 flex flex-col items-center text-center card-lift"
              style={{
                border: '1px solid #E8E6E0',
                boxShadow: '0 2px 12px rgba(0,0,0,0.05)',
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              {/* Icon circle */}
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                style={{ background: 'rgba(27,58,92,0.07)' }}
              >
                {icon}
              </div>
              <div
                className="font-playfair font-semibold mb-2"
                style={{ fontSize: 'clamp(30px,3.5vw,44px)', lineHeight: 1, color: '#1B3A5C' }}
              >
                <CountUp
                  prefix={prefix}
                  target={target}
                  suffix={suffix}
                  decimals={decimals}
                  label={label}
                  icon={icon}
                  run={inView}
                />
              </div>
              <div className="text-sm" style={{ color: '#7A7872', fontWeight: 400, lineHeight: 1.5 }}>
                {label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default StatsSection;
