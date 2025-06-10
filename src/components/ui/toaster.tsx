
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
import { canUseDOM } from "@/hooks/toast/toast-utils";

export function Toaster() {
  // Early return if React is not available or we're not in browser
  if (!canUseDOM() || typeof React === 'undefined' || !React || typeof React.useState !== 'function') {
    return null;
  }

  // Now we can safely use hooks since we've confirmed React is available
  const [mounted, setMounted] = React.useState(false);
  const [toasts, setToasts] = React.useState<any[]>([]);
  
  // Only run on client-side
  React.useEffect(() => {
    setMounted(true);
    
    // Get toasts from context after mounting
    if (canUseDOM()) {
      try {
        // For now, just use empty array to prevent errors
        // Later we can integrate with useToast when React is stable
        setToasts([]);
      } catch (error) {
        console.error("Failed to get toasts:", error);
        setToasts([]);
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
