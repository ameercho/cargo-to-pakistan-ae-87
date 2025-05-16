import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, ShieldCheck, FileText, AlertCircle } from "lucide-react";
import ServiceCard from "@/components/ServiceCard";
import CallToAction from "@/components/home/CallToAction";

const Insurance = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const features = [
    {
      title: "Comprehensive Coverage",
      description: "Full protection against damage, loss, or theft during transportation.",
      icon: ShieldCheck,
      iconColor: "text-cargo-green",
    },
    {
      title: "Easy Claims Process",
      description: "Simple and straightforward process for filing and settling claims.",
      icon: FileText,
      iconColor: "text-cargo-blue",
    },
    {
      title: "Risk Assessment",
      description: "Professional evaluation of shipping risks to ensure proper coverage.",
      icon: AlertCircle,
      iconColor: "text-cargo-orange",
    },
  ];
  
  return (
    <div className="min-h-screen">
      {/* SEO Metadata */}
      <Helmet>
        <title>Cargo Insurance | Protect Your Shipments to Pakistan</title>
        <meta name="description" content="Comprehensive cargo insurance services for shipments from UAE to Pakistan. Protect your valuable items during transportation with our reliable coverage." />
        <meta name="keywords" content="cargo insurance, shipment protection, pakistan cargo insurance, shipping insurance" />
        <link rel="canonical" href="https://cargoconnect.pk/services/insurance" />
      </Helmet>

      {/* Hero Section */}
      <section className="py-12 bg-cargo-green text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-white">Cargo Insurance Services</h1>
            <p className="text-xl text-gray-100 mb-8">
              Protect your valuable shipments with comprehensive insurance coverage
            </p>
            <Button 
              className="bg-cargo-orange hover:bg-orange-600 text-white tap-target" 
              size="lg"
            >
              Get Protected Today
            </Button>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-cargo-blue mb-6">Comprehensive Cargo Insurance</h2>
              
              <div className="prose max-w-none">
                <p className="mb-4">
                  Our cargo insurance services provide comprehensive protection for your shipments from UAE to Pakistan. Despite our careful handling procedures, unforeseen events can occur during transit. With our insurance coverage, you can have peace of mind knowing your valuable goods are protected.
                </p>
                
                <p className="mb-4">
                  Whether you're sending personal belongings, commercial merchandise, or high-value items, our insurance options are designed to safeguard your investments against damage, loss, or theft during transportation.
                </p>
                
                <h3 className="text-xl font-semibold text-cargo-blue mt-8 mb-4">Insurance Coverage Options</h3>
                
                <ul className="list-disc pl-6 mb-6 space-y-2">
                  <li>All-Risk Coverage - Comprehensive protection against virtually all risks of physical loss or damage</li>
                  <li>Named Perils Coverage - Protection against specific risks listed in the policy</li>
                  <li>Total Loss Only - Coverage for complete loss of shipment</li>
                  <li>Custom Coverage - Tailored insurance solutions based on your specific needs</li>
                </ul>
                
                <h3 className="text-xl font-semibold text-cargo-blue mt-8 mb-4">Benefits of Our Cargo Insurance</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  <div className="bg-gray-50 p-4 rounded">
                    <div className="flex items-center mb-2">
                      <ShieldCheck className="h-5 w-5 text-cargo-green mr-2" />
                      <h4 className="font-medium">Financial Protection</h4>
                    </div>
                    <p className="text-sm text-gray-600">
                      Safeguard against financial losses due to damaged or lost cargo.
                    </p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded">
                    <div className="flex items-center mb-2">
                      <FileText className="h-5 w-5 text-cargo-blue mr-2" />
                      <h4 className="font-medium">Simple Claims Process</h4>
                    </div>
                    <p className="text-sm text-gray-600">
                      Straightforward procedure for filing and settling insurance claims.
                    </p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded">
                    <div className="flex items-center mb-2">
                      <AlertCircle className="h-5 w-5 text-cargo-orange mr-2" />
                      <h4 className="font-medium">Risk Management</h4>
                    </div>
                    <p className="text-sm text-gray-600">
                      Expert assessment of potential risks and appropriate coverage.
                    </p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded">
                    <div className="flex items-center mb-2">
                      <ArrowRight className="h-5 w-5 text-cargo-green mr-2" />
                      <h4 className="font-medium">Peace of Mind</h4>
                    </div>
                    <p className="text-sm text-gray-600">
                      Ship with confidence knowing your items are protected.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-1">
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <h3 className="text-xl font-semibold text-cargo-blue mb-4">Get Insurance Quote</h3>
                <p className="text-gray-600 mb-6">
                  Contact us today for a customized insurance quote for your shipment.
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
                    <label htmlFor="shipmentType" className="block text-sm font-medium text-gray-700 mb-1">Shipment Type</label>
                    <select id="shipmentType" className="w-full p-2 border border-gray-300 rounded">
                      <option>Personal Effects</option>
                      <option>Commercial Goods</option>
                      <option>Valuable Items</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="estimatedValue" className="block text-sm font-medium text-gray-700 mb-1">Estimated Value (AED)</label>
                    <input type="number" id="estimatedValue" className="w-full p-2 border border-gray-300 rounded" />
                  </div>
                  <Button className="w-full bg-cargo-blue hover:bg-blue-800">
                    Request Quote
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
            <h2 className="text-2xl font-bold text-cargo-blue mb-3">Our Insurance Features</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover the benefits of our comprehensive cargo insurance services.
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

export default Insurance;
