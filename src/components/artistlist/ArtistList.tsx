import BandCard from '../list-items/band-card/BandCard';
import './ArtistList.css';
import React from 'react';
function ArtistList() {

  return (

    <div className="artists-list-container">

      <ul className="act-schedule-buttons">
        <li>
          <a href="/home" className="act-schedule-button">Bands</a>
        </li>
        <li>|</li>
        <li>
          <a href="#" className="act-schedule-button">Shop</a>
        </li>
        <li>|</li>
        <li>
          <a href="/tickets" className="act-schedule-button">Tickets</a>
        </li>
      </ul>


      
    </div>
  );
}

export default ArtistList;