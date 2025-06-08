
import { useLocation } from "react-router-dom";
import { SEOData } from "@/types";
import { getSEOData } from "@/config/seo-config";

interface UseEnhancedSEOOptions {
  customSEO?: Partial<SEOData>;
  debug?: boolean;
}

export const useEnhancedSEO = (options: UseEnhancedSEOOptions = {}): SEOData => {
  const location = useLocation();
  const { customSEO, debug = false } = options;

  if (debug) {
    console.log('useEnhancedSEO called with:', { 
      pathname: location.pathname, 
      customSEO 
    });
  }

  // Get SEO data from centralized configuration
  const seoData = getSEOData(location.pathname, customSEO);

  if (debug) {
    console.log('Generated SEO data:', seoData);
  }

  return seoData;
};
