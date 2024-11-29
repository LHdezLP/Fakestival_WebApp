/* eslint-disable react/prop-types */
import "./SocialsBar.css";

function SocialsBar({ socialLinks }) {
  return (
    <div className="social-container">
      <div className="social-list-container">
        <ul className="social-icon-list">

          {socialLinks?.instagram && (
            <li className="social-icon">
              <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram"></i>
              </a>
            </li>
          )}

          {socialLinks?.twitter && (
            <li className="social-icon">
              <a href={socialLinks.twitter} target="_blank" rel="noopener noreferrer">
                <i className="fab fa-twitter"></i>
              </a>
            </li>
          )}

          {socialLinks?.spotify && (
            <li className="social-icon">
              <a href={socialLinks.spotify} target="_blank" rel="noopener noreferrer">
                <i className="fab fa-spotify"></i>
              </a>
            </li>
          )}

          {socialLinks?.facebook && (
            <li className="social-icon">
              <a href={socialLinks.facebook} target="_blank" rel="noopener noreferrer">
                <i className="fab fa-facebook"></i>
              </a>
            </li>
          )}

          {socialLinks?.wikipedia && (
            <li className="social-icon">
              <a href={socialLinks.wikipedia} target="_blank" rel="noopener noreferrer">
                <i className="fab fa-wikipedia-w"></i>
              </a>
            </li>
          )}
          
        </ul>
      </div>
    </div>
  );
}

export default SocialsBar;
