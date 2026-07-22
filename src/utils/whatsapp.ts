import { BUSINESS_INFO } from '../data/pharmacyData';
import { WhatsAppOrderFormData } from '../types';

export function createWhatsAppOrderUrl(data: WhatsAppOrderFormData): string {
  const text = `Hello ${BUSINESS_INFO.name}

*Medicine Order Details*
--------------------------------
*Customer Name:* ${data.customerName}
*Phone:* ${data.mobileNumber}
*Email:* ${data.email || 'N/A'}
*Medicine Required:* ${data.medicineRequired}
*Prescription Uploaded:* ${data.hasPrescription}${data.prescriptionFileName ? ` (${data.prescriptionFileName})` : ''}
*Delivery Address:* ${data.address}
*Preferred Time:* ${data.preferredDeliveryTime}
*Message / Notes:* ${data.message || 'None'}
--------------------------------
Please confirm availability and bill amount. Thank you!`;

  const encodedText = encodeURIComponent(text);
  return `https://wa.me/${BUSINESS_INFO.whatsappRaw}?text=${encodedText}`;
}

export function createWhatsAppDirectItemUrl(medicineName: string, price?: number): string {
  const text = `Hello ${BUSINESS_INFO.name},

I would like to order or check availability for:
*Medicine/Item:* ${medicineName} ${price ? `(MRP ₹${price})` : ''}

Please let me know if it is available for pickup/delivery at Belaganj, Gaya.`;

  const encodedText = encodeURIComponent(text);
  return `https://wa.me/${BUSINESS_INFO.whatsappRaw}?text=${encodedText}`;
}

export function createWhatsAppQuickInquiryUrl(name: string, phone: string, query: string): string {
  const text = `Hello ${BUSINESS_INFO.name},

*General Inquiry from Website*
*Name:* ${name}
*Phone:* ${phone}
*Query:* ${query}`;

  const encodedText = encodeURIComponent(text);
  return `https://wa.me/${BUSINESS_INFO.whatsappRaw}?text=${encodedText}`;
}
