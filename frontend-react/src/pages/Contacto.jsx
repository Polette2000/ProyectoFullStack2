
import { useState, useEffect } from 'react'

// ==========================================
// VALIDACIONES DEL FORMULARIO
// ==========================================

// VALIDAR NOMBRE
function validarNombre(valor) {
    const nombre = valor.trim()

    if (nombre === '') {
        return 'El nombre es obligatorio.'
    }

    if (nombre.length > 100) {
        return 'El nombre no puede superar los 100 caracteres.'
    }

    return ''
}

// VALIDAR CORREO
function validarCorreo(valor) {
    const correo = valor.trim().toLowerCase()

    // El correo es opcional
    if (correo === '') {
        return ''
    }

    if (correo.length > 100) {
        return 'El correo no puede superar los 100 caracteres.'
    }

    // Comprobar formato
    const formatoValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    if (!formatoValido.test(correo)) {
        return 'Ingresa un correo válido.'
    }

    // Dominios permitidos según la pauta
    const dominiosPermitidos = [
        '@duoc.cl',
        '@profesor.duoc.cl',
        '@gmail.com'
    ]

    const dominioValido = dominiosPermitidos.some(
        (dominio) => correo.endsWith(dominio)
    )

    if (!dominioValido) {
        return 'Solo se permiten correos @duoc.cl, @profesor.duoc.cl o @gmail.com.'
    }

    return ''
}

// VALIDAR COMENTARIO
function validarComentario(valor) {
    const comentario = valor.trim()

    if (comentario === '') {
        return 'El comentario es obligatorio.'
    }

    if (comentario.length > 500) {
        return 'El comentario no puede superar los 500 caracteres.'
    }

    return ''
}

// ==========================================
// COMPONENTE CONTACTO
// ==========================================

export default function Contacto() {

    // DATOS DEL FORMULARIO
    const [datos, setDatos] = useState({
        nombre: '',
        correo: '',
        comentario: ''
    })

    // SABER QUÉ CAMPOS SE HAN MODIFICADO
    const [tocados, setTocados] = useState({
        nombre: false,
        correo: false,
        comentario: false
    })

    // CONTROLAR VALIDACIÓN Y MENSAJE
    const [intentoEnvio, setIntentoEnvio] = useState(false)
    const [mensajeExito, setMensajeExito] = useState(false)

    // VALIDACIONES
    const errorNombre = validarNombre(datos.nombre)
    const errorCorreo = validarCorreo(datos.correo)
    const errorComentario = validarComentario(datos.comentario)

    // ACTUALIZAR DATOS AL ESCRIBIR
    function manejarCambio(evento) {
        const { name, value } = evento.target

        setDatos((datosActuales) => ({
            ...datosActuales,
            [name]: value
        }))

        setTocados((actuales) => ({
            ...actuales,
            [name]: true
        }))

        setMensajeExito(false)
    }

    // ASIGNAR ESTILOS SEGÚN LA VALIDACIÓN
    function claseCampo(campo, error) {

        if (!tocados[campo] && !intentoEnvio) {
            return 'form-control'
        }

        if (error) {
            return 'form-control is-invalid'
        }

        // Correo opcional sin completar
        if (campo === 'correo' && !datos.correo.trim()) {
            return 'form-control'
        }

        return 'form-control is-valid'
    }

    // PROCESAR FORMULARIO
    function manejarEnvio(evento) {
        evento.preventDefault()

        setIntentoEnvio(true)
        setMensajeExito(false)

        const nombreValido = !errorNombre
        const correoValido = !errorCorreo
        const comentarioValido = !errorComentario

        if (
            nombreValido &&
            correoValido &&
            comentarioValido
        ) {

            // Confirmación de validación local
            setMensajeExito(true)

            // Limpiar formulario
            setDatos({
                nombre: '',
                correo: '',
                comentario: ''
            })

            // Limpiar estilos de validación
            setTocados({
                nombre: false,
                correo: false,
                comentario: false
            })

            setIntentoEnvio(false)
        }
    }

    // OCULTAR MENSAJE DESPUÉS DE 4 SEGUNDOS
    useEffect(() => {

        if (!mensajeExito) return

        const temporizador = setTimeout(() => {
            setMensajeExito(false)
        }, 4000)

        return () => clearTimeout(temporizador)

    }, [mensajeExito])

    return (
        <>

            {/* =====================================
          ENCABEZADO
      ===================================== */}

            <section className="contacto-hero">

                <div className="container text-center">

                    <p className="section-subtitulo">
                        Estamos para ayudarte
                    </p>

                    <h1>
                        Contáctanos
                    </h1>

                    <p className="contacto-hero-texto">
                        ¿Tienes alguna duda, consulta o comentario?
                        Escríbenos y estaremos encantados de ayudarte.
                    </p>

                </div>

            </section>

            {/* =====================================
          CONTENIDO
      ===================================== */}

            <section className="contacto-contenido py-5">

                <div className="container">

                    <div className="row g-5 align-items-start">

                        {/* INFORMACIÓN DE CONTACTO */}
                        <div className="col-lg-5">

                            <p className="section-subtitulo">
                                Perfulandia
                            </p>

                            <h2>
                                Hablemos
                            </h2>

                            <p className="contacto-descripcion">
                                Completa el formulario y envíanos tu
                                mensaje. Nuestro objetivo es brindarte
                                una experiencia cercana y sencilla.
                            </p>

                            <div className="contacto-info">

                                {/* CORREO */}
                                <div className="contacto-info-item">

                                    <div className="contacto-icono">
                                        <i className="bi bi-envelope"></i>
                                    </div>

                                    <div>
                                        <h3>Correo</h3>
                                        <p>contacto@perfulandia.cl</p>
                                    </div>

                                </div>

                                {/* HORARIO */}
                                <div className="contacto-info-item">

                                    <div className="contacto-icono">
                                        <i className="bi bi-clock"></i>
                                    </div>

                                    <div>
                                        <h3>Horario</h3>
                                        <p>
                                            Lunes a viernes<br />
                                            09:00 a 18:00
                                        </p>
                                    </div>

                                </div>

                                {/* ATENCIÓN */}
                                <div className="contacto-info-item">

                                    <div className="contacto-icono">
                                        <i className="bi bi-heart"></i>
                                    </div>

                                    <div>
                                        <h3>Atención</h3>
                                        <p>
                                            Estamos disponibles para
                                            resolver tus consultas.
                                        </p>
                                    </div>

                                </div>

                            </div>

                        </div>

                        {/* =====================================
                FORMULARIO
            ===================================== */}

                        <div className="col-lg-7">

                            <div className="contacto-form-card">

                                <h2 className="mb-4">
                                    Envíanos un mensaje
                                </h2>

                                {/* MENSAJE DE CONFIRMACIÓN */}
                                {mensajeExito && (

                                    <div
                                        id="mensajeExito"
                                        className="alert mensaje-exito"
                                        role="status"
                                    >
                                        <i className="bi bi-check-circle-fill"></i>
                                        {' '}
                                        Formulario validado correctamente.
                                        No se ha enviado a un servidor.
                                    </div>

                                )}

                                <form
                                    id="formContacto"
                                    onSubmit={manejarEnvio}
                                    noValidate
                                >

                                    {/* NOMBRE */}
                                    <div className="mb-4">

                                        <label
                                            htmlFor="nombreContacto"
                                            className="form-label"
                                        >
                                            Nombre
                                            <span className="campo-requerido">
                                                *
                                            </span>
                                        </label>

                                        <input
                                            type="text"
                                            id="nombreContacto"
                                            name="nombre"
                                            className={claseCampo(
                                                'nombre',
                                                errorNombre
                                            )}
                                            placeholder="Ingresa tu nombre"
                                            autoComplete="name"
                                            value={datos.nombre}
                                            onChange={manejarCambio}
                                            aria-invalid={
                                                (tocados.nombre || intentoEnvio) &&
                                                Boolean(errorNombre)
                                            }
                                            aria-describedby="errorNombre"
                                        />

                                        <div
                                            id="errorNombre"
                                            className="mensaje-error"
                                        >
                                            {(tocados.nombre || intentoEnvio)
                                                ? errorNombre
                                                : ''}
                                        </div>

                                        <small className="form-text text-muted">
                                            Máximo 100 caracteres.
                                        </small>

                                    </div>

                                    {/* CORREO */}
                                    <div className="mb-4">

                                        <label
                                            htmlFor="correoContacto"
                                            className="form-label"
                                        >
                                            Correo
                                        </label>

                                        <input
                                            type="email"
                                            id="correoContacto"
                                            name="correo"
                                            className={claseCampo(
                                                'correo',
                                                errorCorreo
                                            )}
                                            placeholder="ejemplo@gmail.com"
                                            autoComplete="email"
                                            value={datos.correo}
                                            onChange={manejarCambio}
                                            aria-invalid={
                                                (tocados.correo || intentoEnvio) &&
                                                Boolean(errorCorreo)
                                            }
                                            aria-describedby="errorCorreo"
                                        />

                                        <div
                                            id="errorCorreo"
                                            className="mensaje-error"
                                        >
                                            {(tocados.correo || intentoEnvio)
                                                ? errorCorreo
                                                : ''}
                                        </div>

                                        <small className="form-text text-muted">
                                            Se aceptan correos @duoc.cl,
                                            @profesor.duoc.cl y @gmail.com.
                                        </small>

                                    </div>

                                    {/* COMENTARIO */}
                                    <div className="mb-3">

                                        <label
                                            htmlFor="comentarioContacto"
                                            className="form-label"
                                        >
                                            Comentario
                                            <span className="campo-requerido">
                                                *
                                            </span>
                                        </label>

                                        <textarea
                                            id="comentarioContacto"
                                            name="comentario"
                                            className={claseCampo(
                                                'comentario',
                                                errorComentario
                                            )}
                                            rows={6}
                                            placeholder="Escribe tu mensaje..."
                                            value={datos.comentario}
                                            onChange={manejarCambio}
                                            aria-invalid={
                                                (tocados.comentario || intentoEnvio) &&
                                                Boolean(errorComentario)
                                            }
                                            aria-describedby="errorComentario"
                                        />

                                        <div
                                            id="errorComentario"
                                            className="mensaje-error"
                                        >
                                            {(tocados.comentario || intentoEnvio)
                                                ? errorComentario
                                                : ''}
                                        </div>

                                        {/* CONTADOR */}
                                        <div className="d-flex justify-content-between mt-2">

                                            <small className="text-muted">
                                                Máximo 500 caracteres.
                                            </small>

                                            <small
                                                id="contadorComentario"
                                                className={
                                                    datos.comentario.length > 500
                                                        ? 'contador-comentario contador-superado'
                                                        : 'contador-comentario'
                                                }
                                            >
                                                {datos.comentario.length} / 500
                                            </small>

                                        </div>

                                    </div>

                                    {/* BOTÓN ENVIAR */}
                                    <button
                                        type="submit"
                                        className="btn btn-perfulandia btn-lg w-100 mt-3"
                                    >
                                        <i className="bi bi-send"></i>
                                        {' '}Enviar mensaje
                                    </button>

                                </form>

                            </div>

                        </div>

                    </div>

                </div>

            </section>

        </>
    )
}
