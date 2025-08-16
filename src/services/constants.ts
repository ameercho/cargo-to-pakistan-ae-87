/**
 * Centralized service constants and configurations
 * All service-related constants should be defined here
 */

import { COMPANY_INFO } from "@/constants";

// Contact service constants
export const CONTACT_SERVICE = {
  phone: COMPANY_INFO.phone,
  email: COMPANY_INFO.email,
  whatsapp: {
    base: `https://wa.me/${COMPANY_INFO.phone.replace(/[^\d]/g, '')}`,
    defaultMessage: "Hello, I'm interested in your cargo services to Pakistan."
  }
} as const;

// Service delivery times (in days)
export const SERVICE_DELIVERY_TIMES = {
  airFreight: { min: 2, max: 3 },
  seaFreight: { min: 15, max: 20 },
  courier: { min: 3, max: 5 },
  fullContainer: { min: 15, max: 25 }
} as const;

// Service pricing tiers
export const SERVICE_PRICING_TIERS = {
  express: 'premium',
  standard: 'standard', 
  economy: 'economy'
} as const;

// Common service features
export const SERVICE_FEATURES = {
  tracking: 'Real-time tracking included',
  insurance: 'Comprehensive insurance available',
  packaging: 'Professional packaging included',
  customs: 'Customs clearance assistance',
  doorToDoor: 'Complete door-to-door service'
} as const;