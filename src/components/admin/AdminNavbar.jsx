import React from "react";
import { Link } from "react-router-dom";

const AdminNavbar = () => {
  return (
    <nav className="bg-gray-800 p-4 text-white flex justify-between">
      <Link to="/admin" className="font-bold text-xl">Admin Dashboard</Link>
      <div className="flex gap-4">
        <Link to="/admin/manage-restaurants">Restaurants</Link>
        <Link to="/admin/manage-orders">Orders</Link>
      </div>
    </nav>
  );
};

export default AdminNavbar;
