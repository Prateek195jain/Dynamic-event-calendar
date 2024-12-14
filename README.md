# Dynamic Event Calendar Application

## Table of Contents

1. [Project Overview](#project-overview)
2. [Features](#features)
3. [Technologies Used](#technologies-used)
4. [Setup and Installation](#setup-and-installation)
5. [Usage](#usage)
6. [Folder Structure](#folder-structure)
7. [Contributing](#contributing)

---

## Project Overview

The **Dynamic Event Calendar Application** is a responsive web application that enables users to view, add, edit, and delete events on a calendar interface. Built with **Vite+React (JS)** and styled using **ShadCN UI**, the project is a showcase of implementing calendar logic manually without relying on external libraries, allowing for granular control and customization of calendar behavior.

---

## Features

- **Interactive Calendar Interface**: Navigate between months and years seamlessly.
- **Event Management**:
  - Add new events by clicking on a date.
  - Edit or delete existing events.
- **Custom Styling**: Designed with ShadCN UI for a clean and modern user experience.
- **Performance Optimizations**: Leveraging Vite for fast builds and efficient hot module replacement (HMR).
- **Manual Calendar Logic**: Custom algorithms for date calculations, event placement, and rendering.

---

## Technologies Used

- **Frontend**:
  - [Vite](https://vitejs.dev/) for fast development and build processes.
  - [React.js](https://reactjs.org/) for building the user interface.
  - [ShadCN UI](https://shadcn.dev/) for styling components.
- **Backend (if applicable)**: Placeholder for API integrations if planned.

---

## Setup and Installation

### Prerequisites

- Node.js (>= 16.x)
- npm or yarn

### Steps

1. Clone the repository:

   ```bash
   git clone <repository-url>
   ```

2. Navigate to the project directory:

   ```bash
   cd dynamic-event-calendar
   ```

3. Install dependencies:

   ```bash
   npm install
   # or
   yarn install
   ```

4. Start the development server:

   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. Open your browser and navigate to:

   ```
   http://localhost:5173
   ```

---

## Usage

1. **Navigating the Calendar**:
   - Use the navigation buttons to move between months and years.
2. **Adding Events**:
   - Click on a specific date to add an event.
3. **Editing/Deleting Events**:
   - Click on an event to modify or delete it.
4. **Responsive Design**:
   - Use the application on any device for an optimized experience.

---

## Folder Structure

```plaintext
src/
|-- assets/             # Static assets (e.g., images, fonts)
|-- components/         # Reusable React components
|-- features/components # Feature-specific components
|   |-- calendar/       # Calendar-specific components
|       |-- CalendarComponent.jsx
|       |-- CalendarHeader.jsx
|       |-- DaysGrid.jsx
|       |-- MyCalendar.jsx
|       |-- WeekDaysRow.jsx
|   |-- Modal/          # Modal-specific components
|       |-- DeleteConfirmationModal.jsx
|       |-- EventForm.jsx
|       |-- EventItem.jsx
|       |-- EventList.jsx
|       |-- MyEventModal.jsx
|-- lib/                # Library and helper functions
|-- pages/              # Page-level components
|   |-- Home.jsx
|   |-- LandingPage.jsx
|-- App.jsx             # Main app component
|-- main.jsx            # Entry point for the application
```

---

## Contributing

Contributions are welcome! To contribute:

1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add feature description"
   ```
4. Push to your branch:
   ```bash
   git push origin feature-name
   ```
5. Create a Pull Request.

---

## Acknowledgments

- Inspired by the need for custom calendar applications.
- Thanks to [Vite](https://vitejs.dev/), [React](https://reactjs.org/), and [ShadCN UI](https://shadcn.dev/) for excellent tools and frameworks.

