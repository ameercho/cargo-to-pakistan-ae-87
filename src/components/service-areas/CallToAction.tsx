
import React from 'react';
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const CallToAction = () => {
  return (
    <section className="py-12 bg-cargo-green text-white">
      <div className="container-custom text-center">
        <h2 className="text-3xl font-bold mb-4 text-white">Ready to Ship to Pakistan?</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Contact us today for a free quote and experience our reliable cargo services.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link to="/contact" className="w-auto">
            <Button className="bg-white text-cargo-green hover:bg-gray-100 tap-target w-full" size="lg">
              Get a Free Quote
            </Button>
          </Link>
          <Link to="/contact" className="w-auto">
            <Button variant="outline" className="bg-transparent border-white text-white hover:bg-white/10 tap-target w-full" size="lg">
              Contact Us
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
