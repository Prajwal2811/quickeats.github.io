import React from "react";
import Navbar from "../components/layout/Navbar";
import useAuth from "../context/AuthContext";
import { MdPerson, MdEmail } from "react-icons/md";

const Profile = () => {
  const { user, logout } = useAuth();

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center text-lg text-gray-600">
        Loading profile...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-gray-50">
      <Navbar />

      <div className="flex justify-center items-start mt-10 px-4">
        <div className="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-lg transition-all duration-300 hover:shadow-3xl">
          <h2 className="text-3xl font-bold text-center text-red-500 mb-6">
            My Profile
          </h2>

          {/* Avatar */}
          <div className="flex justify-center mb-6">
            <div className="w-24 h-24 rounded-full bg-red-100 flex items-center justify-center text-red-500 text-4xl font-bold shadow-md">
              {user.name.charAt(0).toUpperCase()}
            </div>
          </div>

          {/* User Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3 border border-gray-200 rounded-full px-4 py-2">
              <MdPerson className="text-gray-400 text-xl" />
              <p className="text-gray-700 font-medium">{user.name}</p>
            </div>

            <div className="flex items-center gap-3 border border-gray-200 rounded-full px-4 py-2">
              <MdEmail className="text-gray-400 text-xl" />
              <p className="text-gray-700 font-medium">{user.email}</p>
            </div>
          </div>

          {/* Logout Button */}
          <button
            onClick={logout}
            className="mt-6 w-full bg-red-500 hover:bg-red-600 text-white py-3 rounded-full font-semibold transition-all duration-200"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
