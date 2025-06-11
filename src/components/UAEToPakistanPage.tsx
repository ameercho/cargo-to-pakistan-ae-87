
import React, { useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Ship, Truck, Package, Phone, MessageCircle, MapPin, Clock } from "lucide-react";
import ServiceCard from "@/components/ServiceCard";
import CallToAction from "@/components/home/CallToAction";

interface UAEToPakistanPageProps {
  location: {
    city: string;
    description: string;
  };
}

const UAEToPakistanPage: React.FC<UAEToPakistanPageProps> = ({ location }) => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const services = [
    {
      title: "Sea Freight",
      description: `Cost-effective ocean shipping solutions for larger cargo shipments to Pakistan from ${location.city}.`,
      icon: Ship,
      iconColor: "text-cargo-green",
    },
    {
      title: "Full Container",
      description: `Efficient transportation services for your full container shipments from ${location.city}.`,
      icon: Truck,
      iconColor: "text-cargo-orange",
    },
    {
      title: "Express Courier",
      description: `Fast and reliable courier services for time-sensitive shipments from ${location.city}.`,
      icon: Clock,
      iconColor: "text-cargo-blue",
    },
  ];

  const benefits = [
    "Door-to-door pickup and delivery",
    "Professional packing services",
    "Customs clearance assistance",
    "Real-time tracking",
    "Competitive rates",
    "Insurance options available"
  ];
  
  const handleCall = () => {
    window.location.href = "tel:+971504948135";
  };
  
  const handleWhatsApp = () => {
    window.open(`https://wa.me/971504948135?text=Hello,%20I'm%20interested%20in%20your%20cargo%20services%20from%20${location.city}%20to%20Pakistan.`, "_blank");
  };

  return (
    <div className="min-h-screen bg-white">
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
                Cargo Services from <span className="text-cargo-orange">{location.city}</span> to Pakistan
              </h1>
              <p className="text-xl text-gray-100 mb-8 max-w-2xl">
                {location.description}
              </p>
              <div className="flex flex-wrap gap-4">
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
                  className="bg-white/10 border-white text-white hover:bg-white/20 backdrop-blur-sm shadow-lg tap-target"
                  size="lg"
                  onClick={handleWhatsApp}
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  WhatsApp
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2">
              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                <h2 className="text-2xl font-bold text-cargo-blue mb-6 flex items-center">
                  <MapPin className="mr-2 h-6 w-6 text-cargo-green" />
                  {`Door-to-Door Cargo Service from ${location.city} to Pakistan`}
                </h2>
              
                <div className="prose max-w-none">
                  <p className="mb-4 text-lg">
                    {`We offer reliable and efficient door-to-door cargo services from ${location.city} to all major cities in Pakistan. Our services include pickup from your location, professional packing, shipping, customs clearance, and delivery to your recipient's doorstep.`}
                  </p>
                  
                  <p className="mb-4">
                    {`With years of experience in the cargo industry, we ensure your shipments are handled with care and delivered safely and on time. Whether you're sending personal belongings, gifts, or commercial goods, we have the expertise to meet your cargo needs.`}
                  </p>
                  
                  <div className="my-8 p-6 bg-cargo-lightBlue rounded-lg border-l-4 border-cargo-blue">
                    <h3 className="text-xl font-semibold text-cargo-blue mb-4 flex items-center">
                      <Ship className="mr-2 h-5 w-5" />
                      Service Highlights
                    </h3>
                    
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-0">
                      {benefits.map((benefit, index) => (
                        <li key={index} className="flex items-center bg-white p-3 rounded-lg shadow-sm">
                          <div className="h-8 w-8 rounded-full bg-cargo-lightGreen flex items-center justify-center mr-3">
                            <ArrowRight className="h-4 w-4 text-cargo-green" />
                          </div>
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-cargo-blue mt-8 mb-4">Major Destinations in Pakistan</h3>
                  
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-8">
                    <Link to="/pakistan-cargo-to-karachi" className="bg-gray-50 p-3 rounded-lg shadow-sm flex items-center hover:bg-gray-100 hover:shadow-md transition-all">
                      <MapPin className="h-4 w-4 text-cargo-green mr-2" /> Karachi
                    </Link>
                    <Link to="/pakistan-cargo-to-lahore" className="bg-gray-50 p-3 rounded-lg shadow-sm flex items-center hover:bg-gray-100 hover:shadow-md transition-all">
                      <MapPin className="h-4 w-4 text-cargo-green mr-2" /> Lahore
                    </Link>
                    <Link to="/pakistan-cargo-to-islamabad" className="bg-gray-50 p-3 rounded-lg shadow-sm flex items-center hover:bg-gray-100 hover:shadow-md transition-all">
                      <MapPin className="h-4 w-4 text-cargo-green mr-2" /> Islamabad
                    </Link>
                    <Link to="/pakistan-cargo-to-peshawar" className="bg-gray-50 p-3 rounded-lg shadow-sm flex items-center hover:bg-gray-100 hover:shadow-md transition-all">
                      <MapPin className="h-4 w-4 text-cargo-green mr-2" /> Peshawar
                    </Link>
                    <div className="bg-gray-50 p-3 rounded-lg shadow-sm flex items-center hover:bg-gray-100 hover:shadow-md transition-all">
                      <MapPin className="h-4 w-4 text-cargo-green mr-2" /> Faisalabad
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg shadow-sm flex items-center hover:bg-gray-100 hover:shadow-md transition-all">
                      <MapPin className="h-4 w-4 text-cargo-green mr-2" /> Multan
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-1 space-y-6">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-xl font-semibold text-cargo-blue mb-4 flex items-center">
                  <Package className="mr-2 h-5 w-5" />
                  Get a Quote
                </h3>
                
                <div className="p-4 bg-cargo-lightGreen rounded-lg mb-4">
                  <p className="text-sm text-cargo-green font-medium">
                    {`Contact us today for a free quote on your cargo shipment from ${location.city} to Pakistan.`}
                  </p>
                </div>
                
                <Button 
                  className="w-full bg-cargo-blue hover:bg-blue-800 text-white shadow-md transition-all duration-300 hover:shadow-lg transform hover:-translate-y-0.5"
                  onClick={handleCall}
                >
                  <Phone className="mr-2 h-4 w-4" />
                  Call +971504948135
                </Button>
                
                <div className="mt-4">
                  <Button 
                    variant="outline" 
                    className="w-full border-cargo-blue text-white bg-cargo-blue hover:bg-blue-700"
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

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="text-cargo-blue bg-cargo-lightBlue px-3 py-1 rounded-full text-sm font-medium">Our Services</span>
            <h2 className="text-2xl font-bold text-cargo-blue mt-3 mb-3">{`Shipping from ${location.city} to Pakistan Made Easy`}</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {`We simplify the process of shipping your cargo from ${location.city} to Pakistan. Our experienced team handles all the logistics, from pickup to delivery, ensuring a hassle-free experience for you.`}
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
          
          <div className="text-center mt-12">
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/services/sea-freight">
                <Button className="bg-cargo-blue hover:bg-blue-800 tap-target">
                  Sea Freight Services <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link to="/services/courier-service">
                <Button variant="outline" className="border-cargo-green text-cargo-green hover:bg-cargo-green hover:text-white tap-target">
                  Express Courier <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <CallToAction />
    </div>
  );
};

export default UAEToPakistanPage;
