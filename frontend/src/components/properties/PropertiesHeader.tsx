import React, { useState, useRef, useEffect } from 'react';

interface PropertiesHeaderProps {
  totalProperties?: number;
  onSortChange?: (sort: string) => void;
  onViewChange?: (view: 'grid' | 'list') => void;
  onFilterToggle?: () => void;
}

const sortOptions = [
  { value: 'featured',   label: 'Featured' },
  { value: 'price-low',  label: 'Price: Low to High' },
  { value: 'price-high', label: 'Price: High to Low' },
  { value: 'newest',     label: 'Newest First' },
  { value: 'beds',       label: 'Most Beds' },
];

const PropertiesHeader: React.FC<PropertiesHeaderProps> = ({
  totalProperties = 107,
  onSortChange,
  onViewChange,
  onFilterToggle,
}) => {
  const [sortBy, setSortBy] = useState('featured');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSortChange = (value: string) => {
    setSortBy(value);
    setDropdownOpen(false);
    onSortChange?.(value);
  };

  const handleViewChange = (mode: 'grid' | 'list') => {
    setViewMode(mode);
    onViewChange?.(mode);
  };

  const selectedLabel = sortOptions.find(o => o.value === sortBy)?.label ?? 'Featured';

  return (
    <div className="border-b border-[#E6E0DA] bg-white sticky top-0 z-10">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 py-4 md:py-6">
        <div className="flex items-center justify-between gap-3">
          {/* Left - Title and Count */}
          <div className="min-w-0">
            <h1 className="font-playfair text-xl md:text-3xl text-[#221410] mb-0.5 truncate">
              All Properties
            </h1>
            <p className="font-inter font-extralight text-xs md:text-sm text-[#6B7280]">
              Showing {totalProperties} {totalProperties === 1 ? 'property' : 'properties'}
            </p>
          </div>

          {/* Right - Controls */}
          <div className="flex items-center gap-2 md:gap-4 flex-shrink-0">
            {/* Mobile Filters Button */}
            <button
              onClick={onFilterToggle}
              className="md:hidden flex items-center gap-1.5 px-3 py-2 rounded-lg border border-[#E6E0DA] text-sm font-inter text-[#221410] bg-white"
            >
              <span className="material-icons text-base">tune</span>
              Filters
            </button>

            {/* Custom Sort Dropdown */}
            <div className="flex items-center gap-1.5">
              <span className="hidden sm:inline font-inter font-extralight text-sm text-[#6B7280]">
                Sort:
              </span>
              <div ref={dropdownRef} className="relative">
                {/* Trigger */}
                <button
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className="flex items-center gap-2 bg-white border border-[#E6E0DA] rounded-lg px-3 py-2 font-inter text-sm text-[#221410] cursor-pointer focus:outline-none focus:border-[#1B3A5C] transition-colors whitespace-nowrap"
                >
                  <span>{selectedLabel}</span>
                  <span className={`material-icons text-base text-[#6B7280] transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`}>
                    expand_more
                  </span>
                </button>

                {/* Dropdown Menu — anchored below the button */}
                {dropdownOpen && (
                  <div className="absolute right-0 top-full mt-1 w-44 bg-white border border-[#E6E0DA] rounded-xl shadow-lg z-50 overflow-hidden">
                    {sortOptions.map((option) => (
                      <button
                        key={option.value}
                        onClick={() => handleSortChange(option.value)}
                        className={`w-full text-left px-4 py-2.5 font-inter text-sm transition-colors ${
                          sortBy === option.value
                            ? 'bg-[#1B3A5C] text-white'
                            : 'text-[#221410] hover:bg-[#F5F3EE]'
                        }`}
                      >
                        {option.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* View Toggle */}
            <div className="hidden sm:flex items-center gap-1 bg-[#F8F6F6] rounded-lg p-1">
              <button
                onClick={() => handleViewChange('grid')}
                className={`p-2 rounded transition-all ${
                  viewMode === 'grid'
                    ? 'bg-white text-[#1B3A5C] shadow-sm'
                    : 'text-[#6B7280] hover:text-[#1B3A5C]'
                }`}
                title="Grid View"
              >
                <span className="material-icons text-xl">grid_view</span>
              </button>
              <button
                onClick={() => handleViewChange('list')}
                className={`p-2 rounded transition-all ${
                  viewMode === 'list'
                    ? 'bg-white text-[#1B3A5C] shadow-sm'
                    : 'text-[#6B7280] hover:text-[#1B3A5C]'
                }`}
                title="List View"
              >
                <span className="material-icons text-xl">view_list</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertiesHeader;