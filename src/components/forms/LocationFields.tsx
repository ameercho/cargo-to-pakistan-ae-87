
import React from "react";
import { Control } from "react-hook-form";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { QuoteFormValues } from "@/schemas/quoteFormSchema";

interface LocationFieldsProps {
  control: Control<QuoteFormValues>;
}

const LocationFields: React.FC<LocationFieldsProps> = ({ control }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <FormField
        control={control}
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
        control={control}
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
  );
};

export default LocationFields;
