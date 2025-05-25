
// Analytics service to centralize all tracking functionality
import { initDataLayer, pushToDataLayer } from './dataLayer';

// GA4 measurement ID - corrected
const GA4_MEASUREMENT_ID = 'G-K5V7CJ0G5P';

// Track if analytics has been initialized
let isInitialized = false;

// Initialize analytics services
export const initializeAnalytics = (): void => {
  if (isInitialized) {
    console.log('Analytics already initialized');
    return;
  }

  initDataLayer();
  
  // Ensure gtag is available globally
  if (typeof window !== 'undefined') {
    (window as any).gtag = (window as any).gtag || function(){
      (window as any).dataLayer = (window as any).dataLayer || [];
      (window as any).dataLayer.push(arguments);
    };
  }

  isInitialized = true;
  console.log('Analytics initialized successfully');
};

// Track page views
export const trackPageView = (pagePath: string, pageTitle: string): void => {
  if (!isInitialized) {
    console.warn('Analytics not initialized, skipping page view tracking');
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
  if (!isInitialized) {
    console.warn('Analytics not initialized, skipping event tracking');
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

// Form submission tracking
export const trackFormSubmit = (formId: string, formName: string): void => {
  trackEvent('Form', 'Submit', `${formName} (${formId})`);
};

// Performance tracking
export const trackTiming = (category: string, variable: string, time: number): void => {
  if (!isInitialized) {
    console.warn('Analytics not initialized, skipping timing tracking');
    return;
  }

  pushToDataLayer({
    event: 'timing',
    timingCategory: category,
    timingVar: variable,
    timingValue: time
  });
};

export * from './dataLayer';
