import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/nav.css'
import Thumb from '../../assets/logoimages/thumb.png'
import Ticz from '../../assets/logoimages/ticz.png'
import Line from '../../assets/logoimages/Line.png'

const Nav = () => {
 
  return (
    <nav className="nav">
      <ul>
        <li className="logo-left">
          <span className='thumb'><img src={Thumb} alt="Logo" /></span>
          <span className='ticz'> <img src={Ticz}   alt="Logo" /></span>
          </li>
        <li className="group-middle">
          <Link to="/events">Events</Link>
          <Link to="/my-tickets">My Tickets</Link>
          <Link to="/about-project">About Project</Link>
          {/* <Link to="/attendee-details">attendee</Link> */}
        </li>
        <li className="tickets-right">
          <Link to="/my-tickets" >My Tickets < img src={Line} alt="arrow"/></Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
