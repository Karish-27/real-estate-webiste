import React from 'react';
import mapLocationImage from '../../images/Map:Location.jpg';

const ContactMapSection: React.FC = () => {
  return (
    <section className="bg-[#F2EFE9] py-8 md:py-16">
      <div className="max-w-[1280px] mx-auto px-4 md:px-8">
        <div className="relative aspect-[1280/400] rounded-2xl overflow-hidden border border-[#E6E0DA] bg-gray-100">
          {/* Map Image */}
          <img 
            src={mapLocationImage}
            alt="Office location map"
            className="w-full h-full object-cover"
          />
          
          {/* Map Overlay Button */}
          <div className="absolute inset-0 flex items-center justify-center">
            <button className="bg-white shadow-2xl rounded-xl px-8 py-4 flex items-center gap-3 hover:shadow-3xl transition-shadow group">
              <span className="material-icons text-2xl text-[#1B3A5C] group-hover:scale-110 transition-transform">
                location_on
              </span>
              <div className="text-left">
                <p className="font-playfair font-bold text-base text-[#221410] mb-0.5">
                  NestPrime Office
                </p>
                <p className="font-inter font-extralight text-xs text-[#64748B]">
                  Click to view on Google Maps
                </p>
              </div>
              <span className="material-icons text-[#1B3A5C]">
                arrow_forward
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactMapSection;