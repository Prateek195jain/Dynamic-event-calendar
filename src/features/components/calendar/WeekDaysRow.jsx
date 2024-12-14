import React from "react";

const WeekDaysRow = ({ weekDays }) => {
  return (
    <div className="grid grid-cols-7 gap-2">
      {weekDays.map((day, idx) => (
        <div key={idx} className="font-semibold text-center">
          {day}
        </div>
      ))}
    </div>
  );
};

export default WeekDaysRow;
