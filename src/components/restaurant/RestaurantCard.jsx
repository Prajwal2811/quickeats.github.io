import React from "react";
import { Link } from "react-router-dom";

const RestaurantCard = ({ restaurant }) => {
  return (
    <Link to={`/restaurant/${restaurant.id}`}>
      <div className="border rounded shadow hover:shadow-lg overflow-hidden">
        <img src={restaurant.image} alt={restaurant.name} className="w-full h-40 object-cover" />
        <div className="p-4">
          <h2 className="font-semibold text-lg">{restaurant.name}</h2>
          <p className="text-gray-500">{restaurant.cuisine}</p>
          <div className="flex justify-between text-sm mt-2 text-gray-600">
            <span>⭐ {restaurant.rating}</span>
            <span>{restaurant.deliveryTime}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default RestaurantCard;
