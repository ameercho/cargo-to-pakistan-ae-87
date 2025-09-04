import { Routes, Route } from 'react-router-dom'
import AppLayout from './components/layout/AppLayout'

// Pages
import Index from './pages/Index'
import Services from './pages/Services'
import About from './pages/About'
import Contact from './pages/Contact'
import FAQ from './pages/FAQ'
import ServiceAreas from './pages/ServiceAreas'
import NotFound from './pages/NotFound'

// Service pages
import SeaFreight from './pages/services/SeaFreight'
import AirFreightCargo from './pages/services/AirFreightCargo'
import FullContainer from './pages/services/FullContainer'
import Packaging from './pages/services/Packaging'
import Insurance from './pages/services/Insurance'
import CourierService from './pages/services/CourierService'
import MovingHome from './pages/services/MovingHome'
import Warehousing from './pages/services/Warehousing'
import Consulting from './pages/services/Consulting'
import CustomsClearance from './pages/services/CustomsClearance'
import SecureHandling from './pages/services/SecureHandling'

// Area pages
import DubaiArea from './pages/areas/DubaiArea'
import AbuDhabiArea from './pages/areas/AbuDhabiArea'
import SharjahArea from './pages/areas/SharjahArea'
import AjmanArea from './pages/areas/AjmanArea'
import RasAlKhaimahArea from './pages/areas/RasAlKhaimahArea'
import FujairahArea from './pages/areas/FujairahArea'
import UmmAlQuwainArea from './pages/areas/UmmAlQuwainArea'
import AlAinArea from './pages/areas/AlAinArea'

// Pakistan cargo pages
import DubaiToPakistan from './pages/DubaiToPakistan'
import AbuDhabiToPakistan from './pages/AbuDhabiToPakistan'
import SharjahToPakistan from './pages/SharjahToPakistan'
import AjmanToPakistan from './pages/AjmanToPakistan'
import KarachiCargo from './pages/KarachiCargo'
import LahoreCargo from './pages/LahoreCargo'
import IslamabadCargo from './pages/IslamabadCargo'
import FaisalabadCargo from './pages/FaisalabadCargo'
import SialkotCargo from './pages/SialkotCargo'
import MultanCargo from './pages/MultanCargo'
import RawalpindiCargo from './pages/RawalpindiCargo'
import HyderabadCargo from './pages/HyderabadCargo'
import PeshawarCargo from './pages/PeshawarCargo'
import QuettaCargo from './pages/QuettaCargo'
import SargodaCargo from './pages/SargodaCargo'
import BahawalpurCargo from './pages/BahawalpurCargo'
import GujranwalaCargo from './pages/GujranwalaCargo'
import SukkurCargo from './pages/SukkurCargo'
import LarkanaCargo from './pages/LarkanaCargo'
import SheikhupuraCargo from './pages/SheikhupuraCargo'

function App() {
  return (
    <AppLayout>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/service-areas" element={<ServiceAreas />} />
        <Route path="/areas" element={<ServiceAreas />} />
        
        {/* Service routes */}
        <Route path="/services/sea-freight" element={<SeaFreight />} />
        <Route path="/services/air-freight" element={<AirFreightCargo />} />
        <Route path="/services/full-container" element={<FullContainer />} />
        <Route path="/services/packaging" element={<Packaging />} />
        <Route path="/services/insurance" element={<Insurance />} />
        <Route path="/services/courier-service" element={<CourierService />} />
        <Route path="/services/moving-home" element={<MovingHome />} />
        <Route path="/services/warehousing" element={<Warehousing />} />
        <Route path="/services/consulting" element={<Consulting />} />
        <Route path="/services/customs-clearance" element={<CustomsClearance />} />
        <Route path="/services/secure-handling" element={<SecureHandling />} />
        
        {/* Area routes */}
        <Route path="/areas/dubai" element={<DubaiArea />} />
        <Route path="/areas/abu-dhabi" element={<AbuDhabiArea />} />
        <Route path="/areas/sharjah" element={<SharjahArea />} />
        <Route path="/areas/ajman" element={<AjmanArea />} />
        <Route path="/areas/ras-al-khaimah" element={<RasAlKhaimahArea />} />
        <Route path="/areas/fujairah" element={<FujairahArea />} />
        <Route path="/areas/umm-al-quwain" element={<UmmAlQuwainArea />} />
        <Route path="/areas/al-ain" element={<AlAinArea />} />
        
        {/* UAE to Pakistan routes */}
        <Route path="/dubai-to-pakistan" element={<DubaiToPakistan />} />
        <Route path="/abu-dhabi-to-pakistan" element={<AbuDhabiToPakistan />} />
        <Route path="/sharjah-to-pakistan" element={<SharjahToPakistan />} />
        <Route path="/ajman-to-pakistan" element={<AjmanToPakistan />} />
        
        {/* Pakistan cargo routes */}
        <Route path="/pakistan-cargo-to-karachi" element={<KarachiCargo />} />
        <Route path="/pakistan-cargo-to-lahore" element={<LahoreCargo />} />
        <Route path="/pakistan-cargo-to-islamabad" element={<IslamabadCargo />} />
        <Route path="/pakistan-cargo-to-faisalabad" element={<FaisalabadCargo />} />
        <Route path="/pakistan-cargo-to-sialkot" element={<SialkotCargo />} />
        <Route path="/pakistan-cargo-to-multan" element={<MultanCargo />} />
        <Route path="/pakistan-cargo-to-rawalpindi" element={<RawalpindiCargo />} />
        <Route path="/pakistan-cargo-to-hyderabad" element={<HyderabadCargo />} />
        <Route path="/pakistan-cargo-to-peshawar" element={<PeshawarCargo />} />
        <Route path="/pakistan-cargo-to-quetta" element={<QuettaCargo />} />
        <Route path="/pakistan-cargo-to-sargodha" element={<SargodaCargo />} />
        <Route path="/pakistan-cargo-to-bahawalpur" element={<BahawalpurCargo />} />
        <Route path="/pakistan-cargo-to-gujranwala" element={<GujranwalaCargo />} />
        <Route path="/pakistan-cargo-to-sukkur" element={<SukkurCargo />} />
        <Route path="/pakistan-cargo-to-larkana" element={<LarkanaCargo />} />
        <Route path="/pakistan-cargo-to-sheikhupura" element={<SheikhupuraCargo />} />
        
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AppLayout>
  )
}

export default App