import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown, User } from "lucide-react";
import { NAVIGATION_LINKS } from "@/constants";
import { useSafeNavigation } from "@/hooks/useSafeNavigation";
import { useContact } from "@/contexts/ContactContext"; // Import Global Context

const DesktopNavigation = () => {
  const { isActive } = useSafeNavigation();
  const { handleContact, customerName } = useContact();

  return (
    <div className="hidden lg:flex items-center space-x-6">
      {/* Personalized Islamic Greeting */}
      {customerName && (
        <div className="flex items-center px-4 py-1.5 bg-cargo-blue/5 rounded-full border border-cargo-blue/20 animate-in fade-in slide-in-from-right-4">
          <User className="h-4 w-4 text-cargo-blue mr-2" />
          <span className="text-sm font-bold text-cargo-blue" dir="rtl">
            السلام علیکم، {customerName}
          </span>
        </div>
      )}

      <Link 
        to="/" 
        className={`text-gray-700 hover:text-cargo-blue transition-colors ${
          isActive('/') ? 'text-cargo-blue font-semibold' : ''
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
          {NAVIGATION_LINKS.services.map((service) => (
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
          {NAVIGATION_LINKS.areas.map((area) => (
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
          {NAVIGATION_LINKS.pakistanCities.map((city) => (
            <DropdownMenuItem key={city.href} asChild>
              <Link to={city.href} className="w-full">{city.name}</Link>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>

      <Link 
        to="/about" 
        className={`text-gray-700 hover:text-cargo-blue transition-colors ${
          isActive('/about') ? 'text-cargo-blue font-semibold' : ''
        }`}
      >
        About
      </Link>

      <Link 
        to="/faq" 
        className={`text-gray-700 hover:text-cargo-blue transition-colors ${
          isActive('/faq') ? 'text-cargo-blue font-semibold' : ''
        }`}
      >
        FAQ
      </Link>

      <Link 
        to="/contact" 
        className={`text-gray-700 hover:text-cargo-blue transition-colors ${
          isActive('/contact') ? 'text-cargo-blue font-semibold' : ''
        }`}
      >
        Contact
      </Link>

      <Button 
        onClick={() => handleContact('whatsapp')} 
        className="bg-cargo-orange hover:bg-orange-600 tap-target font-black px-6 shadow-md"
      >
        Get Quote
      </Button>
    </div>
  );
};

export default DesktopNavigation;