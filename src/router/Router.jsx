import { createBrowserRouter } from "react-router";
import RootLayout from "../Layouts/RootLayout";
import Home from "../pages/Home/Home";
import AuthLayOuts from "../Layouts/AuthLayOuts";
import Login from "../pages/Authentication/Login/Login";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
        { index: true, Component: Home },
        
    ],
  },
  {
    path:"/",
    Component:AuthLayOuts,
    children:[
      {
        path:"/login",
        Component:Login
      }
    ]
  }
]);
