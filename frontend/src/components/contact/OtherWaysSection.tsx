import React from 'react';

interface ContactMethod {
  icon: string;
  title: string;
  description: string;
  action: string;
  actionLink: string;
  bgColor: string;
}

const OtherWaysSection: React.FC = () => {
  const methods: ContactMethod[] = [
    {
      icon: 'chat',
      title: 'WhatsApp Us',
      description: 'Chat directly with our support team via WhatsApp for instant assistance.',
      action: 'Start Chat',
      actionLink: 'https://wa.me/919876543210',
      bgColor: 'bg-[#E8F5E9]'
    },
    // {
    //   icon: 'chat_bubble',
    //   title: 'Live Chat',
    //   description: 'Connect with a property expert instantly through our live chat feature.',
    //   action: 'Launch Chat',
    //   actionLink: '#',
    //   bgColor: 'bg-[#E3F2FD]'
    // },
    {
      icon: 'event',
      title: 'Schedule a Call',
      description: 'Book a convenient time for a detailed consultation with our specialists.',
      action: 'Book Now',
      actionLink: '#',
      bgColor: 'bg-[#FFF3E0]'
    }
  ];

  return (
    <section className="py-24" style={{ background: '#F2EFE9' }}>
      <div className="max-w-[1280px] mx-auto px-8">

        {/* Section Header */}
        <div className="text-center mb-14">
          <p className="font-inter text-xs font-semibold tracking-[0.14em] uppercase text-[#1B3A5C] mb-3">
            Get In Touch
          </p>
          <h2 className="font-playfair font-bold text-4xl text-[#221410] mb-4">
            Other Ways to Connect
          </h2>
          <p className="font-inter text-base text-[#6B7280] max-w-[480px] mx-auto leading-relaxed">
            Need faster support? Reach us directly through your preferred channel.
          </p>
        </div>

        {/* Cards — centered 2-col */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[820px] mx-auto">
          {methods.map((method, index) => (
            <a
              key={index}
              href={method.actionLink}
              target={method.actionLink.startsWith('http') ? '_blank' : '_self'}
              rel={method.actionLink.startsWith('http') ? 'noopener noreferrer' : ''}
              className="group flex flex-col bg-white rounded-2xl p-8 border border-[#E6E0DA] hover:border-[#1B3A5C] hover:shadow-2xl transition-all duration-300"
              style={{ textDecoration: 'none' }}
            >
              {/* Icon + action row */}
              <div className="flex items-start justify-between mb-6">
                <div className={`w-14 h-14 ${method.bgColor} rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform duration-300`}>
                  <span className="material-icons text-2xl text-[#1B3A5C]">
                    {method.icon}
                  </span>
                </div>
                <span
                  className="material-icons text-[#D1CCC4] group-hover:text-[#1B3A5C] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300 mt-1"
                  style={{ fontSize: 20 }}
                >
                  arrow_outward
                </span>
              </div>

              {/* Title */}
              <h3 className="font-playfair font-semibold text-xl text-[#221410] mb-2">
                {method.title}
              </h3>

              {/* Description */}
              <p className="font-inter text-sm text-[#6B7280] leading-relaxed mb-6 flex-1">
                {method.description}
              </p>

              {/* CTA */}
              <div className="flex items-center gap-1.5 font-inter font-semibold text-sm text-[#1B3A5C] group-hover:text-[#B5572B] transition-colors duration-300">
                <span>{method.action}</span>
                <span className="material-icons text-base group-hover:translate-x-1 transition-transform duration-300">
                  arrow_forward
                </span>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
};

export default OtherWaysSection;