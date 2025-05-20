
import * as React from "react";
import { toast } from "./toast-utils";
import { dispatch, listeners, memoryState } from "./toast-reducer";
import { actionTypes } from "./toast-types";
import { canUseDOM } from "./toast-utils";

// Create a non-hook version for SSR
const createNonReactImplementation = () => ({
  toast,
  dismiss: (toastId?: string) => dispatch({ type: actionTypes.DISMISS_TOAST, toastId }),
  toasts: memoryState.toasts,
});

export function useToast() {
  // Enhanced check for React availability in browser environment
  const isClient = canUseDOM();
  const [isClientMounted, setIsClientMounted] = React.useState(false);
  
  // Use useEffect to confirm we're on the client
  React.useEffect(() => {
    setIsClientMounted(true);
  }, []);

  // If we're not in a client environment or not yet mounted, return the non-React implementation
  if (!isClient || !isClientMounted) {
    return createNonReactImplementation();
  }

  // Only use React hooks on the client side
  const [state, setState] = React.useState(memoryState);

  React.useEffect(() => {
    listeners.push(setState);
    
    return () => {
      const index = listeners.indexOf(setState);
      if (index > -1) {
        listeners.splice(index, 1);
      }
    };
  }, [state]);

  return {
    ...state,
    toast,
    dismiss: (toastId?: string) => dispatch({ type: actionTypes.DISMISS_TOAST, toastId }),
  };
}

// Re-export toast for convenience
export { toast };
