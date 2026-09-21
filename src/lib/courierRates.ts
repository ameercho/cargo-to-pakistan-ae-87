export const DOCUMENT_COURIER_RATES = [
  { carrier: 'Aramex', logo: '/logos/couriers/aramex.svg', price: 'AED 95', transit: '5-10 days', note: 'Not recommended currently' },
  { carrier: 'FedEx', logo: '/logos/couriers/fedex.svg', price: 'AED 135', transit: '3-4 working days (approx)' },
  { carrier: 'UPS', logo: '/logos/couriers/ups.svg', price: 'AED 145', transit: '3-4 working days (approx)' },
  { carrier: 'DHL', logo: '/logos/couriers/dhl.svg', price: 'AED 200', transit: '3-4 working days (approx)' },
];

export const COURIER_PARTNERS = [
  { name: 'DHL', logo: '/logos/couriers/dhl.svg' },
  { name: 'FedEx', logo: '/logos/couriers/fedex.svg' },
  { name: 'Aramex', logo: '/logos/couriers/aramex.svg' },
  { name: 'UPS', logo: '/logos/couriers/ups.svg' },
];

export const COURIER_TERMS = [
  'Price will be based on the provided weight and dimensions.',
  'Any customs duty or taxes at the destination will be paid by the receiver.',
  'Chargeable weight will be either the actual weight or the volumetric weight, whichever is higher.',
  'The shipper is responsible for proper packaging to avoid damage during transit.',
  'All items in the package must be clearly declared.',
  "The relevant courier's own terms and conditions also apply.",
  'Booking is via online card payment link only — no cash option.',
];

export const ACCEPTED_PAYMENTS = ['Visa', 'Mastercard', 'Apple Pay', 'Samsung Pay'];
