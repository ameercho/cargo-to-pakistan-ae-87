import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

const ThankYou = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8 text-center">
        <div className="mb-6">
          <CheckCircle className="h-16 w-16 text-cargo-green mx-auto mb-4" />
          <h1 className="text-2xl font-bold text-cargo-blue mb-2">Thank You!</h1>
          <p className="text-gray-600">
            Your message has been submitted successfully. We'll get back to you soon.
          </p>
        </div>
        
        <div className="space-y-4">
          <p className="text-sm text-gray-500">
            We typically respond within 24 hours during business days.
          </p>
          
          <div className="flex gap-4 justify-center">
            <Link to="/">
              <Button className="bg-cargo-blue hover:bg-blue-800">
                Back to Home
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" className="border-cargo-blue text-cargo-blue hover:bg-cargo-blue hover:text-white">
                Contact Us Again
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThankYou;