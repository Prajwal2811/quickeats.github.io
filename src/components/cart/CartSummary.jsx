import React from "react";
import useCart from "../../context/CartContext";
import { Link } from "react-router-dom";

const CartSummary = () => {
  const { cart } = useCart();
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="border p-4 rounded">
      <h3 className="font-bold mb-2">Cart Summary</h3>
      <p>Total Items: {cart.length}</p>
      <p>Total Price: ₹{total}</p>
      <Link to="/checkout" className="bg-red-500 text-white px-3 py-1 rounded mt-2 inline-block">
        Checkout
      </Link>
    </div>
  );
};

export default CartSummary;
