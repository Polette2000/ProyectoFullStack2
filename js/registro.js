document.addEventListener("DOMContentLoaded", function () {

   
    // ELEMENTOS DEL FORMULARIO
    
    const formRegistro =
        document.getElementById("formRegistro");

    const rut =
        document.getElementById("rut");

    const nombre =
        document.getElementById("nombre");

    const apellidos =
        document.getElementById("apellidos");

    const correo =
        document.getElementById("correo");

    const region =
        document.getElementById("region");

    const comuna =
        document.getElementById("comuna");

    const direccion =
        document.getElementById("direccion");

    const password =
        document.getElementById("password");

    const confirmarPassword =
        document.getElementById("confirmarPassword");

    const mostrarPasswords =
        document.getElementById("mostrarPasswords");


    // ERRORES

    const errorRut =
        document.getElementById("errorRut");

    const errorNombre =
        document.getElementById("errorNombre");

    const errorApellidos =
        document.getElementById("errorApellidos");

    const errorCorreo =
        document.getElementById("errorCorreo");

    const errorRegion =
        document.getElementById("errorRegion");

    const errorComuna =
        document.getElementById("errorComuna");

    const errorDireccion =
        document.getElementById("errorDireccion");

    const errorPassword =
        document.getElementById("errorPassword");

    const errorConfirmarPassword =
        document.getElementById(
            "errorConfirmarPassword"
        );

    const mensajeRegistro =
        document.getElementById(
            "mensajeRegistro"
        );

    
    // VALIDAR RUT

    function validarRut(rutValor) {

        const rutLimpio =
            rutValor.trim().toUpperCase();

        if (rutLimpio === "") {
            return {
                valido: false,
                mensaje: "El RUT es obligatorio."
            };
        }

        if (
            rutLimpio.length < 7 ||
            rutLimpio.length > 9
        ) {
            return {
                valido: false,
                mensaje:
                    "El RUT debe tener entre 7 y 9 caracteres."
            };
        }

        if (!/^[0-9]+[0-9K]$/.test(rutLimpio)) {
            return {
                valido: false,
                mensaje:
                    "Ingresa el RUT sin puntos ni guion."
            };
        }

        const cuerpo =
            rutLimpio.slice(0, -1);

        const digitoVerificador =
            rutLimpio.slice(-1);

        let suma = 0;
        let multiplicador = 2;

        for (
            let i = cuerpo.length - 1;
            i >= 0;
            i--
        ) {

            suma +=
                parseInt(cuerpo[i]) *
                multiplicador;

            multiplicador++;

            if (multiplicador === 8) {
                multiplicador = 2;
            }
        }

        const resto =
            11 - (suma % 11);

        let digitoCalculado;

        if (resto === 11) {

            digitoCalculado = "0";

        } else if (resto === 10) {

            digitoCalculado = "K";

        } else {

            digitoCalculado =
                resto.toString();

        }

        if (
            digitoCalculado !==
            digitoVerificador
        ) {
            return {
                valido: false,
                mensaje:
                    "El RUT ingresado no es válido."
            };
        }

        return {
            valido: true,
            mensaje: ""
        };
    }

   
    // VALIDAR NOMBRE
   
    function validarNombre(nombreValor) {

        const nombreLimpio =
            nombreValor.trim();

        if (nombreLimpio === "") {
            return {
                valido: false,
                mensaje:
                    "El nombre es obligatorio."
            };
        }

        if (nombreLimpio.length > 50) {
            return {
                valido: false,
                mensaje:
                    "El nombre no puede superar los 50 caracteres."
            };
        }

        return {
            valido: true,
            mensaje: ""
        };
    }


   
    // VALIDAR APELLIDOS

    function validarApellidos(
        apellidosValor
    ) {

        const apellidosLimpios =
            apellidosValor.trim();

        if (apellidosLimpios === "") {
            return {
                valido: false,
                mensaje:
                    "Los apellidos son obligatorios."
            };
        }

        if (
            apellidosLimpios.length > 100
        ) {
            return {
                valido: false,
                mensaje:
                    "Los apellidos no pueden superar los 100 caracteres."
            };
        }

        return {
            valido: true,
            mensaje: ""
        };
    }


    // VALIDAR CORREO


    function validarCorreo(correoValor) {

        const correoLimpio =
            correoValor
                .trim()
                .toLowerCase();

        if (correoLimpio === "") {
            return {
                valido: false,
                mensaje:
                    "El correo electrónico es obligatorio."
            };
        }

        if (correoLimpio.length > 100) {
            return {
                valido: false,
                mensaje:
                    "El correo no puede superar los 100 caracteres."
            };
        }

        const formatoCorreo =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (
            !formatoCorreo.test(
                correoLimpio
            )
        ) {
            return {
                valido: false,
                mensaje:
                    "Ingresa un correo electrónico válido."
            };
        }

        const dominiosPermitidos = [
            "@duoc.cl",
            "@profesor.duoc.cl",
            "@gmail.com"
        ];

        const dominioValido =
            dominiosPermitidos.some(
                function (dominio) {
                    return correoLimpio
                        .endsWith(dominio);
                }
            );

        if (!dominioValido) {
            return {
                valido: false,
                mensaje:
                    "Solo se permiten correos @duoc.cl, @profesor.duoc.cl o @gmail.com."
            };
        }

        return {
            valido: true,
            mensaje: ""
        };
    }


    
    // VALIDAR DIRECCIÓN


    function validarDireccion(
        direccionValor
    ) {

        const direccionLimpia =
            direccionValor.trim();

        if (direccionLimpia === "") {
            return {
                valido: false,
                mensaje:
                    "La dirección es obligatoria."
            };
        }

        if (
            direccionLimpia.length > 300
        ) {
            return {
                valido: false,
                mensaje:
                    "La dirección no puede superar los 300 caracteres."
            };
        }

        return {
            valido: true,
            mensaje: ""
        };
    }


   
    // VALIDAR PASSWORD
    

    function validarPassword(
        passwordValor
    ) {

        if (passwordValor === "") {
            return {
                valido: false,
                mensaje:
                    "La contraseña es obligatoria."
            };
        }

        if (passwordValor.length < 4) {
            return {
                valido: false,
                mensaje:
                    "La contraseña debe tener al menos 4 caracteres."
            };
        }

        if (passwordValor.length > 10) {
            return {
                valido: false,
                mensaje:
                    "La contraseña no puede superar los 10 caracteres."
            };
        }

        return {
            valido: true,
            mensaje: ""
        };
    }


   
    // CONFIRMAR PASSWORD
    

    function validarConfirmacionPassword(
        passwordValor,
        confirmarValor
    ) {

        if (confirmarValor === "") {
            return {
                valido: false,
                mensaje:
                    "Debes confirmar la contraseña."
            };
        }

        if (
            passwordValor !==
            confirmarValor
        ) {
            return {
                valido: false,
                mensaje:
                    "Las contraseñas no coinciden."
            };
        }

        return {
            valido: true,
            mensaje: ""
        };
    }


  
    // VALIDAR SELECT
  
    function validarSeleccion(
        valor,
        nombreCampo
    ) {

        if (valor === "") {
            return {
                valido: false,
                mensaje:
                    "Debes seleccionar " +
                    nombreCampo +
                    "."
            };
        }

        return {
            valido: true,
            mensaje: ""
        };
    }


    // REGIONES Y COMUNAS
   

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



    // CARGAR REGIONES
    

    function cargarRegiones() {

        Object.keys(
            regionesComunas
        ).forEach(
            function (nombreRegion) {

                const option =
                    document.createElement(
                        "option"
                    );

                option.value =
                    nombreRegion;

                option.textContent =
                    nombreRegion;

                region.appendChild(
                    option
                );

            }
        );
    }

    cargarRegiones();


   
    // CARGAR COMUNAS
    

    region.addEventListener(
        "change",
        function () {

            const regionSeleccionada =
                region.value;

            comuna.innerHTML = "";

            if (
                regionSeleccionada === ""
            ) {

                comuna.disabled = true;

                comuna.innerHTML =
                    '<option value="">Primero selecciona una región</option>';

                return;
            }

            comuna.disabled = false;

            const optionInicial =
                document.createElement(
                    "option"
                );

            optionInicial.value = "";

            optionInicial.textContent =
                "Selecciona una comuna";

            comuna.appendChild(
                optionInicial
            );


            regionesComunas[
                regionSeleccionada
            ].forEach(
                function (nombreComuna) {

                    const option =
                        document.createElement(
                            "option"
                        );

                    option.value =
                        nombreComuna;

                    option.textContent =
                        nombreComuna;

                    comuna.appendChild(
                        option
                    );

                }
            );

        }
    );


    
    // MOSTRAR CONTRASEÑAS
   

    mostrarPasswords.addEventListener(
        "change",
        function () {

            if (this.checked) {

                password.type = "text";

                confirmarPassword.type =
                    "text";

            } else {

                password.type =
                    "password";

                confirmarPassword.type =
                    "password";

            }

        }
    );


    // MOSTRAR RESULTADO
  

    function mostrarResultado(
        input,
        errorElemento,
        resultado
    ) {

        if (!resultado.valido) {

            errorElemento.textContent =
                resultado.mensaje;

            input.classList.add(
                "is-invalid"
            );

            input.classList.remove(
                "is-valid"
            );

        } else {

            errorElemento.textContent =
                "";

            input.classList.remove(
                "is-invalid"
            );

            input.classList.add(
                "is-valid"
            );

        }

    }


   
    // VALIDACIONES BLUR
    

    rut.addEventListener(
        "blur",
        function () {

            mostrarResultado(
                rut,
                errorRut,
                validarRut(rut.value)
            );

        }
    );


    nombre.addEventListener(
        "blur",
        function () {

            mostrarResultado(
                nombre,
                errorNombre,
                validarNombre(
                    nombre.value
                )
            );

        }
    );


    apellidos.addEventListener(
        "blur",
        function () {

            mostrarResultado(
                apellidos,
                errorApellidos,
                validarApellidos(
                    apellidos.value
                )
            );

        }
    );


    correo.addEventListener(
        "blur",
        function () {

            mostrarResultado(
                correo,
                errorCorreo,
                validarCorreo(
                    correo.value
                )
            );

        }
    );


    direccion.addEventListener(
        "blur",
        function () {

            mostrarResultado(
                direccion,
                errorDireccion,
                validarDireccion(
                    direccion.value
                )
            );

        }
    );


    password.addEventListener(
        "blur",
        function () {

            mostrarResultado(
                password,
                errorPassword,
                validarPassword(
                    password.value
                )
            );

        }
    );


    confirmarPassword.addEventListener(
        "blur",
        function () {

            mostrarResultado(
                confirmarPassword,
                errorConfirmarPassword,
                validarConfirmacionPassword(
                    password.value,
                    confirmarPassword.value
                )
            );

        }
    );


    region.addEventListener(
        "change",
        function () {

            mostrarResultado(
                region,
                errorRegion,
                validarSeleccion(
                    region.value,
                    "una región"
                )
            );

        }
    );


    comuna.addEventListener(
        "change",
        function () {

            mostrarResultado(
                comuna,
                errorComuna,
                validarSeleccion(
                    comuna.value,
                    "una comuna"
                )
            );

        }
    );


    // SUBMIT

    formRegistro.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();

            mensajeRegistro.textContent =
                "";

            mensajeRegistro.className =
                "mb-3";


            const resultadoRut =
                validarRut(rut.value);

            const resultadoNombre =
                validarNombre(
                    nombre.value
                );

            const resultadoApellidos =
                validarApellidos(
                    apellidos.value
                );

            const resultadoCorreo =
                validarCorreo(
                    correo.value
                );

            const resultadoRegion =
                validarSeleccion(
                    region.value,
                    "una región"
                );

            const resultadoComuna =
                validarSeleccion(
                    comuna.value,
                    "una comuna"
                );

            const resultadoDireccion =
                validarDireccion(
                    direccion.value
                );

            const resultadoPassword =
                validarPassword(
                    password.value
                );

            const resultadoConfirmacion =
                validarConfirmacionPassword(
                    password.value,
                    confirmarPassword.value
                );


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

                console.log(
                    "Registro válido"
                );

            }

        }
    );

});