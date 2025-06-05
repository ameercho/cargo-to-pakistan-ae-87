
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

  // Generate SEO data based on page type and data
  if (options.pageType && options.pageData) {
    switch (options.pageType) {
      case 'serviceArea':
        if (options.pageData.areaName && options.pageData.areaSlug) {
          return generateSEOData.serviceArea(options.pageData.areaName, options.pageData.areaSlug);
        }
        break;
      case 'serviceType':
        if (options.pageData.serviceName && options.pageData.serviceSlug) {
          return generateSEOData.serviceType(options.pageData.serviceName, options.pageData.serviceSlug);
        }
        break;
      case 'pakistanDestination':
        if (options.pageData.cityName && options.pageData.citySlug) {
          return generateSEOData.pakistanDestination(options.pageData.cityName, options.pageData.citySlug);
        }
        break;
      case 'routePage':
        if (options.pageData.originCity && options.pageData.originSlug) {
          return generateSEOData.routePage(options.pageData.originCity, options.pageData.originSlug);
        }
        break;
    }
  }

  // Default SEO data based on current path
  const defaultSeoData: SEOData = {
    title: `${COMPANY_INFO.name} - Professional Shipping Services`,
    description: COMPANY_INFO.description,
    keywords: "cargo to pakistan, shipping services, uae pakistan cargo",
    canonicalUrl: getCanonicalUrl(location.pathname),
    ogTitle: `${COMPANY_INFO.name} - Professional Shipping Services`,
    ogDescription: COMPANY_INFO.description,
    ogImage: SEO_DEFAULTS.defaultImage,
    h1: "Professional Cargo Services"
  };

  return defaultSeoData;
};
