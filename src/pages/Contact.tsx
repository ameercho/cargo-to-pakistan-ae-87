
import ContactHero from "@/components/contact/ContactHero";
import ContactForm from "@/components/contact/ContactForm";
import ContactInfo from "@/components/contact/ContactInfo";
import ContactMap from "@/components/contact/ContactMap";
import FloatingButton from "@/components/FloatingButton";

const Contact = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <ContactHero />

      {/* Contact Information and Form */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <ContactInfo />
            <div className="bg-white shadow-lg rounded-lg p-1">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <ContactMap />

      <FloatingButton />
    </div>
  );
};

export default Contact;
