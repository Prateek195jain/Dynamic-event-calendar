import React from "react";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();

  const handlePlanEvent = () => {
    navigate("/home");
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-b from-blue-100 to-blue-500 text-center">
      <h1 className="text-4xl md:text-6xl font-extrabold text-gray-800 mb-4">
        Welcome to the Dynamic Event Calendar
      </h1>
      <p className="text-lg md:text-xl text-gray-700 max-w-2xl mb-8">
        Organize your events dynamically with ease! Our calendar allows you to
        plan, manage, and view events in a user-friendly interface.
      </p>
      <button
        onClick={handlePlanEvent}
        className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-lg font-medium shadow-md hover:shadow-lg transition-all duration-300 hover:from-indigo-600 hover:to-purple-600"
      >
        Plan Your Event
      </button>
    </div>
  );
};

export default LandingPage;
