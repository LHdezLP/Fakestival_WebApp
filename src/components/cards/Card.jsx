/* eslint-disable react/prop-types */
import "./Card.css";

function Card({ panelImage, title, text }) {
  return (
    <div className="card" style={{ backgroundColor: "transparent" }}>
      <img src={panelImage} className="card-img-top" alt={title} />
      <div className="card-body">
        <h5 className="card-title" style={{ fontFamily: "Metal-Mania, sans-serif", fontWeight: "bold", fontSize: "28px", color: "RGB(239, 176, 98)" }}>
          {title}
        </h5>
        <p className="card-text" style={{ fontFamily: "Oswald, sans-serif" }}>
          {text}
        </p>
      </div>
    </div>
  );
}

export default Card;
