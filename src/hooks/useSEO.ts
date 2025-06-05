
import { SEOData } from "@/types";
import { usePageSEO } from "./usePageSEO";
import { useSEOGenerator } from "./useSEOGenerator";

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
  const { generatePageSEO } = useSEOGenerator();
  const defaultSEO = usePageSEO(options);

  // Generate SEO data based on page type and data
  if (options.pageType && options.pageType !== 'generic' && options.pageData) {
    const generatedSEO = generatePageSEO({
      pageType: options.pageType,
      pageData: options.pageData
    });
    
    if (generatedSEO) {
      return generatedSEO;
    }
  }

  return defaultSEO;
};
