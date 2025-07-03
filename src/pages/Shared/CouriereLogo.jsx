import React from "react";
import logo from "../../assets/logo.png";
import { Link } from "react-router";

const CouriereLogo = () => {
  return (
    <Link to="/" className="btn btn-ghost text-xl flex items-end gap-2">
      <img className="w-[25px] mb-2" src={logo} alt="Logo" />
      <p className="text-2xl font-bold text-green-400 ml-0">Courier-Net</p>
    </Link>
  );
};

export default CouriereLogo;
