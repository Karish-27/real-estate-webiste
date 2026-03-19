import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';

interface Property {
  id: string;
  name: string;
  location: string;
  city: string;
  price: string;
  priceNum: number;
  beds: number;
  baths: number;
  sqft: string;
  badge: string;
  type: string;
  image: string;
  description: string;
  amenities: string[];
  phone: string;
  availability: string;
}

const PROPERTIES: Property[] = [
  {
    id: 'featured-meridian-apt-14b',
    name: 'The Meridian, Apt 14B',
    location: 'Ashram Road, Ahmedabad, Gujarat',
    city: 'Ahmedabad, GJ',
    price: '₹2.8 Cr',
    priceNum: 28000000,
    beds: 3, baths: 3, sqft: '2,840',
    badge: 'Ready to Move',
    type: 'Apartment',
    availability: 'Buy',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80&auto=format&fit=crop',
    description: 'The Meridian Apt 14B is a premium 3 BHK apartment located in the heart of Ahmedabad on Ashram Road. This beautifully designed residence offers modern interiors, ample natural light, and top-of-the-line fixtures throughout. Enjoy panoramic city views from the spacious balcony and a lifestyle of comfort and convenience.',
    amenities: ['Parking', 'Gym', 'Lift', 'Power Backup', 'Security', 'CCTV Surveillance', 'Gated Community'],
    phone: '+91 98765 43210',
  },
  {
    id: 'featured-greenview-villa',
    name: 'Greenview Villa, Phase II',
    location: 'Whitefield, Bangalore, Karnataka',
    city: 'Bangalore, KA',
    price: '₹4.5 Cr',
    priceNum: 45000000,
    beds: 4, baths: 4, sqft: '3,200',
    badge: 'Under Construction',
    type: 'Villa',
    availability: 'Buy',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80&auto=format&fit=crop',
    description: 'Greenview Villa Phase II is an exclusive 4 BHK villa nestled in the lush greenery of Whitefield, Bangalore. Featuring a private garden, open-plan living spaces, and premium fittings, this villa is crafted for those who value privacy, space, and a serene lifestyle within easy reach of major tech parks.',
    amenities: ['Garden', 'Clubhouse', 'Security', 'Parking', 'Swimming Pool', 'Children Play Area', 'Gated Community'],
    phone: '+91 98765 43211',
  },
  {
    id: 'featured-skyline-tower-28f',
    name: 'Skyline Tower, 28F',
    location: 'Lower Parel, Mumbai, Maharashtra',
    city: 'Mumbai, MH',
    price: '₹7.2 Cr',
    priceNum: 72000000,
    beds: 3, baths: 3, sqft: '1,950',
    badge: 'New Launch',
    type: 'Apartment',
    availability: 'Buy',
    image: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=80&auto=format&fit=crop',
    description: 'Skyline Tower 28F is a landmark high-rise offering breathtaking skyline views from the 28th floor in the vibrant Lower Parel neighbourhood of Mumbai. With world-class amenities, sophisticated interiors, and unmatched connectivity to business hubs, this 3 BHK apartment sets the benchmark for luxury urban living.',
    amenities: ['Gym', 'Swimming Pool', 'Clubhouse', 'Parking', 'Power Backup', 'Lift', 'CCTV Surveillance', 'Security'],
    phone: '+91 98765 43212',
  },
];

const BADGE_COLORS: Record<string, { bg: string; color: string }> = {
  'Ready to Move':       { bg: 'rgba(34,197,94,0.12)',  color: '#15803D' },
  'Under Construction':  { bg: 'rgba(234,179,8,0.12)',  color: '#92400E' },
  'New Launch':          { bg: 'rgba(27,58,92,0.1)',    color: '#1B3A5C' },
};

const PropertyCard: React.FC<{ property: Property; delay: number }> = ({ property, delay }) => {
  const [hovered, setHovered] = useState(false);
  const navigate = useNavigate();
  const badgeStyle = BADGE_COLORS[property.badge] || BADGE_COLORS['New Launch'];

  const propertyState = {
    _id: property.id,
    title: property.name,
    location: property.location,
    price: property.priceNum,
    image: [property.image],
    beds: property.beds,
    baths: property.baths,
    sqft: Number(property.sqft.replace(/,/g, '')),
    type: property.type,
    availability: property.availability,
    description: property.description,
    amenities: property.amenities,
    phone: property.phone,
  };

  const handleNavigate = () => {
    navigate(`/property/${property.id}`, { state: { property: propertyState } });
  };

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
      onClick={handleNavigate}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative overflow-hidden" style={{ height: 220 }}>
        <img
          src={property.image}
          alt={property.name}
          className="w-full h-full object-cover"
        />

        {/* Hover overlay */}
        <div
          className="absolute inset-0 flex items-center justify-center transition-opacity duration-300"
          style={{ background: 'rgba(27,58,92,0.55)', opacity: hovered ? 1 : 0 }}
        >
          <span
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
          </span>
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
