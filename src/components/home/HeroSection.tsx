
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Phone, MessageCircle } from "lucide-react";
import { useContactActions } from "@/hooks/useContactActions";
import { SERVICE_HIGHLIGHTS } from "./utils";

const HeroSection = () => {
  const { handleCall, handleWhatsApp } = useContactActions();

  const onWhatsAppClick = () => {
    handleWhatsApp();
  };

  return (
    <section className="py-20 bg-gradient-to-br from-cargo-blue to-cargo-green text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-black/20 z-0"></div>
      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white leading-tight">
            Dubai to Pakistan Cargo | Trusted by 10,000+ Customers
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-100 mb-8 max-w-3xl mx-auto">
            Professional door-to-door cargo to Pakistan from Dubai, Abu Dhabi, Sharjah & Ajman. 
            Reliable Pakistan cargo services with secure handling and competitive rates.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Button 
              onClick={handleCall}
              className="bg-cargo-orange hover:bg-orange-600 text-white shadow-lg"
              size="lg"
            >
              <Phone className="mr-2 h-5 w-5" />
              Call Us
            </Button>
            
            <Button 
              onClick={onWhatsAppClick}
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-cargo-blue"
              size="lg"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              WhatsApp Us
            </Button>
            
            <Button 
              asChild
              variant="ghost"
              className="text-white hover:bg-white/10"
              size="lg"
            >
              <Link to="/services">
                View Services <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto text-sm">
            {SERVICE_HIGHLIGHTS.map((service, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-3">
                <div className="font-semibold">{service.title}</div>
                <div className="text-gray-300">{service.description}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
