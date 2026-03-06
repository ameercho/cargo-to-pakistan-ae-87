import { useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue 
} from "@/components/ui/select";
import { useToast } from "@/components/ui/use-toast";
import { Loader2 } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  phone: z.string().min(10, { message: "Please enter a valid phone number" }),
  fromLocation: z.string().min(2, { message: "Please enter a valid location" }),
  toLocation: z.string().min(2, { message: "Please enter a valid location" }).default("Pakistan"),
  serviceType: z.string({
    required_error: "Please select a service type",
  }),
  weight: z.string().min(1, { message: "Please enter the approximate weight" }),
  description: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

const QuoteForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const { toast } = useToast();

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      fromLocation: "",
      toLocation: "Pakistan",
      serviceType: "",
      weight: "",
      description: "",
    },
  });

  const onSubmit = async (values: FormValues) => {
    setIsSubmitting(true);
    try {
      const formData = new FormData();
      formData.append("form-name", "quote");
      Object.entries(values).forEach(([key, value]) => {
        formData.append(key, value || "");
      });

      await fetch("/", {
        method: "POST",
        body: formData,
      });

      setSubmitted(true);
      toast({
        title: "Quote Request Submitted!",
        description: "We'll get back to you with a quotation shortly.",
      });

      form.reset();
      
      // Redirect to thank-you page after a short delay
      setTimeout(() => {
        window.location.href = "/thank-you";
      }, 1500);

    } catch (error) {
      toast({
        title: "Submission Error",
        description: "There was a problem. Please try again or use WhatsApp.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold text-cargo-blue mb-6">Get a Free Quote</h2>
      
      <Form {...form}>
        <form 
          onSubmit={form.handleSubmit(onSubmit)} 
          className="space-y-4"
          data-netlify="true"
          name="quote"
          data-netlify-honeypot="bot-field"
        >
          {/* Netlify Hidden Fields */}
          <input type="hidden" name="form-name" value="quote" />
          <p className="hidden">
            <label>Don’t fill this out: <input name="bot-field" /></label>
          </p>
          
          {/* ServiceType Hidden Input for Netlify Detection */}
          <input 
            type="hidden" 
            name="serviceType" 
            value={form.watch("serviceType") || ""} 
          />

          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input placeholder="John Doe" {...field} className="tap-target" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="you@example.com" {...field} className="tap-target" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone</FormLabel>
                  <FormControl>
                    <Input placeholder="+92 300 1234567" {...field} className="tap-target" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="fromLocation"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>From Location</FormLabel>
                  <FormControl>
                    <Input placeholder="City, UAE" {...field} className="tap-target" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="toLocation"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>To Location</FormLabel>
                  <FormControl>
                    <Input {...field} className="tap-target" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="serviceType"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Service Type</FormLabel>
                  <Select onValueChange={field.onChange} value={field.value}>
                    <FormControl>
                      <SelectTrigger className="tap-target">
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="air">Air Freight</SelectItem>
                      <SelectItem value="sea">Sea Freight</SelectItem>
                      <SelectItem value="road">Road Transport</SelectItem>
                      <SelectItem value="express">Express Delivery</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="weight"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Approx. Weight (kg)</FormLabel>
                  <FormControl>
                    <Input type="text" placeholder="Enter weight" {...field} className="tap-target" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Additional Details (Optional)</FormLabel>
                <FormControl>
                  <Textarea 
                    placeholder="Tell us more about your shipment..." 
                    className="resize-none tap-target" 
                    {...field} 
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <Button 
            type="submit" 
            className="w-full bg-cargo-orange hover:bg-orange-600 tap-target py-6 text-lg font-semibold" 
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                Processing Request...
              </>
            ) : "Get Free Quote"}
          </Button>
          
          {submitted && (
            <p className="text-center text-sm text-green-600 mt-2 font-medium">
              Redirecting you to the thank-you page...
            </p>
          )}
        </form>
      </Form>
    </div>
  );
};

export default QuoteForm;