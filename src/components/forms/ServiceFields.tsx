
import React from "react";
import { Control } from "react-hook-form";
import {
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
import { QuoteFormValues } from "@/schemas/quoteFormSchema";

interface ServiceFieldsProps {
  control: Control<QuoteFormValues>;
}

const ServiceFields: React.FC<ServiceFieldsProps> = ({ control }) => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <FormField
          control={control}
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
          control={control}
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
        control={control}
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
    </>
  );
};

export default ServiceFields;
