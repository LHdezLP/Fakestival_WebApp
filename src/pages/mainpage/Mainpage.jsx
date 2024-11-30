import { useEffect, useState } from "react";
import Footer from "../../components/footer/Footer.jsx";
import "./Mainpage.css";
import BottomMenu from "../../components/bottommenu/BottomMenu.tsx";
import NavBar from "../../components/navbar/NavBar.tsx";
import ArtistList from "../../components/artistlist/ArtistList.tsx";
import BandCard from "../../components/list-items/band-card/BandCard.jsx";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Mainpage() {
  const [bands, setBands] = useState([]);

  useEffect(() => {
    async function fetchBands() {
      try {
        const response = await fetch("/data/bands-data.json");
        const data = await response.json();
        setBands(data);
      } catch (error) {
        console.error("Error al cargar el archivo JSON:", error);
      }
    }

    fetchBands();
  }, []);

  const sliderSettings = {
    dots: true, // Habilita los puntos debajo del slider
    arrows: true, // Habilita las flechas predeterminadas
    infinite: true,
    speed: 500,
    slidesToShow: 2, // Máximo de 3 BandCards visibles
    slidesToScroll: 1, // Mueve una BandCard a la vez
    responsive: [
      {
        breakpoint: 300,
        settings: {
          slidesToShow:1,
          slidesToScroll: 1,
        },
      }
    ],
  };

  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 992);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 760);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
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
            src={
              isLargeScreen
                ? "img/tips-for-playing-music-festivals-copia.jpg"
                : "img/festival de música cartel ficticio.png"
            }
            alt="front-image"
            className="front-img"
          />
        </div>

        <div className="section-container">
          <div className="artistlist">
            <ArtistList />
          </div>
        </div>

        <div className="bands-section-container">
          <ul className="bands-list">
            {bands.map((band) => (
              <Link
                to={`/band-info/${band.id}`}
                key={band.id}
                className="artist-link"
              >
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

        <div className="carousel-container">
          <Slider {...sliderSettings}>
            {bands.map((band) => (
              <div key={band.id} className="band-slide">
                <Link to={`/band-info/${band.id}`} className="artist-link">
                  <BandCard
                    previewImage={band["preview-image"]}
                    title={band.title}
                    className="band-card"
                  />
                </Link>
              </div>
            ))}
          </Slider>
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
