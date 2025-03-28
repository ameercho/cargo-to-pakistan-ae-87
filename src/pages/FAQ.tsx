
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import FloatingButton from "@/components/FloatingButton";
import { useState } from "react";
import { Search, HelpCircle } from "lucide-react";
import { Link } from "react-router-dom";

const FAQ = () => {
  const [searchQuery, setSearchQuery] = useState("");
  
  const faqCategories = [
    {
      title: "Shipping Process",
      faqs: [
        {
          question: "How do I request a quote for shipping to Pakistan?",
          answer: "You can request a quote by filling out our online quote form, calling our customer service, or visiting our office. We'll need information about what you're shipping, the weight, dimensions, and destination in Pakistan to provide an accurate quote."
        },
        {
          question: "What documents are required for shipping to Pakistan?",
          answer: "Required documents typically include a valid ID, a detailed inventory list, the receiver's contact information, and a completed shipping form. For commercial shipments, additional documentation like commercial invoices and certificates of origin may be required."
        },
        {
          question: "How long does shipping to Pakistan take?",
          answer: "Shipping times vary based on the service you choose. Air freight typically takes 2-5 business days, while sea freight can take 25-40 days. Express services may deliver in as little as 1-3 days for urgent shipments."
        },
      ]
    },
    {
      title: "Services & Pricing",
      faqs: [
        {
          question: "What shipping methods do you offer to Pakistan?",
          answer: "We offer air freight, sea freight, and road transport services to Pakistan. Each option has different pricing, transit times, and weight/size limitations to suit different shipping needs."
        },
        {
          question: "Do you offer insurance for shipments?",
          answer: "Yes, we offer comprehensive insurance coverage for all shipments. The cost is typically a percentage of the declared value. We highly recommend insurance for valuable or fragile items."
        },
        {
          question: "How is shipping cost calculated?",
          answer: "Shipping costs are calculated based on the weight, dimensions (volumetric weight), destination in Pakistan, shipping method, and any additional services required. We provide transparent pricing with no hidden fees."
        },
      ]
    },
    {
      title: "Tracking & Delivery",
      faqs: [
        {
          question: "How can I track my shipment?",
          answer: "You can track your shipment using the tracking number provided in your confirmation email. Enter this number on our website's tracking page for real-time updates on your cargo's location and status."
        },
        {
          question: "What happens if no one is available to receive the shipment?",
          answer: "If the recipient is not available at the time of delivery, our delivery team will leave a notification and attempt delivery again. After multiple failed attempts, the package will be held at a local facility for pickup."
        },
        {
          question: "Do you offer door-to-door delivery in Pakistan?",
          answer: "Yes, we offer door-to-door delivery services to most areas in Pakistan. For remote locations, we may work with local partners to ensure your cargo reaches its final destination safely."
        },
      ]
    },
    {
      title: "Customs & Regulations",
      faqs: [
        {
          question: "How do customs clearance procedures work?",
          answer: "Our team handles the customs clearance process, preparing and submitting all necessary documentation. Customs in Pakistan will inspect the shipment and may apply duties or taxes which are typically the responsibility of the recipient."
        },
        {
          question: "Are there any prohibited items I cannot ship to Pakistan?",
          answer: "Yes, prohibited items include weapons, illegal drugs, pornography, alcohol, pork products, and certain electronic devices. Additionally, there are restrictions on shipping currency, jewelry, and certain medications."
        },
        {
          question: "Will I have to pay customs duties and taxes?",
          answer: "Yes, most shipments to Pakistan are subject to customs duties and taxes, which are typically paid by the recipient upon delivery. The amount depends on the type and value of goods being shipped."
        },
      ]
    },
  ];

  // Filter FAQs based on search query
  const filteredFAQs = searchQuery 
    ? faqCategories.map(category => ({
        ...category,
        faqs: category.faqs.filter(faq => 
          faq.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
          faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
        )
      })).filter(category => category.faqs.length > 0)
    : faqCategories;

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-12 bg-cargo-blue text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h1>
            <p className="text-xl text-gray-100 mb-8">
              Find answers to common questions about our cargo services to Pakistan
            </p>
            
            <div className="relative max-w-xl mx-auto">
              <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <Input
                type="text"
                placeholder="Search for answers..."
                className="pl-10 bg-white/10 border-white/20 text-white placeholder:text-gray-300 tap-target"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            {filteredFAQs.length > 0 ? (
              filteredFAQs.map((category, index) => (
                <div key={index} className="mb-12">
                  <h2 className="text-2xl font-bold text-cargo-blue mb-6">{category.title}</h2>
                  
                  <Accordion type="single" collapsible className="space-y-4">
                    {category.faqs.map((faq, faqIndex) => (
                      <AccordionItem key={faqIndex} value={`${index}-${faqIndex}`} className="border rounded-lg p-1">
                        <AccordionTrigger className="text-left font-medium text-cargo-blue px-4 tap-target">
                          {faq.question}
                        </AccordionTrigger>
                        <AccordionContent className="px-4 text-gray-600">
                          {faq.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              ))
            ) : (
              <div className="text-center py-12">
                <HelpCircle className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-cargo-blue mb-2">No results found</h3>
                <p className="text-gray-600 mb-6">
                  We couldn't find any FAQs matching your search query. Please try a different search or browse our categories.
                </p>
                <Button 
                  variant="outline" 
                  onClick={() => setSearchQuery("")}
                  className="tap-target"
                >
                  Clear Search
                </Button>
              </div>
            )}
            
            {/* Can't find answer section */}
            <div className="mt-16 bg-gray-50 p-8 rounded-lg text-center">
              <h3 className="text-xl font-bold text-cargo-blue mb-3">Can't find what you're looking for?</h3>
              <p className="text-gray-600 mb-6">
                If you couldn't find an answer to your question, please don't hesitate to contact us directly.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link to="/contact">
                  <Button className="bg-cargo-blue hover:bg-blue-800 tap-target">
                    Contact Us
                  </Button>
                </Link>
                <Button 
                  variant="outline"
                  className="tap-target"
                >
                  Live Chat
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FloatingButton />
    </div>
  );
};

export default FAQ;
