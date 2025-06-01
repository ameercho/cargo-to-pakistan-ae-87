
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Package, ShieldCheck, Box, Scissors, Tag, Clipboard } from "lucide-react";
import CallToAction from "@/components/home/CallToAction";

const Packaging = () => {
  const services = [
    { 
      title: "Standard Packaging", 
      description: "Basic packaging suitable for non-fragile items using quality cartons and protective materials." 
    },
    { 
      title: "Fragile Item Packaging", 
      description: "Specialized packaging with extra cushioning and protection for delicate or breakable items." 
    },
    { 
      title: "Furniture Packaging", 
      description: "Custom crating and wrapping solutions for furniture and household goods." 
    },
    { 
      title: "Electronics Packaging", 
      description: "Anti-static packaging materials and moisture protection for electronic devices." 
    },
    { 
      title: "Commercial Goods", 
      description: "Bulk packaging solutions for commercial and industrial products with proper labeling." 
    }
  ];

  const benefits = [
    { title: "Damage Prevention", description: "Superior protection against transit damage", icon: ShieldCheck },
    { title: "Custom Solutions", description: "Tailored packaging for any item type", icon: Box },
    { title: "Quality Materials", description: "Durable materials for maximum protection", icon: Package },
    { title: "Professional Handling", description: "Experienced staff for proper packing", icon: Scissors },
    { title: "Proper Labeling", description: "Clear and compliant shipping labels", icon: Tag },
  ];

  return (
    <div className="min-h-screen">
      {/* SEO Metadata */}
      <Helmet>
        <title>Professional Packaging Services for UAE to Pakistan Cargo | Secure Shipping</title>
        <meta name="description" content="Expert packaging solutions for all types of cargo shipping from UAE to Pakistan. Custom packing services to ensure your items arrive safely and securely." />
        <meta name="keywords" content="cargo packaging, shipping packing services, fragile item packaging, UAE to Pakistan, secure shipping" />
        <link rel="canonical" href="https://cargotopakistan.ae/services/packaging" />
      </Helmet>

      {/* Hero Section */}
      <section className="py-12 bg-cargo-green text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-white">Professional Packaging Services</h1>
            <p className="text-xl text-gray-100 mb-8">
              Expert packing solutions to ensure your items are protected during transit from UAE to Pakistan
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
              <h2 className="text-2xl font-bold text-cargo-blue mb-6">Comprehensive Packaging Solutions</h2>
              
              <div className="prose max-w-none">
                <p className="mb-4">
                  Our professional packaging services ensure that your shipments to Pakistan are properly protected 
                  throughout their journey. We use high-quality materials and proven techniques to safeguard your 
                  items against damage during handling, transportation, and storage.
                </p>
                
                <p className="mb-4">
                  Whether you're shipping household goods, delicate personal items, commercial merchandise, or 
                  industrial equipment, our packaging experts will provide the right solution for your specific needs. 
                  Our comprehensive packaging service includes material selection, custom boxing, protective wrapping, 
                  and proper labeling to ensure safe delivery.
                </p>
                
                <h3 className="text-xl font-semibold text-cargo-blue mt-8 mb-4">Our Packaging Services</h3>
                
                <div className="space-y-4 mb-8">
                  {services.map((service, index) => (
                    <div key={index} className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-medium text-cargo-blue">{service.title}</h4>
                      <p className="text-gray-600">{service.description}</p>
                    </div>
                  ))}
                </div>
                
                <h3 className="text-xl font-semibold text-cargo-blue mt-8 mb-4">The Packaging Process</h3>
                
                <ol className="list-decimal pl-6 mb-6 space-y-2">
                  <li>Assessment of items to determine packaging requirements</li>
                  <li>Selection of appropriate packaging materials</li>
                  <li>Professional packing by experienced staff</li>
                  <li>Application of cushioning and protective barriers</li>
                  <li>Secure sealing of packages to prevent damage</li>
                  <li>Clear labeling with handling instructions</li>
                  <li>Documentation and inventory management</li>
                </ol>
                
                <h3 className="text-xl font-semibold text-cargo-blue mt-8 mb-4">Materials We Use</h3>
                
                <ul className="list-disc pl-6 mb-6 space-y-2">
                  <li>Double-wall cardboard boxes in various sizes</li>
                  <li>Bubble wrap and foam padding for fragile items</li>
                  <li>Custom wooden crating for valuable or oversized items</li>
                  <li>Anti-static materials for electronic devices</li>
                  <li>Moisture barriers for climate protection</li>
                  <li>Special furniture blankets and protective wrapping</li>
                  <li>Industrial-strength packing tape and strapping</li>
                </ul>
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
                <h3 className="text-xl font-semibold text-cargo-green mb-4">Packaging Recommendation</h3>
                <p className="mb-4 text-gray-700">
                  Not sure what packaging you need? Schedule a free consultation with our packaging experts:
                </p>
                <div className="flex items-center justify-center">
                  <Button variant="outline" className="border-cargo-green text-cargo-green hover:bg-cargo-lightGreen">
                    <Clipboard className="h-4 w-4 mr-2" /> Schedule Consultation
                  </Button>
                </div>
              </div>
              
              <div className="mt-6 bg-cargo-lightBlue p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-cargo-blue mb-4">Destination Protection</h3>
                <p className="mb-4 text-gray-700">
                  Our packaging ensures your items arrive safely at any Pakistan destination:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <ArrowRight className="h-4 w-4 text-cargo-blue mr-2" />
                    <Link to="/pakistan-cargo-to-karachi" className="hover:text-cargo-blue">Karachi</Link>
                  </li>
                  <li className="flex items-center">
                    <ArrowRight className="h-4 w-4 text-cargo-blue mr-2" />
                    <Link to="/pakistan-cargo-to-lahore" className="hover:text-cargo-blue">Lahore</Link>
                  </li>
                  <li className="flex items-center">
                    <ArrowRight className="h-4 w-4 text-cargo-blue mr-2" />
                    <Link to="/pakistan-cargo-to-islamabad" className="hover:text-cargo-blue">Islamabad</Link>
                  </li>
                  <li className="flex items-center">
                    <ArrowRight className="h-4 w-4 text-cargo-blue mr-2" />
                    <Link to="/pakistan-cargo-to-peshawar" className="hover:text-cargo-blue">Peshawar</Link>
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
              Explore our other services that complement our professional packaging
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link to="/services/sea-freight" className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-lg font-semibold mb-3">Sea Freight</h3>
              <p className="text-gray-600 mb-4">Cost-effective shipping for your properly packed items</p>
              <div className="flex items-center text-cargo-blue">
                Learn more <ArrowRight className="ml-2 h-4 w-4" />
              </div>
            </Link>
            
            <Link to="/services/air-freight" className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-lg font-semibold mb-3">Air Freight</h3>
              <p className="text-gray-600 mb-4">Fast delivery of your professionally packed shipments</p>
              <div className="flex items-center text-cargo-blue">
                Learn more <ArrowRight className="ml-2 h-4 w-4" />
              </div>
            </Link>
            
            <Link to="/services/insurance" className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-lg font-semibold mb-3">Cargo Insurance</h3>
              <p className="text-gray-600 mb-4">Additional protection for your valuable packaged items</p>
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

export default Packaging;
