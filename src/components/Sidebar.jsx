import React from "react";
import { Link } from "react-router";

const Sidebar = () => {
  return (
    <aside className="w-64 bg-blue-900 text-white min-h-screen p-4">
      <h2 className="text-xl font-semibold mb-6">My App</h2>
      <nav className="space-y-2">
        <Link to="/home" className="block hover:text-blue-300">
          Home
        </Link>
        <Link to="/users" className="block hover:text-blue-300">
          Users
        </Link>
      </nav>
    </aside>
  );
};

export default Sidebar;
