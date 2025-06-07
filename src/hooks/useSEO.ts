
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

  // Handle homepage specifically with Dubai optimization
  if (location.pathname === '/' && (!options.pageType || options.pageType === 'homepage')) {
    return generateSEOData.homepage();
  }

  // Generate SEO data based on page type and data
  if (options.pageType && options.pageType !== 'generic' && options.pageData) {
    const generatedSEO = generatePageSEO(options.pageType, options.pageData);
    if (generatedSEO) {
      return generatedSEO;
    }
  }

  // If custom SEO data is provided, use it
  if (options.title && options.description && options.keywords && options.h1) {
    return generateSEOData.genericPage(
      location.pathname,
      options.title,
      options.description,
      options.keywords,
      options.h1
    );
  }

  // Enhanced default SEO data with Dubai keywords
  return {
    title: "Cargo to Pakistan from Dubai | Professional UAE Shipping",
    description: "Dubai's trusted cargo service to Pakistan. Door-to-door delivery, air & sea freight, competitive rates. Serving Business Bay, Deira, all Dubai areas.",
    keywords: "cargo to pakistan dubai, dubai pakistan shipping, uae cargo services, door to door dubai, air freight dubai pakistan",
    canonicalUrl: getCanonicalUrl(location.pathname),
    ogTitle: "Dubai to Pakistan Cargo | Professional Shipping Services",
    ogDescription: "Professional cargo shipping from Dubai to Pakistan with door-to-door delivery and competitive rates.",
    ogImage: SEO_DEFAULTS.defaultImage,
    h1: "Professional Cargo Services from Dubai to Pakistan"
  };
};

// Helper function to generate page-specific SEO with Dubai optimization
const generatePageSEO = (
  pageType: 'serviceArea' | 'serviceType' | 'pakistanDestination' | 'routePage',
  pageData: any
): SEOData | null => {
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
