import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Chatbot from "./components/Chatbot";
import Home from "./pages/Home";
import Login from "./pages/Login";
import AppointmentCalendar from "./components/Calendar";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chat" element={<Chatbot />} />
        <Route path="/login" element={<Login />} />
        <Route path="/calendar" element={<AppointmentCalendar />} />
      </Routes>
    </Router>
  );
};

export default App;
