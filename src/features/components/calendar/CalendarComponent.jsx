import React, { useState, useEffect } from "react";
import CalendarHeader from "./CalendarHeader";
import WeekDaysRow from "./WeekDaysRow";
import DaysGrid from "./DaysGrid";
import MyEventModal from "../Modal/MyEventModal";

const CalendarComponent = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [days, setDays] = useState([]);
  const [events, setEvents] = useState(
    () => JSON.parse(localStorage.getItem("calendarEvents")) || {}
  );
  const [selectedDate, setSelectedDate] = useState(null);
  const [openModal, setOpenModal] = useState(false);

  const weekDays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  useEffect(() => {
    const savedEvents = localStorage.getItem("calendarEvents");
    if (savedEvents) {
      setEvents(JSON.parse(savedEvents));
    }
  }, []);

  useEffect(() => {
    const getCalendarDays = () => {
      const daysArr = [];
      const year = currentDate.getFullYear();
      const month = currentDate.getMonth();

      // Get first day of the month
      const firstDayOfMonth = new Date(year, month, 1).getDay();

      // Get total days in the month
      const daysInMonth = new Date(year, month + 1, 0).getDate();

      // Adjust the first day to make the week start on Monday
      const adjustedFirstDay = firstDayOfMonth === 0 ? 6 : firstDayOfMonth - 1;

      // Add blank days for padding
      for (let i = 0; i < adjustedFirstDay; i++) {
        daysArr.push(null);
      }

      // Add days of the month
      for (let i = 1; i <= daysInMonth; i++) {
        daysArr.push(i);
      }

      setDays(daysArr);
    };

    getCalendarDays();
  }, [currentDate]);

  useEffect(() => {
    localStorage.setItem("calendarEvents", JSON.stringify(events));
  }, [events]);

  const handlePrevMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1)
    );
  };

  const handleNextMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1)
    );
  };

  const handleDayClick = (day) => {
    if (!day) return;

    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const dateKey = `${year}-${String(month + 1).padStart(2, "0")}-${String(
      day
    ).padStart(2, "0")}`;

    setSelectedDate(dateKey);
    setOpenModal(true);
  };

  const handleSaveEvents = (updatedEvents) => {
    setEvents((prevEvents) => ({
      ...prevEvents,
      [selectedDate]: updatedEvents,
    }));
  };

  return (
    <div className="p-4">
      <CalendarHeader
        currentDate={currentDate}
        months={months}
        handlePrevMonth={handlePrevMonth}
        handleNextMonth={handleNextMonth}
      />
      <WeekDaysRow weekDays={weekDays} />
      <DaysGrid
        days={days}
        currentDate={currentDate}
        events={events}
        handleDayClick={handleDayClick}
        selectedDate={selectedDate}
      />

      {openModal && (
        <MyEventModal
          selectedDate={selectedDate}
          events={events[selectedDate] || []}
          onClose={() => setOpenModal(false)}
          onSaveEvents={handleSaveEvents}
        />
      )}
    </div>
  );
};

export default CalendarComponent;
