
// Analytics event tracking functions
import { pushToDataLayer } from './core';
import { isProductionDomain } from '@/utils/environment';

const GA4_MEASUREMENT_ID = 'G-K5V7CJ0G5P';

// Track page views
export const trackPageView = (pagePath: string, pageTitle: string): void => {
  if (!isProductionDomain()) {
    console.log('Development: Page view tracked locally', { pagePath, pageTitle });
    return;
  }
  
  // GTM style tracking
  pushToDataLayer({
    event: 'pageview',
    page: {
      path: pagePath,
      title: pageTitle
    }
  });
  
  // GA4 style tracking via gtag
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('config', GA4_MEASUREMENT_ID, {
      page_path: pagePath,
      page_title: pageTitle
    });
  }
};

// Track user events
export const trackEvent = (
  category: string, 
  action: string, 
  label?: string, 
  value?: number
): void => {
  if (!isProductionDomain()) {
    console.log('Development: Event tracked locally', { category, action, label, value });
    return;
  }
  
  // GTM style tracking
  pushToDataLayer({
    event: 'customEvent',
    eventCategory: category,
    eventAction: action,
    eventLabel: label,
    eventValue: value
  });
  
  // GA4 style tracking
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value
    });
  }
};

// Specialized tracking functions
export const trackPhoneCall = (source: string = 'unknown'): void => {
  trackEvent('conversion', 'phone_call', source);
};

export const trackQuoteRequest = (service?: string, source: string = 'unknown'): void => {
  trackEvent('conversion', 'quote_request', service || 'general');
};

export const trackServiceView = (serviceName: string): void => {
  trackEvent('engagement', 'service_view', serviceName);
};

export const trackFormSubmit = (formId: string, formName: string): void => {
  trackEvent('form', 'submit', `${formName} (${formId})`);
};
