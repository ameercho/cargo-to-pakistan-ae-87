
import { lazy } from "react";

// Service page components
const SeaFreight = lazy(() => import("@/pages/services/SeaFreight"));
const AirFreightCargo = lazy(() => import("@/pages/services/AirFreightCargo"));
const FullContainer = lazy(() => import("@/pages/services/FullContainer"));
const Packaging = lazy(() => import("@/pages/services/Packaging"));
const CourierService = lazy(() => import("@/pages/services/CourierService"));
const MovingHome = lazy(() => import("@/pages/services/MovingHome"));
const DoorToDoorService = lazy(() => import("@/pages/services/DoorToDoorService"));
const Warehousing = lazy(() => import("@/pages/services/Warehousing"));
const Consulting = lazy(() => import("@/pages/services/Consulting"));
const CustomsClearance = lazy(() => import("@/pages/services/CustomsClearance"));
const SecureHandling = lazy(() => import("@/pages/services/SecureHandling"));
const CrossStuffing = lazy(() => import("@/pages/services/CrossStuffing"));

export const serviceRoutes = [
  {
    path: "services/sea-freight",
    element: SeaFreight,
  },
  {
    path: "services/air-freight",
    element: AirFreightCargo,
  },
  {
    path: "services/full-container",
    element: FullContainer,
  },
  {
    path: "services/packaging",
    element: Packaging,
  },
  {
    path: "services/courier-service",
    element: CourierService,
  },
  {
    path: "services/moving-home",
    element: MovingHome,
  },
  {
    path: "services/door-to-door",
    element: DoorToDoorService,
  },
  {
    path: "services/warehousing",
    element: Warehousing,
  },
  {
    path: "services/consulting",
    element: Consulting,
  },
  {
    path: "services/customs-clearance",
    element: CustomsClearance,
  },
  {
    path: "services/secure-handling",
    element: SecureHandling,
  },
  {
    path: "services/cross-stuffing",
    element: CrossStuffing,
  }
];
