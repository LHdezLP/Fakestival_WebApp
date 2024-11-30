/* eslint-disable react/prop-types */
import "./DayLineupBar.css";

function DayLineupBar({  changeDay }) {
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
          <i
            className="flecha-izquierda fa-solid fa-circle-arrow-left"
            style={{ color: "RGB(239, 176, 98)" }}
            onClick={() => changeDay(-1)} 
          ></i>
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
          <i
            className="flecha-derecha fa-solid fa-circle-arrow-right"
            style={{ color: "RGB(239, 176, 98)" }}
            onClick={() => changeDay(1)} 
          ></i>
        </div>
      </div>
    </>
  );
}

export default DayLineupBar;
