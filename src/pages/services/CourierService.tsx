import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Clock, Truck, Package } from "lucide-react";
import ServiceCard from "@/components/ServiceCard";
import CallToAction from "@/components/home/CallToAction";

const CourierService = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const features = [
    {
      title: "Express Delivery",
      description: "Guaranteed delivery within shortest possible timeframe for urgent shipments.",
      icon: Clock,
      iconColor: "text-cargo-orange",
    },
    {
      title: "Door-to-Door",
      description: "Complete pickup and delivery service from your location to the destination.",
      icon: Truck,
      iconColor: "text-cargo-blue",
    },
    {
      title: "Secure Packaging",
      description: "Professional packaging to ensure your items remain safe and intact during transit.",
      icon: Package,
      iconColor: "text-cargo-green",
    },
  ];
  
  return (
    <div className="min-h-screen">
      {/* SEO Metadata */}
      <Helmet>
        <title>Courier Services | Fast & Reliable Delivery to Pakistan</title>
        <meta name="description" content="Express courier services from UAE to Pakistan. Door-to-door delivery with tracking and guaranteed delivery times." />
        <meta name="keywords" content="courier service, pakistan courier, uae to pakistan courier, express delivery" />
        <link rel="canonical" href="https://cargoconnect.pk/services/courier-service" />
      </Helmet>

      {/* Hero Section */}
      <section className="py-12 bg-cargo-green text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-white">Express Courier Services</h1>
            <p className="text-xl text-gray-100 mb-8">
              Fast, reliable courier solutions for your time-sensitive deliveries to Pakistan
            </p>
            <Button 
              className="bg-cargo-orange hover:bg-orange-600 text-white tap-target" 
              size="lg"
            >
              Request a Quote
            </Button>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-cargo-blue mb-6">Professional Courier Services</h2>
              
              <div className="prose max-w-none">
                <p className="mb-4">
                  Our courier service provides expedited shipping options for urgent and time-sensitive deliveries from UAE to Pakistan. When you need your items delivered quickly and securely, our express courier service is the ideal solution.
                </p>
                
                <p className="mb-4">
                  We understand that some shipments can't wait. That's why our courier service is designed to get your packages to their destination in Pakistan as quickly as possible, with real-time tracking and proof of delivery.
                </p>
                
                <h3 className="text-xl font-semibold text-cargo-blue mt-8 mb-4">Key Benefits of Our Courier Service</h3>
                
                <ul className="list-disc pl-6 mb-6 space-y-2">
                  <li>Fast delivery timelines for urgent shipments</li>
                  <li>Door-to-door pickup and delivery</li>
                  <li>Real-time tracking and notifications</li>
                  <li>Secure handling and transportation</li>
                  <li>Delivery confirmation and proof of delivery</li>
                  <li>Professional packaging services available</li>
                </ul>
                
                <h3 className="text-xl font-semibold text-cargo-blue mt-8 mb-4">We Deliver To All Major Cities in Pakistan</h3>
                
                <p className="mb-4">
                  Our courier service covers all major destinations in Pakistan including:
                </p>
                
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-8">
                  <div className="bg-gray-50 p-3 rounded flex items-center">
                    <ArrowRight className="h-4 w-4 text-cargo-green mr-2" /> Karachi
                  </div>
                  <div className="bg-gray-50 p-3 rounded flex items-center">
                    <ArrowRight className="h-4 w-4 text-cargo-green mr-2" /> Lahore
                  </div>
                  <div className="bg-gray-50 p-3 rounded flex items-center">
                    <ArrowRight className="h-4 w-4 text-cargo-green mr-2" /> Islamabad
                  </div>
                  <div className="bg-gray-50 p-3 rounded flex items-center">
                    <ArrowRight className="h-4 w-4 text-cargo-green mr-2" /> Peshawar
                  </div>
                  <div className="bg-gray-50 p-3 rounded flex items-center">
                    <ArrowRight className="h-4 w-4 text-cargo-green mr-2" /> Multan
                  </div>
                  <div className="bg-gray-50 p-3 rounded flex items-center">
                    <ArrowRight className="h-4 w-4 text-cargo-green mr-2" /> Faisalabad
                  </div>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-1">
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <h3 className="text-xl font-semibold text-cargo-blue mb-4">Request a Quote</h3>
                <p className="text-gray-600 mb-6">
                  Contact us today for competitive rates on our express courier services to Pakistan.
                </p>
                
                <form className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
                    <input type="text" id="name" className="w-full p-2 border border-gray-300 rounded" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <input type="email" id="email" className="w-full p-2 border border-gray-300 rounded" />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                    <input type="tel" id="phone" className="w-full p-2 border border-gray-300 rounded" />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                    <textarea id="message" rows={3} className="w-full p-2 border border-gray-300 rounded"></textarea>
                  </div>
                  <Button className="w-full bg-cargo-blue hover:bg-blue-800">
                    Submit Request
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-cargo-blue mb-3">Our Courier Service Features</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover the advantages of our premier courier service for your time-sensitive deliveries.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <ServiceCard
                key={index}
                title={feature.title}
                description={feature.description}
                icon={feature.icon}
                iconColor={feature.iconColor}
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

export default CourierService;
