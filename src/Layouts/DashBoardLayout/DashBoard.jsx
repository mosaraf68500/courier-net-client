import React from "react";
import { NavLink, Outlet } from "react-router";
import CouriereLogo from "../../pages/Shared/CouriereLogo";

const DashBoard = () => {
  return (
    <div>
      <div className="drawer lg:drawer-open">
        <input
          id="dashboard-drawer"
          type="checkbox"
          className="drawer-toggle"
        />

        {/* Page Content */}
        <div className="drawer-content flex flex-col">
          {/* Mobile Navbar (Hidden on lg+) */}
          <div className="w-full navbar bg-base-300 lg:hidden">
            {/* Sidebar toggle button (visible only on mobile) */}
            <div className="flex-none">
              <label
                htmlFor="dashboard-drawer"
                className="btn btn-square btn-ghost"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block w-6 h-6 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </label>
            </div>
            <div className="flex-1 px-2 text-lg font-bold">Dashboard</div>
          </div>

          {/* Main content area */}
          {/* <div className="p-4">Page Content Goes Here</div> */}
          <Outlet></Outlet>
        </div>

        {/* Sidebar */}
        <div className="drawer-side">
          <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
          <CouriereLogo></CouriereLogo>
          <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
            <li>
             <NavLink>Home</NavLink>
            </li>
            <li>
             <NavLink to="/dashboard/myParcels">Parcels</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
