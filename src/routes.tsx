
import { RouteObject } from "react-router-dom";
import Index from "./pages/Index";
import Services from "./pages/Services";
import ServiceAreas from "./pages/ServiceAreas";
import About from "./pages/About";
import Contact from "./pages/Contact";
import FAQ from "./pages/FAQ";
import NotFound from "./pages/NotFound";

// Define application routes
export const routes: RouteObject[] = [
  {
    path: "/",
    element: <Index />,
  },
  {
    path: "/services",
    element: <Services />,
  },
  {
    path: "/service-areas",
    element: <ServiceAreas />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/faq",
    element: <FAQ />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];
