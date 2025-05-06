
import React from 'react';
import { ArrowRight } from "lucide-react";

interface ServiceFeaturesProps {
  title: string;
  features: string[];
}

const ServiceFeatures = ({ title, features }: ServiceFeaturesProps) => {
  return (
    <div className="bg-gray-50 p-6 rounded-lg mb-8">
      <h3 className="text-xl font-bold text-cargo-blue mb-4">{title}</h3>
      <ul className="space-y-3">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <div className="bg-cargo-lightGreen rounded-full p-1 mr-2 mt-1">
              <ArrowRight className="h-4 w-4 text-cargo-green" />
            </div>
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ServiceFeatures;
