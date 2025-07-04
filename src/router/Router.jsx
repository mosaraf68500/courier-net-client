import { createBrowserRouter } from "react-router";
import RootLayout from "../Layouts/RootLayout";
import Home from "../pages/Home/Home";
import Login from "../pages/Authentication/Login/Login";
import Register from "../pages/Authentication/Register/Register";
import Covarage from "../pages/Coverage/Coverage";
import SendParcel from "../pages/sendParcel/SendParcel";
import PrivateRoutes from "../PrivateRoutes/PrivateRoutes";
import DashBoard from "../Layouts/DashBoardLayout/DashBoard";
import MyParcels from "../DashBoardPage/MyParcel/MyParcels";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      { index: true, Component: Home },
      {
        path: "coverage",
        Component: Covarage,
        loader: () => fetch("./districData.json"),
      },
      {
        path: "sendParcel",
        element: (
          <PrivateRoutes>
            <SendParcel />
          </PrivateRoutes>
        ),
        loader: () => fetch("./districData.json"),
      },
      {
        path: "login",
        Component: Login,
      },
      {
        path: "register",
        Component: Register,
      },
    ],
  },

  {
    path: "dashboard",
    element: (
      <PrivateRoutes>
        <DashBoard />
      </PrivateRoutes>
    ),
    children: [
      {
        path: "myParcels",
        Component: MyParcels,
      },
    ],
  },
]);
