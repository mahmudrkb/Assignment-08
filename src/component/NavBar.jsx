import React from "react";
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";



const NavBar = () => {
  const location = useLocation();

  const bgColor = location.pathname === '/' || location.pathname === '/home' ? 'bgPurple' :'';

  return (
    <nav className={`${bgColor}`}>
      <div className="  ">
        <div className="navbar justify-between rounded-t-xl  py-6 ">
          <div className="">
            <a className=" ml-3 text-xl font-semibold">Gadget Heaven</a>
          </div>

          <div>
            <ul className="  flex gap-3 justify-center items-center ">
              <li>
                <NavLink
                  className={({ isActive }) => (isActive ? "active" : "")}
                  to={"/"}
                >
                  Home
                </NavLink>
              </li>

              {/* 
            <li><NavLink className={({ isActive,  }) =>
                 isActive ? "active" : "pm"
              } >
          Statistic
            </NavLink></li> */}

              <li>
                <NavLink
                  to={"/dashboard"}
                  className={({ isActive }) => (isActive ? "active" : "pm")}
                >
                  DashBoard
                </NavLink>
              </li>

              <li>
                <NavLink
                  to={"/about"}
                  className={({ isActive }) => (isActive ? "active" : "pm")}
                >
                  About Us
                </NavLink>
              </li>
            </ul>
          </div>

          <div className="flex-none">
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle"
              >
                <div className="indicator">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                  <span className="badge badge-sm indicator-item">6</span>
                </div>
              </div>
              <div
                tabIndex={0}
                className="card card-compact dropdown-content bg-base-100 z-[1] mt-3 w-52 shadow"
              >
                <div className="card-body">
                  <span className="text-lg font-bold">8 Items</span>
                  <span className="text-info">Subtotal: $999</span>
                  <div className="card-actions">
                    <button className="btn btn-primary btn-block">
                      View cart
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle"
              >
                <div className="indicator">
                  <div className="">
                    {" "}
                    <i className="fa-regular fa-heart"></i>
                  </div>
                  <span className="badge badge-sm indicator-item">7</span>
                </div>
              </div>
              <div
                tabIndex={0}
                className="card card-compact dropdown-content bg-base-100 z-[1] mt-3 w-52 shadow"
              >
                <div className="card-body">
                  <span className="text-lg font-bold">8 Items</span>
                  <span className="text-info">Subtotal: $999</span>
                  <div className="card-actions">
                    <button className="btn btn-primary btn-block">
                      View cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
