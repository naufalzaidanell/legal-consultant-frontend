import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const AppointmentCalendar = () => {
  const [date, setDate] = useState(new Date());

  const handleDateChange = (selectedDate) => {
    setDate(selectedDate);
    alert(`Appointment set for ${selectedDate.toDateString()}`);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold">Schedule an Appointment</h1>
      <Calendar onChange={handleDateChange} value={date} />
    </div>
  );
};

export default AppointmentCalendar;
