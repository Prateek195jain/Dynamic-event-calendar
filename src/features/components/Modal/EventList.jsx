import React, { useState } from "react";
import EventItem from "./EventItem";
import DeleteConfirmationModal from "./DeleteConfirmationModal";

const EventList = ({ eventList, handleEditEvent, handleDeleteEvent }) => {
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [eventToDelete, setEventToDelete] = useState(null);

  const openDeleteModal = (index) => {
    setEventToDelete(index);
    setShowDeleteModal(true);
  };

  const confirmDelete = () => {
    if (eventToDelete !== null) {
      handleDeleteEvent(eventToDelete);
    }
    setShowDeleteModal(false);
    setEventToDelete(null);
  };

  return (
    <div>
      <ul className="space-y-2">
        {eventList.length === 0 ? (
          <p>No events for this date.</p>
        ) : (
          eventList.map((event, idx) => (
            <EventItem
              key={idx}
              event={event}
              onEdit={() => handleEditEvent(idx)}
              onDelete={() => openDeleteModal(idx)}
            />
          ))
        )}
      </ul>

      <DeleteConfirmationModal
        isOpen={showDeleteModal}
        onClose={() => setShowDeleteModal(false)}
        onConfirm={confirmDelete}
      />
    </div>
  );
};

export default EventList;
