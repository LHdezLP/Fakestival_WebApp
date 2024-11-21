import Footer from "../../components/footer/Footer.jsx";
import "./Mainpage.css";
import BottomMenu from "../../components/bottommenu/BottomMenu.tsx";
import NavBar from "../../components/navbar/NavBar.tsx";
import ArtistList from "../../components/artistlist/ArtistList.tsx";

function Mainpage() {
  return (
    <>
      <div className="header">
        <NavBar></NavBar>
      </div>
      <div className="wrapper">
        <div className="section-container">
          <div className="overlay-image"></div>
          <img
            src="src\img\festival de música cartel ficticio.png"
            alt="front-image"
            className="front-img"
          />
        </div>

        <div className="section-container">
          <div className="artistlist">
            <ArtistList />
          </div>
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
