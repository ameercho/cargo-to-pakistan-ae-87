
import React, { useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Home, Clock, Package } from "lucide-react";
import ServiceCard from "@/components/ServiceCard";
import CallToAction from "@/components/home/CallToAction";
import MovingHomeHero from "@/components/services/moving-home/MovingHomeHero";
import MovingHomeContent from "@/components/services/moving-home/MovingHomeContent";
import MovingHomeSidebar from "@/components/services/moving-home/MovingHomeSidebar";
import ServicePageLayout from "@/components/services/ServicePageLayout";
import PageSEO from "@/components/SEO/PageSEO";
import { useContactActions } from "@/hooks/useContactActions";

const MovingHome = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const { handleCall, handleWhatsApp } = useContactActions();
  
  const services = [
    {
      title: "Professional Packing",
      description: "Expert packing and moving services for all household items.",
      icon: Package,
      iconColor: "text-cargo-orange",
    },
    {
      title: "Door to Door",
      description: "Complete home relocation services from pickup to delivery.",
      icon: Home,
      iconColor: "text-cargo-blue",
    },
    {
      title: "Secure Transport",
      description: "Enhanced safety measures and careful handling for valuables.",
      icon: Clock,
      iconColor: "text-cargo-green",
    },
  ];

  const handleWhatsAppWithMessage = () => {
    handleWhatsApp("Hello, I'm interested in your home moving services to Pakistan.");
  };

  return (
    <>
      <PageSEO
        title="Moving Home to Pakistan | Professional Home Relocation Service"
        description="Professional home moving services from UAE to Pakistan. Complete household relocation with packing, shipping, and door-to-door delivery. Call +971504948135"
        keywords="moving home to pakistan, household relocation uae, home shifting service, pakistan home moving"
        canonical="https://cargotopakistan.ae/services/moving-home"
        robots="index,follow"
      />
      <ServicePageLayout
        heroSection={<MovingHomeHero onCall={handleCall} onWhatsApp={handleWhatsAppWithMessage} />}
        breadcrumbTitle="Moving Home"
      >
        {/* Main Content */}
        <section className="py-16">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
              <div className="lg:col-span-2">
                <MovingHomeContent />
              </div>
              
              <MovingHomeSidebar onCall={handleCall} onWhatsApp={handleWhatsAppWithMessage} />
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 bg-gray-50">
          <div className="container-custom">
            <div className="text-center mb-12">
              <span className="text-cargo-blue bg-cargo-lightBlue px-3 py-1 rounded-full text-sm font-medium">Our Services</span>
              <h2 className="text-2xl font-bold text-cargo-blue mt-3 mb-3">Home Moving Solutions</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Explore our comprehensive home moving services designed for complete relocation.
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
                <Link to="/services/packaging">
                  <Button className="bg-cargo-blue hover:bg-blue-800 tap-target">
                    Packaging Services <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link to="/services/insurance">
                  <Button variant="outline" className="border-cargo-green text-cargo-green hover:bg-cargo-green hover:text-white tap-target">
                    Cargo Insurance <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <CallToAction />
      </ServicePageLayout>
    </>
  );
};

export default MovingHome;
