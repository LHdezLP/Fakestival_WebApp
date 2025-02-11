import React, { useState } from "react";
import "./TicketPanel.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import BuyingForm from "../buying-form/BuyingForm";

function TicketPanel() {
  const [counts, setCounts] = useState({
    standard: 0,
    vip: 0,
    premium: 0,
  });
  const [showModal, setShowModal] = useState(false);

  const handleCounterChange = (type, value) => {
    setCounts((prev) => {
      const newValue = Math.min(5, Math.max(0, prev[type] + value));
      return { ...prev, [type]: newValue };
    });
  };

  const handleInputChange = (type, e) => {
    const newValue = Math.min(5, Math.max(0, Number(e.target.value) || 0));
    setCounts((prev) => ({ ...prev, [type]: newValue }));
  };

  const handleProceed = () => {
    if (counts.standard + counts.vip + counts.premium > 0) {
      setShowModal(true);
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const renderCounter = (type, price, label) => (
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
          {label}
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
          | {price}€
        </span>
      </div>
      <div className="counter-container">
        <button
          className="counter-button"
          onClick={() => handleCounterChange(type, -1)}
          aria-label={`Disminuir ${label}`}
          style={{
            fontSize: "24px",
            color: "rgb(239, 176, 98)",
            background: "none",
            border: "none",
            cursor: "pointer",
          }}
        >
          <i className="fas fa-circle-minus"></i>
        </button>
        <label htmlFor={`${type}-input`} className="sr-only">{label}</label>
        <input
          id={`${type}-input`}  // ID único para cada tipo de ticket
          type="number"
          className="counter-number"
          value={counts[type]}
          onChange={(e) => handleInputChange(type, e)}
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
        <button
          className="counter-button"
          onClick={() => handleCounterChange(type, 1)}
          aria-label={`Aumentar ${label}`}
          style={{
            fontSize: "24px",
            color: "rgb(239, 176, 98)",
            background: "none",
            border: "none",
            cursor: "pointer",
          }}
        >
          <i className="fas fa-circle-plus"></i>
        </button>
      </div>
    </li>
  );

  return (
    <>
      <div className="list-container">
        <ul className="ticket-list">
          {renderCounter("standard", "99.99", "Standard Pass")}
          {renderCounter("vip", "119.99", "VIP Pass")}
          {renderCounter("premium", "149.99", "Premium Pass")}
        </ul>

        <div className="proceed-buttom" style={{ cursor: "pointer" }}>
          <div className="ticket-description">
            <button
              onClick={handleProceed}
              disabled={counts.standard + counts.vip + counts.premium === 0}
              style={{
                fontFamily: "Oswald, sans-serif",
                fontSize: "24px",
                fontWeight: "bold",
                color: counts.standard + counts.vip + counts.premium === 0 ? "#ccc" : "#3A415F",
                background: "none",
                border: "none",
                cursor: counts.standard + counts.vip + counts.premium === 0 ? "not-allowed" : "pointer",
              }}
              aria-label="Proceder con la compra"
            >
              PROCEED
            </button>
          </div>
        </div>
      </div>

      {showModal && <BuyingForm counts={counts} handleCloseModal={handleCloseModal} />}
    </>
  );
}

export default TicketPanel;
