
import { RouteObject } from "react-router-dom";

export function routeExists(pathname: string, routes: RouteObject[]): boolean {
  // Normalize the path
  const normalizedPath = pathname === '/' ? '/' : pathname.replace(/^\/+|\/+$/g, '');
  
  // Check if it's the root path
  if (pathname === '/') return true;
  
  // List of all valid routes
  const validRoutes = [
    // Main routes
    '', 'services', 'about', 'contact', 'faq', 'service-areas',
    
    // Pakistan City Pages
    'pakistan-cargo-to-karachi', 'pakistan-cargo-to-lahore', 'pakistan-cargo-to-islamabad',
    'pakistan-cargo-to-peshawar', 'pakistan-cargo-to-quetta', 'pakistan-cargo-to-faisalabad',
    'pakistan-cargo-to-multan', 'pakistan-cargo-to-sialkot', 'pakistan-cargo-to-rawalpindi',
    'pakistan-cargo-to-gujranwala', 'pakistan-cargo-to-hyderabad', 'pakistan-cargo-to-bahawalpur',
    'pakistan-cargo-to-sargoda', 'pakistan-cargo-to-sukkur', 'pakistan-cargo-to-larkana',
    'pakistan-cargo-to-sheikhupura',
    
    // Service Pages
    'services/sea-freight', 'services/air-freight', 'services/full-container',
    'services/packaging', 'services/insurance', 'services/courier-service',
    'services/warehousing', 'services/consulting', 'services/customs-clearance',
    'services/secure-handling', 'services/moving-home',
    
    // UAE Area Pages
    'areas/dubai', 'areas/abu-dhabi', 'areas/sharjah', 'areas/ajman',
    'areas/ras-al-khaimah', 'areas/fujairah', 'areas/umm-al-quwain', 'areas/al-ain',
    
    // Country Routes
    'dubai-to-pakistan', 'abu-dhabi-to-pakistan', 'sharjah-to-pakistan', 'ajman-to-pakistan'
  ];
  
  return validRoutes.includes(normalizedPath);
}
