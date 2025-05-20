
// Only export toast functions from the module
import { useToast } from "./toast/use-toast";
import { toast } from "./toast/toast-utils";
import type { ToastProps } from "@/components/ui/toast";

// Check if we're in a browser environment before exporting
const isBrowser = typeof window !== 'undefined';

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

// Export the functions - use real implementations in browser, SSR-safe versions in Node
export const { useToast: useToastExport, toast: toastExport } = isBrowser 
  ? { useToast, toast } 
  : ssrToast;

export { useToastExport as useToast, toastExport as toast };
