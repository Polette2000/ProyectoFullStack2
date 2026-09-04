// =======================================================
// PERFULANDIA
// PRODUCTOS
// =======================================================


// =======================================================
// ARREGLO DE PRODUCTOS
// =======================================================

const productos = [

    {
        id: 1,
        nombre: "ASAD de Lattafa EDP 100 ML",
        categoria: "Hombre",
        precio: 39990,
        imagen: "../img/Perfume1.webp",
        descripcion: "Fragancia intensa, elegante y especiada, ideal para ocasiones especiales."
    },

    {
        id: 2,
        nombre: "Club de Nuit Woman EDP 105 ML Mujer de Armaf",
        categoria: "Mujer",
        precio: 44990,
        imagen: "../img/Perfume3.webp",
        descripcion: "Fragancia femenina con notas florales, frutales y sofisticadas."
    },

    {
        id: 3,
        nombre: "Armaf Club de Nuit Intense EDT 105 ML",
        categoria: "Hombre",
        precio: 49990,
        imagen: "../img/Perfume2.webp",
        descripcion: "Una fragancia intensa con notas cítricas, amaderadas y elegantes."
    },

    {
        id: 4,
        nombre: "Azzaro The Most Wanted Intense EDT 100 ML",
        categoria: "Hombre",
        precio: 64990,
        imagen: "../img/Perfume11.webp",
        descripcion: "Fragancia masculina intensa, cálida y sofisticada."
    },

    {
        id: 5,
        nombre: "Ô OUI EDT 100 ML Lancôme",
        categoria: "Mujer",
        precio: 35990,
        imagen: "../img/Perfume4.webp",
        descripcion: "Fragancia fresca y femenina, perfecta para el uso diario."
    },

{
    id: 6,
    nombre: "Paco Rabanne Olympea",
    categoria: "Mujer",
    precio: 39990,
    imagen: "../img/Perfume5.webp",
    descripcion: "Fragancia femenina elegante, intensa y sofisticada."
},

{
    id: 7,
    nombre: "Liquid Brun French Avenue",
    categoria: "Unisex",
    precio: 42990,
    imagen: "../img/Perfume6.webp",
    descripcion: "Fragancia cálida y envolvente con un aroma moderno y sofisticado."
},

{
    id: 8,
    nombre: "Yara Tous EDP 100 ML Mujer",
    categoria: "Mujer",
    precio: 45990,
    imagen: "../img/Perfume7.webp",
    descripcion: "Fragancia femenina dulce, tropical y elegante."
},

{
    id: 9,
    nombre: "Power Of You EDP 50 ML",
    categoria: "Mujer",
    precio: 49990,
    imagen: "../img/Perfume8.webp",
    descripcion: "Fragancia moderna y femenina con un aroma intenso y atractivo."
},

{
    id: 10,
    nombre: "Sapphire Gemstone EDP",
    categoria: "Unisex",
    precio: 54990,
    imagen: "../img/Perfume9.webp",
    descripcion: "Fragancia elegante con notas sofisticadas y una esencia duradera."
},

{
    id: 11,
    nombre: "Taj Mahal Wow EDP 100 ML",
    categoria: "Unisex",
    precio: 59990,
    imagen: "../img/Perfume10.webp",
    descripcion: "Fragancia intensa y sofisticada con un aroma elegante y distintivo."
},
{
    id: 12,
    nombre: "Armaf Odyssey Mandarin Sky Limited Edit. EDP 100 ML ",
    categoria: "Unisex",
    precio: 59990,
    imagen: "../img/Perfume12.webp",
    descripcion: "Fragancia intensa y sofisticada con un aroma elegante y distintivo."
}


];


// =======================================================
// ELEMENTOS DEL HTML
// =======================================================

const contenedorProductos =
    document.getElementById("contenedorProductos");

const buscadorProducto =
    document.getElementById("buscadorProducto");

const filtroCategoria =
    document.getElementById("filtroCategoria");

const mensajeSinProductos =
    document.getElementById("mensajeSinProductos");


// =======================================================
// MOSTRAR PRODUCTOS
// =======================================================

function mostrarProductos(listaProductos) {

    // Limpiamos los productos anteriores
    contenedorProductos.innerHTML = "";


    // Si no existen productos
    if (listaProductos.length === 0) {

        mensajeSinProductos.classList.remove("d-none");

        return;
    }


    // Ocultamos el mensaje
    mensajeSinProductos.classList.add("d-none");


    // Recorremos el arreglo
    listaProductos.forEach(function (producto) {

        // Creamos una columna Bootstrap
        const columna = document.createElement("article");

        columna.className = "col-sm-6 col-lg-4";


        // Creamos la tarjeta
        columna.innerHTML = `

            <div class="card producto-card h-100">

                <div class="producto-imagen-contenedor">

                    <img
                        src="${producto.imagen}"
                        class="card-img-top"
                        alt="${producto.nombre}">

                </div>


                <div class="card-body d-flex flex-column">

                    <p class="producto-categoria">
                        ${producto.categoria}
                    </p>


                    <h2 class="producto-nombre">
                        ${producto.nombre}
                    </h2>


                    <p class="producto-descripcion">
                        ${producto.descripcion}
                    </p>


                    <p class="producto-precio">
                        ${formatearPrecio(producto.precio)}
                    </p>


                    <div class="mt-auto">

                        <a
                            href="producto-detalle.html?id=${producto.id}"
                            class="btn btn-outline-perfulandia w-100 mb-2">

                            Ver detalle

                        </a>


                        <button
                            type="button"
                            class="btn btn-perfulandia w-100"
                            onclick="agregarAlCarrito(${producto.id})">

                            <i class="bi bi-bag-plus"></i>

                            Añadir al carrito

                        </button>

                    </div>

                </div>

            </div>

        `;


        // Agregamos la tarjeta al HTML
        contenedorProductos.appendChild(columna);

    });

}


// =======================================================
// FORMATEAR PRECIO CHILENO
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
// FILTRAR PRODUCTOS
// =======================================================

function filtrarProductos() {

    // Texto escrito en el buscador
    const textoBusqueda =
        buscadorProducto.value
            .toLowerCase()
            .trim();


    // Categoría seleccionada
    const categoriaSeleccionada =
        filtroCategoria.value;


    // Filtramos
    const productosFiltrados =
        productos.filter(function (producto) {

            const coincideNombre =
                producto.nombre
                    .toLowerCase()
                    .includes(textoBusqueda);


            const coincideCategoria =
                categoriaSeleccionada === "todos"
                ||
                producto.categoria === categoriaSeleccionada;


            return coincideNombre && coincideCategoria;

        });


    mostrarProductos(productosFiltrados);

}


// =======================================================
// EVENTOS DEL BUSCADOR
// =======================================================

if (buscadorProducto) {

    buscadorProducto.addEventListener(
        "input",
        filtrarProductos
    );

}


if (filtroCategoria) {

    filtroCategoria.addEventListener(
        "change",
        filtrarProductos
    );

}


// =======================================================
// AGREGAR PRODUCTO AL CARRITO
// =======================================================

function agregarAlCarrito(idProducto) {

    // Buscar producto
    const productoEncontrado =
        productos.find(function (producto) {

            return producto.id === idProducto;

        });


    // Si no existe
    if (!productoEncontrado) {

        return;

    }


    // Recuperamos el carrito
    const carritoGuardado =
        localStorage.getItem("carrito");


    let carrito =
        carritoGuardado
            ? JSON.parse(carritoGuardado)
            : [];


    // Revisamos si ya existe
    const productoEnCarrito =
        carrito.find(function (producto) {

            return producto.id === idProducto;

        });


    // Si existe aumentamos cantidad
    if (productoEnCarrito) {

        productoEnCarrito.cantidad++;

    }

    // Si no existe, lo agregamos
    else {

        carrito.push({

            id: productoEncontrado.id,

            nombre: productoEncontrado.nombre,

            precio: productoEncontrado.precio,

            imagen: productoEncontrado.imagen,

            cantidad: 1

        });

    }


    // Guardamos carrito
    localStorage.setItem(
        "carrito",
        JSON.stringify(carrito)
    );


    actualizarContadorCarrito();


    mostrarMensajeProductoAgregado(
        productoEncontrado.nombre
    );

}


// =======================================================
// ACTUALIZAR CONTADOR DEL CARRITO
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
// MENSAJE AL AGREGAR PRODUCTO
// =======================================================

function mostrarMensajeProductoAgregado(nombreProducto) {

    const mensaje =
        document.createElement("div");


    mensaje.className =
        "alert alert-producto position-fixed top-0 start-50 translate-middle-x mt-4 shadow";


    mensaje.innerHTML = `

        <i class="bi bi-check-circle-fill"></i>

        <strong>${nombreProducto}</strong>

        fue agregado al carrito.

    `;


    document.body.appendChild(mensaje);


    // El mensaje desaparece después de 2 segundos
    setTimeout(function () {

        mensaje.remove();

    }, 2000);

}


// =======================================================
// CARGAR PRODUCTOS AL ABRIR LA PÁGINA
// =======================================================

document.addEventListener(
    "DOMContentLoaded",
    function () {

        if (contenedorProductos) {

            mostrarProductos(productos);

        }

        actualizarContadorCarrito();

    }
);