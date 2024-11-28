import { UserOutlined } from "@ant-design/icons";
import './NavBar.css';
import React from 'react';

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary w-100 bg-dark" style={{ position: "fixed", padding: "0" }}>
      <div className="container-fluid d-flex align-items-center h-100" style={{
        backgroundColor: "black",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        padding: "0 10px"
      }}>

        
        <div className="logo d-flex align-items-center" style={{ textAlign: "center" }}>
          <a href="/home"><img src="/img\skull-logo.png" alt="Logo" style={{ height: "40px", margin: "2px" }} /></a>
          <span className="navbar-text " style={{ fontSize: "30px", fontFamily: "MetalMania, sans-serif", lineHeight: "40px", color: "RGB(239, 176, 98)" }}>Fakestival</span>
        </div>

        
        <div className="d-flex align-items-center" style={{ gap: "10px", display: "flex", flexDirection: "row" }}>
          {/* Countdown */}
          <div className="countdown" style={{
            fontSize: "11px",
            fontFamily: "MetalMania, sans-serif",
            display: "flex",
            flexDirection: "row",
            gap: "10px",
            textAlign: "center"
          }}>
            <div><span>224</span> days</div>
            <div><span>15</span> hrs</div>
            <div><span>9</span> mins</div>
          </div>

          
          <div className="icono" style={{ display: "flex" }}>
            <UserOutlined style={{ fontSize: "35px", color: "RGB(239, 176, 98)", marginBottom:"0.5rem" }} />
          </div>
        </div>

      </div>
    </nav>
  );
}

export default NavBar;
