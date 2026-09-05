document.addEventListener("DOMContentLoaded", function () {

    // ==============================
    // ELEMENTOS DEL FORMULARIO
    // ==============================

    const formRegistro = document.getElementById("formRegistro");

    const rut = document.getElementById("rut");
    const nombre = document.getElementById("nombre");
    const apellidos = document.getElementById("apellidos");
    const correo = document.getElementById("correo");
    const fechaNacimiento = document.getElementById("fechaNacimiento");
    const region = document.getElementById("region");
    const comuna = document.getElementById("comuna");
    const direccion = document.getElementById("direccion");
    const password = document.getElementById("password");
    const confirmarPassword = document.getElementById("confirmarPassword");
    const mostrarPasswords = document.getElementById("mostrarPasswords");

    const errorRut = document.getElementById("errorRut");
    const errorNombre = document.getElementById("errorNombre");
    const errorApellidos = document.getElementById("errorApellidos");
    const errorCorreo = document.getElementById("errorCorreo");
    const errorRegion = document.getElementById("errorRegion");
    const errorComuna = document.getElementById("errorComuna");
    const errorDireccion = document.getElementById("errorDireccion");
    const errorPassword = document.getElementById("errorPassword");
    const errorConfirmarPassword =
        document.getElementById("errorConfirmarPassword");

    const mensajeRegistro =
        document.getElementById("mensajeRegistro");


    // ==============================
    // REGIONES Y COMUNAS
    // ==============================

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


    // ==============================
    // CARGAR REGIONES
    // ==============================

    function cargarRegiones() {

        Object.keys(regionesComunas).forEach(function (nombreRegion) {

            const option = document.createElement("option");

            option.value = nombreRegion;
            option.textContent = nombreRegion;

            region.appendChild(option);

        });
    }

    cargarRegiones();


    // ==============================
    // CARGAR COMUNAS
    // ==============================

    region.addEventListener("change", function () {

        const regionSeleccionada = region.value;

        comuna.innerHTML = "";

        if (regionSeleccionada === "") {

            comuna.disabled = true;

            comuna.innerHTML =
                '<option value="">Primero selecciona una región</option>';

            return;
        }

        comuna.disabled = false;

        const optionInicial =
            document.createElement("option");

        optionInicial.value = "";
        optionInicial.textContent = "Selecciona una comuna";

        comuna.appendChild(optionInicial);


        regionesComunas[regionSeleccionada].forEach(function (nombreComuna) {

            const option = document.createElement("option");

            option.value = nombreComuna;
            option.textContent = nombreComuna;

            comuna.appendChild(option);

        });

    });


    // ==============================
    // MOSTRAR / OCULTAR CONTRASEÑAS
    // ==============================

    mostrarPasswords.addEventListener("change", function () {

        if (this.checked) {

            password.type = "text";
            confirmarPassword.type = "text";

        } else {

            password.type = "password";
            confirmarPassword.type = "password";

        }

    });


    // ==============================
    // FUNCIÓN PARA MOSTRAR RESULTADO
    // ==============================

    function mostrarResultado(input, errorElemento, resultado) {

        if (!resultado.valido) {

            errorElemento.textContent = resultado.mensaje;

            input.classList.add("is-invalid");
            input.classList.remove("is-valid");

        } else {

            errorElemento.textContent = "";

            input.classList.remove("is-invalid");
            input.classList.add("is-valid");

        }

    }


    // ==============================
    // VALIDACIONES AL SALIR DEL CAMPO
    // ==============================

    rut.addEventListener("blur", function () {

        mostrarResultado(
            rut,
            errorRut,
            validarRut(rut.value)
        );

    });


    nombre.addEventListener("blur", function () {

        mostrarResultado(
            nombre,
            errorNombre,
            validarNombre(nombre.value)
        );

    });


    apellidos.addEventListener("blur", function () {

        mostrarResultado(
            apellidos,
            errorApellidos,
            validarApellidos(apellidos.value)
        );

    });


    correo.addEventListener("blur", function () {

        mostrarResultado(
            correo,
            errorCorreo,
            validarCorreo(correo.value)
        );

    });


    direccion.addEventListener("blur", function () {

        mostrarResultado(
            direccion,
            errorDireccion,
            validarDireccion(direccion.value)
        );

    });


    password.addEventListener("blur", function () {

        mostrarResultado(
            password,
            errorPassword,
            validarPassword(password.value)
        );

    });


    confirmarPassword.addEventListener("blur", function () {

        mostrarResultado(
            confirmarPassword,
            errorConfirmarPassword,
            validarConfirmacionPassword(
                password.value,
                confirmarPassword.value
            )
        );

    });


    // ==============================
    // VALIDAR REGIÓN
    // ==============================

    region.addEventListener("change", function () {

        mostrarResultado(
            region,
            errorRegion,
            validarSeleccion(region.value, "una región")
        );

    });


    // ==============================
    // VALIDAR COMUNA
    // ==============================

    comuna.addEventListener("change", function () {

        mostrarResultado(
            comuna,
            errorComuna,
            validarSeleccion(comuna.value, "una comuna")
        );

    });


    // ==============================
    // ENVÍO DEL FORMULARIO
    // ==============================

    formRegistro.addEventListener("submit", function (event) {

        event.preventDefault();

        mensajeRegistro.textContent = "";
        mensajeRegistro.className = "mb-3";


        const resultadoRut =
            validarRut(rut.value);

        const resultadoNombre =
            validarNombre(nombre.value);

        const resultadoApellidos =
            validarApellidos(apellidos.value);

        const resultadoCorreo =
            validarCorreo(correo.value);

        const resultadoRegion =
            validarSeleccion(region.value, "una región");

        const resultadoComuna =
            validarSeleccion(comuna.value, "una comuna");

        const resultadoDireccion =
            validarDireccion(direccion.value);

        const resultadoPassword =
            validarPassword(password.value);

        const resultadoConfirmacion =
            validarConfirmacionPassword(
                password.value,
                confirmarPassword.value
            );


        // ==============================
        // MOSTRAR RESULTADOS
        // ==============================

        mostrarResultado(
            rut,
            errorRut,
            resultadoRut
        );

        mostrarResultado(
            nombre,
            errorNombre,
            resultadoNombre
        );

        mostrarResultado(
            apellidos,
            errorApellidos,
            resultadoApellidos
        );

        mostrarResultado(
            correo,
            errorCorreo,
            resultadoCorreo
        );

        mostrarResultado(
            region,
            errorRegion,
            resultadoRegion
        );

        mostrarResultado(
            comuna,
            errorComuna,
            resultadoComuna
        );

        mostrarResultado(
            direccion,
            errorDireccion,
            resultadoDireccion
        );

        mostrarResultado(
            password,
            errorPassword,
            resultadoPassword
        );

        mostrarResultado(
            confirmarPassword,
            errorConfirmarPassword,
            resultadoConfirmacion
        );


        // ==============================
        // TODO CORRECTO
        // ==============================

        if (
            resultadoRut.valido &&
            resultadoNombre.valido &&
            resultadoApellidos.valido &&
            resultadoCorreo.valido &&
            resultadoRegion.valido &&
            resultadoComuna.valido &&
            resultadoDireccion.valido &&
            resultadoPassword.valido &&
            resultadoConfirmacion.valido
        ) {

            mensajeRegistro.textContent =
                "Cuenta creada correctamente.";

            mensajeRegistro.className =
                "alert alert-success mt-3";

            console.log("Registro válido");

        }

    });

});