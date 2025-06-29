import React from "react";
import { Outlet } from "react-router";
import authImg from "../assets/authImage.png";
import CouriereLogo from "../pages/Shared/CouriereLogo";

const AuthLayouts = () => {
  return (
    <div className=" flex  flex-col items-center bg-base-200">
      {/* Logo */}
      <div className="w-full  px-4 pt-6 flex justify-start">
        <CouriereLogo />
      </div>

      {/* Main Content */}
      <div className="w-full max-w-6xl flex flex-col-reverse lg:flex-row items-stretch justify-center px-4 py-10 gap-10 flex-1">
        {/* Form Section */}
        <div className="flex-1 w-full max-w-md p-8 bg-white rounded-lg shadow-lg flex items-center">
          <Outlet />
        </div>

        {/* Image Section with full height & bg */}
        <div className="flex-1 bg-[#FAFDF0] flex items-center justify-center rounded-lg">
          <img
            src={authImg}
            alt="Authentication Visual"
            className="max-w-sm w-full rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default AuthLayouts;
