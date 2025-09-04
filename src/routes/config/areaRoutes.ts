
import { lazy } from "react";

// Area page components
const DubaiArea = lazy(() => import("@/pages/areas/DubaiArea"));
const AbuDhabiArea = lazy(() => import("@/pages/areas/AbuDhabiArea"));
const SharjahArea = lazy(() => import("@/pages/areas/SharjahArea"));
const AjmanArea = lazy(() => import("@/pages/areas/AjmanArea"));
const RasAlKhaimahArea = lazy(() => import("@/pages/areas/RasAlKhaimahArea"));
const FujairahArea = lazy(() => import("@/pages/areas/FujairahArea"));
const UmmAlQuwainArea = lazy(() => import("@/pages/areas/UmmAlQuwainArea"));
const AlAinArea = lazy(() => import("@/pages/areas/AlAinArea"));

export const areaRoutes = [
  {
    path: "areas/dubai",
    element: DubaiArea,
  },
  {
    path: "areas/abu-dhabi",
    element: AbuDhabiArea,
  },
  {
    path: "areas/sharjah",
    element: SharjahArea,
  },
  {
    path: "areas/ajman",
    element: AjmanArea,
  },
  {
    path: "areas/ras-al-khaimah",
    element: RasAlKhaimahArea,
  },
  {
    path: "areas/fujairah",
    element: FujairahArea,
  },
  {
    path: "areas/umm-al-quwain",
    element: UmmAlQuwainArea,
  },
  {
    path: "areas/al-ain",
    element: AlAinArea,
  }
];
