
import { SEOData } from "@/types";
import { getCanonicalUrl } from "./url-utils";
import { COMPANY_INFO } from "@/constants";

// Dubai-specific keywords and phrases for local SEO
export const DUBAI_KEYWORDS = {
  primary: ["cargo to pakistan dubai", "pakistan cargo dubai", "dubai to pakistan shipping"],
  secondary: ["door to door cargo dubai", "air cargo dubai pakistan", "sea freight dubai pakistan"],
  locations: ["dubai cargo services", "business bay cargo", "deira cargo", "bur dubai shipping"],
  services: ["international shipping dubai", "freight forwarding dubai", "logistics dubai pakistan"]
};

// UAE Emirates with their key business districts
export const UAE_LOCATIONS = {
  dubai: {
    name: "Dubai",
    districts: ["Business Bay", "Deira", "Bur Dubai", "Jumeirah", "Downtown Dubai", "Dubai Marina"],
    keywords: ["dubai cargo", "dubai shipping", "dubai freight"]
  },
  abudhabi: {
    name: "Abu Dhabi", 
    districts: ["Khalifa City", "Al Reem Island", "Corniche", "Al Bateen", "Electra Street"],
    keywords: ["abu dhabi cargo", "abu dhabi shipping", "capital cargo"]
  },
  sharjah: {
    name: "Sharjah",
    districts: ["Al Qasimia", "Al Majaz", "Rolla", "Al Nahda", "Sharjah Airport"],
    keywords: ["sharjah cargo", "sharjah freight", "cultural city cargo"]
  },
  ajman: {
    name: "Ajman",
    districts: ["Al Nuaimiya", "Al Rashidiya", "Corniche Ajman", "Al Jurf"],
    keywords: ["ajman cargo", "ajman shipping", "smallest emirate cargo"]
  }
};

// Pakistan major cities with local keywords
export const PAKISTAN_DESTINATIONS = {
  karachi: {
    name: "Karachi",
    areas: ["Clifton", "Defence", "Gulshan", "North Nazimabad", "Saddar"],
    keywords: ["karachi cargo", "port city delivery", "business hub pakistan"]
  },
  lahore: {
    name: "Lahore", 
    areas: ["Gulberg", "Defence", "Model Town", "Johar Town", "Cantt"],
    keywords: ["lahore cargo", "cultural capital", "punjab shipping"]
  },
  islamabad: {
    name: "Islamabad",
    areas: ["F-6", "F-7", "F-8", "G-10", "E-11"],
    keywords: ["islamabad cargo", "capital city", "federal shipping"]
  }
};

// Generate Dubai-optimized SEO data
export const generateDubaiSEO = {
  // Homepage with Dubai focus
  homepage: (): SEOData => ({
    title: "Cargo to Pakistan from Dubai | Best Shipping Rates UAE",
    description: "Top-rated cargo service Dubai to Pakistan. Door-to-door delivery, air & sea freight. Trusted by 10,000+ Dubai customers. Get free quote today!",
    keywords: "cargo to pakistan dubai, dubai pakistan shipping, door to door cargo dubai, air cargo dubai pakistan, sea freight dubai",
    canonicalUrl: "https://cargotopakistan.ae/",
    ogTitle: "Dubai's #1 Cargo Service to Pakistan | Fast & Reliable",
    ogDescription: "Professional cargo shipping from Dubai to Pakistan. Door-to-door service, competitive rates, trusted by Dubai businesses & residents.",
    ogImage: "https://cargotopakistan.ae/images/dubai-cargo-hero.jpg",
    h1: "Dubai to Pakistan Cargo | Trusted by 10,000+ Customers"
  }),

  // Service area pages
  serviceArea: (emirate: string, slug: string): SEOData => {
    const location = UAE_LOCATIONS[slug as keyof typeof UAE_LOCATIONS];
    const districts = location?.districts.slice(0, 3).join(", ") || "";
    
    return {
      title: `${emirate} to Pakistan Cargo | Fast Shipping Service`,
      description: `Professional cargo from ${emirate} to Pakistan. Serving ${districts}. Door-to-door delivery, competitive rates. Get free quote!`,
      keywords: `${emirate.toLowerCase()} cargo pakistan, ${emirate.toLowerCase()} shipping, ${emirate.toLowerCase()} freight pakistan, door to door ${emirate.toLowerCase()}`,
      canonicalUrl: `${COMPANY_INFO.website}/areas/${slug}`,
      ogTitle: `${emirate} Pakistan Cargo Service | Reliable Shipping`,
      ogDescription: `Fast & secure cargo service from ${emirate} to Pakistan with door-to-door delivery across all major areas.`,
      ogImage: `${COMPANY_INFO.website}/images/${slug}-cargo.jpg`,
      h1: `${emirate} to Pakistan Cargo Services`
    };
  },

  // Pakistan destination pages
  pakistanDestination: (cityName: string, citySlug: string): SEOData => {
    const destination = PAKISTAN_DESTINATIONS[citySlug as keyof typeof PAKISTAN_DESTINATIONS];
    const areas = destination?.areas.slice(0, 3).join(", ") || "";
    
    return {
      title: `Dubai to ${cityName} Cargo | Fast Pakistan Delivery`,
      description: `Reliable cargo from Dubai to ${cityName}. Serving ${areas}. Air & sea freight options. Professional handling. Get instant quote!`,
      keywords: `dubai to ${cityName.toLowerCase()}, cargo to ${cityName.toLowerCase()}, ${cityName.toLowerCase()} shipping dubai, pakistan cargo ${cityName.toLowerCase()}`,
      canonicalUrl: `${COMPANY_INFO.website}/pakistan-cargo-to-${citySlug}`,
      ogTitle: `Dubai to ${cityName} Cargo | Professional Service`,
      ogDescription: `Fast cargo delivery from Dubai to ${cityName}, Pakistan. Door-to-door service with real-time tracking.`,
      ogImage: `${COMPANY_INFO.website}/images/${citySlug}-cargo.jpg`,
      h1: `Dubai to ${cityName} Cargo Service`
    };
  },

  // Service type pages
  serviceType: (serviceName: string, serviceSlug: string): SEOData => ({
    title: `${serviceName} Dubai to Pakistan | Best Rates UAE`,
    description: `Professional ${serviceName.toLowerCase()} from Dubai to Pakistan. Fast delivery, secure handling, competitive rates. Trusted Dubai service provider.`,
    keywords: `${serviceName.toLowerCase()} dubai pakistan, ${serviceSlug.replace('-', ' ')} dubai, international ${serviceName.toLowerCase()} dubai`,
    canonicalUrl: `${COMPANY_INFO.website}/services/${serviceSlug}`,
    ogTitle: `${serviceName} Dubai to Pakistan | Expert Service`,
    ogDescription: `Professional ${serviceName.toLowerCase()} services from Dubai to Pakistan with guaranteed delivery times.`,
    ogImage: `${COMPANY_INFO.website}/images/${serviceSlug}-service.jpg`,
    h1: `${serviceName} from Dubai to Pakistan`
  }),

  // Route-specific pages
  routePage: (originCity: string, originSlug: string): SEOData => ({
    title: `${originCity} Pakistan Cargo | Door-to-Door Service`,
    description: `Complete cargo service ${originCity} to Pakistan. Pickup from your location, delivery to doorstep. Air, sea & express options available.`,
    keywords: `${originCity.toLowerCase()} pakistan cargo, ${originCity.toLowerCase()} to pakistan, door to door ${originCity.toLowerCase()}, ${originCity.toLowerCase()} shipping`,
    canonicalUrl: `${COMPANY_INFO.website}/${originSlug}-to-pakistan`,
    ogTitle: `${originCity} to Pakistan Cargo | Complete Service`,
    ogDescription: `Professional cargo shipping from ${originCity} to Pakistan with door-to-door pickup and delivery service.`,
    ogImage: `${COMPANY_INFO.website}/images/${originSlug}-route.jpg`,
    h1: `${originCity} to Pakistan Cargo Services`
  })
};

// Generate structured data for different page types
export const generateStructuredData = {
  service: (serviceName: string, description: string) => ({
    "@context": "https://schema.org",
    "@type": "Service",
    "name": serviceName,
    "description": description,
    "provider": {
      "@type": "Organization",
      "name": "Cargo to Pakistan",
      "url": "https://cargotopakistan.ae"
    },
    "areaServed": ["Dubai", "Abu Dhabi", "Sharjah", "Ajman"],
    "serviceType": "Cargo Shipping"
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
    "telephone": "+971504948135",
    "url": "https://cargotopakistan.ae",
    "serviceArea": {
      "@type": "Country",
      "name": "Pakistan"
    }
  }),

  breadcrumb: (items: Array<{name: string, url: string}>) => ({
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  })
};
