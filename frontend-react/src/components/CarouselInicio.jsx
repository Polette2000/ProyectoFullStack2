
const banners = [
  { id: 1, imagen: '/img/banner1.png' },
  { id: 2, imagen: '/img/banner2.png' },
  { id: 3, imagen: '/img/banner3.png' },
  { id: 4, imagen: '/img/banner4.png' },
  { id: 5, imagen: '/img/banner5.png' },
  { id: 6, imagen: '/img/banner6.png' }
]

export default function CarouselInicio() {
  return (
    <section className="banner-home">
      <div
        id="carouselPerfulandia"
        className="carousel slide carousel-fade"
        data-bs-ride="carousel"
        data-bs-interval="3500"
      >

        {/* INDICADORES */}
        <div className="carousel-indicators">
          {banners.map((banner, index) => (
            <button
              key={banner.id}
              type="button"
              data-bs-target="#carouselPerfulandia"
              data-bs-slide-to={index}
              className={index === 0 ? 'active' : ''}
              aria-current={index === 0 ? 'true' : undefined}
              aria-label={`Banner ${banner.id}`}
            />
          ))}
        </div>

        {/* IMÁGENES */}
        <div className="carousel-inner">
          {banners.map((banner, index) => (
            <div
              key={banner.id}
              className={`carousel-item ${index === 0 ? 'active' : ''}`}
            >
              <img
                src={banner.imagen}
                className="d-block w-100 banner-img"
                alt={`Banner perfume ${banner.id}`}
              />
            </div>
          ))}
        </div>

        {/* FLECHA IZQUIERDA */}
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselPerfulandia"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          />
          <span className="visually-hidden">
            Anterior
          </span>
        </button>

        {/* FLECHA DERECHA */}
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselPerfulandia"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          />
          <span className="visually-hidden">
            Siguiente
          </span>
        </button>

      </div>
    </section>
  )
}
