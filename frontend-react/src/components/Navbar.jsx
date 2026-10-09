
import { Link, NavLink } from 'react-router'

export default function Navbar({ cantidadCarrito }) {
    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-light navbar-perfulandia">
                <div className="container-fluid px-5">

                    {/* LOGO */}
                    <Link
                        className="navbar-brand d-flex align-items-center"
                        to="/"
                    >
                        <img
                            src="/img/Logo.png"
                            alt="Logo Perfulandia"
                            className="logo"
                        />
                        <span className="nombre-marca"></span>
                    </Link>

                    {/* BOTÓN MENÚ CELULAR */}
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#menuPrincipal"
                        aria-controls="menuPrincipal"
                        aria-expanded="false"
                        aria-label="Abrir menú"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    {/* MENÚ PRINCIPAL */}
                    <div
                        className="collapse navbar-collapse"
                        id="menuPrincipal"
                    >
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">

                            <li className="nav-item">
                                <NavLink
                                    className={({ isActive }) =>
                                        `nav-link ${isActive ? 'active' : ''}`
                                    }
                                    to="/"
                                    end
                                >
                                    Inicio
                                </NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink
                                    className={({ isActive }) =>
                                        `nav-link ${isActive ? 'active' : ''}`
                                    }
                                    to="/productos"
                                >
                                    Productos
                                </NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink
                                    className={({ isActive }) =>
                                        `nav-link ${isActive ? 'active' : ''}`
                                    }
                                    to="/nosotros"
                                >
                                    Nosotros
                                </NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink
                                    className={({ isActive }) =>
                                        `nav-link ${isActive ? 'active' : ''}`
                                    }
                                    to="/blogs"
                                >
                                    Blog
                                </NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink
                                    className={({ isActive }) =>
                                        `nav-link ${isActive ? 'active' : ''}`
                                    }
                                    to="/contacto"
                                >
                                    Contacto
                                </NavLink>
                            </li>

                        </ul>

                        {/* BOTONES DE ACCIONES */}
                        <div className="d-flex align-items-center gap-3">

                            {/* INGRESAR */}
                            <Link
                                to="/login"
                                className="btn btn-outline-perfulandia"
                            >
                                <i className="bi bi-person"></i>
                                {' '}Ingresar
                            </Link>

                            {/* CARRITO */}
                            <Link
                                to="/carrito"
                                className="carrito-link position-relative"
                                aria-label="Carrito de compras"
                            >
                                <i className="bi bi-bag"></i>


                                <span
                                    id="contadorCarrito"
                                    className="position-absolute top-0 start-100 translate-middle badge rounded-pill contador-carrito"
                                >
                                    {cantidadCarrito}
                                </span>

                            </Link>

                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}
