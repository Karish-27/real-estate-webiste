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

export const DUMMY_PROPERTIES: Property[] = [
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
  },
];
