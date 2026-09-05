// ==============================
// LOGIN
// ==============================

document.addEventListener("DOMContentLoaded", function () {

    const formLogin = document.getElementById("formLogin");

    const correo = document.getElementById("correo");
    const password = document.getElementById("password");

    const errorCorreo = document.getElementById("errorCorreo");
    const errorPassword = document.getElementById("errorPassword");

    const mostrarPassword =
        document.getElementById("mostrarPassword");

    const mensajeLogin =
        document.getElementById("mensajeLogin");


    // ==============================
    // MOSTRAR / OCULTAR CONTRASEÑA
    // ==============================

    mostrarPassword.addEventListener("change", function () {

        if (this.checked) {
            password.type = "text";
        } else {
            password.type = "password";
        }

    });


    // ==============================
    // VALIDACIÓN DEL CORREO
    // ==============================

    correo.addEventListener("blur", function () {

        const resultado = validarCorreo(correo.value);

        if (!resultado.valido) {

            errorCorreo.textContent = resultado.mensaje;

            correo.classList.add("is-invalid");
            correo.classList.remove("is-valid");

        } else {

            errorCorreo.textContent = "";

            correo.classList.remove("is-invalid");
            correo.classList.add("is-valid");

        }

    });


    // ==============================
    // VALIDACIÓN DE CONTRASEÑA
    // ==============================

    password.addEventListener("blur", function () {

        const resultado = validarPassword(password.value);

        if (!resultado.valido) {

            errorPassword.textContent = resultado.mensaje;

            password.classList.add("is-invalid");
            password.classList.remove("is-valid");

        } else {

            errorPassword.textContent = "";

            password.classList.remove("is-invalid");
            password.classList.add("is-valid");

        }

    });


    // ==============================
    // ENVÍO DEL FORMULARIO
    // ==============================

    formLogin.addEventListener("submit", function (event) {

        event.preventDefault();

        // Limpiar mensaje general
        mensajeLogin.textContent = "";
        mensajeLogin.className = "mb-3";


        // Validar correo
        const resultadoCorreo =
            validarCorreo(correo.value);

        // Validar contraseña
        const resultadoPassword =
            validarPassword(password.value);


        // ==============================
        // MOSTRAR ERROR CORREO
        // ==============================

        if (!resultadoCorreo.valido) {

            errorCorreo.textContent =
                resultadoCorreo.mensaje;

            correo.classList.add("is-invalid");
            correo.classList.remove("is-valid");

        } else {

            errorCorreo.textContent = "";

            correo.classList.remove("is-invalid");
            correo.classList.add("is-valid");

        }


        // ==============================
        // MOSTRAR ERROR CONTRASEÑA
        // ==============================

        if (!resultadoPassword.valido) {

            errorPassword.textContent =
                resultadoPassword.mensaje;

            password.classList.add("is-invalid");
            password.classList.remove("is-valid");

        } else {

            errorPassword.textContent = "";

            password.classList.remove("is-invalid");
            password.classList.add("is-valid");

        }


        // ==============================
        // SI TODO ESTÁ CORRECTO
        // ==============================

        if (
            resultadoCorreo.valido &&
            resultadoPassword.valido
        ) {

            mensajeLogin.textContent =
                "Datos ingresados correctamente.";

            mensajeLogin.className =
                "alert alert-success mt-3";

            console.log("Login válido");

            /*
            Más adelante aquí podremos agregar
            la lógica real de inicio de sesión.

            Por ejemplo:

            window.location.href = "../index.html";

            Pero por ahora NO es necesario,
            porque todavía estamos trabajando
            solo con Front-End.
            */
        }

    });

});