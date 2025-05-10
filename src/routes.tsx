
import { createBrowserRouter } from "react-router-dom";
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
import KarachiCargo from "./pages/KarachiCargo";
import LahoreCargo from "./pages/LahoreCargo";
import IslamabadCargo from "./pages/IslamabadCargo";
import PeshawarCargo from "./pages/PeshawarCargo";
import SeaFreight from "./pages/services/SeaFreight";
import FullContainer from "./pages/services/FullContainer";
import Packaging from "./pages/services/Packaging";
import CourierService from "./pages/services/CourierService";
import AirFreight from "./pages/services/AirFreight";
import Insurance from "./pages/services/Insurance";
import DubaiArea from "./pages/areas/DubaiArea";
import AbuDhabiArea from "./pages/areas/AbuDhabiArea";
import SharjahArea from "./pages/areas/SharjahArea";
import AjmanArea from "./pages/areas/AjmanArea";
import RasAlKhaimahArea from "./pages/areas/RasAlKhaimahArea";
import FujairahArea from "./pages/areas/FujairahArea";
import UmmAlQuwainArea from "./pages/areas/UmmAlQuwainArea";
import AlAinArea from "./pages/areas/AlAinArea";
import Layout from "./components/layout/Layout";
import { Outlet } from "react-router-dom";

// Define routes with uniquely named pages
export const routes = [
  {
    path: "/",
    element: <Layout><Outlet /></Layout>,
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
      // New URLs for cargo pages
      {
        path: "pakistan-cargo-to-karachi",
        element: <KarachiCargo />,
      },
      {
        path: "pakistan-cargo-to-lahore",
        element: <LahoreCargo />,
      },
      {
        path: "pakistan-cargo-to-islamabad",
        element: <IslamabadCargo />,
      },
      {
        path: "pakistan-cargo-to-peshawar",
        element: <PeshawarCargo />,
      },
      // Service pages
      {
        path: "services/sea-freight",
        element: <SeaFreight />,
      },
      {
        path: "services/full-container",
        element: <FullContainer />,
      },
      {
        path: "services/packaging",
        element: <Packaging />,
      },
      {
        path: "services/insurance",
        element: <Insurance />,
      },
      {
        path: "services/courier-service",
        element: <CourierService />,
      },
      {
        path: "services/air-freight",
        element: <AirFreight />,
      },
      // UAE Area pages
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
      {
        path: "*",
        element: <NotFound />,
      },
      // Add old routes with redirects for SEO purposes
      {
        path: "karachi-cargo",
        element: <KarachiCargo />,
      },
      {
        path: "lahore-cargo",
        element: <LahoreCargo />,
      },
      {
        path: "islamabad-cargo",
        element: <IslamabadCargo />,
      },
      {
        path: "peshawar-cargo",
        element: <PeshawarCargo />,
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
