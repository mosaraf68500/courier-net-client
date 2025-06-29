import React from "react";
import { Outlet } from "react-router"; // ensure correct import
import authImg from "../assets/authImage.png";
import CouriereLogo from "../pages/Shared/CouriereLogo";

const AuthLayOuts = () => {
  return (
    <div className="min-h-screen bg-base-200 flex flex-col items-center">
      {/* Logo */}
      <div className="w-full max-w-6xl px-4 pt-6 text-start">
        <CouriereLogo />
      </div>

      {/* Main Content */}
      <div className="w-full max-w-6xl flex flex-col lg:flex-row-reverse items-center justify-between px-4 py-10 gap-10">
        {/* Image Section */}
        <div className="flex-1 flex justify-center">
          <img
            src={authImg}
            alt="Authentication Visual"
            className="max-w-sm w-full rounded-lg shadow-2xl"
          />
        </div>

        {/* Outlet Section */}
        <div className="flex-1 w-full">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AuthLayOuts;
