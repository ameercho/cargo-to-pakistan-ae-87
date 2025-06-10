
const FAQSection = () => {
  const faqs = [
    {
      question: "What are your cargo rates to Pakistan?",
      answer: "Our Pakistan cargo rates vary based on weight, dimensions, and shipping method. We offer competitive pricing for sea cargo to Pakistan, air cargo to Pakistan, and door-to-door cargo to Pakistan services."
    },
    {
      question: "Do you offer door-to-door cargo to Pakistan?",
      answer: "Yes, we provide comprehensive door-to-door cargo to Pakistan services from all UAE cities including Dubai, Abu Dhabi, Sharjah, and Ajman with pickup and delivery to your specified addresses."
    },
    {
      question: "How long does cargo from Dubai to Pakistan take?",
      answer: "Delivery times for Pakistan cargo Dubai services range from 3-5 days for air cargo to Pakistan to 15-20 days for sea cargo to Pakistan, depending on the destination city and shipping method chosen."
    },
    {
      question: "What items can I send via Pakistan cargo services?",
      answer: "Our Pakistan cargo services accept household items, electronics, documents, personal belongings, and commercial goods. We provide specialized packing for fragile items and ensure secure handling throughout the journey."
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-cargo-blue mb-12">
            Frequently Asked Questions - Pakistan Cargo Services
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-semibold text-lg text-cargo-blue mb-3">{faq.question}</h3>
                <p className="text-gray-700">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
