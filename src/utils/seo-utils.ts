
import { SEOData } from "@/types";
import { getCanonicalUrl } from "./url-utils";
import { SEO_DEFAULTS, COMPANY_INFO } from "@/constants";
import { generateDubaiSEO } from "./dubai-seo-utils";

export { getCanonicalUrl, shouldIncludeInSitemap } from "./url-utils";

export const generateSEOData = {
  // Use Dubai-optimized homepage
  homepage: generateDubaiSEO.homepage,

  // Service area pages with Dubai focus
  serviceArea: (areaName: string, areaSlug: string): SEOData => 
    generateDubaiSEO.serviceArea(areaName, areaSlug),

  // Service type pages
  serviceType: (serviceName: string, serviceSlug: string): SEOData => 
    generateDubaiSEO.serviceType(serviceName, serviceSlug),

  // Pakistan destination pages
  pakistanDestination: (cityName: string, citySlug: string): SEOData => 
    generateDubaiSEO.pakistanDestination(cityName, citySlug),

  // UAE to Pakistan route pages
  routePage: (originCity: string, originSlug: string): SEOData => 
    generateDubaiSEO.routePage(originCity, originSlug),

  // Generic page generator for consistent canonical URLs
  genericPage: (path: string, title: string, description: string, keywords: string, h1: string): SEOData => ({
    title,
    description,
    keywords,
    canonicalUrl: getCanonicalUrl(path),
    ogTitle: title,
    ogDescription: description,
    ogImage: SEO_DEFAULTS.defaultImage,
    h1
  })
};

// Enhanced related services with Dubai focus
export const relatedServices = [
  { name: "Air Freight Dubai to Pakistan", url: "/services/air-freight", description: "Fast air cargo for urgent Dubai shipments" },
  { name: "Sea Freight Dubai to Pakistan", url: "/services/sea-freight", description: "Cost-effective ocean shipping from Dubai" },
  { name: "Full Container Dubai", url: "/services/full-container", description: "Dedicated container solutions from Dubai" },
  { name: "Door to Door Dubai", url: "/services/courier-service", description: "Complete Dubai pickup to Pakistan delivery" },
  { name: "Dubai Home Moving", url: "/services/moving-home", description: "Household relocation from Dubai to Pakistan" },
  { name: "Professional Packing Dubai", url: "/services/packaging", description: "Expert packing services in Dubai" }
];

// Popular destinations with Dubai-specific descriptions
export const popularDestinations = [
  { name: "Karachi", url: "/pakistan-cargo-to-karachi", description: "Dubai to Pakistan's largest port & business hub" },
  { name: "Lahore", url: "/pakistan-cargo-to-lahore", description: "Dubai to Pakistan's cultural capital" },
  { name: "Islamabad", url: "/pakistan-cargo-to-islamabad", description: "Dubai to Pakistan's federal capital" },
  { name: "Peshawar", url: "/pakistan-cargo-to-peshawar", description: "Dubai to historic northwestern gateway" },
  { name: "Multan", url: "/pakistan-cargo-to-multan", description: "Dubai to the City of Saints" },
  { name: "Faisalabad", url: "/pakistan-cargo-to-faisalabad", description: "Dubai to Pakistan's textile hub" }
];

// UAE service areas with enhanced descriptions
export const uaeServiceAreas = [
  { name: "Dubai", url: "/areas/dubai", description: "Business Bay, Deira, Downtown - Complete Dubai coverage" },
  { name: "Abu Dhabi", url: "/areas/abu-dhabi", description: "Capital emirate with Khalifa City, Corniche service" },
  { name: "Sharjah", url: "/areas/sharjah", description: "Cultural capital with Al Majaz, Rolla area coverage" },
  { name: "Ajman", url: "/areas/ajman", description: "Compact emirate with Al Nuaimiya, Corniche service" },
  { name: "Ras Al Khaimah", url: "/areas/ras-al-khaimah", description: "Northern emirate gateway to Pakistan" },
  { name: "Fujairah", url: "/areas/fujairah", description: "East coast emirate with port connections" }
];
