
import { SEOData } from "@/types";
import { getCanonicalUrl } from "./url-utils";
import { COMPANY_INFO } from "@/constants";

// Dubai-specific keywords and phrases for local SEO
export const DUBAI_KEYWORDS = {
  primary: ["cargo to pakistan dubai", "pakistan cargo dubai", "dubai to pakistan shipping"],
  secondary: ["door to door cargo dubai", "air cargo dubai pakistan", "sea freight dubai pakistan"],
  locations: ["dubai cargo services", "business bay cargo", "deira cargo", "bur dubai shipping"],
  services: ["international shipping dubai", "freight forwarding dubai", "logistics dubai pakistan"],
  localSEO: ["cargo company dubai", "shipping agent dubai", "freight forwarder uae", "logistics services dubai"],
  longTail: ["best cargo service dubai to pakistan", "cheap cargo to pakistan from dubai", "reliable shipping dubai pakistan"]
};

// UAE Emirates with their key business districts and SEO-optimized descriptions
export const UAE_LOCATIONS = {
  dubai: {
    name: "Dubai",
    districts: ["Business Bay", "Deira", "Bur Dubai", "Jumeirah", "Downtown Dubai", "Dubai Marina"],
    keywords: ["dubai cargo", "dubai shipping", "dubai freight", "business bay cargo", "deira shipping"],
    seoDescription: "Dubai's premier cargo service with coverage across Business Bay, Deira, Downtown, and all major districts"
  },
  abudhabi: {
    name: "Abu Dhabi", 
    districts: ["Khalifa City", "Al Reem Island", "Corniche", "Al Bateen", "Electra Street"],
    keywords: ["abu dhabi cargo", "abu dhabi shipping", "capital cargo", "khalifa city shipping"],
    seoDescription: "Capital emirate cargo services covering Khalifa City, Al Reem Island, and Corniche areas"
  },
  sharjah: {
    name: "Sharjah",
    districts: ["Al Qasimia", "Al Majaz", "Rolla", "Al Nahda", "Sharjah Airport"],
    keywords: ["sharjah cargo", "sharjah freight", "cultural city cargo", "al majaz shipping"],
    seoDescription: "Cultural capital cargo solutions serving Al Majaz, Rolla, and all Sharjah districts"
  },
  ajman: {
    name: "Ajman",
    districts: ["Al Nuaimiya", "Al Rashidiya", "Corniche Ajman", "Al Jurf"],
    keywords: ["ajman cargo", "ajman shipping", "smallest emirate cargo", "al nuaimiya freight"],
    seoDescription: "Comprehensive cargo services across Al Nuaimiya, Corniche, and all Ajman areas"
  }
};

// Pakistan major cities with local keywords and enhanced SEO data
export const PAKISTAN_DESTINATIONS = {
  karachi: {
    name: "Karachi",
    areas: ["Clifton", "Defence", "Gulshan", "North Nazimabad", "Saddar"],
    keywords: ["karachi cargo", "port city delivery", "business hub pakistan", "clifton shipping"],
    seoDescription: "Pakistan's largest city and economic powerhouse with comprehensive delivery coverage",
    population: "15+ million",
    economicFocus: "Financial and commercial hub"
  },
  lahore: {
    name: "Lahore", 
    areas: ["Gulberg", "Defence", "Model Town", "Johar Town", "Cantt"],
    keywords: ["lahore cargo", "cultural capital", "punjab shipping", "gulberg delivery"],
    seoDescription: "Cultural capital of Pakistan with extensive coverage across Gulberg, Defence, and Model Town",
    population: "11+ million",
    economicFocus: "Cultural and educational center"
  },
  islamabad: {
    name: "Islamabad",
    areas: ["F-6", "F-7", "F-8", "G-10", "E-11"],
    keywords: ["islamabad cargo", "capital city", "federal shipping", "f-series sectors"],
    seoDescription: "Federal capital with premium delivery to F-series sectors and diplomatic areas",
    population: "2+ million",
    economicFocus: "Government and diplomatic hub"
  },
  peshawar: {
    name: "Peshawar",
    areas: ["Hayatabad", "University Town", "Saddar", "Cantt"],
    keywords: ["peshawar cargo", "khyber pakhtunkhwa", "frontier city", "hayatabad delivery"],
    seoDescription: "Historic frontier city with reliable delivery across Hayatabad and University Town",
    population: "2+ million",
    economicFocus: "Trade and cultural center"
  },
  faisalabad: {
    name: "Faisalabad",
    areas: ["D Ground", "Madina Town", "People's Colony", "Gulberg"],
    keywords: ["faisalabad cargo", "textile hub", "manchester pakistan", "industrial shipping"],
    seoDescription: "Pakistan's textile capital with specialized industrial cargo handling",
    population: "3+ million",
    economicFocus: "Textile and manufacturing hub"
  },
  multan: {
    name: "Multan",
    areas: ["Gulgasht Colony", "Cantt", "Model Town", "Shah Rukn-e-Alam"],
    keywords: ["multan cargo", "city of saints", "sufi heritage", "spiritual center shipping"],
    seoDescription: "Historic City of Saints with comprehensive delivery across spiritual and commercial areas",
    population: "2+ million",
    economicFocus: "Agricultural and spiritual center"
  }
};

// Generate Dubai-optimized SEO data with enhanced local targeting
export const generateDubaiSEO = {
  // Homepage with comprehensive Dubai focus
  homepage: (): SEOData => ({
    title: "Cargo to Pakistan Dubai | #1 Shipping Service UAE 2024",
    description: "Dubai's top-rated cargo to Pakistan. 10,000+ happy customers. Door-to-door service from Business Bay, Deira. Get free quote today!",
    keywords: "cargo to pakistan dubai, dubai pakistan shipping, door to door cargo dubai, air cargo dubai pakistan, sea freight dubai, business bay cargo",
    canonicalUrl: "https://cargotopakistan.ae/",
    ogTitle: "Dubai's #1 Cargo Service to Pakistan | 4.9★ Rated",
    ogDescription: "Professional cargo shipping from Dubai to Pakistan. Trusted by 10,000+ customers. Business Bay, Deira, Marina coverage.",
    ogImage: "https://cargotopakistan.ae/images/dubai-cargo-hero.jpg",
    h1: "Dubai to Pakistan Cargo | Trusted by 10,000+ Customers"
  }),

  // Service area pages with hyper-local SEO
  serviceArea: (emirate: string, slug: string): SEOData => {
    const location = UAE_LOCATIONS[slug as keyof typeof UAE_LOCATIONS];
    const districts = location?.districts.slice(0, 3).join(", ") || "";
    const localKeywords = location?.keywords.join(", ") || "";
    
    return {
      title: `${emirate} Pakistan Cargo | Fast Shipping ${new Date().getFullYear()}`,
      description: `${emirate} to Pakistan cargo service. Serving ${districts}. Door-to-door delivery, competitive rates. Free quote in 5 minutes!`,
      keywords: `${emirate.toLowerCase()} cargo pakistan, ${emirate.toLowerCase()} shipping, ${localKeywords}, door to door ${emirate.toLowerCase()}`,
      canonicalUrl: `${COMPANY_INFO.website}/areas/${slug}`,
      ogTitle: `${emirate} Pakistan Cargo | Professional Shipping Service`,
      ogDescription: `Fast & secure cargo from ${emirate} to Pakistan. ${location?.seoDescription || 'Comprehensive area coverage'}.`,
      ogImage: `${COMPANY_INFO.website}/images/${slug}-cargo.jpg`,
      h1: `${emirate} to Pakistan Cargo Services`
    };
  },

  // Pakistan destination pages with enhanced local targeting
  pakistanDestination: (cityName: string, citySlug: string): SEOData => {
    const destination = PAKISTAN_DESTINATIONS[citySlug as keyof typeof PAKISTAN_DESTINATIONS];
    const areas = destination?.areas.slice(0, 3).join(", ") || "";
    const localKeywords = destination?.keywords.join(", ") || "";
    
    return {
      title: `Dubai to ${cityName} Cargo | Fast Pakistan Delivery 2024`,
      description: `Dubai to ${cityName} cargo service. Serving ${areas}. ${destination?.seoDescription || 'Reliable delivery'}. Get instant quote!`,
      keywords: `dubai to ${cityName.toLowerCase()}, cargo to ${cityName.toLowerCase()}, ${localKeywords}, ${cityName.toLowerCase()} shipping dubai`,
      canonicalUrl: `${COMPANY_INFO.website}/pakistan-cargo-to-${citySlug}`,
      ogTitle: `Dubai to ${cityName} Cargo | ${destination?.economicFocus || 'Professional Service'}`,
      ogDescription: `Fast cargo delivery from Dubai to ${cityName}, Pakistan. ${destination?.population || ''} population served with door-to-door tracking.`,
      ogImage: `${COMPANY_INFO.website}/images/${citySlug}-cargo.jpg`,
      h1: `Dubai to ${cityName} Cargo Service`
    };
  },

  // Service type pages with enhanced Dubai business targeting
  serviceType: (serviceName: string, serviceSlug: string): SEOData => {
    const serviceKeywords = {
      'air-freight': 'fast air cargo, express shipping dubai, urgent delivery pakistan',
      'sea-freight': 'ocean cargo dubai, bulk shipping, cost effective freight',
      'courier-service': 'express courier, document delivery, small package shipping',
      'full-container': 'fcl shipping, container cargo, bulk freight dubai'
    };

    const currentKeywords = serviceKeywords[serviceSlug as keyof typeof serviceKeywords] || '';

    return {
      title: `${serviceName} Dubai Pakistan | Best Rates UAE 2024`,
      description: `Professional ${serviceName.toLowerCase()} Dubai to Pakistan. Business Bay pickup, competitive rates, 4.9★ rating. Free quote in 2 minutes!`,
      keywords: `${serviceName.toLowerCase()} dubai pakistan, ${currentKeywords}, international ${serviceName.toLowerCase()} dubai, business bay freight`,
      canonicalUrl: `${COMPANY_INFO.website}/services/${serviceSlug}`,
      ogTitle: `${serviceName} Dubai to Pakistan | Expert UAE Service`,
      ogDescription: `Professional ${serviceName.toLowerCase()} services from Dubai business districts to Pakistan with guaranteed delivery times.`,
      ogImage: `${COMPANY_INFO.website}/images/${serviceSlug}-service.jpg`,
      h1: `${serviceName} from Dubai to Pakistan`
    };
  },

  // Route-specific pages with enhanced local SEO
  routePage: (originCity: string, originSlug: string): SEOData => {
    const location = UAE_LOCATIONS[originSlug as keyof typeof UAE_LOCATIONS];
    const districts = location?.districts.slice(0, 2).join(" & ") || "";

    return {
      title: `${originCity} Pakistan Cargo | Door-to-Door Service 2024`,
      description: `Complete ${originCity} to Pakistan cargo. ${districts} pickup, Pakistan doorstep delivery. Air, sea & express options. Free quote!`,
      keywords: `${originCity.toLowerCase()} pakistan cargo, ${originCity.toLowerCase()} to pakistan, door to door ${originCity.toLowerCase()}, ${originCity.toLowerCase()} shipping pakistan`,
      canonicalUrl: `${COMPANY_INFO.website}/${originSlug}-to-pakistan`,
      ogTitle: `${originCity} to Pakistan Cargo | Complete Door-to-Door`,
      ogDescription: `Professional cargo shipping from ${originCity} to Pakistan. ${location?.seoDescription || 'Comprehensive service'} with complete door-to-door delivery.`,
      ogImage: `${COMPANY_INFO.website}/images/${originSlug}-route.jpg`,
      h1: `${originCity} to Pakistan Cargo Services`
    };
  }
};

// Enhanced structured data generators for local SEO
export const generateStructuredData = {
  service: (serviceName: string, description: string, location?: string) => ({
    "@context": "https://schema.org",
    "@type": "Service",
    "name": serviceName,
    "description": description,
    "provider": {
      "@type": "Organization",
      "name": "Cargo to Pakistan",
      "url": "https://cargotopakistan.ae",
      "telephone": "+971-50-494-8135",
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "AE",
        "addressRegion": location || "Dubai"
      }
    },
    "areaServed": ["Dubai", "Abu Dhabi", "Sharjah", "Ajman", "Pakistan"],
    "serviceType": "Cargo Shipping",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "500",
      "bestRating": "5"
    }
  }),

  localBusiness: (location: string) => ({
    "@context": "https://schema.org",
    "@type": "MovingCompany",
    "name": `Cargo to Pakistan - ${location}`,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": location,
      "addressCountry": "AE"
    },
    "telephone": "+971-50-494-8135",
    "url": "https://cargotopakistan.ae",
    "serviceArea": [
      {
        "@type": "Country",
        "name": "Pakistan"
      },
      {
        "@type": "Country", 
        "name": "United Arab Emirates"
      }
    ],
    "priceRange": "$$",
    "paymentAccepted": ["Cash", "Credit Card", "Bank Transfer"],
    "currenciesAccepted": "AED, USD",
    "openingHours": "Mo-Sa 08:00-20:00",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "500"
    }
  }),

  breadcrumb: (items: Array<{name: string, url: string}>) => ({
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": `https://cargotopakistan.ae${item.url}`
    }))
  }),

  faq: (questions: Array<{question: string, answer: string}>) => ({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": questions.map(q => ({
      "@type": "Question",
      "name": q.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": q.answer
      }
    }))
  })
};

// Advanced SEO utilities for Phase 5
export const advancedSEOUtils = {
  // Generate dynamic meta description based on content
  generateDynamicMeta: (pageType: string, location?: string, service?: string) => {
    const templates = {
      homepage: `Dubai's #1 cargo to Pakistan. ${location || 'Business Bay'} pickup, door-to-door delivery. 4.9★ rated, 10,000+ customers.`,
      service: `Professional ${service || 'cargo'} from Dubai to Pakistan. ${location || 'All Emirates'} coverage, competitive rates.`,
      destination: `Fast cargo from Dubai to ${location || 'Pakistan'}. Door-to-door delivery, real-time tracking, secure handling.`,
      route: `Complete ${location || 'UAE'} to Pakistan cargo service. Pickup to doorstep delivery, air & sea freight options.`
    };
    
    return templates[pageType as keyof typeof templates] || templates.homepage;
  },

  // Generate location-specific keywords
  generateLocationKeywords: (emirate: string, city?: string) => {
    const baseKeywords = [`${emirate.toLowerCase()} cargo pakistan`, `${emirate.toLowerCase()} shipping`];
    
    if (city) {
      baseKeywords.push(`${emirate.toLowerCase()} to ${city.toLowerCase()}`, `cargo ${emirate.toLowerCase()} ${city.toLowerCase()}`);
    }
    
    const location = UAE_LOCATIONS[emirate.toLowerCase() as keyof typeof UAE_LOCATIONS];
    if (location) {
      baseKeywords.push(...location.keywords);
    }
    
    return baseKeywords.join(", ");
  },

  // Generate seasonal or trending keywords
  generateTrendingKeywords: () => {
    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth();
    
    const seasonal = currentMonth >= 10 || currentMonth <= 2 
      ? ["winter cargo pakistan", "holiday shipping dubai", "year end delivery"]
      : ["summer cargo rates", "ramadan shipping", "eid delivery"];
    
    return [
      `cargo pakistan ${currentYear}`,
      `best shipping dubai ${currentYear}`,
      ...seasonal
    ].join(", ");
  }
};
