
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, X, Phone, Mail } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  
  // Track scroll position to change header style
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { title: "Home", path: "/" },
    { title: "Services", path: "/services" },
    { title: "About", path: "/about" },
    { title: "Contact", path: "/contact" },
    { title: "FAQ", path: "/faq" },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container-custom flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <div className="text-cargo-blue font-bold text-2xl">
            Cargo<span className="text-cargo-orange">Connect</span>
          </div>
        </Link>
        
        {/* Desktop Navigation - Hidden on mobile */}
        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`font-medium tap-target px-2 py-1 transition-colors ${
                location.pathname === link.path
                  ? "text-cargo-orange"
                  : "text-cargo-blue hover:text-cargo-orange"
              }`}
            >
              {link.title}
            </Link>
          ))}
          <Button className="bg-cargo-orange hover:bg-orange-600">
            Get Quote
          </Button>
        </nav>
        
        {/* Mobile Navigation */}
        <div className="flex md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="tap-target">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[80vw] sm:w-[350px]">
              <div className="flex flex-col h-full">
                <div className="flex justify-between items-center mb-6">
                  <div className="text-cargo-blue font-bold text-xl">
                    Cargo<span className="text-cargo-orange">Connect</span>
                  </div>
                  <SheetTrigger asChild>
                    <Button variant="ghost" size="icon" className="tap-target">
                      <X className="h-5 w-5" />
                      <span className="sr-only">Close menu</span>
                    </Button>
                  </SheetTrigger>
                </div>
                
                <nav className="flex flex-col space-y-4">
                  {navLinks.map((link) => (
                    <Link
                      key={link.path}
                      to={link.path}
                      className={`font-medium tap-target p-2 transition-colors ${
                        location.pathname === link.path
                          ? "bg-cargo-lightBlue text-cargo-blue rounded-md"
                          : "text-cargo-blue hover:bg-cargo-lightBlue hover:rounded-md"
                      }`}
                    >
                      {link.title}
                    </Link>
                  ))}
                </nav>
                
                <div className="mt-auto space-y-4">
                  <div className="flex items-center gap-2 text-cargo-blue">
                    <Phone className="h-4 w-4" />
                    <span>+92 300 1234567</span>
                  </div>
                  <div className="flex items-center gap-2 text-cargo-blue">
                    <Mail className="h-4 w-4" />
                    <span>info@cargoconnect.pk</span>
                  </div>
                  <Button className="w-full bg-cargo-orange hover:bg-orange-600">
                    Get Quote
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
