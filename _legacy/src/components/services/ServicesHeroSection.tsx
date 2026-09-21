
import ServicesFeatures from "./ServicesFeatures";

interface ServicesHeroSectionProps {
  title: string;
}

const ServicesHeroSection = ({ title }: ServicesHeroSectionProps) => {
  return (
    <section className="py-16 bg-gradient-to-br from-cargo-blue to-cargo-green text-white">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            {title}
          </h1>
          <p className="text-xl md:text-2xl text-gray-100 mb-8 leading-relaxed">
            Discover our complete range of cargo shipping solutions designed to meet your specific needs. From express air freight to cost-effective sea freight, we provide reliable and secure shipping services with competitive rates and professional handling.
          </p>
          <ServicesFeatures />
        </div>
      </div>
    </section>
  );
};

export default ServicesHeroSection;
