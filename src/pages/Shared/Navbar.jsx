import React from "react";
import { Link, NavLink } from "react-router"; 
import CouriereLogo from "./CouriereLogo";
import AuthContexHook from "../../Hooks/AuthContexHook";

const Navbar = () => {
  const { user, SignOutUser } = AuthContexHook();

  const handleLogOut = async () => {
    try {
      await SignOutUser();
      // Optional: success toast or redirect
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  const NavItems = (
    <>
      <li><NavLink to="/">Home</NavLink></li>
       <li><NavLink to="/sendParcel">SendParcel</NavLink></li>
      <li><NavLink to="/coverage">Coverage</NavLink></li>
      <li><NavLink to="/about">About Us</NavLink></li>
      {
        user && <>
        
        <li><NavLink to="/dashboard">DashBoard</NavLink></li>
        </>
      }
    </>
  );

  return (
    <div className="navbar bg-base-100 shadow-md">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow"
          >
            {NavItems}
          </ul>
        </div>
        <CouriereLogo />
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{NavItems}</ul>
      </div>

      <div className="navbar-end space-x-2">
        {user ? (
          <div className="flex items-center gap-3">
            {user.photoURL && (
              <img
                src={user.photoURL}
                alt="User"
                className="w-10 h-10 rounded-full border"
                title={user.displayName || "User"}
              />
            )}
            <button onClick={handleLogOut} className="btn btn-outline btn-sm">
              LogOut
            </button>
          </div>
        ) : (
          <Link to="/login" className="btn btn-primary btn-sm">
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
