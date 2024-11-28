import { useEffect, useState } from 'react';
import Footer from "../../components/footer/Footer.jsx";
import "./Mainpage.css";
import BottomMenu from "../../components/bottommenu/BottomMenu.tsx";
import NavBar from "../../components/navbar/NavBar.tsx";
import ArtistList from "../../components/artistlist/ArtistList.tsx";
import BandCard from "../../components/list-items/band-card/BandCard.jsx";
import { Link } from "react-router-dom";

function Mainpage() {
  
  const [bands, setBands] = useState([]);

  
  useEffect(() => {
    async function fetchBands() {
      try {
        const response = await fetch('/data/bands-data.json');
        const data = await response.json();
        setBands(data);
      } catch (error) {
        console.error('Error al cargar el archivo JSON:', error);
      }
    }

    fetchBands();
  }, []); 

  return (
    <>
      <div className="header">
        <NavBar></NavBar>
      </div>
      <div className="wrapper">
        <div className="section-container">
          <div className="overlay-image"></div>
          <img
            src="img\festival de música cartel ficticio.png"
            alt="front-image"
            className="front-img"
          />
        </div>

        <div className="section-container">
          <div className="artistlist">
            <ArtistList />
          </div>
        </div>

        <div className="section-container">
          <ul className="bands-list">
            {bands.map((band) => (
              <Link to={`/band-info/${band.id}`} key={band.id} className="artist-link">
                <li className="bands-list-item">
                  <BandCard
                    previewImage={band["preview-image"]}
                    title={band.title}
                  />
                </li>
              </Link>
            ))}
          </ul>
        </div>

        <Footer />
      </div>
      <div className="bottom-menu">
        <BottomMenu></BottomMenu>
      </div>
    </>
  );
}

export default Mainpage;
