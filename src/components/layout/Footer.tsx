import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-cargo-blue text-white pt-12 pb-6">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white">Cargo<span className="text-cargo-orange">to Pakistan</span></h3>
            <p className="text-gray-300">
              Your trusted partner for all cargo shipment services to Pakistan. We provide reliable, efficient, and cost-effective solutions.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" className="text-gray-300 hover:text-white transition-colors tap-target" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="https://instagram.com" className="text-gray-300 hover:text-white transition-colors tap-target" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="https://twitter.com" className="text-gray-300 hover:text-white transition-colors tap-target" aria-label="Twitter">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-white transition-colors">Services</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</Link>
              </li>
              <li>
                <Link to="/faq" className="text-gray-300 hover:text-white transition-colors">FAQ</Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services/sea-freight" className="text-gray-300 hover:text-white transition-colors">Sea Freight</Link>
              </li>
              <li>
                <Link to="/services/full-container" className="text-gray-300 hover:text-white transition-colors">Full Container</Link>
              </li>
              <li>
                <Link to="/services/packaging" className="text-gray-300 hover:text-white transition-colors">Packaging Solutions</Link>
              </li>
              <li>
                <Link to="/services/insurance" className="text-gray-300 hover:text-white transition-colors">Cargo Insurance</Link>
              </li>
              <li>
                <Link to="/services/courier-service" className="text-gray-300 hover:text-white transition-colors">Courier Service</Link>
              </li>
              <li>
                <Link to="/services/air-freight" className="text-gray-300 hover:text-white transition-colors">Air Freight</Link>
              </li>
              <li>
                <Link to="/service-areas" className="text-gray-300 hover:text-white transition-colors">Service Areas</Link>
              </li>
            </ul>
          </div>

          {/* City Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white">Pakistan Cities</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/pakistan-cargo-to-karachi" className="text-gray-300 hover:text-white transition-colors">Karachi</Link>
              </li>
              <li>
                <Link to="/pakistan-cargo-to-lahore" className="text-gray-300 hover:text-white transition-colors">Lahore</Link>
              </li>
              <li>
                <Link to="/pakistan-cargo-to-islamabad" className="text-gray-300 hover:text-white transition-colors">Islamabad</Link>
              </li>
              <li>
                <Link to="/pakistan-cargo-to-peshawar" className="text-gray-300 hover:text-white transition-colors">Peshawar</Link>
              </li>
            </ul>
            
            <div className="pt-4">
              <h3 className="text-xl font-bold text-white">Contact Us</h3>
              <div className="space-y-3 mt-3">
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-cargo-orange flex-shrink-0" />
                  <p className="text-gray-300">+971504948135</p>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-cargo-orange flex-shrink-0" />
                  <p className="text-gray-300">info@cargotopakistan.ae</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-4 border-t border-blue-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Cargo to Pakistan. All rights reserved.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <Link to="/privacy" className="text-gray-400 text-sm hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-400 text-sm hover:text-white transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
