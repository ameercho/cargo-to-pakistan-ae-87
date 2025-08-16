
import { createBrowserRouter } from "react-router-dom";
import AppLayout from "@/components/layout/AppLayout";
import { mainRoutes } from "./config/mainRoutes";
import { serviceRoutes } from "./config/serviceRoutes";
import { areaRoutes } from "./config/areaRoutes";
import { pakistanRoutes } from "./config/pakistanRoutes";
import { LazyWrapper, createLazyRoute } from "./utils/routeWrapper";

// Combine all route configurations
const allRoutes = [
  ...mainRoutes,
  ...serviceRoutes,
  ...areaRoutes,
  ...pakistanRoutes
];

// Convert route configs to React Router format
const createRouteElement = (routeConfig: any) => {
  if ('index' in routeConfig && routeConfig.index) {
    return {
      index: true,
      element: createLazyRoute(routeConfig.element),
    };
  }
  
  return {
    path: routeConfig.path,
    element: createLazyRoute(routeConfig.element),
  };
};

const routes = [
  {
    path: "/",
    element: <AppLayout />,
    children: allRoutes.map(createRouteElement),
  },
];

export const router = createBrowserRouter(routes);

// Improved element lookup function
export function getElement(path: string) {
  if (path === "/") {
    const indexRoute = allRoutes.find(route => 'index' in route && route.index);
    return indexRoute ? createLazyRoute(indexRoute.element) : null;
  }
  
  const normalizedPath = path.startsWith('/') ? path.slice(1) : path;
  const route = allRoutes.find(r => r.path === normalizedPath);
  return route ? createLazyRoute(route.element) : null;
}
