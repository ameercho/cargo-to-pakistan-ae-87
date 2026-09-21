import { Button } from "@/components/ui/button";
import { Phone, MessageCircle } from "lucide-react";
import { useContact } from "@/contexts/ContactContext"; // Use the Global Context

const CallToAction = () => {
  // Pulling global name and contact handler from the brain
  const { handleContact, customerName } = useContact();

  return (
    <section className="py-20 bg-cargo-blue text-white relative overflow-hidden">
      {/* Visual background element for texture */}
      <div className="absolute top-0 right-0 -mt-20 -mr-20 w-64 h-64 bg-cargo-green/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-64 h-64 bg-cargo-orange/10 rounded-full blur-3xl"></div>

      <div className="container-custom relative z-10 text-center">
        <div className="max-w-3xl mx-auto">
          {/* Personalized Heading with Islamic Greeting */}
          <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
            {customerName ? (
              <span dir="rtl" className="block mb-4">
                السلام علیکم، {customerName}!
              </span>
            ) : null}
            Ready to Send Your Cargo to Pakistan?
          </h2>
          
          <p className="text-xl text-blue-100 mb-10">
            {customerName 
              ? "Your details are ready. Click below to get a priority quote and book your pickup immediately."
              : "Join over 10,000 satisfied customers. Get a free, no-obligation quote for your shipment today."
            }
          </p>

          <div className="flex flex-wrap justify-center gap-6">
            <Button 
              onClick={() => handleContact('call')}
              size="lg" 
              className="bg-cargo-orange hover:bg-orange-600 text-white px-8 py-7 text-lg font-bold shadow-xl transition-transform active:scale-95"
            >
              <Phone className="mr-2 h-6 w-6" />
              Call Now
            </Button>
            
            <Button 
              onClick={() => handleContact('whatsapp')}
              size="lg" 
              className="bg-cargo-green hover:bg-green-600 text-white px-8 py-7 text-lg font-bold shadow-xl transition-transform active:scale-95"
            >
              <MessageCircle className="mr-2 h-6 w-6" />
              WhatsApp Quote
            </Button>
          </div>

          <p className="mt-8 text-sm text-blue-200 font-medium">
            Available 24/7 for support across Dubai, Abu Dhabi, Sharjah & Ajman
          </p>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;