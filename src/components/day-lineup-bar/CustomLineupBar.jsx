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
            CUSTOM LINE UP
          </h5>
        </div>
        
      </div>
    </>
  );
}

export default DayLineupBar;
