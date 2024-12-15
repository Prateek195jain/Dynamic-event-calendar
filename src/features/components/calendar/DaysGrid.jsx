import React from "react";

const DaysGrid = ({
  days,
  currentDate,
  events,
  handleDayClick,
  selectedDate,
}) => {
  const formatDateKey = (year, month, day) => {
    const formattedMonth = String(month + 1).padStart(2, "0");
    const formattedDay = String(day).padStart(2, "0");
    return `${year}-${formattedMonth}-${formattedDay}`;
  };

  const today = new Date();
  const isToday = (day) => {
    return (
      day &&
      today.getDate() === day &&
      today.getMonth() === currentDate.getMonth() &&
      today.getFullYear() === currentDate.getFullYear()
    );
  };

  const isWeekend = (index) => {
    return index % 7 === 5 || index % 7 === 6;
  };

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
    <div className="grid grid-cols-7 gap-2 h-[400px]">
      {days.map((day, idx) => {
        const dateKey = day
          ? formatDateKey(
              currentDate.getFullYear(),
              currentDate.getMonth(),
              day
            )
          : null;

        const hasEvent = day && events[dateKey]?.length > 0;

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
