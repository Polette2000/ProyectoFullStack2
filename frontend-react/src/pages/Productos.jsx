
import { useState } from 'react'
import { productos } from '../data/productos.js'
import ProductoCatalogoCard from '../components/ProductoCatalogoCard.jsx'

export default function Productos({ onAgregarProducto }) {

    // ESTADOS DE REACT
    const [busqueda, setBusqueda] = useState('')
    const [categoria, setCategoria] = useState('todos')
    const [mensaje, setMensaje] = useState('')

    // FILTRAR PRODUCTOS
    const productosFiltrados = productos.filter((producto) => {

        const coincideNombre = producto.nombre
            .toLowerCase()
            .includes(busqueda.toLowerCase().trim())

        const coincideCategoria =
            categoria === 'todos' ||
            producto.categoria === categoria

        return coincideNombre && coincideCategoria
    })

    // AGREGAR AL CARRITO
    function agregarAlCarrito(producto) {

        // Llamar a la función de App.jsx
        // para actualizar el estado del carrito
        onAgregarProducto(producto)

        // Mostrar mensaje de confirmación
        setMensaje(
            `${producto.nombre} fue agregado al carrito.`
        )
    }

    return (
        <>

            {/* CABECERA PRODUCTOS */}
            <section className="productos-header">
                <div className="container text-center">

                    <p className="section-subtitulo">
                        Nuestra colección
                    </p>

                    <h1>Encuentra tu fragancia</h1>

                    <p className="productos-header-descripcion">
                        Explora nuestra selección de perfumes
                        y encuentra el aroma ideal para ti.
                    </p>

                </div>
            </section>

            {/* CATÁLOGO */}
            <section className="catalogo-productos py-5">
                <div className="container">

                    {/* FILTROS */}
                    <div className="row mb-5">
                        <div className="col-lg-8 mx-auto">
                            <div className="row g-3">

                                {/* BUSCADOR */}
                                <div className="col-md-8">
                                    <div className="input-group">

                                        <span className="input-group-text">
                                            <i className="bi bi-search"></i>
                                        </span>

                                        <input
                                            type="text"
                                            id="buscadorProducto"
                                            className="form-control"
                                            placeholder="Buscar perfume..."
                                            aria-label="Buscar perfume"
                                            value={busqueda}
                                            onChange={(event) =>
                                                setBusqueda(event.target.value)
                                            }
                                        />

                                    </div>
                                </div>

                                {/* FILTRO CATEGORÍA */}
                                <div className="col-md-4">

                                    <select
                                        id="filtroCategoria"
                                        className="form-select"
                                        value={categoria}
                                        onChange={(event) =>
                                            setCategoria(event.target.value)
                                        }
                                    >
                                        <option value="todos">
                                            Todas las categorías
                                        </option>

                                        <option value="Mujer">
                                            Mujer
                                        </option>

                                        <option value="Hombre">
                                            Hombre
                                        </option>

                                        <option value="Unisex">
                                            Unisex
                                        </option>
                                    </select>

                                </div>

                            </div>
                        </div>
                    </div>

                    {/* PRODUCTOS */}
                    {productosFiltrados.length > 0 ? (

                        <div className="row g-4">

                            {productosFiltrados.map((producto) => (

                                <ProductoCatalogoCard
                                    key={producto.id}
                                    producto={producto}
                                    onAgregar={agregarAlCarrito}
                                />

                            ))}

                        </div>

                    ) : (

                        <div className="text-center py-5">

                            <i className="bi bi-search icono-sin-productos"></i>

                            <h2 className="mt-3">
                                No encontramos productos
                            </h2>

                            <p>
                                Intenta buscar otro perfume.
                            </p>

                        </div>

                    )}

                </div>
            </section>

            {/* MENSAJE AL AGREGAR AL CARRITO */}
            {mensaje && (
                <div
                    className="alert alert-producto position-fixed top-0 start-50 translate-middle-x mt-4 shadow"
                    role="status"
                >
                    <i className="bi bi-check-circle-fill"></i>
                    {mensaje}

                    <button
                        type="button"
                        className="btn-close ms-3"
                        aria-label="Cerrar mensaje"
                        onClick={() => setMensaje('')}
                    />
                </div>
            )}

        </>
    )
}
