
export interface SEOData {
  title: string;
  description: string;
  keywords: string;
  canonicalUrl: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  h1: string;
}

export const generateSEOData = {
  // Service area pages
  serviceArea: (areaName: string, areaSlug: string): SEOData => ({
    title: `Cargo to Pakistan from ${areaName} | Fast & Reliable Shipping`,
    description: `Professional cargo shipping services from ${areaName} to Pakistan. Fast, reliable & affordable rates with door-to-door delivery options. Get free quote today!`,
    keywords: `${areaName.toLowerCase()} cargo, pakistan shipping, ${areaName.toLowerCase()} to pakistan, cargo services ${areaName.toLowerCase()}`,
    canonicalUrl: `https://cargotopakistan.ae/areas/${areaSlug}`,
    ogTitle: `Cargo to Pakistan from ${areaName} | Fast & Reliable Shipping`,
    ogDescription: `Professional cargo shipping services from ${areaName} to Pakistan with guaranteed delivery and competitive rates. Get a free quote today!`,
    ogImage: `https://cargotopakistan.ae/images/${areaSlug}-cargo-services.jpg`,
    h1: `Professional Cargo Services from ${areaName} to Pakistan`
  }),

  // Service type pages
  serviceType: (serviceName: string, serviceSlug: string): SEOData => ({
    title: `${serviceName} to Pakistan | Professional Shipping Services`,
    description: `${serviceName} from UAE to Pakistan. Expert handling, competitive rates & timely delivery. Contact us for professional shipping solutions!`,
    keywords: `${serviceName.toLowerCase()}, uae to pakistan ${serviceName.toLowerCase()}, cargo ${serviceName.toLowerCase()}`,
    canonicalUrl: `https://cargotopakistan.ae/services/${serviceSlug}`,
    ogTitle: `${serviceName} to Pakistan | Professional Shipping Services`,
    ogDescription: `Expert ${serviceName.toLowerCase()} services from UAE to Pakistan with professional handling and competitive rates.`,
    ogImage: `https://cargotopakistan.ae/images/${serviceSlug}-service.jpg`,
    h1: `${serviceName} Shipping from UAE to Pakistan`
  }),

  // Pakistan destination pages
  pakistanDestination: (cityName: string, citySlug: string): SEOData => ({
    title: `Cargo to ${cityName} Pakistan | Professional Shipping Services`,
    description: `Reliable cargo shipping from UAE to ${cityName}, Pakistan. Professional handling, competitive rates & door-to-door delivery. Get quote today!`,
    keywords: `cargo to ${cityName.toLowerCase()}, uae to ${cityName.toLowerCase()}, ${cityName.toLowerCase()} shipping`,
    canonicalUrl: `https://cargotopakistan.ae/pakistan-cargo-to-${citySlug}`,
    ogTitle: `Cargo to ${cityName} Pakistan | Professional Shipping Services`,
    ogDescription: `Professional cargo shipping services from UAE to ${cityName}, Pakistan with guaranteed delivery and competitive rates.`,
    ogImage: `https://cargotopakistan.ae/images/${citySlug}-cargo.jpg`,
    h1: `Professional Cargo Services to ${cityName}, Pakistan`
  }),

  // UAE to Pakistan route pages
  routePage: (originCity: string, originSlug: string): SEOData => ({
    title: `${originCity} to Pakistan Cargo | Door-to-Door Delivery Service`,
    description: `Comprehensive cargo service from ${originCity} to Pakistan with door-to-door pickup and delivery. Reliable, secure & affordable shipping solutions.`,
    keywords: `${originCity.toLowerCase()} to pakistan, cargo from ${originCity.toLowerCase()}, ${originCity.toLowerCase()} pakistan shipping`,
    canonicalUrl: `https://cargotopakistan.ae/${originSlug}-to-pakistan`,
    ogTitle: `${originCity} to Pakistan Cargo | Door-to-Door Delivery Service`,
    ogDescription: `Professional cargo services from ${originCity} to Pakistan with door-to-door delivery and competitive rates.`,
    ogImage: `https://cargotopakistan.ae/images/${originSlug}-to-pakistan.jpg`,
    h1: `${originCity} to Pakistan Cargo Services`
  })
};

// Related services and internal linking data
export const relatedServices = [
  { name: "Air Freight to Pakistan", url: "/services/air-freight", description: "Fast air cargo for urgent shipments" },
  { name: "Sea Freight to Pakistan", url: "/services/sea-freight", description: "Cost-effective ocean shipping" },
  { name: "Full Container Load", url: "/services/full-container", description: "Dedicated container solutions" },
  { name: "Door to Door Delivery", url: "/services/courier-service", description: "Complete pickup to delivery service" },
  { name: "Moving Home Services", url: "/services/moving-home", description: "Household relocation assistance" },
  { name: "Packaging Services", url: "/services/packaging", description: "Professional packing solutions" }
];

export const popularDestinations = [
  { name: "Karachi", url: "/pakistan-cargo-to-karachi", description: "Pakistan's largest port city" },
  { name: "Lahore", url: "/pakistan-cargo-to-lahore", description: "Cultural capital of Pakistan" },
  { name: "Islamabad", url: "/pakistan-cargo-to-islamabad", description: "Capital city of Pakistan" },
  { name: "Peshawar", url: "/pakistan-cargo-to-peshawar", description: "Historic northwestern city" },
  { name: "Multan", url: "/pakistan-cargo-to-multan", description: "The City of Saints" },
  { name: "Faisalabad", url: "/pakistan-cargo-to-faisalabad", description: "Pakistan's textile hub" }
];

export const uaeServiceAreas = [
  { name: "Dubai", url: "/areas/dubai", description: "Premier business hub of UAE" },
  { name: "Abu Dhabi", url: "/areas/abu-dhabi", description: "Capital emirate of UAE" },
  { name: "Sharjah", url: "/areas/sharjah", description: "Cultural capital of UAE" },
  { name: "Ajman", url: "/areas/ajman", description: "Smallest emirate with big opportunities" },
  { name: "Ras Al Khaimah", url: "/areas/ras-al-khaimah", description: "Northern emirate gateway" },
  { name: "Fujairah", url: "/areas/fujairah", description: "Only east coast emirate" }
];
