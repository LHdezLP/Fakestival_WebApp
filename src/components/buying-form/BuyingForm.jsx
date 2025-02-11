import React, { useState } from "react";
import "./BuyingForm.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

function BuyingForm({ counts, handleCloseModal }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    paymentMethod: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    paymentMethod: "",
  });

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
    setErrors((prev) => ({ ...prev, [id]: "" }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = "El nombre es obligatorio.";
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = "El correo electrónico es obligatorio.";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Por favor, introduce un correo válido. Ejemplo: persona@algo.com";
    }
    if (!formData.paymentMethod) {
      newErrors.paymentMethod = "Selecciona un método de pago.";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Formulario válido, datos enviados:", formData);
      alert("Compra realizada con éxito.");
      handleCloseModal();
    }
  };

  const totalPrice =
    counts.standard * 99.99 +
    counts.vip * 119.99 +
    counts.premium * 149.99;

  return (
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
        zIndex: 100000,
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
                <ul className="list-group mb-3" style={{ color: "#f1b04a" }}>
                  {counts.standard > 0 && (
                    <li className="list-group-item d-flex justify-content-between lh-sm">
                      <div>
                      <h6 className="my-0">{`Standard Pass x${counts.standard}`}</h6>
                      </div>
                      <span className="text-muted">
                        {counts.standard * 99.99}€
                      </span>
                    </li>
                  )}
                  {counts.vip > 0 && (
                    <li className="list-group-item d-flex justify-content-between lh-sm">
                      <div>
                      <h6 className="my-0">{`VIP Pass x${counts.vip}`}</h6>
                      </div>
                      <span className="text-muted">
                        {counts.vip * 119.99}€
                      </span>
                    </li>
                  )}
                  {counts.premium > 0 && (
                    <li className="list-group-item d-flex justify-content-between lh-sm">
                      <div>
                        <h6 className="my-0">{`Premium Pass x${counts.premium}`}</h6>
                      </div>
                      <span className="text-muted">
                        {counts.premium * 149.99}€
                      </span>
                    </li>
                  )}
                  <li className="list-group-item d-flex justify-content-between">
                    <strong>Total</strong>
                    <strong>{totalPrice.toFixed(2)}€</strong>
                  </li>
                </ul>
              </div>
              <div className="col-md-7 col-lg-8">
                <form className="card p-2" onSubmit={handleSubmit}>
                  <div className="row g-3">
                    <div className="col-12">
                      <label htmlFor="name" className="form-label">
                        Nombre Completo
                      </label>
                      <input
                        type="text"
                        className={`form-control ${errors.name ? "is-invalid" : ""}`}
                        id="name"
                        placeholder="Juan Perez"
                        value={formData.name}
                        onChange={handleInputChange}
                        
                      />
                      {errors.name && (
                        <div className="invalid-feedback">{errors.name}</div>
                      )}
                    </div>
                    <div className="col-12">
                      <label htmlFor="email" className="form-label">
                        Correo Electrónico
                      </label>
                      <input
                        type="text"
                        className={`form-control ${errors.email ? "is-invalid" : ""}`}
                        id="email"
                        placeholder="juan.perez@email.com"
                        value={formData.email}
                        onChange={handleInputChange}
                        
                      />
                      {errors.email && (
                        <div className="invalid-feedback">{errors.email}</div>
                      )}
                    </div>
                    <div className="col-12">
                      <label htmlFor="paymentMethod" className="form-label">
                        Método de pago
                      </label>
                      <select
                        id="paymentMethod"
                        className={`form-select ${errors.paymentMethod ? "is-invalid" : ""}`}
                        value={formData.paymentMethod}
                        onChange={handleInputChange}
                        
                      >
                        <option value="">Seleccionar método de pago</option>
                        <option value="creditCard">Tarjeta de Crédito</option>
                        <option value="paypal">PayPal</option>
                      </select>
                      {errors.paymentMethod && (
                        <div className="invalid-feedback">{errors.paymentMethod}</div>
                      )}
                    </div>
                  </div>
                  <button
                    className="w-100 btn btn-primary btn-lg mt-3"
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
  );
}

export default BuyingForm;
