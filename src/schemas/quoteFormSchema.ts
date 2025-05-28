
import { z } from "zod";

export const quoteFormSchema = z.object({
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

export type QuoteFormValues = z.infer<typeof quoteFormSchema>;

export const defaultValues: QuoteFormValues = {
  name: "",
  email: "",
  phone: "",
  fromLocation: "",
  toLocation: "Pakistan",
  serviceType: "",
  weight: "",
  description: "",
};
