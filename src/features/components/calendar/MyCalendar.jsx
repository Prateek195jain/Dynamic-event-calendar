import React from "react";
import CalendarComponent from "./CalendarComponent";

const MyCalendar = () => {
  return (
    <div className="min-h-screen p-4 flex justify-center items-center">
      <div className="bg-white border rounded-lg shadow-md p-6 w-full max-w-4xl">
        <CalendarComponent />
      </div>
    </div>
  );
};

export default MyCalendar;
