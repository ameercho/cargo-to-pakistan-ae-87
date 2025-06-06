
import React, { createContext, useContext, ReactNode } from 'react';
import { analyticsService } from '@/services/analytics';

interface AnalyticsContextType {
  trackPhoneCall: (source?: string) => void;
  trackQuoteRequest: (service?: string, source?: string) => void;
  trackServiceView: (serviceName: string) => void;
  trackPageView: (page: string, title?: string) => void;
}

const AnalyticsContext = createContext<AnalyticsContextType | undefined>(undefined);

export const AnalyticsProvider = ({ children }: { children: ReactNode }) => {
  const value: AnalyticsContextType = {
    trackPhoneCall: (source) => analyticsService.trackPhoneCall(source),
    trackQuoteRequest: (service, source) => analyticsService.trackQuoteRequest(service, source),
    trackServiceView: (serviceName) => analyticsService.trackServiceView(serviceName),
    trackPageView: (page, title) => analyticsService.trackPageView(page, title),
  };

  return (
    <AnalyticsContext.Provider value={value}>
      {children}
    </AnalyticsContext.Provider>
  );
};

export const useAnalyticsContext = () => {
  const context = useContext(AnalyticsContext);
  if (context === undefined) {
    throw new Error('useAnalyticsContext must be used within an AnalyticsProvider');
  }
  return context;
};
