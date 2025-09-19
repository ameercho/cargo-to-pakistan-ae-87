
import { lazy } from "react";

// Main page components
const Index = lazy(() => import("@/pages/Index"));
const Services = lazy(() => import("@/pages/Services"));
const About = lazy(() => import("@/pages/About"));
const Contact = lazy(() => import("@/pages/Contact"));
const FAQ = lazy(() => import("@/pages/FAQ"));

const ThankYou = lazy(() => import("@/pages/ThankYou"));
const GetAQuote = lazy(() => import("@/pages/GetAQuote"));
const ServiceAreas = lazy(() => import("@/pages/ServiceAreas"));
const DoorToDoor = lazy(() => import("@/pages/DoorToDoor"));
const NotFound = lazy(() => import("@/pages/NotFound"));

export const mainRoutes = [
  {
    index: true,
    element: Index,
  },
  {
    path: "services",
    element: Services,
  },
  {
    path: "about",
    element: About,
  },
  {
    path: "contact",
    element: Contact,
  },
  {
    path: "faq",
    element: FAQ,
  },
  {
    path: "thank-you",
    element: ThankYou,
  },
  {
    path: "get-a-quote",
    element: GetAQuote,
  },
  {
    path: "door-to-door-cargo",
    element: DoorToDoor,
  },
  {
    path: "service-areas",
    element: ServiceAreas,
  },
  {
    path: "areas",
    element: ServiceAreas, // Redirect areas to service-areas
  },
  {
    path: "*",
    element: NotFound,
  }
];
