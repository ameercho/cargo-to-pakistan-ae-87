
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

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    
    // Simulate API call
    try {
      // In a real app, you would make an API call here
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      console.log("Form submitted with data:", data);
      
      toast({
        title: "Quote Request Submitted!",
        description: "We'll get back to you with a quotation shortly.",
        variant: "default",
      });
      
      // Reset form
      form.reset();
    } catch (error) {
      toast({
        title: "Error",
        description: "There was a problem submitting your request. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto bg-white rounded-xl shadow-lg border border-gray-100 p-8">
      <h2 className="text-2xl font-bold text-cargo-blue mb-6 text-center">Get a Free Quote</h2>
      
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-700 font-medium">Name</FormLabel>
                <FormControl>
                  <Input 
                    placeholder="John Doe" 
                    {...field} 
                    className="bg-white border-gray-200 focus:border-cargo-blue focus:ring-cargo-blue/20 h-11 text-gray-900 placeholder:text-gray-500" 
                  />
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
                  <FormLabel className="text-gray-700 font-medium">Email</FormLabel>
                  <FormControl>
                    <Input 
                      placeholder="you@example.com" 
                      {...field} 
                      className="bg-white border-gray-200 focus:border-cargo-blue focus:ring-cargo-blue/20 h-11 text-gray-900 placeholder:text-gray-500" 
                    />
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
                  <FormLabel className="text-gray-700 font-medium">Phone</FormLabel>
                  <FormControl>
                    <Input 
                      placeholder="+92 300 1234567" 
                      {...field} 
                      className="bg-white border-gray-200 focus:border-cargo-blue focus:ring-cargo-blue/20 h-11 text-gray-900 placeholder:text-gray-500" 
                    />
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
                  <FormLabel className="text-gray-700 font-medium">From Location</FormLabel>
                  <FormControl>
                    <Input 
                      placeholder="City, Country" 
                      {...field} 
                      className="bg-white border-gray-200 focus:border-cargo-blue focus:ring-cargo-blue/20 h-11 text-gray-900 placeholder:text-gray-500" 
                    />
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
                  <FormLabel className="text-gray-700 font-medium">To Location</FormLabel>
                  <FormControl>
                    <Input 
                      defaultValue="Pakistan" 
                      {...field} 
                      className="bg-white border-gray-200 focus:border-cargo-blue focus:ring-cargo-blue/20 h-11 text-gray-900 placeholder:text-gray-500" 
                    />
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
                  <FormLabel className="text-gray-700 font-medium">Service Type</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger className="bg-white border-gray-200 focus:border-cargo-blue focus:ring-cargo-blue/20 h-11 text-gray-900">
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent className="bg-white border-gray-200 shadow-lg">
                      <SelectItem value="air" className="hover:bg-gray-50">Air Freight</SelectItem>
                      <SelectItem value="sea" className="hover:bg-gray-50">Sea Freight</SelectItem>
                      <SelectItem value="road" className="hover:bg-gray-50">Road Transport</SelectItem>
                      <SelectItem value="express" className="hover:bg-gray-50">Express Delivery</SelectItem>
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
                  <FormLabel className="text-gray-700 font-medium">Approx. Weight (kg)</FormLabel>
                  <FormControl>
                    <Input 
                      type="text" 
                      placeholder="Enter weight" 
                      {...field} 
                      className="bg-white border-gray-200 focus:border-cargo-blue focus:ring-cargo-blue/20 h-11 text-gray-900 placeholder:text-gray-500" 
                    />
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
                <FormLabel className="text-gray-700 font-medium">Additional Details (Optional)</FormLabel>
                <FormControl>
                  <Textarea 
                    placeholder="Tell us more about your shipment..." 
                    className="bg-white border-gray-200 focus:border-cargo-blue focus:ring-cargo-blue/20 resize-none min-h-[100px] text-gray-900 placeholder:text-gray-500" 
                    {...field} 
                  />
                </FormControl>
                <FormDescription className="text-gray-500 text-sm">
                  Include any specific requirements or questions.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          
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
