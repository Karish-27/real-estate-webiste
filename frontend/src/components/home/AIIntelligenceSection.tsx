import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const TABS = ['Property Match', 'Market Trends', 'Site Visits', 'Area Intel'] as const;
type Tab = typeof TABS[number];

const SectionLabel: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="nest-label mb-3">{children}</div>
);

const ScoreRow: React.FC<{ label: string; value: number; animate: boolean }> = ({ label, value, animate }) => (
  <div className="flex items-center gap-3 mb-3">
    <span className="text-xs w-32 flex-shrink-0" style={{ color: '#5A5A5A' }}>{label}</span>
    <div className="flex-1 h-1.5 rounded-full overflow-hidden" style={{ background: '#EEE9E0' }}>
      <motion.div
        className="h-full rounded-full"
        style={{ background: 'linear-gradient(90deg, #1B3A5C, #3A6B9F)' }}
        initial={{ width: '0%' }}
        animate={{ width: animate ? `${value}%` : '0%' }}
        transition={{ duration: 0.85, ease: 'easeOut', delay: 0.1 }}
      />
    </div>
    <span className="text-xs w-8 text-right font-semibold" style={{ color: '#1B3A5C' }}>{value}</span>
  </div>
);

const PropertyMatchPanel: React.FC<{ active: boolean }> = ({ active }) => (
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
    <div>
      <SectionLabel>Suitability Scoring</SectionLabel>
      <h3 className="font-playfair mb-4" style={{ fontSize: 'clamp(26px,2.8vw,36px)', fontWeight: 600, color: '#1A1A1A', lineHeight: 1.22 }}>
        Find Properties That<br />Truly Fit Your Life
      </h3>
      <p className="text-sm leading-7 mb-8" style={{ color: '#5A5A5A' }}>
        We evaluate each property against your lifestyle needs, commute requirements, budget, and
        long-term investment goals — so every shortlisted option is genuinely worth your time.
      </p>
      <div className="flex gap-4 flex-wrap">
        {([['200+', 'Data Points'], ['94%', 'Match Accuracy'], ['3 Days', 'Avg. Shortlist Time']] as const).map(([val, lbl]) => (
          <div key={lbl} className="flex-1 min-w-[100px] p-4 rounded-xl" style={{ background: '#F5F3EE', border: '1px solid #E8E6E0' }}>
            <div className="text-[10px] font-semibold uppercase tracking-widest mb-1.5" style={{ color: '#9A9890' }}>{lbl}</div>
            <div className="font-playfair text-2xl font-semibold" style={{ color: '#1B3A5C' }}>{val}</div>
          </div>
        ))}
      </div>
    </div>
    <div className="p-6 rounded-2xl" style={{ background: '#FFFFFF', border: '1px solid #E8E6E0', boxShadow: '0 4px 20px rgba(0,0,0,0.06)' }}>
      <div className="flex items-center justify-between mb-5">
        <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: '#9A9890' }}>Profile Match</span>
        <span className="text-sm font-bold px-3 py-1 rounded-full" style={{ background: 'rgba(27,58,92,0.08)', color: '#1B3A5C' }}>94% Suitable</span>
      </div>
      {[
        { label: 'Lifestyle Fit',     value: 94 },
        { label: 'Commute Score',     value: 91 },
        { label: 'Walkability',       value: 88 },
        { label: 'Investment Grade',  value: 85 },
        { label: 'School Proximity',  value: 92 },
        { label: 'Vastu Compliant',   value: 100 },
        { label: 'Natural Light',     value: 96 },
      ].map((s) => <ScoreRow key={s.label} label={s.label} value={s.value} animate={active} />)}
    </div>
  </div>
);

const MarketTrendsPanel: React.FC = () => (
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
    <div>
      <SectionLabel>Price Trends & Analysis</SectionLabel>
      <h3 className="font-playfair mb-4" style={{ fontSize: 'clamp(26px,2.8vw,36px)', fontWeight: 600, color: '#1A1A1A', lineHeight: 1.22 }}>
        Real-Time Market Data<br />& Investment Signals
      </h3>
      <p className="text-sm leading-7 mb-6" style={{ color: '#5A5A5A' }}>
        Price-per-sqft trends, rental yield comparisons, and investment scoring across major Indian metros
        — updated regularly so you can act on accurate, up-to-date information.
      </p>
      <ul className="flex flex-col gap-3">
        {[
          'Live price index across 47 metro markets',
          'Neighbourhood investment opportunity scoring',
          'Development pipeline & zoning alerts',
        ].map((t) => (
          <li key={t} className="flex items-center gap-3 text-sm" style={{ color: '#5A5A5A' }}>
            <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: '#1B3A5C' }} />
            {t}
          </li>
        ))}
      </ul>
    </div>
    <div className="p-6 rounded-2xl" style={{ background: '#FFFFFF', border: '1px solid #E8E6E0', boxShadow: '0 4px 20px rgba(0,0,0,0.06)' }}>
      <div className="text-[10px] font-semibold uppercase tracking-widest mb-1" style={{ color: '#9A9890' }}>Ahmedabad · Avg Price/sqft</div>
      <div className="font-playfair text-4xl font-semibold mb-1" style={{ color: '#1A1A1A' }}>₹4,850</div>
      <div className="text-xs mb-5 font-medium" style={{ color: '#22C55E' }}>▲ +6.2% this quarter</div>
      <svg viewBox="0 0 400 100" preserveAspectRatio="none" className="w-full" style={{ height: 100 }}>
        <defs>
          <linearGradient id="navyGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#1B3A5C" stopOpacity="0.18"/>
            <stop offset="100%" stopColor="#1B3A5C" stopOpacity="0"/>
          </linearGradient>
        </defs>
        <path d="M0 80 C40 75,60 68,80 62 S120 56,140 50 S180 42,200 46 S240 36,260 30 S300 24,320 19 S360 14,400 8" fill="none" stroke="#1B3A5C" strokeWidth="2"/>
        <path d="M0 80 C40 75,60 68,80 62 S120 56,140 50 S180 42,200 46 S240 36,260 30 S300 24,320 19 S360 14,400 8 L400 100 L0 100Z" fill="url(#navyGrad)"/>
      </svg>
      <div className="flex justify-between mt-2 text-[10px]" style={{ color: '#9A9890' }}>
        {['Jan','Mar','May','Jul','Sep','Nov','Now'].map((m) => <span key={m}>{m}</span>)}
      </div>
      <div className="grid grid-cols-3 gap-3 mt-5">
        {([['7.8/10','Inv. Score', '#1B3A5C'], ['High','Demand', '#22C55E'], ['+8.4%','Forecast', '#1B3A5C']] as const).map(([val, lbl, col]) => (
          <div key={lbl} className="p-3 rounded-xl text-center" style={{ background: '#F5F3EE' }}>
            <div className="text-[10px] font-semibold uppercase tracking-wide mb-1" style={{ color: '#9A9890' }}>{lbl}</div>
            <div className="font-playfair text-lg font-semibold" style={{ color: col }}>{val}</div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const SiteVisitsPanel: React.FC = () => {
  const days   = ['Su','Mo','Tu','We','Th','Fr','Sa'];
  const booked = new Set([5, 14, 20, 26]);
  const today  = 12;
  const cells: (number | null)[] = [...Array(6).fill(null), ...Array.from({ length: 31 }, (_, i) => i + 1)];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
      <div>
        <SectionLabel>Site Visit Scheduling</SectionLabel>
        <h3 className="font-playfair mb-4" style={{ fontSize: 'clamp(26px,2.8vw,36px)', fontWeight: 600, color: '#1A1A1A', lineHeight: 1.22 }}>
          Schedule Visits<br />At Your Convenience
        </h3>
        <p className="text-sm leading-7 mb-6" style={{ color: '#5A5A5A' }}>
          Book in-person or virtual property tours through your advisor. We coordinate with the property
          owner, send reminders, and ensure no-surprise visit experiences.
        </p>
        <div className="flex flex-col gap-3">
          {[
            { icon: '📅', title: 'Flexible Booking',   sub: 'Choose any date & time slot' },
            { icon: '📍', title: 'Location Guidance',  sub: 'Exact address & navigation help' },
            { icon: '🎥', title: 'Virtual Tours',       sub: 'HD video walkthroughs available' },
          ].map(({ icon, title, sub }) => (
            <div key={title} className="flex items-center gap-4 p-4 rounded-xl" style={{ background: '#F5F3EE', border: '1px solid #E8E6E0' }}>
              <span className="text-2xl">{icon}</span>
              <div>
                <div className="text-sm font-semibold" style={{ color: '#1A1A1A' }}>{title}</div>
                <div className="text-xs mt-0.5" style={{ color: '#7A7872' }}>{sub}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="p-6 rounded-2xl" style={{ background: '#FFFFFF', border: '1px solid #E8E6E0', boxShadow: '0 4px 20px rgba(0,0,0,0.06)' }}>
        <div className="flex items-center justify-between mb-5">
          <span className="font-playfair text-lg font-semibold" style={{ color: '#1A1A1A' }}>March 2025</span>
          <div className="flex gap-2">
            {['◀','▶'].map((a) => (
              <button key={a} className="px-2.5 py-1 text-xs rounded-lg" style={{ background: '#F5F3EE', border: '1px solid #E8E6E0', color: '#5A5A5A' }}>{a}</button>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-7 gap-1 text-center text-[10px] mb-2 font-semibold" style={{ color: '#9A9890' }}>
          {days.map((d) => <div key={d}>{d}</div>)}
        </div>
        <div className="grid grid-cols-7 gap-1 text-center text-xs">
          {cells.map((d, i) => {
            if (d === null) return <div key={i} />;
            const isToday  = d === today;
            const isBooked = booked.has(d);
            return (
              <div
                key={i}
                className="py-2 rounded-lg text-xs"
                style={{
                  background: isToday ? '#1B3A5C' : isBooked ? 'rgba(27,58,92,0.08)' : 'transparent',
                  color:      isToday ? '#FFFFFF'  : isBooked ? '#1B3A5C' : '#5A5A5A',
                  border:     isBooked && !isToday ? '1px solid rgba(27,58,92,0.2)' : 'none',
                  fontWeight: isToday ? 600 : 400,
                }}
              >
                {d}
              </div>
            );
          })}
        </div>
        <div className="flex gap-5 mt-4 text-[10px]">
          <div className="flex items-center gap-1.5" style={{ color: '#7A7872' }}>
            <div className="w-2.5 h-2.5 rounded-sm" style={{ background: '#1B3A5C' }} />
            Today
          </div>
          <div className="flex items-center gap-1.5" style={{ color: '#7A7872' }}>
            <div className="w-2.5 h-2.5 rounded-sm" style={{ background: 'rgba(27,58,92,0.1)', border: '1px solid rgba(27,58,92,0.2)' }} />
            Visit Booked
          </div>
        </div>
      </div>
    </div>
  );
};

const AreaIntelPanel: React.FC = () => (
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
    <div>
      <SectionLabel>Area Intelligence</SectionLabel>
      <h3 className="font-playfair mb-4" style={{ fontSize: 'clamp(26px,2.8vw,36px)', fontWeight: 600, color: '#1A1A1A', lineHeight: 1.22 }}>
        Know Everything About<br />the Neighbourhood
      </h3>
      <p className="text-sm leading-7 mb-3" style={{ color: '#5A5A5A' }}>
        School proximity, commute times, walkability scores, noise levels, and upcoming
        development plans — all in one detailed area report before you decide.
      </p>
      <p className="text-sm leading-7" style={{ color: '#5A5A5A' }}>
        Sourced from municipal records, Google Maps, transit APIs, and satellite data — updated regularly.
      </p>
    </div>
    <div className="grid grid-cols-2 gap-3">
      {[
        { icon: '🏫', val: '9.2',    lbl: 'School Rating' },
        { icon: '🚇', val: '12min',  lbl: 'Commute to CBD' },
        { icon: '🚶', val: '94/100', lbl: 'Walk Score' },
        { icon: '🔇', val: 'Low',    lbl: 'Noise Level' },
        { icon: '🏗️', val: '+3',     lbl: 'Dev. Projects' },
        { icon: '📈', val: 'A+',     lbl: 'Investment Grade' },
      ].map(({ icon, val, lbl }) => (
        <div key={lbl} className="p-5 rounded-xl card-lift" style={{ background: '#FFFFFF', border: '1px solid #E8E6E0', boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}>
          <div className="text-xl mb-2">{icon}</div>
          <div className="font-playfair text-2xl font-semibold" style={{ color: '#1B3A5C' }}>{val}</div>
          <div className="text-xs mt-1" style={{ color: '#7A7872' }}>{lbl}</div>
        </div>
      ))}
    </div>
  </div>
);

const AIIntelligenceSection: React.FC = () => {
  const [active, setActive] = useState<Tab>('Property Match');
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 });
  const navRef  = useRef<HTMLDivElement>(null);
  const btnRefs = useRef<(HTMLButtonElement | null)[]>([]);

  useEffect(() => {
    const idx = TABS.indexOf(active);
    const btn = btnRefs.current[idx];
    const nav = navRef.current;
    if (!btn || !nav) return;
    const navRect = nav.getBoundingClientRect();
    const btnRect = btn.getBoundingClientRect();
    setIndicatorStyle({ left: btnRect.left - navRect.left, width: btnRect.width });
  }, [active]);

  const renderPanel = () => {
    switch (active) {
      case 'Property Match': return <PropertyMatchPanel active />;
      case 'Market Trends':  return <MarketTrendsPanel />;
      case 'Site Visits':    return <SiteVisitsPanel />;
      case 'Area Intel':     return <AreaIntelPanel />;
    }
  };

  return (
    <section className="py-24" style={{ background: '#F5F3EE' }}>
      <div className="max-w-[1280px] mx-auto px-8">

        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.65, ease: 'easeOut' }}
        >
          <div className="nest-label mb-3">Platform Features</div>
          <h2 className="font-playfair mb-4" style={{ fontSize: 'clamp(30px,3.5vw,46px)', fontWeight: 600, color: '#1A1A1A', lineHeight: 1.18 }}>
            Everything You Need<br />
            <em style={{ fontStyle: 'italic', color: '#1B3A5C' }}>In One Place</em>
          </h2>
          <p className="text-sm max-w-[480px] mx-auto" style={{ color: '#7A7872', lineHeight: 1.75 }}>
            From property matching to area insights, our platform puts every decision-making tool
            right at your fingertips.
          </p>
        </motion.div>

        <motion.div
          className="flex justify-center mb-12"
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.1, ease: 'easeOut' }}
        >
          <div
            ref={navRef}
            className="relative flex overflow-hidden rounded-xl p-1"
            style={{ background: '#FFFFFF', border: '1px solid #E8E6E0', boxShadow: '0 2px 12px rgba(0,0,0,0.06)' }}
          >
            <div
              className="absolute top-1 h-[calc(100%-8px)] rounded-lg transition-all duration-300"
              style={{
                left:       indicatorStyle.left + 4,
                width:      indicatorStyle.width,
                background: '#1B3A5C',
              }}
            />
            {TABS.map((tab, i) => (
              <button
                key={tab}
                ref={(el) => { btnRefs.current[i] = el; }}
                onClick={() => setActive(tab)}
                className="relative z-10 px-6 py-3 text-sm font-medium transition-colors duration-200 rounded-lg"
                style={{ color: active === tab ? '#FFFFFF' : '#5A5A5A' }}
              >
                {tab}
              </button>
            ))}
          </div>
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
          >
            {renderPanel()}
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
};

export default AIIntelligenceSection;
