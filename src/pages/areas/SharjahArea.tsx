
import React, { useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, MapPin, Phone, Mail } from "lucide-react";
import CallToAction from "@/components/home/CallToAction";
import PageSEO from "@/components/SEO/PageSEO";

const SharjahArea = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const locations = [
    "Al Nahda", "Al Qasimia", "Al Majaz", "Al Khan", "Al Taawun",
    "Al Yarmook", "Al Ghuwair", "Abu Shagara", "Al Nabba", "Muwaileh"
  ];
  
  return (
    <div className="min-h-screen">
      <PageSEO
        title="Cargo to Pakistan from Sharjah | Fast Shipping Service"
        description="Professional cargo shipping from Sharjah to Pakistan with door-to-door delivery. Serving Al Nahda, Al Majaz, Al Khan & all Sharjah areas. Call +971504948135"
        keywords="cargo to pakistan sharjah, sharjah pakistan shipping, cargo service sharjah, pakistan cargo sharjah"
        canonical="https://cargotopakistan.ae/areas/sharjah"
      />

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-cargo-green to-cargo-blue text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/30 z-0"></div>
        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto">
            <div className="flex flex-col items-start space-y-6">
              <span className="bg-white/20 text-white px-4 py-1 rounded-full text-sm backdrop-blur-sm border border-white/20">
                Cargo Services to Pakistan
              </span>
              <h1 className="text-3xl md:text-5xl font-bold mb-4 text-white leading-tight">
                <strong>Cargo to Pakistan</strong> from Sharjah
              </h1>
              <p className="text-xl text-gray-100 mb-8 max-w-2xl">
                Reliable <strong>cargo shipping from Sharjah to Pakistan</strong> with door-to-door service
              </p>
              <Button 
                className="bg-cargo-orange hover:bg-orange-600 text-white shadow-lg hover:shadow-xl transform transition-all hover:-translate-y-0.5 tap-target" 
                size="lg"
              >
                Get a Quote
              </Button>
            </div>
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
                <p className="mb-4 text-lg">
                  We provide comprehensive <strong>cargo shipping solutions from Sharjah to Pakistan</strong> covering all major cities. Our services reach the entire Sharjah emirate, ensuring that no matter where you are located, we can collect your cargo and deliver it safely to Pakistan.
                </p>
                
                <p className="mb-4">
                  With years of experience in the logistics industry, our <strong>Sharjah cargo team</strong> understands the unique requirements of shipping to Pakistan. We offer personalized service to meet your specific cargo needs, whether you're sending personal effects or commercial goods from <strong>Al Nahda, Al Majaz, or Al Khan</strong>.
                </p>
                
                <h3 className="text-xl font-semibold text-cargo-blue mt-8 mb-4">Our Service Coverage in Sharjah</h3>
                
                <p className="mb-4">
                  We serve all areas in <strong>Sharjah</strong> including:
                </p>
                
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-8">
                  {locations.map((location, index) => (
                    <div key={index} className="bg-gray-50 p-3 rounded flex items-center">
                      <MapPin className="h-4 w-4 text-cargo-green mr-2" /> <strong>{location}</strong>
                    </div>
                  ))}
                </div>
                
                <h3 className="text-xl font-semibold text-cargo-blue mt-8 mb-4">Why Choose Our Sharjah Cargo Services?</h3>
                
                <ul className="list-disc pl-6 mb-6 space-y-2">
                  <li><strong>Convenient pickup</strong> from any location in Sharjah</li>
                  <li><strong>Reliable delivery</strong> to all major cities in Pakistan</li>
                  <li>Professional packaging and handling</li>
                  <li>Competitive rates with transparent pricing</li>
                  <li>Dedicated customer support</li>
                  <li>Regular shipping schedules</li>
                </ul>
                
                <h3 className="text-xl font-semibold text-cargo-blue mt-8 mb-4">Pakistan Destinations We Serve from Sharjah</h3>
                
                <p className="mb-4">
                  From Sharjah, we deliver to all major cities across Pakistan including:
                </p>
                
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-8">
                  <div className="bg-gray-50 p-3 rounded flex items-center">
                    <ArrowRight className="h-4 w-4 text-cargo-blue mr-2" /> <Link to="/pakistan-cargo-to-karachi" className="text-cargo-blue hover:underline"><strong>Karachi</strong></Link>
                  </div>
                  <div className="bg-gray-50 p-3 rounded flex items-center">
                    <ArrowRight className="h-4 w-4 text-cargo-blue mr-2" /> <Link to="/pakistan-cargo-to-lahore" className="text-cargo-blue hover:underline"><strong>Lahore</strong></Link>
                  </div>
                  <div className="bg-gray-50 p-3 rounded flex items-center">
                    <ArrowRight className="h-4 w-4 text-cargo-blue mr-2" /> <Link to="/pakistan-cargo-to-islamabad" className="text-cargo-blue hover:underline"><strong>Islamabad</strong></Link>
                  </div>
                  <div className="bg-gray-50 p-3 rounded flex items-center">
                    <ArrowRight className="h-4 w-4 text-cargo-blue mr-2" /> <Link to="/pakistan-cargo-to-peshawar" className="text-cargo-blue hover:underline"><strong>Peshawar</strong></Link>
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
                      <p className="text-gray-600">+971504948135</p>
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

      <CallToAction />
    </div>
  );
};

export default SharjahArea;
