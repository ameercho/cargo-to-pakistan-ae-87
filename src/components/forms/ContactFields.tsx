
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

interface ContactFieldsProps {
  control: Control<QuoteFormValues>;
}

const ContactFields: React.FC<ContactFieldsProps> = ({ control }) => {
  return (
    <>
      <FormField
        control={control}
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
          control={control}
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
          control={control}
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
    </>
  );
};

export default ContactFields;
