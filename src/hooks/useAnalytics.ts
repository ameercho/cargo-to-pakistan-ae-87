
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { trackPageView, trackEvent, trackTiming } from '@/services/analytics';

export const usePageTracking = () => {
  const location = useLocation();
  
  useEffect(() => {
    const startTime = performance.now();
    
    try {
      // Send pageview to analytics
      trackPageView(
        location.pathname + location.search,
        document.title
      );
      
      // Measure page load performance
      const loadTime = performance.now() - startTime;
      trackTiming('Page Navigation', 'Load Time', Math.round(loadTime));
    } catch (error) {
      console.error('Analytics tracking error:', error);
    }
  }, [location]);
};

export const useEventTracking = () => {
  const trackClick = (elementName: string, category: string = 'User Interaction') => {
    trackEvent(category, 'Click', elementName);
  };

  const trackFormSubmission = (formName: string) => {
    trackEvent('Form', 'Submit', formName);
  };

  const trackDownload = (fileName: string) => {
    trackEvent('Download', 'File', fileName);
  };

  return {
    trackClick,
    trackFormSubmission,
    trackDownload,
  };
};
