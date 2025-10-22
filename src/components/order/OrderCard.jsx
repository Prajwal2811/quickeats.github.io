import React from "react";

const OrderCard = ({ order }) => {
  return (
    <div className="border p-4 rounded shadow">
      <h3 className="font-semibold">Order #{order.id}</h3>
      <p>Status: {order.status}</p>
      <p>Total: ₹{order.total}</p>
    </div>
  );
};

export default OrderCard;
