import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, User } from "lucide-react";
import { NAVIGATION_LINKS } from "@/constants";
import { useSafeNavigation } from "@/hooks/useSafeNavigation";
import { useMobileMenu } from "@/hooks/useMobileMenu";
import { useContact } from "@/contexts/ContactContext"; // Import Global Context

const MobileNavigation = () => {
  const { isActive } = useSafeNavigation();
  const { isMobileMenuOpen, toggleMobileMenu } = useMobileMenu();
  const { handleContact, customerName } = useContact();

  return (
    <>
      <button
        onClick={toggleMobileMenu}
        className="lg:hidden p-2 text-cargo-blue"
        aria-label="Toggle menu"
      >
        {isMobileMenuOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
      </button>

      {isMobileMenuOpen && (
        <div className="lg:hidden py-4 border-t bg-white shadow-2xl animate-in slide-in-from-top duration-200 fixed left-0 right-0 top-[header-height] z-[50]">
          <div className="flex flex-col space-y-4 px-6 pb-8">
            
            {/* Mobile Islamic Greeting Bar */}
            {customerName && (
              <div className="bg-cargo-blue/5 p-4 rounded-xl flex items-center justify-between border border-cargo-blue/10">
                <span className="text-cargo-blue font-black text-xl" dir="rtl">
                  السلام علیکم، {customerName}
                </span>
                <div className="h-10 w-10 bg-cargo-blue rounded-full flex items-center justify-center">
                  <User className="h-6 w-6 text-white" />
                </div>
              </div>
            )}

            <Link 
              to="/" 
              onClick={toggleMobileMenu}
              className={`text-lg py-3 border-b border-gray-50 ${
                isActive('/') ? 'text-cargo-blue font-bold' : 'text-gray-700'
              }`}
            >
              Home
            </Link>
            
            <Link 
              to="/services" 
              onClick={toggleMobileMenu}
              className={`text-lg py-3 border-b border-gray-50 ${
                isActive('/services') ? 'text-cargo-blue font-bold' : 'text-gray-700'
              }`}
            >
              Services
            </Link>

            <Link 
              to="/service-areas" 
              onClick={toggleMobileMenu}
              className={`text-lg py-3 border-b border-gray-50 ${
                isActive('/areas') || isActive('/service-areas') ? 'text-cargo-blue font-bold' : 'text-gray-700'
              }`}
            >
              UAE Areas
            </Link>

            <Link 
              to="/about" 
              onClick={toggleMobileMenu}
              className={`text-lg py-3 border-b border-gray-50 ${
                isActive('/about') ? 'text-cargo-blue font-bold' : 'text-gray-700'
              }`}
            >
              About
            </Link>

            <Link 
              to="/faq" 
              onClick={toggleMobileMenu}
              className={`text-lg py-3 border-b border-gray-50 ${
                isActive('/faq') ? 'text-cargo-blue font-bold' : 'text-gray-700'
              }`}
            >
              FAQ
            </Link>

            <Link 
              to="/contact" 
              onClick={toggleMobileMenu}
              className={`text-lg py-3 border-b border-gray-50 ${
                isActive('/contact') ? 'text-cargo-blue font-bold' : 'text-gray-700'
              }`}
            >
              Contact
            </Link>
            
            <Button 
              onClick={() => {
                toggleMobileMenu();
                handleContact('whatsapp');
              }} 
              className="bg-cargo-orange hover:bg-orange-600 w-full mt-6 h-14 text-xl font-black shadow-lg animate-pulse"
            >
              Get Quote Now
            </Button>
          </div>
        </div>
      )}
    </>
  );
};

export default MobileNavigation;