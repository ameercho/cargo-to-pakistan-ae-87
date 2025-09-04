import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AppLayout from '@/components/layout/AppLayout'

// Direct imports instead of lazy loading to avoid React context issues
import Index from '@/pages/Index'
import Services from '@/pages/Services'
import About from '@/pages/About'
import Contact from '@/pages/Contact'
import FAQ from '@/pages/FAQ'
import ServiceAreas from '@/pages/ServiceAreas'
import NotFound from '@/pages/NotFound'

// Service pages
import SeaFreight from '@/pages/services/SeaFreight'
import AirFreightCargo from '@/pages/services/AirFreightCargo'
import FullContainer from '@/pages/services/FullContainer'
import Packaging from '@/pages/services/Packaging'
import Insurance from '@/pages/services/Insurance'
import CourierService from '@/pages/services/CourierService'
import MovingHome from '@/pages/services/MovingHome'
import Warehousing from '@/pages/services/Warehousing'
import Consulting from '@/pages/services/Consulting'
import CustomsClearance from '@/pages/services/CustomsClearance'
import SecureHandling from '@/pages/services/SecureHandling'

// Area pages
import DubaiArea from '@/pages/areas/DubaiArea'
import AbuDhabiArea from '@/pages/areas/AbuDhabiArea'
import SharjahArea from '@/pages/areas/SharjahArea'
import AjmanArea from '@/pages/areas/AjmanArea'
import RasAlKhaimahArea from '@/pages/areas/RasAlKhaimahArea'
import FujairahArea from '@/pages/areas/FujairahArea'
import UmmAlQuwainArea from '@/pages/areas/UmmAlQuwainArea'
import AlAinArea from '@/pages/areas/AlAinArea'

// Pakistan destination pages
import KarachiCargo from '@/pages/KarachiCargo'
import LahoreCargo from '@/pages/LahoreCargo'
import IslamabadCargo from '@/pages/IslamabadCargo'
import FaisalabadCargo from '@/pages/FaisalabadCargo'
import SialkotCargo from '@/pages/SialkotCargo'
import MultanCargo from '@/pages/MultanCargo'
import PeshawarCargo from '@/pages/PeshawarCargo'
import QuettaCargo from '@/pages/QuettaCargo'
import RawalpindiCargo from '@/pages/RawalpindiCargo'
import HyderabadCargo from '@/pages/HyderabadCargo'
import GujranwalaCargo from '@/pages/GujranwalaCargo'
import SargodaCargo from '@/pages/SargodaCargo'
import BahawalpurCargo from '@/pages/BahawalpurCargo'
import SukkurCargo from '@/pages/SukkurCargo'
import LarkanaCargo from '@/pages/LarkanaCargo'
import SheikhupuraCargo from '@/pages/SheikhupuraCargo'

// UAE to Pakistan pages
import DubaiToPakistan from '@/pages/DubaiToPakistan'
import AbuDhabiToPakistan from '@/pages/AbuDhabiToPakistan'
import SharjahToPakistan from '@/pages/SharjahToPakistan'
import AjmanToPakistan from '@/pages/AjmanToPakistan'

const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      // Main routes
      { index: true, element: <Index /> },
      { path: 'services', element: <Services /> },
      { path: 'about', element: <About /> },
      { path: 'contact', element: <Contact /> },
      { path: 'faq', element: <FAQ /> },
      { path: 'service-areas', element: <ServiceAreas /> },
      { path: 'areas', element: <ServiceAreas /> },
      
      // Service routes
      { path: 'services/sea-freight', element: <SeaFreight /> },
      { path: 'services/air-freight', element: <AirFreightCargo /> },
      { path: 'services/full-container', element: <FullContainer /> },
      { path: 'services/packaging', element: <Packaging /> },
      { path: 'services/insurance', element: <Insurance /> },
      { path: 'services/courier-service', element: <CourierService /> },
      { path: 'services/moving-home', element: <MovingHome /> },
      { path: 'services/warehousing', element: <Warehousing /> },
      { path: 'services/consulting', element: <Consulting /> },
      { path: 'services/customs-clearance', element: <CustomsClearance /> },
      { path: 'services/secure-handling', element: <SecureHandling /> },
      
      // Area routes
      { path: 'areas/dubai', element: <DubaiArea /> },
      { path: 'areas/abu-dhabi', element: <AbuDhabiArea /> },
      { path: 'areas/sharjah', element: <SharjahArea /> },
      { path: 'areas/ajman', element: <AjmanArea /> },
      { path: 'areas/ras-al-khaimah', element: <RasAlKhaimahArea /> },
      { path: 'areas/fujairah', element: <FujairahArea /> },
      { path: 'areas/umm-al-quwain', element: <UmmAlQuwainArea /> },
      { path: 'areas/al-ain', element: <AlAinArea /> },
      
      // Pakistan destination routes
      { path: 'pakistan-cargo-to-karachi', element: <KarachiCargo /> },
      { path: 'pakistan-cargo-to-lahore', element: <LahoreCargo /> },
      { path: 'pakistan-cargo-to-islamabad', element: <IslamabadCargo /> },
      { path: 'pakistan-cargo-to-faisalabad', element: <FaisalabadCargo /> },
      { path: 'pakistan-cargo-to-sialkot', element: <SialkotCargo /> },
      { path: 'pakistan-cargo-to-multan', element: <MultanCargo /> },
      { path: 'pakistan-cargo-to-peshawar', element: <PeshawarCargo /> },
      { path: 'pakistan-cargo-to-quetta', element: <QuettaCargo /> },
      { path: 'pakistan-cargo-to-rawalpindi', element: <RawalpindiCargo /> },
      { path: 'pakistan-cargo-to-hyderabad', element: <HyderabadCargo /> },
      { path: 'pakistan-cargo-to-gujranwala', element: <GujranwalaCargo /> },
      { path: 'pakistan-cargo-to-sargoda', element: <SargodaCargo /> },
      { path: 'pakistan-cargo-to-bahawalpur', element: <BahawalpurCargo /> },
      { path: 'pakistan-cargo-to-sukkur', element: <SukkurCargo /> },
      { path: 'pakistan-cargo-to-larkana', element: <LarkanaCargo /> },
      { path: 'pakistan-cargo-to-sheikhupura', element: <SheikhupuraCargo /> },
      
      // UAE to Pakistan routes
      { path: 'dubai-to-pakistan', element: <DubaiToPakistan /> },
      { path: 'abu-dhabi-to-pakistan', element: <AbuDhabiToPakistan /> },
      { path: 'sharjah-to-pakistan', element: <SharjahToPakistan /> },
      { path: 'ajman-to-pakistan', element: <AjmanToPakistan /> },
      
      // Catch all
      { path: '*', element: <NotFound /> }
    ],
  },
])

export { router }

export function getElement(path: string) {
  // For SSR compatibility
  if (path === '/') return <Index />;
  if (path === '/services') return <Services />;
  if (path === '/about') return <About />;
  if (path === '/contact') return <Contact />;
  if (path === '/faq') return <FAQ />;
  if (path === '/areas' || path === '/service-areas') return <ServiceAreas />;
  
  return <NotFound />;
}