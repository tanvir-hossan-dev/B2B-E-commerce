import React from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { signOut } from "../redux/features/auth/authSlice";

const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleLogOut = () => {
    dispatch(signOut());
    navigate("/");
  };
  return (
    <div className="navbar  bg-gray-400">
      <div className="navbar-start">
        <a className="btn btn-ghost normal-case text-xl">B2B E-COMMERCE</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">
          <li>
            <a>Item 1</a>
          </li>

          <li>
            <a>Item 3</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end" onClick={handleLogOut}>
        <Link className="py-[10px] px-[20px] bg-red-600 text-white rounded-md">Log Out</Link>
      </div>
    </div>
  );
};

export default Navbar;
