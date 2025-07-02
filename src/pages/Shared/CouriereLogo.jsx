import React from "react";
import logo from "../../assets/logo.png";
import { Link } from "react-router";

const CouriereLogo = () => {
  return (
    <Link to="/">
      <div className="flex items-end ">
        <img className="w-[25px] mb-2" src={logo} alt="" />
        <p className="text-2xl font-bold  text-green-400 -ml-0">Courier-Net</p>
      </div>
    </Link>
  );
};

export default CouriereLogo;
