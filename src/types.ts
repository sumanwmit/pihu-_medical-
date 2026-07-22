export interface Medicine {
  id: string;
  name: string;
  genericName?: string;
  brand: string;
  category: 'Prescription' | 'OTC' | 'Health Devices' | 'Supplements' | 'Baby Care' | 'Personal Care' | 'Surgical';
  mrp: number;
  discountedPrice?: number;
  availableQuantity: number;
  expiry: string;
  status: 'Available' | 'Limited Stock' | 'Out of Stock';
  unit: string;
  dosageForm?: string;
  description?: string;
  requiresPrescription?: boolean;
}

export interface ServiceItem {
  id: string;
  title: string;
  iconName: string;
  shortDesc: string;
  fullDesc: string;
  category: string;
  features: string[];
  popularItems: string[];
}

export interface ReviewItem {
  id: string;
  author: string;
  location: string;
  rating: number;
  date: string;
  comment: string;
  verifiedPurchase: boolean;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

export interface HealthTip {
  id: string;
  title: string;
  category: string;
  date: string;
  summary: string;
  content: string;
  readTime: string;
  image: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Store Front' | 'Medicine Shelves' | 'Health Devices' | 'Surgical & Supplies' | 'Interior';
  image: string;
  caption: string;
}

export interface WhatsAppOrderFormData {
  customerName: string;
  mobileNumber: string;
  email?: string;
  address: string;
  medicineRequired: string;
  hasPrescription: 'Yes' | 'No';
  prescriptionFileName?: string;
  message?: string;
  preferredDeliveryTime: string;
}
