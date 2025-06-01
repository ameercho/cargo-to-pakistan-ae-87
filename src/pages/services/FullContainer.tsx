import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Truck, Package, ShieldCheck, CheckSquare, FileCheck, Warehouse } from "lucide-react";
import CallToAction from "@/components/home/CallToAction";

const FullContainer = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const benefits = [
    { title: "Exclusive Use", description: "Your goods are the only cargo in the container", icon: CheckSquare },
    { title: "Enhanced Security", description: "Reduced handling means lower risk of damage", icon: ShieldCheck },
    { title: "Fixed Pricing", description: "Predictable costs for budget planning", icon: Package },
    { title: "Flexibility", description: "Various container sizes to match your needs", icon: Truck },
    { title: "Direct Delivery", description: "Door-to-door service throughout Pakistan", icon: Warehouse },
  ];

  const containerTypes = [
    { name: "20ft Standard", capacity: "33.2 cubic meters", weight: "Up to 28,200 kg" },
    { name: "40ft Standard", capacity: "67.7 cubic meters", weight: "Up to 28,800 kg" },
    { name: "40ft High Cube", capacity: "76.4 cubic meters", weight: "Up to 28,500 kg" },
    { name: "Refrigerated", capacity: "Varies by size", weight: "Temperature-controlled cargo" },
  ];

  return (
    <div className="min-h-screen">
      {/* SEO Metadata */}
      <Helmet>
        <title>Full Container Load Services from UAE to Pakistan | FCL Shipping</title>
        <meta name="description" content="Dedicated full container load services from UAE to Pakistan. Secure and efficient FCL shipping solutions with door-to-door delivery." />
        <meta name="keywords" content="full container load, FCL shipping, UAE to Pakistan, container cargo, sea freight, dedicated container" />
        <link rel="canonical" href="https://cargotopakistan.ae/services/full-container" />
      </Helmet>

      {/* Hero Section */}
      <section className="py-12 bg-cargo-green text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-white">Full Container Load (FCL) Services</h1>
            <p className="text-xl text-gray-100 mb-8">
              Dedicated container shipping solutions from UAE to Pakistan with enhanced security and fixed pricing
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
              <h2 className="text-2xl font-bold text-cargo-blue mb-6">Dedicated Container Shipping from UAE to Pakistan</h2>
              
              <div className="prose max-w-none">
                <p className="mb-4">
                  Our Full Container Load (FCL) services provide you with exclusive use of an entire shipping container 
                  for your cargo from the UAE to Pakistan. This service is ideal for larger shipments, valuable goods, 
                  or when you require enhanced security and minimal handling of your cargo.
                </p>
                
                <p className="mb-4">
                  With FCL shipping, your goods are loaded at origin and remain untouched until they reach their destination, 
                  significantly reducing the risk of damage or loss. Our FCL service includes container delivery to your 
                  loading point in the UAE, transportation to Pakistan, and delivery to your specified destination address.
                </p>
                
                <h3 className="text-xl font-semibold text-cargo-blue mt-8 mb-4">Container Types Available</h3>
                
                <div className="overflow-x-auto">
                  <table className="min-w-full bg-white border border-gray-200 mb-6">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="py-2 px-4 border-b text-left">Container Type</th>
                        <th className="py-2 px-4 border-b text-left">Capacity</th>
                        <th className="py-2 px-4 border-b text-left">Weight Limit</th>
                      </tr>
                    </thead>
                    <tbody>
                      {containerTypes.map((type, index) => (
                        <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                          <td className="py-2 px-4 border-b">{type.name}</td>
                          <td className="py-2 px-4 border-b">{type.capacity}</td>
                          <td className="py-2 px-4 border-b">{type.weight}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                
                <h3 className="text-xl font-semibold text-cargo-blue mt-8 mb-4">FCL Service Process</h3>
                
                <ol className="list-decimal pl-6 mb-6 space-y-2">
                  <li>Container pickup from our depot in the UAE</li>
                  <li>Delivery to your loading location for packing</li>
                  <li>Transportation to port and loading onto vessel</li>
                  <li>Ocean transit to Pakistan port (Karachi or Port Qasim)</li>
                  <li>Customs clearance and port handling</li>
                  <li>Inland transportation to final destination</li>
                  <li>Delivery and unloading at destination address</li>
                </ol>
                
                <h3 className="text-xl font-semibold text-cargo-blue mt-8 mb-4">Key Destinations in Pakistan</h3>
                
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
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-1">
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <h3 className="text-xl font-semibold text-cargo-blue mb-4">FCL Benefits</h3>
                
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
                  We offer container services from all major UAE locations:
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
              Explore our other shipping services that complement our full container offerings
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link to="/services/sea-freight" className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-lg font-semibold mb-3">Sea Freight</h3>
              <p className="text-gray-600 mb-4">Cost-effective ocean shipping for all cargo sizes</p>
              <div className="flex items-center text-cargo-blue">
                Learn more <ArrowRight className="ml-2 h-4 w-4" />
              </div>
            </Link>
            
            <Link to="/services/packaging" className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-lg font-semibold mb-3">Packaging Services</h3>
              <p className="text-gray-600 mb-4">Professional packing solutions for container loading</p>
              <div className="flex items-center text-cargo-blue">
                Learn more <ArrowRight className="ml-2 h-4 w-4" />
              </div>
            </Link>
            
            <Link to="/services/insurance" className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-lg font-semibold mb-3">Cargo Insurance</h3>
              <p className="text-gray-600 mb-4">Protect your container shipments against loss or damage</p>
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

export default FullContainer;
