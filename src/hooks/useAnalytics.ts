
import { useCallback } from 'react';

interface AnalyticsEvent {
  event: string;
  category?: string;
  action?: string;
  label?: string;
  value?: number;
}

export const useAnalytics = () => {
  const trackEvent = useCallback((eventData: AnalyticsEvent) => {
    // GTM tracking
    if (typeof window !== 'undefined' && window.dataLayer) {
      window.dataLayer.push({
        event: eventData.event,
        eventCategory: eventData.category,
        eventAction: eventData.action,
        eventLabel: eventData.label,
        eventValue: eventData.value,
      });
    }

    // Console log for development
    console.log('Analytics Event:', eventData);
  }, []);

  const trackPageView = useCallback((page: string, title?: string) => {
    trackEvent({
      event: 'page_view',
      category: 'engagement',
      action: 'page_view',
      label: page
    });
  }, [trackEvent]);

  const trackQuoteRequest = useCallback((service?: string) => {
    trackEvent({
      event: 'quote_request',
      category: 'conversion',
      action: 'quote_request',
      label: service || 'general'
    });
  }, [trackEvent]);

  const trackPhoneCall = useCallback(() => {
    trackEvent({
      event: 'phone_call',
      category: 'conversion',
      action: 'phone_call',
      label: 'header_button'
    });
  }, [trackEvent]);

  const trackServiceView = useCallback((serviceName: string) => {
    trackEvent({
      event: 'service_view',
      category: 'engagement',
      action: 'service_view',
      label: serviceName
    });
  }, [trackEvent]);

  return {
    trackEvent,
    trackPageView,
    trackQuoteRequest,
    trackPhoneCall,
    trackServiceView
  };
};
