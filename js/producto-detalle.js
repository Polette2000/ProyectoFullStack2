// =======================================================
// PERFULANDIA
// DETALLE DEL PRODUCTO
// =======================================================


// =======================================================
// PRODUCTOS
// =======================================================

const productosDetalle = [

    {
        id: 1,
        nombre: "ASAD de Lattafa EDP 100 ML",
        categoria: "Hombre",
        precio: 39990,
        imagen: "../img/Perfume1.webp",
        descripcion:
            "Fragancia intensa, elegante y especiada, ideal para ocasiones especiales."
    },

    {
        id: 2,
        nombre: "Club de Nuit Woman EDP 105 ML Mujer de Armaf",
        categoria: "Mujer",
        precio: 44990,
        imagen: "../img/Perfume3.webp",
        descripcion:
            "Fragancia femenina con notas florales, frutales y sofisticadas."
    },

    {
        id: 3,
        nombre: "Armaf Club de Nuit Intense EDT 105 ML",
        categoria: "Hombre",
        precio: 49990,
        imagen: "../img/Perfume2.webp",
        descripcion:
            "Una fragancia intensa con notas cítricas, amaderadas y elegantes."
    },

    {
        id: 4,
        nombre: "Azzaro The Most Wanted Intense EDT 100 ML",
        categoria: "Hombre",
        precio: 64990,
        imagen: "../img/Perfume11.webp",
        descripcion:
            "Fragancia masculina intensa, cálida y sofisticada."
    },

    {
        id: 5,
        nombre: "Ô OUI EDT 100 ML Lancôme",
        categoria: "Mujer",
        precio: 35990,
        imagen: "../img/Perfume4.webp",
        descripcion:
            "Fragancia fresca y femenina, perfecta para el uso diario."
    },

    {
        id: 6,
        nombre: "Paco Rabanne Olympea",
        categoria: "Mujer",
        precio: 39990,
        imagen: "../img/Perfume5.webp",
        descripcion:
            "Fragancia femenina elegante, intensa y sofisticada."
    },

    {
        id: 7,
        nombre: "Liquid Brun French Avenue",
        categoria: "Unisex",
        precio: 42990,
        imagen: "../img/Perfume6.webp",
        descripcion:
            "Fragancia cálida y envolvente con un aroma moderno y sofisticado."
    },

    {
        id: 8,
        nombre: "Yara Tous EDP 100 ML Mujer",
        categoria: "Mujer",
        precio: 45990,
        imagen: "../img/Perfume7.webp",
        descripcion:
            "Fragancia femenina dulce, tropical y elegante."
    },

    {
        id: 9,
        nombre: "Power Of You EDP 50 ML",
        categoria: "Mujer",
        precio: 49990,
        imagen: "../img/Perfume8.webp",
        descripcion:
            "Fragancia moderna y femenina con un aroma intenso y atractivo."
    },

    {
        id: 10,
        nombre: "Sapphire Gemstone EDP",
        categoria: "Unisex",
        precio: 54990,
        imagen: "../img/Perfume9.webp",
        descripcion:
            "Fragancia elegante con notas sofisticadas y una esencia duradera."
    },

    {
        id: 11,
        nombre: "Taj Mahal Wow EDP 100 ML",
        categoria: "Unisex",
        precio: 59990,
        imagen: "../img/Perfume10.webp",
        descripcion:
            "Fragancia intensa y sofisticada con un aroma elegante y distintivo."
    }

];


// =======================================================
// OBTENER ID DESDE LA URL
// =======================================================

// Ejemplo:
//
// producto-detalle.html?id=5

const parametros =
    new URLSearchParams(window.location.search);


const idProducto =
    Number(parametros.get("id"));


// =======================================================
// BUSCAR PRODUCTO
// =======================================================

const productoSeleccionado =
    productosDetalle.find(function (producto) {

        return producto.id === idProducto;

    });


// =======================================================
// ELEMENTOS HTML
// =======================================================

const detalleProducto =
    document.getElementById("detalleProducto");


const productoNoEncontrado =
    document.getElementById("productoNoEncontrado");


// =======================================================
// MOSTRAR PRODUCTO
// =======================================================

function mostrarDetalleProducto() {


    // Si no encontramos el producto
    if (!productoSeleccionado) {

        detalleProducto.classList.add("d-none");

        productoNoEncontrado.classList.remove("d-none");

        return;

    }


    // Mostramos producto
    detalleProducto.innerHTML = `


        <!-- IMAGEN -->

        <div class="col-lg-6">

            <div class="detalle-imagen">

                <img
                    src="${productoSeleccionado.imagen}"
                    alt="${productoSeleccionado.nombre}"
                    class="img-fluid">

            </div>

        </div>



        <!-- INFORMACIÓN -->

        <div class="col-lg-6">

            <div class="detalle-informacion">


                <p class="producto-categoria">

                    ${productoSeleccionado.categoria}

                </p>


                <h1 class="detalle-titulo">

                    ${productoSeleccionado.nombre}

                </h1>


                <p class="detalle-precio">

                    ${formatearPrecio(
                        productoSeleccionado.precio
                    )}

                </p>


                <hr>


                <p class="detalle-descripcion">

                    ${productoSeleccionado.descripcion}

                </p>


                <div class="detalle-caracteristicas">

                    <p>

                        <i class="bi bi-check-circle"></i>

                        Producto disponible

                    </p>


                    <p>

                        <i class="bi bi-truck"></i>

                        Despacho disponible

                    </p>


                    <p>

                        <i class="bi bi-shield-check"></i>

                        Compra segura

                    </p>

                </div>


                <!-- CANTIDAD -->

                <div class="mt-4">

                    <label
                        for="cantidadProducto"
                        class="form-label">

                        Cantidad

                    </label>


                    <select
                        id="cantidadProducto"
                        class="form-select cantidad-producto">

                        <option value="1">
                            1
                        </option>

                        <option value="2">
                            2
                        </option>

                        <option value="3">
                            3
                        </option>

                        <option value="4">
                            4
                        </option>

                        <option value="5">
                            5
                        </option>

                    </select>

                </div>


                <!-- BOTONES -->

                <div class="d-grid gap-3 mt-4">


                    <button
                        type="button"
                        class="btn btn-perfulandia btn-lg"
                        onclick="agregarDetalleAlCarrito()">

                        <i class="bi bi-bag-plus"></i>

                        Añadir al carrito

                    </button>


                    <a
                        href="productos.html"
                        class="btn btn-outline-perfulandia">

                        <i class="bi bi-arrow-left"></i>

                        Seguir comprando

                    </a>


                </div>


            </div>

        </div>

    `;

}


// =======================================================
// FORMATEAR PRECIO
// =======================================================

function formatearPrecio(precio) {

    return precio.toLocaleString(
        "es-CL",
        {
            style: "currency",
            currency: "CLP"
        }
    );

}


// =======================================================
// AGREGAR AL CARRITO
// =======================================================

function agregarDetalleAlCarrito() {


    if (!productoSeleccionado) {

        return;

    }


    // Cantidad seleccionada
    const cantidad =
        Number(
            document.getElementById(
                "cantidadProducto"
            ).value
        );


    // Obtener carrito
    const carritoGuardado =
        localStorage.getItem("carrito");


    let carrito =
        carritoGuardado
            ? JSON.parse(carritoGuardado)
            : [];


    // Revisar si ya existe
    const productoEnCarrito =
        carrito.find(function (producto) {

            return producto.id === productoSeleccionado.id;

        });


    if (productoEnCarrito) {

        // Si existe sumamos cantidad
        productoEnCarrito.cantidad += cantidad;

    }

    else {

        // Si no existe lo agregamos

        carrito.push({

            id: productoSeleccionado.id,

            nombre: productoSeleccionado.nombre,

            precio: productoSeleccionado.precio,

            imagen: productoSeleccionado.imagen,

            cantidad: cantidad

        });

    }


    // Guardamos
    localStorage.setItem(
        "carrito",
        JSON.stringify(carrito)
    );


    actualizarContadorCarrito();


    mostrarMensajeCarrito();

}


// =======================================================
// CONTADOR DEL CARRITO
// =======================================================

function actualizarContadorCarrito() {


    const carritoGuardado =
        localStorage.getItem("carrito");


    const carrito =
        carritoGuardado
            ? JSON.parse(carritoGuardado)
            : [];


    let cantidadTotal = 0;


    carrito.forEach(function (producto) {

        cantidadTotal += producto.cantidad;

    });


    const contador =
        document.getElementById("contadorCarrito");


    if (contador) {

        contador.textContent = cantidadTotal;

    }

}


// =======================================================
// MENSAJE
// =======================================================

function mostrarMensajeCarrito() {


    const mensaje =
        document.createElement("div");


    mensaje.className =
        "alert alert-producto position-fixed top-0 start-50 translate-middle-x mt-4 shadow";


    mensaje.innerHTML = `

        <i class="bi bi-check-circle-fill"></i>

        <strong>
            ${productoSeleccionado.nombre}
        </strong>

        fue agregado al carrito.

    `;


    document.body.appendChild(mensaje);


    setTimeout(function () {

        mensaje.remove();

    }, 2000);

}


// =======================================================
// CARGAR PÁGINA
// =======================================================

document.addEventListener(
    "DOMContentLoaded",
    function () {

        mostrarDetalleProducto();

        actualizarContadorCarrito();

    }
);
