import React from "react";

const OrderProgress = ({ status }) => {
  const steps = ["Placed", "Preparing", "Out for Delivery", "Delivered"];
  return (
    <div className="flex justify-between mt-4">
      {steps.map((step, idx) => (
        <div key={idx} className="text-center">
          <div
            className={`w-8 h-8 mx-auto rounded-full ${
              steps.indexOf(status) >= idx ? "bg-red-500 text-white" : "bg-gray-300"
            } flex items-center justify-center`}
          >
            {idx + 1}
          </div>
          <p className="text-sm mt-1">{step}</p>
        </div>
      ))}
    </div>
  );
};

export default OrderProgress;
