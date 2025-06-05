
import { lazy } from "react";

// Main page components
const Index = lazy(() => import("@/pages/Index"));
const Services = lazy(() => import("@/pages/Services"));
const About = lazy(() => import("@/pages/About"));
const Contact = lazy(() => import("@/pages/Contact"));
const FAQ = lazy(() => import("@/pages/FAQ"));
const ServiceAreas = lazy(() => import("@/pages/ServiceAreas"));
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
    path: "service-areas",
    element: ServiceAreas,
  },
  {
    path: "*",
    element: NotFound,
  }
];
