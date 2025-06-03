
import { CheckCircle } from "lucide-react";

const ServicesContent = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-cargo-blue mb-8 text-center">
            Comprehensive Cargo Solutions for Every Need
          </h2>
          
          <div className="prose prose-lg max-w-none text-gray-700 mb-12">
            <p className="text-lg leading-relaxed mb-6">
              At Cargo to Pakistan, we understand that every shipment is unique and requires specialized handling. Our comprehensive range of cargo services is designed to accommodate various shipping requirements, from urgent documents to large household relocations. With over a decade of experience in UAE-Pakistan logistics, we have developed efficient systems and partnerships that ensure your cargo reaches its destination safely and on time.
            </p>
            
            <p className="leading-relaxed mb-6">
              Our service portfolio includes multiple shipping options to suit different budgets and timeframes. Whether you need cost-effective sea freight for bulk shipments, rapid air freight for time-sensitive cargo, or specialized services for delicate items, our expert team will recommend the best solution for your specific requirements. We pride ourselves on transparent pricing, reliable schedules, and exceptional customer service throughout the shipping process.
            </p>
            
            <p className="leading-relaxed mb-8">
              Every service we offer includes professional packaging assessment, secure handling protocols, customs clearance assistance, and real-time tracking capabilities. Our extensive network spans all seven emirates of the UAE and covers major cities and remote areas across Pakistan, ensuring comprehensive coverage for your cargo shipping needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-cargo-blue mb-4">Why Our Services Stand Out</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-cargo-green mt-0.5 flex-shrink-0" />
                  <span>Professional packaging services with quality materials and expert techniques</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-cargo-green mt-0.5 flex-shrink-0" />
                  <span>Comprehensive insurance options to protect your valuable shipments</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-cargo-green mt-0.5 flex-shrink-0" />
                  <span>Real-time tracking system with regular status updates</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-cargo-green mt-0.5 flex-shrink-0" />
                  <span>Dedicated customer support team available throughout the shipping process</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-cargo-blue mb-4">Service Coverage Areas</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-cargo-green mt-0.5 flex-shrink-0" />
                  <span>Complete UAE coverage: Dubai, Abu Dhabi, Sharjah, Ajman, Ras Al Khaimah, Fujairah, Umm Al Quwain</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-cargo-green mt-0.5 flex-shrink-0" />
                  <span>Major Pakistan cities: Karachi, Lahore, Islamabad, Peshawar, Quetta, Faisalabad, Multan</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-cargo-green mt-0.5 flex-shrink-0" />
                  <span>Remote areas and smaller cities across all provinces of Pakistan</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-cargo-green mt-0.5 flex-shrink-0" />
                  <span>Door-to-door service available in most locations with local delivery partnerships</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesContent;
