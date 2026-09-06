document.addEventListener("DOMContentLoaded", function () {

  
    // ELEMENTOS DEL LOGIN

    const formLogin = document.getElementById("formLogin");

    const correo = document.getElementById("correo");
    const password = document.getElementById("password");

    const errorCorreo = document.getElementById("errorCorreo");
    const errorPassword = document.getElementById("errorPassword");

    const mostrarPassword =
        document.getElementById("mostrarPassword");

    const mensajeLogin =
        document.getElementById("mensajeLogin");


    // VALIDAR CORREO

    function validarCorreo(correoValor) {

        const correoLimpio =
            correoValor.trim().toLowerCase();

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

        const formatoCorreo =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!formatoCorreo.test(correoLimpio)) {
            return {
                valido: false,
                mensaje: "Ingresa un correo electrónico válido."
            };
        }

        const dominiosPermitidos = [
            "@duoc.cl",
            "@profesor.duoc.cl",
            "@gmail.com"
        ];

        const dominioValido =
            dominiosPermitidos.some(function (dominio) {

                return correoLimpio.endsWith(dominio);

            });

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


    // VALIDAR CONTRASEÑA

    function validarPassword(passwordValor) {

        if (passwordValor === "") {
            return {
                valido: false,
                mensaje: "La contraseña es obligatoria."
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


    // MOSTRAR RESULTADO

    function mostrarResultado(
        input,
        errorElemento,
        resultado
    ) {

        if (!resultado.valido) {

            errorElemento.textContent =
                resultado.mensaje;

            input.classList.add("is-invalid");
            input.classList.remove("is-valid");

        } else {

            errorElemento.textContent = "";

            input.classList.remove("is-invalid");
            input.classList.add("is-valid");

        }

    }


    // MOSTRAR / OCULTAR CONTRASEÑA

    mostrarPassword.addEventListener(
        "change",
        function () {

            if (this.checked) {
                password.type = "text";
            } else {
                password.type = "password";
            }

        }
    );


   
    // VALIDAR CORREO AL SALIR

    correo.addEventListener(
        "blur",
        function () {

            const resultado =
                validarCorreo(correo.value);

            mostrarResultado(
                correo,
                errorCorreo,
                resultado
            );

        }
    );


    
    // VALIDAR PASSWORD AL SALIR

    password.addEventListener(
        "blur",
        function () {

            const resultado =
                validarPassword(password.value);

            mostrarResultado(
                password,
                errorPassword,
                resultado
            );

        }
    );


    
    // ENVÍO DEL FORMULARIO


    formLogin.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();

            mensajeLogin.textContent = "";
            mensajeLogin.className = "mb-3";


            const resultadoCorreo =
                validarCorreo(correo.value);

            const resultadoPassword =
                validarPassword(password.value);


            mostrarResultado(
                correo,
                errorCorreo,
                resultadoCorreo
            );

            mostrarResultado(
                password,
                errorPassword,
                resultadoPassword
            );

            
            //Ingreso correcto de datos

            if (
                resultadoCorreo.valido &&
                resultadoPassword.valido
            ) {

                mensajeLogin.textContent =
                    "Datos ingresados correctamente.";

                mensajeLogin.className =
                    "alert alert-success mt-3";

                console.log("Login válido");

            }

        }
    );

});