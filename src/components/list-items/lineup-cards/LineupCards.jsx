import "./LineupCards.css";

function LineupCards() {
  return (
    <>
      <div className="band-schechdule-container">
        <div className="lineup-img-container">
          <img
            src="public\img\descarga.jpeg"
            alt="Imagen de la banda"
            className="artist-image"
          />
        </div>
        <div className="schechdule-description">
          <span className="band-name" style={{ color: "white" }}>
            Parkway Drive
          </span>
          <span className="stage-name" style={{ color: "RGB(239, 176, 98)" }}>
            {" "}
            Main Stage
          </span>
        </div>
        <div className="vertical-divider" >
            <div className="vertical-line"></div>
        </div>

        <div className="time-stamp" style={{ color: "RGB(239, 176, 98)" }}>
          <span className="start-time">00:00</span>
          <div className="horizontal-divider" >
            <div className="horizontal-line"></div>
        </div>
          <span className="end-time"> 00:00</span>
        </div>
        <div className="schechdule-gradient"></div>
      </div>
    </>
  );
}

export default LineupCards;
