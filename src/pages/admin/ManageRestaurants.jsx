import React from "react";
import Navbar from "../../components/layout/Navbar";

const ManageRestaurants = () => {
  return (
    <div>
      <Navbar />
      <div className="max-w-6xl mx-auto p-4">
        <h2 className="text-2xl font-bold mb-4">Manage Restaurants</h2>
        <p>CRUD operations for restaurants.</p>
      </div>
    </div>
  );
};

export default ManageRestaurants;
