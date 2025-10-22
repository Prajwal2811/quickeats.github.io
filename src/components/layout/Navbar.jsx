import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FaShoppingCart, FaMapMarkerAlt, FaBars, FaTimes, FaUserCircle } from "react-icons/fa";
import useCart from "../../context/CartContext";
import useAuth from "../../context/AuthContext";

const Navbar = () => {
  const { cart } = useCart();
  const { user, logout } = useAuth();
  const [location, setLocation] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="bg-white/70 backdrop-blur-md shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-5 py-3">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center text-2xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-red-500 via-pink-500 to-orange-400 shadow-lg hover:scale-105 transition-transform duration-300"
        >
          <span className="bg-red-500 text-white rounded-full p-1 mr-2 shadow-md flex items-center justify-center">
            🍔
          </span>
          QuickEats
        </Link>

        {/* Desktop Section */}
        <div className="hidden md:flex items-center gap-6">
          {/* Location Input */}
          <div className="flex items-center bg-white/50 backdrop-blur-sm border border-gray-200 rounded-full px-3 py-2 shadow-inner">
            <FaMapMarkerAlt className="text-gray-500 mr-2" />
            <input
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="Enter your location"
              className="bg-transparent outline-none text-gray-700 w-48 placeholder-gray-400"
            />
          </div>

          {/* User Section */}
          {user ? (
            <div className="flex items-center gap-3">
              <Link
                to="/profile"
                className="flex items-center gap-1 text-gray-700 hover:text-red-500 font-medium transition"
              >
                <FaUserCircle className="text-xl text-red-500" />
                {user.name}
              </Link>
              <button
                onClick={logout}
                className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-full shadow-md transition transform hover:scale-105"
              >
                Logout
              </button>
            </div>
          ) : (
            <Link
              to="/login"
              className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-full shadow-md transition transform hover:scale-105"
            >
              Login
            </Link>
          )}

          {/* Cart */}
          <Link
            to="/cart"
            className="relative text-gray-700 hover:text-red-500 transition transform hover:scale-105"
          >
            <FaShoppingCart className="text-2xl" />
            {cart.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white w-5 h-5 text-xs rounded-full flex items-center justify-center shadow-md">
                {cart.length}
              </span>
            )}
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-gray-700 text-2xl focus:outline-none"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="bg-white/80 backdrop-blur-sm border-t border-gray-200 md:hidden px-5 py-4 rounded-b-lg shadow-lg"
          >
            {/* Location Input */}
            <div className="flex items-center bg-white/50 backdrop-blur-sm border border-gray-300 rounded-full px-3 py-2 mb-4 shadow-inner">
              <FaMapMarkerAlt className="text-gray-400 mr-2" />
              <input
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="Enter your location"
                className="bg-transparent outline-none w-full text-gray-700 placeholder-gray-400"
              />
            </div>

            {/* Auth Links */}
            <div className="flex flex-col gap-3">
              {user ? (
                <>
                  <Link
                    to="/profile"
                    className="flex items-center gap-1 text-gray-700 hover:text-red-500 font-medium transition"
                    onClick={() => setMenuOpen(false)}
                  >
                    <FaUserCircle className="text-lg text-red-500" />
                    {user.name}
                  </Link>
                  <button
                    onClick={() => {
                      logout();
                      setMenuOpen(false);
                    }}
                    className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-full shadow-md transition transform hover:scale-105"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <Link
                  to="/login"
                  onClick={() => setMenuOpen(false)}
                  className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-full shadow-md transition transform hover:scale-105 text-center"
                >
                  Login
                </Link>
              )}

              {/* Cart */}
              <Link
                to="/cart"
                onClick={() => setMenuOpen(false)}
                className="relative flex items-center gap-2 text-gray-700 hover:text-red-500 transition transform hover:scale-105"
              >
                <FaShoppingCart className="text-xl" />
                Cart
                {cart.length > 0 && (
                  <span className="absolute left-20 bg-red-500 text-white w-5 h-5 text-xs rounded-full flex items-center justify-center shadow-md">
                    {cart.length}
                  </span>
                )}
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
