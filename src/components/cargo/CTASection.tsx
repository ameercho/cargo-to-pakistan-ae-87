
import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface CTASectionProps {
  title: string;
  description: string;
}

const CTASection = ({ title, description }: CTASectionProps) => {
  return (
    <section className="py-12 bg-cargo-green text-white">
      <div className="container-custom text-center">
        <h2 className="text-3xl font-bold mb-4 text-white">{title}</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          {description}
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Button 
            className="bg-white text-cargo-green hover:bg-gray-100 tap-target" 
            size="lg"
          >
            Get a Free Quote
          </Button>
          <Link to="/contact">
            <Button 
              variant="outline" 
              className="bg-transparent border-white text-white hover:bg-white/10 tap-target" 
              size="lg"
            >
              Contact Us
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
