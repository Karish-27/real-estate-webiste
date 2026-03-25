import React, { useState, useEffect } from 'react';
import { useParams, Link, useLocation } from 'react-router-dom';
import Navbar from '../components/common/Navbar';
import SimpleFooter from '../components/common/SimpleFooter';
import LoadingState from '../components/common/LoadingState';
import PropertyBreadcrumb from '../components/property-details/PropertyBreadcrumb';
import PropertyHeroImage from '../components/property-details/PropertyHeroImage';
import PropertyHeader from '../components/property-details/PropertyHeader';
import PropertyAbout from '../components/property-details/PropertyAbout';
import PropertyAmenities from '../components/property-details/PropertyAmenities';
import PropertyLocation from '../components/property-details/PropertyLocation';
import ScheduleViewingCard from '../components/property-details/ScheduleViewingCard';
import { propertiesAPI } from '../services/api';
import { useSEO } from '../hooks/useSEO';
import { DUMMY_PROPERTIES } from '../data/dummyProperties';
import StructuredData from '../components/common/StructuredData';

interface PropertyData {
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
  googleMapLink?: string;
}

const PropertyDetailsPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const location = useLocation();
  const stateProperty = (location.state as { property?: PropertyData } | null)?.property ?? null;
  const [property, setProperty] = useState<PropertyData | null>(stateProperty);
  const [loading, setLoading] = useState(!stateProperty);
  const [error, setError] = useState<string | null>(null);

  // Dynamic SEO based on loaded property
  useSEO({
    title: property ? `${property.title} - ${property.location}` : 'Property Details',
    description: property
      ? `${property.title} in ${property.location}. ${property.beds} beds, ${property.baths} baths, ${property.sqft} sqft. ${property.type}.`
      : 'View property details on NestPrime.',
  });

  useEffect(() => {
    if (stateProperty) return; // already have data from navigation state
    const fetchProperty = async () => {
      if (!id) return;
      try {
        setLoading(true);
        setError(null);
        const { data } = await propertiesAPI.getById(id);
        if (data.success && data.property) {
          setProperty(data.property);
        } else {
          setError('Property not found');
        }
      } catch (err: any) {
        console.error('Failed to fetch property:', err);
        const dummy = DUMMY_PROPERTIES.find(p => p._id === id);
        if (dummy) {
          setProperty(dummy);
        } else {
          setError('Failed to load property details. Please try again.');
        }
      } finally {
        setLoading(false);
      }
    };

    fetchProperty();
  }, [id]);

  // Format price for display
  const formatPrice = (price: number): string => {
    return price.toLocaleString('en-IN');
  };

  // Map availability to status
  const getStatus = (availability: string): 'available' | 'sold' | 'pending' => {
    switch (availability?.toLowerCase()) {
      case 'sold': return 'sold';
      case 'pending': return 'pending';
      default: return 'available';
    }
  };

  if (loading) {
    return (
      <div className="bg-white min-h-screen">
        <Navbar />
        <LoadingState message="Loading property details..." />
        <SimpleFooter />
      </div>
    );
  }

  if (error || !property) {
    return (
      <div className="bg-white min-h-screen">
        <Navbar />
        <div className="flex items-center justify-center py-32">
          <div className="text-center">
            <span className="material-icons text-5xl text-[#1B3A5C] mb-4">error_outline</span>
            <p className="font-inter text-xl text-[#374151] mb-4">{error || 'Property not found'}</p>
            <Link
              to="/properties"
              className="bg-[#1B3A5C] text-white font-inter font-bold px-8 py-3 rounded-lg hover:bg-[#142D48] transition-all inline-block"
            >
              Back to Properties
            </Link>
          </div>
        </div>
        <SimpleFooter />
      </div>
    );
  }

  // Extract city from location string (e.g. "Satellite, Ahmedabad, Gujarat" → "Ahmedabad")
  // Indian addresses typically end with state, so use second-to-last part as city
  const cityParts = property.location.split(',').map(s => s.trim());
  const city = cityParts.length >= 3
    ? cityParts[cityParts.length - 2]       // "Area, City, State" → City
    : cityParts.length === 2
      ? cityParts[0]                         // "City, State" → City
      : cityParts[0];                        // "City" → City

  // Parse amenities - handle legacy data where amenities may be a JSON string
  const parseAmenities = (amenities: string[]): string[] => {
    if (!amenities || amenities.length === 0) return [];
    // If single element that looks like a JSON array, parse it
    if (amenities.length === 1 && typeof amenities[0] === 'string' && amenities[0].startsWith('[')) {
      try {
        const parsed = JSON.parse(amenities[0]);
        if (Array.isArray(parsed)) return parsed;
      } catch { /* fall through */ }
    }
    return amenities;
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Property Structured Data for SEO */}
      <StructuredData
        type="property"
        data={{
          title: property.title,
          description: property.description,
          location: city,
          region: cityParts[cityParts.length - 1] || '',
          price: property.price,
          sqft: property.sqft,
          beds: property.beds,
          baths: property.baths,
          image: property.image?.[0],
        }}
      />

      {/* Navigation */}
      <Navbar />

      {/* Offset for fixed navbar */}
      <div className="pt-[70px]">

      {/* Breadcrumb Navigation */}
      <PropertyBreadcrumb
        city={city}
        propertyName={property.title}
      />

      {/* Hero Image */}
      <PropertyHeroImage image={property.image?.[0]} />

      {/* Property Header with Price & Specs */}
      <PropertyHeader
        status={getStatus(property.availability)}
        refNumber={`#${property._id.slice(-8).toUpperCase()}`}
        name={property.title}
        location={property.location}
        price={formatPrice(property.price)}
        beds={property.beds}
        baths={property.baths}
        sqft={property.sqft}
      />

      {/* Main Content Area */}
      <div className="bg-[#F2EFE9] py-8 md:py-12">
        <div className="max-w-[1280px] mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
            {/* Left Column - Main Content */}
            <div className="lg:col-span-2">
              <div className="bg-white border border-[#E6E0DA] rounded-2xl p-4 md:p-8 shadow-sm">
                {/* About Section */}
                <PropertyAbout description={property.description} />

                {/* Amenities Section */}
                <PropertyAmenities
                  amenities={parseAmenities(property.amenities)}
                />

                {/* Location Section */}
                <PropertyLocation
                  location={property.location}
                  propertyName={property.title}
                  googleMapLink={property.googleMapLink}
                />
              </div>
            </div>

            {/* Right Column - Schedule Viewing Sidebar */}
            <div className="lg:col-span-1">
              <ScheduleViewingCard
                property={{ name: property.title, id: property._id }}
              />
            </div>
          </div>
        </div>
      </div>

      </div>{/* end pt-[70px] offset wrapper */}

      {/* Simple Footer */}
      <SimpleFooter />
    </div>
  );
};

export default PropertyDetailsPage;
