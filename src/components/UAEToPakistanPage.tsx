
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, MapPin, Plane, Ship, Truck, Package, Phone, MessageCircle, Calendar, FileCheck } from "lucide-react";
import FloatingButton from "@/components/FloatingButton";

interface UAELocationInfo {
  city: string;
  description: string;
  heroImage?: string;
}

interface UAEToPakistanPageProps {
  location: UAELocationInfo;
}

const UAEToPakistanPage: React.FC<UAEToPakistanPageProps> = ({ location }) => {
  const handleCall = () => {
    window.location.href = "tel:+971504948135";
  };

  const handleWhatsApp = () => {
    window.open(`https://wa.me/971504948135?text=Hello,%20I'm%20interested%20in%20your%20cargo%20services%20from%20${location.city}%20to%20Pakistan.`, "_blank");
  };

  return (
    <div className="pt-20">
      {/* SEO Metadata */}
      <Helmet>
        <title>Cargo to Pakistan from {location.city} | Fast & Reliable Shipping</title>
        <meta name="description" content={`Professional cargo shipping services from ${location.city} to Pakistan. Door-to-door delivery with secure handling and tracking.`} />
        <meta name="keywords" content={`${location.city.toLowerCase()} to pakistan cargo, ${location.city.toLowerCase()} shipping to pakistan, door to door cargo`} />
        <link rel="canonical" href={`https://cargoconnect.pk/${location.city.toLowerCase()}-to-pakistan`} />
      </Helmet>
    
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-cargo-green to-cargo-blue text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/30 z-0"></div>
        {location.heroImage && (
          <div className="absolute inset-0 z-0">
            <img 
              src={location.heroImage} 
              alt={`${location.city} to Pakistan cargo services`} 
              className="w-full h-full object-cover opacity-30"
            />
          </div>
        )}
        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <span className="bg-white/20 text-white px-4 py-1 rounded-full text-sm backdrop-blur-sm border border-white/20 inline-block mb-4">
              UAE to Pakistan Cargo
            </span>
            <h1 className="text-3xl md:text-5xl font-bold mb-6 text-white leading-tight">
              Cargo to Pakistan from <span className="text-cargo-orange">{location.city}</span>
            </h1>
            <p className="text-xl text-gray-100 mb-8">
              Efficient and affordable shipping solutions from {location.city} to destinations across Pakistan
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button 
                onClick={handleCall}
                className="bg-cargo-orange hover:bg-orange-600 text-white shadow-lg hover:shadow-xl transform transition-all hover:-translate-y-0.5 tap-target"
                size="lg"
              >
                <Phone className="mr-2 h-5 w-5" /> Call Now
              </Button>
              <Button 
                onClick={handleWhatsApp}
                className="bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/50 text-white shadow-lg transform transition-all hover:-translate-y-0.5 tap-target"
                size="lg"
              >
                <MessageCircle className="mr-2 h-5 w-5" /> WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Service Overview */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <div className="flex items-center mb-6">
                <div className="h-10 w-1 bg-cargo-green rounded mr-3"></div>
                <h2 className="text-3xl font-bold text-cargo-blue">{location.city} to Pakistan Cargo Services</h2>
              </div>
              <p className="text-gray-600 mb-4">
                {location.description || `Our specialized cargo service from ${location.city} to Pakistan offers complete door-to-door solutions with professional handling from start to finish.`}
              </p>
              <p className="text-gray-600 mb-4">
                Whether you're sending personal effects, gifts, or commercial goods, our team ensures your shipment reaches its destination in Pakistan safely and efficiently.
              </p>
              <p className="text-gray-600 mb-6">
                We serve all major cities in Pakistan including Karachi, Lahore, Islamabad, Rawalpindi, and many more with our extensive delivery network.
              </p>
              <div className="flex gap-4 flex-wrap">
                <Button className="bg-cargo-green hover:bg-green-700 text-white tap-target" onClick={handleCall}>
                  Get a Quote
                </Button>
                <Link to="/services">
                  <Button variant="outline" className="border-cargo-blue text-cargo-blue hover:bg-cargo-lightBlue/50">
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>
            <div className="bg-cargo-lightGreen rounded-xl p-8 shadow-sm border border-cargo-green/20">
              <h3 className="text-xl font-bold text-cargo-blue mb-6 flex items-center">
                <Ship className="mr-2 h-6 w-6 text-cargo-green" />
                Our {location.city} to Pakistan Services Include:
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 bg-white p-4 rounded-lg shadow-sm">
                  <div className="bg-cargo-lightBlue p-2 rounded-full">
                    <Plane className="h-5 w-5 text-cargo-blue" />
                  </div>
                  <div>
                    <span className="font-medium block">Air Freight</span>
                    <span className="text-sm text-gray-600">2-5 business days</span>
                  </div>
                </li>
                <li className="flex items-start gap-3 bg-white p-4 rounded-lg shadow-sm">
                  <div className="bg-cargo-lightGreen p-2 rounded-full">
                    <Ship className="h-5 w-5 text-cargo-green" />
                  </div>
                  <div>
                    <span className="font-medium block">Sea Freight</span>
                    <span className="text-sm text-gray-600">20-30 days</span>
                  </div>
                </li>
                <li className="flex items-start gap-3 bg-white p-4 rounded-lg shadow-sm">
                  <div className="bg-cargo-lightOrange p-2 rounded-full">
                    <Package className="h-5 w-5 text-cargo-orange" />
                  </div>
                  <div>
                    <span className="font-medium block">Personal & Household Items</span>
                    <span className="text-sm text-gray-600">Safely packed and transported</span>
                  </div>
                </li>
                <li className="flex items-start gap-3 bg-white p-4 rounded-lg shadow-sm">
                  <div className="bg-cargo-lightBlue p-2 rounded-full">
                    <FileCheck className="h-5 w-5 text-cargo-blue" />
                  </div>
                  <div>
                    <span className="font-medium block">Commercial Shipments</span>
                    <span className="text-sm text-gray-600">With complete documentation</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="text-cargo-blue bg-cargo-lightBlue px-3 py-1 rounded-full text-sm font-medium">Our Benefits</span>
            <h2 className="text-3xl font-bold text-cargo-blue mt-3 mb-3">Why Choose Our {location.city} to Pakistan Service</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Experience the difference with our specialized {location.city} to Pakistan shipping expertise.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all hover:-translate-y-1">
              <div className="w-12 h-12 bg-cargo-lightBlue rounded-full flex items-center justify-center mb-4">
                <Truck className="h-6 w-6 text-cargo-blue" />
              </div>
              <h3 className="text-xl font-semibold text-cargo-blue mb-2">Full Service Solution</h3>
              <p className="text-gray-600">
                From pickup in {location.city} to final delivery in Pakistan, we handle every step of the shipping process.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all hover:-translate-y-1">
              <div className="w-12 h-12 bg-cargo-lightGreen rounded-full flex items-center justify-center mb-4">
                <FileCheck className="h-6 w-6 text-cargo-green" />
              </div>
              <h3 className="text-xl font-semibold text-cargo-green mb-2">Documentation Assistance</h3>
              <p className="text-gray-600">
                We handle all necessary customs documentation for smooth clearance at Pakistani ports.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all hover:-translate-y-1">
              <div className="w-12 h-12 bg-cargo-lightOrange rounded-full flex items-center justify-center mb-4">
                <Package className="h-6 w-6 text-cargo-orange" />
              </div>
              <h3 className="text-xl font-semibold text-cargo-orange mb-2">Expert Packing</h3>
              <p className="text-gray-600">
                Professional packing services to ensure your items are protected during transit from {location.city} to Pakistan.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="text-cargo-green bg-cargo-lightGreen px-3 py-1 rounded-full text-sm font-medium">Delivery Network</span>
            <h2 className="text-3xl font-bold text-cargo-blue mt-3 mb-3">{location.city} to Pakistan Delivery Areas</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We deliver to all major cities and regions throughout Pakistan from {location.city}.
            </p>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            {["Karachi", "Lahore", "Islamabad", "Peshawar", "Quetta", "Faisalabad", "Multan", "Sialkot"].map((city, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center hover:shadow-md transition-all hover:-translate-y-1 hover:border-cargo-green/50">
                <div className="mb-3 flex justify-center">
                  <div className="h-12 w-12 rounded-full bg-cargo-lightGreen flex items-center justify-center">
                    <MapPin className="h-5 w-5 text-cargo-green" />
                  </div>
                </div>
                <h3 className="font-medium text-cargo-blue">{city}</h3>
                <p className="text-xs text-gray-500 mt-1">Pakistan</p>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-10">
            <Link to="/service-areas">
              <Button className="bg-cargo-blue hover:bg-blue-800 tap-target">
                View All Destinations <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Rates & Process */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <div className="flex items-center mb-6">
                <div className="h-10 w-1 bg-cargo-blue rounded mr-3"></div>
                <h2 className="text-2xl font-bold text-cargo-blue">Shipping Process: {location.city} to Pakistan</h2>
              </div>
              <ol className="space-y-6">
                <li className="flex gap-4 bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-all">
                  <div className="bg-cargo-green rounded-full min-w-8 h-8 flex items-center justify-center text-white font-bold flex-shrink-0">1</div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Get in Touch</h3>
                    <p className="text-gray-600">Contact us with information about your shipment from {location.city} to Pakistan.</p>
                  </div>
                </li>
                <li className="flex gap-4 bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-all">
                  <div className="bg-cargo-green rounded-full min-w-8 h-8 flex items-center justify-center text-white font-bold flex-shrink-0">2</div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Book Pickup</h3>
                    <p className="text-gray-600">We'll arrange collection from your address in {location.city} at a time that suits you.</p>
                  </div>
                </li>
                <li className="flex gap-4 bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-all">
                  <div className="bg-cargo-green rounded-full min-w-8 h-8 flex items-center justify-center text-white font-bold flex-shrink-0">3</div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Preparation</h3>
                    <p className="text-gray-600">We pack your items properly and prepare all required shipping documents.</p>
                  </div>
                </li>
                <li className="flex gap-4 bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-all">
                  <div className="bg-cargo-green rounded-full min-w-8 h-8 flex items-center justify-center text-white font-bold flex-shrink-0">4</div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Shipping & Tracking</h3>
                    <p className="text-gray-600">Your cargo is transported to Pakistan with real-time tracking updates.</p>
                  </div>
                </li>
                <li className="flex gap-4 bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-all">
                  <div className="bg-cargo-green rounded-full min-w-8 h-8 flex items-center justify-center text-white font-bold flex-shrink-0">5</div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Delivery</h3>
                    <p className="text-gray-600">We deliver your shipment to the specified address in Pakistan.</p>
                  </div>
                </li>
              </ol>
            </div>
            
            <div>
              <div className="flex items-center mb-6">
                <div className="h-10 w-1 bg-cargo-orange rounded mr-3"></div>
                <h2 className="text-2xl font-bold text-cargo-orange">Shipping Rates: {location.city} to Pakistan</h2>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-sm mb-6 border border-gray-100">
                <h3 className="font-semibold text-lg mb-4 text-cargo-blue">Factors that affect shipping costs:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="bg-cargo-lightGreen p-2 rounded-full mt-1">
                      <ArrowRight className="h-4 w-4 text-cargo-green" />
                    </div>
                    <span className="text-gray-600">Weight and dimensions of the cargo</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-cargo-lightGreen p-2 rounded-full mt-1">
                      <ArrowRight className="h-4 w-4 text-cargo-green" />
                    </div>
                    <span className="text-gray-600">Transportation method selected</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-cargo-lightGreen p-2 rounded-full mt-1">
                      <ArrowRight className="h-4 w-4 text-cargo-green" />
                    </div>
                    <span className="text-gray-600">Delivery location in Pakistan</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-cargo-lightGreen p-2 rounded-full mt-1">
                      <ArrowRight className="h-4 w-4 text-cargo-green" />
                    </div>
                    <span className="text-gray-600">Category of goods being shipped</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-cargo-lightGreen p-6 rounded-xl border border-cargo-green/20">
                <h3 className="font-semibold text-lg mb-3 text-cargo-green">Get Your Custom Quote Today</h3>
                <p className="text-gray-600 mb-4">
                  Contact us now for a personalized quote tailored to your specific shipping needs from {location.city} to Pakistan.
                </p>
                <div className="flex gap-3">
                  <Button 
                    className="flex-1 bg-cargo-green hover:bg-green-700 text-white tap-target shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all"
                    onClick={handleCall}
                  >
                    <Phone className="mr-2 h-4 w-4" />
                    Call Now
                  </Button>
                  <Button 
                    className="flex-1 bg-white border border-cargo-green text-cargo-green hover:bg-cargo-lightGreen tap-target"
                    onClick={handleWhatsApp}
                  >
                    <MessageCircle className="mr-2 h-4 w-4" />
                    WhatsApp
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-br from-cargo-blue to-cargo-green text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/30 z-0"></div>
        <div className="container-custom text-center relative z-10">
          <h2 className="text-3xl font-bold mb-4 text-white">Ready to Ship from {location.city} to Pakistan?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact us today for a free quote and experience our professional cargo services.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button 
              className="bg-cargo-orange hover:bg-orange-600 text-white shadow-lg hover:shadow-xl transform transition-all hover:-translate-y-0.5 tap-target" 
              size="lg"
              onClick={handleCall}
            >
              <Phone className="mr-2 h-5 w-5" />
              Call Now
            </Button>
            <Button 
              variant="outline" 
              className="bg-white/10 border-white text-white hover:bg-white/20 backdrop-blur-sm tap-target" 
              size="lg"
              onClick={handleWhatsApp}
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              WhatsApp
            </Button>
          </div>
        </div>
      </section>

      <FloatingButton />
    </div>
  );
};

export default UAEToPakistanPage;
