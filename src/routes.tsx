import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Index from "./pages/Index";
import Services from "./pages/Services";
import About from "./pages/About";
import Contact from "./pages/Contact";
import FAQ from "./pages/FAQ";
import ServiceAreas from "./pages/ServiceAreas";
import NotFound from "./pages/NotFound";
import DubaiToPakistan from "./pages/DubaiToPakistan";
import AbuDhabiToPakistan from "./pages/AbuDhabiToPakistan";
import SharjahToPakistan from "./pages/SharjahToPakistan";
import AjmanToPakistan from "./pages/AjmanToPakistan";

// Define routes with uniquely named pages
export const routes = [
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Index />,
      },
      {
        path: "services",
        element: <Services />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "faq",
        element: <FAQ />,
      },
      {
        path: "service-areas",
        element: <ServiceAreas />,
      },
      {
        path: "dubai-to-pakistan",
        element: <DubaiToPakistan />,
      },
      {
        path: "abu-dhabi-to-pakistan",
        element: <AbuDhabiToPakistan />,
      },
      {
        path: "sharjah-to-pakistan",
        element: <SharjahToPakistan />,
      },
      {
        path: "ajman-to-pakistan",
        element: <AjmanToPakistan />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
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
