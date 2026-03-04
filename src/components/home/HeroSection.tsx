import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Phone, MessageCircle } from "lucide-react";
import { useSafeContact } from "@/hooks/useSafeContact";
import { SERVICE_HIGHLIGHTS } from "./utils";

// Updated interface to include onCallClick
interface HeroSectionProps {
  isReturning?: boolean;
  customerName?: string;
  onWhatsAppClick?: (e: React.MouseEvent) => void;
  onCallClick?: (e: React.MouseEvent) => void; // Added for name capture
}

const HeroSection = ({ isReturning, customerName, onWhatsAppClick, onCallClick }: HeroSectionProps) => {
  const { makeCall } = useSafeContact();

  return (
    <section className="py-20 bg-gradient-to-br from-cargo-blue to-cargo-green text-white relative overflow-hidden">
      {/* Reduced complexity: simple overlay instead of heavy filters */}
      <div className="absolute inset-0 bg-black/20 z-0"></div>
      
      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Personalized Heading Logic */}
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white leading-tight">
            {isReturning ? (
              <>
                Welcome Back{customerName ? `, ${customerName}` : ""}! <br />
                <span className="text-cargo-orange">Ready for your Next Shipment?</span>
              </>
            ) : (
              <>Dubai to Pakistan Cargo | Trusted by 10,000+ Customers</>
            )}
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-100 mb-8 max-w-3xl mx-auto">
            {isReturning 
              ? "Get a priority quote update or book your pickup instantly via WhatsApp."
              : "Professional door-to-door cargo to Pakistan from Dubai, Abu Dhabi, Sharjah & Ajman. Reliable services with competitive rates."
            }
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Button 
              onClick={onCallClick} // Connected to personalized handler in Index.tsx
              className="bg-cargo-orange hover:bg-orange-600 text-white shadow-lg"
              size="lg"
              aria-label="Call for cargo inquiry"
            >
              <Phone className="mr-2 h-5 w-5" />
              Call Us
            </Button>
            
            <Button 
              onClick={onWhatsAppClick} // Uses the personalized handler from Index.tsx
              className="bg-cargo-green hover:bg-cargo-green/90 text-white"
              size="lg"
              aria-label="WhatsApp for cargo inquiry"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              WhatsApp
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
          
          {/* Performance Optimized: Service Highlights */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto text-sm">
            {SERVICE_HIGHLIGHTS.map((service, index) => (
              <div 
                key={index} 
                className="bg-white/20 border border-white/10 rounded-lg p-3 transition-colors hover:bg-white/30"
              >
                <div className="font-semibold text-white">{service.title}</div>
                <div className="text-gray-200">{service.description}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;