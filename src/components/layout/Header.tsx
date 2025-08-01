
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, X, Phone, Mail } from "lucide-react";
import { NAVIGATION_LINKS, CONTACT_INFO } from "@/constants";
import { usePhoneCall } from "@/hooks/usePhoneCall";
import { useNavigation } from "@/hooks/useNavigation";
import { getNavLinkClasses, getUnderlineClasses, getMobileNavLinkClasses } from "./navigation/utils";

const Header = () => {
  const { location } = useNavigation();
  const { makeCall } = usePhoneCall();
  const isHomepage = location.pathname === '/';
  
  return (
    <header className={`fixed top-0 left-0 right-0 z-50 bg-white shadow-md py-2 ${isHomepage ? '' : 'mb-16'}`}>
      <div className="container-custom flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <div className="text-cargo-green font-bold text-2xl relative overflow-hidden group">
            Cargo 
            <span className="text-black group-hover:text-cargo-blue transition-colors duration-300"> to Pakistan</span>
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-cargo-green transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
          </div>
        </Link>
        
        {/* Desktop Navigation - Hidden on mobile */}
        <nav className="hidden md:flex items-center space-x-6">
          {NAVIGATION_LINKS.main.map(link => {
            const isActive = location.pathname === link.href;
            return (
              <Link 
                key={link.href} 
                to={link.href} 
                className={getNavLinkClasses(isActive)}
              >
                {link.name}
                <span className={getUnderlineClasses(isActive)}></span>
              </Link>
            );
          })}
          <Button 
            className="bg-cargo-green hover:bg-[#176a3e] shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 flex items-center gap-1" 
            onClick={() => makeCall('header')}
          >
            <Phone size={16} />
            Call Us
          </Button>
        </nav>
        
        {/* Mobile Navigation */}
        <div className="flex md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="tap-target hover:bg-cargo-lightGreen hover:text-cargo-green transition-all">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[80vw] sm:w-[350px] border-l-2 border-cargo-green">
              <div className="flex flex-col h-full">
                <div className="flex justify-between items-center mb-6">
                  <div className="text-cargo-green font-bold text-xl">
                    Cargo <span className="text-black">to Pakistan</span>
                  </div>
                  <SheetTrigger asChild>
                    <Button variant="ghost" size="icon" className="tap-target hover:bg-cargo-lightGreen rounded-full h-8 w-8 transition-all">
                      <X className="h-5 w-5" />
                      <span className="sr-only">Close menu</span>
                    </Button>
                  </SheetTrigger>
                </div>
                
                <nav className="flex flex-col space-y-1">
                  {NAVIGATION_LINKS.main.map(link => {
                    const isActive = location.pathname === link.href;
                    return (
                      <Link 
                        key={link.href} 
                        to={link.href} 
                        className={getMobileNavLinkClasses(isActive)}
                      >
                        {link.name}
                      </Link>
                    );
                  })}
                </nav>
                
                <div className="mt-auto space-y-4 pt-6 border-t mt-6">
                  <div className="flex items-center gap-2 text-black p-2 hover:bg-cargo-gray rounded-md transition-colors">
                    <div className="bg-cargo-lightGreen p-2 rounded-full">
                      <Phone className="h-4 w-4 text-cargo-green" />
                    </div>
                    <span>{CONTACT_INFO.phone}</span>
                  </div>
                  <div className="flex items-center gap-2 text-black p-2 hover:bg-cargo-gray rounded-md transition-colors">
                    <div className="bg-cargo-lightGreen p-2 rounded-full">
                      <Mail className="h-4 w-4 text-cargo-green" />
                    </div>
                    <span>{CONTACT_INFO.email}</span>
                  </div>
                  <Button 
                    className="w-full bg-cargo-green hover:bg-[#176a3e] shadow-md transition-all duration-300 hover:shadow-lg flex items-center gap-2 justify-center" 
                    onClick={() => makeCall('mobile_menu')}
                  >
                    <Phone size={16} />
                    Call Now
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
