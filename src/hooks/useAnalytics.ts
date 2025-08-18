/**
 * Simplified analytics hook without React dependencies
 * Provides safe fallbacks during React initialization issues
 */

// Extend Window interface to include dataLayer
declare global {
  interface Window {
    dataLayer: any[];
  }
}

interface AnalyticsEvent {
  event: string;
  category?: string;
  action?: string;
  label?: string;
  value?: number;
}

export const useAnalytics = () => {
  const trackEvent = (eventData: AnalyticsEvent) => {
    try {
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
    } catch (error) {
      console.warn('Analytics tracking failed:', error);
    }
  };

  const trackPageView = (page: string, title?: string) => {
    trackEvent({
      event: 'page_view',
      category: 'engagement',
      action: 'page_view',
      label: page
    });
  };

  const trackQuoteRequest = (service?: string) => {
    trackEvent({
      event: 'quote_request',
      category: 'conversion',
      action: 'quote_request',
      label: service || 'general'
    });
  };

  const trackPhoneCall = () => {
    trackEvent({
      event: 'phone_call',
      category: 'conversion',
      action: 'phone_call',
      label: 'header_button'
    });
  };

  const trackServiceView = (serviceName: string) => {
    trackEvent({
      event: 'service_view',
      category: 'engagement',
      action: 'service_view',
      label: serviceName
    });
  };

  return {
    trackEvent,
    trackPageView,
    trackQuoteRequest,
    trackPhoneCall,
    trackServiceView
  };
};