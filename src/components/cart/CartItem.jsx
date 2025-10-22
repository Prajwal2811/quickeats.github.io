import React from "react";
import useCart from "../../context/CartContext";

const CartItem = ({ item }) => {
  const { removeFromCart } = useCart();

  return (
    <div className="flex justify-between border p-2 rounded">
      <div>
        <p className="font-semibold">{item.name}</p>
        <p>Quantity: {item.quantity}</p>
      </div>
      <div className="flex items-center gap-2">
        <p>₹{item.price * item.quantity}</p>
        <button
          onClick={() => removeFromCart(item.id)}
          className="bg-red-500 text-white px-2 py-1 rounded"
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default CartItem;
