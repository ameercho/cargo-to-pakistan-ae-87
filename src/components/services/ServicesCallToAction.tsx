
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const ServicesCallToAction = () => {
  return (
    <section className="py-12 bg-cargo-green text-white">
      <div className="container-custom text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Ship Your Cargo?</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Contact us today to discuss your shipping needs and get a customized quote.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link to="/contact">
            <Button 
              className="bg-white text-cargo-green hover:bg-gray-100 tap-target" 
              size="lg"
            >
              Contact Us
            </Button>
          </Link>
          <Button 
            variant="outline" 
            className="bg-transparent border-white text-white hover:bg-white/10 tap-target" 
            size="lg"
          >
            Get a Quote
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesCallToAction;
