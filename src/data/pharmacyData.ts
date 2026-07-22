import { ServiceItem, ReviewItem, FAQItem, HealthTip, GalleryItem } from '../types';

export const BUSINESS_INFO = {
  name: 'Pihu Medical Hall',
  tagline: 'Your Trusted Medical Store for Genuine Medicines & Healthcare Needs',
  category: 'Licensed Retail Pharmacy & Healthcare Essentials',
  address: '02.Balapur, Belaganj, Gaya, Bihar 804403',
  landmark: 'Near Belaganj Main Market, Gaya Road',
  phone: '6205468847',
  displayPhone: '+91 6205468847',
  whatsappNumber: '6205468847',
  whatsappRaw: '916205468847',
  email: 'contact@pihumedicalhall.com',
  workingHours: {
    weekdays: 'Monday - Saturday: 7:00 AM - 10:00 PM',
    sunday: 'Sunday: 8:00 AM - 9:00 PM',
    emergency: 'Emergency Medicine Dispensing Available 24/7 on Call'
  },
  googleMapsUrl: 'https://maps.google.com/?q=02.Balapur,+Belaganj,+Gaya,+Bihar+804403',
  googleMapsEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14467.5312!2d84.9785!3d24.9654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f32bd000000001%3A0x1!2sBelaganj%2C+Gaya%2C+Bihar+804403!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin',
  establishedYear: '2016',
  ownerName: 'Sunil Kumar (Proprietor & Pharmacist)',
  dlNumber: 'BR-GAY-2016-PH-8847',
  gstNumber: '10AAAAA0000A1Z5'
};

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'prescription-medicines',
    title: 'Prescription Medicines',
    iconName: 'Pill',
    shortDesc: '100% genuine allopathic, ayurvedic, and specialty medicines directly sourced from certified pharmaceutical distributors.',
    fullDesc: 'We stock a complete inventory of prescribed medications across cardiology, diabetology, neurology, pediatrics, and general medicine. Every strip is checked for batch authenticity and expiry date before dispensing.',
    category: 'Medicines',
    features: [
      'Authentic & Batch-Tested Products',
      'Temperature Controlled Cold-Chain Insulin',
      'Prescription Verification by Licensed Pharmacists',
      'WhatsApp Upload & Home Delivery'
    ],
    popularItems: ['Diabetic Medication', 'BP & Cardiac Care', 'Antibiotics', 'Thyroid Care', 'Psychiatric & Neurological Prescriptions']
  },
  {
    id: 'otc-medicines',
    title: 'OTC Medicines & First Aid',
    iconName: 'Bandage',
    shortDesc: 'Fast relief for daily ailments, fever, cough, acidity, body pain, and immediate first-aid medical needs.',
    fullDesc: 'Over-the-counter essentials for every household in Belaganj. From fever relievers and antacids to antiseptics and burn gels, get trusted guidance from our in-house medical experts.',
    category: 'Medicines',
    features: [
      'Instant Fever & Cold Remedies',
      'Oral Rehydration & Electrolytes',
      'Complete First-Aid Emergency Kits',
      'Topical Ointments & Pain Sprays'
    ],
    popularItems: ['Paracetamol / Dolo 650', 'Gelusil / Digene Antacids', 'Electral ORS', 'Volini Spray', 'Betadine Antiseptic']
  },
  {
    id: 'health-devices',
    title: 'Health Monitors & Digital Devices',
    iconName: 'Activity',
    shortDesc: 'Digital BP monitors, blood glucose meters, pulse oximeters, digital thermometers, and nebulizers with warranty.',
    fullDesc: 'Monitor vital health stats at home with precision medical equipment. We provide demonstration on how to use glucometers and BP cuffs correctly for accurate readings.',
    category: 'Devices',
    features: [
      'Certified Accurate Home Diagnostics',
      'Free Battery & Function Inspection',
      'Instruction Guidance for Senior Citizens',
      'Leading Brands: Omron, Accu-Chek, Dr. Morepen'
    ],
    popularItems: ['Omron Digital BP Cuffs', 'Accu-Chek Glucose Test Kits', 'Compressor Nebulizer Machines', 'Fingertip Pulse Oximeters']
  },
  {
    id: 'surgical-equipment',
    title: 'Medical Equipment & Surgical Supplies',
    iconName: 'Syringe',
    shortDesc: 'Hospital-grade surgical gloves, sterile bandages, IV sets, catheters, crepe bandages, and orthopedic supports.',
    fullDesc: 'We supply high-grade surgical essentials to local clinics, home patients, and emergency care needs across Belaganj and nearby villages in Gaya district.',
    category: 'Surgical',
    features: [
      'Sterile & Hygienically Sealed',
      'Bulk Availability for Local Clinics',
      'Orthopedic Belts & Knee Braces',
      'Disposables & Syringes'
    ],
    popularItems: ['3-Ply Surgical Masks', 'Sterile Gauze & Cotton 500g', 'Lumbosacral Back Belts', 'Disposable Gloves & Syringes']
  },
  {
    id: 'home-care',
    title: 'Patient Home Care Essentials',
    iconName: 'HeartPulse',
    shortDesc: 'Adult diapers, underpads, bed pans, hot water bags, steam inhalers, and mobility assistance aids.',
    fullDesc: 'Empowering families to care for bedridden or recovering elder relatives with comfort, cleanliness, and dignity.',
    category: 'Care',
    features: [
      'High-Absorbency Adult Care Diapers',
      'Patient Hygiene & Anti-Bedsore Aids',
      'Comfort Hot Water & Ice Bags',
      'Discreet Packaging & Fast Local Delivery'
    ],
    popularItems: ['Adult Diaper Pants (M/L/XL)', 'Underpads 60x90cm', 'Facial Vaporizer / Steamer', 'Water Beds for Bedridden Patients']
  },
  {
    id: 'supplements-vitamins',
    title: 'Nutritional Supplements & Immunity Boosters',
    iconName: 'ShieldPlus',
    shortDesc: 'Multivitamins, calcium supplements, protein powders, iron syrups, and immunity boosters for all age groups.',
    fullDesc: 'Ensure your family’s daily nutritional goals are met with genuine protein formulations, pediatric health drinks, and calcium tablets.',
    category: 'Supplements',
    features: [
      'Doctor Recommended Calcium & Vit D3',
      'Pregnancy & Maternal Nutrition Drinks',
      'Multivitamin & Mineral Tonics',
      'Sugar-Free Options for Diabetics'
    ],
    popularItems: ['Shelcal 500', 'Becosules Z', 'Horlicks Mother\'s Plus', 'Ensure Diabetes Care', 'ProteinX Shake']
  },
  {
    id: 'baby-mother-care',
    title: 'Baby Care & Maternal Products',
    iconName: 'Baby',
    shortDesc: 'Top baby diaper pants, dermatological baby wipes, tear-free baby shampoo, baby food formulas, and maternal care.',
    fullDesc: 'Delicate care for newborn infants and mothers. All baby formulas and skincare items are fresh, authentic, and stored under safe hygienic conditions.',
    category: 'Baby Care',
    features: [
      'Dermatologically Tested Baby Skincare',
      'Premium Soft Diaper Pants (Pampers/Huggies)',
      'Infant Food Formulas (Lactogen/Similac)',
      'Feeding Bottles & Sterilizers'
    ],
    popularItems: ['Pampers Diaper Pants', 'Sebamed Baby Wash', 'Himalaya Baby Lotion', 'Lactogen / Nan Pro', 'Johnson\'s Baby Oil']
  },
  {
    id: 'personal-care-hygiene',
    title: 'Personal Care & Hygiene Products',
    iconName: 'Sparkles',
    shortDesc: 'Dermatology-recommended soaps, oral care, antiseptics, intimate hygiene, and premium skincare essentials.',
    fullDesc: 'Quality personal care remedies for clear skin, dental hygiene, hair loss, and sanitization from top pharmaceutical personal care brands.',
    category: 'Personal Care',
    features: [
      'Medicately Formulated Soaps & Lotions',
      'Sensitivity Toothpastes & Mouthwashes',
      'Hand Sanitizers & Antiseptic Liquids',
      'Sanitary Pads & Intimate Hygiene'
    ],
    popularItems: ['Dettol Liquid Antiseptic', 'Sensodyne Toothpaste', 'Derma-co Facewashes', 'Whisper / Stayfree Hygiene', 'Selsun Shampoo']
  }
];

export const FEATURED_PRODUCTS = [
  {
    id: 'prod-1',
    name: 'Omron Digital BP Monitor',
    category: 'Health Device',
    mrp: '₹2,450',
    price: '₹2,150',
    tag: 'Bestseller',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=600&q=80',
    desc: 'Accurate upper-arm digital blood pressure gauge with cuff wrapper guide.'
  },
  {
    id: 'prod-2',
    name: 'Accu-Chek Glucose Test Kit',
    category: 'Diabetic Care',
    mrp: '₹1,050',
    price: '₹920',
    tag: 'Essential',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=600&q=80',
    desc: 'Instant blood glucose test strips for diabetic monitoring at home.'
  },
  {
    id: 'prod-3',
    name: 'Shelcal 500 Calcium Tablets',
    category: 'Supplement',
    mrp: '₹132',
    price: '₹118',
    tag: 'Top Rated',
    image: 'https://images.unsplash.com/photo-1584017911766-d451b3d0e843?auto=format&fit=crop&w=600&q=80',
    desc: 'Calcium & Vitamin D3 for bone strength and joint mobility.'
  },
  {
    id: 'prod-4',
    name: 'Pampers All Round Diaper Pants (M)',
    category: 'Baby Care',
    mrp: '₹699',
    price: '₹620',
    tag: 'Popular',
    image: 'https://images.unsplash.com/photo-1519689680058-324335c77eba?auto=format&fit=crop&w=600&q=80',
    desc: 'Comfortable leak-proof diaper pants for infants with anti-rash lotion.'
  }
];

export const REVIEWS_PREVIEW: ReviewItem[] = [
  {
    id: 'rev-1',
    author: 'Rameshwar Prasad',
    location: 'Belaganj, Gaya',
    rating: 5,
    date: '2 weeks ago',
    comment: 'Pihu Medical Hall is the most reliable pharmacy in Belaganj. Always get 100% genuine medicines for my father’s heart condition. Cold chain insulin is always maintained in proper temperature.',
    verifiedPurchase: true
  },
  {
    id: 'rev-2',
    author: 'Sunita Kumari',
    location: 'Balapur, Belaganj',
    rating: 5,
    date: '1 month ago',
    comment: 'Very polite behavior and genuine price. Sent my prescription photo on WhatsApp and got medicines prepared quickly. Great facility in our village area!',
    verifiedPurchase: true
  },
  {
    id: 'rev-3',
    author: 'Dr. Alok Verma',
    location: 'Gaya Road',
    rating: 5,
    date: '1 month ago',
    comment: 'I recommend Pihu Medical Hall to my patients. Their stock of surgical supplies and emergency OTC medicines is top-notch. Pharmacist guidance is very knowledgeable.',
    verifiedPurchase: true
  }
];

export const FAQ_DATA: FAQItem[] = [
  {
    question: 'How do I place a medicine order via WhatsApp?',
    answer: 'Simply click the "WhatsApp Order" button on our website, upload or type your required medicines and prescription photo, share your address, and our team will verify the availability and total bill before dispatching.',
    category: 'Ordering'
  },
  {
    question: 'Do you dispense medicines without a valid prescription?',
    answer: 'No, scheduled drugs (Rx medicines like antibiotics, heavy painkillers, cardiac & psychiatric drugs) strictly require a valid prescription from a registered medical practitioner. OTC medicines do not require prescription.',
    category: 'Policy'
  },
  {
    question: 'How is cold chain insulin and vaccines maintained at Pihu Medical Hall?',
    answer: 'We operate dedicated medical refrigerators with 24/7 power backup to ensure heat-sensitive items like insulin cartridges, vaccines, and eye drops remain in the strict 2°C - 8°C temperature window.',
    category: 'Storage'
  },
  {
    question: 'Are home delivery options available in Belaganj & nearby areas?',
    answer: 'Yes! We offer local home delivery and express pick-up service for residents in Belaganj, Balapur, and neighboring localities in Gaya district.',
    category: 'Delivery'
  },
  {
    question: 'What are your store operating hours?',
    answer: 'We are open Monday through Saturday from 7:00 AM to 10:00 PM, and Sunday from 8:00 AM to 9:00 PM. For emergency medicine needs, our team is available on call 24/7 at 6205468847.',
    category: 'General'
  }
];

export const HEALTH_TIPS: HealthTip[] = [
  {
    id: 'tip-1',
    title: 'Essential Monsoon & Seasonal Illness Prevention',
    category: 'Seasonal Care',
    date: 'July 2026',
    summary: 'Simple practical measures to protect your family against viral fevers, waterborne infections, and dengue during seasonal changes in Bihar.',
    content: 'Boil drinking water, maintain hydration with ORS, keep surroundings mosquito-free, and keep a emergency first-aid kit containing paracetamol and antacids at home.',
    readTime: '3 min read',
    image: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'tip-2',
    title: 'How to Correctly Store Medicines at Home',
    category: 'Medication Safety',
    date: 'June 2026',
    summary: 'Avoid keeping medicines in humid places like bathrooms. Learn which medications require refrigeration and which need room temperature.',
    content: 'Direct heat and moisture decompose active medicine compounds. Keep insulin between 2-8°C. Store regular tablets in a cool, dry cabinet away from direct sunlight and children\'s reach.',
    readTime: '4 min read',
    image: 'https://images.unsplash.com/photo-1471864190281-a93a3070b6de?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'tip-3',
    title: 'Guide to Home Blood Pressure & Sugar Monitoring',
    category: 'Chronic Care',
    date: 'May 2026',
    summary: 'Tips for obtaining accurate BP and fasting blood sugar readings using digital home monitoring devices.',
    content: 'Sit quietly for 5 minutes before taking BP reading. For sugar test, ensure hand is washed and completely dry before pricking finger. Maintain a daily logbook for doctor review.',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=600&q=80'
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'Pihu Medical Hall Front Store View',
    category: 'Store Front',
    image: 'https://images.unsplash.com/photo-1586015555751-63bb77f4322a?auto=format&fit=crop&w=800&q=80',
    caption: 'Modern, well-lit entrance and counter of Pihu Medical Hall at Balapur, Belaganj, Gaya.'
  },
  {
    id: 'gal-2',
    title: 'Organized Prescription Medicine Shelves',
    category: 'Medicine Shelves',
    image: 'https://images.unsplash.com/photo-1576602976047-174e57a47881?auto=format&fit=crop&w=800&q=80',
    caption: 'Categorized pharmaceutical shelves for rapid and error-free medicine dispensing.'
  },
  {
    id: 'gal-3',
    title: 'Digital Health Devices Counter',
    category: 'Health Devices',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80',
    caption: 'BP Monitors, Glucometers, Nebulizers, and Oximeters available with demo support.'
  },
  {
    id: 'gal-4',
    title: 'Surgical & First-Aid Section',
    category: 'Surgical & Supplies',
    image: 'https://images.unsplash.com/photo-1583947215259-38e31be8751f?auto=format&fit=crop&w=800&q=80',
    caption: 'Sterile surgical dressings, cotton, bandages, and orthopedic braces.'
  },
  {
    id: 'gal-5',
    title: 'Temperature Controlled Cold Storage Unit',
    category: 'Interior',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=800&q=80',
    caption: '24/7 Power-backed pharmaceutical refrigerator maintaining 2-8°C for insulin & vaccines.'
  },
  {
    id: 'gal-6',
    title: 'Customer Service & Prescription Verification',
    category: 'Interior',
    image: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&w=800&q=80',
    caption: 'Licensed pharmacist providing dosage guidance and prescription verification.'
  }
];

export const TIMELINE_JOURNEY = [
  {
    year: '2016',
    title: 'Store Inception',
    desc: 'Founded Pihu Medical Hall at Balapur, Belaganj to provide genuine medicines to local residents.'
  },
  {
    year: '2019',
    title: 'Cold-Chain Infrastructure',
    desc: 'Upgraded to medical-grade refrigerated storage with uninterrupted power backup for life-saving insulin.'
  },
  {
    year: '2021',
    title: 'Pandemic Emergency Service',
    desc: 'Served over 5,000 families with oxygen devices, oximeters, vitamins, and emergency home delivery.'
  },
  {
    year: '2023',
    title: 'WhatsApp Ordering Launch',
    desc: 'Introduced direct WhatsApp prescription upload & local order dispatch for elderly & rural patients.'
  },
  {
    year: '2026',
    title: '10,000+ Families Served',
    desc: 'Recognized as the most trusted neighborhood medical hall in Belaganj, Gaya district.'
  }
];
