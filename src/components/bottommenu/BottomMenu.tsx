import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faClock,
  faStore,
  faBars,
  faTicket,
  faQuestion,
} from "@fortawesome/free-solid-svg-icons";
import { faSpotify } from "@fortawesome/free-brands-svg-icons";
import "./BottomMenu.css";
import React from "react";
import { Link } from "react-router-dom";

function BottomMenu() {
  return (
    <nav
      className="menubar navbar-expand-lg bg-body-tertiary"
      style={{
        padding: "0px",
        margin: "0px",
        position: "fixed",
        bottom: "0",
        width: "100%",
        backgroundColor: "#000",
        zIndex: "10",
      }}
    >
      <div
        className="menubar-container container-fluid d-flex align-items-center"
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          height: "100%",
          padding: "0 0px",
        }}
      >
        <div className="icon" style={{ marginTop: "5px", marginLeft: "10px" }}>
          <a href="/home">
            <FontAwesomeIcon
              icon={faHome}
              style={{
                fontSize: "35px",
                color: "RGB(239, 176, 98)",
                margin: "10px",
              }}
            />
          </a>
        </div>

        <div className="icon" style={{ marginTop: "5px" }}>
          <a
            href="https://open.spotify.com/playlist/2qpqTMvVyKV6tpObhK1GJG"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={faSpotify}
              style={{
                fontSize: "35px",
                color: "RGB(239, 176, 98)",
                margin: "10px",
              }}
            />
          </a>
        </div>

        <div className="icon" style={{ marginTop: "5px" }}>
          <a href="/line-up">
            <FontAwesomeIcon
              icon={faClock}
              style={{
                fontSize: "35px",
                color: "RGB(239, 176, 98)",
                margin: "10px",
              }}
            />
          </a>
        </div>

        <div className="icon" style={{ marginTop: "5px" }}>
          <a href="/tickets">
            <FontAwesomeIcon
              icon={faTicket}
              style={{
                fontSize: "35px",
                color: "RGB(239, 176, 98)",
                margin: "10px",
              }}
            />
          </a>
        </div>

        <div
          className="vertical-line"
          style={{
            width: "4px",
            height: "35px",
            backgroundColor: "RGB(239, 176, 98)",
            margin: "15px 15px",
          }}
        ></div>

        <div className="icon" style={{ marginRight: "30px", marginTop: "3px" }}>
          <a href="/help/Bienvenidos.html" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon
              icon={faQuestion}
              style={{ fontSize: "40px", color: "RGB(239, 176, 98)" }}
            />
          </a>
        </div>
      </div>
    </nav>
  );
}

export default BottomMenu;
