import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const EventForm = ({ newEvent, setNewEvent, handleAddEvent }) => {
  return (
    <div>
      <Input
        className="mt-2"
        type="text"
        placeholder="Event Description"
        value={newEvent.description}
        onChange={(e) =>
          setNewEvent({ ...newEvent, description: e.target.value })
        }
      />
      <Input
        className="mt-2"
        type="time"
        placeholder="Start Time"
        value={newEvent.startTime}
        onChange={(e) =>
          setNewEvent({ ...newEvent, startTime: e.target.value })
        }
      />
      <Input
        className="mt-2"
        type="time"
        placeholder="End Time"
        value={newEvent.endTime}
        onChange={(e) => setNewEvent({ ...newEvent, endTime: e.target.value })}
      />
      <Button onClick={handleAddEvent} className="mt-2">
        Add Event
      </Button>
    </div>
  );
};

export default EventForm;
