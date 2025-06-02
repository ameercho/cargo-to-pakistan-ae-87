
import SeaFreight from "@/pages/services/SeaFreight";
import FullContainer from "@/pages/services/FullContainer";
import Packaging from "@/pages/services/Packaging";
import CourierService from "@/pages/services/CourierService";
import AirFreight from "@/pages/services/AirFreight";
import AirFreightCargo from "@/pages/services/AirFreightCargo";
import Insurance from "@/pages/services/Insurance";

export const serviceRoutes = [
  // Service pages
  {
    path: "services/sea-freight",
    element: <SeaFreight />,
  },
  {
    path: "services/air-freight",
    element: <AirFreightCargo />,
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
    path: "services/moving-home",
    element: <AirFreight />,
  },
];
