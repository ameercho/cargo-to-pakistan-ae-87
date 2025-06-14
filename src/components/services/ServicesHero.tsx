
import { Button } from "@/components/ui/button";
import { PHONE_NUMBER } from "./utils";

const ServicesHero = () => {
  const handleCall = () => {
    window.location.href = `tel:${PHONE_NUMBER}`;
  };

  return (
    <section className="py-12 bg-cargo-green text-white">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-white">Our Cargo Services</h1>
          <p className="text-xl text-gray-100 mb-8">
            Comprehensive shipping solutions for your cargo to Pakistan
          </p>
          <Button 
            onClick={handleCall}
            className="bg-cargo-orange hover:bg-orange-600 text-white tap-target" 
            size="lg"
          >
            Call
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesHero;
