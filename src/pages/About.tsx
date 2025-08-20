import React from "react";
import { Shield, Clock, Users, Award } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-cargo-blue to-blue-800 text-white py-20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">
              About <span className="text-cargo-orange">Us</span>
            </h1>
            <p className="text-xl text-blue-100">
              Your trusted partner for UAE to Pakistan cargo services
            </p>
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="py-16">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-cargo-blue mb-6">
                Leading Cargo Services Since 2010
              </h2>
              <p className="text-lg text-gray-600">
                We have been serving the UAE-Pakistan cargo corridor for over a decade, 
                helping thousands of customers ship their belongings safely and affordably.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              <div className="text-center">
                <div className="bg-cargo-lightBlue rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-cargo-blue" />
                </div>
                <h3 className="text-xl font-semibold text-cargo-blue mb-2">Secure</h3>
                <p className="text-gray-600">Safe and secure handling of all cargo</p>
              </div>

              <div className="text-center">
                <div className="bg-cargo-lightGreen rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-8 w-8 text-cargo-green" />
                </div>
                <h3 className="text-xl font-semibold text-cargo-blue mb-2">Reliable</h3>
                <p className="text-gray-600">On-time delivery you can count on</p>
              </div>

              <div className="text-center">
                <div className="bg-orange-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-cargo-orange" />
                </div>
                <h3 className="text-xl font-semibold text-cargo-blue mb-2">Professional</h3>
                <p className="text-gray-600">Expert team with years of experience</p>
              </div>

              <div className="text-center">
                <div className="bg-cargo-lightBlue rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-cargo-blue" />
                </div>
                <h3 className="text-xl font-semibold text-cargo-blue mb-2">Trusted</h3>
                <p className="text-gray-600">Thousands of satisfied customers</p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-cargo-blue mb-6">Our Story</h3>
              <div className="space-y-4 text-gray-600">
                <p>
                  Founded in 2010, Cargo to Pakistan began as a small family business with a simple mission: 
                  to provide reliable and affordable cargo services between the UAE and Pakistan.
                </p>
                <p>
                  Over the years, we have grown to become one of the most trusted names in the UAE-Pakistan 
                  cargo industry, serving customers across all seven emirates and delivering to every corner of Pakistan.
                </p>
                <p>
                  Our success is built on our commitment to customer satisfaction, competitive pricing, 
                  and the security of your valuable shipments. We understand the importance of your cargo, 
                  whether it's personal belongings, commercial goods, or precious memories.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;