import React, { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
} from "@/components/ui/dialog";
import EventList from "./EventList";
import EventForm from "./EventForm";

const MyEventModal = ({ selectedDate, events, onClose, onSaveEvents }) => {
  const [newEvent, setNewEvent] = useState({
    description: "",
    startTime: "",
    endTime: "",
  });
  const [eventList, setEventList] = useState(events);
  const [searchKeyword, setSearchKeyword] = useState("");

  useEffect(() => {
    setEventList(events);
  }, [events]);

  // Check for overlapping events
  const isOverlapping = (newEvent) => {
    return eventList.some((event) => {
      const existingStart = new Date(`1970-01-01T${event.startTime}`);
      const existingEnd = new Date(`1970-01-01T${event.endTime}`);
      const newStart = new Date(`1970-01-01T${newEvent.startTime}`);
      const newEnd = new Date(`1970-01-01T${newEvent.endTime}`);

      return (
        (newStart >= existingStart && newStart < existingEnd) ||
        (newEnd > existingStart && newEnd <= existingEnd) ||
        (newStart <= existingStart && newEnd >= existingEnd)
      );
    });
  };

  const handleAddEvent = () => {
    if (
      !newEvent.description.trim() ||
      !newEvent.startTime ||
      !newEvent.endTime
    ) {
      alert("Please fill in all fields.");
      return;
    }
    if (
      new Date(`1970-01-01T${newEvent.startTime}`) >=
      new Date(`1970-01-01T${newEvent.endTime}`)
    ) {
      alert("End time must be after start time.");
      return;
    }
    if (isOverlapping(newEvent)) {
      alert("This event overlaps with an existing event.");
      return;
    }

    const updatedEvents = [...eventList, newEvent];
    setEventList(updatedEvents);
    setNewEvent({ description: "", startTime: "", endTime: "" });
    onSaveEvents(updatedEvents);
  };

  const handleEditEvent = (index, updatedEvent) => {
    if (isOverlapping(updatedEvent)) {
      alert("This event overlaps with an existing event.");
      return;
    }

    const updatedEvents = [...eventList];
    updatedEvents[index] = updatedEvent;
    setEventList(updatedEvents);
    onSaveEvents(updatedEvents);
  };

  const handleDeleteEvent = (index) => {
    const updatedEvents = eventList.filter((_, i) => i !== index);
    setEventList(updatedEvents);
    onSaveEvents(updatedEvents);
  };

  const handleFilterEvents = () => {
    return eventList.filter((event) =>
      event.description.toLowerCase().includes(searchKeyword.toLowerCase())
    );
  };

  return (
    <Dialog open={true} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Events on {selectedDate}</DialogTitle>
        </DialogHeader>
        <div className="flex flex-col space-y-4">
          <input
            type="text"
            placeholder="Search events..."
            value={searchKeyword}
            onChange={(e) => setSearchKeyword(e.target.value)}
            className="p-2 border rounded"
          />

          <EventList
            eventList={handleFilterEvents()}
            handleEditEvent={handleEditEvent}
            handleDeleteEvent={handleDeleteEvent}
          />

          <EventForm
            newEvent={newEvent}
            setNewEvent={setNewEvent}
            handleAddEvent={handleAddEvent}
          />
        </div>
        <DialogFooter>
          <button onClick={onClose} className="mt-2 bg-gray-300 px-4 py-2">
            Close
          </button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default MyEventModal;
