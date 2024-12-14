import React from "react";
import { Button } from "@/components/ui/button";

const EventItem = ({ event, onEdit, onDelete }) => {
  return (
    <li className="p-2 border-b flex justify-between items-center">
      <div>
        <strong>{event.description}</strong> <br />
        {event.startTime} - {event.endTime}
      </div>
      <div>
        <Button className="mr-2" onClick={onEdit}>
          Edit
        </Button>
        <Button variant="destructive" onClick={onDelete}>
          Delete
        </Button>
      </div>
    </li>
  );
};

export default EventItem;
