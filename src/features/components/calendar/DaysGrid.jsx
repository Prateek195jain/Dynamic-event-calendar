import React from "react";

const DaysGrid = ({
  days,
  currentDate,
  events,
  handleDayClick,
  selectedDate,
}) => {
  // Utility function to format a date as "yyyy-MM-dd"
  const formatDateKey = (year, month, day) => {
    const formattedMonth = String(month + 1).padStart(2, "0"); // Ensure 2-digit month
    const formattedDay = String(day).padStart(2, "0"); // Ensure 2-digit day
    return `${year}-${formattedMonth}-${formattedDay}`;
  };

  // Get today's date for highlighting
  const today = new Date();
  const isToday = (day) => {
    return (
      day &&
      today.getDate() === day &&
      today.getMonth() === currentDate.getMonth() &&
      today.getFullYear() === currentDate.getFullYear()
    );
  };

  // Check if a day is a weekend (Saturday or Sunday)
  const isWeekend = (index) => {
    return index % 7 === 5 || index % 7 === 6; // Saturday and Sunday
  };

  // Check if a day is the selected day
  const isSelected = (day) => {
    if (!day || !selectedDate) return false;
    const dateKey = formatDateKey(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      day
    );
    return selectedDate === dateKey;
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

        // Determine the styles based on the conditions
        const isDayToday = isToday(day);
        const isDaySelected = isSelected(day);
        const isDayWeekend = isWeekend(idx);

        return (
          <div
            key={idx}
            className={`flex items-center justify-center p-4 border rounded text-center cursor-pointer
              ${
                day
                  ? isDaySelected
                    ? "bg-blue-500 text-white font-bold"
                    : isDayToday
                    ? "bg-blue-200"
                    : isDayWeekend
                    ? "bg-gray-200"
                    : hasEvent
                    ? "bg-green-200 hover:bg-green-300"
                    : "bg-white hover:bg-gray-200"
                  : "bg-gray-100"
              }
            `}
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
