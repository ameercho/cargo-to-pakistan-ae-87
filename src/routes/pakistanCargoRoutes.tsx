
import DubaiToPakistan from "@/pages/DubaiToPakistan";
import AbuDhabiToPakistan from "@/pages/AbuDhabiToPakistan";
import SharjahToPakistan from "@/pages/SharjahToPakistan";
import AjmanToPakistan from "@/pages/AjmanToPakistan";
import KarachiCargo from "@/pages/KarachiCargo";
import LahoreCargo from "@/pages/LahoreCargo";
import IslamabadCargo from "@/pages/IslamabadCargo";
import PeshawarCargo from "@/pages/PeshawarCargo";
import QuettaCargo from "@/pages/QuettaCargo";
import FaisalabadCargo from "@/pages/FaisalabadCargo";
import MultanCargo from "@/pages/MultanCargo";
import SialkotCargo from "@/pages/SialkotCargo";
import RawalpindiCargo from "@/pages/RawalpindiCargo";
import GujranwalaCargo from "@/pages/GujranwalaCargo";
import HyderabadCargo from "@/pages/HyderabadCargo";
import BahawalpurCargo from "@/pages/BahawalpurCargo";
import SargodaCargo from "@/pages/SargodaCargo";
import SukkurCargo from "@/pages/SukkurCargo";
import LarkanaCargo from "@/pages/LarkanaCargo";
import SheikhupuraCargo from "@/pages/SheikhupuraCargo";

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
  // Pakistan cargo pages
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
  {
    path: "pakistan-cargo-to-quetta",
    element: <QuettaCargo />,
  },
  {
    path: "pakistan-cargo-to-faisalabad",
    element: <FaisalabadCargo />,
  },
  {
    path: "pakistan-cargo-to-multan",
    element: <MultanCargo />,
  },
  {
    path: "pakistan-cargo-to-sialkot",
    element: <SialkotCargo />,
  },
  {
    path: "pakistan-cargo-to-rawalpindi",
    element: <RawalpindiCargo />,
  },
  {
    path: "pakistan-cargo-to-gujranwala",
    element: <GujranwalaCargo />,
  },
  {
    path: "pakistan-cargo-to-hyderabad",
    element: <HyderabadCargo />,
  },
  {
    path: "pakistan-cargo-to-bahawalpur",
    element: <BahawalpurCargo />,
  },
  {
    path: "pakistan-cargo-to-sargoda",
    element: <SargodaCargo />,
  },
  {
    path: "pakistan-cargo-to-sukkur",
    element: <SukkurCargo />,
  },
  {
    path: "pakistan-cargo-to-larkana",
    element: <LarkanaCargo />,
  },
  {
    path: "pakistan-cargo-to-sheikhupura",
    element: <SheikhupuraCargo />,
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
