import React, { useState } from "react";
import "./TicketPanel.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

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

  const handleProceed = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleInputChange = (type, e) => {
    const newValue = Math.min(5, Math.max(0, Number(e.target.value) || 0));
    setCounts((prev) => ({ ...prev, [type]: newValue }));
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
        <input
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

        {/* Botón Proceed */}
        <div className="proceed-buttom" style={{cursor: "pointer"}}>
          <div className="ticket-description">
            <button
              onClick={handleProceed}
              style={{
                fontFamily: "Oswald, sans-serif",
                fontSize: "24px",
                fontWeight: "bold",
                color: "#3A415F",
                background: "none",
                border: "none",
                cursor: "pointer",
              }}
              aria-label="Proceder con la compra"
            >
              PROCEED
            </button>
          </div>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div
          style={{
            position: "fixed",
            top: "-20px",
            left: 0,
            bottom: "50px",
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              backgroundColor: "white",
              padding: "20px",
              borderRadius: "5px",
              width: "80%",
              maxWidth: "800px",
              overflowY: "auto",
              maxHeight: "100vh",
              position: "relative",
            }}
          >
            <button
              className="close-modal"
              onClick={handleCloseModal}
              style={{
                position: "absolute",
                top: "10px",
                right: "10px",
                fontSize: "30px",
                cursor: "pointer",
                border: "none",
                background: "none",
                color: "#000",
              }}
            >
              &times;
            </button>
            <div className="container">
              <main>
                <div className="row g-5">
                  <div className="col-md-5 col-lg-4 order-md-last">
                    <h4
                      className="d-flex justify-content-between align-items-center mb-3"
                      style={{
                        color: "#f1b04a",
                      }}
                    >
                      <span className="text-primary">Tu carro</span>
                      <span className="badge bg-primary rounded-pill">
                        {counts.standard + counts.vip + counts.premium}
                      </span>
                    </h4>
                    <ul
                      className="list-group mb-3"
                      style={{ color: "#f1b04a" }}
                    >
                      {/* Lista de entradas */}
                      {counts.standard > 0 && (
                        <li className="list-group-item d-flex justify-content-between lh-sm">
                          <div>
                            <h6 className="my-0">Standard Pass</h6>
                            <small className="text-muted">
                              Entrada estándar
                            </small>
                          </div>
                          <span className="text-muted">
                            {counts.standard * 99.99}€
                          </span>
                        </li>
                      )}
                      {counts.vip > 0 && (
                        <li className="list-group-item d-flex justify-content-between lh-sm">
                          <div>
                            <h6 className="my-0">VIP Pass</h6>
                            <small className="text-muted">Entrada VIP</small>
                          </div>
                          <span className="text-muted">
                            {counts.vip * 119.99}€
                          </span>
                        </li>
                      )}
                      {counts.premium > 0 && (
                        <li className="list-group-item d-flex justify-content-between lh-sm">
                          <div>
                            <h6 className="my-0">Premium Pass</h6>
                            <small className="text-muted">
                              Entrada premium
                            </small>
                          </div>
                          <span className="text-muted">
                            {counts.premium * 149.99}€
                          </span>
                        </li>
                      )}
                    </ul>
                  </div>
                  <div className="col-md-7 col-lg-8">
                    <form className="card p-2">
                      <div className="row g-3">
                        <div className="col-12">
                          <label htmlFor="name" className="form-label">
                            Nombre Completo
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="name"
                            placeholder="Juan Perez"
                            required
                          />
                        </div>
                        <div className="col-12">
                          <label htmlFor="email" className="form-label">
                            Correo Electrónico
                          </label>
                          <input
                            type="email"
                            className="form-control"
                            id="email"
                            placeholder="juan.perez@email.com"
                            required
                          />
                        </div>
                        <div className="col-12">
                          <label htmlFor="paymentMethod" className="form-label">
                            Método de pago
                          </label>
                          <select
                            id="paymentMethod"
                            className="form-select"
                            required
                          >
                            <option value="">Seleccionar método de pago</option>
                            <option value="creditCard">
                              Tarjeta de Crédito
                            </option>
                            <option value="paypal">PayPal</option>
                          </select>
                        </div>
                      </div>
                      <button
                        className="w-100 btn btn-primary btn-lg"
                        type="submit"
                      >
                        Continuar con el pago
                      </button>
                    </form>
                  </div>
                </div>
              </main>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default TicketPanel;
