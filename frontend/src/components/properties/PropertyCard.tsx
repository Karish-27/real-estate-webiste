import React, { useState } from 'react';
import { Link } from 'react-router-dom';

interface PropertyCardProps {
  id: string;
  image: string;
  name: string;
  price: string;
  location: string;
  beds: number;
  baths: number;
  sqft: number;
  badge?: string;
  tags?: string[];
}

const PropertyCard: React.FC<PropertyCardProps> = ({
  id,
  image,
  name,
  price,
  location,
  beds,
  baths,
  sqft,
  badge,
  tags = []
}) => {
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <Link to={`/property/${id}`} className="block">
      <div className="bg-white border border-[#E6E0DA] rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-300 group cursor-pointer">
      {/* Image Container */}
      <div className="relative aspect-[340/200] overflow-hidden">
        <img 
          src={image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-transparent h-20" />

        {/* Badge */}
        {badge && (
          <div className={`absolute top-2 left-2 px-2 py-0.5 rounded text-white font-space-mono text-xs font-bold shadow-lg ${
            badge === 'HOT' ? 'bg-[#1B3A5C]' :
            badge === 'SOLD' ? 'bg-gray-500' :
            badge === 'FOR RENT' ? 'bg-blue-500' :
            'bg-[#10B981]'
          }`}>
            {badge}
          </div>
        )}

        {/* Favorite Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            setIsFavorite(!isFavorite);
          }}
          className="absolute top-2 right-2 w-7 h-7 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-all shadow-lg group/fav"
        >
          <span className={`material-icons text-base transition-all ${
            isFavorite 
              ? 'text-[#1B3A5C]' 
              : 'text-[#6B7280] group-hover/fav:text-[#1B3A5C]'
          }`}>
            {isFavorite ? 'favorite' : 'favorite_border'}
          </span>
        </button>
      </div>

      {/* Content */}
      <div className="p-3">
        {/* Price */}
        <div className="flex items-baseline gap-0.5 mb-1">
          <span className="font-space-mono font-bold text-sm text-[#1B3A5C]">₹</span>
          <span className="font-space-mono font-bold text-base text-[#1B3A5C]">{price}</span>
        </div>

        {/* Name */}
        <h3 className="font-playfair text-sm text-[#221410] mb-0.5 leading-snug line-clamp-1">
          {name}
        </h3>

        {/* Location */}
        <div className="flex items-center gap-0.5 mb-2">
          <span className="material-icons text-[#1B3A5C] text-xs">location_on</span>
          <span className="font-inter font-extralight text-xs text-[#6B7280] line-clamp-1">{location}</span>
        </div>

        {/* Specs */}
        <div className="flex items-center gap-2 pb-2 border-b border-[#E6E0DA]">
          <div className="flex items-center gap-0.5">
            <span className="material-icons text-[#6B7280] text-sm">bed</span>
            <span className="font-inter font-extralight text-xs text-[#221410]">{beds}</span>
          </div>
          <div className="flex items-center gap-0.5">
            <span className="material-icons text-[#6B7280] text-sm">bathtub</span>
            <span className="font-inter font-extralight text-xs text-[#221410]">{baths}</span>
          </div>
          <div className="flex items-center gap-0.5">
            <span className="material-icons text-[#6B7280] text-sm">square_foot</span>
            <span className="font-inter font-extralight text-xs text-[#221410]">{sqft.toLocaleString()} sqft</span>
          </div>
        </div>

        {/* Tags */}
        {tags.length > 0 && (
          <div className="flex flex-wrap gap-1 mt-2 mb-2">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="px-2 py-0.5 bg-[#F8F6F6] border border-[#E6E0DA] rounded-full font-inter font-extralight text-xs text-[#6B7280] uppercase tracking-wide"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        <button className="w-full mt-1.5 bg-transparent border border-[#1B3A5C] text-[#1B3A5C] font-inter font-bold text-xs py-1.5 rounded-lg hover:bg-[#1B3A5C] hover:text-white transition-all">
          View Details
        </button>
      </div>
    </div>
    </Link>
  );
};

export default PropertyCard;