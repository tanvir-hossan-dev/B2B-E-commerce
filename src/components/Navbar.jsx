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
        <Link className="btn btn-ghost normal-case text-xl">B2B E-COMMERCE</Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">
          <li>
            <Link>Item 1</Link>
          </li>

          <li>
            <Link>Item 3</Link>
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
