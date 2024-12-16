/* eslint-disable react/prop-types */
import "./DayLineupBar.css";

function DayLineupBar({ changeDay }) {
  return (
    <>
      <div className="bar-container">
        <div className="page-info-bar">
          <h5
            className="day-text"
            style={{
              fontFamily: "MetalMania, sans-serif",
              fontWeight: "bold",
              fontSize: "34px",
              color: "RGB(239, 176, 98)",
              margin: "0",
              padding: "0",
            }}
          >
            OFFICIAL LINE UP
          </h5>
        </div>
        <div className="day-bar">
          <button
            className="flecha-izquierda"
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              color: "RGB(239, 176, 98)",
              fontSize: "18px",
            }}
            onClick={() => changeDay(-1)}
            aria-label="Cambiar al día anterior"
          >
            <i className="fa-solid fa-circle-arrow-left"></i>
          </button>
          <h5
            className="text"
            style={{
              fontFamily: "MetalMania, sans-serif",
              fontWeight: "bold",
              fontSize: "20px",
              color: "WHITE",
              margin: "0",
              padding: "0 5px",
            }}
          >
            Cambia de Fecha
          </h5>
          <button
            className="flecha-derecha"
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              color: "RGB(239, 176, 98)",
              fontSize: "18px",
            }}
            onClick={() => changeDay(1)}
            aria-label="Cambiar al día siguiente"
          >
            <i className="fa-solid fa-circle-arrow-right"></i>
          </button>
        </div>
      </div>
    </>
  );
}

export default DayLineupBar;
