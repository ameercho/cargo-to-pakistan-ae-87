
// Static SEO configuration for build-time metadata injection
// This replaces the React Helmet approach with static generation

// Centralized SEO configuration with manual control
export const SEO_CONFIG = {
  // Homepage - manually optimized
  '/': {
    title: 'Cargo to Pakistan Dubai | #1 Professional Shipping Service UAE 2024',
    description: 'Dubai\'s leading cargo service to Pakistan. 10,000+ satisfied customers. Door-to-door delivery from Business Bay, Deira to all Pakistan cities.',
    keywords: 'cargo to pakistan dubai, dubai pakistan shipping, door to door cargo dubai, air cargo dubai pakistan, sea freight dubai',
    canonicalUrl: 'https://cargotopakistan.ae/',
    ogTitle: 'Dubai\'s #1 Cargo Service to Pakistan | 4.9★ Rated Professional Shipping',
    ogDescription: 'Trusted by 10,000+ customers. Professional cargo shipping from Dubai to Pakistan with complete door-to-door service.',
    ogImage: 'https://cargotopakistan.ae/images/dubai-cargo-hero.jpg',
    h1: 'Dubai to Pakistan Cargo | Trusted by 10,000+ Customers Worldwide'
  },

  // UAE to Pakistan routes - manually optimized
  '/dubai-to-pakistan': {
    title: 'Dubai to Pakistan Cargo | Door-to-Door Delivery Service 2024',
    description: 'Professional cargo shipping from Dubai to Pakistan with door-to-door pickup and delivery. Reliable, secure & affordable shipping solutions.',
    keywords: 'dubai to pakistan cargo, dubai pakistan shipping, door to door cargo dubai, dubai cargo services',
    canonicalUrl: 'https://cargotopakistan.ae/dubai-to-pakistan',
    ogTitle: 'Dubai to Pakistan Cargo | Professional Shipping Service',
    ogDescription: 'Fast & reliable cargo shipping from Dubai to Pakistan with complete door-to-door service.',
    ogImage: 'https://cargotopakistan.ae/images/dubai-route.jpg',
    h1: 'Dubai to Pakistan Cargo Services'
  },

  '/abu-dhabi-to-pakistan': {
    title: 'Abu Dhabi to Pakistan Cargo | Capital Emirate Shipping 2024',
    description: 'Professional cargo services from Abu Dhabi to Pakistan with comprehensive door-to-door delivery and competitive rates.',
    keywords: 'abu dhabi to pakistan cargo, abu dhabi pakistan shipping, capital emirate cargo, abu dhabi shipping',
    canonicalUrl: 'https://cargotopakistan.ae/abu-dhabi-to-pakistan',
    ogTitle: 'Abu Dhabi to Pakistan Cargo | Professional Service',
    ogDescription: 'Reliable cargo shipping from Abu Dhabi to Pakistan with door-to-door delivery.',
    ogImage: 'https://cargotopakistan.ae/images/abu-dhabi-route.jpg',
    h1: 'Abu Dhabi to Pakistan Cargo Services'
  },

  // Pakistan destination pages - manually optimized  
  '/pakistan-cargo-to-karachi': {
    title: 'Cargo to Karachi Pakistan | Port City Shipping Services 2024',
    description: 'Reliable cargo shipping from UAE to Karachi, Pakistan\'s largest city and economic hub. Professional handling with competitive rates.',
    keywords: 'cargo to karachi, uae to karachi shipping, karachi cargo services, pakistan port city delivery',
    canonicalUrl: 'https://cargotopakistan.ae/pakistan-cargo-to-karachi',
    ogTitle: 'UAE to Karachi Cargo | Pakistan\'s Economic Hub',
    ogDescription: 'Professional cargo services to Karachi with door-to-door delivery across the city.',
    ogImage: 'https://cargotopakistan.ae/images/karachi-cargo.jpg',
    h1: 'Cargo to Karachi, Pakistan'
  },

  '/pakistan-cargo-to-lahore': {
    title: 'Cargo to Lahore Pakistan | Cultural Capital Shipping 2024',
    description: 'Professional cargo services from UAE to Lahore, Pakistan\'s cultural capital. Reliable delivery across Gulberg, Defence, and all areas.',
    keywords: 'cargo to lahore, uae to lahore shipping, lahore cargo services, pakistan cultural capital',
    canonicalUrl: 'https://cargotopakistan.ae/pakistan-cargo-to-lahore',
    ogTitle: 'UAE to Lahore Cargo | Pakistan\'s Cultural Capital',
    ogDescription: 'Comprehensive cargo services to Lahore with delivery across all major areas.',
    ogImage: 'https://cargotopakistan.ae/images/lahore-cargo.jpg',
    h1: 'Cargo to Lahore, Pakistan'
  },

  // Service pages - manually optimized
  '/services': {
    title: 'Pakistan Cargo Services | Professional UAE Shipping Solutions 2024',
    description: 'Comprehensive cargo services from UAE to Pakistan. Air freight, sea freight, courier service, full container loads with professional handling.',
    keywords: 'pakistan cargo services, uae shipping solutions, air freight, sea freight, courier service, full container',
    canonicalUrl: 'https://cargotopakistan.ae/services',
    ogTitle: 'Professional Pakistan Cargo Services | UAE Shipping Solutions',
    ogDescription: 'Complete range of cargo services from UAE to Pakistan with professional handling and competitive rates.',
    ogImage: 'https://cargotopakistan.ae/images/services-overview.jpg',
    h1: 'Professional Pakistan Cargo Services'
  }
};

// Dynamic SEO generation for routes not in manual config
export const generateDynamicSEO = (pathname) => {
  const baseUrl = 'https://cargotopakistan.ae';
  
  // Pakistan city cargo pages
  if (pathname.includes('pakistan-cargo-to-')) {
    const citySlug = pathname.replace('/pakistan-cargo-to-', '');
    const cityName = citySlug.split('-').map(word => 
      word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' ');
    
    return {
      title: `Cargo to ${cityName} Pakistan | Professional UAE Shipping Service 2024`,
      description: `Professional cargo services from UAE to ${cityName}, Pakistan. Door-to-door delivery with reliable handling and competitive rates.`,
      keywords: `cargo to ${cityName.toLowerCase()}, uae to ${cityName.toLowerCase()}, ${cityName.toLowerCase()} shipping, pakistan cargo`,
      canonicalUrl: `${baseUrl}${pathname}`,
      ogTitle: `UAE to ${cityName} Cargo | Professional Pakistan Service`,
      ogDescription: `Reliable cargo services from UAE to ${cityName}, Pakistan with door-to-door delivery.`,
      ogImage: `${baseUrl}/images/${citySlug}-cargo.jpg`,
      h1: `Cargo to ${cityName}, Pakistan`
    };
  }
  
  // Default fallback
  return {
    title: 'Cargo to Pakistan from UAE | Professional Shipping Services 2024',
    description: 'Professional cargo shipping services from UAE to Pakistan with competitive rates and reliable delivery to all major cities.',
    keywords: 'cargo to pakistan, uae pakistan shipping, professional cargo services, door to door delivery',
    canonicalUrl: `${baseUrl}${pathname}`,
    ogTitle: 'Professional Cargo Services from UAE to Pakistan',
    ogDescription: 'Reliable cargo shipping from UAE to Pakistan with door-to-door delivery and competitive rates.',
    ogImage: `${baseUrl}/images/default-cargo.jpg`,
    h1: 'Professional Cargo Services from UAE to Pakistan'
  };
};

// Get SEO data with manual override priority
export const getSEOData = (pathname, customSEO) => {
  console.log('Getting static SEO data for:', pathname);
  
  // First check manual configuration
  const manualSEO = SEO_CONFIG[pathname];
  
  // Then generate dynamic SEO
  const dynamicSEO = manualSEO || generateDynamicSEO(pathname);
  
  // Apply any custom overrides
  const finalSEO = customSEO ? { ...dynamicSEO, ...customSEO } : dynamicSEO;
  
  console.log('Final static SEO data:', finalSEO);
  return finalSEO;
};
