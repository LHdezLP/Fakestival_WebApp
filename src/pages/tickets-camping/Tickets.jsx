import Footer from "../../components/footer/Footer";
import "./Tickets.css";
import NavBar from "../../components/navbar/NavBar";
import BottomMenu from "../../components/bottommenu/BottomMenu";
import TicketPanel from "../../components/ticket-panel/TicketPanel";

function Tickets() {
  return (
    <>
      <div className="header">
        <NavBar></NavBar>
      </div>
      <div className="wrapper">
        <div className="section-container">
          <img src="/img/main-stage-cropped.jpg" alt="front-image" className="front-img" />
        </div>

        <div className="ticket-container">
          <div className="ticket-panel">
            <TicketPanel />
          </div>
        </div>

        

        <div className="section-container">
          <img src="/img/knotfest-1161.jpg" alt="front-image" className="front-img" />
        </div>
        <Footer />
      </div>
      <div className="bottom-menu">
        <BottomMenu></BottomMenu>
      </div>
    </>
  );
}

export default Tickets;
