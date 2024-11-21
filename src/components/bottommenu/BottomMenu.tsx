import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faClock, faStore, faBars } from "@fortawesome/free-solid-svg-icons";
import { faSpotify } from "@fortawesome/free-brands-svg-icons";
import './BottomMenu.css';
import React from 'react';

function BottomMenu() {
  return (
      <nav className="menubar navbar-expand-lg bg-body-tertiary" style={{
          padding: "0px", 
          margin: "0px", 
          position: "fixed", 
          bottom: "0", 
          width: "100%", 
          backgroundColor: "#000",
          zIndex: "10"
      }}>
          <div className="menubar-container container-fluid d-flex align-items-center" style={{
              display: "flex", 
              flexDirection: "row", 
              justifyContent: "space-between", 
              height: "100%",
              padding: "0 0px"
          }}>
              
              <div className="icon" style={{ marginTop: "5px", marginLeft: "10px" }}>
                  <FontAwesomeIcon icon={faHome} style={{ fontSize: "35px", color: "RGB(239, 176, 98)", margin: "10px" }} />
              </div>
              
              <div className="icon"style={{ marginTop: "5px" }}>
                  <FontAwesomeIcon icon={faSpotify} style={{ fontSize: "35px", color: "RGB(239, 176, 98)", margin: "10px" }} />
              </div>
              
              <div className="icon"style={{ marginTop: "5px" }}>
                  <FontAwesomeIcon icon={faClock} style={{ fontSize: "35px", color: "RGB(239, 176, 98)", margin: "10px" }} />
              </div>
              
              <div className="icon"style={{ marginTop: "5px" }}>
                  <FontAwesomeIcon icon={faStore} style={{ fontSize: "35px", color: "RGB(239, 176, 98)", margin: "10px" }} />
              </div>
              
              <div className="vertical-line" style={{
                  width: "4px",
                  height: "35px",
                  backgroundColor: "RGB(239, 176, 98)",
                  margin: "15px 15px"
              }}></div>
              
              <div className="icon" style={{ marginRight: "30px", marginTop: "3px" }}>
                  <FontAwesomeIcon icon={faBars} style={{ fontSize: "40px", color: "RGB(239, 176, 98)" }} />
              </div>
              
          </div>
      </nav>
  );
}






export default BottomMenu;
