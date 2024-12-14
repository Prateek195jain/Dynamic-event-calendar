import React from "react";

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white text-center py-4">
      <p>&copy; {new Date().getFullYear()} Dynamic Event Calendar</p>
    </footer>
  );
};

export default Footer;
