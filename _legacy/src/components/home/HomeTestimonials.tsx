
import TestimonialCard from "@/components/TestimonialCard";

const HomeTestimonials = () => {
  const testimonials = [
    {
      name: "Ahmed Khan",
      position: "Business Owner",
      testimonial: "Cargo to Pakistan made shipping to Pakistan incredibly easy. Their rates are competitive and service is excellent!",
      rating: 5,
    },
    {
      name: "Sarah Johnson",
      position: "Student",
      testimonial: "I needed to ship personal items to family in Lahore. The process was smooth and everything arrived on time.",
      rating: 4,
    },
    {
      name: "Muhammad Ali",
      position: "Importer",
      testimonial: "We've been using Cargo to Pakistan for our business shipments for over 2 years. Their service is consistent and reliable.",
      rating: 5,
    },
  ];
  
  return (
    <section className="py-16 bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-cargo-blue mb-3">Customer Testimonials</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Hear what our customers have to say about our cargo services to Pakistan.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              name={testimonial.name}
              position={testimonial.position}
              testimonial={testimonial.testimonial}
              rating={testimonial.rating}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeTestimonials;
