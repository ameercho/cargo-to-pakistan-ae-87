
// Only export toast functions from the module
import { toast } from "./toast/toast-utils";
import type { ToastProps } from "@/components/ui/toast";

// Enhanced check for browser environment
const isBrowser = typeof window !== 'undefined' && 
                 typeof document !== 'undefined' && 
                 document.createElement !== undefined;

// If we're in SSR, provide a simple implementation
const ssrToast = {
  toast: (props: ToastProps) => {
    if (isBrowser) {
      return toast(props);
    }
    return { id: "0", dismiss: () => {}, update: () => {} };
  },
  useToast: () => ({
    toast: (props: ToastProps) => {
      if (isBrowser) {
        return toast(props);
      }
      return { id: "0", dismiss: () => {}, update: () => {} };
    },
    dismiss: () => {},
    toasts: []
  })
};

// Safe import of useToast for browser environments only
let useToastImport;

if (isBrowser) {
  // Only attempt to import in browser environment
  try {
    useToastImport = require('./toast/use-toast').useToast;
  } catch (e) {
    console.error("Failed to import useToast:", e);
    useToastImport = ssrToast.useToast;
  }
} else {
  useToastImport = ssrToast.useToast;
}

// Export the functions - use real implementations in browser, SSR-safe versions in Node
export const useToast = isBrowser ? useToastImport : ssrToast.useToast;
export { toast };
