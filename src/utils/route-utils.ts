
import { RouteObject } from "react-router-dom";

/**
 * Checks if a route exists in the provided route configuration
 * @param path The path to check
 * @param routes Array of route objects
 * @returns boolean indicating if the route exists
 */
export const routeExists = (path: string, routes: RouteObject[]): boolean => {
  // Remove trailing slash for comparison (except for root path)
  const normalizedPath = path === '/' ? path : path.replace(/\/$/, '');
  
  // Check if the path exists in our defined routes
  return routes.some(route => {
    if (route.path === '*') return false; // Skip catch-all routes
    return route.path === normalizedPath || route.path + '/' === path;
  });
};
