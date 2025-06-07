
import { useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import { advancedSEOUtils } from '@/utils/dubai-seo-utils';

interface UseAdvancedSEOProps {
  pageType?: 'homepage' | 'service' | 'destination' | 'route';
  location?: string;
  service?: string;
  city?: string;
}

export const useAdvancedSEO = (props: UseAdvancedSEOProps = {}) => {
  const location = useLocation();
  
  const dynamicKeywords = useMemo(() => {
    if (props.location && props.city) {
      return advancedSEOUtils.generateLocationKeywords(props.location, props.city);
    }
    if (props.location) {
      return advancedSEOUtils.generateLocationKeywords(props.location);
    }
    return advancedSEOUtils.generateTrendingKeywords();
  }, [props.location, props.city]);

  const dynamicDescription = useMemo(() => {
    return advancedSEOUtils.generateDynamicMeta(
      props.pageType || 'homepage',
      props.location,
      props.service
    );
  }, [props.pageType, props.location, props.service]);

  return {
    dynamicKeywords,
    dynamicDescription,
    currentPath: location.pathname
  };
};
