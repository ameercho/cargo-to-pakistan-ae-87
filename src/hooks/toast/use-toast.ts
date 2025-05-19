
import * as React from "react";
import { toast } from "./toast-utils";
import { dispatch, listeners, memoryState } from "./toast-reducer";
import { actionTypes } from "./toast-types";
import { canUseDOM } from "./toast-utils";

export function useToast() {
  // This is the key safety check - ensure we're in a browser environment with React available
  if (!canUseDOM()) {
    return {
      toast,
      dismiss: (toastId?: string) => dispatch({ type: actionTypes.DISMISS_TOAST, toastId }),
      toasts: memoryState.toasts,
    };
  }

  // Safe to use React hooks now
  const [state, setState] = React.useState(memoryState);

  React.useEffect(() => {
    // Add listener
    listeners.push(setState);
    
    // Clean up
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
