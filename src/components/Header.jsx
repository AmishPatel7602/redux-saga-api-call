import React from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router";
import { logout } from "../redux/actions/authActions";

const Header = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  console.log(location?.pathname, "location");

  const handleLogout = () => {
    dispatch(logout());
    localStorage.removeItem("token");
    window.location.href = "/";
  };

  return (
    <header className="bg-amber-300 shadow px-4 py-3 flex justify-between items-center">
      {location?.pathname === "/home" && (
        <h1 className="text-lg font-semibold">Home</h1>
      )}
      {location?.pathname === "/users" && (
        <h1 className="text-lg font-semibold">User</h1>
      )}
      <button
        onClick={handleLogout}
        className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
      >
        Logout
      </button>
    </header>
  );
};

export default Header;
