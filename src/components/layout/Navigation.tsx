
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown, Menu } from "lucide-react";
import { useState, useEffect } from "react";

const Navigation = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const serviceLinks = [
    { name: "Sea Freight", href: "/services/sea-freight" },
    { name: "Air Freight", href: "/services/air-freight" },
    { name: "Full Container", href: "/services/full-container" },
    { name: "Courier Service", href: "/services/courier-service" },
    { name: "Packaging", href: "/services/packaging" },
    { name: "Warehousing", href: "/services/warehousing" },
    { name: "Insurance", href: "/services/insurance" },
    { name: "Moving Home", href: "/services/moving-home" }
  ];

  const areaLinks = [
    { name: "Dubai", href: "/areas/dubai" },
    { name: "Abu Dhabi", href: "/areas/abu-dhabi" },
    { name: "Sharjah", href: "/areas/sharjah" },
    { name: "Ajman", href: "/areas/ajman" },
    { name: "Ras Al Khaimah", href: "/areas/ras-al-khaimah" },
    { name: "Fujairah", href: "/areas/fujairah" },
    { name: "Umm Al Quwain", href: "/areas/umm-al-quwain" },
    { name: "Al Ain", href: "/areas/al-ain" }
  ];

  const pakistanCities = [
    { name: "Karachi", href: "/pakistan-cargo-to-karachi" },
    { name: "Lahore", href: "/pakistan-cargo-to-lahore" },
    { name: "Islamabad", href: "/pakistan-cargo-to-islamabad" },
    { name: "Peshawar", href: "/pakistan-cargo-to-peshawar" },
    { name: "Quetta", href: "/pakistan-cargo-to-quetta" },
    { name: "Faisalabad", href: "/pakistan-cargo-to-faisalabad" },
    { name: "Multan", href: "/pakistan-cargo-to-multan" },
    { name: "Rawalpindi", href: "/pakistan-cargo-to-rawalpindi" }
  ];

  // Add scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  // Determine if a link is active
  const isActive = (path: string) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  return (
    <nav className={`bg-white border-b transition-all duration-200 ${scrolled ? 'shadow-md' : 'shadow-sm'}`}>
      <div className="container-custom">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-cargo-blue">
              Cargo to Pakistan
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            <Link 
              to="/" 
              className={`text-gray-700 hover:text-cargo-blue transition-colors ${
                location.pathname === '/' ? 'text-cargo-blue font-semibold' : ''
              }`}
            >
              Home
            </Link>

            {/* Services Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className={`flex items-center transition-colors ${
                isActive('/services') ? 'text-cargo-blue font-semibold' : 'text-gray-700 hover:text-cargo-blue'
              }`}>
                Services <ChevronDown className="ml-1 h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-48">
                <DropdownMenuItem asChild>
                  <Link to="/services" className="w-full">All Services</Link>
                </DropdownMenuItem>
                {serviceLinks.map((service) => (
                  <DropdownMenuItem key={service.href} asChild>
                    <Link to={service.href} className="w-full">{service.name}</Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* UAE Areas Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className={`flex items-center transition-colors ${
                isActive('/areas') || isActive('/dubai-to-pakistan') || isActive('/abu-dhabi-to-pakistan') || isActive('/sharjah-to-pakistan') || isActive('/ajman-to-pakistan') 
                ? 'text-cargo-blue font-semibold' : 'text-gray-700 hover:text-cargo-blue'
              }`}>
                UAE Areas <ChevronDown className="ml-1 h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-48">
                <DropdownMenuItem asChild>
                  <Link to="/service-areas" className="w-full">All Areas</Link>
                </DropdownMenuItem>
                {areaLinks.map((area) => (
                  <DropdownMenuItem key={area.href} asChild>
                    <Link to={area.href} className="w-full">{area.name}</Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Pakistan Cities Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className={`flex items-center transition-colors ${
                isActive('/pakistan-cargo-to-') ? 'text-cargo-blue font-semibold' : 'text-gray-700 hover:text-cargo-blue'
              }`}>
                Pakistan Cities <ChevronDown className="ml-1 h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-48">
                {pakistanCities.map((city) => (
                  <DropdownMenuItem key={city.href} asChild>
                    <Link to={city.href} className="w-full">{city.name}</Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <Link 
              to="/about" 
              className={`text-gray-700 hover:text-cargo-blue transition-colors ${
                location.pathname === '/about' ? 'text-cargo-blue font-semibold' : ''
              }`}
            >
              About
            </Link>

            <Link 
              to="/faq" 
              className={`text-gray-700 hover:text-cargo-blue transition-colors ${
                location.pathname === '/faq' ? 'text-cargo-blue font-semibold' : ''
              }`}
            >
              FAQ
            </Link>

            <Link 
              to="/contact" 
              className={`text-gray-700 hover:text-cargo-blue transition-colors ${
                location.pathname === '/contact' ? 'text-cargo-blue font-semibold' : ''
              }`}
            >
              Contact
            </Link>

            <Button asChild className="bg-cargo-orange hover:bg-orange-600 tap-target">
              <Link to="/contact">Get Quote</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>

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
      </div>
    </nav>
  );
};

export default Navigation;
