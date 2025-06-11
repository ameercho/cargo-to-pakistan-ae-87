
import React from 'react';

interface PakistanCargoTestimonialsProps {
  city: string;
}

const PakistanCargoTestimonials: React.FC<PakistanCargoTestimonialsProps> = ({ city }) => {
  const testimonials = [
    {
      name: "Ahmed Z.",
      role: "Business Owner",
      initials: "AZ",
      bgColor: "bg-cargo-lightBlue",
      textColor: "text-cargo-blue",
      testimonial: `Their cargo service to ${city} is exceptional. My shipments always arrive on time and in perfect condition. Highly recommended!`
    },
    {
      name: "Sara K.",
      role: "Frequent Shipper",
      initials: "SK",
      bgColor: "bg-cargo-lightGreen",
      textColor: "text-cargo-green",
      testimonial: `I've been using their services for 2 years now. The team is responsive, and their rates to ${city} are very competitive.`
    },
    {
      name: "Mohammed F.",
      role: "Expat Returning Home",
      initials: "MF",
      bgColor: "bg-cargo-lightOrange",
      textColor: "text-cargo-orange",
      testimonial: `When I moved back to ${city}, they handled all my household goods with care. Everything arrived intact and on time.`
    }
  ];

  const renderStars = () => (
    <div className="mt-4 flex">
      {[...Array(5)].map((_, i) => (
        <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
        </svg>
      ))}
    </div>
  );

  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <span className="text-cargo-green bg-cargo-lightGreen px-3 py-1 rounded-full text-sm font-medium">Testimonials</span>
          <h2 className="text-2xl font-bold text-cargo-blue mt-3 mb-3">What Our Clients Say About Our {city} Service</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="mr-4">
                  <div className={`h-12 w-12 rounded-full ${testimonial.bgColor} flex items-center justify-center ${testimonial.textColor} font-bold`}>
                    {testimonial.initials}
                  </div>
                </div>
                <div>
                  <h4 className="font-medium">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "{testimonial.testimonial}"
              </p>
              {renderStars()}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PakistanCargoTestimonials;
