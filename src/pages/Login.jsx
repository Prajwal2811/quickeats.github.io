import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "../components/layout/Navbar";
import useAuth from "../context/AuthContext";
import { MdEmail, MdLock } from "react-icons/md";

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("john@example.com");
  const [password, setPassword] = useState("password123");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      login({ name: "John Doe", email }); // Mock login
      navigate("/");
    }, 1200);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-100 via-white to-red-50 flex flex-col">
      {/* Navbar */}
      <Navbar />

      {/* Login Container */}
      <div className="flex flex-1 justify-center items-center p-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white/80 backdrop-blur-xl shadow-2xl rounded-3xl p-8 w-full max-w-md border border-red-100"
        >
          <h2 className="text-3xl font-bold text-center text-red-500 mb-6">
            Welcome Back 👋
          </h2>
          <p className="text-gray-500 text-center mb-6 text-sm">
            Sign in to continue ordering your favorite meals
          </p>

          {/* Login Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Email */}
            <div className="flex items-center border border-gray-300 rounded-full px-4 py-3 focus-within:ring-2 focus-within:ring-red-500 transition">
              <MdEmail className="text-gray-400 mr-2 text-xl" />
              <input
                type="email"
                placeholder="Email address"
                className="w-full outline-none bg-transparent text-gray-700 placeholder-gray-400"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            {/* Password */}
            <div className="flex items-center border border-gray-300 rounded-full px-4 py-3 focus-within:ring-2 focus-within:ring-red-500 transition">
              <MdLock className="text-gray-400 mr-2 text-xl" />
              <input
                type="password"
                placeholder="Password"
                className="w-full outline-none bg-transparent text-gray-700 placeholder-gray-400"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            {/* Forgot Password */}
            <div className="text-right">
              <Link
                to="#"
                className="text-sm text-red-500 hover:text-red-600 font-medium"
              >
                Forgot Password?
              </Link>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className={`w-full py-3 rounded-full font-semibold text-white transition duration-300 ${
                loading
                  ? "bg-red-400 cursor-not-allowed"
                  : "bg-red-500 hover:bg-red-600 shadow-md"
              }`}
            >
              {loading ? "Logging in..." : "Login"}
            </button>
          </form>

          {/* Divider */}
          <div className="flex items-center my-6">
            <div className="flex-1 border-t border-gray-300"></div>
            <span className="px-3 text-gray-400 text-sm">OR</span>
            <div className="flex-1 border-t border-gray-300"></div>
          </div>

          {/* Social Login Buttons */}
          <div className="flex gap-3">
            <button className="flex-1 border border-gray-300 rounded-full py-2 text-gray-600 hover:bg-gray-100 transition">
              Google
            </button>
            <button className="flex-1 border border-gray-300 rounded-full py-2 text-gray-600 hover:bg-gray-100 transition">
              Facebook
            </button>
          </div>

          {/* Register Link */}
          <p className="mt-6 text-center text-gray-600 text-sm">
            Don’t have an account?{" "}
            <Link
              to="/register"
              className="text-red-500 font-semibold hover:underline"
            >
              Register
            </Link>
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Login;
