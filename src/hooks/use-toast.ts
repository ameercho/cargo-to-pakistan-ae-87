
// Re-export from the toast module
import { useToast } from "./toast/use-toast";
import { toast } from "./toast/toast-utils";

// Only export if we're in a browser environment
export { useToast, toast };
