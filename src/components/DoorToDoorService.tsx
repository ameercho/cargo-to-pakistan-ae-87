
import { Truck, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const DoorToDoorService = () => {
  const services = [
    {
      from: "Dubai",
      to: "Pakistan",
      description: "Fast and reliable door-to-door cargo services from Dubai to all major cities in Pakistan.",
      link: "/dubai-to-pakistan"
    },
    {
      from: "Abu Dhabi",
      to: "Pakistan",
      description: "Convenient door-to-door shipping solutions from Abu Dhabi to Pakistan with tracking.",
      link: "/abu-dhabi-to-pakistan"
    },
    {
      from: "Sharjah",
      to: "Pakistan",
      description: "Efficient cargo transportation services from Sharjah to Pakistan with customized solutions.",
      link: "/sharjah-to-pakistan"
    },
    {
      from: "Ajman",
      to: "Pakistan",
      description: "Trusted door-to-door delivery from Ajman to cities across Pakistan at competitive rates.",
      link: "/ajman-to-pakistan"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="section-title">Cargo to Pakistan from UAE</h2>
          <p className="section-description">
            We provide convenient door-to-door cargo services from all major cities in the UAE to destinations throughout Pakistan.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden card-hover">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="bg-cargo-lightGreen rounded-full p-3 mr-4">
                    <Truck className="h-6 w-6 text-cargo-green" />
                  </div>
                  <h3 className="text-xl font-semibold">
                    Cargo to Pakistan from {service.from}
                  </h3>
                </div>
                
                <div className="flex items-start mb-4">
                  <MapPin className="h-5 w-5 text-cargo-orange mt-1 mr-2 flex-shrink-0" />
                  <div>
                    <p className="font-medium">From: {service.from}, UAE</p>
                    <p className="text-sm text-gray-500">Pickup from your doorstep</p>
                  </div>
                </div>
                
                <div className="flex items-start mb-4">
                  <MapPin className="h-5 w-5 text-cargo-blue mt-1 mr-2 flex-shrink-0" />
                  <div>
                    <p className="font-medium">To: All major cities in Pakistan</p>
                    <p className="text-sm text-gray-500">Delivery to recipient's doorstep</p>
                  </div>
                </div>
                
                <p className="mb-6 text-gray-600">{service.description}</p>
                
                <div className="flex flex-wrap gap-3">
                  <Button className="bg-cargo-green hover:bg-[#176a3e] text-white tap-target">
                    Get a Quote
                  </Button>
                  <Link to={service.link}>
                    <Button variant="outline" className="tap-target">
                      Learn More
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DoorToDoorService;
