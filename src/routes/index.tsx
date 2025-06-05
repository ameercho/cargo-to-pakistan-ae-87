
import { createBrowserRouter, lazy, Suspense } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Outlet } from "react-router-dom";
import ErrorBoundary from "@/components/common/ErrorBoundary";

// Lazy load route components for better performance
const Index = lazy(() => import("@/pages/Index"));
const Services = lazy(() => import("@/pages/Services"));
const About = lazy(() => import("@/pages/About"));
const Contact = lazy(() => import("@/pages/Contact"));
const FAQ = lazy(() => import("@/pages/FAQ"));
const ServiceAreas = lazy(() => import("@/pages/ServiceAreas"));
const NotFound = lazy(() => import("@/pages/NotFound"));

// Service pages
const SeaFreight = lazy(() => import("@/pages/services/SeaFreight"));
const AirFreightCargo = lazy(() => import("@/pages/services/AirFreightCargo"));
const FullContainer = lazy(() => import("@/pages/services/FullContainer"));
const Packaging = lazy(() => import("@/pages/services/Packaging"));
const Insurance = lazy(() => import("@/pages/services/Insurance"));
const CourierService = lazy(() => import("@/pages/services/CourierService"));
const AirFreight = lazy(() => import("@/pages/services/AirFreight"));
const Warehousing = lazy(() => import("@/pages/services/Warehousing"));
const Consulting = lazy(() => import("@/pages/services/Consulting"));
const CustomsClearance = lazy(() => import("@/pages/services/CustomsClearance"));
const SecureHandling = lazy(() => import("@/pages/services/SecureHandling"));

// Area pages
const DubaiArea = lazy(() => import("@/pages/areas/DubaiArea"));
const AbuDhabiArea = lazy(() => import("@/pages/areas/AbuDhabiArea"));
const SharjahArea = lazy(() => import("@/pages/areas/SharjahArea"));
const AjmanArea = lazy(() => import("@/pages/areas/AjmanArea"));
const RasAlKhaimahArea = lazy(() => import("@/pages/areas/RasAlKhaimahArea"));
const FujairahArea = lazy(() => import("@/pages/areas/FujairahArea"));
const UmmAlQuwainArea = lazy(() => import("@/pages/areas/UmmAlQuwainArea"));
const AlAinArea = lazy(() => import("@/pages/areas/AlAinArea"));

// Pakistan cargo pages
const DubaiToPakistan = lazy(() => import("@/pages/DubaiToPakistan"));
const AbuDhabiToPakistan = lazy(() => import("@/pages/AbuDhabiToPakistan"));
const SharjahToPakistan = lazy(() => import("@/pages/SharjahToPakistan"));
const AjmanToPakistan = lazy(() => import("@/pages/AjmanToPakistan"));
const KarachiCargo = lazy(() => import("@/pages/KarachiCargo"));
const LahoreCargo = lazy(() => import("@/pages/LahoreCargo"));
const IslamabadCargo = lazy(() => import("@/pages/IslamabadCargo"));
const PeshawarCargo = lazy(() => import("@/pages/PeshawarCargo"));
const QuettaCargo = lazy(() => import("@/pages/QuettaCargo"));
const FaisalabadCargo = lazy(() => import("@/pages/FaisalabadCargo"));
const MultanCargo = lazy(() => import("@/pages/MultanCargo"));
const SialkotCargo = lazy(() => import("@/pages/SialkotCargo"));
const RawalpindiCargo = lazy(() => import("@/pages/RawalpindiCargo"));
const GujranwalaCargo = lazy(() => import("@/pages/GujranwalaCargo"));
const HyderabadCargo = lazy(() => import("@/pages/HyderabadCargo"));
const BahawalpurCargo = lazy(() => import("@/pages/BahawalpurCargo"));
const SargodaCargo = lazy(() => import("@/pages/SargodaCargo"));
const SukkurCargo = lazy(() => import("@/pages/SukkurCargo"));
const LarkanaCargo = lazy(() => import("@/pages/LarkanaCargo"));
const SheikhupuraCargo = lazy(() => import("@/pages/SheikhupuraCargo"));

// Loading component
const LoadingSpinner = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-cargo-blue"></div>
  </div>
);

// Wrapper for lazy loaded components
const LazyWrapper = ({ children }: { children: React.ReactNode }) => (
  <ErrorBoundary>
    <Suspense fallback={<LoadingSpinner />}>
      {children}
    </Suspense>
  </ErrorBoundary>
);

const routes = [
  {
    path: "/",
    element: <Layout><Outlet /></Layout>,
    children: [
      // Main routes
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
      
      // Service routes
      {
        path: "services/sea-freight",
        element: <LazyWrapper><SeaFreight /></LazyWrapper>,
      },
      {
        path: "services/air-freight",
        element: <LazyWrapper><AirFreightCargo /></LazyWrapper>,
      },
      {
        path: "services/full-container",
        element: <LazyWrapper><FullContainer /></LazyWrapper>,
      },
      {
        path: "services/packaging",
        element: <LazyWrapper><Packaging /></LazyWrapper>,
      },
      {
        path: "services/insurance",
        element: <LazyWrapper><Insurance /></LazyWrapper>,
      },
      {
        path: "services/courier-service",
        element: <LazyWrapper><CourierService /></LazyWrapper>,
      },
      {
        path: "services/moving-home",
        element: <LazyWrapper><AirFreight /></LazyWrapper>,
      },
      {
        path: "services/warehousing",
        element: <LazyWrapper><Warehousing /></LazyWrapper>,
      },
      {
        path: "services/consulting",
        element: <LazyWrapper><Consulting /></LazyWrapper>,
      },
      {
        path: "services/customs-clearance",
        element: <LazyWrapper><CustomsClearance /></LazyWrapper>,
      },
      {
        path: "services/secure-handling",
        element: <LazyWrapper><SecureHandling /></LazyWrapper>,
      },

      // Area routes
      {
        path: "areas/dubai",
        element: <LazyWrapper><DubaiArea /></LazyWrapper>,
      },
      {
        path: "areas/abu-dhabi",
        element: <LazyWrapper><AbuDhabiArea /></LazyWrapper>,
      },
      {
        path: "areas/sharjah",
        element: <LazyWrapper><SharjahArea /></LazyWrapper>,
      },
      {
        path: "areas/ajman",
        element: <LazyWrapper><AjmanArea /></LazyWrapper>,
      },
      {
        path: "areas/ras-al-khaimah",
        element: <LazyWrapper><RasAlKhaimahArea /></LazyWrapper>,
      },
      {
        path: "areas/fujairah",
        element: <LazyWrapper><FujairahArea /></LazyWrapper>,
      },
      {
        path: "areas/umm-al-quwain",
        element: <LazyWrapper><UmmAlQuwainArea /></LazyWrapper>,
      },
      {
        path: "areas/al-ain",
        element: <LazyWrapper><AlAinArea /></LazyWrapper>,
      },

      // Pakistan cargo routes
      {
        path: "dubai-to-pakistan",
        element: <LazyWrapper><DubaiToPakistan /></LazyWrapper>,
      },
      {
        path: "abu-dhabi-to-pakistan",
        element: <LazyWrapper><AbuDhabiToPakistan /></LazyWrapper>,
      },
      {
        path: "sharjah-to-pakistan",
        element: <LazyWrapper><SharjahToPakistan /></LazyWrapper>,
      },
      {
        path: "ajman-to-pakistan",
        element: <LazyWrapper><AjmanToPakistan /></LazyWrapper>,
      },
      {
        path: "pakistan-cargo-to-karachi",
        element: <LazyWrapper><KarachiCargo /></LazyWrapper>,
      },
      {
        path: "pakistan-cargo-to-lahore",
        element: <LazyWrapper><LahoreCargo /></LazyWrapper>,
      },
      {
        path: "pakistan-cargo-to-islamabad",
        element: <LazyWrapper><IslamabadCargo /></LazyWrapper>,
      },
      {
        path: "pakistan-cargo-to-peshawar",
        element: <LazyWrapper><PeshawarCargo /></LazyWrapper>,
      },
      {
        path: "pakistan-cargo-to-quetta",
        element: <LazyWrapper><QuettaCargo /></LazyWrapper>,
      },
      {
        path: "pakistan-cargo-to-faisalabad",
        element: <LazyWrapper><FaisalabadCargo /></LazyWrapper>,
      },
      {
        path: "pakistan-cargo-to-multan",
        element: <LazyWrapper><MultanCargo /></LazyWrapper>,
      },
      {
        path: "pakistan-cargo-to-sialkot",
        element: <LazyWrapper><SialkotCargo /></LazyWrapper>,
      },
      {
        path: "pakistan-cargo-to-rawalpindi",
        element: <LazyWrapper><RawalpindiCargo /></LazyWrapper>,
      },
      {
        path: "pakistan-cargo-to-gujranwala",
        element: <LazyWrapper><GujranwalaCargo /></LazyWrapper>,
      },
      {
        path: "pakistan-cargo-to-hyderabad",
        element: <LazyWrapper><HyderabadCargo /></LazyWrapper>,
      },
      {
        path: "pakistan-cargo-to-bahawalpur",
        element: <LazyWrapper><BahawalpurCargo /></LazyWrapper>,
      },
      {
        path: "pakistan-cargo-to-sargoda",
        element: <LazyWrapper><SargodaCargo /></LazyWrapper>,
      },
      {
        path: "pakistan-cargo-to-sukkur",
        element: <LazyWrapper><SukkurCargo /></LazyWrapper>,
      },
      {
        path: "pakistan-cargo-to-larkana",
        element: <LazyWrapper><LarkanaCargo /></LazyWrapper>,
      },
      {
        path: "pakistan-cargo-to-sheikhupura",
        element: <LazyWrapper><SheikhupuraCargo /></LazyWrapper>,
      },
      
      // Legacy routes for SEO
      {
        path: "karachi-cargo",
        element: <LazyWrapper><KarachiCargo /></LazyWrapper>,
      },
      {
        path: "lahore-cargo",
        element: <LazyWrapper><LahoreCargo /></LazyWrapper>,
      },
      {
        path: "islamabad-cargo",
        element: <LazyWrapper><IslamabadCargo /></LazyWrapper>,
      },
      {
        path: "peshawar-cargo",
        element: <LazyWrapper><PeshawarCargo /></LazyWrapper>,
      },
      
      // 404 catch-all
      {
        path: "*",
        element: <LazyWrapper><NotFound /></LazyWrapper>,
      }
    ],
  },
];

export const router = createBrowserRouter(routes);

// Improved element lookup function with better performance
export function getElement(path: string) {
  // For root path, find the index route
  if (path === "/") {
    const indexRoute = routes[0].children.find(route => 'index' in route && route.index);
    return indexRoute?.element || null;
  }
  
  // Remove leading slash for path matching
  const normalizedPath = path.startsWith('/') ? path.slice(1) : path;
  
  // Find route in children
  const route = routes[0].children.find(r => r.path === normalizedPath);
  return route?.element || null;
}
