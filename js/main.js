// ====================================================
// PERFULANDIA
// JavaScript general
// ====================================================


// Esperamos que cargue completamente el HTML
document.addEventListener("DOMContentLoaded", function () {

    actualizarContadorCarrito();

});


// ====================================================
// ACTUALIZAR CONTADOR DEL CARRITO
// ====================================================

function actualizarContadorCarrito() {

    // Buscamos el carrito guardado en localStorage
    const carritoGuardado = localStorage.getItem("carrito");


    // Si existe lo convertimos de JSON a arreglo.
    // Si no existe creamos un arreglo vacío.
    const carrito = carritoGuardado
        ? JSON.parse(carritoGuardado)
        : [];


    // Buscamos el elemento del navbar
    const contador = document.getElementById("contadorCarrito");


    // Si existe el contador
    if (contador) {

        let cantidadTotal = 0;


        // Sumamos las cantidades de los productos
        carrito.forEach(function (producto) {

            cantidadTotal += producto.cantidad || 1;

        });


        // Mostramos el resultado
        contador.textContent = cantidadTotal;

    }

}