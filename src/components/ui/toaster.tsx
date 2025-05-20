
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
import { useToast } from "@/hooks/use-toast";

export function Toaster() {
  // Track if component is mounted on client
  const [mounted, setMounted] = React.useState(false);
  const [toastState, setToastState] = React.useState({ toasts: [] });
  
  // Only run on client-side
  React.useEffect(() => {
    setMounted(true);
    
    // Get toasts from context after mounting
    if (typeof window !== 'undefined') {
      try {
        const { toasts } = useToast();
        setToastState({ toasts });
      } catch (error) {
        console.error("Failed to get toasts:", error);
      }
    }
    
    return () => setMounted(false);
  }, []);
  
  // Return empty during SSR or before mounting
  if (!mounted) {
    return null;
  }
  
  return (
    <ToastProvider>
      {toastState.toasts.map(function ({ id, title, description, action, ...props }) {
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
