import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Card from "../../components/cards/Card";
import NavBar from "../../components/navbar/NavBar";
import Footer from "../../components/footer/Footer";
import "./BandInfo.css";
import BottomMenu from "../../components/bottommenu/BottomMenu";
import SocialsBar from "../../components/socials-bar/SocialsBar";

function BandInfo() {
  const { id } = useParams();
  const [band, setBand] = useState(null);

  useEffect(() => {
    async function fetchBandData() {
      try {
        const response = await fetch("/data/bands-data.json");
        const bands = await response.json();
        const selectedBand = bands.find((band) => band.id === id);
        setBand(selectedBand);
      } catch (error) {
        console.error("Error al cargar los datos de la banda:", error);
      }
    }
    fetchBandData();
  }, [id]);

  if (!band) {
    return <div>Cargando...</div>;
  }

  return (
    <>
      <div className="header">
        <NavBar />
      </div>
      <div className="wrapper">
        <div className="section-container">
          <div className="card-container">
            <Card
              panelImage={band["panel-image"]}
              title={band.title}
              text={band.text}
            />
          </div>
          <div className="social-bar-container" style={{ margin: "1rem" }}>
            <SocialsBar socialLinks={band["social-links"]} />
          </div>
        </div>
        <Footer />
      </div>
      <BottomMenu />
    </>
  );
}

export default BandInfo;

