// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import "./TicketPanel.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

function TicketPanel() {
  const [counts, setCounts] = useState({
    standard: 0,
    vip: 0,
    premium: 0,
  });

  const handleCounterChange = (type, value) => {
    setCounts((prev) => {
      const newValue = Math.min(5, Math.max(0, prev[type] + value));
      return { ...prev, [type]: newValue };
    });
  };

  return (
    <>
      <div className="list-container">
        <ul className="ticket-list">
          {/* Standard Pass */}
          <li className="ticket-item">
            <div className="ticket-description">
              <span
                className="ticket-type"
                style={{
                  fontFamily: "Oswald, sans-serif",
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
                  fontFamily: "Oswald, sans-serif",
                  fontSize: "18px",
                  fontWeight: "bold",
                  color: "#3A415F",
                }}
              >
                | 99.99€
              </span>
            </div>
            <div className="counter-container">
              <i
                className="quitar-entrada fas fa-circle-minus"
                onClick={() => handleCounterChange("standard", -1)}
                style={{
                  fontSize: "24px",
                  color: "rgb(239, 176, 98)",
                  cursor: "pointer",
                }}
              ></i>
              <input
                type="number"
                className="counter-number"
                value={counts.standard}
                readOnly
                style={{
                  fontSize: "22px",
                  fontWeight: "bold",
                  color: "#3A415F",
                  fontFamily: "Oswald, sans-serif",
                  textAlign: "center",
                  width: "50px",
                  border: "1px solid #ccc",
                  borderRadius: "4px",
                }}
              />
              <i
                className="añadir-entrada fas fa-circle-plus"
                onClick={() => handleCounterChange("standard", 1)}
                style={{
                  fontSize: "24px",
                  color: "rgb(239, 176, 98)",
                  cursor: "pointer",
                }}
              ></i>
            </div>
          </li>

          {/* VIP Pass */}
          <li className="ticket-item">
            <div className="ticket-description">
              <span
                className="ticket-type"
                style={{
                  fontFamily: "Oswald, sans-serif",
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
                  fontFamily: "Oswald, sans-serif",
                  fontSize: "18px",
                  fontWeight: "bold",
                  color: "#3A415F",
                }}
              >
                | 119.99€
              </span>
            </div>
            <div className="counter-container">
              <i
                className="quitar-entrada fas fa-circle-minus"
                onClick={() => handleCounterChange("vip", -1)}
                style={{
                  fontSize: "24px",
                  color: "rgb(239, 176, 98)",
                  cursor: "pointer",
                }}
              ></i>
              <input
                type="number"
                className="counter-number"
                value={counts.vip}
                readOnly
                style={{
                  fontSize: "22px",
                  fontWeight: "bold",
                  color: "#3A415F",
                  fontFamily: "Oswald, sans-serif",
                  textAlign: "center",
                  width: "50px",
                  border: "1px solid #ccc",
                  borderRadius: "4px",
                }}
              />
              <i
                className="añadir-entrada fas fa-circle-plus"
                onClick={() => handleCounterChange("vip", 1)}
                style={{
                  fontSize: "24px",
                  color: "rgb(239, 176, 98)",
                  cursor: "pointer",
                }}
              ></i>
            </div>
          </li>

          {/* Premium Pass */}
          <li className="ticket-item">
            <div className="ticket-description">
              <span
                className="ticket-type"
                style={{
                  fontFamily: "Oswald, sans-serif",
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
                  fontFamily: "Oswald, sans-serif",
                  fontSize: "18px",
                  fontWeight: "bold",
                  color: "#3A415F",
                }}
              >
                | 149.99€
              </span>
            </div>
            <div className="counter-container">
              <i
                className="quitar-entrada fas fa-circle-minus"
                onClick={() => handleCounterChange("premium", -1)}
                style={{
                  fontSize: "24px",
                  color: "rgb(239, 176, 98)",
                  cursor: "pointer",
                }}
              ></i>
              <input
                type="number"
                className="counter-number"
                value={counts.premium}
                readOnly
                style={{
                  fontSize: "22px",
                  fontWeight: "bold",
                  color: "#3A415F",
                  fontFamily: "Oswald, sans-serif",
                  textAlign: "center",
                  width: "50px",
                  border: "1px solid #ccc",
                  borderRadius: "4px",
                }}
              />
              <i
                className="añadir-entrada fas fa-circle-plus"
                onClick={() => handleCounterChange("premium", 1)}
                style={{
                  fontSize: "24px",
                  color: "rgb(239, 176, 98)",
                  cursor: "pointer",
                }}
              ></i>
            </div>
          </li>
        </ul>

        {/* Botón Proceed */}
        <div className="proceed-buttom">
          <div className="ticket-description">
            <span
              className="ticket-type"
              style={{
                fontFamily: "Oswald, sans-serif",
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
