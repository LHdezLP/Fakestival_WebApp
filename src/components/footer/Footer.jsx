import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faYoutube,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import "./Footer.css";

function Footer() {
  const [showPrivacyMenu, setShowPrivacyMenu] = useState(false);

  const togglePrivacyMenu = () => {
    setShowPrivacyMenu(!showPrivacyMenu);
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="container-box">
          <ul className="social">
            <li>
              <a href="mailto:luishernandezrodriguez@alumno.ieselrinco.es">
                <FontAwesomeIcon icon={faTwitter} />
                Twitter
              </a>
            </li>
            <li className="footer-separator">|</li>
            <li>
              <Link to="/tickets">
                <FontAwesomeIcon icon={faYoutube} />
                YouTube
              </Link>
            </li>
            <li className="footer-separator">|</li>
            <li>
              <Link to="https://github.com/LHdezLP">
                <FontAwesomeIcon icon={faGithub} />
                GitHub
              </Link>
            </li>
          </ul>
        </div>
        <div className="container-box">
          <ul className="links">
            <li>
              <a href="mailto:luishernandezrodriguez@alumno.ieselrinco.es">
                Contact
              </a>
            </li>
            <li className="footer-separator">|</li>
            <li>
              <Link to="/tickets">Tienda</Link>
            </li>
            <li className="footer-separator">|</li>
            <li>
              <a
                href="/reports"
                target="_blank"
                rel="noopener noreferrer"
              >
                Informes
              </a>
            </li>
            <li className="footer-separator">|</li>

            <li>
              <a
                href="/help/Bienvenidos.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                Ayuda
              </a>
            </li>
            
          </ul>
        </div>
      </div>
      <div className="copyright">
        © 2024 FAKESTIVAL Todos los derechos reservados
        <Link to="#" onClick={togglePrivacyMenu}>
          Política de Privacidad y Cookies
        </Link>{" "}
        |<Link to="#">Condiciones de Venta</Link> |
        <Link to="#">Suscríbete a nuestro RSS</Link>
      </div>
      {showPrivacyMenu && (
        <div className="privacy-menu">
          <p>Si hubiera Política de Privacidad, iría aquí.</p>
          <button onClick={togglePrivacyMenu}>Cerrar</button>
        </div>
      )}
    </footer>
  );
}

export default Footer;
