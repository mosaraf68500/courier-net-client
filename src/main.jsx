import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { RouterProvider } from "react-router";
import { router } from "./router/Router.jsx";
import AOS from "aos";
import "aos/dist/aos.css";
import AuthProvider from "./contex/AuthContex/AuthProvider.jsx";
import PrivateRoutes from "./PrivateRoutes/PrivateRoutes.jsx";
AOS.init();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <div className=" bg-[#EAECED]">
      <AuthProvider>
        <PrivateRoutes>
          <RouterProvider router={router} />
        </PrivateRoutes>
      </AuthProvider>
    </div>
  </StrictMode>
);
