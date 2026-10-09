
import { Link } from 'react-router'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row g-4">

          {/* MARCA */}
          <div className="col-md-4">
            <h2 className="footer-logo">
              Perfulandia
            </h2>

            <p>
              Fragancias para acompañar
              tus mejores momentos.
            </p>
          </div>

          {/* NAVEGACIÓN */}
          <div className="col-md-4">
            <h3>Navegación</h3>

            <ul className="list-unstyled">
              <li>
                <Link to="/">Inicio</Link>
              </li>

              <li>
                <Link to="/productos">Productos</Link>
              </li>

              <li>
                <Link to="/nosotros">Nosotros</Link>
              </li>

              <li>
                <Link to="/contacto">Contacto</Link>
              </li>
            </ul>
          </div>

          {/* REDES SOCIALES */}
          <div className="col-md-4">
            <h3>Síguenos</h3>

            <div className="redes">
              <a href="#" aria-label="Instagram">
                <i className="bi bi-instagram"></i>
              </a>

              <a href="#" aria-label="Facebook">
                <i className="bi bi-facebook"></i>
              </a>

              <a href="#" aria-label="TikTok">
                <i className="bi bi-tiktok"></i>
              </a>
            </div>
          </div>

        </div>

        <hr />

        <div className="text-center">
          <small>
            © 2026 Perfulandia.
            Proyecto Desarrollo Fullstack II.
          </small>
        </div>

      </div>
    </footer>
  )
}
