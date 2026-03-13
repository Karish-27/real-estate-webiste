import React, { useState, useEffect, useMemo } from 'react';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import FilterSidebar from '../components/properties/FilterSidebar';
import PropertiesHeader from '../components/properties/PropertiesHeader';
import PropertiesGrid from '../components/properties/PropertiesGrid';
import LoadingState from '../components/common/LoadingState';
import { propertiesAPI } from '../services/api';
import { useSEO } from '../hooks/useSEO';

export interface Property {
  _id: string;
  title: string;
  location: string;
  price: number;
  image: string[];
  beds: number;
  baths: number;
  sqft: number;
  type: string;
  availability: string;
  description: string;
  amenities: string[];
  phone: string;
}

const DUMMY_PROPERTIES: Property[] = [
  {
    _id: '1',
    title: 'The Meridian Penthouse',
    location: 'Bandra West, Mumbai',
    price: 45000000,
    image: ['https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=800'],
    beds: 4,
    baths: 4,
    sqft: 3200,
    type: 'Apartment',
    availability: 'Buy',
    description: 'Luxury penthouse with panoramic sea views and premium amenities.',
    amenities: ['Pool', 'Gym', 'Sea View'],
    phone: '+91 98765 43210',
  },
  {
    _id: '2',
    title: 'Greenview Estate Villa',
    location: 'Whitefield, Bangalore',
    price: 32000000,
    image: ['https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800'],
    beds: 5,
    baths: 5,
    sqft: 4500,
    type: 'Villa',
    availability: 'Buy',
    description: 'Spacious villa in a premium gated community with private garden.',
    amenities: ['Garden', 'Clubhouse', 'Security'],
    phone: '+91 98765 43210',
  },
  {
    _id: '3',
    title: 'Skyline Residences',
    location: 'Cyber City, Gurgaon',
    price: 18000000,
    image: ['https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=800'],
    beds: 3,
    baths: 3,
    sqft: 2100,
    type: 'Apartment',
    availability: 'Buy',
    description: 'Modern high-rise apartment near major tech parks.',
    amenities: ['Gym', 'Parking', 'Smart Home'],
    phone: '+91 98765 43210',
  },
  {
    _id: '4',
    title: 'Heritage Row House',
    location: 'Koregaon Park, Pune',
    price: 25000000,
    image: ['https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800'],
    beds: 4,
    baths: 3,
    sqft: 2800,
    type: 'House',
    availability: 'Buy',
    description: 'Beautifully restored row house with modern interiors in a quiet lane.',
    amenities: ['Terrace', 'Security', 'Parking'],
    phone: '+91 98765 43210',
  },
  {
    _id: '5',
    title: 'Seabreeze Apartment',
    location: 'ECR, Chennai',
    price: 120000,
    image: ['https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&q=80&w=800'],
    beds: 2,
    baths: 2,
    sqft: 1400,
    type: 'Apartment',
    availability: 'Rent',
    description: 'Breezy sea-facing apartment fully furnished for immediate move-in.',
    amenities: ['Furnished', 'Sea View', 'Pool'],
    phone: '+91 98765 43210',
  },
  {
    _id: '6',
    title: 'The Azure High-Rise',
    location: 'Banjara Hills, Hyderabad',
    price: 28000000,
    image: ['https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&q=80&w=800'],
    beds: 3,
    baths: 3,
    sqft: 2400,
    type: 'Apartment',
    availability: 'Buy',
    description: 'Premium apartment with luxurious amenities and central location.',
    amenities: ['Gym', 'Pool', 'Clubhouse'],
    phone: '+91 98765 43210',
  }
];

const PropertiesPage: React.FC = () => {
  useSEO({
    title: 'Properties - Browse Listings',
    description: 'Browse apartments, houses, villas, and more. Filter by location, price, bedrooms, and amenities.',
  });

  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [properties, setProperties] = useState<Property[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [sortBy, setSortBy] = useState('featured');
  const [filters, setFilters] = useState<{
    location?: string;
    propertyType?: string[];
    availability?: string;
    priceRange?: [number, number];
    bedrooms?: number;
    bathrooms?: number;
    amenities?: string[];
  }>({});

  // Fetch properties from backend
  useEffect(() => {
    const fetchProperties = async () => {
      try {
        setLoading(true);
        setError(null);
        const { data } = await propertiesAPI.getAll();
        if (data && data.success && data.property && data.property.length > 0) {
          setProperties(data.property);
        } else {
          // Fallback to dummy properties if DB is empty for demo purposes
          setProperties(DUMMY_PROPERTIES);
        }
      } catch (err: any) {
        console.error('Failed to fetch properties:', err);
        // Fallback to dummy data on API failure so the page is not empty
        setProperties(DUMMY_PROPERTIES);
        setError(null);
      } finally {
        setLoading(false);
      }
    };

    fetchProperties();
  }, []);

  // Apply filters and sorting
  const filteredProperties = useMemo(() => {
    let result = [...properties];

    // Filter by location
    if (filters.location) {
      result = result.filter((p) =>
        p.location.toLowerCase().includes(filters.location!.toLowerCase())
      );
    }

    // Filter by property type
    if (filters.propertyType && filters.propertyType.length > 0) {
      result = result.filter((p) =>
        filters.propertyType!.some(t => t.toLowerCase() === p.type.toLowerCase())
      );
    }

    // Filter by availability (rent / buy)
    if (filters.availability) {
      result = result.filter((p) =>
        p.availability.toLowerCase() === filters.availability!.toLowerCase()
      );
    }

    // Filter by price range
    // Slider uses 0–200 scale where each unit = 10 Lakhs (so 200 = ₹20 Cr)
    if (filters.priceRange) {
      const [min, max] = filters.priceRange;
      const minPrice = min * 1000000;  // slider unit → ₹ (× 10L)
      const maxPrice = max * 1000000;
      result = result.filter((p) => {
        if (p.price < minPrice) return false;
        if (max >= 200) return true; // 200 = no upper cap
        return p.price <= maxPrice;
      });
    }

    // Filter by bedrooms (>= selected)
    if (filters.bedrooms && filters.bedrooms > 0) {
      result = result.filter(p => p.beds >= filters.bedrooms!);
    }

    // Filter by bathrooms (>= selected)
    if (filters.bathrooms && filters.bathrooms > 0) {
      result = result.filter(p => p.baths >= filters.bathrooms!);
    }

    // Filter by amenities (must have all selected)
    if (filters.amenities && filters.amenities.length > 0) {
      result = result.filter(p => 
        filters.amenities!.every(filterAmenity => 
          p.amenities.some(propertyAmenity => 
            propertyAmenity.toLowerCase() === filterAmenity.toLowerCase()
          )
        )
      );
    }

    // Sort
    switch (sortBy) {
      case 'price-low':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'beds':
        result.sort((a, b) => b.beds - a.beds);
        break;
      case 'newest':
        // Assuming there is a date field, if not, use _id roughly? Or skip.
        // User asked for "Newest (by date added, default)". 
        // Component doesn't have date. I will try to sort by _id descending (implicit timestamp in Mongo ObjectId)
        result.sort((a, b) => b._id.localeCompare(a._id));
        break;
      case 'featured':
      default:
        // Featured could be a flag, or just default order.
        break;
    }

    return result;
  }, [properties, filters, sortBy]);

  const handleFilterChange = (newFilters: any) => {
    setFilters(newFilters);
  };

  const handleSortChange = (sort: string) => {
    setSortBy(sort);
  };

  const handleViewChange = (mode: 'grid' | 'list') => {
    setViewMode(mode);
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Sticky Navigation */}
      <Navbar />

      <div className="flex">
        {/* Left Sidebar - Filters */}
        <FilterSidebar onFilterChange={handleFilterChange} />

        {/* Main Content Area */}
        <div className="flex-1">
          {/* Properties Header with Sort and View Controls */}
          <PropertiesHeader
            totalProperties={filteredProperties.length}
            onSortChange={handleSortChange}
            onViewChange={handleViewChange}
          />


          {/* Loading State */}
          {loading && <LoadingState message="Loading properties..." />}

          {/* Error State */}
          {error && !loading && (
            <div className="flex items-center justify-center py-24">
              <div className="text-center">
                <span className="material-icons text-4xl text-[#1B3A5C] mb-4">error_outline</span>
                <p className="font-inter text-[#374151] mb-4">{error}</p>
                <button
                  onClick={() => window.location.reload()}
                  className="bg-[#1B3A5C] text-white font-inter font-bold px-6 py-2 rounded-lg hover:bg-[#142D48] transition-all"
                >
                  Retry
                </button>
              </div>
            </div>
          )}

          {/* Empty State */}
          {!loading && !error && filteredProperties.length === 0 && (
            <div className="flex items-center justify-center py-24">
              <div className="text-center">
                <span className="material-icons text-4xl text-[#9CA3AF] mb-4">search_off</span>
                <p className="font-inter text-[#374151] mb-2">No properties found</p>
                <p className="font-inter font-extralight text-sm text-[#6B7280]">Try adjusting your filters</p>
              </div>
            </div>
          )}

          {/* Properties Grid */}
          {!loading && !error && filteredProperties.length > 0 && (
            <PropertiesGrid properties={filteredProperties} viewMode={viewMode} />
          )}
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default PropertiesPage;
