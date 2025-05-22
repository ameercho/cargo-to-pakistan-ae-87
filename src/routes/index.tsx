
import { createBrowserRouter } from "react-router-dom";
import { mainRoutes } from "./mainRoutes";
import { serviceRoutes } from "./serviceRoutes";
import { areaRoutes } from "./areaRoutes";
import { pakistanCargoRoutes } from "./pakistanCargoRoutes";
import Layout from "@/components/layout/Layout";
import { Outlet } from "react-router-dom";

// Combine all route categories
const routes = [
  {
    path: "/",
    element: <Layout><Outlet /></Layout>,
    children: [
      ...mainRoutes,
      ...serviceRoutes,
      ...areaRoutes,
      ...pakistanCargoRoutes
    ],
  },
];

export const router = createBrowserRouter(routes);

// Improved element lookup function with better performance
export function getElement(path: string) {
  // For root path, find the index route
  if (path === "/") {
    return mainRoutes.find(route => 'index' in route && route.index)?.element || null;
  }
  
  // Remove leading slash for path matching
  const normalizedPath = path.startsWith('/') ? path.slice(1) : path;
  
  // Check each route collection
  const allRouteCollections = [mainRoutes, serviceRoutes, areaRoutes, pakistanCargoRoutes];
  
  for (const collection of allRouteCollections) {
    const route = collection.find(r => r.path === normalizedPath);
    if (route) return route.element;
  }
  
  return null;
}
