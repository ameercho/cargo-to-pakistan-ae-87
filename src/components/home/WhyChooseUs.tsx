
import { Shield, Clock, Star, Users } from "lucide-react";

const WhyChooseUs = () => {
  const features = [
    {
      icon: Shield,
      title: "Secure Handling",
      description: "Professional packing and secure handling of all cargo with comprehensive insurance coverage."
    },
    {
      icon: Clock,
      title: "Timely Delivery",
      description: "Reliable delivery schedules with real-time tracking from UAE to Pakistan destinations."
    },
    {
      icon: Star,
      title: "Expert Service",
      description: "Years of experience in UAE to Pakistan cargo shipping with professional customer support."
    },
    {
      icon: Users,
      title: "Trusted Partner",
      description: "Thousands of satisfied customers trust us for their cargo shipping needs to Pakistan."
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container-custom">
        <h2 className="text-3xl font-bold text-center text-cargo-blue mb-12">
          Why Choose Our Cargo Services
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div key={index} className="text-center">
                <div className="bg-cargo-blue/10 p-4 rounded-lg mx-auto mb-4 w-fit">
                  <IconComponent className="h-8 w-8 text-cargo-blue" />
                </div>
                <h3 className="text-xl font-semibold text-cargo-blue mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
