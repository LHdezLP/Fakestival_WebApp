import "./SocialsBar.css";

function SocialsBar() {
  return (
    <div className="social-container">
      <div className="social-list-container">
        <ul className="social-icon-list">
          <li className="social-icon">
            <i className="fab fa-instagram"></i>
          </li>
          <li className="social-icon">
            <i className="fab fa-twitter"></i>
          </li>
          <li className="social-icon">
            <i className="fab fa-spotify"></i>
          </li>
          <li className="social-icon">
            <i className="fab fa-facebook"></i>
          </li>
          <li className="social-icon">
            <i className="fab fa-wikipedia-w"></i>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default SocialsBar;
