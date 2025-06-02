
import SeaFreight from "@/pages/services/SeaFreight";
import FullContainer from "@/pages/services/FullContainer";
import Packaging from "@/pages/services/Packaging";
import CourierService from "@/pages/services/CourierService";
import AirFreight from "@/pages/services/AirFreight";
import AirFreightCargo from "@/pages/services/AirFreightCargo";
import Insurance from "@/pages/services/Insurance";
import Warehousing from "@/pages/services/Warehousing";
import Consulting from "@/pages/services/Consulting";
import CustomsClearance from "@/pages/services/CustomsClearance";
import SecureHandling from "@/pages/services/SecureHandling";

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
  {
    path: "services/warehousing",
    element: <Warehousing />,
  },
  {
    path: "services/consulting",
    element: <Consulting />,
  },
  {
    path: "services/customs-clearance",
    element: <CustomsClearance />,
  },
  {
    path: "services/secure-handling",
    element: <SecureHandling />,
  },
];
