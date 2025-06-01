
import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, MapPin, Phone, Mail } from "lucide-react";
import CallToAction from "@/components/home/CallToAction";

const SharjahArea = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const locations = [
    "Al Nahda", "Al Qasimia", "Al Majaz", "Al Khan", "Al Taawun",
    "Al Yarmook", "Al Ghuwair", "Abu Shagara", "Al Nabba", "Muwaileh"
  ];
  
  return (
    <div className="min-h-screen">
      {/* SEO Metadata */}
      <Helmet>
        <title>Cargo Services in Sharjah | Shipping to Pakistan</title>
        <meta name="description" content="Professional cargo services from Sharjah to Pakistan. Serving all areas including Al Nahda, Al Majaz, Al Khan and more." />
        <meta name="keywords" content="sharjah cargo, pakistan shipping, sharjah to pakistan, cargo services sharjah" />
        <link rel="canonical" href="https://cargotopakistan.ae/areas/sharjah" />
      </Helmet>

      {/* Hero Section - Updated with hero-gradient class */}
      <section className="py-12 hero-gradient">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-white">Cargo Services in Sharjah</h1>
            <p className="text-xl text-gray-100 mb-8">
              Reliable cargo shipping from Sharjah to Pakistan with door-to-door service
            </p>
            <Button 
              className="bg-cargo-orange hover:bg-orange-600 text-white tap-target" 
              size="lg"
            >
              Get a Quote
            </Button>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-cargo-blue mb-6">Sharjah to Pakistan Cargo Services</h2>
              
              <div className="prose max-w-none">
                <p className="mb-4">
                  We provide comprehensive cargo shipping solutions from Sharjah to all major cities in Pakistan. Our services cover the entire Sharjah emirate, ensuring that no matter where you are located, we can collect your cargo and deliver it safely to Pakistan.
                </p>
                
                <p className="mb-4">
                  With years of experience in the logistics industry, our Sharjah team understands the unique requirements of shipping to Pakistan. We offer personalized service to meet your specific cargo needs, whether you're sending personal effects or commercial goods.
                </p>
                
                <h3 className="text-xl font-semibold text-cargo-blue mt-8 mb-4">Our Service Coverage in Sharjah</h3>
                
                <p className="mb-4">
                  We serve all areas in Sharjah including:
                </p>
                
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-8">
                  {locations.map((location, index) => (
                    <div key={index} className="bg-gray-50 p-3 rounded flex items-center">
                      <MapPin className="h-4 w-4 text-cargo-green mr-2" /> {location}
                    </div>
                  ))}
                </div>
                
                <h3 className="text-xl font-semibold text-cargo-blue mt-8 mb-4">Why Choose Our Sharjah Cargo Services?</h3>
                
                <ul className="list-disc pl-6 mb-6 space-y-2">
                  <li>Convenient pickup from any location in Sharjah</li>
                  <li>Reliable delivery to all major cities in Pakistan</li>
                  <li>Professional packaging and handling</li>
                  <li>Competitive rates with transparent pricing</li>
                  <li>Dedicated customer support</li>
                  <li>Regular shipping schedules</li>
                </ul>
                
                <h3 className="text-xl font-semibold text-cargo-blue mt-8 mb-4">Pakistan Destinations We Serve</h3>
                
                <p className="mb-4">
                  From Sharjah, we deliver to all major cities across Pakistan including:
                </p>
                
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-8">
                  <div className="bg-gray-50 p-3 rounded flex items-center">
                    <ArrowRight className="h-4 w-4 text-cargo-blue mr-2" /> Karachi
                  </div>
                  <div className="bg-gray-50 p-3 rounded flex items-center">
                    <ArrowRight className="h-4 w-4 text-cargo-blue mr-2" /> Lahore
                  </div>
                  <div className="bg-gray-50 p-3 rounded flex items-center">
                    <ArrowRight className="h-4 w-4 text-cargo-blue mr-2" /> Islamabad
                  </div>
                  <div className="bg-gray-50 p-3 rounded flex items-center">
                    <ArrowRight className="h-4 w-4 text-cargo-blue mr-2" /> Peshawar
                  </div>
                  <div className="bg-gray-50 p-3 rounded flex items-center">
                    <ArrowRight className="h-4 w-4 text-cargo-blue mr-2" /> Multan
                  </div>
                  <div className="bg-gray-50 p-3 rounded flex items-center">
                    <ArrowRight className="h-4 w-4 text-cargo-blue mr-2" /> Faisalabad
                  </div>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-1">
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <h3 className="text-xl font-semibold text-cargo-blue mb-4">Contact Us in Sharjah</h3>
                
                <div className="space-y-4 mb-6">
                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 text-cargo-green mr-3 mt-1" />
                    <div>
                      <h4 className="font-medium">Our Sharjah Office</h4>
                      <p className="text-gray-600 text-sm">
                        King Faisal Street, Sharjah<br />
                        United Arab Emirates
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <Phone className="h-5 w-5 text-cargo-green mr-3" />
                    <div>
                      <h4 className="font-medium">Call Us</h4>
                      <p className="text-gray-600">+971 6 123 4567</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <Mail className="h-5 w-5 text-cargo-green mr-3" />
                    <div>
                      <h4 className="font-medium">Email Us</h4>
                      <p className="text-gray-600">sharjah@cargotopakistan.ae</p>
                    </div>
                  </div>
                </div>
                
                <div className="border-t border-gray-200 pt-6">
                  <h4 className="font-medium mb-4">Request a Pickup</h4>
                  <form className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
                      <input type="text" id="name" className="w-full p-2 border border-gray-300 rounded" />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                      <input type="tel" id="phone" className="w-full p-2 border border-gray-300 rounded" />
                    </div>
                    <div>
                      <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">Pickup Location</label>
                      <input type="text" id="location" className="w-full p-2 border border-gray-300 rounded" />
                    </div>
                    <Button className="w-full bg-cargo-blue hover:bg-blue-800">
                      Schedule Pickup
                    </Button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <CallToAction />
    </div>
  );
};

export default SharjahArea;
