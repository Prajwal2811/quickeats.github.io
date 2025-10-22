import React from "react";

const DashboardCard = ({ title, value }) => {
  return (
    <div className="border p-4 rounded shadow text-center">
      <h3 className="font-semibold">{title}</h3>
      <p className="text-2xl mt-2">{value}</p>
    </div>
  );
};

export default DashboardCard;
