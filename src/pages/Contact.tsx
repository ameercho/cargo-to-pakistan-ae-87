import React from "react";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-cargo-blue to-blue-800 text-white py-20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">
              Contact <span className="text-cargo-orange">Us</span>
            </h1>
            <p className="text-xl text-blue-100">
              Get in touch for your cargo shipping needs
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-bold text-cargo-blue mb-8">Get in Touch</h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-cargo-lightBlue p-3 rounded-full">
                    <Phone className="h-6 w-6 text-cargo-blue" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-cargo-blue mb-2">Phone</h3>
                    <p className="text-gray-600">+971504948135</p>
                    <p className="text-sm text-gray-500">Available 24/7 for urgent shipments</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-cargo-lightGreen p-3 rounded-full">
                    <Mail className="h-6 w-6 text-cargo-green" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-cargo-blue mb-2">Email</h3>
                    <p className="text-gray-600">info@cargotopakistan.ae</p>
                    <p className="text-sm text-gray-500">We respond within 2 hours</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-orange-100 p-3 rounded-full">
                    <MapPin className="h-6 w-6 text-cargo-orange" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-cargo-blue mb-2">Location</h3>
                    <p className="text-gray-600">Dubai, United Arab Emirates</p>
                    <p className="text-sm text-gray-500">Serving all UAE emirates</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-cargo-lightBlue p-3 rounded-full">
                    <Clock className="h-6 w-6 text-cargo-blue" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-cargo-blue mb-2">Hours</h3>
                    <p className="text-gray-600">24/7 Service Available</p>
                    <p className="text-sm text-gray-500">Emergency pickups anytime</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-cargo-blue mb-6">Send us a Message</h3>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cargo-blue"
                      placeholder="Your first name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cargo-blue"
                      placeholder="Your last name"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cargo-blue"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cargo-blue"
                    placeholder="+971 50 123 4567"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cargo-blue"
                    placeholder="Tell us about your cargo shipping needs..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-cargo-blue hover:bg-blue-800 text-white py-3 px-4 rounded-md font-semibold transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;