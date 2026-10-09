
import { Routes, Route } from 'react-router'
import { useState, useEffect } from 'react'
import Inicio from './pages/Inicio.jsx'
import Productos from './pages/Productos.jsx'
import ProductoDetalle from './pages/ProductoDetalle.jsx'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import BannerEnvio from './components/BannerEnvio.jsx'
import Nosotros from './pages/Nosotros.jsx'


// Página Inicio


// Página Productos


// Página Contacto
function Contacto() {
  return (
    <div>
      <h1>Contacto</h1>
      <p>Contáctanos para resolver tus consultas.</p>
    </div>
  )
}

// Página temporal para las rutas que migraremos después
function PaginaPendiente({ titulo }) {
  return <h1>{titulo} - Próximamente</h1>
}

// Aplicación principal
export default function App() {

  // ESTADO DEL CARRITO
  const [carrito, setCarrito] = useState(() => {
    try {
      const guardado = JSON.parse(
        localStorage.getItem('carrito') || '[]'
      )

      return Array.isArray(guardado) ? guardado : []
    } catch {
      return []
    }
  })

  // GUARDAR CARRITO AUTOMÁTICAMENTE
  useEffect(() => {
    localStorage.setItem(
      'carrito',
      JSON.stringify(carrito)
    )
  }, [carrito])

  // AGREGAR UN PRODUCTO AL CARRITO

  // AGREGAR PRODUCTOS AL CARRITO
  function agregarAlCarrito(producto, cantidad = 1) {

    // Validar la cantidad seleccionada
    const cantidadAgregar =
      Number.isInteger(cantidad) && cantidad > 0
        ? cantidad
        : 1

    setCarrito((carritoActual) => {

      // Buscar si el perfume ya está en el carrito
      const productoExistente = carritoActual.find(
        (item) => item.id === producto.id
      )

      // Si ya existe, aumentar su cantidad
      if (productoExistente) {
        return carritoActual.map((item) =>
          item.id === producto.id
            ? {
              ...item,
              cantidad:
                Number(item.cantidad || 0) + cantidadAgregar
            }
            : item
        )
      }

      // Si no existe, agregarlo
      return [
        ...carritoActual,
        {
          id: producto.id,
          nombre: producto.nombre,
          precio: producto.precio,
          imagen: producto.imagen,
          cantidad: cantidadAgregar
        }
      ]
    })
  }


  // CANTIDAD TOTAL DE PRODUCTOS
  const cantidadCarrito = carrito.reduce(
    (total, producto) =>
      total + Number(producto.cantidad || 0),
    0
  )

  return (

    <div className="d-flex flex-column min-vh-100">

      {/* Banner de envío gratis */}
      <BannerEnvio />

      {/* Barra de navegación */}
      <Navbar cantidadCarrito={cantidadCarrito} />

      {/* Contenido de las páginas */}
      <main className="flex-grow-1">
        <Routes>
          <Route path="/" element={<Inicio />} />

          <Route
            path="/productos"
            element={
              <Productos onAgregarProducto={agregarAlCarrito} />
            }
          />

          <Route
            path="/producto-detalle"
            element={
              <ProductoDetalle
                onAgregarProducto={agregarAlCarrito}
              />
            }
          />


          <Route path="/contacto" element={<Contacto />} />


          <Route
            path="/nosotros"
            element={<Nosotros />}
          />


          <Route
            path="/blogs"
            element={<PaginaPendiente titulo="Blog" />}
          />

          <Route
            path="/login"
            element={<PaginaPendiente titulo="Ingresar" />}
          />

          <Route
            path="/carrito"
            element={<PaginaPendiente titulo="Carrito" />}
          />
        </Routes>
      </main>

      {/* Footer original de Perfulandia */}
      <Footer />

    </div>
  )
}