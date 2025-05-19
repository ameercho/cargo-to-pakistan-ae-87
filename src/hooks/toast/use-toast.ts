
import * as React from "react";
import { toast } from "./toast-utils";
import { dispatch, listeners, memoryState } from "./toast-reducer";
import { actionTypes } from "./toast-types";
import { canUseDOM } from "./toast-utils";

export function useToast() {
  // More robust check for React availability
  const isClient = canUseDOM();

  // Early return with non-hook implementation for SSR
  if (!isClient) {
    return {
      toast,
      dismiss: (toastId?: string) => dispatch({ type: actionTypes.DISMISS_TOAST, toastId }),
      toasts: memoryState.toasts,
    };
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
