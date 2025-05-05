
import { Button } from "@/components/ui/button";
import { Calendar, Home, Package, ShieldCheck, Clock } from "lucide-react";

const WhyChooseUs = () => {
  return (
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
  );
};

export default WhyChooseUs;
