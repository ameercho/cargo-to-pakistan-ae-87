
import { Button } from "@/components/ui/button";
import { Phone, MessageCircle, ArrowRight } from "lucide-react";

const CallToAction = () => {
  const handleCall = () => {
    window.location.href = "tel:+971504948135";
  };
  
  const handleWhatsApp = () => {
    window.open("https://wa.me/971504948135?text=Hello,%20I'm%20interested%20in%20your%20cargo%20services%20to%20Pakistan.", "_blank");
  };

  return (
    <section className="py-16 bg-cargo-blue text-white">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Ship Your Cargo to Pakistan?
          </h2>
          <p className="text-xl text-gray-100 mb-8">
            Get a free quote today for reliable cargo shipping from UAE to Pakistan. 
            Professional handling, competitive rates, and door-to-door delivery.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <Button 
              onClick={handleCall}
              className="bg-cargo-orange hover:bg-orange-600 text-white"
              size="lg"
            >
              <Phone className="mr-2 h-5 w-5" />
              Call +971 50 494 8135
            </Button>
            
            <Button 
              onClick={handleWhatsApp}
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-cargo-blue"
              size="lg"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              WhatsApp Quote
            </Button>
          </div>
          
          <div className="mt-8 text-center">
            <p className="text-gray-300">
              Professional cargo services • Competitive rates • Reliable delivery
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
