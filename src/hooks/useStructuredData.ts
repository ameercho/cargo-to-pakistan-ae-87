
import { useLocation } from "react-router-dom";
import { CONTACT_INFO } from "@/constants/contact";

export const useStructuredData = () => {
  const location = useLocation();

  const generateOrganizationData = () => ({
    "@context": "https://schema.org",
    "@type": "MovingCompany",
    "name": "Cargo to Pakistan",
    "url": "https://cargotopakistan.ae",
    "description": "Dubai's leading cargo shipping service to Pakistan with door-to-door delivery",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "AE",
      "addressRegion": "Dubai",
      "addressLocality": "Dubai"
    },
    "geo": {
      "@type": "GeoCoordinates", 
      "latitude": "25.2048",
      "longitude": "55.2708"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": CONTACT_INFO.phone,
      "contactType": "customer service",
      "availableLanguage": ["English", "Urdu", "Arabic"]
    }
  });

  const generateServiceData = (serviceName: string, description: string, location: string) => ({
    "@context": "https://schema.org",
    "@type": "Service",
    "name": serviceName,
    "description": description,
    "provider": generateOrganizationData(),
    "areaServed": {
      "@type": "Place",
      "name": location
    }
  });

  const generateBreadcrumbData = (items: Array<{name: string, url: string}>) => ({
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  });

  return {
    generateOrganizationData,
    generateServiceData,
    generateBreadcrumbData
  };
};
