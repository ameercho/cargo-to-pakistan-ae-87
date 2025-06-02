
import { CheckCircle, Globe, Shield, Clock } from "lucide-react";

const ContentSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-cargo-blue mb-6 text-center">
            Leading Cargo Shipping Company from UAE to Pakistan
          </h2>
          
          <div className="prose prose-lg max-w-none text-gray-700 mb-12">
            <p className="text-lg leading-relaxed mb-6">
              At Cargo to Pakistan, we are your trusted partner for reliable and efficient cargo shipping services from the United Arab Emirates to Pakistan. With years of experience in international logistics, we understand the unique requirements of shipping goods across borders and provide comprehensive solutions tailored to your specific needs.
            </p>
            
            <p className="leading-relaxed mb-6">
              Our extensive network covers all major cities in the UAE including Dubai, Abu Dhabi, Sharjah, Ajman, Ras Al Khaimah, Fujairah, and Umm Al Quwain, with seamless delivery to destinations across Pakistan including Karachi, Lahore, Islamabad, Peshawar, Quetta, Faisalabad, Multan, Sialkot, Rawalpindi, Gujranwala, Hyderabad, and many more cities.
            </p>
            
            <p className="leading-relaxed mb-8">
              Whether you're an individual looking to send personal belongings to family members, a business requiring regular commercial shipments, or someone relocating to Pakistan, our diverse range of services including sea freight, air freight, full container loads, express courier, and specialized moving services ensure that your cargo reaches its destination safely and on time.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="text-center">
              <div className="bg-cargo-lightGreen rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Globe className="h-8 w-8 text-cargo-green" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Nationwide Coverage</h3>
              <p className="text-gray-600 text-sm">Complete coverage across UAE and Pakistan with door-to-door delivery options available in all major cities and remote areas.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-cargo-lightBlue rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Shield className="h-8 w-8 text-cargo-blue" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Secure Handling</h3>
              <p className="text-gray-600 text-sm">Professional packaging and secure handling protocols ensure your valuable items are protected throughout the shipping process.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-orange-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Clock className="h-8 w-8 text-cargo-orange" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Timely Delivery</h3>
              <p className="text-gray-600 text-sm">Reliable delivery schedules with real-time tracking and regular updates to keep you informed about your shipment status.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-cargo-lightGreen rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <CheckCircle className="h-8 w-8 text-cargo-green" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Quality Service</h3>
              <p className="text-gray-600 text-sm">Exceptional customer service with dedicated support team available to assist you throughout your shipping experience.</p>
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-cargo-blue mb-4">Why Choose Our Cargo Services?</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-lg mb-3">Comprehensive Shipping Solutions</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-cargo-green mt-0.5 flex-shrink-0" />
                    <span>Sea freight for cost-effective bulk shipments</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-cargo-green mt-0.5 flex-shrink-0" />
                    <span>Air freight for urgent and time-sensitive cargo</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-cargo-green mt-0.5 flex-shrink-0" />
                    <span>Full container loads for large volume shipments</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-cargo-green mt-0.5 flex-shrink-0" />
                    <span>Express courier services for documents and small packages</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-3">Additional Services</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-cargo-green mt-0.5 flex-shrink-0" />
                    <span>Professional packaging and crating services</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-cargo-green mt-0.5 flex-shrink-0" />
                    <span>Customs clearance and documentation assistance</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-cargo-green mt-0.5 flex-shrink-0" />
                    <span>Cargo insurance for valuable shipments</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-cargo-green mt-0.5 flex-shrink-0" />
                    <span>Warehousing and storage solutions</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContentSection;
