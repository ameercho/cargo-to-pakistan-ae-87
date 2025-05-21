
import React, { useEffect } from 'react';
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface UAEToPakistanPageProps {
  location: {
    city: string;
    description: string;
  };
}

const UAEToPakistanPage: React.FC<UAEToPakistanPageProps> = ({ location }) => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>{`Cargo Services from ${location.city} to Pakistan | Reliable Shipping`}</title>
        <meta 
          name="description" 
          content={`Professional cargo services from ${location.city} to Pakistan. Door-to-door delivery with reliable tracking.`} 
        />
        <link rel="canonical" href={`https://cargotopakistan.ae/${location.city.toLowerCase()}-to-pakistan`} />
      </Helmet>

      {/* Hero Section - Updated with hero-gradient class */}
      <section className="py-12 hero-gradient">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              {`Cargo Services from ${location.city} to Pakistan`}
            </h1>
            <p className="text-xl text-gray-100 mb-8">
              {location.description}
            </p>
            <Button className="bg-cargo-orange hover:bg-orange-600 text-white tap-target" size="lg">
              Request a Quote
            </Button>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="page-section-lg">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-bold text-cargo-blue mb-4">
                {`Door-to-Door Cargo Service from ${location.city} to Pakistan`}
              </h2>
              <p className="mb-4">
                {`We offer reliable and efficient door-to-door cargo services from ${location.city} to all major cities in Pakistan. Our services include pickup from your location, professional packing, shipping, customs clearance, and delivery to your recipient's doorstep.`}
              </p>
              <p className="mb-4">
                {`With years of experience in the cargo industry, we ensure your shipments are handled with care and delivered safely and on time. Whether you're sending personal belongings, gifts, or commercial goods, we have the expertise to meet your cargo needs.`}
              </p>
              <h3 className="text-xl font-semibold text-cargo-blue mt-6 mb-3">
                Service Highlights
              </h3>
              <ul className="list-disc pl-5 mb-6">
                <li>Door-to-door pickup and delivery</li>
                <li>Professional packing services</li>
                <li>Customs clearance assistance</li>
                <li>Real-time tracking</li>
                <li>Competitive rates</li>
              </ul>
              <h3 className="text-xl font-semibold text-cargo-blue mt-6 mb-3">
                Major Destinations in Pakistan
              </h3>
              <div className="grid grid-cols-2 gap-3">
                <Link to="/pakistan-cargo-to-karachi" className="bg-gray-50 p-3 rounded hover:bg-gray-100 transition-colors">
                  Karachi
                </Link>
                <Link to="/pakistan-cargo-to-lahore" className="bg-gray-50 p-3 rounded hover:bg-gray-100 transition-colors">
                  Lahore
                </Link>
                <Link to="/pakistan-cargo-to-islamabad" className="bg-gray-50 p-3 rounded hover:bg-gray-100 transition-colors">
                  Islamabad
                </Link>
                <Link to="/pakistan-cargo-to-peshawar" className="bg-gray-50 p-3 rounded hover:bg-gray-100 transition-colors">
                  Peshawar
                </Link>
              </div>
            </div>
            <div>
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-cargo-blue mb-4">
                  Get a Quote
                </h3>
                <p className="text-gray-600 mb-6">
                  {`Contact us today for a free quote on your cargo shipment from ${location.city} to Pakistan.`}
                </p>
                <form className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                  </div>
                  <Button className="bg-cargo-blue hover:bg-blue-700 text-white">
                    Submit
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Information Section */}
      <section className="page-section bg-gray-50">
        <div className="container-custom">
          <h2 className="text-2xl font-bold text-cargo-blue mb-4">
            {`Shipping from ${location.city} to Pakistan Made Easy`}
          </h2>
          <p className="text-gray-600">
            {`We simplify the process of shipping your cargo from ${location.city} to Pakistan. Our experienced team handles all the logistics, from pickup to delivery, ensuring a hassle-free experience for you.`}
          </p>
        </div>
      </section>
    </div>
  );
};

export default UAEToPakistanPage;
