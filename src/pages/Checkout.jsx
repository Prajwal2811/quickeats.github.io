import React, { useState } from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import useCart from "../context/CartContext";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const { cart, clearCart } = useCart();
  const navigate = useNavigate();

  const [paymentMethod, setPaymentMethod] = useState("cod");
  const [coupon, setCoupon] = useState("");
  const [discount, setDiscount] = useState(0);
  const [messages, setMessages] = useState({ error: "", success: "" });

  const [address, setAddress] = useState({
    street: "",
    city: "",
    state: "",
    pincode: "",
    phone: "",
  });

  const [upiId, setUpiId] = useState("");
  const [cardDetails, setCardDetails] = useState({
    name: "",
    number: "",
    expiry: "",
    cvv: "",
  });

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const totalAfterDiscount = total - discount;

  // 🧾 Apply Coupon
  const handleApplyCoupon = () => {
    setMessages({ error: "", success: "" });
    if (coupon === "SAVE10") {
      setDiscount(total * 0.1);
      setMessages({
        success: "Coupon applied! 10% discount added.",
        error: "",
      });
    } else {
      setDiscount(0);
      setMessages({ error: "Invalid coupon code.", success: "" });
    }
  };

  // ✅ Place Order
  const handlePlaceOrder = () => {
    setMessages({ error: "", success: "" });
    const { street, city, state, pincode, phone } = address;

    if (!street || !city || !state || !pincode || !phone) {
      setMessages({ error: "Please fill in all address fields.", success: "" });
      return;
    }

    if (paymentMethod === "upi" && !upiId) {
      setMessages({ error: "Please enter your UPI ID.", success: "" });
      return;
    }

    if (
      paymentMethod === "card" &&
      (!cardDetails.name ||
        !cardDetails.number ||
        !cardDetails.expiry ||
        !cardDetails.cvv)
    ) {
      setMessages({ error: "Please fill in all card details.", success: "" });
      return;
    }

    // Success
    setMessages({
      error: "",
      success: `Order placed successfully! Payment via ${paymentMethod.toUpperCase()}.`,
    });
    clearCart();

    setTimeout(() => {
      navigate("/order-tracking/123");
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-red-50 to-white">
      <Navbar />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex-1">
        <h2 className="text-3xl font-bold text-red-500 mb-8 text-center sm:text-left">
          Checkout
        </h2>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* 🧾 Order Summary */}
          <div className="lg:w-1/2 bg-white shadow-lg rounded-2xl p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Order Summary
            </h3>

            <ul className="divide-y divide-gray-100">
              {cart.map((item) => (
                <li
                  key={item.id}
                  className="flex justify-between items-center py-3"
                >
                  <span className="text-gray-700">
                    {item.name} × {item.quantity}
                  </span>
                  <span className="font-semibold text-gray-800">
                    ₹{item.price * item.quantity}
                  </span>
                </li>
              ))}
            </ul>

            {discount > 0 && (
              <p className="mt-3 text-green-600 font-medium">
                Discount Applied: -₹{discount.toFixed(2)}
              </p>
            )}

            <p className="mt-3 text-lg font-bold text-gray-800">
              Total: <span className="text-red-500">₹{totalAfterDiscount.toFixed(2)}</span>
            </p>

            {/* 📍 Address */}
            <div className="mt-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">
                Delivery Address
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Street / House No."
                  className="border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-red-500 transition"
                  value={address.street}
                  onChange={(e) =>
                    setAddress({ ...address, street: e.target.value })
                  }
                />
                <input
                  type="text"
                  placeholder="City"
                  className="border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-red-500 transition"
                  value={address.city}
                  onChange={(e) =>
                    setAddress({ ...address, city: e.target.value })
                  }
                />
                <input
                  type="text"
                  placeholder="State"
                  className="border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-red-500 transition"
                  value={address.state}
                  onChange={(e) =>
                    setAddress({ ...address, state: e.target.value })
                  }
                />
                <input
                  type="text"
                  placeholder="Pincode"
                  maxLength="6"
                  className="border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-red-500 transition"
                  value={address.pincode}
                  onChange={(e) =>
                    setAddress({ ...address, pincode: e.target.value })
                  }
                />
              </div>
              <input
                type="text"
                placeholder="Phone Number"
                maxLength="10"
                className="mt-4 w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-red-500 transition"
                value={address.phone}
                onChange={(e) =>
                  setAddress({ ...address, phone: e.target.value })
                }
              />
            </div>

            {/* ⚠️ Messages */}
            {messages.error && (
              <p className="mt-4 text-red-600 font-medium">{messages.error}</p>
            )}
            {messages.success && (
              <p className="mt-4 text-green-600 font-medium">
                {messages.success}
              </p>
            )}
          </div>

          {/* 💳 Payment + Coupon */}
          <div className="lg:w-1/2 flex flex-col gap-6">
            {/* Coupon */}
            <div className="bg-white shadow-lg rounded-2xl p-5 flex gap-3 items-center">
              <input
                type="text"
                placeholder="Enter coupon code"
                className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-red-500 transition"
                value={coupon}
                onChange={(e) => setCoupon(e.target.value)}
              />
              <button
                onClick={handleApplyCoupon}
                className="bg-red-500 hover:bg-red-600 text-white font-semibold px-5 py-2 rounded-full transition"
              >
                Apply
              </button>
            </div>

            {/* Payment */}
            <div className="bg-white shadow-lg rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">
                Payment Method
              </h3>

              <div className="flex flex-col gap-3">
                {/* COD */}
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="payment"
                    value="cod"
                    checked={paymentMethod === "cod"}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                  />
                  Cash on Delivery
                </label>

                {/* UPI */}
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="payment"
                    value="upi"
                    checked={paymentMethod === "upi"}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                  />
                  UPI Payment
                </label>

                {paymentMethod === "upi" && (
                  <input
                    type="text"
                    placeholder="Enter your UPI ID (e.g. user@upi)"
                    className="ml-6 border border-gray-300 p-2 rounded-lg focus:ring-2 focus:ring-red-500 transition"
                    value={upiId}
                    onChange={(e) => setUpiId(e.target.value)}
                  />
                )}

                {/* Card */}
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="payment"
                    value="card"
                    checked={paymentMethod === "card"}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                  />
                  Debit / Credit Card
                </label>

                {paymentMethod === "card" && (
                  <div className="ml-6 space-y-3">
                    <input
                      type="text"
                      placeholder="Name on Card"
                      className="w-full border border-gray-300 p-2 rounded-lg focus:ring-2 focus:ring-red-500 transition"
                      value={cardDetails.name}
                      onChange={(e) =>
                        setCardDetails({
                          ...cardDetails,
                          name: e.target.value,
                        })
                      }
                    />
                    <input
                      type="text"
                      placeholder="Card Number"
                      maxLength="16"
                      className="w-full border border-gray-300 p-2 rounded-lg focus:ring-2 focus:ring-red-500 transition"
                      value={cardDetails.number}
                      onChange={(e) =>
                        setCardDetails({
                          ...cardDetails,
                          number: e.target.value,
                        })
                      }
                    />
                    <div className="flex gap-3">
                      <input
                        type="text"
                        placeholder="MM/YY"
                        maxLength="5"
                        className="w-1/2 border border-gray-300 p-2 rounded-lg focus:ring-2 focus:ring-red-500 transition"
                        value={cardDetails.expiry}
                        onChange={(e) =>
                          setCardDetails({
                            ...cardDetails,
                            expiry: e.target.value,
                          })
                        }
                      />
                      <input
                        type="password"
                        placeholder="CVV"
                        maxLength="3"
                        className="w-1/2 border border-gray-300 p-2 rounded-lg focus:ring-2 focus:ring-red-500 transition"
                        value={cardDetails.cvv}
                        onChange={(e) =>
                          setCardDetails({
                            ...cardDetails,
                            cvv: e.target.value,
                          })
                        }
                      />
                    </div>
                  </div>
                )}
              </div>

              <button
                onClick={handlePlaceOrder}
                className="mt-6 w-full bg-red-500 hover:bg-red-600 text-white py-3 rounded-full text-lg font-semibold transition"
              >
                Place Order
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Checkout;
