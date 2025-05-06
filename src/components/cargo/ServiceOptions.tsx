
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, Plane, Ship } from "lucide-react";

interface ServiceOptionProps {
  title: string;
  description: string;
  options: {
    air: string[];
    sea: string[];
  };
}

const ServiceOptions = ({ title, description, options }: ServiceOptionProps) => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="section-title">{title}</h2>
          <p className="section-description">
            {description}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-md overflow-hidden card-hover">
            <div className="p-6">
              <div className="flex items-center mb-6">
                <div className="bg-cargo-lightBlue rounded-full p-3 mr-4">
                  <Plane className="h-6 w-6 text-cargo-blue" />
                </div>
                <h3 className="text-xl font-semibold">
                  Air Freight
                </h3>
              </div>
              
              <ul className="space-y-3 mb-6">
                {options.air.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <div className="bg-cargo-lightBlue rounded-full p-1 mr-2 mt-1">
                      <ArrowRight className="h-4 w-4 text-cargo-blue" />
                    </div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              
              <Button className="bg-cargo-blue hover:bg-blue-800 w-full tap-target">
                Get Air Freight Quote
              </Button>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md overflow-hidden card-hover">
            <div className="p-6">
              <div className="flex items-center mb-6">
                <div className="bg-cargo-lightGreen rounded-full p-3 mr-4">
                  <Ship className="h-6 w-6 text-cargo-green" />
                </div>
                <h3 className="text-xl font-semibold">
                  Sea Freight
                </h3>
              </div>
              
              <ul className="space-y-3 mb-6">
                {options.sea.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <div className="bg-cargo-lightGreen rounded-full p-1 mr-2 mt-1">
                      <ArrowRight className="h-4 w-4 text-cargo-green" />
                    </div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              
              <Button className="bg-cargo-green hover:bg-[#176a3e] w-full tap-target">
                Get Sea Freight Quote
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceOptions;
