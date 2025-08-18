
import React, { useEffect } from 'react';
import PakistanCargoHero from "@/components/pakistan-cargo/PakistanCargoHero";
import PakistanCargoMainContent from "@/components/pakistan-cargo/PakistanCargoMainContent";
import PakistanCargoSidebar from "@/components/pakistan-cargo/PakistanCargoSidebar";
import PakistanCargoServices from "@/components/pakistan-cargo/PakistanCargoServices";
import PakistanCargoTestimonials from "@/components/pakistan-cargo/PakistanCargoTestimonials";
import CallToAction from "@/components/home/CallToAction";
import { useContact } from "@/hooks/useContact";

interface DestinationInfo {
  city: string;
  description: string;
  areas: string[];
  heroImage?: string;
}

interface PakistanCargoDestinationPageProps {
  destination: DestinationInfo;
}

const PakistanCargoDestinationPage: React.FC<PakistanCargoDestinationPageProps> = ({ destination }) => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Contact handlers
  const { makeCall, openWhatsApp } = useContact();
  
  const handleCall = () => makeCall('pakistan_destination_page');
  
  const handleWhatsApp = () => {
    openWhatsApp(`Hello, I'm interested in your cargo services to ${destination.city}, Pakistan.`, 'pakistan_destination_page');
  };
  
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <PakistanCargoHero 
        city={destination.city}
        heroImage={destination.heroImage}
        onCall={handleCall}
        onWhatsApp={handleWhatsApp}
      />

      {/* Main Content */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2">
              <PakistanCargoMainContent 
                city={destination.city}
                description={destination.description}
                areas={destination.areas}
              />
            </div>
            
            <PakistanCargoSidebar 
              city={destination.city}
              onCall={handleCall}
              onWhatsApp={handleWhatsApp}
            />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <PakistanCargoServices city={destination.city} />

      {/* Testimonials Section */}
      <PakistanCargoTestimonials city={destination.city} />

      {/* Call to Action */}
      <CallToAction />
    </div>
  );
};

export default PakistanCargoDestinationPage;
