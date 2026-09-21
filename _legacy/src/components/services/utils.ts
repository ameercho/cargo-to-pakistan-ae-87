
/**
 * Services page utility functions and constants
 */
import { CheckCircle, Shield, Clock, Globe } from "lucide-react";

/**
 * Service features configuration for the hero section
 */
export const SERVICE_FEATURES = [
  {
    icon: Globe,
    title: "Worldwide Coverage",
    description: "All UAE cities to Pakistan destinations"
  },
  {
    icon: Shield,
    title: "Secure Handling", 
    description: "Professional packaging and protection"
  },
  {
    icon: Clock,
    title: "Timely Delivery",
    description: "Reliable schedules and tracking"
  },
  {
    icon: CheckCircle,
    title: "Quality Service",
    description: "Dedicated customer support team"
  }
] as const;

/**
 * Re-export phone number from main constants
 */
import { CONTACT_INFO } from "@/constants";
export const PHONE_NUMBER = CONTACT_INFO.phone;
