
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Home, Clock, Package, MapPin, FileCheck, ShieldCheck } from "lucide-react";
import CallToAction from "@/components/home/CallToAction";

const AirFreight = () => {
  const benefits = [
    { title: "Professional Service", description: "Expert packing and moving services", icon: Clock },
    { title: "Door to Door", description: "Complete home relocation services", icon: Home },
    { title: "Careful Handling", description: "Special care for your belongings", icon: Clock },
    { title: "Security", description: "Enhanced safety measures for valuables", icon: ShieldCheck },
    { title: "Documentation Support", description: "Expert assistance with paperwork", icon: FileCheck },
  ];

  const handleCall = () => {
    window.location.href = "tel:+971504948135";
  };

  return (
    <div className="min-h-screen">
      {/* SEO Metadata */}
      <Helmet>
        <title>Moving Home Services from UAE to Pakistan | Complete Home Relocation</title>
        <meta name="description" content="Professional home moving services from UAE to Pakistan. Complete door-to-door home relocation solutions with careful handling of all your belongings." />
        <meta name="keywords" content="home moving, house relocation, UAE to Pakistan moving, home shifting, furniture moving" />
        <link rel="canonical" href="https://cargoconnect.pk/services/moving-home" />
      </Helmet>

      {/* Hero Section */}
      <section className="py-12 bg-cargo-green text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-white">Moving Home Services to Pakistan</h1>
            <p className="text-xl text-gray-100 mb-8">
              Professional home moving services for complete relocation from UAE to Pakistan
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

      {/* Main Content */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-cargo-blue mb-6">Professional Home Moving Services from UAE to Pakistan</h2>
              
              <div className="prose max-w-none">
                <p className="mb-4">
                  Our home moving services provide a complete relocation solution from UAE to Pakistan. 
                  We take care of packing, transportation, customs clearance, and delivery of all your 
                  household belongings to your new home in Pakistan.
                </p>
                
                <p className="mb-4">
                  We operate home moving services from all major UAE locations including Dubai, 
                  Abu Dhabi, and Sharjah, with connections to Pakistan's key cities including Karachi, 
                  Lahore, Islamabad, and beyond. Our comprehensive moving services are ideal for families, 
                  professionals, or anyone relocating to Pakistan.
                </p>
                
                <h3 className="text-xl font-semibold text-cargo-blue mt-8 mb-4">Why Choose Our Home Moving Services?</h3>
                
                <ul className="list-disc pl-6 mb-6 space-y-2">
                  <li>Professional packing of all household items</li>
                  <li>Custom wooden crating for fragile items</li>
                  <li>Specialized handling for electronics and valuables</li>
                  <li>Streamlined customs clearance procedures</li>
                  <li>Door-to-door delivery throughout Pakistan</li>
                  <li>Unpacking and set-up services available</li>
                </ul>
                
                <h3 className="text-xl font-semibold text-cargo-blue mt-8 mb-4">Home Moving Destinations in Pakistan</h3>
                
                <p className="mb-4">
                  Our home moving services deliver to all major cities in Pakistan with onward distribution to:
                </p>
                
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-8">
                  <Link to="/pakistan-cargo-to-karachi" className="bg-gray-50 p-3 rounded hover:bg-gray-100 transition-colors">
                    Karachi
                  </Link>
                  <Link to="/pakistan-cargo-to-lahore" className="bg-gray-50 p-3 rounded hover:bg-gray-100 transition-colors">
                    Lahore
                  </Link>
                  <Link to="/pakistan-cargo-to-islamabad" className="bg-gray-50 p-3 rounded hover:bg-gray-100 transition-colors">
                    Islamabad
                  </Link>
                  <Link to="/pakistan-cargo-to-peshawar" className="bg-gray-50 p-3 rounded hover:bg-gray-100 transition-colors">
                    Peshawar
                  </Link>
                  <div className="bg-gray-50 p-3 rounded">Faisalabad</div>
                  <div className="bg-gray-50 p-3 rounded">Multan</div>
                  <div className="bg-gray-50 p-3 rounded">Quetta</div>
                  <div className="bg-gray-50 p-3 rounded">Sialkot</div>
                  <div className="bg-gray-50 p-3 rounded">Sukkur</div>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-1">
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <h3 className="text-xl font-semibold text-cargo-blue mb-4">Key Benefits</h3>
                
                <div className="space-y-6">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start">
                      <div className="bg-cargo-lightBlue rounded-full p-2 mr-4">
                        <benefit.icon className="h-5 w-5 text-cargo-blue" />
                      </div>
                      <div>
                        <h4 className="font-medium">{benefit.title}</h4>
                        <p className="text-sm text-gray-600">{benefit.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-8">
                  <Button 
                    className="w-full bg-cargo-blue hover:bg-blue-800"
                    onClick={handleCall}
                  >
                    Call Us
                  </Button>
                </div>
              </div>

              <div className="mt-6 bg-cargo-lightGreen p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-cargo-green mb-4">Moving from UAE</h3>
                <p className="mb-4 text-gray-700">
                  We offer home moving services from all major UAE locations:
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-center">
                    <ArrowRight className="h-4 w-4 text-cargo-green mr-2" />
                    <Link to="/areas/dubai" className="hover:text-cargo-green">Dubai</Link>
                  </li>
                  <li className="flex items-center">
                    <ArrowRight className="h-4 w-4 text-cargo-green mr-2" />
                    <Link to="/areas/abu-dhabi" className="hover:text-cargo-green">Abu Dhabi</Link>
                  </li>
                  <li className="flex items-center">
                    <ArrowRight className="h-4 w-4 text-cargo-green mr-2" />
                    <Link to="/areas/sharjah" className="hover:text-cargo-green">Sharjah</Link>
                  </li>
                  <li className="flex items-center">
                    <ArrowRight className="h-4 w-4 text-cargo-green mr-2" />
                    <Link to="/areas/ajman" className="hover:text-cargo-green">Ajman</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-cargo-blue mb-3">Related Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore our other shipping services that complement our home moving offerings
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link to="/services/courier-service" className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-lg font-semibold mb-3">Courier Service</h3>
              <p className="text-gray-600 mb-4">Express courier solutions for small and urgent packages</p>
              <div className="flex items-center text-cargo-blue">
                Learn more <ArrowRight className="ml-2 h-4 w-4" />
              </div>
            </Link>
            
            <Link to="/services/packaging" className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-lg font-semibold mb-3">Packaging Services</h3>
              <p className="text-gray-600 mb-4">Professional packing solutions for secure transport</p>
              <div className="flex items-center text-cargo-blue">
                Learn more <ArrowRight className="ml-2 h-4 w-4" />
              </div>
            </Link>
            
            <Link to="/services/insurance" className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-lg font-semibold mb-3">Cargo Insurance</h3>
              <p className="text-gray-600 mb-4">Protect your valuable belongings during transit</p>
              <div className="flex items-center text-cargo-blue">
                Learn more <ArrowRight className="ml-2 h-4 w-4" />
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <CallToAction />
    </div>
  );
};

export default AirFreight;
