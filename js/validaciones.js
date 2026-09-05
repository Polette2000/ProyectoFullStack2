// ==============================
// VALIDACIONES GENERALES
// ==============================

// Valida que el correo no esté vacío,
// no supere los 100 caracteres
// y use uno de los dominios permitidos.
function validarCorreo(correo) {

    const correoLimpio = correo.trim();

    if (correoLimpio === "") {
        return {
            valido: false,
            mensaje: "El correo electrónico es obligatorio."
        };
    }

    if (correoLimpio.length > 100) {
        return {
            valido: false,
            mensaje: "El correo no puede superar los 100 caracteres."
        };
    }

    const dominiosPermitidos = [
        "@duoc.cl",
        "@profesor.duoc.cl",
        "@gmail.com"
    ];

    const dominioValido = dominiosPermitidos.some(function (dominio) {
        return correoLimpio.toLowerCase().endsWith(dominio);
    });

    if (!dominioValido) {
        return {
            valido: false,
            mensaje:
                "Solo se permiten correos @duoc.cl, @profesor.duoc.cl o @gmail.com."
        };
    }

    // Expresión básica para revisar estructura de correo
    const formatoCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formatoCorreo.test(correoLimpio)) {
        return {
            valido: false,
            mensaje: "Ingresa un correo electrónico válido."
        };
    }

    return {
        valido: true,
        mensaje: ""
    };
}


// Valida contraseña obligatoria
// entre 4 y 10 caracteres.
function validarPassword(password) {

    if (password === "") {
        return {
            valido: false,
            mensaje: "La contraseña es obligatoria."
        };
    }

    if (password.length < 4) {
        return {
            valido: false,
            mensaje: "La contraseña debe tener al menos 4 caracteres."
        };
    }

    if (password.length > 10) {
        return {
            valido: false,
            mensaje: "La contraseña no puede superar los 10 caracteres."
        };
    }

    return {
        valido: true,
        mensaje: ""
    };
}

// Valida confirmación de contraseña
function validarConfirmacionPassword(password, confirmarPassword) {

    if (confirmarPassword === "") {
        return {
            valido: false,
            mensaje: "Debes confirmar la contraseña."
        };
    }

    if (password !== confirmarPassword) {
        return {
            valido: false,
            mensaje: "Las contraseñas no coinciden."
        };
    }

    return {
        valido: true,
        mensaje: ""
    };
}

// ==============================
// VALIDAR RUT
// ==============================

function validarRut(rut) {

    const rutLimpio = rut.trim().toUpperCase();

    if (rutLimpio === "") {
        return {
            valido: false,
            mensaje: "El RUT es obligatorio."
        };
    }

    if (rutLimpio.length < 7 || rutLimpio.length > 9) {
        return {
            valido: false,
            mensaje: "El RUT debe tener entre 7 y 9 caracteres."
        };
    }

    if (!/^[0-9]+[0-9K]$/.test(rutLimpio)) {
        return {
            valido: false,
            mensaje: "Ingresa el RUT sin puntos ni guion."
        };
    }

    const cuerpo = rutLimpio.slice(0, -1);
    const digitoVerificador = rutLimpio.slice(-1);

    let suma = 0;
    let multiplicador = 2;

    for (let i = cuerpo.length - 1; i >= 0; i--) {

        suma += parseInt(cuerpo[i]) * multiplicador;

        multiplicador++;

        if (multiplicador === 8) {
            multiplicador = 2;
        }
    }

    const resto = 11 - (suma % 11);

    let digitoCalculado;

    if (resto === 11) {
        digitoCalculado = "0";
    } else if (resto === 10) {
        digitoCalculado = "K";
    } else {
        digitoCalculado = resto.toString();
    }

    if (digitoCalculado !== digitoVerificador) {
        return {
            valido: false,
            mensaje: "El RUT ingresado no es válido."
        };
    }

    return {
        valido: true,
        mensaje: ""
    };
}


// ==============================
// VALIDAR NOMBRE
// ==============================

function validarNombre(nombre) {

    const nombreLimpio = nombre.trim();

    if (nombreLimpio === "") {
        return {
            valido: false,
            mensaje: "El nombre es obligatorio."
        };
    }

    if (nombreLimpio.length > 50) {
        return {
            valido: false,
            mensaje: "El nombre no puede superar los 50 caracteres."
        };
    }

    return {
        valido: true,
        mensaje: ""
    };
}


// ==============================
// VALIDAR APELLIDOS
// ==============================

function validarApellidos(apellidos) {

    const apellidosLimpios = apellidos.trim();

    if (apellidosLimpios === "") {
        return {
            valido: false,
            mensaje: "Los apellidos son obligatorios."
        };
    }

    if (apellidosLimpios.length > 100) {
        return {
            valido: false,
            mensaje: "Los apellidos no pueden superar los 100 caracteres."
        };
    }

    return {
        valido: true,
        mensaje: ""
    };
}


// ==============================
// VALIDAR DIRECCIÓN
// ==============================

function validarDireccion(direccion) {

    const direccionLimpia = direccion.trim();

    if (direccionLimpia === "") {
        return {
            valido: false,
            mensaje: "La dirección es obligatoria."
        };
    }

    if (direccionLimpia.length > 300) {
        return {
            valido: false,
            mensaje: "La dirección no puede superar los 300 caracteres."
        };
    }

    return {
        valido: true,
        mensaje: ""
    };
}


// ==============================
// VALIDAR SELECT
// ==============================

function validarSeleccion(valor, nombreCampo) {

    if (valor === "") {
        return {
            valido: false,
            mensaje: "Debes seleccionar " + nombreCampo + "."
        };
    }

    return {
        valido: true,
        mensaje: ""
    };
}