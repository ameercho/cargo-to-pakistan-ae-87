
// Define the window interface with dataLayer
interface Window {
  dataLayer: any[];
  gtag: (...args: any[]) => void;
}

// Initialize dataLayer if it doesn't exist yet
export const initDataLayer = (): void => {
  if (typeof window !== 'undefined') {
    (window as any).dataLayer = (window as any).dataLayer || [];
  }
};

// Push events to dataLayer
export const pushToDataLayer = (data: any): void => {
  if (typeof window !== 'undefined') {
    (window as any).dataLayer = (window as any).dataLayer || [];
    (window as any).dataLayer.push(data);
  }
};

// GA4 specific function
export const gtag = (...args: any[]): void => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag(...args);
  } else if (typeof window !== 'undefined') {
    // Queue gtag calls if gtag isn't loaded yet
    (window as any).dataLayer = (window as any).dataLayer || [];
    (window as any).dataLayer.push(args);
  }
};

// Common event types
export const trackPageView = (pagePath: string, pageTitle: string): void => {
  // GTM style tracking
  pushToDataLayer({
    event: 'pageview',
    page: {
      path: pagePath,
      title: pageTitle
    }
  });
  
  // GA4 style tracking
  gtag('config', 'G-1MWDW076VK', {
    page_path: pagePath,
    page_title: pageTitle
  });
};

export const trackEvent = (category: string, action: string, label?: string, value?: number): void => {
  // GTM style tracking
  pushToDataLayer({
    event: 'customEvent',
    eventCategory: category,
    eventAction: action,
    eventLabel: label,
    eventValue: value
  });
  
  // GA4 style tracking
  gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value
  });
};

// E-commerce tracking
export const trackProductView = (product: {
  id: string,
  name: string,
  price?: number,
  category?: string
}): void => {
  pushToDataLayer({
    event: 'productView',
    ecommerce: {
      detail: {
        products: [product]
      }
    }
  });
};

// Form submission tracking
export const trackFormSubmit = (formId: string, formName: string): void => {
  pushToDataLayer({
    event: 'formSubmit',
    formId,
    formName
  });
};

// User interaction tracking
export const trackUserInteraction = (interactionType: string, elementId?: string): void => {
  pushToDataLayer({
    event: 'userInteraction',
    interactionType,
    elementId
  });
};

// Custom timing events
export const trackTiming = (category: string, variable: string, time: number): void => {
  pushToDataLayer({
    event: 'timing',
    timingCategory: category,
    timingVar: variable,
    timingValue: time
  });
};
