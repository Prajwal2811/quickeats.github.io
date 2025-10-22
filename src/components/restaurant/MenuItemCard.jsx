import React from "react";
import useCart from "../../context/CartContext";

const MenuItemCard = ({ item }) => {
  const { addToCart } = useCart();

  return (
    <div className="border p-4 rounded shadow flex justify-between items-center">
      <div>
        <h3 className="font-semibold">{item.name}</h3>
        <p className="text-gray-600">₹{item.price}</p>
      </div>
      <button
        onClick={() => addToCart(item)}
        className="bg-red-500 text-white px-3 py-1 rounded"
      >
        Add
      </button>
    </div>
  );
};

export default MenuItemCard;
