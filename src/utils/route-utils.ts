
// Route validation utility
export function routeExists(pathname: string, routes: any[]): boolean {
  // Normalize the path
  const normalizedPath = pathname === '/' ? '/' : pathname.replace(/^\/+|\/+$/g, '');
  
  // Check if it's the root route
  if (normalizedPath === '/' || normalizedPath === '') {
    return true;
  }
  
  // Define all valid routes
  const validRoutes = [
    // Main pages
    'services',
    'about', 
    'contact',
    'service-areas',
    'faq',
    
    // Service pages
    'services/sea-freight',
    'services/air-freight', 
    'services/full-container',
    'services/packaging',
    'services/insurance',
    'services/courier-service',
    'services/moving-home',
    'services/warehousing',
    'services/consulting',
    'services/customs-clearance',
    'services/secure-handling',
    
    // UAE area pages
    'areas/dubai',
    'areas/abu-dhabi',
    'areas/sharjah', 
    'areas/ajman',
    'areas/ras-al-khaimah',
    'areas/fujairah',
    'areas/umm-al-quwain',
    'areas/al-ain',
    
    // UAE to Pakistan routes
    'dubai-to-pakistan',
    'abu-dhabi-to-pakistan',
    'sharjah-to-pakistan',
    'ajman-to-pakistan',
    
    // Pakistan destination pages
    'pakistan-cargo-to-karachi',
    'pakistan-cargo-to-lahore',
    'pakistan-cargo-to-islamabad',
    'pakistan-cargo-to-peshawar',
    'pakistan-cargo-to-quetta',
    'pakistan-cargo-to-faisalabad',
    'pakistan-cargo-to-multan',
    'pakistan-cargo-to-sialkot',
    'pakistan-cargo-to-rawalpindi',
    'pakistan-cargo-to-gujranwala',
    'pakistan-cargo-to-hyderabad',
    'pakistan-cargo-to-bahawalpur',
    'pakistan-cargo-to-sargoda',
    'pakistan-cargo-to-sukkur',
    'pakistan-cargo-to-larkana',
    'pakistan-cargo-to-sheikhupura'
  ];
  
  return validRoutes.includes(normalizedPath);
}
