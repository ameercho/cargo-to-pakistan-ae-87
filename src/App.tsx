
import React from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/index";
import { Toaster } from "@/components/ui/toaster";

// Debug: Ensure React is available
console.log('App.tsx - React loaded:', React ? 'Yes' : 'No');

const App: React.FC = () => {
  console.log('App component rendering');
  
  return (
    <React.StrictMode>
      <RouterProvider router={router} />
      <Toaster />
    </React.StrictMode>
  );
};

export default App;
