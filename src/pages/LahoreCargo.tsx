
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, MapPin, Plane, Ship, Truck, Package } from "lucide-react";
import ServiceCard from "@/components/ServiceCard";
import CallToAction from "@/components/home/CallToAction";

const LahoreCargo = () => {
  const services = [
    {
      title: "Sea Freight",
      description: "Cost-effective ocean shipping solutions for larger cargo shipments to Lahore.",
      icon: Ship,
      iconColor: "text-cargo-green",
    },
    {
      title: "Full Container",
      description: "Efficient ground transportation services for your cargo within Lahore.",
      icon: Truck,
      iconColor: "text-cargo-orange",
    },
    {
      title: "Air Freight",
      description: "Fast and reliable air cargo services for time-sensitive shipments to Lahore.",
      icon: Plane,
      iconColor: "text-cargo-blue",
    },
  ];
  
  return (
    <div className="min-h-screen">
      {/* SEO Metadata */}
      <Helmet>
        <title>Cargo Services to Lahore | Fast & Reliable Shipping</title>
        <meta name="description" content="Professional cargo shipping services from UAE to Lahore, Pakistan. Door-to-door delivery with secure handling and tracking." />
        <meta name="keywords" content="lahore cargo, pakistan cargo, uae to lahore shipping, door to door lahore" />
        <link rel="canonical" href="https://cargoconnect.pk/lahore-cargo" />
      </Helmet>

      {/* Hero Section */}
      <section className="py-12 bg-cargo-green text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-white">Cargo Services to Lahore</h1>
            <p className="text-xl text-gray-100 mb-8">
              Fast, reliable and secure cargo shipping services from UAE to Lahore, Pakistan
            </p>
            <Button 
              className="bg-cargo-orange hover:bg-orange-600 text-white tap-target" 
              size="lg"
            >
              Get a Free Quote
            </Button>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-cargo-blue mb-6">Lahore Cargo Services from UAE</h2>
              
              <div className="prose max-w-none">
                <p className="mb-4">
                  We provide comprehensive cargo solutions from UAE to Lahore, Pakistan's cultural capital. Our services are designed to meet all your shipping needs with reliability and efficiency.
                </p>
                
                <p className="mb-4">
                  Whether you're sending personal belongings, commercial goods, or specialized items, our experienced team ensures your cargo reaches Lahore safely and on schedule.
                </p>
                
                <h3 className="text-xl font-semibold text-cargo-blue mt-8 mb-4">Why Choose Our Lahore Cargo Services?</h3>
                
                <ul className="list-disc pl-6 mb-6 space-y-2">
                  <li>Door-to-door delivery throughout Lahore</li>
                  <li>Secure packaging and handling</li>
                  <li>Real-time cargo tracking</li>
                  <li>Customs clearance assistance</li>
                  <li>Competitive rates with no hidden fees</li>
                  <li>Experienced staff familiar with Lahore logistics</li>
                </ul>
                
                <h3 className="text-xl font-semibold text-cargo-blue mt-8 mb-4">Lahore Cargo Destinations</h3>
                
                <p className="mb-4">
                  We deliver to all areas in Lahore including:
                </p>
                
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-8">
                  <div className="bg-gray-50 p-3 rounded flex items-center">
                    <MapPin className="h-4 w-4 text-cargo-green mr-2" /> Gulberg
                  </div>
                  <div className="bg-gray-50 p-3 rounded flex items-center">
                    <MapPin className="h-4 w-4 text-cargo-green mr-2" /> Defence
                  </div>
                  <div className="bg-gray-50 p-3 rounded flex items-center">
                    <MapPin className="h-4 w-4 text-cargo-green mr-2" /> Johar Town
                  </div>
                  <div className="bg-gray-50 p-3 rounded flex items-center">
                    <MapPin className="h-4 w-4 text-cargo-green mr-2" /> Model Town
                  </div>
                  <div className="bg-gray-50 p-3 rounded flex items-center">
                    <MapPin className="h-4 w-4 text-cargo-green mr-2" /> Cantt
                  </div>
                  <div className="bg-gray-50 p-3 rounded flex items-center">
                    <MapPin className="h-4 w-4 text-cargo-green mr-2" /> Bahria Town
                  </div>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-1">
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <h3 className="text-xl font-semibold text-cargo-blue mb-4">Our Shipping Options</h3>
                
                <div className="space-y-6">
                  {services.map((service, index) => (
                    <div key={index} className="flex items-start">
                      <div className={`rounded-full p-2 mr-4 ${service.iconColor.replace('text', 'bg')}/10`}>
                        <service.icon className={`h-5 w-5 ${service.iconColor}`} />
                      </div>
                      <div>
                        <h4 className="font-medium">{service.title}</h4>
                        <p className="text-sm text-gray-600">{service.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-8">
                  <Button className="w-full bg-cargo-blue hover:bg-blue-800">
                    Request Quote
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-cargo-blue mb-3">Our Lahore Shipping Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Choose the shipping method that best suits your cargo requirements for delivery to Lahore.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
                icon={service.icon}
                iconColor={service.iconColor}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <CallToAction />
    </div>
  );
};

export default LahoreCargo;
