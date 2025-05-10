
import DubaiArea from "@/pages/areas/DubaiArea";
import AbuDhabiArea from "@/pages/areas/AbuDhabiArea";
import SharjahArea from "@/pages/areas/SharjahArea";
import AjmanArea from "@/pages/areas/AjmanArea";
import RasAlKhaimahArea from "@/pages/areas/RasAlKhaimahArea";
import FujairahArea from "@/pages/areas/FujairahArea";
import UmmAlQuwainArea from "@/pages/areas/UmmAlQuwainArea";
import AlAinArea from "@/pages/areas/AlAinArea";

export const areaRoutes = [
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
];
