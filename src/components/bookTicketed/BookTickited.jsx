import React from 'react';
import '../styles/book.css';
import '../styles/font.css';
import Star from '../../assets/logoimages/Star.png'
import { useLocation, useNavigate } from 'react-router-dom';

const BookTickited = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { name, email, avatarUrl } = location.state || {};

  const redirBack = () => navigate('/');
  const redirGetTicket = () => alert('Download Ticket functionality coming soon!');

  return (
    <section className="main-container">
      <div className="card-3">
        <div className="inline">
          <h1>Ready</h1>
          <p className="step">
            Step <span className="step"><strong className="levels">3</strong>/3</span>
          </p>
        </div>
        <div className="progress-bar3">
          <div className="progress-bar-fill3"></div>
        </div>
        <div>
          <p className="book-title">Your Ticket is Booked!</p>
          <p className="book-sub-title">You can download or check your email for a copy.</p>
        </div>
        <div className="ticket-container">
          {avatarUrl && <img src={avatarUrl} alt="Avatar" className="avatar-image" 
          //  onError={(e) => { e.target.src = '/path/to/default-avatar.png'; }}
           />}
               <div className="event-content">
                <p className='event-title'>Techember <br/>Fest "25</p> 
               
                <p className='event-text'> 
                📍04 Rumen road, Ikoyi, Lagos<br/>
                  March 15, 2025 | 7:00 PM
                </p>
               </div>
          <div className="person-names">
          <p className="ticket-name"><strong>Name:</strong> {name || 'N/A'}</p>
          <p className="ticket-email"><strong>Email:</strong> {email || 'N/A'}</p>
          </div>
        
        </div>
        <div className="booked-button">
          <button className="book-another" onClick={redirBack}>Book Another Ticket</button>
          <button type="button" className="download" onClick={redirGetTicket}>Download Ticket</button>
        </div>
      </div>
    </section>
  );
};

export default BookTickited;
