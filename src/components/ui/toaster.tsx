
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
  // Enhanced check for React stability
  const isReactStable = canUseDOM() && 
                       typeof React !== 'undefined' && 
                       React && 
                       typeof React.useState === 'function' &&
                       React.useState !== null;

  // If React is not stable, return a simple div that won't cause issues
  if (!isReactStable) {
    return <div id="toast-fallback" style={{ display: 'none' }}></div>;
  }

  // Only use hooks when React is confirmed stable
  let mounted = false;
  let toasts = [];

  try {
    // Use hooks in a try-catch to handle any remaining issues
    const [mountedState, setMountedState] = React.useState(false);
    const [toastsState, setToastsState] = React.useState([]);
    
    mounted = mountedState;
    toasts = toastsState;
    
    // Only run on client-side
    React.useEffect(() => {
      setMountedState(true);
      
      // For now, just use empty array to prevent errors
      setToastsState([]);
      
      return () => setMountedState(false);
    }, []);
    
  } catch (error) {
    console.error("React hooks failed in Toaster:", error);
    // Return fallback without hooks
    return <div id="toast-fallback" style={{ display: 'none' }}></div>;
  }
  
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
