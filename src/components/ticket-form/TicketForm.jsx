// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";

function TicketForm (){
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    tickets: 1,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you, ${formData.name}! You purchased ${formData.tickets} ticket(s).`);
    
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: "400px", margin: "0 auto" }}>
      <h2 style={{color: "RGB(239, 176, 98)"}}>Buy Tickets</h2>
      <div style={{ marginBottom: "1em" }}>
        <label htmlFor="name" style={{ display: "block", marginBottom: ".5em" , color: "RGB(239, 176, 98)"}}>
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          style={{ width: "100%", padding: ".5em", boxSizing: "border-box" }}
        />
      </div>

      <div style={{ marginBottom: "1em" }}>
        <label htmlFor="email" style={{ display: "block", marginBottom: ".5em" , color: "RGB(239, 176, 98)"}}>
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          style={{ width: "100%", padding: ".5em", boxSizing: "border-box" }}
        />
      </div>

      <div style={{ marginBottom: "1em" }}>
        <label htmlFor="tickets" style={{ display: "block", marginBottom: ".5em" , color: "RGB(239, 176, 98)"}}>
          Number of Tickets
        </label>
        <input
          type="number"
          id="tickets"
          name="tickets"
          value={formData.tickets}
          onChange={handleChange}
          min="1"
          max="10"
          required
          style={{ width: "100%", padding: ".5em", boxSizing: "border-box" }}
        />
      </div>

      <button type="submit" style={{ padding: ".7em 1.5em", backgroundColor: "#007BFF", color: "#fff", border: "none", borderRadius: "4px", cursor: "pointer" }}>
        Submit
      </button>
    </form>
  );
}

export default TicketForm;
