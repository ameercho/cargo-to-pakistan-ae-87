
import { useLocation } from "react-router-dom";
import { SEOData } from "@/types";
import { generateSEOData, getCanonicalUrl } from "@/utils/seo-utils";
import { COMPANY_INFO, SEO_DEFAULTS } from "@/constants";

interface PageSEOOptions {
  title?: string;
  description?: string;
  keywords?: string;
  h1?: string;
  ogImage?: string;
}

export const usePageSEO = (options: PageSEOOptions = {}): SEOData => {
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
