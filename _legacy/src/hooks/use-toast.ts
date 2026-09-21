// Simplified ESM re-exports to avoid duplicate React instances
// and invalid hook calls caused by dynamic CJS require.

export { toast } from "./toast/toast-utils";
export type { ToastProps } from "@/components/ui/toast";

// Directly re-export the hook implementation. It already guards for SSR/client.
export { useToast } from "./toast/use-toast";
