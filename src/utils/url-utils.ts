
// Utility function to generate canonical URL from pathname
export const getCanonicalUrl = (pathname: string): string => {
  // Remove trailing slash if present (except for root)
  const cleanPath = pathname === '/' ? pathname : pathname.replace(/\/$/, '');
  return `https://cargotopakistan.ae${cleanPath}`;
};

// Validate if a route should be included in sitemap (self-referencing canonical)
export const shouldIncludeInSitemap = (route: { url: string }): boolean => {
  // Only include routes that have self-referencing canonical URLs
  const canonicalUrl = getCanonicalUrl(route.url);
  const expectedCanonical = `https://cargotopakistan.ae${route.url}`;
  return canonicalUrl === expectedCanonical;
};

// Generate URL slug from text
export const generateSlug = (text: string): string => {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9 -]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim();
};

// Extract city name from URL slug
export const extractCityFromSlug = (slug: string): string => {
  return slug
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
};
