
import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Ship, Anchor, Package, Clock, ShieldCheck, FileCheck } from "lucide-react";
import CallToAction from "@/components/home/CallToAction";

const SeaFreight = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const benefits = [
    { title: "Cost-Effective", description: "Ideal for large shipments at budget-friendly rates", icon: Anchor },
    { title: "Large Capacity", description: "Perfect for bulky items and high-volume cargo", icon: Package },
    { title: "Reliable Schedule", description: "Consistent and dependable departure schedules", icon: Clock },
    { title: "Safe Transport", description: "Comprehensive security and handling procedures", icon: ShieldCheck },
    { title: "Documentation Support", description: "Expert assistance with shipping paperwork", icon: FileCheck },
  ];

  return (
    <div className="min-h-screen">
      {/* SEO Metadata */}
      <Helmet>
        <title>Sea Freight Services from UAE to Pakistan | Cost-Effective Shipping</title>
        <meta name="description" content="Professional sea freight services from UAE to Pakistan with cost-effective rates for large cargo shipments. Reliable and secure ocean shipping solutions." />
        <meta name="keywords" content="sea freight, ocean shipping, UAE to Pakistan cargo, cost-effective shipping, bulk cargo" />
        <link rel="canonical" href="https://cargoconnect.pk/services/sea-freight" />
      </Helmet>

      {/* Hero Section - Updated with hero-gradient class */}
      <section className="py-12 hero-gradient">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-white">Sea Freight Services to Pakistan</h1>
            <p className="text-xl text-gray-100 mb-8">
              Cost-effective ocean shipping solutions for larger cargo shipments from UAE to Pakistan
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
              <h2 className="text-2xl font-bold text-cargo-blue mb-6">Reliable Sea Freight Services from UAE to Pakistan</h2>
              
              <div className="prose max-w-none">
                <p className="mb-4">
                  Our sea freight services offer a cost-effective solution for shipping larger cargo volumes from the UAE to Pakistan. 
                  Whether you're moving household goods, commercial merchandise, or industrial equipment, our ocean shipping options 
                  provide reliable and economical transportation.
                </p>
                
                <p className="mb-4">
                  We handle shipments from all major ports in the UAE including Dubai's Jebel Ali Port, Abu Dhabi, and Sharjah, 
                  delivering to Pakistan's key ports in Karachi, Port Qasim, and Gwadar. Our comprehensive sea freight services 
                  include full container loads (FCL) and less than container loads (LCL) to accommodate various cargo sizes.
                </p>
                
                <h3 className="text-xl font-semibold text-cargo-blue mt-8 mb-4">Our Sea Freight Expertise</h3>
                
                <ul className="list-disc pl-6 mb-6 space-y-2">
                  <li>Full Container Load (FCL) shipments for exclusive use of an entire container</li>
                  <li>Less than Container Load (LCL) options for smaller cargo volumes</li>
                  <li>Specialized handling for oversized and heavy cargo</li>
                  <li>Accurate documentation and customs clearance support</li>
                  <li>Container stuffing and de-stuffing services</li>
                  <li>Door-to-door delivery options throughout Pakistan</li>
                </ul>
                
                <h3 className="text-xl font-semibold text-cargo-blue mt-8 mb-4">Destinations Throughout Pakistan</h3>
                
                <p className="mb-4">
                  Our sea freight services extend beyond port cities to inland destinations including:
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
                  <div className="bg-gray-50 p-3 rounded">Gujranwala</div>
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
                  <Button className="w-full bg-cargo-blue hover:bg-blue-800">
                    Request Quote
                  </Button>
                </div>
              </div>

              <div className="mt-6 bg-cargo-lightGreen p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-cargo-green mb-4">Shipping from UAE</h3>
                <p className="mb-4 text-gray-700">
                  We offer sea freight services from all major UAE locations:
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
              Explore our other shipping services that complement our sea freight offerings
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link to="/services/full-container" className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-lg font-semibold mb-3">Full Container Service</h3>
              <p className="text-gray-600 mb-4">Dedicated container shipping for your large cargo needs</p>
              <div className="flex items-center text-cargo-blue">
                Learn more <ArrowRight className="ml-2 h-4 w-4" />
              </div>
            </Link>
            
            <Link to="/services/packaging" className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-lg font-semibold mb-3">Packaging Services</h3>
              <p className="text-gray-600 mb-4">Professional packing solutions for secure ocean transport</p>
              <div className="flex items-center text-cargo-blue">
                Learn more <ArrowRight className="ml-2 h-4 w-4" />
              </div>
            </Link>
            
            <Link to="/services/insurance" className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-lg font-semibold mb-3">Cargo Insurance</h3>
              <p className="text-gray-600 mb-4">Protect your valuable shipments during ocean transit</p>
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

export default SeaFreight;
