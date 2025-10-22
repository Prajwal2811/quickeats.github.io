import React from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import useCart from "../context/CartContext";
import { Link } from "react-router-dom";
import { Plus, Minus, Trash2 } from "lucide-react";

const Cart = () => {
  const { cart, addToCart, removeFromCart, clearCart } = useCart();

  // ✅ Decrease quantity
  const handleDecrease = (item) => {
    if (item.quantity > 1) {
      const updatedItem = { ...item, quantity: item.quantity - 1 };
      removeFromCart(item.id);
      for (let i = 0; i < updatedItem.quantity; i++) addToCart(item);
    } else {
      removeFromCart(item.id);
    }
  };

  // ✅ Increase quantity
  const handleIncrease = (item) => {
    addToCart(item);
  };

  // ✅ Total price
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="min-h-screen bg-gradient-to-b from-red-50 to-white">
      <Navbar />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex-1 mt-10">
        <h2 className="text-3xl font-bold text-red-500 mb-8 text-center sm:text-left">
          🛒 Your Cart
        </h2>

        {cart.length === 0 ? (
          <div className="text-center py-24">
            <p className="text-xl text-gray-600 mb-4">Your cart is empty.</p>
            <Link
              to="/"
              className="text-red-500 font-semibold underline hover:text-red-600"
            >
              Go back to restaurants
            </Link>
          </div>
        ) : (
          <>
            {/* 🧾 Cart Items */}
            <div className="space-y-5">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="flex flex-col sm:flex-row justify-between items-center bg-white shadow-md rounded-2xl p-5 hover:shadow-lg transition-all"
                >
                  {/* 🍔 Image + Info */}
                  <div className="flex items-center gap-5 mb-4 sm:mb-0">
                    {item.image && (
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-24 h-24 rounded-xl object-cover shadow-sm border border-gray-200"
                      />
                    )}
                    <div>
                      <h3 className="font-semibold text-lg text-gray-800">
                        {item.name}
                      </h3>
                      <p className="text-gray-500 text-sm">{item.category}</p>
                      <p className="text-gray-800 font-medium mt-1">
                        ₹{item.price}
                      </p>
                    </div>
                  </div>

                  {/* ⚙️ Quantity + Controls */}
                  <div className="flex flex-col items-center sm:items-end gap-2">
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => handleDecrease(item)}
                        className="bg-gray-200 hover:bg-gray-300 text-gray-700 p-2 rounded-full"
                      >
                        <Minus size={16} />
                      </button>
                      <span className="font-semibold text-gray-800 w-6 text-center">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => handleIncrease(item)}
                        className="bg-gray-200 hover:bg-gray-300 text-gray-700 p-2 rounded-full"
                      >
                        <Plus size={16} />
                      </button>
                    </div>

                    <p className="font-bold text-gray-800 mt-1">
                      ₹{item.price * item.quantity}
                    </p>

                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="flex items-center gap-1 text-red-500 hover:text-red-600 text-sm mt-1"
                    >
                      <Trash2 size={15} /> Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* 💰 Total Summary */}
            <div className="mt-10 bg-white rounded-2xl shadow-md p-6 flex flex-col sm:flex-row items-center justify-between">
              <p className="text-2xl font-bold text-gray-800">
                Total: <span className="text-red-500">₹{total}</span>
              </p>

              <div className="flex flex-wrap gap-4 mt-4 sm:mt-0">
                <button
                  onClick={clearCart}
                  className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium px-6 py-2 rounded-full transition"
                >
                  Clear Cart
                </button>
                <Link
                  to="/checkout"
                  className="bg-red-500 hover:bg-red-600 text-white font-semibold px-7 py-2 rounded-full transition"
                >
                  Proceed to Checkout
                </Link>
              </div>
            </div>
          </>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default Cart;
