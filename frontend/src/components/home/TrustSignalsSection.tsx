import React from 'react';
import teamImage from '../../images/Team section.jpg';

const FEATURES = [
  {
    icon: 'verified_user',
    title: 'Verified Listings Only',
    desc: 'Every property on our platform is physically verified by our team to ensure what you see is what you get - no misleading photos, no outdated prices.',
  },
  {
    icon: 'support_agent',
    title: '24/7 Concierge Support',
    desc: 'Our dedicated advisors are always available to answer questions, schedule viewings, and provide expert guidance at every stage of your property journey.',
  },
  {
    icon: 'savings',
    title: 'Transparent Pricing',
    desc: 'No hidden brokerage, no surprise fees. We provide clear, upfront cost breakdowns so you can plan and budget with complete confidence.',
  },
];

const TrustSignalsSection: React.FC = () => {
  return (
    <section style={{ background: '#FFFFFF' }} className="py-12 md:py-24">
      <div className="max-w-[1280px] mx-auto px-4 md:px-8">

        {/* Section Header */}
        <div className="text-center mb-14">
          <div className="nest-label mb-3">Why Choose Us</div>
          <h2 className="font-playfair font-semibold" style={{ fontSize: 'clamp(30px,3.5vw,46px)', color: '#1A1A1A', lineHeight: 1.18 }}>
            Redefining Real Estate
          </h2>
          <div className="w-12 h-1 rounded-full mx-auto mt-5" style={{ background: '#1B3A5C' }} />
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left - Image */}
          <div className="relative">
            <div
              className="rounded-2xl p-3"
              style={{ border: '2px solid rgba(27,58,92,0.12)' }}
            >
              <img
                src={teamImage}
                alt="Expert real estate team in a professional office"
                className="rounded-xl w-full object-cover"
                style={{ boxShadow: '0 20px 50px rgba(0,0,0,0.12)' }}
              />
            </div>
            {/* Experience badge */}
            <div
              className="absolute -bottom-5 -right-5 px-5 py-4 rounded-xl text-center"
              style={{
                background: '#1B3A5C',
                color: '#FFFFFF',
                boxShadow: '0 8px 24px rgba(27,58,92,0.3)',
              }}
            >
              <div className="font-playfair font-semibold text-2xl">15+</div>
              <div className="text-xs" style={{ color: 'rgba(255,255,255,0.7)', marginTop: 2 }}>Years Experience</div>
            </div>
          </div>

          {/* Right - Features */}
          <div className="space-y-10">
            {FEATURES.map(({ icon, title, desc }) => (
              <div key={title} className="flex gap-5">
                <div className="flex-shrink-0">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center"
                    style={{
                      background: 'rgba(27,58,92,0.07)',
                      border: '1px solid rgba(27,58,92,0.1)',
                    }}
                  >
                    <span className="font-material-icons text-xl" style={{ color: '#1B3A5C' }}>{icon}</span>
                  </div>
                </div>
                <div>
                  <h4 className="font-inter font-semibold text-lg mb-2" style={{ color: '#1A1A1A' }}>
                    {title}
                  </h4>
                  <p className="text-sm leading-7" style={{ color: '#5A5A5A' }}>
                    {desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSignalsSection;
