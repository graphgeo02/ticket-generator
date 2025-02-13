import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/nav/Nav';
// import Events from './components/events/Events';
import Events from './components/events/Events'
import AboutProject from './components/aboutProject/AboutProject';
import Mytickets from './components/myTickets/MyTickets';
import AttendeeDetails from './components/attendeeDetails/AttendeeDetails';
import BookTickited from './components/bookTicketed/BookTickited';

function App() {
  return (
    <div >
      <Nav />
      <Routes>
        < Route path='*' element={<Events />} exact/>
        <Route path="/my-tickets" element={<Mytickets />} />
        <Route path="/about-project" element={<AboutProject />} />
        <Route path="/attendee-details" element={<AttendeeDetails />} />
        <Route path="/book-ticketed" element={<BookTickited />} />
      </Routes>
    </div>
  );
}

export default App;
