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

export const BRANCH_INFO = {
  name: 'Umami World Kitchen',
  branch: 'Telford Branch',
  tagline: 'Unlimited food. 100+ global flavours. One unforgettable table.',
  fullAddress: 'Unit 1, Southwater Square, Southwater, Telford TF3 4HS',
  shortLocation: 'Southwater, Telford',
  phone: '01952 291 110',
  formattedPhone: '+44 1952 291110',
  email: 'telford@umamiworldkitchen.com',
  rating: 4.5,
  reviewCount: '1,340+',
  pricePreview: 'From £11.99',
  postcode: 'TF3 4HS',
  googleMapsUrl: 'https://maps.google.com/?q=Umami+World+Kitchen+Southwater+Telford+TF3+4HS',
  otherBranches: [
    { name: 'Leicester', status: 'Open Now', address: 'Highcross Shopping Centre' },
    { name: 'Blackpool', status: 'Open Now', address: 'Bank Hey Street' },
    { name: 'Coventry', status: 'Open Now', address: 'Corporation Street' },
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
