
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { NAVIGATION_LINKS, CONTACT_INFO } from "@/constants";

const MobileNavigation = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isActive = (path: string) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="lg:hidden p-2"
      >
        <Menu className="h-6 w-6" />
      </button>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden py-4 border-t">
          <div className="flex flex-col space-y-4">
            <Link 
              to="/" 
              className={`text-gray-700 hover:text-cargo-blue ${
                location.pathname === '/' ? 'text-cargo-blue font-semibold' : ''
              }`}
            >
              Home
            </Link>
            <Link 
              to="/services" 
              className={`text-gray-700 hover:text-cargo-blue ${
                isActive('/services') ? 'text-cargo-blue font-semibold' : ''
              }`}
            >
              Services
            </Link>
            <Link 
              to="/service-areas" 
              className={`text-gray-700 hover:text-cargo-blue ${
                isActive('/areas') || isActive('/service-areas') ? 'text-cargo-blue font-semibold' : ''
              }`}
            >
              UAE Areas
            </Link>
            <Link 
              to="/about" 
              className={`text-gray-700 hover:text-cargo-blue ${
                location.pathname === '/about' ? 'text-cargo-blue font-semibold' : ''
              }`}
            >
              About
            </Link>
            <Link 
              to="/faq" 
              className={`text-gray-700 hover:text-cargo-blue ${
                location.pathname === '/faq' ? 'text-cargo-blue font-semibold' : ''
              }`}
            >
              FAQ
            </Link>
            <Link 
              to="/contact" 
              className={`text-gray-700 hover:text-cargo-blue ${
                location.pathname === '/contact' ? 'text-cargo-blue font-semibold' : ''
              }`}
            >
              Contact
            </Link>
            <Button asChild className="bg-cargo-orange hover:bg-orange-600 w-full mt-2">
              <Link to="/contact">Get Quote</Link>
            </Button>
          </div>
        </div>
      )}
    </>
  );
};

export default MobileNavigation;
