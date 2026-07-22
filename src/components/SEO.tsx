import React, { useEffect } from 'react';
import { BUSINESS_INFO } from '../data/pharmacyData';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  canonicalUrl?: string;
  type?: 'website' | 'article' | 'pharmacy';
  schemaData?: Record<string, unknown>[];
}

export const SEO: React.FC<SEOProps> = ({
  title,
  description,
  keywords = 'Pihu Medical Hall, Medical Store Belaganj, Pharmacy Gaya, Genuine Medicines Bihar, Online Medicine Delivery Belaganj, Medical Store near me, Prescription Medicines Gaya',
  canonicalUrl = window.location.href,
  schemaData = []
}) => {
  const fullTitle = `${title} | ${BUSINESS_INFO.name}`;

  useEffect(() => {
    // Document Title
    document.title = fullTitle;

    // Helper to update meta tag
    const updateMeta = (nameAttr: string, attrVal: string, contentVal: string) => {
      let element = document.querySelector(`meta[${nameAttr}="${attrVal}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(nameAttr, attrVal);
        document.head.appendChild(element);
      }
      element.setAttribute('content', contentVal);
    };

    // Standard Meta
    updateMeta('name', 'description', description);
    updateMeta('name', 'keywords', keywords);
    updateMeta('name', 'author', BUSINESS_INFO.name);
    updateMeta('name', 'robots', 'index, follow');

    // OpenGraph
    updateMeta('property', 'og:title', fullTitle);
    updateMeta('property', 'og:description', description);
    updateMeta('property', 'og:type', 'website');
    updateMeta('property', 'og:url', canonicalUrl);
    updateMeta('property', 'og:site_name', BUSINESS_INFO.name);
    updateMeta('property', 'og:locale', 'en_IN');

    // Twitter Card
    updateMeta('name', 'twitter:card', 'summary_large_image');
    updateMeta('name', 'twitter:title', fullTitle);
    updateMeta('name', 'twitter:description', description);

    // Canonical link
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', canonicalUrl);

    // LocalBusiness / Pharmacy Schema
    const localBusinessSchema = {
      '@context': 'https://schema.org',
      '@type': 'Pharmacy',
      '@id': `${BUSINESS_INFO.googleMapsUrl}#pharmacy`,
      'name': BUSINESS_INFO.name,
      'description': BUSINESS_INFO.tagline,
      'url': window.location.origin,
      'telephone': BUSINESS_INFO.phone,
      'priceRange': '₹',
      'address': {
        '@type': 'PostalAddress',
        'streetAddress': '02.Balapur, Belaganj',
        'addressLocality': 'Gaya',
        'addressRegion': 'Bihar',
        'postalCode': '804403',
        'addressCountry': 'IN'
      },
      'geo': {
        '@type': 'GeoCoordinates',
        'latitude': '24.9654',
        'longitude': '84.9785'
      },
      'openingHoursSpecification': [
        {
          '@type': 'OpeningHoursSpecification',
          'dayOfWeek': ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
          'opens': '07:00',
          'closes': '22:00'
        },
        {
          '@type': 'OpeningHoursSpecification',
          'dayOfWeek': 'Sunday',
          'opens': '08:00',
          'closes': '21:00'
        }
      ],
      'paymentAccepted': 'Cash, UPI, Google Pay, PhonePe, Paytm, Debit Card',
      'currenciesAccepted': 'INR'
    };

    // Remove existing json-ld scripts added by this component
    const existingScripts = document.querySelectorAll('script[data-seo-jsonld]');
    existingScripts.forEach(script => script.remove());

    const allSchemas = [localBusinessSchema, ...schemaData];

    allSchemas.forEach((sData, index) => {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.setAttribute('data-seo-jsonld', 'true');
      script.id = `jsonld-schema-${index}`;
      script.text = JSON.stringify(sData);
      document.head.appendChild(script);
    });

  }, [fullTitle, description, keywords, canonicalUrl, schemaData]);

  return null;
};
