
import * as React from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/index";
import { Toaster } from "@/components/ui/toaster";

const App: React.FC = () => {
  return (
    <>
      <RouterProvider router={router} />
      <Toaster />
    </>
  );
};

export default App;
