
import { useLocation } from "react-router-dom";
import { SEOData } from "@/types";
import { generateSEOData, getCanonicalUrl } from "@/utils/seo-utils";
import { COMPANY_INFO, SEO_DEFAULTS } from "@/constants";

interface UseSEOOptions {
  title?: string;
  description?: string;
  keywords?: string;
  h1?: string;
  ogImage?: string;
  pageType?: 'serviceArea' | 'serviceType' | 'pakistanDestination' | 'routePage' | 'homepage' | 'generic';
  pageData?: {
    areaName?: string;
    areaSlug?: string;
    serviceName?: string;
    serviceSlug?: string;
    cityName?: string;
    citySlug?: string;
    originCity?: string;
    originSlug?: string;
  };
}

export const useSEO = (options: UseSEOOptions = {}): SEOData => {
  const location = useLocation();

  console.log('useSEO called with:', { 
    pathname: location.pathname, 
    pageType: options.pageType, 
    pageData: options.pageData 
  });

  // Handle homepage specifically
  if (location.pathname === '/' && (!options.pageType || options.pageType === 'homepage')) {
    const homepageSEO = generateSEOData.homepage();
    console.log('Generated homepage SEO:', homepageSEO);
    return homepageSEO;
  }

  // Generate SEO data based on page type and data
  if (options.pageType && options.pageType !== 'generic' && options.pageType !== 'homepage' && options.pageData) {
    const generatedSEO = generatePageSEO(options.pageType, options.pageData, location.pathname);
    if (generatedSEO) {
      console.log('Generated page SEO:', generatedSEO);
      return generatedSEO;
    }
  }

  // If custom SEO data is provided, use it
  if (options.title && options.description && options.keywords && options.h1) {
    const customSEO = generateSEOData.genericPage(
      location.pathname,
      options.title,
      options.description,
      options.keywords,
      options.h1
    );
    console.log('Generated custom SEO:', customSEO);
    return customSEO;
  }

  // Enhanced default SEO data based on pathname
  const defaultSEO = generateDefaultSEOForPath(location.pathname);
  console.log('Generated default SEO:', defaultSEO);
  return defaultSEO;
};

// Helper function to generate page-specific SEO
const generatePageSEO = (
  pageType: 'serviceArea' | 'serviceType' | 'pakistanDestination' | 'routePage',
  pageData: any,
  pathname: string
): SEOData | null => {
  console.log('Generating page SEO for:', { pageType, pageData, pathname });
  
  switch (pageType) {
    case 'serviceArea':
      if (pageData.areaName && pageData.areaSlug) {
        return generateSEOData.serviceArea(pageData.areaName, pageData.areaSlug);
      }
      break;
    case 'serviceType':
      if (pageData.serviceName && pageData.serviceSlug) {
        return generateSEOData.serviceType(pageData.serviceName, pageData.serviceSlug);
      }
      break;
    case 'pakistanDestination':
      if (pageData.cityName && pageData.citySlug) {
        return generateSEOData.pakistanDestination(pageData.cityName, pageData.citySlug);
      }
      break;
    case 'routePage':
      if (pageData.originCity && pageData.originSlug) {
        return generateSEOData.routePage(pageData.originCity, pageData.originSlug);
      }
      break;
  }
  return null;
};

// Generate default SEO based on pathname when other methods fail
const generateDefaultSEOForPath = (pathname: string): SEOData => {
  const pathSegments = pathname.split('/').filter(Boolean);
  
  // Route-specific defaults
  if (pathname.includes('dubai-to-pakistan')) {
    return {
      title: "Dubai to Pakistan Cargo | Door-to-Door Delivery Service",
      description: "Professional cargo shipping from Dubai to Pakistan with door-to-door pickup and delivery. Reliable, secure & affordable shipping solutions.",
      keywords: "dubai to pakistan cargo, dubai pakistan shipping, door to door cargo dubai, dubai cargo services",
      canonicalUrl: getCanonicalUrl(pathname),
      ogTitle: "Dubai to Pakistan Cargo | Professional Shipping Service",
      ogDescription: "Fast & reliable cargo shipping from Dubai to Pakistan with complete door-to-door service.",
      ogImage: SEO_DEFAULTS.defaultImage,
      h1: "Dubai to Pakistan Cargo Services"
    };
  }
  
  if (pathname.includes('abu-dhabi-to-pakistan')) {
    return {
      title: "Abu Dhabi to Pakistan Cargo | Capital Emirate Shipping",
      description: "Professional cargo services from Abu Dhabi to Pakistan with comprehensive door-to-door delivery and competitive rates.",
      keywords: "abu dhabi to pakistan cargo, abu dhabi pakistan shipping, capital emirate cargo, abu dhabi shipping",
      canonicalUrl: getCanonicalUrl(pathname),
      ogTitle: "Abu Dhabi to Pakistan Cargo | Professional Service",
      ogDescription: "Reliable cargo shipping from Abu Dhabi to Pakistan with door-to-door delivery.",
      ogImage: SEO_DEFAULTS.defaultImage,
      h1: "Abu Dhabi to Pakistan Cargo Services"
    };
  }
  
  if (pathname.includes('sharjah-to-pakistan')) {
    return {
      title: "Sharjah to Pakistan Cargo | Cultural Capital Shipping",
      description: "Efficient cargo services from Sharjah to Pakistan with reliable delivery schedules and professional handling throughout.",
      keywords: "sharjah to pakistan cargo, sharjah pakistan shipping, cultural capital cargo, sharjah shipping",
      canonicalUrl: getCanonicalUrl(pathname),
      ogTitle: "Sharjah to Pakistan Cargo | Cultural Capital Service",
      ogDescription: "Professional cargo shipping from Sharjah to Pakistan with reliable delivery.",
      ogImage: SEO_DEFAULTS.defaultImage,
      h1: "Sharjah to Pakistan Cargo Services"
    };
  }
  
  if (pathname.includes('ajman-to-pakistan')) {
    return {
      title: "Ajman to Pakistan Cargo | Complete Door-to-Door Service",
      description: "Complete cargo services from Ajman to Pakistan with professional collection and doorstep delivery across all major cities.",
      keywords: "ajman to pakistan cargo, ajman pakistan shipping, door to door ajman, ajman cargo services",
      canonicalUrl: getCanonicalUrl(pathname),
      ogTitle: "Ajman to Pakistan Cargo | Complete Service",
      ogDescription: "Professional cargo shipping from Ajman to Pakistan with door-to-door delivery.",
      ogImage: SEO_DEFAULTS.defaultImage,
      h1: "Ajman to Pakistan Cargo Services"
    };
  }
  
  if (pathname.includes('pakistan-cargo-to-karachi')) {
    return {
      title: "Cargo to Karachi Pakistan | Port City Shipping Services",
      description: "Reliable cargo shipping from UAE to Karachi, Pakistan's largest city and economic hub. Professional handling with competitive rates.",
      keywords: "cargo to karachi, uae to karachi shipping, karachi cargo services, pakistan port city delivery",
      canonicalUrl: getCanonicalUrl(pathname),
      ogTitle: "UAE to Karachi Cargo | Pakistan's Economic Hub",
      ogDescription: "Professional cargo services to Karachi with door-to-door delivery across the city.",
      ogImage: SEO_DEFAULTS.defaultImage,
      h1: "Cargo to Karachi, Pakistan"
    };
  }
  
  if (pathname.includes('pakistan-cargo-to-lahore')) {
    return {
      title: "Cargo to Lahore Pakistan | Cultural Capital Shipping",
      description: "Professional cargo services from UAE to Lahore, Pakistan's cultural capital. Reliable delivery across Gulberg, Defence, and all areas.",
      keywords: "cargo to lahore, uae to lahore shipping, lahore cargo services, pakistan cultural capital",
      canonicalUrl: getCanonicalUrl(pathname),
      ogTitle: "UAE to Lahore Cargo | Pakistan's Cultural Capital",
      ogDescription: "Comprehensive cargo services to Lahore with delivery across all major areas.",
      ogImage: SEO_DEFAULTS.defaultImage,
      h1: "Cargo to Lahore, Pakistan"
    };
  }
  
  if (pathname.includes('pakistan-cargo-to-islamabad')) {
    return {
      title: "Cargo to Islamabad Pakistan | Capital City Delivery",
      description: "Cargo shipping services from UAE to Islamabad, Pakistan's federal capital. Professional handling with delivery to F-series sectors.",
      keywords: "cargo to islamabad, uae to islamabad shipping, islamabad cargo services, pakistan capital delivery",
      canonicalUrl: getCanonicalUrl(pathname),
      ogTitle: "UAE to Islamabad Cargo | Pakistan's Federal Capital",
      ogDescription: "Professional cargo services to Islamabad with delivery across all sectors.",
      ogImage: SEO_DEFAULTS.defaultImage,
      h1: "Cargo to Islamabad, Pakistan"
    };
  }
  
  if (pathname.includes('pakistan-cargo-to-peshawar')) {
    return {
      title: "Cargo to Peshawar Pakistan | Historic City Shipping",
      description: "Professional cargo services from UAE to Peshawar with reliable delivery across Hayatabad, University Town, and all areas.",
      keywords: "cargo to peshawar, uae to peshawar shipping, peshawar cargo services, khyber pakhtunkhwa delivery",
      canonicalUrl: getCanonicalUrl(pathname),
      ogTitle: "UAE to Peshawar Cargo | Historic Frontier City",
      ogDescription: "Reliable cargo services to Peshawar with comprehensive area coverage.",
      ogImage: SEO_DEFAULTS.defaultImage,
      h1: "Cargo to Peshawar, Pakistan"
    };
  }

  // Fallback default
  return {
    title: "Cargo to Pakistan from Dubai | Professional UAE Shipping Services",
    description: "Leading cargo shipping company from UAE to Pakistan. Door-to-door delivery, competitive rates, professional handling for all destinations.",
    keywords: "cargo to pakistan, uae to pakistan shipping, dubai cargo services, door to door delivery, professional shipping",
    canonicalUrl: getCanonicalUrl(pathname),
    ogTitle: "Professional Cargo Services from UAE to Pakistan",
    ogDescription: "Reliable cargo shipping from UAE to Pakistan with door-to-door delivery and competitive rates.",
    ogImage: SEO_DEFAULTS.defaultImage,
    h1: "Professional Cargo Services from UAE to Pakistan"
  };
};
