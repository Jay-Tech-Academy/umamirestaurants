export interface Dish {
  id: string;
  name: string;
  category: 'World of Asia' | 'Teppanyaki' | 'Indian Kitchen' | 'Italian Kitchen' | 'Carvery' | 'Desserts';
  description: string;
  image: string;
  calories?: string;
  dietary: {
    isHalal: boolean;
    isVegetarian: boolean;
    isVegan: boolean;
    isGlutenFree: boolean;
    isSpicy?: boolean;
  };
  highlight?: string;
  station: string;
}

export interface Review {
  id: string;
  author: string;
  location: string;
  rating: number;
  date: string;
  avatar: string;
  visitType: string;
  comment: string;
  verified: boolean;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  badge?: string;
}

export interface BranchLocation {
  id: string;
  name: string;
  city: string;
  isFlagship?: boolean;
  isCurrent?: boolean;
  address: string;
  postcode: string;
  phone: string;
  formattedPhone: string;
  email: string;
  status: string;
  hours: string;
  capacity: string;
  features: string[];
  image: string;
  googleMapsUrl: string;
}

export interface Offer {
  id: string;
  title: string;
  badge: string;
  discount: string;
  description: string;
  terms: string;
  validDays: string;
  code?: string;
  category: 'Student' | 'NHS & Services' | 'Celebration' | 'Family' | 'Happy Hour' | 'Corporate';
  highlight: string;
}

export interface JobOpening {
  id: string;
  title: string;
  department: 'Kitchen & Culinary' | 'Front of House' | 'Bar & Hospitality' | 'Operations';
  type: 'Full-time' | 'Part-time' | 'Flexible';
  salary: string;
  location: string;
  description: string;
  responsibilities: string[];
  requirements: string[];
  isHot?: boolean;
}

export const BRANCH_INFO = {
  name: 'Umami World Kitchen',
  branch: 'Telford Flagship Branch',
  tagline: 'Unlimited food. 100+ global flavours. One unforgettable table.',
  fullAddress: 'Unit 1, Southwater Square, Southwater, Telford TF3 4HS',
  shortLocation: 'Southwater Square, Telford',
  landmarks: 'Beside Cineworld, Southwater One Library & Telford Ice Rink (Opposite Southwater Lake)',
  parkingDetails: 'Southwater Multi-Storey Car Park (Sat Nav: TF3 4EJ) — 150m walk, covered, 24/7 with EV charging',
  phone: '01952 291 110',
  formattedPhone: '+44 1952 291110',
  email: 'telford@umamiworldkitchen.com',
  rating: 4.5,
  reviewCount: '1,340+',
  pricePreview: 'From £11.99',
  postcode: 'TF3 4HS',
  parkingPostcode: 'TF3 4EJ',
  googleMapsUrl: 'https://maps.google.com/?q=Umami+World+Kitchen+Southwater+Square+Telford+TF3+4HS',
  designMyNightUrl: 'https://www.designmynight.com/uk/restaurants/birmingham/umami-world-kitchen-telford',
  expansionVision: {
    headline: 'Enterprise Multi-Branch Scalability',
    summary: 'Engineered for seamless digital deployment across Leicester (Highcross), Blackpool (Bank Hey Street), and nationwide destinations.',
    targetBranches: [
      { name: 'Leicester', location: 'Highcross Shopping Centre (LE1 4SA)', status: 'Replication Ready' },
      { name: 'Blackpool', location: '88-92 Bank Hey Street (FY1 4RY)', status: 'Replication Ready' },
      { name: 'Coventry', location: '42 Corporation Street (CV1 1GF)', status: 'Replication Ready' },
    ],
  },
  otherBranches: [
    { name: 'Leicester', status: 'Open Daily', address: 'Highcross Shopping Centre, LE1 4SA' },
    { name: 'Blackpool', status: 'Open Daily', address: 'Bank Hey Street, FY1 4RY' },
    { name: 'Coventry', status: 'Open Daily', address: 'Corporation Street, CV1 1GF' },
  ],
  sittingsInfo: [
    {
      period: 'Weekday Lunch',
      days: 'Monday – Friday',
      hours: '12:00 – 15:30',
      adultPrice: '£11.99',
      childPrice: '£6.99',
      features: ['Over 70 midday buffet dishes', 'Live noodle bar', 'Fresh salad bar & pizza', 'Under 3s eat free'],
      isPopular: false,
    },
    {
      period: 'Grand Dinner Feast',
      days: 'Monday – Thursday',
      hours: '17:00 – 22:00',
      adultPrice: '£19.99',
      childPrice: '£9.99',
      features: ['All 6 live international stations', 'Live Teppanyaki griddle & steak', 'Full carvery roast', 'Chocolate fountain'],
      isPopular: true,
    },
    {
      period: 'Weekend Evening',
      days: 'Friday – Saturday',
      hours: '17:00 – 22:30',
      adultPrice: '£22.99',
      childPrice: '£11.49',
      features: ['Full gourmet seafood & king prawns', 'Chef Teppanyaki fire displays', 'Signature Cantonese carvery', 'Live dessert theatre'],
      isPopular: true,
    },
    {
      period: 'Sunday Family Feast',
      days: 'Sunday & Bank Holidays',
      hours: '12:00 – 21:30',
      adultPrice: '£20.99',
      childPrice: '£10.49',
      features: ['Traditional British roast carvery', 'Yorkshire puddings & trimmings', 'Unlimited global buffets', 'Family booth seating'],
      isPopular: false,
    },
  ],
};

export const DISHES_DATA: Dish[] = [
  {
    id: 'teppan-king-prawns',
    name: 'Teppanyaki Garlic Butter King Prawns',
    category: 'Teppanyaki',
    station: 'Live Japanese Griddle',
    description: 'Sizzled fresh before your eyes on the 300°C iron griddle with garlic butter, spring scallions, and Japanese mirin glaze.',
    image: 'https://images.unsplash.com/photo-1559742811-822873691df8?auto=format&fit=crop&w=800&q=80',
    highlight: "Chef's Sizzle Signature",
    dietary: {
      isHalal: true,
      isVegetarian: false,
      isVegan: false,
      isGlutenFree: true,
    },
  },
  {
    id: 'teppan-ribeye-beef',
    name: 'Sizzling Teriyaki Beef Strips',
    category: 'Teppanyaki',
    station: 'Live Japanese Griddle',
    description: 'Tender marinated British beef strips flame-seared with fresh bell peppers, sesame seeds, and house teriyaki sauce.',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80',
    highlight: 'Flambé Performance',
    dietary: {
      isHalal: true,
      isVegetarian: false,
      isVegan: false,
      isGlutenFree: false,
    },
  },
  {
    id: 'asia-crispy-duck',
    name: 'Crispy Cantonese Roast Duck',
    category: 'World of Asia',
    station: 'Cantonese Rotisserie',
    description: 'Golden spiced aromatic duck with steamed warm pancakes, shredded cucumber, leeks, and sweet rich hoisin dip.',
    image: 'https://images.unsplash.com/photo-1514944298352-f6749970e536?auto=format&fit=crop&w=800&q=80',
    highlight: 'Guest Favourite',
    dietary: {
      isHalal: true,
      isVegetarian: false,
      isVegan: false,
      isGlutenFree: false,
    },
  },
  {
    id: 'asia-dimsum-bamboo',
    name: 'Steamed Dim Sum Dumpling Selection',
    category: 'World of Asia',
    station: 'Dim Sum Steamers',
    description: 'Handcrafted crystal prawn har gow, chicken siu mai, and jade vegetable gyoza served fresh from bamboo steam baskets.',
    image: 'https://images.unsplash.com/photo-1496116218417-1a781b1c416c?auto=format&fit=crop&w=800&q=80',
    highlight: 'Made Fresh Daily',
    dietary: {
      isHalal: true,
      isVegetarian: false,
      isVegan: false,
      isGlutenFree: false,
    },
  },
  {
    id: 'asia-thai-green',
    name: 'Aromatic Thai Green Vegetable Curry',
    category: 'World of Asia',
    station: 'Pan-Asian Wok Bar',
    description: 'Silky coconut cream simmered with lemongrass, kaffir lime leaves, baby sweetcorn, bamboo shoots, and Thai holy basil.',
    image: 'https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?auto=format&fit=crop&w=800&q=80',
    highlight: '100% Plant-Based',
    dietary: {
      isHalal: true,
      isVegetarian: true,
      isVegan: true,
      isGlutenFree: true,
      isSpicy: true,
    },
  },
  {
    id: 'indian-butter-chicken',
    name: 'Delhi Royal Butter Chicken (Makhani)',
    category: 'Indian Kitchen',
    station: 'Clay Oven & Tandoor Station',
    description: 'Succulent tandoor-roasted chicken breast fillets bathed in a velvety tomato, fenugreek, butter, and cashew nut sauce.',
    image: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=800&q=80',
    highlight: '100% Halal Certified',
    dietary: {
      isHalal: true,
      isVegetarian: false,
      isVegan: false,
      isGlutenFree: true,
    },
  },
  {
    id: 'indian-paneer-tikka',
    name: 'Smoked Tandoori Paneer Masala',
    category: 'Indian Kitchen',
    station: 'Clay Oven & Tandoor Station',
    description: 'Golden cottage cheese cubes charred in our authentic charcoal clay oven with spiced peppers and aromatic garam masala.',
    image: 'https://images.unsplash.com/photo-1567184109411-b28f27018386?auto=format&fit=crop&w=800&q=80',
    highlight: 'Vegetarian Delight',
    dietary: {
      isHalal: true,
      isVegetarian: true,
      isVegan: false,
      isGlutenFree: true,
      isSpicy: true,
    },
  },
  {
    id: 'indian-garlic-naan',
    name: 'Live Tandoor Garlic & Coriander Naan',
    category: 'Indian Kitchen',
    station: 'Clay Oven & Tandoor Station',
    description: 'Slapped fresh onto the searing clay walls of the tandoor, brushed instantly with clarified ghee and roasted minced garlic.',
    image: 'https://images.unsplash.com/photo-1626074353765-517a681e40be?auto=format&fit=crop&w=800&q=80',
    highlight: 'Baked to Order',
    dietary: {
      isHalal: true,
      isVegetarian: true,
      isVegan: false,
      isGlutenFree: false,
    },
  },
  {
    id: 'italian-artisan-pizza',
    name: 'Stonebaked Rustica Truffle Pizza',
    category: 'Italian Kitchen',
    station: 'Stone Deck Pizza Oven',
    description: '48-hour fermented slow-dough crust topped with San Marzano pomodoro, Fior di Latte mozzarella, wild mushrooms, and truffle oil.',
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=80',
    highlight: 'Stone Hearth Fired',
    dietary: {
      isHalal: true,
      isVegetarian: true,
      isVegan: false,
      isGlutenFree: false,
    },
  },
  {
    id: 'italian-pasta-truffle',
    name: 'Creamy Parmesan & Porcini Penne',
    category: 'Italian Kitchen',
    station: 'Live Pasta Bar',
    description: 'Al dente penne tossed in rich aged Reggiano cream, porcini mushroom reduction, fresh cracked black pepper, and baby spinach.',
    image: 'https://images.unsplash.com/photo-1621996346565-e3d5d62810a9?auto=format&fit=crop&w=800&q=80',
    dietary: {
      isHalal: true,
      isVegetarian: true,
      isVegan: false,
      isGlutenFree: false,
    },
  },
  {
    id: 'carvery-roast-beef',
    name: 'Slow-Roasted British Topside Beef',
    category: 'Carvery',
    station: 'Traditional Carvery Station',
    description: 'Carved to your preferred thickness with golden duck-fat roast potatoes, towering crispy Yorkshire puddings, and red wine jus.',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80',
    highlight: 'Sunday Special Everyday',
    dietary: {
      isHalal: true,
      isVegetarian: false,
      isVegan: false,
      isGlutenFree: false,
    },
  },
  {
    id: 'carvery-gammon',
    name: 'Honey-Glazed Shropshire Gammon',
    category: 'Carvery',
    station: 'Traditional Carvery Station',
    description: 'Locally cured gammon roasted with clove studs and Shropshire honey, carved at our separate dedicated non-halal carvery block.',
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=800&q=80',
    highlight: 'Dedicated Carvery Station',
    dietary: {
      isHalal: false,
      isVegetarian: false,
      isVegan: false,
      isGlutenFree: true,
    },
  },
  {
    id: 'dessert-chocolate-fountain',
    name: 'Cascading Belgian Chocolate Fountain',
    category: 'Desserts',
    station: 'Sweet Theatre & Gelateria',
    description: 'Three-tier melted Belgian milk chocolate fountain with fresh strawberry skewers, soft marshmallows, waffle bites, and churros.',
    image: 'https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?auto=format&fit=crop&w=800&q=80',
    highlight: 'Children & Adult Favourite',
    dietary: {
      isHalal: true,
      isVegetarian: true,
      isVegan: false,
      isGlutenFree: true,
    },
  },
  {
    id: 'dessert-gelato-crepes',
    name: 'Warm Suzette Crepes & Artisanal Gelato',
    category: 'Desserts',
    station: 'Sweet Theatre & Gelateria',
    description: 'Lacy French crepes spun warm on the cast-iron griddle, accompanied by pistachio, Madagascan vanilla, and salted caramel gelatos.',
    image: 'https://images.unsplash.com/photo-1519869325930-281384150729?auto=format&fit=crop&w=800&q=80',
    highlight: 'Live Griddle Treats',
    dietary: {
      isHalal: true,
      isVegetarian: true,
      isVegan: false,
      isGlutenFree: false,
    },
  },
];

export const REVIEWS_DATA: Review[] = [
  {
    id: 'rev-1',
    author: 'Sophie Edwards',
    location: 'Lawley, Telford',
    rating: 5,
    date: '3 days ago',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=160&q=80',
    visitType: 'Family Birthday Celebration (Party of 8)',
    comment: 'Booked a table for my husband’s 40th with all the kids and grandparents. The teppanyaki chef was an absolute entertainer — fire show had the kids clapping! The Indian section alone is restaurant quality, and the chocolate fountain was the cherry on top. Exceptional value for money in Southwater!',
    verified: true,
  },
  {
    id: 'rev-2',
    author: 'Tariq Rahman',
    location: 'Wellington, Shropshire',
    rating: 5,
    date: '1 week ago',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=160&q=80',
    visitType: 'Dinner Date',
    comment: 'Delighted to confirm that their chicken and lamb are fully Halal certified with the paperwork clearly displayed. The Butter Chicken with fresh tandoori naan straight out of the clay oven is as good as any fine-dining curry house. Will definitely be returning every month!',
    verified: true,
  },
  {
    id: 'rev-3',
    author: 'Mark & Claire Davies',
    location: 'Shifnal, Telford',
    rating: 5,
    date: '2 weeks ago',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=160&q=80',
    visitType: 'Friday Night with Friends',
    comment: 'We used to visit the old static site which took forever to load. This new place is sleek and fast! Arrived at 7:30pm on Friday and our booked table was ready with zero wait. Fresh king prawns, roast beef carvery, and crispy duck refills every 5 minutes. Best night out at Southwater.',
    verified: true,
  },
  {
    id: 'rev-4',
    author: 'Harpreet Kaur',
    location: 'Priorslee, Telford',
    rating: 5,
    date: '3 weeks ago',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=160&q=80',
    visitType: 'Lunch Gathering with Colleagues',
    comment: 'At £11.99 for weekday lunch, this is hands down the best deal in Shropshire. We had colleagues who are vegan, gluten-free, and meat lovers — everyone left totally satisfied with huge smiles. The Southwater multi-storey car park is right next door too.',
    verified: true,
  },
];

export const FAQ_DATA: FAQItem[] = [
  {
    id: 'faq-halal',
    question: 'Is Umami World Kitchen Telford halal?',
    answer: 'Yes! All fresh chicken and lamb served across our Indian Tandoor, World of Asia, and Live Teppanyaki stations are 100% Halal certified by trusted UK suppliers. To strictly respect dietary principles, all pork items (such as the British roast gammon and bacon) are kept in a separate, isolated carvery section with dedicated carving knives, boards, and utensils.',
    badge: '100% Halal Certified Meats',
  },
  {
    id: 'faq-sitting',
    question: 'How long is a dining sitting?',
    answer: 'Each dining sitting is 1 hour 45 minutes from the moment your party is seated. This generous duration gives you ample time to tour all 6 international live cooking stations, watch the live teppanyaki flame shows, enjoy hot made-to-order tandoor naans, and visit our 3-tier chocolate fountain as many times as you desire.',
    badge: '1h 45m Unlimited Feast',
  },
  {
    id: 'faq-groups',
    question: 'Do you accommodate large group bookings?',
    answer: 'Yes, we are one of the largest hospitality venues in Telford Southwater! We comfortably seat parties of up to 280 guests with spacious leather booth seating and long party tables. Whether you are hosting a birthday, graduation, office night out, or wedding reception, our instant booking engine handles groups up to 30 online, or call us for larger private hires.',
    badge: 'Large Parties & Booths',
  },
  {
    id: 'faq-children',
    question: 'What is the pricing for children and infants?',
    answer: 'We pride ourselves on being Shropshire’s top family dining destination! Children under 150cm dine at reduced prices (from £6.99 for Lunch and £9.99 for Dinner). Toddlers and infants under 3 years old dine completely FREE! High chairs, baby changing facilities, and dedicated kid-approved dishes (mini pizzas, crispy tenders, noodles) are always ready.',
    badge: 'Under 3s Eat Free',
  },
  {
    id: 'faq-parking',
    question: 'Where can I park when visiting Telford Southwater?',
    answer: 'The Southwater Multi-Storey Car Park (Postcode: TF3 4EJ) is located just 150 metres from our front entrance, right beside Cineworld and Telford Ice Rink. It is safe, covered, accessible, and provides seamless pedestrian access directly into Southwater Square.',
    badge: 'Southwater TF3 4EJ',
  },
  {
    id: 'faq-walkins',
    question: 'Do we need to book in advance or do you accept walk-ins?',
    answer: 'We always hold a limited quota of tables for spontaneous walk-in guests on a first-come, first-served basis. However, peak times (especially Friday evenings, Saturdays, and Sunday lunch) fill up rapidly. We strongly recommend reserving online to guarantee instant seating without queueing.',
    badge: 'Instant Online Confirmation',
  },
];

export const UK_BRANCHES_DATA: BranchLocation[] = [
  {
    id: 'telford',
    name: 'Telford (Southwater)',
    city: 'Telford, Shropshire',
    isFlagship: true,
    isCurrent: true,
    address: 'Unit 1, Southwater Square, Southwater, Telford',
    postcode: 'TF3 4HS',
    phone: '01952 291 110',
    formattedPhone: '+44 1952 291110',
    email: 'telford@umamiworldkitchen.com',
    status: 'Open Daily',
    hours: 'Mon–Thu: 12:00–22:00 | Fri–Sat: 12:00–22:30 | Sun: 12:00–21:30',
    capacity: '280 Seats',
    features: ['Teppanyaki Live Stage', 'Halal Clay Tandoor', 'Italian Stone Oven', 'Chocolate Fountain', 'Dedicated Kids Booths', 'Adjacent Multi-Storey Car Park'],
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80',
    googleMapsUrl: 'https://maps.google.com/?q=Umami+World+Kitchen+Southwater+Telford+TF3+4HS',
  },
  {
    id: 'birmingham',
    name: 'Birmingham (Bullring City Centre)',
    city: 'Birmingham, West Midlands',
    isFlagship: true,
    address: 'Level 3, Bullring Shopping Estate, High Street',
    postcode: 'B5 4BU',
    phone: '0121 643 8820',
    formattedPhone: '+44 1216438820',
    email: 'birmingham@umamiworldkitchen.com',
    status: 'Open Daily',
    hours: 'Mon–Sun: 11:30–23:00',
    capacity: '360 Seats',
    features: ['Panoramic City Views', 'Extended Sushi Bar', 'VIP Private Dining Suite', 'Cocktail Lounge Bar'],
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80',
    googleMapsUrl: 'https://maps.google.com/?q=Bullring+Shopping+Centre+Birmingham',
  },
  {
    id: 'manchester',
    name: 'Manchester (The Printworks)',
    city: 'Manchester, Greater Manchester',
    address: 'Unit 4, The Printworks, 27 Withy Grove',
    postcode: 'M4 2BS',
    phone: '0161 832 9940',
    formattedPhone: '+44 1618329940',
    email: 'manchester@umamiworldkitchen.com',
    status: 'Open Daily',
    hours: 'Mon–Sun: 12:00–23:00',
    capacity: '320 Seats',
    features: ['Late Night Dining', 'Craft Beer Taps', 'Double Teppanyaki Arena', 'Pre-Show Dinner Packages'],
    image: 'https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=800&q=80',
    googleMapsUrl: 'https://maps.google.com/?q=The+Printworks+Manchester',
  },
  {
    id: 'leicester',
    name: 'Leicester (Highcross)',
    city: 'Leicester, East Midlands',
    address: '5 St Peters Square, Highcross Shopping Centre',
    postcode: 'LE1 4SA',
    phone: '0116 251 7710',
    formattedPhone: '+44 1162517710',
    email: 'leicester@umamiworldkitchen.com',
    status: 'Open Daily',
    hours: 'Mon–Sun: 12:00–22:30',
    capacity: '290 Seats',
    features: ['Expanded South Asian Curries', 'Authentic Halal Naan Breads', 'Outdoor Terrace Seating'],
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80',
    googleMapsUrl: 'https://maps.google.com/?q=Highcross+Leicester+LE1+4SA',
  },
  {
    id: 'leeds',
    name: 'Leeds (Trinity Centre)',
    city: 'Leeds, West Yorkshire',
    address: 'Trinity Leeds, Albion Street',
    postcode: 'LS1 5ER',
    phone: '0113 380 4490',
    formattedPhone: '+44 1133804490',
    email: 'leeds@umamiworldkitchen.com',
    status: 'Open Daily',
    hours: 'Mon–Sun: 12:00–22:30',
    capacity: '270 Seats',
    features: ['Dim Sum Steam Carts', 'Wood-Fired Pizza Station', 'Student Discount Hub'],
    image: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=800&q=80',
    googleMapsUrl: 'https://maps.google.com/?q=Trinity+Leeds+LS1+5ER',
  },
  {
    id: 'bristol',
    name: 'Bristol (Cabot Circus)',
    city: 'Bristol, South West',
    address: 'Glass Walk, Cabot Circus',
    postcode: 'BS1 3BF',
    phone: '0117 929 3340',
    formattedPhone: '+44 1179293340',
    email: 'bristol@umamiworldkitchen.com',
    status: 'Open Daily',
    hours: 'Mon–Sun: 12:00–22:00',
    capacity: '260 Seats',
    features: ['Gluten-Free & Vegan Zones', 'Botanical Mocktails Bar', 'Family Weekend Specials'],
    image: 'https://images.unsplash.com/photo-1543007630-9710e4a00a20?auto=format&fit=crop&w=800&q=80',
    googleMapsUrl: 'https://maps.google.com/?q=Cabot+Circus+Bristol',
  },
  {
    id: 'blackpool',
    name: 'Blackpool (Seafront Promenade)',
    city: 'Blackpool, Lancashire',
    address: '88-92 Bank Hey Street, Near Blackpool Tower',
    postcode: 'FY1 4RY',
    phone: '01253 624 330',
    formattedPhone: '+44 1253624330',
    email: 'blackpool@umamiworldkitchen.com',
    status: 'Open Daily',
    hours: 'Mon–Sun: 12:00–22:30',
    capacity: '310 Seats',
    features: ['Sea View Dining', 'Full Seaside British Carvery', 'Ice Cream Parlour Station'],
    image: 'https://images.unsplash.com/photo-1578474846511-04ba529f0b88?auto=format&fit=crop&w=800&q=80',
    googleMapsUrl: 'https://maps.google.com/?q=Bank+Hey+Street+Blackpool',
  },
  {
    id: 'coventry',
    name: 'Coventry (Corporation Street)',
    city: 'Coventry, West Midlands',
    address: '42 Corporation Street, City Centre',
    postcode: 'CV1 1GF',
    phone: '024 7622 9910',
    formattedPhone: '+44 2476229910',
    email: 'coventry@umamiworldkitchen.com',
    status: 'Open Daily',
    hours: 'Mon–Sun: 12:00–22:00',
    capacity: '250 Seats',
    features: ['Live Wok Station', 'Student Night Deals', 'Private Birthday Hire Area'],
    image: 'https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=800&q=80',
    googleMapsUrl: 'https://maps.google.com/?q=Corporation+Street+Coventry',
  },
];

export const OFFERS_DATA: Offer[] = [
  {
    id: 'offer-student',
    title: 'Student Unlimited Feast Deal',
    badge: '15% Off Total Bill',
    discount: '15% OFF',
    description: 'Fuel your studies with endless world flavours! Enjoy 15% off food bill on all lunchtime and weekday dinner sittings.',
    terms: 'Valid Monday to Thursday. Must present valid student ID card or UNiDAYS app upon arrival. Excludes bank holidays and December peak days.',
    validDays: 'Monday – Thursday',
    code: 'UMAMISTUDENT15',
    category: 'Student',
    highlight: 'Valid for Lunch & Dinner',
  },
  {
    id: 'offer-nhs',
    title: 'NHS & Emergency Services Hero Discount',
    badge: '10% Off For Keyworkers',
    discount: '10% OFF',
    description: 'A heartfelt thank you to our healthcare heroes, police, fire, and ambulance personnel. Enjoy 10% off your entire dining party bill.',
    terms: 'Valid all week for table up to 6 guests with valid Blue Light Card or NHS employee badge.',
    validDays: '7 Days a Week',
    code: 'BLUELIGHT10',
    category: 'NHS & Services',
    highlight: 'Applies to Entire Group (Up to 6)',
  },
  {
    id: 'offer-birthday',
    title: 'Birthday Guest Eats Completely Free!',
    badge: 'FREE Birthday Meal',
    discount: '100% Free Meal',
    description: 'Celebrate your special milestone at Umami Telford! The birthday celebrant dines free when booking a party of 4 or more paying adults.',
    terms: 'Valid within 7 days of your birthday. Minimum 4 paying adults required. Photo ID with date of birth required. Includes celebratory sparkler at your table!',
    validDays: 'Any Day with Booking',
    code: 'BIRTHDAYFREE',
    category: 'Celebration',
    highlight: 'Complimentary Sparkler Presentation',
  },
  {
    id: 'offer-kids',
    title: 'Kids Under 3 Eat Completely Free',
    badge: 'Free for Toddlers',
    discount: 'FREE',
    description: 'Family dining made effortless. All infants and toddlers under 3 dine completely free with access to all stations and desserts.',
    terms: 'Applies every day with any accompanying dining adult. Children under 150cm enjoy discounted youth rates.',
    validDays: 'Daily All Sittings',
    category: 'Family',
    highlight: 'Highchairs & Kids Cutlery Provided',
  },
  {
    id: 'offer-happy-hour',
    title: '2-for-1 Cocktails & Mocktails Happy Hour',
    badge: '2 for 1 Drinks',
    discount: '2-for-1',
    description: 'Sip handcrafted signature cocktails including Passionfruit Martini, Lychee Spritz, and Mango Mojitos at double the pleasure.',
    terms: 'Available Monday to Thursday 16:00 to 19:00 at the Southwater bar lounge.',
    validDays: 'Mon – Thu: 16:00 – 19:00',
    code: 'HAPPYHOUR241',
    category: 'Happy Hour',
    highlight: 'Over 14 Signature Cocktails',
  },
  {
    id: 'offer-corporate',
    title: 'Corporate & Large Party Group Saver',
    badge: '10% Group Saver',
    discount: '10% OFF',
    description: 'Planning an office social, graduation, sports club gathering, or reunion? Get 10% off for large group bookings of 10 or more guests.',
    terms: 'Requires reservation at least 48 hours in advance. Cannot be combined with other promotional discount codes.',
    validDays: 'Sunday – Thursday',
    code: 'GROUPSAVE10',
    category: 'Corporate',
    highlight: 'Dedicated Group Seating Area',
  },
];

export const CAREER_PERKS = [
  'Free unlimited world buffet meals on every working shift',
  '50% dining discount for up to 4 family members and friends',
  'Competitive hourly wages and performance-based tips share',
  'Accredited NVQ Hospitality and Food Safety certifications funded by Umami',
  'Flexible scheduling for students, parents, and full-time professionals',
  'Fast-track supervisor to restaurant manager development programme',
  'Workplace pension scheme and paid annual leave entitlement',
];

export const CAREERS_DATA: JobOpening[] = [
  {
    id: 'job-teppan-chef',
    title: 'Teppanyaki Show Chef',
    department: 'Kitchen & Culinary',
    type: 'Full-time',
    salary: '£32,000 – £38,000 per annum + Tips',
    location: 'Telford Southwater',
    description: 'We are seeking an energetic and theatrical Teppanyaki griddle chef capable of captivating guests with knife skills, fire shows, and culinary mastery.',
    responsibilities: [
      'Perform live griddle cooking shows for guests featuring steaks, prawns, salmon, and yakisoba',
      'Maintain impeccable cleanliness and strict food hygiene at the open teppanyaki theatre counter',
      'Engage warmly with diners and accommodate dietary queries with precision',
    ],
    requirements: [
      'Minimum 1-2 years experience on teppanyaki flat-top griddle',
      'Charismatic personality and enthusiasm for live culinary performance',
      'Food Hygiene Level 2 certification',
    ],
    isHot: true,
  },
  {
    id: 'job-tandoor-specialist',
    title: 'Tandoor & Curry Specialist Chef',
    department: 'Kitchen & Culinary',
    type: 'Full-time',
    salary: '£30,000 – £35,000 per annum',
    location: 'Telford Southwater',
    description: 'Lead our traditional Indian kitchen station, making fresh naan in authentic clay tandoor ovens and preparing signature curries from scratch.',
    responsibilities: [
      'Operate high-heat clay tandoor oven for live naan breads, kebabs, and tikka',
      'Batch cook authentic gravies (Makhani, Korma, Rogan Josh) maintaining consistent spices',
      'Monitor temperatures and ensure 100% halal certified meat integrity',
    ],
    requirements: [
      'Proven culinary background in authentic subcontinental cuisine',
      'Expertise in clay tandoor preparation and clay oven safety',
    ],
    isHot: false,
  },
  {
    id: 'job-foh-supervisor',
    title: 'Front of House Host / Supervisor',
    department: 'Front of House',
    type: 'Full-time',
    salary: '£12.80 – £14.00 per hour + Tips',
    location: 'Telford Southwater',
    description: 'Lead the greeting desk, coordinate table turnover, welcome arriving families and VIP groups, and uphold our 5-star customer experience.',
    responsibilities: [
      'Welcome guests warmly at the reception and manage electronic table allocations',
      'Supervise floor servers, table clearing efficiency, and customer satisfaction',
      'Assist guests with allergen queries and special celebration arrangements',
    ],
    requirements: [
      'Prior experience in high-volume restaurant or hospitality environment',
      'Excellent verbal communication and problem-solving skills under pressure',
    ],
    isHot: true,
  },
  {
    id: 'job-bartender',
    title: 'Mixologist & Barista',
    department: 'Bar & Hospitality',
    type: 'Part-time',
    salary: '£12.00 – £13.50 per hour + Tips',
    location: 'Telford Southwater',
    description: 'Craft mocktails, cocktails, artisanal coffees, and bubble teas for our buzzing Southwater dining room and lounge.',
    responsibilities: [
      'Prepare signature cocktails, mocktails, draught beers, and hot espresso beverages',
      'Maintain bar cleanliness, inventory rotation, and glass washing cycles',
      'Deliver friendly and swift service during peak weekend rushes',
    ],
    requirements: [
      'Cocktail making or coffee barista experience preferred (training provided)',
      'A friendly, positive attitude and reliability',
    ],
    isHot: false,
  },
  {
    id: 'job-porter',
    title: 'Kitchen Assistant & Porter',
    department: 'Operations',
    type: 'Flexible',
    salary: '£11.80 – £12.50 per hour',
    location: 'Telford Southwater',
    description: 'The backbone of our live buffet! Ensure cooking stations never run out of clean service dishes, cutlery, and kitchen equipment.',
    responsibilities: [
      'Operate automated commercial dishwashing machines efficiently',
      'Restock dining stations with sanitized serving spoons, plates, and bowls',
      'Maintain kitchen waste disposal, recycling, and hygiene compliance',
    ],
    requirements: [
      'Strong work ethic, reliability, and teamwork mentality',
      'No previous experience required — full on-the-job training provided',
    ],
    isHot: false,
  },
];

export const LEGAL_CONTENT = {
  privacyNotice: {
    title: 'Customer Privacy Notice (UK GDPR)',
    lastUpdated: 'Updated January 2026',
    sections: [
      {
        heading: '1. Introduction & Data Controller',
        content: 'Umami World Kitchen (Telford Southwater Branch) respects your privacy and is committed to protecting your personal data in strict compliance with the UK General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018.',
      },
      {
        heading: '2. Information We Collect',
        content: 'When you book a table, sign up for our newsletter, leave customer feedback, or apply for a career, we collect: your name, telephone number, email address, dining party size, reservation date/time, dietary preferences, and allergen notes. We do not store full credit card details on our local servers.',
      },
      {
        heading: '3. How We Use Your Data',
        content: 'Your details are used solely to: (a) confirm, manage, and verify your table booking via SMS/email; (b) cater safely to specified dietary or allergy requirements; (c) process career applications; and (d) send promotional vouchers and birthday treats where you have opted in.',
      },
      {
        heading: '4. Data Retention & Your Rights',
        content: 'Table reservation logs are securely archived for 12 months for quality assurance and tax accounting, then permanently purged. Under UK GDPR, you have the right to request a copy of your stored data, rectify inaccuracies, or request permanent erasure by emailing telford@umamiworldkitchen.com.',
      },
    ],
  },
  cookiePolicy: {
    title: 'Cookie & Tracking Policy',
    lastUpdated: 'Updated January 2026',
    sections: [
      {
        heading: '1. What Are Cookies?',
        content: 'Cookies are small text files placed on your computer or mobile device when you browse websites. They help the website remember your preferences and ensure our interactive booking engine and dietary filters perform smoothly.',
      },
      {
        heading: '2. Types of Cookies We Use',
        content: '• Strictly Necessary Cookies: Essential for table booking navigation, session security, and dietary filter state.\n• Performance & Analytics Cookies: Anonymous aggregated data allowing us to see which live stations and menu items are most viewed to improve page speed.\n• Preference Cookies: Remembers your selected dining branch (Telford) and theme preferences.',
      },
      {
        heading: '3. Managing Your Cookies',
        content: 'You can adjust your cookie settings at any time using your browser settings or our on-page cookie manager. Disabling strictly necessary cookies may impact the interactive table reservation form.',
      },
    ],
  },
  termsAndConditions: {
    title: 'Booking Terms & Dining Conditions',
    lastUpdated: 'Updated January 2026',
    sections: [
      {
        heading: '1. Dining Sitting Duration',
        content: 'To allow all our guests to enjoy fresh live cooking without excessive waiting, all dining sittings are strictly 1 hour and 45 minutes from your booked arrival time. We kindly request that tables be vacated promptly upon completion of the sitting.',
      },
      {
        heading: '2. Arrival & Table Grace Period',
        content: 'Please arrive on time. We hold reserved tables for a maximum grace period of 15 minutes past your booking time. If your party has not arrived within 15 minutes without notifying us by telephone (01952 291 110), your table may be released to waiting walk-in diners.',
      },
      {
        heading: '3. Food Waste & Unlimited Dining Etiquette',
        content: 'Umami World Kitchen takes pride in unlimited dining, and you are welcome to visit our 6 stations as many times as you like. However, in line with our environmental sustainability commitment, excessive uneaten food left on plates may incur a supplementary food waste charge of £3.00 per plate at the manager’s discretion.',
      },
      {
        heading: '4. Allergens & Dietary Responsibility',
        content: 'While our kitchen enforces strict food hygiene and keeps pork items physically separate from 100% Halal chicken and lamb, all dishes are prepared in an open theatre environment where cross-contamination of nuts, gluten, dairy, and shellfish may occur. Diners with severe or anaphylactic allergies must alert our floor manager upon arrival.',
      },
      {
        heading: '5. Children & Infants',
        content: 'Children under 150cm qualify for reduced youth pricing and child height is measured at reception if in question. Children under 3 dine free. Children must be accompanied by an adult at all times when visiting the hot live cooking stations and chocolate fountain.',
      },
    ],
  },
};

