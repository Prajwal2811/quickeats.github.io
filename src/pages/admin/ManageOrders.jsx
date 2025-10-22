import React from "react";
import Navbar from "../../components/layout/Navbar";

const ManageOrders = () => {
  return (
    <div>
      <Navbar />
      <div className="max-w-6xl mx-auto p-4">
        <h2 className="text-2xl font-bold mb-4">Manage Orders</h2>
        <p>View and update orders.</p>
      </div>
    </div>
  );
};

export default ManageOrders;
