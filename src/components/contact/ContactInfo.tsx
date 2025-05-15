
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail, MapPin, Clock, MessageSquare } from "lucide-react";

const ContactInfo = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: ["+971504948135"],
    },
    {
      icon: Mail,
      title: "Email",
      details: ["info@cargotopakistan.ae"],
    },
    {
      icon: MapPin,
      title: "Address",
      details: ["Jebel Ali Industrial, Dubai, UAE"],
    },
    {
      icon: Clock,
      title: "Working Hours",
      details: ["Monday - Friday: 9AM - 6PM", "Saturday: 10AM - 4PM"],
    },
  ];

  return (
    <div>
      <h2 className="text-3xl font-bold text-cargo-blue mb-6">Get in Touch</h2>
      <p className="text-gray-600 mb-8">
        Have questions about our services or need a quote? Contact us today and our friendly team will be happy to assist you.
      </p>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
        {contactInfo.map((item, index) => (
          <Card key={index} className="border-none shadow-sm">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="rounded-full bg-cargo-lightBlue p-3">
                  <item.icon className="h-5 w-5 text-cargo-blue" />
                </div>
                <div>
                  <h3 className="font-semibold text-cargo-blue mb-2">{item.title}</h3>
                  {item.details.map((detail, idx) => (
                    <p key={idx} className="text-gray-600">{detail}</p>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      
      <div className="bg-gray-100 p-6 rounded-lg">
        <h3 className="text-xl font-bold text-cargo-blue mb-4 flex items-center">
          <MessageSquare className="h-5 w-5 mr-2 text-cargo-green" />
          Live Chat Support
        </h3>
        <p className="text-gray-600 mb-4">
          Need immediate assistance? Our customer support team is available through live chat during business hours.
        </p>
        <Button 
          className="bg-cargo-green hover:bg-green-700 tap-target"
          onClick={() => window.open("https://wa.me/971504948135?text=Hello,%20I'm%20interested%20in%20your%20cargo%20services.", "_blank")}
        >
          Start Chat
        </Button>
      </div>
    </div>
  );
};

export default ContactInfo;
