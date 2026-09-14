// =======================================================
// PERFULANDIA
// ADMINISTRACION DE PRODUCTOS
// =======================================================

const productosInicialesAdmin = [
    {
        id: 1,
        nombre: "ASAD de Lattafa EDP 100 ML",
        categoria: "Hombre",
        precio: 39990,
        stock: 12,
        imagen: "../img/Perfume1.webp",
        descripcion: "Fragancia intensa, elegante y especiada, ideal para ocasiones especiales."
    },
    {
        id: 2,
        nombre: "Club de Nuit Woman EDP 105 ML Mujer de Armaf",
        categoria: "Mujer",
        precio: 44990,
        stock: 8,
        imagen: "../img/Perfume3.webp",
        descripcion: "Fragancia femenina con notas florales, frutales y sofisticadas."
    },
    {
        id: 3,
        nombre: "Armaf Club de Nuit Intense EDT 105 ML",
        categoria: "Hombre",
        precio: 49990,
        stock: 10,
        imagen: "../img/Perfume2.webp",
        descripcion: "Una fragancia intensa con notas citricas, amaderadas y elegantes."
    },
    {
        id: 4,
        nombre: "Azzaro The Most Wanted Intense EDT 100 ML",
        categoria: "Hombre",
        precio: 64990,
        stock: 6,
        imagen: "../img/Perfume11.webp",
        descripcion: "Fragancia masculina intensa, calida y sofisticada."
    },
    {
        id: 5,
        nombre: "O OUI EDT 100 ML Lancome",
        categoria: "Mujer",
        precio: 35990,
        stock: 15,
        imagen: "../img/Perfume4.webp",
        descripcion: "Fragancia fresca y femenina, perfecta para el uso diario."
    },
    {
        id: 6,
        nombre: "Paco Rabanne Olympea",
        categoria: "Mujer",
        precio: 39990,
        stock: 9,
        imagen: "../img/Perfume5.webp",
        descripcion: "Fragancia femenina elegante, intensa y sofisticada."
    },
    {
        id: 7,
        nombre: "Liquid Brun French Avenue",
        categoria: "Unisex",
        precio: 42990,
        stock: 11,
        imagen: "../img/Perfume6.webp",
        descripcion: "Fragancia calida y envolvente con un aroma moderno y sofisticado."
    },
    {
        id: 8,
        nombre: "Yara Tous EDP 100 ML Mujer",
        categoria: "Mujer",
        precio: 45990,
        stock: 7,
        imagen: "../img/Perfume7.webp",
        descripcion: "Fragancia femenina dulce, tropical y elegante."
    },
    {
        id: 9,
        nombre: "Power Of You EDP 50 ML",
        categoria: "Mujer",
        precio: 49990,
        stock: 5,
        imagen: "../img/Perfume8.webp",
        descripcion: "Fragancia moderna y femenina con un aroma intenso y atractivo."
    },
    {
        id: 10,
        nombre: "Sapphire Gemstone EDP",
        categoria: "Unisex",
        precio: 54990,
        stock: 4,
        imagen: "../img/Perfume9.webp",
        descripcion: "Fragancia elegante con notas sofisticadas y una esencia duradera."
    },
    {
        id: 11,
        nombre: "Taj Mahal Wow EDP 100 ML",
        categoria: "Unisex",
        precio: 59990,
        stock: 3,
        imagen: "../img/Perfume10.webp",
        descripcion: "Fragancia intensa y sofisticada con un aroma elegante y distintivo."
    },
    {
        id: 12,
        nombre: "Armaf Odyssey Mandarin Sky Limited Edition EDP 100 ML",
        categoria: "Unisex",
        precio: 59990,
        stock: 6,
        imagen: "../img/Perfume12.webp",
        descripcion: "Fragancia intensa y sofisticada con un aroma elegante y distintivo."
    }
];

function obtenerProductosAdmin() {
    const productosGuardados = localStorage.getItem("productosAdmin");

    if (productosGuardados) {
        return JSON.parse(productosGuardados);
    }

    localStorage.setItem("productosAdmin", JSON.stringify(productosInicialesAdmin));
    return productosInicialesAdmin;
}

function guardarProductosAdmin(productos) {
    localStorage.setItem("productosAdmin", JSON.stringify(productos));
}

function formatearPrecioAdmin(precio) {
    return precio.toLocaleString("es-CL", {
        style: "currency",
        currency: "CLP"
    });
}

function renderizarTablaProductos() {
    const tablaProductos = document.getElementById("tablaProductosAdmin");
    const totalProductos = document.getElementById("totalProductosAdmin");
    const stockTotal = document.getElementById("stockTotalAdmin");
    const productosSinStock = document.getElementById("productosSinStockAdmin");

    if (!tablaProductos) {
        return;
    }

    const productos = obtenerProductosAdmin();
    tablaProductos.innerHTML = "";

    productos.forEach(function (producto) {
        const fila = document.createElement("tr");
        const estado = producto.stock > 0 ? "Disponible" : "Sin stock";

        fila.innerHTML = `
            <td>
                <div class="admin-producto">
                    <img src="${producto.imagen}" alt="${producto.nombre}">
                    <div>
                        <strong>${producto.nombre}</strong>
                        <p>${producto.descripcion}</p>
                    </div>
                </div>
            </td>
            <td>${producto.categoria}</td>
            <td>${formatearPrecioAdmin(producto.precio)}</td>
            <td>${producto.stock}</td>
            <td><span class="estado-stock ${producto.stock > 0 ? "disponible" : "sin-stock"}">${estado}</span></td>
            <td>
                <div class="d-flex gap-2">
                    <a href="producto-form.html?id=${producto.id}" class="btn btn-sm btn-outline-perfulandia">Editar</a>
                    <button type="button" class="btn btn-sm btn-outline-danger" onclick="eliminarProductoAdmin(${producto.id})">Eliminar</button>
                </div>
            </td>
        `;

        tablaProductos.appendChild(fila);
    });

    if (totalProductos) {
        totalProductos.textContent = productos.length;
    }

    if (stockTotal) {
        stockTotal.textContent = productos.reduce(function (total, producto) {
            return total + Number(producto.stock);
        }, 0);
    }

    if (productosSinStock) {
        productosSinStock.textContent = productos.filter(function (producto) {
            return Number(producto.stock) === 0;
        }).length;
    }
}

function eliminarProductoAdmin(idProducto) {
    const confirmar = confirm("Quieres eliminar este producto del inventario?");

    if (!confirmar) {
        return;
    }

    const productos = obtenerProductosAdmin().filter(function (producto) {
        return producto.id !== idProducto;
    });

    guardarProductosAdmin(productos);
    renderizarTablaProductos();
}

function cargarFormularioProducto() {
    const formulario = document.getElementById("formProductoAdmin");

    if (!formulario) {
        return;
    }

    const parametros = new URLSearchParams(window.location.search);
    const idProducto = Number(parametros.get("id"));
    const productos = obtenerProductosAdmin();
    const producto = productos.find(function (item) {
        return item.id === idProducto;
    });

    if (producto) {
        document.getElementById("tituloFormularioProducto").textContent = "Editar producto";
        document.getElementById("productoId").value = producto.id;
        document.getElementById("nombreProducto").value = producto.nombre;
        document.getElementById("categoriaProducto").value = producto.categoria;
        document.getElementById("precioProducto").value = producto.precio;
        document.getElementById("stockProducto").value = producto.stock;
        document.getElementById("imagenProducto").value = producto.imagen;
        document.getElementById("descripcionProducto").value = producto.descripcion;
    }

    formulario.addEventListener("submit", function (event) {
        event.preventDefault();

        const idActual = Number(document.getElementById("productoId").value);
        const datosProducto = {
            id: idActual || Date.now(),
            nombre: document.getElementById("nombreProducto").value.trim(),
            categoria: document.getElementById("categoriaProducto").value,
            precio: Number(document.getElementById("precioProducto").value),
            stock: Number(document.getElementById("stockProducto").value),
            imagen: document.getElementById("imagenProducto").value.trim(),
            descripcion: document.getElementById("descripcionProducto").value.trim()
        };

        const productosActualizados = obtenerProductosAdmin();
        const indiceProducto = productosActualizados.findIndex(function (item) {
            return item.id === idActual;
        });

        if (indiceProducto >= 0) {
            productosActualizados[indiceProducto] = datosProducto;
        } else {
            productosActualizados.push(datosProducto);
        }

        guardarProductosAdmin(productosActualizados);
        window.location.href = "productos.html";
    });
}

function renderizarDashboardAdmin() {
    const totalProductos = document.getElementById("dashboardTotalProductos");
    const stockTotal = document.getElementById("dashboardStockTotal");
    const sinStock = document.getElementById("dashboardSinStock");

    if (!totalProductos || !stockTotal || !sinStock) {
        return;
    }

    const productos = obtenerProductosAdmin();

    totalProductos.textContent = productos.length;
    stockTotal.textContent = productos.reduce(function (total, producto) {
        return total + Number(producto.stock);
    }, 0);
    sinStock.textContent = productos.filter(function (producto) {
        return Number(producto.stock) === 0;
    }).length;
}
document.addEventListener("DOMContentLoaded", function () {
    renderizarTablaProductos();
    cargarFormularioProducto();
    renderizarDashboardAdmin();
});

