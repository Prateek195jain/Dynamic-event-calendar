import React from "react";

const DaysGrid = ({ days, currentDate, events, handleDayClick }) => {
  // Utility function to format a date as "yyyy-MM-dd"
  const formatDateKey = (year, month, day) => {
    const formattedMonth = String(month + 1).padStart(2, "0"); // Ensure 2-digit month
    const formattedDay = String(day).padStart(2, "0"); // Ensure 2-digit day
    return `${year}-${formattedMonth}-${formattedDay}`;
  };

  return (
    <div className="grid grid-cols-7 gap-2">
      {days.map((day, idx) => {
        const dateKey = day
          ? formatDateKey(
              currentDate.getFullYear(),
              currentDate.getMonth(),
              day
            )
          : null;

        const hasEvent = day && events[dateKey]?.length > 0;

        return (
          <div
            key={idx}
            className={`p-4 border rounded text-center cursor-pointer ${
              day
                ? hasEvent
                  ? "bg-green-200 hover:bg-green-300"
                  : "bg-white hover:bg-gray-200"
                : "bg-gray-100"
            }`}
            onClick={() => handleDayClick(day)}
          >
            {day || ""}
          </div>
        );
      })}
    </div>
  );
};

export default DaysGrid;
