// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import "./TicketPanel.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

function TicketPanel() {
  return (
    <>
      <div className="list-container">
        <ul className="ticket-list">
          
          <li className="ticket-item">
            <div className="ticket-description">
              <span
                className="ticket-type"
                style={{
                  fontFamily:"Oswald, sans-serif",
                  fontSize: "18px",
                  fontWeight: "bold",
                  color: "#3A415F",
                }}
              >
                Standar Pass
              </span>
              <span
                className="ticket-name"
                style={{
                  fontFamily:"Oswald, sans-serif",
                  fontSize: "18px",
                  fontWeight: "bold",
                  color: "#3A415F",
                }}
              >
                | 99.99€
              </span>
            </div>
            <div
              className="counter-container"
              style={{ display: "flex", alignItems: "center" }}
            >
              <i
                className="quitar-entrada fas fa-circle-minus"
                style={{
                  fontSize: "24px",
                  color: "rgb(239, 176, 98)",
                  cursor: "pointer",
                }}
              ></i>

              <span className="counter-number"
                style={{
                  fontSize: "22px",
                  fontWeight: "bold",
                  color: "#3A415F",
                }}
              >
                0
              </span>

              <i
                className=" añadir-entrada fas fa-circle-plus"
                style={{
                  fontSize: "24px",
                  color: "rgb(239, 176, 98)",
                  cursor: "pointer",
                }}
              ></i>
            </div>
          </li>

          <li className="ticket-item">
            <div className="ticket-description">
              <span
                className="ticket-type"
                style={{
                  fontFamily:"Oswald, sans-serif",
                  fontSize: "18px",
                  fontWeight: "bold",
                  color: "#3A415F",
                }}
              >
                VIP Pass
              </span>
              <span
                className="ticket-name"
                style={{
                  fontFamily:"Oswald, sans-serif",
                  fontSize: "18px",
                  fontWeight: "bold",
                  color: "#3A415F",
                }}
              >
                | 119.99€
              </span>
            </div>
            <div
              className="counter-container"
              style={{ display: "flex", alignItems: "center" }}
            >
              <i
                className="quitar-entrada fas fa-circle-minus"
                style={{
                  fontSize: "24px",
                  color: "rgb(239, 176, 98)",
                  cursor: "pointer",
                }}
              ></i>

              <span className="counter-number"
                style={{
                  fontSize: "22px",
                  fontWeight: "bold",
                  color: "#3A415F",
                }}
              >
                0
              </span>

              <i
                className=" añadir-entrada fas fa-circle-plus"
                style={{
                  fontSize: "24px",
                  color: "rgb(239, 176, 98)",
                  cursor: "pointer",
                }}
              ></i>
            </div>
          </li>

          <li className="ticket-item">
            <div className="ticket-description">
              <span
                className="ticket-type"
                style={{
                  fontFamily:"Oswald, sans-serif",
                  fontSize: "18px",
                  fontWeight: "bold",
                  color: "#3A415F",
                }}
              >
                Premium Pass 
              </span>
              <span
                className="ticket-name"
                style={{
                  fontFamily:"Oswald, sans-serif",
                  fontSize: "18px",
                  fontWeight: "bold",
                  color: "#3A415F",
                }}
              >
                | 149.99€
              </span>
            </div>
            <div
              className="counter-container"
              style={{ display: "flex", alignItems: "center" }}
            >
              <i
                className="quitar-entrada fas fa-circle-minus"
                style={{
                  fontSize: "24px",
                  color: "rgb(239, 176, 98)",
                  cursor: "pointer",
                }}
              ></i>

              <span className="counter-number"
                style={{
                  fontSize: "22px",
                  fontWeight: "bold",
                  color: "#3A415F",
                }}
              >
                0
              </span>

              <i
                className=" añadir-entrada fas fa-circle-plus"
                style={{
                  fontSize: "24px",
                  color: "rgb(239, 176, 98)",
                  cursor: "pointer",
                }}
              ></i>
            </div>
          </li>
        </ul>

        <div className="proceed-buttom">
          <div className="ticket-description">
            <span
              className="ticket-type"
              style={{
                fontFamily:"Oswald, sans-serif",
                fontSize: "24px",
                fontWeight: "bold",
                color: "#3A415F",
              }}
            >
              PROCEED
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
export default TicketPanel;
