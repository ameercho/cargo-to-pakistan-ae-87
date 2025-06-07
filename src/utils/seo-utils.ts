
import { SEOData } from "@/types";
import { getCanonicalUrl } from "./url-utils";
import { SEO_DEFAULTS, COMPANY_INFO } from "@/constants";
import { generateDubaiSEO } from "./dubai-seo-utils";

export { getCanonicalUrl, shouldIncludeInSitemap } from "./url-utils";

export const generateSEOData = {
  // Enhanced homepage with unique content
  homepage: (): SEOData => ({
    title: "Cargo to Pakistan Dubai | #1 Professional Shipping Service UAE 2024",
    description: "Dubai's leading cargo service to Pakistan. 10,000+ satisfied customers. Door-to-door delivery from Business Bay, Deira to all Pakistan cities. Get free quote!",
    keywords: "cargo to pakistan dubai, dubai pakistan shipping, door to door cargo dubai, air cargo dubai pakistan, sea freight dubai, business bay cargo services",
    canonicalUrl: "https://cargotopakistan.ae/",
    ogTitle: "Dubai's #1 Cargo Service to Pakistan | 4.9★ Rated Professional Shipping",
    ogDescription: "Trusted by 10,000+ customers. Professional cargo shipping from Dubai to Pakistan with complete door-to-door service.",
    ogImage: "https://cargotopakistan.ae/images/dubai-cargo-hero.jpg",
    h1: "Dubai to Pakistan Cargo | Trusted by 10,000+ Customers Worldwide"
  }),

  // Service area pages with enhanced local targeting
  serviceArea: (areaName: string, areaSlug: string): SEOData => {
    const areaKeywords = {
      'dubai': 'business bay cargo, deira shipping, downtown dubai freight, marina cargo services',
      'abu-dhabi': 'khalifa city cargo, corniche shipping, capital emirate freight, al reem cargo',
      'sharjah': 'al majaz cargo, rolla shipping, cultural city freight, nahda cargo services',
      'ajman': 'al nuaimiya cargo, corniche ajman shipping, smallest emirate freight'
    };

    const localKeywords = areaKeywords[areaSlug as keyof typeof areaKeywords] || '';

    return {
      title: `${areaName} to Pakistan Cargo | Fast Professional Shipping 2024`,
      description: `Professional cargo services from ${areaName} to Pakistan. Complete door-to-door delivery with pickup from all ${areaName} areas. Competitive rates, 4.9★ rating.`,
      keywords: `${areaName.toLowerCase()} cargo pakistan, ${areaName.toLowerCase()} shipping services, ${localKeywords}, door to door ${areaName.toLowerCase()}`,
      canonicalUrl: `${COMPANY_INFO.website}/areas/${areaSlug}`,
      ogTitle: `${areaName} Pakistan Cargo | Professional Shipping Service`,
      ogDescription: `Fast & secure cargo from ${areaName} to Pakistan with comprehensive area coverage and door-to-door delivery.`,
      ogImage: `${COMPANY_INFO.website}/images/${areaSlug}-cargo.jpg`,
      h1: `${areaName} to Pakistan Cargo Services`
    };
  },

  // Pakistan destination pages with city-specific optimization
  pakistanDestination: (cityName: string, citySlug: string): SEOData => {
    const cityData = {
      'karachi': {
        areas: 'Clifton, Defence, Gulshan-e-Iqbal',
        description: "Pakistan's largest city and economic powerhouse",
        keywords: 'karachi cargo services, port city delivery, business hub pakistan, clifton defence shipping'
      },
      'lahore': {
        areas: 'Gulberg, Defence, Model Town',
        description: "Pakistan's cultural capital and heritage center",
        keywords: 'lahore cargo services, cultural capital delivery, gulberg defence shipping, punjab freight'
      },
      'islamabad': {
        areas: 'F-6, F-7, F-8 sectors',
        description: "Pakistan's federal capital and diplomatic center",
        keywords: 'islamabad cargo services, capital city delivery, f-series sectors, diplomatic area shipping'
      },
      'peshawar': {
        areas: 'Hayatabad, University Town',
        description: "Historic frontier city and KPK capital",
        keywords: 'peshawar cargo services, frontier city delivery, hayatabad shipping, khyber pakhtunkhwa freight'
      }
    };

    const cityInfo = cityData[citySlug as keyof typeof cityData] || {
      areas: 'all major areas',
      description: `important Pakistani city`,
      keywords: `${cityName.toLowerCase()} cargo services, pakistan delivery, professional shipping`
    };

    return {
      title: `Dubai to ${cityName} Cargo | Fast Pakistan Delivery Service 2024`,
      description: `Professional cargo from Dubai to ${cityName}, ${cityInfo.description}. Door-to-door delivery to ${cityInfo.areas}. Get instant quote!`,
      keywords: `dubai to ${cityName.toLowerCase()}, cargo to ${cityName.toLowerCase()}, ${cityInfo.keywords}, ${cityName.toLowerCase()} shipping dubai`,
      canonicalUrl: `${COMPANY_INFO.website}/pakistan-cargo-to-${citySlug}`,
      ogTitle: `Dubai to ${cityName} Cargo | ${cityInfo.description}`,
      ogDescription: `Fast cargo delivery from Dubai to ${cityName}, Pakistan with door-to-door service and real-time tracking.`,
      ogImage: `${COMPANY_INFO.website}/images/${citySlug}-cargo.jpg`,
      h1: `Dubai to ${cityName} Cargo Service`
    };
  },

  // Service type pages with service-specific optimization
  serviceType: (serviceName: string, serviceSlug: string): SEOData => {
    const serviceData = {
      'air-freight': {
        description: 'Express air cargo for urgent shipments',
        keywords: 'fast air cargo dubai, express shipping pakistan, urgent delivery, air freight rates',
        features: 'same-day pickup, 2-3 days delivery'
      },
      'sea-freight': {
        description: 'Cost-effective ocean shipping for bulk cargo',
        keywords: 'ocean cargo dubai, bulk shipping pakistan, sea freight rates, container shipping',
        features: '15-20 days delivery, competitive rates'
      },
      'courier-service': {
        description: 'Express courier for documents and small packages',
        keywords: 'express courier dubai, document delivery pakistan, small package shipping, door to door courier',
        features: 'same-day pickup, 3-5 days delivery'
      },
      'full-container': {
        description: 'Dedicated container solutions for large shipments',
        keywords: 'fcl shipping dubai, container cargo pakistan, bulk freight, dedicated container',
        features: 'exclusive container, secure handling'
      }
    };

    const serviceInfo = serviceData[serviceSlug as keyof typeof serviceData] || {
      description: 'Professional cargo service',
      keywords: `${serviceName.toLowerCase()} dubai pakistan`,
      features: 'professional handling'
    };

    return {
      title: `${serviceName} Dubai to Pakistan | Best Rates & Service 2024`,
      description: `Professional ${serviceName.toLowerCase()} from Dubai to Pakistan. ${serviceInfo.description} with ${serviceInfo.features}. Get free quote!`,
      keywords: `${serviceName.toLowerCase()} dubai pakistan, ${serviceInfo.keywords}, professional ${serviceName.toLowerCase()} dubai`,
      canonicalUrl: `${COMPANY_INFO.website}/services/${serviceSlug}`,
      ogTitle: `${serviceName} Dubai to Pakistan | Expert UAE Service`,
      ogDescription: `Professional ${serviceName.toLowerCase()} services from Dubai to Pakistan with guaranteed delivery times and competitive rates.`,
      ogImage: `${COMPANY_INFO.website}/images/${serviceSlug}-service.jpg`,
      h1: `${serviceName} from Dubai to Pakistan`
    };
  },

  // Route-specific pages with origin-destination optimization
  routePage: (originCity: string, originSlug: string): SEOData => {
    const routeData = {
      'dubai': {
        districts: 'Business Bay, Deira, Downtown',
        description: 'Complete coverage across all Dubai districts',
        keywords: 'dubai pakistan cargo, business bay shipping, deira freight, downtown cargo'
      },
      'abu-dhabi': {
        districts: 'Khalifa City, Corniche, Al Reem',
        description: 'Capital emirate comprehensive service',
        keywords: 'abu dhabi pakistan cargo, khalifa city shipping, corniche freight, capital cargo'
      },
      'sharjah': {
        districts: 'Al Majaz, Rolla, Al Nahda',
        description: 'Cultural capital complete coverage',
        keywords: 'sharjah pakistan cargo, al majaz shipping, rolla freight, cultural city cargo'
      },
      'ajman': {
        districts: 'Al Nuaimiya, Corniche Ajman',
        description: 'Smallest emirate full service',
        keywords: 'ajman pakistan cargo, al nuaimiya shipping, corniche freight, compact emirate'
      }
    };

    const routeInfo = routeData[originSlug as keyof typeof routeData] || {
      districts: 'all major areas',
      description: 'comprehensive service coverage',
      keywords: `${originCity.toLowerCase()} pakistan cargo`
    };

    return {
      title: `${originCity} to Pakistan Cargo | Complete Door-to-Door Service 2024`,
      description: `Professional cargo from ${originCity} to Pakistan. ${routeInfo.districts} pickup, Pakistan doorstep delivery. Air, sea & express options available.`,
      keywords: `${originCity.toLowerCase()} pakistan cargo, ${originCity.toLowerCase()} to pakistan shipping, ${routeInfo.keywords}, door to door ${originCity.toLowerCase()}`,
      canonicalUrl: `${COMPANY_INFO.website}/${originSlug}-to-pakistan`,
      ogTitle: `${originCity} to Pakistan Cargo | ${routeInfo.description}`,
      ogDescription: `Professional cargo shipping from ${originCity} to Pakistan with ${routeInfo.description} and complete door-to-door delivery.`,
      ogImage: `${COMPANY_INFO.website}/images/${originSlug}-route.jpg`,
      h1: `${originCity} to Pakistan Cargo Services`
    };
  },

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

// Enhanced related services with specific descriptions
export const relatedServices = [
  { name: "Air Freight Dubai to Pakistan", url: "/services/air-freight", description: "Fast air cargo for urgent Dubai shipments with 2-3 days delivery" },
  { name: "Sea Freight Dubai to Pakistan", url: "/services/sea-freight", description: "Cost-effective ocean shipping from Dubai with competitive rates" },
  { name: "Full Container Dubai", url: "/services/full-container", description: "Dedicated container solutions from Dubai with secure handling" },
  { name: "Door to Door Dubai", url: "/services/courier-service", description: "Complete Dubai pickup to Pakistan delivery with tracking" },
  { name: "Dubai Home Moving", url: "/services/moving-home", description: "Household relocation from Dubai to Pakistan with professional packing" },
  { name: "Professional Packing Dubai", url: "/services/packaging", description: "Expert packing services in Dubai with quality materials" }
];

// Popular destinations with enhanced descriptions
export const popularDestinations = [
  { name: "Karachi", url: "/pakistan-cargo-to-karachi", description: "Dubai to Pakistan's largest port & business hub with Clifton, Defence coverage" },
  { name: "Lahore", url: "/pakistan-cargo-to-lahore", description: "Dubai to Pakistan's cultural capital with Gulberg, Model Town delivery" },
  { name: "Islamabad", url: "/pakistan-cargo-to-islamabad", description: "Dubai to Pakistan's federal capital with F-series sectors service" },
  { name: "Peshawar", url: "/pakistan-cargo-to-peshawar", description: "Dubai to historic northwestern gateway with Hayatabad coverage" },
  { name: "Multan", url: "/pakistan-cargo-to-multan", description: "Dubai to the City of Saints with comprehensive area coverage" },
  { name: "Faisalabad", url: "/pakistan-cargo-to-faisalabad", description: "Dubai to Pakistan's textile hub with industrial area service" }
];

// UAE service areas with enhanced descriptions
export const uaeServiceAreas = [
  { name: "Dubai", url: "/areas/dubai", description: "Business Bay, Deira, Downtown - Complete Dubai coverage with premium service" },
  { name: "Abu Dhabi", url: "/areas/abu-dhabi", description: "Capital emirate with Khalifa City, Corniche comprehensive service" },
  { name: "Sharjah", url: "/areas/sharjah", description: "Cultural capital with Al Majaz, Rolla complete area coverage" },
  { name: "Ajman", url: "/areas/ajman", description: "Compact emirate with Al Nuaimiya, Corniche full service coverage" },
  { name: "Ras Al Khaimah", url: "/areas/ras-al-khaimah", description: "Northern emirate gateway to Pakistan with reliable service" },
  { name: "Fujairah", url: "/areas/fujairah", description: "East coast emirate with port connections and efficient delivery" }
];
