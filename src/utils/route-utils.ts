
import { type RouteObject } from 'react-router-dom';

/**
 * Check if a given path corresponds to a valid route in the application
 */
export function routeExists(path: string, routes: RouteObject[]): boolean {
  // Clean the path for comparison
  const cleanPath = path.endsWith('/') && path !== '/' 
    ? path.slice(0, -1) 
    : path;
  
  // Handle root path
  if (cleanPath === '/') {
    return true;
  }

  // Find the main app route
  const appRoute = routes.find(route => route.path === '/');
  
  if (!appRoute || !('children' in appRoute) || !appRoute.children) {
    return false;
  }
  
  // For wildcard/catch-all routes (* routes)
  if (appRoute.children.some(route => route.path === '*')) {
    return true;
  }
  
  // Check if the path matches any of the routes
  const childRoute = appRoute.children.find(route => {
    if (route.path === undefined) {
      return false;
    }
    
    // Handle index route
    if (route.index) {
      return cleanPath === '/';
    }
    
    // For exact matches
    if (cleanPath === `/${route.path}`) {
      return true;
    }
    
    // For nested routes (checking if it's a prefix)
    if (route.path.includes('/') && cleanPath.startsWith(`/${route.path}`)) {
      return true;
    }
    
    return false;
  });
  
  return !!childRoute;
}
