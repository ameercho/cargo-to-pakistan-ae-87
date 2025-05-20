
import * as React from "react";
import { Toast, actionTypes } from "./toast-types";
import { dispatch } from "./toast-reducer";

let count = 0;

export function genId() {
  count = (count + 1) % Number.MAX_VALUE;
  return count.toString();
}

export function toast({ ...props }: Toast) {
  const id = genId();

  const update = (props: Toast) =>
    dispatch({
      type: actionTypes.UPDATE_TOAST,
      toast: { ...props, id },
    });
    
  const dismiss = () => dispatch({ type: actionTypes.DISMISS_TOAST, toastId: id });

  dispatch({
    type: actionTypes.ADD_TOAST,
    toast: {
      ...props,
      id,
      open: true,
      onOpenChange: (open) => {
        if (!open) dismiss();
      },
    },
  });

  return {
    id: id,
    dismiss,
    update,
  };
}

// Enhanced utility to safely check if we're in a browser environment where React is available
export function canUseDOM(): boolean {
  return !!(
    typeof window !== "undefined" &&
    window.document &&
    window.document.createElement
  );
}

// Check if React is available in the current environment
export function canUseReact(): boolean {
  return canUseDOM() && 
    typeof React !== "undefined" && 
    typeof React.useState === "function" &&
    typeof React.useEffect === "function";
}
