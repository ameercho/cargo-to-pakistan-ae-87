
import DubaiToPakistan from "@/pages/DubaiToPakistan";
import AbuDhabiToPakistan from "@/pages/AbuDhabiToPakistan";
import SharjahToPakistan from "@/pages/SharjahToPakistan";
import AjmanToPakistan from "@/pages/AjmanToPakistan";
import KarachiCargo from "@/pages/KarachiCargo";
import LahoreCargo from "@/pages/LahoreCargo";
import IslamabadCargo from "@/pages/IslamabadCargo";
import PeshawarCargo from "@/pages/PeshawarCargo";

export const pakistanCargoRoutes = [
  // UAE to Pakistan routes
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
  // New URLs for Pakistan cargo pages
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
];
