
// Simple manual SEO injector - works at build time
// No TypeScript imports, just pure JavaScript with manual SEO data

const SEO_DATA = {
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
  }
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
  // Direct match in manual data
  if (SEO_DATA[route]) {
    return SEO_DATA[route];
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

// Inject metadata into HTML
export const injectMetadata = (html, route) => {
  console.log('Injecting SEO metadata for route:', route);
  
  const seoData = getSEOData(route);
  const canonicalUrl = `https://cargotopakistan.ae${route === '/' ? '' : route}`;
  
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
