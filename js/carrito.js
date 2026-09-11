// =======================================================
// PERFULANDIA
// CARRITO
// =======================================================

const listaCarrito = document.getElementById("listaCarrito");
const carritoVacio = document.getElementById("carritoVacio");
const carritoContenido = document.getElementById("carritoContenido");
const subtotalCarrito = document.getElementById("subtotalCarrito");
const envioCarrito = document.getElementById("envioCarrito");
const totalCarrito = document.getElementById("totalCarrito");
const btnVaciarCarrito = document.getElementById("btnVaciarCarrito");
const btnFinalizarCompra = document.getElementById("btnFinalizarCompra");

function obtenerCarrito() {
    const carritoGuardado = localStorage.getItem("carrito");

    return carritoGuardado
        ? JSON.parse(carritoGuardado)
        : [];
}

function guardarCarrito(carrito) {
    localStorage.setItem("carrito", JSON.stringify(carrito));
}

function formatearPrecioCarrito(precio) {
    return precio.toLocaleString("es-CL", {
        style: "currency",
        currency: "CLP"
    });
}

function renderizarCarrito() {
    const carrito = obtenerCarrito();

    if (carrito.length === 0) {
        carritoVacio.classList.remove("d-none");
        carritoContenido.classList.add("d-none");
        actualizarContadorCarrito();
        return;
    }

    carritoVacio.classList.add("d-none");
    carritoContenido.classList.remove("d-none");
    listaCarrito.innerHTML = "";

    carrito.forEach(function (producto) {
        const item = document.createElement("article");
        item.className = "carrito-item";

        item.innerHTML = `
            <img src="${producto.imagen}" alt="${producto.nombre}">

            <div class="carrito-item-info">
                <h2>${producto.nombre}</h2>
                <p>${formatearPrecioCarrito(producto.precio)}</p>
            </div>

            <div class="carrito-cantidad">
                <button type="button" onclick="cambiarCantidad(${producto.id}, -1)" aria-label="Disminuir cantidad">
                    <i class="bi bi-dash"></i>
                </button>
                <span>${producto.cantidad}</span>
                <button type="button" onclick="cambiarCantidad(${producto.id}, 1)" aria-label="Aumentar cantidad">
                    <i class="bi bi-plus"></i>
                </button>
            </div>

            <strong class="carrito-subtotal">
                ${formatearPrecioCarrito(producto.precio * producto.cantidad)}
            </strong>

            <button type="button" class="carrito-eliminar" onclick="eliminarProducto(${producto.id})" aria-label="Eliminar producto">
                <i class="bi bi-trash"></i>
            </button>
        `;

        listaCarrito.appendChild(item);
    });

    actualizarResumen(carrito);
    actualizarContadorCarrito();
}

function actualizarResumen(carrito) {
    const subtotal = carrito.reduce(function (total, producto) {
        return total + producto.precio * producto.cantidad;
    }, 0);

    const envio = subtotal > 0 && subtotal < 50000 ? 3990 : 0;

    subtotalCarrito.textContent = formatearPrecioCarrito(subtotal);
    envioCarrito.textContent = envio === 0 ? "Gratis" : formatearPrecioCarrito(envio);
    totalCarrito.textContent = formatearPrecioCarrito(subtotal + envio);
}

function cambiarCantidad(idProducto, cambio) {
    const carrito = obtenerCarrito();
    const producto = carrito.find(function (item) {
        return item.id === idProducto;
    });

    if (!producto) {
        return;
    }

    producto.cantidad += cambio;

    const carritoActualizado = carrito.filter(function (item) {
        return item.cantidad > 0;
    });

    guardarCarrito(carritoActualizado);
    renderizarCarrito();
}

function eliminarProducto(idProducto) {
    const carrito = obtenerCarrito().filter(function (producto) {
        return producto.id !== idProducto;
    });

    guardarCarrito(carrito);
    renderizarCarrito();
}

if (btnVaciarCarrito) {
    btnVaciarCarrito.addEventListener("click", function () {
        guardarCarrito([]);
        renderizarCarrito();
    });
}

if (btnFinalizarCompra) {
    btnFinalizarCompra.addEventListener("click", function () {
        alert("Compra registrada correctamente. Gracias por elegir Perfulandia.");
        guardarCarrito([]);
        renderizarCarrito();
    });
}

document.addEventListener("DOMContentLoaded", renderizarCarrito);
