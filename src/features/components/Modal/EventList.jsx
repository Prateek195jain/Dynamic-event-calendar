import React from "react";
import { Button } from "@/components/ui/button";

const EventList = ({ eventList, handleEditEvent, handleDeleteEvent }) => {
  if (eventList.length === 0) {
    return <p>No events for this date.</p>;
  }

  return (
    <ul className="space-y-2">
      {eventList.map((event, idx) => (
        <li
          key={idx}
          className="p-2 border-b flex justify-between items-center"
        >
          <div>
            <strong>{event.description}</strong> <br />
            {event.startTime} - {event.endTime}
          </div>
          <div>
            <Button
              className="mr-2"
              onClick={() =>
                handleEditEvent(idx, {
                  ...event,
                  description:
                    prompt("Edit Description", event.description) ||
                    event.description,
                  startTime:
                    prompt("Edit Start Time", event.startTime) ||
                    event.startTime,
                  endTime:
                    prompt("Edit End Time", event.endTime) || event.endTime,
                })
              }
            >
              Edit
            </Button>
            <Button
              variant="destructive"
              onClick={() => handleDeleteEvent(idx)}
            >
              Delete
            </Button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default EventList;
