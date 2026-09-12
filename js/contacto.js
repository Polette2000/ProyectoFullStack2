// =======================================================
// PERFULANDIA
// FORMULARIO CONTACTO
// =======================================================


// =======================================================
// OBTENER ELEMENTOS HTML
// =======================================================

const formContacto =
    document.getElementById("formContacto");


const nombreContacto =
    document.getElementById("nombreContacto");


const correoContacto =
    document.getElementById("correoContacto");


const comentarioContacto =
    document.getElementById("comentarioContacto");


const errorNombre =
    document.getElementById("errorNombre");


const errorCorreo =
    document.getElementById("errorCorreo");


const errorComentario =
    document.getElementById("errorComentario");


const contadorComentario =
    document.getElementById("contadorComentario");


const mensajeExito =
    document.getElementById("mensajeExito");


// =======================================================
// VALIDAR NOMBRE
// =======================================================

function validarNombre() {


    const nombre =
        nombreContacto.value.trim();


    // NOMBRE VACÍO

    if (nombre === "") {

        mostrarError(
            nombreContacto,
            errorNombre,
            "El nombre es obligatorio."
        );

        return false;

    }


    // MÁS DE 100 CARACTERES

    if (nombre.length > 100) {

        mostrarError(
            nombreContacto,
            errorNombre,
            "El nombre no puede superar los 100 caracteres."
        );

        return false;

    }


    // CORRECTO

    mostrarCorrecto(
        nombreContacto,
        errorNombre
    );


    return true;

}


// =======================================================
// VALIDAR CORREO
// =======================================================

function validarCorreo() {


    const correo =
        correoContacto.value
            .trim()
            .toLowerCase();


    // EL CORREO ES OPCIONAL SEGÚN LA PAUTA

    if (correo === "") {

        limpiarEstado(
            correoContacto,
            errorCorreo
        );

        return true;

    }


    // MÁS DE 100 CARACTERES

    if (correo.length > 100) {

        mostrarError(
            correoContacto,
            errorCorreo,
            "El correo no puede superar los 100 caracteres."
        );

        return false;

    }


    // DOMINIOS PERMITIDOS

    const dominiosPermitidos = [

        "@duoc.cl",
        "@profesor.duoc.cl",
        "@gmail.com"

    ];


    const dominioValido =
        dominiosPermitidos.some(function (dominio) {

            return correo.endsWith(dominio);

        });


    if (!dominioValido) {

        mostrarError(
            correoContacto,
            errorCorreo,
            "Solo se permiten correos @duoc.cl, @profesor.duoc.cl o @gmail.com."
        );

        return false;

    }


    // VALIDAR QUE EXISTA TEXTO ANTES DEL @

    const posicionArroba =
        correo.indexOf("@");


    if (posicionArroba <= 0) {

        mostrarError(
            correoContacto,
            errorCorreo,
            "Ingresa un correo válido."
        );

        return false;

    }


    mostrarCorrecto(
        correoContacto,
        errorCorreo
    );


    return true;

}


// =======================================================
// VALIDAR COMENTARIO
// =======================================================

function validarComentario() {


    const comentario =
        comentarioContacto.value.trim();


    // VACÍO

    if (comentario === "") {

        mostrarError(
            comentarioContacto,
            errorComentario,
            "El comentario es obligatorio."
        );

        return false;

    }


    // MÁS DE 500 CARACTERES

    if (comentario.length > 500) {

        mostrarError(
            comentarioContacto,
            errorComentario,
            "El comentario no puede superar los 500 caracteres."
        );

        return false;

    }


    mostrarCorrecto(
        comentarioContacto,
        errorComentario
    );


    return true;

}


// =======================================================
// MOSTRAR ERROR
// =======================================================

function mostrarError(
    campo,
    elementoError,
    mensaje
) {


    campo.classList.remove("is-valid");

    campo.classList.add("is-invalid");


    elementoError.textContent = mensaje;

}


// =======================================================
// MOSTRAR CAMPO CORRECTO
// =======================================================

function mostrarCorrecto(
    campo,
    elementoError
) {


    campo.classList.remove("is-invalid");

    campo.classList.add("is-valid");


    elementoError.textContent = "";

}


// =======================================================
// LIMPIAR ESTADO
// =======================================================

function limpiarEstado(
    campo,
    elementoError
) {


    campo.classList.remove(
        "is-valid",
        "is-invalid"
    );


    elementoError.textContent = "";

}


// =======================================================
// CONTADOR DE COMENTARIO
// =======================================================

function actualizarContadorComentario() {


    const cantidad =
        comentarioContacto.value.length;


    contadorComentario.textContent =
        cantidad + " / 500";


    // SI SUPERA 500

    if (cantidad > 500) {

        contadorComentario.classList.add(
            "contador-superado"
        );

    }

    else {

        contadorComentario.classList.remove(
            "contador-superado"
        );

    }

}


// =======================================================
// EVENTOS EN TIEMPO REAL
// =======================================================

if (nombreContacto) {

    nombreContacto.addEventListener(
        "input",
        validarNombre
    );

}


if (correoContacto) {

    correoContacto.addEventListener(
        "input",
        validarCorreo
    );

}


if (comentarioContacto) {

    comentarioContacto.addEventListener(
        "input",
        function () {

            validarComentario();

            actualizarContadorComentario();

        }
    );

}


// =======================================================
// ENVÍO DEL FORMULARIO
// =======================================================

if (formContacto) {

    formContacto.addEventListener(
        "submit",
        function (evento) {


            // EVITA QUE LA PÁGINA SE RECARGUE

            evento.preventDefault();


            const nombreValido =
                validarNombre();


            const correoValido =
                validarCorreo();


            const comentarioValido =
                validarComentario();


            // SI TODO ESTÁ CORRECTO

            if (
                nombreValido &&
                correoValido &&
                comentarioValido
            ) {


                mensajeExito.classList.remove(
                    "d-none"
                );


                // LIMPIAR FORMULARIO

                formContacto.reset();


                limpiarEstado(
                    nombreContacto,
                    errorNombre
                );


                limpiarEstado(
                    correoContacto,
                    errorCorreo
                );


                limpiarEstado(
                    comentarioContacto,
                    errorComentario
                );


                contadorComentario.textContent =
                    "0 / 500";


                // OCULTAR MENSAJE DESPUÉS DE 4 SEGUNDOS

                setTimeout(function () {

                    mensajeExito.classList.add(
                        "d-none"
                    );

                }, 4000);

            }

        }
    );

}