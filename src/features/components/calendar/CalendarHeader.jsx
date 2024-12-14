import React from "react";
import { Button } from "@/components/ui/button";

const CalendarHeader = ({
  currentDate,
  months,
  handlePrevMonth,
  handleNextMonth,
}) => {
  return (
    <div className="flex justify-between items-center mb-4">
      <Button onClick={handlePrevMonth} className="p-2 rounded">
        {"<<"}
      </Button>
      <div className="font-bold text-2xl">
        {months[currentDate.getMonth()]} {currentDate.getFullYear()}
      </div>
      <Button onClick={handleNextMonth} className="p-2 rounded">
        {">>"}
      </Button>
    </div>
  );
};

export default CalendarHeader;
