import './ArtistList.css';
import React from 'react';
function ArtistList() {

  return (

    <div className="artists-list-container">

      <ul className="act-schedule__buttons">
        <li>
          <a href="#" className="act-schedule__button -active">Bands</a>
        </li>
        <li>|</li>
        <li>
          <a href="#" className="act-schedule__button">Shop</a>
        </li>
        <li>|</li>
        <li>
          <a href="/tickets" className="act-schedule__button">Tickets</a>
        </li>
      </ul>


      <ul className="artists-list">
        <li className="artists-list__item">
          <a href="#" className="artist__link">
            <div className="artist__description">
              <span className="artist__type">BAND</span>
              <span className="artist__name">| Parkway Drive</span>
            </div>
            <div className='gradient'></div>
            <div className='img-container'><img
              src="src\img\descarga.jpeg"
              alt="Imagen de la banda"
              className="artist__image"
            /></div>
            
          </a>
        </li>

        <li className="artists-list__item">
          <a href="#" className="artist__link">
            <div className="artist__description">
              <span className="artist__type">BAND</span>
              <span className="artist__name">| Linking Park</span>
            </div>
            <div className='gradient'></div>
            <div className='img-container'><img
              src="src\img\descarga.jpeg"
              alt="Imagen de la banda"
              className="artist__image"
            /></div>
            
          </a>
        </li>

        <li className="artists-list__item">
          <a href="#" className="artist__link">
            <div className="artist__description">
              <span className="artist__type">BAND</span>
              <span className="artist__name">| Bury Tomorrow</span>
            </div>
            <div className='gradient'></div>
            <div className='img-container'><img
              src="src\img\descarga.jpeg"
              alt="Imagen de la banda"
              className="artist__image"
            /></div>
            
          </a>
        </li>


      </ul>
    </div>
  );
}

export default ArtistList;