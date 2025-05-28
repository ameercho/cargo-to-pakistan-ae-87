
import React from "react";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { Loader2 } from "lucide-react";
import { useQuoteForm } from "@/hooks/useQuoteForm";
import ContactFields from "@/components/forms/ContactFields";
import LocationFields from "@/components/forms/LocationFields";
import ServiceFields from "@/components/forms/ServiceFields";

const QuoteForm = () => {
  const { form, isSubmitting, onSubmit } = useQuoteForm();

  return (
    <div className="w-full max-w-md mx-auto bg-white rounded-xl shadow-lg border border-gray-100 p-8">
      <h2 className="text-2xl font-bold text-cargo-blue mb-6 text-center">Get a Free Quote</h2>
      
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
          <ContactFields control={form.control} />
          <LocationFields control={form.control} />
          <ServiceFields control={form.control} />
          
          <Button 
            type="submit" 
            className="w-full bg-cargo-orange hover:bg-orange-600 h-12 text-white font-medium rounded-lg shadow-md transition-all duration-200 hover:shadow-lg" 
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Processing...
              </>
            ) : "Get Free Quote"}
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default QuoteForm;
