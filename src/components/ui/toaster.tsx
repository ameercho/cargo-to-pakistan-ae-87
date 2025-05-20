
"use client";

import {
  Toast,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
} from "@/components/ui/toast";
import * as React from "react";

// Only import useToast directly in a client component
export function Toaster() {
  // Track if component is mounted on client
  const [mounted, setMounted] = React.useState(false);
  
  // Only run on client-side
  React.useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);
  
  // Return empty during SSR or before mounting
  if (!mounted) {
    return null;
  }
  
  // Dynamic import to ensure it only runs on client
  // Using require instead of import for client-side only execution
  const { useToast } = require("@/hooks/use-toast");
  const { toasts } = useToast();

  return (
    <ToastProvider>
      {toasts.map(function ({ id, title, description, action, ...props }) {
        return (
          <Toast key={id} {...props}>
            <div className="grid gap-1">
              {title && <ToastTitle>{title}</ToastTitle>}
              {description && (
                <ToastDescription>{description}</ToastDescription>
              )}
            </div>
            {action}
            <ToastClose />
          </Toast>
        )
      })}
      <ToastViewport />
    </ToastProvider>
  )
}
