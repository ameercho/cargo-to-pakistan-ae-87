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

// Simple function for checking if a route exists
export function getElement(path: string) {
  // Find the app route
  const appRoute = routes.find((route) => route.path === "/");
  
  if (!appRoute || !appRoute.children) {
    return null;
  }
  
  // If it's the root path, find the index route
  if (path === "/") {
    const indexRoute = appRoute.children.find((route) => route.index);
    return indexRoute ? indexRoute.element : null;
  }
  
  // Otherwise find the matching route
  const route = appRoute.children.find((route) => route.path === path.slice(1));
  return route ? route.element : null;
}
