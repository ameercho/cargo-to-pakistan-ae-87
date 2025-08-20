
import * as React from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/index";

// Temporarily removed QueryClientProvider to isolate React import issue
// Force cache refresh - analytics removed completely

const App: React.FC = () => {
  return (
    <RouterProvider router={router} />
  );
};

export default App;
