/* eslint-disable react/prop-types */
import "./Card.css";

function Card({ panelImage, title, text }) {
  return (
    <div className="card" style={{ backgroundColor: "transparent" }}>
      <div className="row g-0 align-items-center">
        
        <div
          className="col-md-6 order-md-1"
          style={{
            border: "4px solid RGB(239, 176, 98)", 
            padding: "5px",
          }}
        >
          <img
            src={panelImage}
            className="card-img-top img-fluid"
            alt={title}
          />
        </div>

        
        <div className="col-md-6 order-md-2">
          <div className="card-body">
            <h5
              className="card-title"
              style={{
                fontFamily: "Metal-Mania, sans-serif",
                fontWeight: "bold",
                fontSize: "28px",
                color: "RGB(239, 176, 98)",
              }}
            >
              {title}
            </h5>
            <p
              className="card-text"
              style={{ fontFamily: "Oswald, sans-serif" }}
            >
              {text}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
