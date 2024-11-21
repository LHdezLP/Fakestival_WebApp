// import { useEffect, useState } from "react";
// import ticketsService from "../../services/firebase/tickets.service";
// import Header from "../../components/header/Header";

import Footer from "../../components/footer/Footer";

import frontImage from "../../img/main-stage-cropped.jpg";
import sectionImage from "../../img/knotfest-1161.jpg";
import "./Tickets.css";

import NavBar from "../../components/navbar/NavBar";
import BottomMenu from "../../components/bottommenu/BottomMenu";
// import TicketForm from "../../components/ticket-form/TicketForm";
import TicketPanel from "../../components/ticket-panel/TicketPanel";

function Tickets() {
  return (
    <>
      <div className="header">
        <NavBar></NavBar>
      </div>
      <div className="wrapper">
        <div className="section-container">
          <img src={frontImage} alt="front-image" className="front-img" />
        </div>

        <div className="ticket-container">
          <div className="ticket-panel">
            <TicketPanel />
          </div>
        </div>

        

        <div className="section-container">
          <img src={sectionImage} alt="front-image" className="front-img" />
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
