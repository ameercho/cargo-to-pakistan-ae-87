
import { lazy, Suspense } from "react";
import { LoadingPage } from "@/components/ui/loading";
import NotFound from "@/pages/NotFound";

// Lazy load components
const Index = lazy(() => import("@/pages/Index"));
const Services = lazy(() => import("@/pages/Services"));
const About = lazy(() => import("@/pages/About"));
const Contact = lazy(() => import("@/pages/Contact"));
const FAQ = lazy(() => import("@/pages/FAQ"));
const ServiceAreas = lazy(() => import("@/pages/ServiceAreas"));

// Wrapper component for lazy loading
const LazyWrapper = ({ children }: { children: React.ReactNode }) => (
  <Suspense fallback={<LoadingPage />}>
    {children}
  </Suspense>
);

export const mainRoutes = [
  {
    index: true,
    element: <LazyWrapper><Index /></LazyWrapper>,
  },
  {
    path: "services",
    element: <LazyWrapper><Services /></LazyWrapper>,
  },
  {
    path: "about",
    element: <LazyWrapper><About /></LazyWrapper>,
  },
  {
    path: "contact",
    element: <LazyWrapper><Contact /></LazyWrapper>,
  },
  {
    path: "faq",
    element: <LazyWrapper><FAQ /></LazyWrapper>,
  },
  {
    path: "service-areas",
    element: <LazyWrapper><ServiceAreas /></LazyWrapper>,
  },
  {
    path: "*",
    element: <NotFound />,
  }
];
