
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { MessageCircle, X } from "lucide-react";

const FloatingButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Handle scroll behavior - hide when scrolling down, show when scrolling up
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > lastScrollY && currentScrollY > 300) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const handleWhatsAppClick = () => {
    // WhatsApp API link - replace with your actual number
    window.open("https://wa.me/923001234567?text=Hello,%20I'm%20interested%20in%20your%20cargo%20services.", "_blank");
  };

  return (
    <div 
      className={`fixed right-4 bottom-4 z-40 transition-all duration-300 ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-24 opacity-0"
      }`}
    >
      {isOpen && (
        <div className="absolute bottom-16 right-0 bg-white p-4 rounded-lg shadow-lg w-64 animate-fade-in mb-2">
          <div className="flex justify-between items-center mb-2">
            <h4 className="font-medium text-cargo-dark">Need Help?</h4>
            <Button 
              variant="ghost" 
              size="icon" 
              className="h-6 w-6"
              onClick={() => setIsOpen(false)}
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
          <p className="text-sm text-gray-600 mb-3">
            Chat with our team for instant quotes and assistance.
          </p>
          <Button 
            className="w-full bg-cargo-medium hover:bg-cargo-dark"
            onClick={handleWhatsAppClick}
          >
            <MessageCircle className="mr-2 h-4 w-4" /> Start Chat
          </Button>
        </div>
      )}
      
      <Button
        size="lg"
        className={`rounded-full w-14 h-14 bg-cargo-medium hover:bg-cargo-dark shadow-lg tap-target ${
          isOpen ? "bg-cargo-dark" : "animate-pulse-light"
        }`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <MessageCircle className="h-6 w-6" />
        <span className="sr-only">Chat with WhatsApp</span>
      </Button>
    </div>
  );
};

export default FloatingButton;
