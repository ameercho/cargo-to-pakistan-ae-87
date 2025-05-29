import { Button } from "@/components/ui/button";
import QuoteForm from "@/components/QuoteForm";
import { MessageCircle, Phone } from "lucide-react";
import { trackEvent } from "@/services/analytics";
const HeroSection = () => {
  const handleCall = () => {
    trackEvent('Contact', 'Call', 'Hero Section');
    window.location.href = "tel:+971504948135";
  };
  const handleWhatsApp = () => {
    trackEvent('Contact', 'WhatsApp', 'Hero Section');
    window.open("https://wa.me/971504948135?text=Hello,%20I'm%20interested%20in%20your%20cargo%20services.", "_blank");
  };
  return <section className="pt-24 pb-12 md:pt-32 md:pb-16 bg-gradient-to-br from-cargo-blue to-cargo-green text-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 max-w-lg">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight text-white">Cargo Services to Pakistan</h1>
            <p className="text-lg text-gray-100">
              Fast, secure, and affordable shipping solutions for personal and business cargo.
            </p>
            
            {/* Call and WhatsApp buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <Button onClick={handleCall} className="bg-white text-cargo-green hover:bg-gray-100 tap-target flex items-center gap-2" aria-label="Call our customer service">
                <Phone className="h-4 w-4" /> Call Us
              </Button>
              <Button onClick={handleWhatsApp} className="bg-green-600 hover:bg-green-700 text-white tap-target flex items-center gap-2" aria-label="Contact us on WhatsApp">
                <MessageCircle className="h-4 w-4" /> WhatsApp
              </Button>
            </div>
            
            <div className="pt-4">
              <div className="flex flex-wrap gap-3">
                <div className="bg-white/10 py-2 px-4 rounded-full text-sm">Moving Home</div>
                <div className="bg-white/10 py-2 px-4 rounded-full text-sm">Sea Freight</div>
                <div className="bg-white/10 py-2 px-4 rounded-full text-sm">Full Container</div>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-xl p-1 md:p-2 ml-0 md:ml-12">
            <QuoteForm />
          </div>
        </div>
      </div>
    </section>;
};
export default HeroSection;