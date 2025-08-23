
import { createBrowserRouter } from "react-router-dom";
import AppLayout from "@/components/layout/AppLayout";

// Import all components directly (no lazy loading)
import Index from "@/pages/Index";
import Services from "@/pages/Services";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import FAQ from "@/pages/FAQ";
import ServiceAreas from "@/pages/ServiceAreas";
import NotFound from "@/pages/NotFound";

// Service routes
import AirFreightCargo from "@/pages/services/AirFreightCargo";
import CourierService from "@/pages/services/CourierService";
import CustomsClearance from "@/pages/services/CustomsClearance";
import FullContainer from "@/pages/services/FullContainer";
import Insurance from "@/pages/services/Insurance";
import Packaging from "@/pages/services/Packaging";
import SeaFreight from "@/pages/services/SeaFreight";
import SecureHandling from "@/pages/services/SecureHandling";
import Warehousing from "@/pages/services/Warehousing";
import Consulting from "@/pages/services/Consulting";

// Area routes
import DubaiArea from "@/pages/areas/DubaiArea";
import AbuDhabiArea from "@/pages/areas/AbuDhabiArea";
import SharjahArea from "@/pages/areas/SharjahArea";
import AjmanArea from "@/pages/areas/AjmanArea";
import RasAlKhaimahArea from "@/pages/areas/RasAlKhaimahArea";
import FujairahArea from "@/pages/areas/FujairahArea";
import UmmAlQuwainArea from "@/pages/areas/UmmAlQuwainArea";
import AlAinArea from "@/pages/areas/AlAinArea";

// Pakistan routes
import DubaiToPakistan from "@/pages/DubaiToPakistan";
import AbuDhabiToPakistan from "@/pages/AbuDhabiToPakistan";
import SharjahToPakistan from "@/pages/SharjahToPakistan";
import AjmanToPakistan from "@/pages/AjmanToPakistan";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
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
        path: "areas",
        element: <ServiceAreas />,
      },
      // Service routes
      {
        path: "services/air-freight-cargo",
        element: <AirFreightCargo />,
      },
      {
        path: "services/courier-service",
        element: <CourierService />,
      },
      {
        path: "services/customs-clearance",
        element: <CustomsClearance />,
      },
      {
        path: "services/full-container",
        element: <FullContainer />,
      },
      {
        path: "services/insurance",
        element: <Insurance />,
      },
      {
        path: "services/packaging",
        element: <Packaging />,
      },
      {
        path: "services/sea-freight",
        element: <SeaFreight />,
      },
      {
        path: "services/secure-handling",
        element: <SecureHandling />,
      },
      {
        path: "services/warehousing",
        element: <Warehousing />,
      },
      {
        path: "services/consulting",
        element: <Consulting />,
      },
      // Area routes
      {
        path: "areas/dubai",
        element: <DubaiArea />,
      },
      {
        path: "areas/abu-dhabi",
        element: <AbuDhabiArea />,
      },
      {
        path: "areas/sharjah",
        element: <SharjahArea />,
      },
      {
        path: "areas/ajman",
        element: <AjmanArea />,
      },
      {
        path: "areas/ras-al-khaimah",
        element: <RasAlKhaimahArea />,
      },
      {
        path: "areas/fujairah",
        element: <FujairahArea />,
      },
      {
        path: "areas/umm-al-quwain",
        element: <UmmAlQuwainArea />,
      },
      {
        path: "areas/al-ain",
        element: <AlAinArea />,
      },
      // Pakistan routes
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
]);

// Simple element lookup function
export function getElement(path: string) {
  if (path === "/") return <Index />;
  if (path === "areas") return <ServiceAreas />;
  return null;
}
