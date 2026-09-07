// Elementos
const tablaUsuarios = document.getElementById("tablaUsuarios");
const mensajeSinUsuarios = document.getElementById("mensajeSinUsuarios");


// Obtener usuarios
function obtenerUsuarios() {

    const usuariosGuardados = localStorage.getItem("usuarios");

    return usuariosGuardados
        ? JSON.parse(usuariosGuardados)
        : [];
}


// Mostrar usuarios
function mostrarUsuarios() {

    const usuarios = obtenerUsuarios();

    tablaUsuarios.innerHTML = "";

    if (usuarios.length === 0) {

        mensajeSinUsuarios.style.display = "block";
        return;

    }

    mensajeSinUsuarios.style.display = "none";


    usuarios.forEach(function (usuario, index) {

        const fila = document.createElement("tr");

        fila.innerHTML = `
            <td>${usuario.rut}</td>

            <td>
                ${usuario.nombre} ${usuario.apellidos}
            </td>

            <td>${usuario.correo}</td>

            <td>${usuario.tipoUsuario}</td>

            <td>${usuario.region}</td>

            <td>${usuario.comuna}</td>

            <td class="text-center">

                <a href="usuario-form.html?editar=${index}"
                    class="btn btn-sm btn-outline-perfulandia me-2">

                    <i class="bi bi-pencil"></i>
                    Editar

                </a>

                <button type="button"
                    class="btn btn-sm btn-danger"
                    onclick="eliminarUsuario(${index})">

                    <i class="bi bi-trash"></i>
                    Eliminar

                </button>

            </td>
        `;

        tablaUsuarios.appendChild(fila);

    });

}


// Eliminar usuario
function eliminarUsuario(index) {

    const usuarios = obtenerUsuarios();

    const confirmar = confirm(
        "¿Seguro que deseas eliminar este usuario?"
    );

    if (!confirmar) {
        return;
    }

    usuarios.splice(index, 1);

    localStorage.setItem(
        "usuarios",
        JSON.stringify(usuarios)
    );

    mostrarUsuarios();
}


// Inicio
mostrarUsuarios();