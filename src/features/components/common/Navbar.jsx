import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-blue-900 text-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center h-16">
          <div className="text-2xl font-bold">MyCalendarApp</div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
