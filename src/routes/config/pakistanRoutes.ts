
import { lazy } from "react";

// Pakistan cargo page components
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

export const pakistanRoutes = [
  // UAE to Pakistan route pages
  {
    path: "dubai-to-pakistan",
    element: DubaiToPakistan,
  },
  {
    path: "abu-dhabi-to-pakistan",
    element: AbuDhabiToPakistan,
  },
  {
    path: "sharjah-to-pakistan",
    element: SharjahToPakistan,
  },
  {
    path: "ajman-to-pakistan",
    element: AjmanToPakistan,
  },
  
  // Pakistan city cargo routes
  {
    path: "pakistan-cargo-to-karachi",
    element: KarachiCargo,
  },
  {
    path: "pakistan-cargo-to-lahore",
    element: LahoreCargo,
  },
  {
    path: "pakistan-cargo-to-islamabad",
    element: IslamabadCargo,
  },
  {
    path: "pakistan-cargo-to-peshawar",
    element: PeshawarCargo,
  },
  {
    path: "pakistan-cargo-to-quetta",
    element: QuettaCargo,
  },
  {
    path: "pakistan-cargo-to-faisalabad",
    element: FaisalabadCargo,
  },
  {
    path: "pakistan-cargo-to-multan",
    element: MultanCargo,
  },
  {
    path: "pakistan-cargo-to-sialkot",
    element: SialkotCargo,
  },
  {
    path: "pakistan-cargo-to-rawalpindi",
    element: RawalpindiCargo,
  },
  {
    path: "pakistan-cargo-to-gujranwala",
    element: GujranwalaCargo,
  },
  {
    path: "pakistan-cargo-to-hyderabad",
    element: HyderabadCargo,
  },
  {
    path: "pakistan-cargo-to-bahawalpur",
    element: BahawalpurCargo,
  },
  {
    path: "pakistan-cargo-to-sargoda",
    element: SargodaCargo,
  },
  {
    path: "pakistan-cargo-to-sukkur",
    element: SukkurCargo,
  },
  {
    path: "pakistan-cargo-to-larkana",
    element: LarkanaCargo,
  },
  {
    path: "pakistan-cargo-to-sheikhupura",
    element: SheikhupuraCargo,
  },
  
  // Legacy routes for SEO
  {
    path: "karachi-cargo",
    element: KarachiCargo,
  },
  {
    path: "lahore-cargo",
    element: LahoreCargo,
  },
  {
    path: "islamabad-cargo",
    element: IslamabadCargo,
  },
  {
    path: "peshawar-cargo",
    element: PeshawarCargo,
  }
];
