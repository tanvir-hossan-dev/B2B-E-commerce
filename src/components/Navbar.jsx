import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { signOut } from "../redux/features/auth/authSlice";
import gravatarUrl from "gravatar-url";

const Navbar = () => {
  const { user } = useSelector((state) => state.auth);
  const { cards } = useSelector((state) => state.card);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleLogOut = () => {
    dispatch(signOut());
    navigate("/");
  };
  return (
    <div className="navbar fixed z-50 top-0 left-0 bg-gray-300">
      <div className="navbar-start">
        <Link to="/home" className="btn btn-ghost normal-case text-xl">
          B2B E-COMMERCE
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0 font-semibold">
          <li>
            <Link to="/home">Home</Link>
          </li>

          <li>
            <Link to="/customars">Customars</Link>
          </li>
          <li>
            <Link to="/cards">
              Cards {cards?.length > 0 && <div className="badge badge-primary py-2">{cards.length}</div>}
            </Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end mr-8">
        <div className=" dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img src={gravatarUrl(user.email)} alt={user.name} />
            </div>
          </label>
          <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
            <li>
              <p className="justify-between">{user?.name}</p>
            </li>

            <li onClick={handleLogOut}>
              <p>Logout</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
