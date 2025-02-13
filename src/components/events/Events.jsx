import React, { useState } from 'react';
import '../styles/event.css';
import '../styles/font.css';
import { useNavigate } from 'react-router-dom';

const Event = () => {
  const [ticketCount, setTicketCount] = useState(1);
  let redirNext = useNavigate();

  const handleNext = () => {
    if (ticketCount > 0) {
      redirNext('/attendee-details');
    } else {
      alert('Please select a valid number of tickets.');
    }
  };

  return (
    <section className='main-container'>
      <div className='card'>
        <div className="inline">
          <h1>Tickets Selection</h1> 
          <p className='step'>Step <span className='step'><strong className='levels'>1</strong>/3</span></p>
        </div>
        <div className="progress-bar">
          <div className="progress-bar-fill" style={{ width: '33%' }}></div>
        </div>
        <div className="feature">
          <div className="sub-feature1">
            <h6 className='title'>Techember Fest ’25</h6>
            <p>Join us for an unforgettable experience at<br/> [Event Name]! Secure your spot now.</p>
            <p className='location-time'>📍[Event Location] | March 15, 2025 | 7:00 PM</p>
          </div>
          <div className="divider"></div>
          <p className='select-ticket'>Select Ticket Type:</p>
          <div className="sub-feature2">
            <div className="three-card">
              <div className="cards card-a box">
                <p>Regular Access<br/> <span>20 left!</span></p> 
                <button className='free'>Free</button>
              </div>
              <div className="cards card-b box">
                <p>VIP Access<br/> <span>20 left!</span></p> 
                <button className='free'>$50</button>
              </div>
              <div className="cards card-c box">
                <p>VVIP Access<br/> <span>20 left!</span></p> 
                <button className='free'>$150</button>
              </div>
            </div>
          </div>
          {/* <p className='number-tickets'>Number of Tickets</p> */}
          <label htmlFor='ticketCount' className='sr-only'>Number of Tickets</label>
          <select
            id='ticketCount'
            value={ticketCount}
            onChange={(e) => setTicketCount(parseInt(e.target.value))}
          >
            {[0, 1, 2, 3, 4, 5, 10, 15, 20, 25, 30].map((num) => (
              <option key={num} value={num}>{num}</option>
            ))}
          </select>
          <div className="next">
            <button className='cancel' onClick={() => redirNext('/')}>Cancel</button>
            <button className='next' onClick={handleNext}>Next</button>
          </div>
        </div>
      </div> 
    </section>
  );
};

export default Event;
