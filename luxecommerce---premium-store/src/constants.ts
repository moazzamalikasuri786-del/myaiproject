export interface Product {
  id: string;
  name: string;
  price: number;
  rating: number;
  image: string;
  category: string;
  description: string;
  images: string[];
  variants: {
    sizes: string[];
    colors: { name: string; hex: string }[];
  };
  highlights: string[];
  reviews: {
    id: string;
    user: string;
    rating: number;
    comment: string;
    date: string;
  }[];
}

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'AeroSound Pro Max',
    price: 549.00,
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=1200&q=80',
    category: 'Audio',
    description: 'Experience pure sonic perfection with the AeroSound Pro Max. Featuring industry-leading noise cancellation and spatial audio that puts you at the center of your music.',
    images: [
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1484704849700-f032a568e944?auto=format&fit=crop&w=1200&q=80'
    ],
    variants: {
      sizes: ['Standard'],
      colors: [
        { name: 'Space Black', hex: '#1a1a1a' },
        { name: 'Silver', hex: '#e5e5e5' },
        { name: 'Midnight Blue', hex: '#1e3a8a' }
      ]
    },
    highlights: [
      'Active Noise Cancellation',
      '20-hour Battery Life',
      'Spatial Audio with Dynamic Head Tracking',
      'Premium Aluminum Construction'
    ],
    reviews: [
      { id: 'r1', user: 'Alex Rivera', rating: 5, comment: 'Best headphones I have ever owned. The soundstage is incredible.', date: '2 days ago' }
    ]
  },
  {
    id: '2',
    name: 'Horizon Watch Series X',
    price: 399.00,
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1200&q=80',
    category: 'Wearables',
    description: 'The Horizon Watch Series X is more than just a timepiece. It is your health companion, your productivity hub, and your style statement.',
    images: [
      'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1544117518-3b21649103c4?auto=format&fit=crop&w=1200&q=80'
    ],
    variants: {
      sizes: ['40mm', '44mm'],
      colors: [
        { name: 'Graphite', hex: '#262626' },
        { name: 'Gold', hex: '#d4af37' }
      ]
    },
    highlights: [
      'Always-on Retina Display',
      'ECG and Blood Oxygen Monitoring',
      'Water Resistant up to 50m',
      'Fast Charging Support'
    ],
    reviews: [
      { id: 'r2', user: 'Sarah Jenkins', rating: 4, comment: 'Beautiful design, but battery could be better.', date: '1 week ago' }
    ]
  },
  {
    id: '3',
    name: 'Zenith Ergonomic Throne',
    price: 1299.00,
    rating: 5.0,
    image: 'https://images.unsplash.com/photo-1505843490701-5be5d0b19d58?auto=format&fit=crop&w=1200&q=80',
    category: 'Furniture',
    description: 'Redefine your workspace with the Zenith Ergonomic Throne. Engineered for maximum comfort during long sessions, blending futuristic design with health-conscious features.',
    images: [
      'https://images.unsplash.com/photo-1505843490701-5be5d0b19d58?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1200&q=80'
    ],
    variants: {
      sizes: ['Standard', 'Large'],
      colors: [
        { name: 'Carbon Black', hex: '#000000' },
        { name: 'Arctic White', hex: '#ffffff' }
      ]
    },
    highlights: [
      '4D Adjustable Armrests',
      'Breathable Mesh Fabric',
      'Dynamic Lumbar Support',
      '10-year Warranty'
    ],
    reviews: []
  }
];

export const CATEGORIES = [
  { name: 'Audio', image: 'https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=800&q=80' },
  { name: 'Wearables', image: 'https://images.unsplash.com/photo-1544117518-3b21649103c4?auto=format&fit=crop&w=800&q=80' },
  { name: 'Furniture', image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=800&q=80' },
  { name: 'Photography', image: 'https://images.unsplash.com/photo-1493863641943-9b68992a8d07?auto=format&fit=crop&w=800&q=80' }
];

export const TESTIMONIALS = [
  {
    id: '1',
    name: 'Sarah Johnson',
    role: 'Graphic Designer',
    content: 'The quality of the products here is unmatched. My headphones arrived in perfect condition and the sound is incredible.',
    avatar: 'https://i.pravatar.cc/150?u=sarah'
  },
  {
    id: '2',
    name: 'Michael Chen',
    role: 'Software Engineer',
    content: 'Fast delivery and excellent customer service. The smart watch I bought has become an essential part of my daily routine.',
    avatar: 'https://i.pravatar.cc/150?u=michael'
  },
  {
    id: '3',
    name: 'Elena Rodriguez',
    role: 'Creative Director',
    content: 'I love the minimalist aesthetic of this store. Everything is so curated and high-end. Highly recommended!',
    avatar: 'https://i.pravatar.cc/150?u=elena'
  }
];

