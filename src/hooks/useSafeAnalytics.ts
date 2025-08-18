/**
 * Safe analytics tracking without React hooks
 * Completely independent of React state
 */
interface AnalyticsEvent {
  event: string;
  category?: string;
  action?: string;
  label?: string;
  value?: number;
}

export const useSafeAnalytics = () => {
  const trackEvent = (eventData: AnalyticsEvent) => {
    try {
      // GTM tracking
      if (typeof window !== 'undefined' && (window as any).dataLayer) {
        (window as any).dataLayer.push({
          event: eventData.event,
          eventCategory: eventData.category,
          eventAction: eventData.action,
          eventLabel: eventData.label,
          eventValue: eventData.value,
        });
      }
      console.log('Analytics Event:', eventData);
    } catch (error) {
      console.warn('Analytics tracking failed:', error);
    }
  };

  return {
    trackEvent,
    trackPageView: (page: string) => trackEvent({ event: 'page_view', category: 'engagement', action: 'page_view', label: page }),
    trackQuoteRequest: (service?: string) => trackEvent({ event: 'quote_request', category: 'conversion', action: 'quote_request', label: service || 'general' }),
    trackPhoneCall: () => trackEvent({ event: 'phone_call', category: 'conversion', action: 'phone_call', label: 'header_button' }),
    trackServiceView: (serviceName: string) => trackEvent({ event: 'service_view', category: 'engagement', action: 'service_view', label: serviceName })
  };
};