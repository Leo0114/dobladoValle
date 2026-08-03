import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { ofertasData } from "@/data/ofertas";

export default function OfertasSlider() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div
        className="h-[380px] md:h-[280px] w-full rounded-2xl md:rounded-3xl"
        style={{ background: "var(--color-secondary)" }}
      />
    );
  }

  return (
    <div className="relative p-3 sm:p-4 rounded-2xl md:rounded-3xl bg-secondary w-full overflow-hidden shadow-xl">
      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        slidesPerView={1}
        speed={600}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        navigation={{
          nextEl: ".ofertas-next",
          prevEl: ".ofertas-prev",
        }}
        pagination={{
          clickable: true,
          el: ".ofertas-pagination",
          bulletClass: "oferta-bullet",
          bulletActiveClass: "oferta-bullet-active",
        }}
        loop={true}
        className="w-full"
      >
        {ofertasData.map((oferta, index) => (
          <SwiperSlide key={oferta.id}>
            {/* Layout: responsive vertical stack on small screens, side-by-side on tablet/desktop */}
            <div className="flex flex-col-reverse md:flex-row min-h-[360px] md:h-[280px] md:min-h-0 items-center md:items-stretch justify-between">
              {/* ── Contenido ── */}
              <div className="flex flex-1 flex-col justify-center gap-2 sm:gap-3 px-4 py-4 sm:px-6 md:px-12 text-left w-full">
                {/* Badge */}
                <div>
                  <span
                    className="inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 sm:px-3 sm:py-1 text-[0.6rem] font-bold uppercase tracking-[0.18em]"
                    style={{
                      background: "var(--color-primary)",
                      color: "var(--color-ink)",
                      fontFamily: "var(--font-body)",
                    }}
                  >
                    ★ Oferta especial
                  </span>
                </div>

                {/* Nombre */}
                <h3
                  className="text-lg sm:text-2xl md:text-3xl font-bold leading-tight line-clamp-2"
                  style={{
                    color: "var(--color-primary)",
                    fontFamily: "var(--font-heading)",
                  }}
                >
                  {oferta.name}
                </h3>

                {/* Descripción */}
                <p
                  className="max-w-xl text-xs sm:text-sm leading-relaxed line-clamp-3 sm:line-clamp-2"
                  style={{
                    color: "rgba(255,255,255,0.85)",
                    fontFamily: "var(--font-body)",
                  }}
                >
                  {oferta.description}
                </p>

                {/* Precio + CTA en fila */}
                <div className="flex flex-wrap items-center gap-3 sm:gap-5 mt-1 sm:mt-0">
                  <p
                    className="text-xl sm:text-2xl font-extrabold leading-none"
                    style={{
                      color: "var(--color-primary)",
                      fontFamily: "var(--font-heading)",
                    }}
                  >
                    ${oferta.price}
                    <span
                      className="ml-1 text-xs font-normal opacity-70 text-white"
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      MXN
                    </span>
                  </p>

                  <a
                    href="/contacto"
                    className="inline-flex items-center gap-2 rounded-full px-4 py-2 sm:px-5 sm:py-2 text-xs font-bold uppercase tracking-[0.1em] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg shrink-0"
                    style={{
                      background: "var(--color-primary)",
                      color: "var(--color-ink)",
                      fontFamily: "var(--font-body)",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLAnchorElement).style.background =
                        "var(--color-primary-light)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLAnchorElement).style.background =
                        "var(--color-primary)";
                    }}
                  >
                    Preguntar
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="13"
                      height="13"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14" />
                      <path d="m12 5 7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* ── Imagen ── */}
              <div className="flex shrink-0 items-center justify-center p-3 sm:p-6 md:px-10 md:py-6">
                <div
                  className="overflow-hidden rounded-2xl border-[3px] bg-white shadow-xl transition-transform duration-500 hover:scale-105 w-28 h-28 sm:w-36 sm:h-36 md:w-40 md:h-40"
                  style={{
                    borderColor: "var(--color-primary)",
                  }}
                >
                  <img
                    src={oferta.image.src}
                    alt={oferta.name}
                    width={oferta.image.width}
                    height={oferta.image.height}
                    loading={index === 0 ? "eager" : "lazy"}
                    decoding="async"
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* ── Controles debajo ── */}
      <div className="flex items-center justify-between px-4 pb-2 sm:px-6 sm:pb-3 md:px-12 md:pb-4 pt-1">
        <div className="ofertas-pagination flex gap-1.5 sm:gap-2" />
        <div className="flex gap-2">
          <button
            className="ofertas-prev flex h-8 w-8 cursor-pointer items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition-all duration-300 hover:border-primary hover:bg-primary hover:text-ink"
            aria-label="Oferta anterior"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m15 18-6-6 6-6" />
            </svg>
          </button>
          <button
            className="ofertas-next flex h-8 w-8 cursor-pointer items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition-all duration-300 hover:border-primary hover:bg-primary hover:text-ink"
            aria-label="Siguiente oferta"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m9 18 6-6-6-6" />
            </svg>
          </button>
        </div>
      </div>

      <style>{`
        .oferta-bullet {
          display: inline-block;
          width: 6px;
          height: 6px;
          border-radius: 9999px;
          background: rgba(255,255,255,0.3);
          cursor: pointer;
          transition: all 0.3s ease;
        }
        .oferta-bullet-active {
          width: 22px;
          border-radius: 3px;
          background: var(--color-primary);
        }
      `}</style>
    </div>
  );
}
