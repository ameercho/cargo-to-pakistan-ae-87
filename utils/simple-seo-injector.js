// Enhanced SEO injector using centralized config
// Single source of truth for all SEO metadata

// Centralized SEO configuration
const getSEOConfig = () => {
  return {
    '/': {
      title: 'Cargo to Pakistan Dubai | #1 Professional Shipping Service UAE 2024',
      description: 'Dubai\'s leading cargo service to Pakistan. 10,000+ satisfied customers. Door-to-door delivery from Business Bay, Deira to all Pakistan cities.',
      keywords: 'cargo to pakistan dubai, dubai pakistan shipping, door to door cargo dubai, air cargo dubai pakistan, sea freight dubai',
      ogTitle: 'Dubai\'s #1 Cargo Service to Pakistan | 4.9★ Rated Professional Shipping',
      ogDescription: 'Trusted by 10,000+ customers. Professional cargo shipping from Dubai to Pakistan with complete door-to-door service.',
      ogImage: 'https://cargotopakistan.ae/images/dubai-cargo-hero.jpg'
    },
    '/services': {
      title: 'Pakistan Cargo Services | Professional UAE Shipping Solutions 2024',
      description: 'Comprehensive cargo services from UAE to Pakistan. Air freight, sea freight, courier service, full container loads with professional handling.',
      keywords: 'pakistan cargo services, uae shipping solutions, air freight, sea freight, courier service, full container',
      ogTitle: 'Professional Pakistan Cargo Services | UAE Shipping Solutions',
      ogDescription: 'Complete range of cargo services from UAE to Pakistan with professional handling and competitive rates.',
      ogImage: 'https://cargotopakistan.ae/images/services-overview.jpg'
    },
    '/services/warehousing': {
      title: 'Warehousing Services UAE | Secure Storage for Pakistan Cargo 2024',
      description: 'Professional warehousing and storage solutions in UAE with secure facilities for your cargo to Pakistan. Climate-controlled, 24/7 monitored.',
      keywords: 'warehousing uae, cargo storage dubai, secure warehouse pakistan cargo, climate controlled storage',
      ogTitle: 'UAE Warehousing Services | Secure Cargo Storage',
      ogDescription: 'Professional warehousing solutions in UAE for Pakistan cargo with 24/7 security and climate control.',
      ogImage: 'https://cargotopakistan.ae/images/warehousing-service.jpg'
    },
    '/services/air-freight': {
      title: 'Air Freight to Pakistan | Fast Express Cargo Shipping UAE 2024',
      description: 'Express air freight services from UAE to Pakistan. Fast, secure air cargo shipping for urgent shipments with 2-3 days delivery.',
      keywords: 'air freight pakistan, air cargo uae, express shipping, fast delivery pakistan',
      ogTitle: 'Air Freight to Pakistan | Express Cargo Shipping',
      ogDescription: 'Fast air freight services from UAE to Pakistan with 2-3 days delivery and secure handling.',
      ogImage: 'https://cargotopakistan.ae/images/air-freight-service.jpg'
    },
    '/services/sea-freight': {
      title: 'Sea Freight to Pakistan | Cost-Effective Ocean Shipping UAE 2024',
      description: 'Affordable sea freight services from UAE to Pakistan. Cost-effective ocean shipping for large cargo with reliable 15-20 day delivery.',
      keywords: 'sea freight pakistan, ocean shipping uae, cargo by sea, bulk shipping rates',
      ogTitle: 'Sea Freight to Pakistan | Cost-Effective Ocean Shipping',
      ogDescription: 'Affordable sea freight services from UAE to Pakistan with 15-20 day delivery for bulk cargo.',
      ogImage: 'https://cargotopakistan.ae/images/sea-freight-service.jpg'
    },
    '/about': {
      title: 'About Cargo to Pakistan | Professional UAE Shipping Company 2024',
      description: 'Learn about our professional cargo shipping company serving UAE to Pakistan routes. Trusted by thousands for reliable delivery.',
      keywords: 'about cargo pakistan, uae shipping company, professional cargo services, reliable delivery',
      ogTitle: 'About Cargo to Pakistan | Professional Shipping Company',
      ogDescription: 'Professional cargo shipping company serving UAE to Pakistan with reliable delivery and excellent service.',
      ogImage: 'https://cargotopakistan.ae/images/about-company.jpg'
    },
    '/contact': {
      title: 'Contact Cargo to Pakistan | Get Quote UAE Shipping Service 2024',
      description: 'Contact us for cargo shipping quotes from UAE to Pakistan. Call +971504948135 or WhatsApp for instant quotes and booking.',
      keywords: 'contact cargo pakistan, shipping quote uae, cargo booking pakistan, call whatsapp',
      ogTitle: 'Contact Cargo to Pakistan | Get Instant Quote',
      ogDescription: 'Contact us for cargo shipping quotes from UAE to Pakistan. Instant quotes available via phone and WhatsApp.',
      ogImage: 'https://cargotopakistan.ae/images/contact-us.jpg'
    },
    '/dubai-to-pakistan': {
      title: 'Dubai to Pakistan Cargo | Door-to-Door Delivery Service 2024',
      description: 'Professional cargo shipping from Dubai to Pakistan with door-to-door pickup and delivery. Reliable, secure & affordable shipping solutions.',
      keywords: 'dubai to pakistan cargo, dubai pakistan shipping, door to door cargo dubai, dubai cargo services',
      ogTitle: 'Dubai to Pakistan Cargo | Professional Shipping Service',
      ogDescription: 'Fast & reliable cargo shipping from Dubai to Pakistan with complete door-to-door service.',
      ogImage: 'https://cargotopakistan.ae/images/dubai-route.jpg'
    },
    '/abu-dhabi-to-pakistan': {
      title: 'Abu Dhabi to Pakistan Cargo | Capital Emirate Shipping 2024',
      description: 'Professional cargo services from Abu Dhabi to Pakistan with comprehensive door-to-door delivery and competitive rates.',
      keywords: 'abu dhabi to pakistan cargo, abu dhabi pakistan shipping, capital emirate cargo, abu dhabi shipping',
      ogTitle: 'Abu Dhabi to Pakistan Cargo | Professional Service',
      ogDescription: 'Reliable cargo shipping from Abu Dhabi to Pakistan with door-to-door delivery.',
      ogImage: 'https://cargotopakistan.ae/images/abu-dhabi-route.jpg'
    },
    '/sharjah-to-pakistan': {
      title: 'Sharjah to Pakistan Cargo | Cultural Capital Shipping 2024',
      description: 'Efficient cargo services from Sharjah to Pakistan with reliable delivery schedules and professional handling throughout.',
      keywords: 'sharjah to pakistan cargo, sharjah pakistan shipping, cultural capital cargo, sharjah shipping',
      ogTitle: 'Sharjah to Pakistan Cargo | Cultural Capital Service',
      ogDescription: 'Professional cargo shipping from Sharjah to Pakistan with reliable delivery.',
      ogImage: 'https://cargotopakistan.ae/images/sharjah-route.jpg'
    },
    '/ajman-to-pakistan': {
      title: 'Ajman to Pakistan Cargo | Complete Door-to-Door Service 2024',
      description: 'Complete cargo services from Ajman to Pakistan with professional collection and doorstep delivery across all major cities.',
      keywords: 'ajman to pakistan cargo, ajman pakistan shipping, door to door ajman, ajman cargo services',
      ogTitle: 'Ajman to Pakistan Cargo | Complete Service',
      ogDescription: 'Professional cargo shipping from Ajman to Pakistan with door-to-door delivery.',
      ogImage: 'https://cargotopakistan.ae/images/ajman-route.jpg'
    },
    '/pakistan-cargo-to-karachi': {
      title: 'Cargo to Karachi Pakistan | Port City Shipping Services 2024',
      description: 'Reliable cargo shipping from UAE to Karachi, Pakistan\'s largest city and economic hub. Professional handling with competitive rates.',
      keywords: 'cargo to karachi, uae to karachi shipping, karachi cargo services, pakistan port city delivery',
      ogTitle: 'UAE to Karachi Cargo | Pakistan\'s Economic Hub',
      ogDescription: 'Professional cargo services to Karachi with door-to-door delivery across the city.',
      ogImage: 'https://cargotopakistan.ae/images/karachi-cargo.jpg'
    },
    '/pakistan-cargo-to-lahore': {
      title: 'Cargo to Lahore Pakistan | Cultural Capital Shipping 2024',
      description: 'Professional cargo services from UAE to Lahore, Pakistan\'s cultural capital. Reliable delivery across Gulberg, Defence, and all areas.',
      keywords: 'cargo to lahore, uae to lahore shipping, lahore cargo services, pakistan cultural capital',
      ogTitle: 'UAE to Lahore Cargo | Pakistan\'s Cultural Capital',
      ogDescription: 'Comprehensive cargo services to Lahore with delivery across all major areas.',
      ogImage: 'https://cargotopakistan.ae/images/lahore-cargo.jpg'
    }
  };
};

// Generate SEO for Pakistan city pages
const generatePakistanCitySEO = (citySlug) => {
  const cityName = citySlug.replace('pakistan-cargo-to-', '').split('-').map(word => 
    word.charAt(0).toUpperCase() + word.slice(1)
  ).join(' ');
  
  return {
    title: `Cargo to ${cityName} Pakistan | Professional UAE Shipping Service 2024`,
    description: `Professional cargo services from UAE to ${cityName}, Pakistan. Door-to-door delivery with reliable handling and competitive rates.`,
    keywords: `cargo to ${cityName.toLowerCase()}, uae to ${cityName.toLowerCase()}, ${cityName.toLowerCase()} shipping, pakistan cargo`,
    ogTitle: `UAE to ${cityName} Cargo | Professional Pakistan Service`,
    ogDescription: `Reliable cargo services from UAE to ${cityName}, Pakistan with door-to-door delivery.`,
    ogImage: `https://cargotopakistan.ae/images/${citySlug}-cargo.jpg`
  };
};

// Generate SEO for UAE area pages
const generateUAEAreaSEO = (areaSlug) => {
  const areaName = areaSlug.replace('areas/', '').split('-').map(word => 
    word.charAt(0).toUpperCase() + word.slice(1)
  ).join(' ');
  
  return {
    title: `${areaName} to Pakistan Cargo | Professional Shipping Service 2024`,
    description: `Professional cargo services from ${areaName} to Pakistan with door-to-door delivery and competitive rates.`,
    keywords: `${areaName.toLowerCase()} cargo pakistan, ${areaName.toLowerCase()} shipping services, door to door ${areaName.toLowerCase()}`,
    ogTitle: `${areaName} to Pakistan Cargo | Professional Service`,
    ogDescription: `Reliable cargo shipping from ${areaName} to Pakistan with comprehensive service.`,
    ogImage: `https://cargotopakistan.ae/images/${areaSlug}-area.jpg`
  };
};

// Get SEO data for any route
const getSEOData = (route) => {
  const seoConfig = getSEOConfig();
  
  // Direct match in manual data
  if (seoConfig[route]) {
    return seoConfig[route];
  }
  
  // Pakistan city pages
  if (route.includes('pakistan-cargo-to-')) {
    return generatePakistanCitySEO(route.replace('/', ''));
  }
  
  // UAE area pages
  if (route.includes('/areas/')) {
    return generateUAEAreaSEO(route.replace('/', ''));
  }
  
  // Route pages (dubai-to-pakistan, etc)
  if (route.includes('-to-pakistan')) {
    const originCity = route.replace('/', '').replace('-to-pakistan', '').split('-').map(word => 
      word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' ');
    
    return {
      title: `${originCity} to Pakistan Cargo | Door-to-Door Delivery Service 2024`,
      description: `Professional cargo shipping from ${originCity} to Pakistan with door-to-door pickup and delivery. Reliable, secure & affordable shipping solutions.`,
      keywords: `${originCity.toLowerCase()} to pakistan cargo, ${originCity.toLowerCase()} pakistan shipping, door to door cargo ${originCity.toLowerCase()}`,
      ogTitle: `${originCity} to Pakistan Cargo | Professional Shipping Service`,
      ogDescription: `Fast & reliable cargo shipping from ${originCity} to Pakistan with complete door-to-door service.`,
      ogImage: `https://cargotopakistan.ae/images/${originCity.toLowerCase()}-route.jpg`
    };
  }
  
  // Default fallback
  return {
    title: 'Cargo to Pakistan from UAE | Professional Shipping Services 2024',
    description: 'Professional cargo shipping services from UAE to Pakistan with competitive rates and reliable delivery to all major cities.',
    keywords: 'cargo to pakistan, uae pakistan shipping, professional cargo services, door to door delivery',
    ogTitle: 'Professional Cargo Services from UAE to Pakistan',
    ogDescription: 'Reliable cargo shipping from UAE to Pakistan with door-to-door delivery and competitive rates.',
    ogImage: 'https://cargotopakistan.ae/images/default-cargo.jpg'
  };
};

// Inject metadata into HTML with validation
export const injectMetadata = (html, route) => {
  console.log('Injecting SEO metadata for route:', route);
  
  const seoData = getSEOData(route);
  const canonicalUrl = `https://cargotopakistan.ae${route === '/' ? '' : route}`;
  
  // SEO validation
  if (seoData.title.length > 60) {
    console.warn(`SEO Warning: Title too long (${seoData.title.length} chars) for route: ${route}`);
  }
  if (seoData.description.length > 160) {
    console.warn(`SEO Warning: Description too long (${seoData.description.length} chars) for route: ${route}`);
  }
  
  const metaTags = `
    <title>${seoData.title}</title>
    <meta name="description" content="${seoData.description}" />
    <meta name="keywords" content="${seoData.keywords}" />
    <link rel="canonical" href="${canonicalUrl}" />
    
    <!-- Open Graph -->
    <meta property="og:type" content="website" />
    <meta property="og:title" content="${seoData.ogTitle}" />
    <meta property="og:description" content="${seoData.ogDescription}" />
    <meta property="og:image" content="${seoData.ogImage}" />
    <meta property="og:url" content="${canonicalUrl}" />
    <meta property="og:site_name" content="Cargo to Pakistan" />
    
    <!-- Twitter Card -->
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${seoData.ogTitle}" />
    <meta name="twitter:description" content="${seoData.ogDescription}" />
    <meta name="twitter:image" content="${seoData.ogImage}" />
    
    <!-- Additional SEO -->
    <meta name="robots" content="index, follow" />
    <meta name="author" content="Cargo to Pakistan" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  `;
  
  // Replace the SEO marker with actual metadata
  const result = html.replace('<!--seo-head-->', metaTags);
  
  console.log('SEO metadata injected successfully for:', route);
  return result;
};