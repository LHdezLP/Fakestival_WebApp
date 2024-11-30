import React from "react";
import "./LineupCards.css";

function LineupCards({ previewImage, title, stage, startTime, endTime }) {
  return (
    <div className="band-schechdule-container">
      <div className="lineup-img-container">
        <img
          src={previewImage}
          alt={`Imagen de ${title}`}
          className="artist-image"
        />
      </div>
      <div className="schechdule-description">
        <span className="band-name" style={{ color: "white" }}>
          {title}
        </span>
        <span className="stage-name" style={{ color: "RGB(239, 176, 98)" }}>
          {stage}
        </span>
      </div>
      <div className="vertical-divider">
        <div className="vertical-line"></div>
      </div>

      <div className="time-stamp" style={{ color: "RGB(239, 176, 98)" }}>
        <span className="start-time">{startTime}</span>
        <div className="horizontal-divider">
          <div className="horizontal-line"></div>
        </div>
        <span className="end-time">{endTime}</span>
      </div>
      <div className="schechdule-gradient"></div>
    </div>
  );
}

export default LineupCards;
