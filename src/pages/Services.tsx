
import ServicesHero from "@/components/services/ServicesHero";
import MainServices from "@/components/services/MainServices";
import AdditionalServices from "@/components/services/AdditionalServices";
import ServicesCallToAction from "@/components/services/ServicesCallToAction";
import FloatingButton from "@/components/FloatingButton";

const Services = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <ServicesHero />

      {/* Main Services */}
      <MainServices />

      {/* Additional Services */}
      <AdditionalServices />

      {/* Call to Action */}
      <ServicesCallToAction />

      <FloatingButton />
    </div>
  );
};

export default Services;
