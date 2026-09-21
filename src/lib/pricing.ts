export const PRICING = [
  { item: 'General Items - clothes, shoes, toys, wood furniture, luggage', price: 5 },
  { item: 'Electronics - small appliances (juicer, blender, small oven)', price: 12 },
  { item: 'Mattress', price: 8 },
  { item: 'Sofa', price: 12 },
  { item: 'Furniture (dismantle)', price: 5 },
  { item: 'Bicycle kids', price: 100 },
  { item: 'Bicycle adult', price: 150 },
];

export const PRICING_NOTE =
  'Above are indicative prices. AED 30/- doc fee per invoice applies. Packing charges vary and are additional.';

export const DELIVERY_DISCLAIMER =
  'Delivery to high-risk countries takes 40 to 150 working days from the invoice date. Delays may occur due to strikes, wars, port congestions, global problems, or political issues.';

export function buildOfferCatalogSchema(organizationId: string) {
  return {
    '@type': 'OfferCatalog',
    name: 'Cargo Shipping Rates (AED)',
    itemListElement: PRICING.map((row) => ({
      '@type': 'Offer',
      itemOffered: { '@type': 'Service', name: row.item },
      priceCurrency: 'AED',
      price: row.price,
      seller: { '@id': organizationId },
    })),
  };
}
