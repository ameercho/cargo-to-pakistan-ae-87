
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
  pageType?: 'serviceArea' | 'serviceType' | 'pakistanDestination' | 'routePage' | 'generic';
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

  // Default SEO data based on current path
  return {
    title: `${COMPANY_INFO.name} - Professional Shipping Services`,
    description: COMPANY_INFO.description,
    keywords: "cargo to pakistan, shipping services, uae pakistan cargo",
    canonicalUrl: getCanonicalUrl(location.pathname),
    ogTitle: `${COMPANY_INFO.name} - Professional Shipping Services`,
    ogDescription: COMPANY_INFO.description,
    ogImage: SEO_DEFAULTS.defaultImage,
    h1: "Professional Cargo Services"
  };
};

// Helper function to generate page-specific SEO
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
