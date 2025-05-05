
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import QuoteForm from "@/components/QuoteForm";
import ServiceCard from "@/components/ServiceCard";
import TestimonialCard from "@/components/TestimonialCard";
import ServiceAreas from "@/components/ServiceAreas";
import DoorToDoorService from "@/components/DoorToDoorService";
import ExitPopup from "@/components/ExitPopup";
import FloatingButton from "@/components/FloatingButton";
import PakistanCargoServices from "@/components/PakistanCargoServices";
import { Link } from "react-router-dom";
import { ArrowRight, Ship, Plane, Truck, Package, ShieldCheck, Clock, Phone, MessageCircle } from "lucide-react";

const Index = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const handleCall = () => {
    window.location.href = "tel:+971501234567";
  };

  const handleWhatsApp = () => {
    window.open("https://wa.me/971501234567?text=Hello,%20I'm%20interested%20in%20your%20cargo%20services.", "_blank");
  };

  const services = [
    {
      title: "Air Freight",
      description: "Fast and reliable air cargo services for time-sensitive shipments to Pakistan.",
      icon: Plane,
      iconColor: "text-cargo-blue",
    },
    {
      title: "Sea Freight",
      description: "Cost-effective ocean shipping solutions for larger cargo shipments.",
      icon: Ship,
      iconColor: "text-cargo-green",
    },
    {
      title: "Full Container",
      description: "Efficient ground transportation services for your cargo within Pakistan.",
      icon: Truck,
      iconColor: "text-cargo-orange",
    },
    {
      title: "Packaging",
      description: "Professional packaging services to ensure your items arrive safely.",
      icon: Package,
      iconColor: "text-cargo-blue",
    },
    {
      title: "Full Container",
      description: "Comprehensive coverage for your valuable shipments against loss or damage.",
      icon: ShieldCheck,
      iconColor: "text-cargo-green",
    },
    {
      title: "Courier Service",
      description: "Expedited shipping options for urgent cargo deliveries.",
      icon: Clock,
      iconColor: "text-cargo-orange",
    },
  ];

  const testimonials = [
    {
      name: "Ahmed Khan",
      position: "Business Owner",
      testimonial: "Cargo to Pakistan made shipping to Pakistan incredibly easy. Their rates are competitive and service is excellent!",
      rating: 5,
    },
    {
      name: "Sarah Johnson",
      position: "Student",
      testimonial: "I needed to ship personal items to family in Lahore. The process was smooth and everything arrived on time.",
      rating: 4,
    },
    {
      name: "Muhammad Ali",
      position: "Importer",
      testimonial: "We've been using Cargo to Pakistan for our business shipments for over 2 years. Their service is consistent and reliable.",
      rating: 5,
    },
  ];

  return (
    <div className={`transition-opacity duration-500 ${isLoaded ? "opacity-100" : "opacity-0"}`}>
      {/* Hero Section */}
      <section className="pt-24 pb-12 md:pt-32 md:pb-16 bg-gradient-to-br from-cargo-blue to-cargo-green text-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 max-w-lg">
              <h1 className="text-4xl md:text-5xl font-bold leading-tight text-white">
                Reliable Cargo Services to Pakistan
              </h1>
              <p className="text-lg text-gray-100">
                Fast, secure, and affordable shipping solutions for personal and business cargo.
              </p>
              
              {/* Call and WhatsApp buttons */}
              <div className="flex flex-wrap gap-4 pt-4">
                <Button 
                  onClick={handleCall} 
                  className="bg-white text-cargo-green hover:bg-gray-100 tap-target flex items-center gap-2"
                >
                  <Phone className="h-4 w-4" /> Call Us
                </Button>
                <Button 
                  onClick={handleWhatsApp} 
                  className="bg-green-600 hover:bg-green-700 text-white tap-target flex items-center gap-2"
                >
                  <MessageCircle className="h-4 w-4" /> WhatsApp
                </Button>
              </div>
              
              <div className="pt-4">
                <div className="flex flex-wrap gap-3">
                  <div className="bg-white/10 py-2 px-4 rounded-full text-sm">Air Freight</div>
                  <div className="bg-white/10 py-2 px-4 rounded-full text-sm">Sea Freight</div>
                  <div className="bg-white/10 py-2 px-4 rounded-full text-sm">Full Container</div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-xl p-1 md:p-2 ml-0 md:ml-12">
              <QuoteForm />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-title">Our Services</h2>
            <p className="section-description">
              Comprehensive cargo solutions tailored to your specific needs for shipping to Pakistan.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
            <Link to="/services">
              <Button className="bg-cargo-blue hover:bg-blue-800 tap-target">
                View All Services <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <ServiceAreas />

      {/* Door to Door Service Section - renamed to "Cargo to Pakistan from UAE" */}
      <DoorToDoorService />
      
      {/* Pakistan Cargo Services Section */}
      <PakistanCargoServices />

      {/* Why Choose Us Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-cargo-blue mb-3">Why Choose Us</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We provide reliable, efficient, and cost-effective cargo solutions to Pakistan.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="bg-cargo-lightBlue rounded-xl p-8">
              <div className="space-y-6">
                <div className="flex gap-4 items-start">
                  <div className="rounded-full bg-cargo-blue p-2 text-white">
                    <ShieldCheck className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-cargo-blue mb-1">Secure Handling</h3>
                    <p className="text-gray-600">Your cargo is handled with the utmost care from pickup to delivery.</p>
                  </div>
                </div>
                
                <div className="flex gap-4 items-start">
                  <div className="rounded-full bg-cargo-green p-2 text-white">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-cargo-blue mb-1">Timely Delivery</h3>
                    <p className="text-gray-600">We ensure your shipments reach their destination on time, every time.</p>
                  </div>
                </div>
                
                <div className="flex gap-4 items-start">
                  <div className="rounded-full bg-cargo-orange p-2 text-white">
                    <Package className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-cargo-blue mb-1">Flexible Solutions</h3>
                    <p className="text-gray-600">Customized shipping options to meet your specific requirements.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-cargo-blue mb-4">Experience the Difference</h3>
              <p className="text-gray-600 mb-6">
                With years of experience in cargo shipping to Pakistan, we have established reliable routes and partnerships to ensure smooth delivery of your cargo.
              </p>
              <ul className="space-y-3 mb-6">
                {[
                  "Competitive rates for all shipping services",
                  "Real-time tracking of your shipments",
                  "Dedicated customer service team",
                  "Customs clearance assistance",
                  "Door-to-door delivery options",
                ].map((item, index) => (
                  <li key={index} className="flex gap-2">
                    <span className="text-cargo-green">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Button className="bg-cargo-green hover:bg-[#176a3e] tap-target">
                Learn More About Us
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-cargo-blue mb-3">Customer Testimonials</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Hear what our customers have to say about our cargo services to Pakistan.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                name={testimonial.name}
                position={testimonial.position}
                testimonial={testimonial.testimonial}
                rating={testimonial.rating}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-cargo-blue text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Ship to Pakistan?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Get started today and experience our reliable cargo services.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button 
              className="bg-cargo-orange hover:bg-orange-600 text-white tap-target" 
              size="lg"
            >
              Get a Free Quote
            </Button>
            <Button 
              variant="outline" 
              className="bg-transparent border-white text-white hover:bg-white/10 tap-target" 
              size="lg"
            >
              Contact Us
            </Button>
          </div>
        </div>
      </section>

      {/* Components */}
      <ExitPopup />
      <FloatingButton />
    </div>
  );
};

export default Index;
