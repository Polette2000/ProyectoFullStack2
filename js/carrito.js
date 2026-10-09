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
const formDatosCompra = document.getElementById("formDatosCompra");
const mensajeCompra = document.getElementById("mensajeCompra");
const estadoCliente = document.getElementById("estadoCliente");
const metodoPago = document.getElementById("metodoPago");

const stockInicialCarrito = {
    1: 12,
    2: 8,
    3: 10,
    4: 6,
    5: 15,
    6: 9,
    7: 11,
    8: 7,
    9: 5,
    10: 4,
    11: 3,
    12: 6
};

const regionesComunasCarrito = {
    "Region Metropolitana": ["Santiago", "Providencia", "Las Condes", "Maipu", "Puente Alto"],
    "Valparaiso": ["Valparaiso", "Vina del Mar", "Quilpue", "Villa Alemana"],
    "Biobio": ["Concepcion", "Talcahuano", "Los Angeles", "Chiguayante"],
    "La Araucania": ["Temuco", "Padre Las Casas", "Villarrica", "Angol"],
    "Los Lagos": ["Puerto Montt", "Osorno", "Castro", "Ancud"]
};

function obtenerCarrito() {
    const carritoGuardado = localStorage.getItem("carrito");

    return carritoGuardado ? JSON.parse(carritoGuardado) : [];
}

function guardarCarrito(carrito) {
    localStorage.setItem("carrito", JSON.stringify(carrito));
}

function obtenerClienteActivo() {
    const clienteGuardado = localStorage.getItem("clienteActivo");

    return clienteGuardado ? JSON.parse(clienteGuardado) : null;
}

function obtenerStockProductoCarrito(idProducto, productoCarrito = {}) {
    const productosGuardados = localStorage.getItem("productosAdmin");

    if (productosGuardados) {
        try {
            const productosAdmin = JSON.parse(productosGuardados);
            const productoAdmin = productosAdmin.find(function (producto) {
                return Number(producto.id) === Number(idProducto);
            });

            if (productoAdmin && productoAdmin.stock !== undefined) {
                return Number(productoAdmin.stock);
            }
        } catch (error) {
            // Si localStorage tiene datos corruptos, usamos el stock guardado en el item.
        }
    }

    if (productoCarrito.stock !== undefined) {
        return Number(productoCarrito.stock);
    }

    return Number(stockInicialCarrito[idProducto] ?? 0);
}

function obtenerProductosSobreStock(carrito) {
    return carrito.filter(function (producto) {
        const stockDisponible = obtenerStockProductoCarrito(producto.id, producto);
        return Number(producto.cantidad) > stockDisponible;
    });
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
        const stockDisponible = obtenerStockProductoCarrito(producto.id, producto);
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
                <button type="button" onclick="cambiarCantidad(${producto.id}, 1)" aria-label="Aumentar cantidad" ${producto.cantidad >= stockDisponible ? "disabled" : ""}>
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

function cargarRegionesCarrito() {
    const regionCliente = document.getElementById("regionCliente");
    const comunaCliente = document.getElementById("comunaCliente");

    if (!regionCliente || !comunaCliente) {
        return;
    }

    Object.keys(regionesComunasCarrito).forEach(function (nombreRegion) {
        const option = document.createElement("option");
        option.value = nombreRegion;
        option.textContent = nombreRegion;
        regionCliente.appendChild(option);
    });

    regionCliente.addEventListener("change", function () {
        cargarComunasCarrito(regionCliente.value);
    });
}

function cargarComunasCarrito(regionSeleccionada) {
    const comunaCliente = document.getElementById("comunaCliente");

    if (!comunaCliente) {
        return;
    }

    comunaCliente.innerHTML = "";

    if (!regionSeleccionada) {
        comunaCliente.disabled = true;
        comunaCliente.innerHTML = '<option value="">Primero selecciona una region</option>';
        return;
    }

    comunaCliente.disabled = false;

    const optionInicial = document.createElement("option");
    optionInicial.value = "";
    optionInicial.textContent = "Selecciona una comuna";
    comunaCliente.appendChild(optionInicial);

    regionesComunasCarrito[regionSeleccionada].forEach(function (nombreComuna) {
        const option = document.createElement("option");
        option.value = nombreComuna;
        option.textContent = nombreComuna;
        comunaCliente.appendChild(option);
    });
}

function precargarDatosCliente() {
    const clienteActivo = obtenerClienteActivo();

    if (!formDatosCompra || !estadoCliente) {
        return;
    }

    if (
        clienteActivo &&
        (
            clienteActivo.nombre === "Cliente Perfulandia" ||
            clienteActivo.correo?.toLowerCase().startsWith("admi")
        )
    ) {
        localStorage.removeItem("clienteActivo");
    }

    ["nombreCliente", "correoCliente", "telefonoCliente", "direccionCliente"].forEach(function (idCampo) {
        const campo = document.getElementById(idCampo);

        if (campo) {
            campo.value = "";
            campo.classList.remove("is-invalid");
        }
    });

    estadoCliente.textContent = "Ingresa tus datos para el despacho";
}

function validarDatosCompra() {
    if (!formDatosCompra) {
        return true;
    }

    const campos = formDatosCompra.querySelectorAll("input, select, textarea");
    let formularioValido = true;

    campos.forEach(function (campo) {
        const valor = campo.value.trim();

        if (!valor) {
            campo.classList.add("is-invalid");
            formularioValido = false;
        } else {
            campo.classList.remove("is-invalid");
        }

        if (campo.type === "email" && valor && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(valor)) {
            campo.classList.add("is-invalid");
            formularioValido = false;
        }
    });

    return formularioValido;
}

function mostrarMensajeCompra(tipo, texto) {
    if (!mensajeCompra) {
        return;
    }

    mensajeCompra.className = `alert alert-${tipo}`;
    mensajeCompra.textContent = texto;
}

function cambiarCantidad(idProducto, cambio) {
    const carrito = obtenerCarrito();
    const producto = carrito.find(function (item) {
        return Number(item.id) === Number(idProducto);
    });

    if (!producto) {
        return;
    }

    const stockDisponible = obtenerStockProductoCarrito(idProducto, producto);

    if (cambio > 0 && Number(producto.cantidad) >= stockDisponible) {
        mostrarMensajeCompra("warning", `Solo hay ${stockDisponible} unidades disponibles de ${producto.nombre}.`);
        return;
    }

    producto.cantidad = Number(producto.cantidad) + cambio;
    producto.stock = stockDisponible;

    const carritoActualizado = carrito.filter(function (item) {
        return Number(item.cantidad) > 0;
    });

    guardarCarrito(carritoActualizado);
    renderizarCarrito();
}

function eliminarProducto(idProducto) {
    const carrito = obtenerCarrito().filter(function (producto) {
        return Number(producto.id) !== Number(idProducto);
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
        const carrito = obtenerCarrito();

        if (carrito.length === 0) {
            return;
        }

        const productosSobreStock = obtenerProductosSobreStock(carrito);

        if (productosSobreStock.length > 0) {
            const producto = productosSobreStock[0];
            const stockDisponible = obtenerStockProductoCarrito(producto.id, producto);
            mostrarMensajeCompra("danger", `No puedes pedir ${producto.cantidad} unidades de ${producto.nombre}. Stock disponible: ${stockDisponible}.`);
            return;
        }

        if (!validarDatosCompra()) {
            mostrarMensajeCompra("danger", "Completa los datos del cliente y despacho antes de finalizar.");
            return;
        }

        const pedido = {
            cliente: {
                nombre: document.getElementById("nombreCliente").value.trim(),
                correo: document.getElementById("correoCliente").value.trim(),
                telefono: document.getElementById("telefonoCliente").value.trim(),
                region: document.getElementById("regionCliente").value.trim(),
                comuna: document.getElementById("comunaCliente").value.trim(),
                direccion: document.getElementById("direccionCliente").value.trim(),
                metodoPago: document.getElementById("metodoPago").value
            },
            productos: carrito,
            fecha: new Date().toISOString()
        };

        localStorage.setItem("ultimoPedido", JSON.stringify(pedido));
        guardarCarrito([]);
        mostrarMensajeCompra("success", "Compra registrada correctamente. Gracias por elegir Perfulandia.");
        renderizarCarrito();
    });
}


if (formDatosCompra) {
    formDatosCompra.addEventListener("input", function (event) {
        event.target.classList.remove("is-invalid");
    });
}

document.addEventListener("DOMContentLoaded", function () {
    cargarRegionesCarrito();
    precargarDatosCliente();
    renderizarCarrito();
});




