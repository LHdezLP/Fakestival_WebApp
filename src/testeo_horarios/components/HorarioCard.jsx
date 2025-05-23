import "./HorarioCard.css";

function HorarioCard({ title }) {
  return (
    <div className="band-schechdule-container">
      <div className="schechdule-description">
        <span className="band-name" style={{ color: "white" }}>
          {title}
        </span>
      </div>
      <div className="schechdule-gradient"></div>
    </div>
  );
}

export default HorarioCard;
