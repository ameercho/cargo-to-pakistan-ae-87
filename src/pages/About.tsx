
import { Button } from "@/components/ui/button";
import FloatingButton from "@/components/FloatingButton";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle, Users, Award, ShieldCheck, Map } from "lucide-react";

const About = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-12 bg-cargo-green text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-white">About CargoConnect</h1>
            <p className="text-xl text-gray-100 mb-6">
              Your trusted partner for cargo services to Pakistan
            </p>
            <div className="flex justify-center space-x-3">
              <div className="bg-white/20 px-4 py-2 rounded">Est. 2015</div>
              <div className="bg-white/20 px-4 py-2 rounded">5000+ Shipments</div>
              <div className="bg-white/20 px-4 py-2 rounded">100% Reliable</div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-cargo-blue mb-4">Our Story</h2>
              <p className="text-gray-600 mb-6">
                CargoConnect was founded in 2015 with a clear mission: to provide reliable, efficient, and affordable cargo services to Pakistan. What started as a small operation has grown into a trusted name in the shipping industry.
              </p>
              <p className="text-gray-600 mb-6">
                Our founders identified a gap in the market for quality cargo services to Pakistan, especially for individuals and small businesses who needed reliable shipping options without the complexity and high costs typically associated with international shipping.
              </p>
              <p className="text-gray-600">
                Today, we serve thousands of customers annually, helping them connect with family, friends, and business partners in Pakistan through our comprehensive cargo solutions.
              </p>
            </div>
            <div className="bg-gray-100 p-8 rounded-lg">
              <h3 className="text-xl font-bold text-cargo-blue mb-4">Our Core Values</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-cargo-green mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-cargo-blue">Reliability</h4>
                    <p className="text-gray-600">We deliver on our promises, ensuring your cargo reaches its destination safely and on time.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-cargo-green mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-cargo-blue">Transparency</h4>
                    <p className="text-gray-600">Clear communication and honest pricing are at the heart of our business.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-cargo-green mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-cargo-blue">Customer Focus</h4>
                    <p className="text-gray-600">Your needs drive our service offerings and improvements.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-cargo-green mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-cargo-blue">Excellence</h4>
                    <p className="text-gray-600">We continuously strive to improve and deliver the best possible service.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Stats */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-cargo-blue mb-3">Our Impact</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              The numbers that define our journey and commitment to quality service.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg text-center shadow-sm">
              <div className="bg-cargo-lightBlue rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-cargo-blue" />
              </div>
              <div className="text-4xl font-bold text-cargo-blue mb-2">5,000+</div>
              <div className="text-gray-600">Happy Customers</div>
            </div>
            
            <div className="bg-white p-6 rounded-lg text-center shadow-sm">
              <div className="bg-cargo-lightBlue rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Map className="h-8 w-8 text-cargo-blue" />
              </div>
              <div className="text-4xl font-bold text-cargo-blue mb-2">15+</div>
              <div className="text-gray-600">Service Locations</div>
            </div>
            
            <div className="bg-white p-6 rounded-lg text-center shadow-sm">
              <div className="bg-cargo-lightBlue rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <ShieldCheck className="h-8 w-8 text-cargo-blue" />
              </div>
              <div className="text-4xl font-bold text-cargo-blue mb-2">99%</div>
              <div className="text-gray-600">Delivery Success Rate</div>
            </div>
            
            <div className="bg-white p-6 rounded-lg text-center shadow-sm">
              <div className="bg-cargo-lightBlue rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-cargo-blue" />
              </div>
              <div className="text-4xl font-bold text-cargo-blue mb-2">8+</div>
              <div className="text-gray-600">Years of Experience</div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-cargo-blue mb-3">Our Leadership Team</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Meet the experienced professionals behind CargoConnect.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Mohammed Khan",
                position: "Founder & CEO",
                bio: "With over 15 years in logistics, Mohammed founded CargoConnect to provide reliable shipping services to Pakistan.",
              },
              {
                name: "Sarah Ahmed",
                position: "Operations Director",
                bio: "Sarah oversees all operational aspects, ensuring smooth and efficient cargo processing and delivery.",
              },
              {
                name: "James Wilson",
                position: "Customer Relations Manager",
                bio: "James leads our customer service team, focusing on providing exceptional support to all our clients.",
              },
            ].map((member, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                <div className="bg-gray-200 w-24 h-24 rounded-full mx-auto mb-4"></div>
                <h3 className="text-xl font-bold text-cargo-blue text-center mb-1">{member.name}</h3>
                <p className="text-cargo-green text-center mb-4">{member.position}</p>
                <p className="text-gray-600 text-center">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 bg-cargo-green text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-4 text-white">Ready to Experience Our Service?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers who trust us with their cargo to Pakistan.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/contact">
              <Button 
                className="bg-white text-cargo-green hover:bg-gray-100 tap-target" 
                size="lg"
              >
                Contact Us
              </Button>
            </Link>
            <Button 
              variant="outline" 
              className="bg-transparent border-white text-white hover:bg-white/10 tap-target" 
              size="lg"
            >
              Our Services <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      <FloatingButton />
    </div>
  );
};

export default About;
