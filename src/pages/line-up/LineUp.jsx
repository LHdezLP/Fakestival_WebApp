import BottomMenu from "../../components/bottommenu/BottomMenu";
import DayLineupBar from "../../components/day-lineup-bar/DayLineupBar";
import Footer from "../../components/footer/Footer";
import LineupCards from "../../components/list-items/lineup-cards/LineupCards";
import NavBar from "../../components/navbar/NavBar";
import "./LineUp.css";

function LineUp() {
  return (
    <>
      <div className="header">
        <NavBar></NavBar>
      </div>
      <div className="lineup-wrapper">
        <div className="day-lineup-container">
          <DayLineupBar></DayLineupBar>
        </div>

        <div className="band-schechdule-container">
          <LineupCards/>
        </div>

        <div className="band-schechdule-container">
          <LineupCards/>
        </div>

        <div className="band-schechdule-container">
          <LineupCards/>
        </div>

        <div className="band-schechdule-container">
          <LineupCards/>
        </div>

        <div className="band-schechdule-container">
          <LineupCards/>
        </div>

        <div className="band-schechdule-container">
          <LineupCards/>
        </div>
        <Footer />
      </div>

      <div className="bottom-menu">
        <BottomMenu></BottomMenu>
      </div>
    </>
  );
}

export default LineUp;
