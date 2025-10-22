import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { dishes, categories, restaurants } from "../services/api";
import useCart from "../context/CartContext";

const Restaurant = () => {
  const { id } = useParams();
  const restaurant = restaurants.find((r) => r.id === parseInt(id));
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const { addToCart, cart } = useCart();

  if (!restaurant) {
    return (
      <div className="min-h-screen flex items-center justify-center text-xl text-gray-600">
        Restaurant not found
      </div>
    );
  }

  // Filter dishes by restaurant, category, and search
  const filteredDishes = dishes
    .filter((d) => d.restaurantId === restaurant.id)
    .filter((d) => selectedCategory === "All" || d.category === selectedCategory)
    .filter((d) => d.name.toLowerCase().includes(searchQuery.toLowerCase()));

  // Check if a dish is already in cart
  const isDishAdded = (dishId) => cart.some((item) => item.id === dishId);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="max-w-6xl mx-auto p-4 mt-6">
        {/* Restaurant Name */}
        <h1 className="text-4xl font-bold text-red-500 mb-6">
          {restaurant.name}
        </h1>

        {/* Search Bar */}
        <div className="mb-4">
          <input
            type="text"
            placeholder="Search dishes..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full sm:w-1/2 px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500"
          />
        </div>

        {/* Categories */}
        <div className="flex gap-3 mb-6 overflow-x-auto py-2 px-1 scrollbar-hide">
          {["All", ...categories.map((cat) => cat.name)].map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`flex items-center gap-2 flex-shrink-0 px-4 py-2 rounded-full font-medium transition-all duration-200 ${
                selectedCategory === cat
                  ? "bg-red-500 text-white shadow-lg scale-105"
                  : "bg-gray-200 hover:bg-gray-300"
              }`}
            >
              {cat !== "All" && (
                <img
                  src={categories.find((c) => c.name === cat)?.image}
                  alt={cat}
                  className="w-6 h-6 object-cover rounded-full"
                />
              )}
              <span>{cat}</span>
            </button>
          ))}
        </div>

        {/* Dishes Grid */}
        {filteredDishes.length ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredDishes.map((d) => (
              <div
                key={d.id}
                className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow transform hover:scale-105 duration-300 flex flex-col"
              >
                {/* Dish Image */}
                {d.image && (
                  <div className="relative w-full h-48 overflow-hidden rounded-t-2xl">
                    <img
                      src={d.image}
                      alt={d.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}

                {/* Dish Info */}
                <div className="p-4 flex flex-col flex-1 justify-between">
                  <div>
                    <h3 className="font-semibold text-lg text-gray-800 mb-1">
                      {d.name}
                    </h3>
                    <p className="text-gray-500 text-sm mb-2">
                      {restaurant.name}
                    </p>
                  </div>

                  <div className="mt-auto flex items-center justify-between">
                    <span className="text-red-500 font-bold text-lg">
                      ₹{d.price}
                    </span>

                    {/* Add / Added Button */}
                    {isDishAdded(d.id) ? (
                      <button
                        disabled
                        className="bg-green-500 cursor-not-allowed text-white px-4 py-2 rounded-full text-sm font-medium transition"
                      >
                        Added
                      </button>
                    ) : (
                      <button
                        onClick={() => addToCart(d)}
                        className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-full text-sm font-medium transition"
                      >
                        Add
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-500 text-lg text-center mt-8">
            No dishes found in this category or matching your search.
          </p>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default Restaurant;
