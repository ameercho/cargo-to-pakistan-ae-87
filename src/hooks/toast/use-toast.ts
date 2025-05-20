
import * as React from "react";
import { toast } from "./toast-utils";
import { dispatch, listeners, memoryState } from "./toast-reducer";
import { actionTypes } from "./toast-types";

// Check if we can use DOM APIs
const canUseDOM = () => {
  return !!(
    typeof window !== "undefined" &&
    window.document &&
    window.document.createElement
  );
};

// Create a non-hook version for SSR
const createNonReactImplementation = () => ({
  toast,
  dismiss: (toastId?: string) => dispatch({ type: actionTypes.DISMISS_TOAST, toastId }),
  toasts: memoryState.toasts,
});

export function useToast() {
  // Enhanced check for React availability in browser environment
  const isClient = canUseDOM();
  
  // Early return for non-browser environments
  if (!isClient) {
    return createNonReactImplementation();
  }

  // Only use React hooks on the client side
  // We need to wrap this in a try/catch because some environments
  // might throw when using React hooks outside of a React component
  try {
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
  } catch (e) {
    // If hooks fail, return the non-React implementation
    return createNonReactImplementation();
  }
}

// Re-export toast for convenience
export { toast };
