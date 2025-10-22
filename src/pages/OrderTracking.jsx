// src/pages/OrderTracking.jsx
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { GoogleMap, Marker, LoadScript } from "@react-google-maps/api";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const containerStyle = {
  width: "100%",
  height: "400px",
};

// Mock locations
const restaurantLocation = { lat: 21.1449, lng: 79.0865 };
const initialDeliveryLocation = { lat: 21.1458, lng: 79.0882 };

// Steps for order tracking
const steps = [
  { name: "Order Placed", icon: "🛒" },
  { name: "Preparing", icon: "🍳" },
  { name: "Out for Delivery", icon: "🛵" },
  { name: "Delivered", icon: "🏠" },
];

const OrderTracking = () => {
  const { id } = useParams();
  const [deliveryLocation, setDeliveryLocation] = useState(initialDeliveryLocation);
  const [currentStep, setCurrentStep] = useState(0);
  const [eta, setEta] = useState(30);

  // Animate ETA countdown
  useEffect(() => {
    const locationInterval = setInterval(() => {
      setDeliveryLocation((prev) => ({
        lat: prev.lat + 0.0005,
        lng: prev.lng + 0.0005,
      }));
    }, 3000);

    const stepInterval = setInterval(() => {
      setCurrentStep((prev) => (prev < steps.length - 1 ? prev + 1 : prev));
      setEta((prev) => (prev > 1 ? prev - 1 : 0));
    }, 60000);

    return () => {
      clearInterval(locationInterval);
      clearInterval(stepInterval);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="max-w-7xl mx-auto p-4">
        <h2 className="text-3xl font-bold mb-8 text-red-600 text-center">
          Tracking Order #{id}
        </h2>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Stepper */}
          <div className="lg:w-1/3 bg-white shadow-xl rounded-2xl p-6">
            <h3 className="text-xl font-semibold mb-6 text-gray-800">Order Status</h3>
            <div className="flex flex-col gap-8 relative">
              {steps.map((step, index) => {
                const isCompleted = index < currentStep;
                const isActive = index === currentStep;
                return (
                  <div key={index} className="flex items-center gap-4 relative">
                    <div
                      className={`w-12 h-12 flex items-center justify-center rounded-full text-xl font-bold transition-colors duration-500 ${
                        isCompleted
                          ? "bg-green-500 text-white shadow-lg"
                          : isActive
                          ? "bg-yellow-400 text-white animate-pulse"
                          : "bg-gray-300 text-gray-600"
                      }`}
                    >
                      {step.icon}
                    </div>
                    <div className="flex flex-col">
                      <p
                        className={`font-medium text-lg transition-colors duration-500 ${
                          isCompleted
                            ? "text-green-600"
                            : isActive
                            ? "text-yellow-600"
                            : "text-gray-500"
                        }`}
                      >
                        {step.name}
                      </p>
                      {isActive && <p className="text-gray-400 text-sm">In Progress...</p>}
                      {isCompleted && <p className="text-green-500 text-sm">Completed</p>}
                    </div>

                    {index !== steps.length - 1 && (
                      <div
                        className={`absolute left-5 top-12 h-full border-l-2 transition-colors duration-500 ${
                          isCompleted ? "border-green-500" : "border-gray-300"
                        }`}
                      />
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Delivery Info & Map */}
          <div className="lg:w-2/3 flex flex-col gap-6">
            {/* Delivery Card */}
            <div className="bg-gradient-to-r from-red-500 to-pink-500 shadow-xl rounded-2xl p-6 text-white flex justify-between items-center">
              <div>
                <h3 className="text-lg font-semibold">Estimated Delivery Time</h3>
                <p className="text-3xl font-bold">{eta} mins</p>
              </div>
              <div className="text-right">
                <h3 className="text-lg font-semibold">Delivery Person</h3>
                <p className="font-medium">John Doe 🛵</p>
                <p className="text-sm">+91 9876543210</p>
              </div>
            </div>

            {/* Google Map */}
            <div className="bg-white shadow-xl rounded-2xl overflow-hidden h-96 relative">
              <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
                <GoogleMap
                  mapContainerStyle={{ width: "100%", height: "100%" }}
                  center={deliveryLocation}
                  zoom={15}
                >
                  <Marker position={restaurantLocation} label="R" title="Restaurant" />
                  <Marker
                    position={deliveryLocation}
                    label="D"
                    title="Delivery"
                    animation={window.google.maps.Animation.DROP}
                  />
                </GoogleMap>
              </LoadScript>
              {/* Optional pulsating circle */}
              <div
                className="absolute w-5 h-5 bg-yellow-400 rounded-full animate-ping"
                style={{
                  top: `${(deliveryLocation.lat - 21.1449) * 100000}px`,
                  left: `${(deliveryLocation.lng - 79.0865) * 100000}px`,
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default OrderTracking;
