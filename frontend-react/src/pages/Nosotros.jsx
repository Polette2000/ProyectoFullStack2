
import { Link } from 'react-router'

// DATOS DE MISIÓN, VISIÓN Y VALORES
const esencia = [
    {
        titulo: 'Misión',
        icono: 'bi bi-heart',
        descripcion:
            'Acercar perfumes y fragancias a nuestros clientes mediante una experiencia de compra sencilla, confiable y atractiva.'
    },
    {
        titulo: 'Visión',
        icono: 'bi bi-stars',
        descripcion:
            'Convertir a Perfulandia en una tienda reconocida por su variedad de fragancias, cercanía y experiencia digital.'
    },
    {
        titulo: 'Valores',
        icono: 'bi bi-gem',
        descripcion:
            'Calidad, confianza, compromiso, innovación y atención cercana forman parte de nuestra identidad.'
    }
]

// DATOS DE LA EXPERIENCIA DE COMPRA
const experiencias = [
    {
        titulo: 'Compra sencilla',
        icono: 'bi bi-bag-check',
        descripcion:
            'Navega y encuentra tus fragancias favoritas.'
    },
    {
        titulo: 'Confianza',
        icono: 'bi bi-shield-check',
        descripcion:
            'Una experiencia pensada para nuestros clientes.'
    },
    {
        titulo: 'Variedad',
        icono: 'bi bi-stars',
        descripcion:
            'Fragancias para diferentes gustos y ocasiones.'
    },
    {
        titulo: 'Despachos',
        icono: 'bi bi-truck',
        descripcion:
            'Pensado para acercar nuestros productos a ti.'
    }
]

// DATOS DE LAS DESARROLLADORAS
const equipo = [
    {
        nombre: 'Polette',
        cargo: 'Desarrolladora',
        imagen: '/img/nosotras1.png',
        descripcion:
            'Participación en el diseño y desarrollo de la solución web Perfulandia.'
    },
    {
        nombre: 'Ruth',
        cargo: 'Desarrolladora',
        imagen: '/img/nosotras2.png',
        descripcion:
            'Participación en el diseño y desarrollo de la solución web Perfulandia.'
    },
    {
        nombre: 'Darling',
        cargo: 'Desarrolladora',
        imagen: '/img/nosotras3.png',
        descripcion:
            'Participación en el diseño y desarrollo de la solución web Perfulandia.'
    }
]

// PÁGINA NOSOTROS
export default function Nosotros() {

    return (
        <>

            {/* =====================================
          ENCABEZADO NOSOTROS
      ===================================== */}

            <section className="nosotros-hero">

                <div className="container">

                    <div className="row align-items-center g-5">

                        {/* TEXTO */}
                        <div className="col-lg-6">

                            <p className="section-subtitulo">
                                Conoce nuestra historia
                            </p>

                            <h1 className="nosotros-titulo">
                                Fragancias que cuentan historias
                            </h1>

                            <p className="nosotros-descripcion">
                                Perfulandia nace como una tienda dedicada
                                a acercar distintas fragancias a personas
                                que buscan expresar su personalidad a
                                través de un aroma único.
                            </p>

                            <p className="nosotros-descripcion">
                                Nuestro objetivo es ofrecer una experiencia
                                simple, cercana y agradable, permitiendo
                                descubrir perfumes para diferentes gustos,
                                estilos y ocasiones.
                            </p>

                            <Link
                                to="/productos"
                                className="btn btn-perfulandia btn-lg"
                            >
                                Descubrir perfumes
                            </Link>

                        </div>

                        {/* IMAGEN */}
                        <div className="col-lg-6">

                            <div className="nosotros-imagen">

                                <img
                                    src="/img/Perfume3.webp"
                                    alt="Perfume de la colección Perfulandia"
                                    className="img-fluid"
                                />

                            </div>

                        </div>

                    </div>
                </div>

            </section>

            {/* =====================================
          NUESTRA ESENCIA
      ===================================== */}

            <section className="nuestra-esencia py-5">

                <div className="container">

                    <div className="text-center mb-5">

                        <p className="section-subtitulo">
                            Nuestra esencia
                        </p>

                        <h2>
                            Lo que representa Perfulandia
                        </h2>

                    </div>

                    <div className="row g-4">

                        {esencia.map((item) => (

                            <article
                                key={item.titulo}
                                className="col-md-4"
                            >

                                <div className="esencia-card h-100">

                                    <div className="esencia-icono">
                                        <i className={item.icono}></i>
                                    </div>

                                    <h3>{item.titulo}</h3>

                                    <p>{item.descripcion}</p>

                                </div>

                            </article>

                        ))}

                    </div>

                </div>

            </section>

            {/* =====================================
          EXPERIENCIA DE COMPRA
      ===================================== */}

            <section className="experiencia-perfulandia py-5">

                <div className="container">

                    <div className="row align-items-center g-5">

                        {/* TEXTO */}
                        <div className="col-lg-5">

                            <p className="section-subtitulo">
                                Nuestra propuesta
                            </p>

                            <h2>
                                Una experiencia pensada para ti
                            </h2>

                            <p>
                                Queremos que encontrar un perfume
                                sea una experiencia entretenida y sencilla.
                                Por eso nuestro sitio permite explorar
                                productos, conocer sus detalles y
                                agregarlos fácilmente al carrito.
                            </p>

                        </div>

                        {/* CARACTERÍSTICAS */}
                        <div className="col-lg-7">

                            <div className="row g-3">

                                {experiencias.map((item) => (

                                    <div
                                        key={item.titulo}
                                        className="col-sm-6"
                                    >

                                        <div className="experiencia-item">

                                            <i className={item.icono}></i>

                                            <div>

                                                <h3>{item.titulo}</h3>

                                                <p>{item.descripcion}</p>

                                            </div>

                                        </div>

                                    </div>

                                ))}

                            </div>

                        </div>

                    </div>

                </div>

            </section>

            {/* =====================================
          NUESTRO EQUIPO
      ===================================== */}

            <section className="equipo-perfulandia py-5">

                <div className="container">

                    <div className="text-center mb-5">

                        <p className="section-subtitulo">
                            Nuestro equipo
                        </p>

                        <h2>
                            Desarrolladoras de Perfulandia
                        </h2>

                        <p className="section-descripcion">
                            Proyecto desarrollado como parte de
                            Desarrollo Fullstack II.
                        </p>

                    </div>

                    <div className="row justify-content-center g-4">

                        {equipo.map((integrante) => (

                            <article
                                key={integrante.nombre}
                                className="col-md-6 col-lg-4"
                            >

                                <div className="equipo-card h-100">

                                    <img
                                        src={integrante.imagen}
                                        alt={`Integrante del equipo: ${integrante.nombre}`}
                                        className="foto-equipo"
                                    />

                                    <h3>
                                        {integrante.nombre}
                                    </h3>

                                    <p className="equipo-cargo">
                                        {integrante.cargo}
                                    </p>

                                    <p>
                                        {integrante.descripcion}
                                    </p>

                                    <div className="equipo-redes">
                                        <i className="bi bi-code-slash"></i>
                                    </div>

                                </div>

                            </article>

                        ))}

                    </div>

                </div>

            </section>

        </>
    )
}
