import React, { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Home, Clock, Package } from "lucide-react";
import ServiceCard from "@/components/ServiceCard";
import CallToAction from "@/components/home/CallToAction";
import DoorToDoorService from "@/components/DoorToDoorService";
import MovingHomeHero from "@/components/services/moving-home/MovingHomeHero";
import MovingHomeContent from "@/components/services/moving-home/MovingHomeContent";
import MovingHomeSidebar from "@/components/services/moving-home/MovingHomeSidebar";
import ServicePageLayout from "@/components/services/ServicePageLayout";
import { useSafeContact } from "@/hooks/useSafeContact";

const MovingHome = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { makeCall, openWhatsApp } = useSafeContact();

  const services = [
    {
      title: "Professional Packing",
      description:
        "Expert packing and moving services for all household items.",
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
      description:
        "Enhanced safety measures and careful handling for valuables.",
      icon: Clock,
      iconColor: "text-cargo-green",
    },
  ];

  const handleWhatsAppWithMessage = () => {
    openWhatsApp(
      "Hello, I'm interested in your home moving services to Pakistan.",
      "moving_home_page",
    );
  };

  return (
    <>
      <ServicePageLayout
        heroSection={
          <MovingHomeHero
            onCall={() => makeCall("moving_home_hero")}
            onWhatsApp={handleWhatsAppWithMessage}
          />
        }
        breadcrumbTitle="Moving Home"
      >
        {/* Main Content Area */}
        <section className="py-16">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
              {/* Left Column: Main Narrative Content (2/3 width on desktop) */}
              <div className="lg:col-span-2">
                <MovingHomeContent />
              </div>

              {/* Right Column: Sidebar Actions (1/3 width on desktop) */}
              <aside className="space-y-8">
                <MovingHomeSidebar
                  onCall={() => makeCall("moving_home_sidebar")}
                  onWhatsApp={handleWhatsAppWithMessage}
                />
              </aside>
            </div>
          </div>
        </section>

        {/* Feature/Benefits Section */}
        <section className="py-16 bg-gray-50">
          <div className="container-custom">
            <div className="text-center mb-12">
              <span className="text-cargo-blue bg-cargo-lightBlue px-3 py-1 rounded-full text-sm font-medium">
                Our Services
              </span>
              <h2 className="text-2xl font-bold text-cargo-blue mt-3 mb-3">
                Home Moving Solutions
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Explore our comprehensive home moving services designed for
                complete relocation.
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
                  <Button className="bg-cargo-green hover:bg-green-700 text-white shadow-sm tap-target">
                    Packaging Services <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link to="/services/cross-stuffing">
                  <Button className="bg-cargo-green hover:bg-green-700 text-white shadow-sm tap-target">
                    Cross Stuffing <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Door to Door Service Section */}
        <section className="py-16 bg-white">
          <div className="container-custom">
            <DoorToDoorService />
          </div>
        </section>

        {/* Call to Action Footer */}
        <CallToAction />
      </ServicePageLayout>
    </>
  );
};

export default MovingHome;
