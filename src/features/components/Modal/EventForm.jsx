import { Button } from "@/components/ui/button";

const EventForm = ({ newEvent, setNewEvent, handleAddEvent, isEditing }) => {
  return (
    <div className="space-y-2">
      <input
        type="text"
        placeholder="Event Description"
        value={newEvent.description}
        onChange={(e) =>
          setNewEvent({ ...newEvent, description: e.target.value })
        }
        className="p-2 border rounded w-full"
      />
      <input
        type="time"
        value={newEvent.startTime}
        onChange={(e) =>
          setNewEvent({ ...newEvent, startTime: e.target.value })
        }
        className="p-2 border rounded w-full"
      />
      <input
        type="time"
        value={newEvent.endTime}
        onChange={(e) => setNewEvent({ ...newEvent, endTime: e.target.value })}
        className="p-2 border rounded w-full"
      />
      <Button
        onClick={handleAddEvent}
        className="  text-white px-4 py-2 rounded"
      >
        {isEditing ? "Save Edit" : "Add Event"}
      </Button>
    </div>
  );
};

export default EventForm;
