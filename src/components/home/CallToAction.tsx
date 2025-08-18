
import { Button } from "@/components/ui/button";
import { Phone, MessageCircle } from "lucide-react";
import { useSafeContact } from "@/hooks/useSafeContact";

const CallToAction = () => {
  const { makeCall, openWhatsApp } = useSafeContact();

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
              onClick={() => makeCall('home_cta')}
              className="bg-cargo-orange hover:bg-orange-600 text-white"
              size="lg"
            >
              <Phone className="mr-2 h-5 w-5" />
              Call +971 50 494 8135
            </Button>
            
            <Button 
              onClick={() => openWhatsApp(undefined, 'home_cta')}
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
