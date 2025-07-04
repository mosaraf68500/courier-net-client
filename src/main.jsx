import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { RouterProvider } from "react-router"; // ✅ ঠিক করা হয়েছে
import { router } from "./router/Router.jsx";
import AOS from "aos";
import "aos/dist/aos.css";
import AuthProvider from "./contex/AuthContex/AuthProvider.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

AOS.init();

const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <div className="bg-[#EAECED]">
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <RouterProvider router={router} />
        </AuthProvider>
      </QueryClientProvider>
    </div>
  </StrictMode>
);
