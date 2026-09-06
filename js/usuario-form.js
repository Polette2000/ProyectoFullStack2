// Regiones y comunas
const regionesComunas = {
    "Región Metropolitana": [
        "Santiago",
        "Providencia",
        "Las Condes",
        "Ñuñoa",
        "Maipú",
        "Puente Alto"
    ],

    "Valparaíso": [
        "Valparaíso",
        "Viña del Mar",
        "Quilpué",
        "Villa Alemana",
        "Quillota"
    ],

    "Biobío": [
        "Concepción",
        "Talcahuano",
        "Chiguayante",
        "San Pedro de la Paz",
        "Los Ángeles"
    ],

    "La Araucanía": [
        "Temuco",
        "Padre Las Casas",
        "Villarrica",
        "Pucón",
        "Angol"
    ],

    "Los Lagos": [
        "Puerto Montt",
        "Puerto Varas",
        "Osorno",
        "Castro",
        "Ancud"
    ]
};


// Elementos
const formUsuario = document.getElementById("formUsuario");

const rut = document.getElementById("rut");
const nombre = document.getElementById("nombre");
const apellidos = document.getElementById("apellidos");
const correo = document.getElementById("correo");
const tipoUsuario = document.getElementById("tipoUsuario");
const region = document.getElementById("region");
const comuna = document.getElementById("comuna");
const direccion = document.getElementById("direccion");

const errorRut = document.getElementById("errorRut");
const errorNombre = document.getElementById("errorNombre");
const errorApellidos = document.getElementById("errorApellidos");
const errorCorreo = document.getElementById("errorCorreo");
const errorTipoUsuario = document.getElementById("errorTipoUsuario");
const errorRegion = document.getElementById("errorRegion");
const errorComuna = document.getElementById("errorComuna");
const errorDireccion = document.getElementById("errorDireccion");

const mensajeUsuario = document.getElementById("mensajeUsuario");


// Mostrar resultado
function mostrarResultado(input, errorElemento, resultado) {

    input.classList.remove("is-valid", "is-invalid");

    if (resultado.valido) {

        input.classList.add("is-valid");
        errorElemento.textContent = "";

    } else {

        input.classList.add("is-invalid");
        errorElemento.textContent = resultado.mensaje;

    }

}


// Validar RUN
function validarRut(valor) {

    const rutLimpio = valor.trim().toUpperCase();

    if (rutLimpio === "") {
        return {
            valido: false,
            mensaje: "El RUN es obligatorio."
        };
    }

    if (rutLimpio.length < 7 || rutLimpio.length > 9) {
        return {
            valido: false,
            mensaje: "El RUN debe tener entre 7 y 9 caracteres."
        };
    }

    if (!/^[0-9]+[0-9K]$/.test(rutLimpio)) {
        return {
            valido: false,
            mensaje: "Ingrese el RUN sin puntos ni guion."
        };
    }

    const cuerpo = rutLimpio.slice(0, -1);
    const dvIngresado = rutLimpio.slice(-1);

    let suma = 0;
    let multiplicador = 2;

    for (let i = cuerpo.length - 1; i >= 0; i--) {

        suma += Number(cuerpo[i]) * multiplicador;

        multiplicador++;

        if (multiplicador > 7) {
            multiplicador = 2;
        }

    }

    const resto = 11 - (suma % 11);

    let dvCalculado;

    if (resto === 11) {
        dvCalculado = "0";
    } else if (resto === 10) {
        dvCalculado = "K";
    } else {
        dvCalculado = String(resto);
    }

    if (dvIngresado !== dvCalculado) {
        return {
            valido: false,
            mensaje: "El RUN ingresado no es válido."
        };
    }

    return {
        valido: true
    };

}


// Validar nombre
function validarNombre(valor) {

    const nombreLimpio = valor.trim();

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
        valido: true
    };

}


// Validar apellidos
function validarApellidos(valor) {

    const apellidosLimpios = valor.trim();

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
        valido: true
    };

}


// Validar correo
function validarCorreo(valor) {

    const correoLimpio = valor.trim().toLowerCase();

    if (correoLimpio === "") {
        return {
            valido: false,
            mensaje: "El correo es obligatorio."
        };
    }

    if (correoLimpio.length > 100) {
        return {
            valido: false,
            mensaje: "El correo no puede superar los 100 caracteres."
        };
    }

    const formatoCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formatoCorreo.test(correoLimpio)) {
        return {
            valido: false,
            mensaje: "Ingrese un correo válido."
        };
    }

    const dominiosPermitidos = [
        "@duoc.cl",
        "@profesor.duoc.cl",
        "@gmail.com"
    ];

    const dominioValido = dominiosPermitidos.some(function (dominio) {
        return correoLimpio.endsWith(dominio);
    });

    if (!dominioValido) {
        return {
            valido: false,
            mensaje: "El dominio del correo no está permitido."
        };
    }

    return {
        valido: true
    };

}


// Validar selección
function validarSeleccion(valor, mensaje) {

    if (valor === "") {
        return {
            valido: false,
            mensaje: mensaje
        };
    }

    return {
        valido: true
    };

}


// Validar dirección
function validarDireccion(valor) {

    const direccionLimpia = valor.trim();

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
        valido: true
    };

}


// Cargar regiones
function cargarRegiones() {

    Object.keys(regionesComunas).forEach(function (nombreRegion) {

        const option = document.createElement("option");

        option.value = nombreRegion;
        option.textContent = nombreRegion;

        region.appendChild(option);

    });

}


// Cargar comunas
function cargarComunas() {

    const regionSeleccionada = region.value;

    comuna.innerHTML = `
        <option value="">
            Seleccione una comuna
        </option>
    `;

    if (regionSeleccionada === "") {
        comuna.disabled = true;
        return;
    }

    comuna.disabled = false;

    regionesComunas[regionSeleccionada].forEach(function (nombreComuna) {

        const option = document.createElement("option");

        option.value = nombreComuna;
        option.textContent = nombreComuna;

        comuna.appendChild(option);

    });

}


// Región
region.addEventListener("change", function () {

    cargarComunas();

    mostrarResultado(
        region,
        errorRegion,
        validarSeleccion(
            region.value,
            "Seleccione una región."
        )
    );

});


// Comuna
comuna.addEventListener("change", function () {

    mostrarResultado(
        comuna,
        errorComuna,
        validarSeleccion(
            comuna.value,
            "Seleccione una comuna."
        )
    );

});


// Tipo usuario
tipoUsuario.addEventListener("change", function () {

    mostrarResultado(
        tipoUsuario,
        errorTipoUsuario,
        validarSeleccion(
            tipoUsuario.value,
            "Seleccione un tipo de usuario."
        )
    );

});


// RUN
rut.addEventListener("blur", function () {

    mostrarResultado(
        rut,
        errorRut,
        validarRut(rut.value)
    );

});


// Nombre
nombre.addEventListener("blur", function () {

    mostrarResultado(
        nombre,
        errorNombre,
        validarNombre(nombre.value)
    );

});


// Apellidos
apellidos.addEventListener("blur", function () {

    mostrarResultado(
        apellidos,
        errorApellidos,
        validarApellidos(apellidos.value)
    );

});


// Correo
correo.addEventListener("blur", function () {

    mostrarResultado(
        correo,
        errorCorreo,
        validarCorreo(correo.value)
    );

});


// Dirección
direccion.addEventListener("blur", function () {

    mostrarResultado(
        direccion,
        errorDireccion,
        validarDireccion(direccion.value)
    );

});


// Enviar formulario
formUsuario.addEventListener("submit", function (event) {

    event.preventDefault();

    const resultadoRut = validarRut(rut.value);
    const resultadoNombre = validarNombre(nombre.value);
    const resultadoApellidos = validarApellidos(apellidos.value);
    const resultadoCorreo = validarCorreo(correo.value);

    const resultadoTipoUsuario = validarSeleccion(
        tipoUsuario.value,
        "Seleccione un tipo de usuario."
    );

    const resultadoRegion = validarSeleccion(
        region.value,
        "Seleccione una región."
    );

    const resultadoComuna = validarSeleccion(
        comuna.value,
        "Seleccione una comuna."
    );

    const resultadoDireccion = validarDireccion(direccion.value);


    mostrarResultado(rut, errorRut, resultadoRut);
    mostrarResultado(nombre, errorNombre, resultadoNombre);
    mostrarResultado(apellidos, errorApellidos, resultadoApellidos);
    mostrarResultado(correo, errorCorreo, resultadoCorreo);
    mostrarResultado(tipoUsuario, errorTipoUsuario, resultadoTipoUsuario);
    mostrarResultado(region, errorRegion, resultadoRegion);
    mostrarResultado(comuna, errorComuna, resultadoComuna);
    mostrarResultado(direccion, errorDireccion, resultadoDireccion);


    const formularioValido =
        resultadoRut.valido &&
        resultadoNombre.valido &&
        resultadoApellidos.valido &&
        resultadoCorreo.valido &&
        resultadoTipoUsuario.valido &&
        resultadoRegion.valido &&
        resultadoComuna.valido &&
        resultadoDireccion.valido;


    if (!formularioValido) {

        mensajeUsuario.innerHTML = `
            <div class="alert alert-danger">
                Revisa los campos del formulario.
            </div>
        `;

        return;
    }


    mensajeUsuario.innerHTML = `
        <div class="alert alert-success">
            Usuario creado correctamente.
        </div>
    `;

});


// Inicio
cargarRegiones();