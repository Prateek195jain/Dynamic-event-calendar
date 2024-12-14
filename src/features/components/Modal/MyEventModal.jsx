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
  const [editingIndex, setEditingIndex] = useState(null);
  const [errors, setErrors] = useState({
    description: "",
    startTime: "",
    endTime: "",
  });

  useEffect(() => {
    setEventList(events);
  }, [events]);

  // Check for overlapping events
  const isOverlapping = (newEvent, excludeIndex = null) => {
    return eventList.some((event, index) => {
      if (excludeIndex !== null && index === excludeIndex) return false;

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

  const validateForm = () => {
    let formErrors = {};
    let isValid = true;

    if (!newEvent.description.trim()) {
      formErrors.description = "Description is required.";
      isValid = false;
    }

    if (!newEvent.startTime) {
      formErrors.startTime = "Start time is required.";
      isValid = false;
    }

    if (!newEvent.endTime) {
      formErrors.endTime = "End time is required.";
      isValid = false;
    }

    if (
      new Date(`1970-01-01T${newEvent.startTime}`) >=
      new Date(`1970-01-01T${newEvent.endTime}`)
    ) {
      formErrors.endTime = "End time must be after start time.";
      isValid = false;
    }

    if (isOverlapping(newEvent)) {
      formErrors.startTime = "This event overlaps with an existing event.";
      formErrors.endTime = "This event overlaps with an existing event.";
      isValid = false;
    }

    setErrors(formErrors);
    return isValid;
  };

  const handleAddEvent = () => {
    if (!validateForm()) return;

    const updatedEvents = [...eventList, newEvent];
    setEventList(updatedEvents);
    setNewEvent({ description: "", startTime: "", endTime: "" });
    onSaveEvents(updatedEvents);
  };

  const handleEditEvent = (index) => {
    const eventToEdit = eventList[index];
    setNewEvent(eventToEdit);
    setEditingIndex(index);
  };

  const handleSaveEdit = () => {
    if (!validateForm()) return;

    const updatedEvents = [...eventList];
    updatedEvents[editingIndex] = newEvent;
    setEventList(updatedEvents);
    onSaveEvents(updatedEvents);

    setNewEvent({ description: "", startTime: "", endTime: "" });
    setEditingIndex(null);
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
            handleAddEvent={
              editingIndex !== null ? handleSaveEdit : handleAddEvent
            }
            isEditing={editingIndex !== null}
            errors={errors} // Pass errors to EventForm
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
