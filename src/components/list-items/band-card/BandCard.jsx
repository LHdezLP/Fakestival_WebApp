import "./BandCard.css"; 

function BandCard({ previewImage, title }) {
  return (
    <>
      <div className="bands-list-item">
        
          <div className="artist-description">
            <span className="artist-type" style={{color: "rgb(239, 176, 98)"}}>BAND |</span>
            <span className="artist-name"> {title}</span> 
          </div>
          <div className="gradient"></div> 
          <div className="img-container">
            <img
              src={previewImage}  
              alt={`Imagen de la banda ${title}`}  
              className="artist-image"  
            />
          </div>
        
      </div>
    </>
  );
}

export default BandCard;
