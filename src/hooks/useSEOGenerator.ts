
import { SEOData } from "@/types";
import { generateSEOData } from "@/utils/seo-utils";

interface SEOGeneratorOptions {
  pageType: 'serviceArea' | 'serviceType' | 'pakistanDestination' | 'routePage';
  pageData: {
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

export const useSEOGenerator = () => {
  const generatePageSEO = ({ pageType, pageData }: SEOGeneratorOptions): SEOData | null => {
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

  return { generatePageSEO };
};
