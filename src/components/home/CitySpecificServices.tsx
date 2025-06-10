
import { Link } from "react-router-dom";
import { ArrowRight, Ship, Plane, Truck } from "lucide-react";

const CitySpecificServices = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          
          <h2 className="text-3xl font-bold text-cargo-blue mb-6">
            Cargo to Pakistan from Dubai: Your Reliable Partner
          </h2>
          <div className="bg-white p-8 rounded-lg shadow-md mb-8">
            <p className="text-gray-700 mb-4">
              Our specialized Pakistan cargo Dubai team handles all types of shipments with professional care and expertise. 
              Whether you're sending personal cargo from Dubai to Pakistan or commercial shipments, we ensure swift and secure delivery. 
              Our Pakistan cargo Dubai services include daily departures, comprehensive tracking, and dedicated customer support 
              for all your shipping needs from Dubai to Pakistan.
            </p>
            <div className="flex items-center gap-4 mb-4">
              <div className="flex items-center gap-2">
                <Ship className="h-5 w-5 text-cargo-blue" />
                <span className="text-sm">Sea Freight Dubai to Pakistan</span>
              </div>
              <div className="flex items-center gap-2">
                <Plane className="h-5 w-5 text-cargo-green" />
                <span className="text-sm">Air Freight Dubai to Pakistan</span>
              </div>
              <div className="flex items-center gap-2">
                <Truck className="h-5 w-5 text-cargo-orange" />
                <span className="text-sm">Door-to-Door Dubai</span>
              </div>
            </div>
            <Link 
              to="/dubai-to-pakistan"
              className="inline-flex items-center text-cargo-blue hover:text-cargo-green transition-colors font-semibold"
            >
              Learn about our comprehensive Pakistan cargo Dubai options <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>

          <h2 className="text-3xl font-bold text-cargo-blue mb-6">
            Seamless Pakistan Cargo Services from Abu Dhabi
          </h2>
          <div className="bg-white p-8 rounded-lg shadow-md mb-8">
            <p className="text-gray-700 mb-4">
              Experience reliable cargo to Pakistan from Abu Dhabi with our professional handling and competitive rates. 
              Our Abu Dhabi to Pakistan cargo services offer complete door-to-door delivery options with secure handling 
              for all shipment types. We provide dedicated Pakistan cargo services from Abu Dhabi with flexible scheduling 
              and comprehensive insurance coverage for your peace of mind.
            </p>
            <Link 
              to="/abu-dhabi-to-pakistan"
              className="inline-flex items-center text-cargo-blue hover:text-cargo-green transition-colors font-semibold"
            >
              Explore cargo rates from Abu Dhabi to Pakistan <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>

          <h2 className="text-3xl font-bold text-cargo-blue mb-6">
            Efficient Cargo Solutions from Sharjah to Pakistan
          </h2>
          <div className="bg-white p-8 rounded-lg shadow-md mb-8">
            <p className="text-gray-700 mb-4">
              Fast and secure Sharjah to Pakistan cargo services for all types of shipments with competitive pricing. 
              Our Pakistan cargo services from Sharjah include professional packing, customs clearance assistance, 
              and reliable delivery schedules. Choose our trusted cargo to Pakistan from Sharjah for cost-effective 
              shipping solutions with guaranteed delivery times.
            </p>
            <Link 
              to="/sharjah-to-pakistan"
              className="inline-flex items-center text-cargo-blue hover:text-cargo-green transition-colors font-semibold"
            >
              Learn about our sea cargo to Pakistan options from Sharjah <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>

          <h2 className="text-3xl font-bold text-cargo-blue mb-6">
            Affordable Cargo from Ajman to Pakistan
          </h2>
          <div className="bg-white p-8 rounded-lg shadow-md mb-8">
            <p className="text-gray-700 mb-4">
              Cost-effective cargo solutions from Ajman to Pakistan with reliable delivery schedules and professional service. 
              Our Pakistan cargo services from Ajman offer budget-friendly shipping options without compromising on quality or security. 
              Experience hassle-free cargo to Pakistan from Ajman with our comprehensive door-to-door delivery solutions.
            </p>
            <Link 
              to="/ajman-to-pakistan"
              className="inline-flex items-center text-cargo-blue hover:text-cargo-green transition-colors font-semibold"
            >
              Get a free quote for cargo from Ajman to Pakistan <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CitySpecificServices;
