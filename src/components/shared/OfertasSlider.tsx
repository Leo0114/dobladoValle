import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { ofertasData } from "@/data/ofertas";

export default function OfertasSlider() {
  const [mounted, setMounted] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div
        className="h-[520px] rounded-3xl"
        style={{ background: "var(--color-secondary)" }}
      />
    );
  }

  return (
    <div className="relative overflow-hidden rounded-[2.5rem] md:rounded-[3.5rem] shadow-2xl p-6 md:p-12" style={{ background: "var(--color-secondary)" }}>


      {/* Decorative large number behind content */}
      <div
        className="absolute right-10 top-1/2 -translate-y-1/2 select-none pointer-events-none text-[15rem] md:text-[25rem] font-extrabold leading-none opacity-[0.03] text-white"
        aria-hidden="true"
      >
        {String(activeIndex + 1).padStart(2, "0")}
      </div>

      <Swiper
        modules={[Autoplay, Navigation, Pagination, EffectFade]}
        effect="fade"
        slidesPerView={1}
        speed={700}
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
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        className="w-full"
      >
        {ofertasData.map((oferta, index) => (
          <SwiperSlide key={oferta.id}>
            <div className="grid grid-cols-1 md:grid-cols-2 min-h-[520px]">
              {/* ── Lado izquierdo: Contenido ── */}
              <div className="relative z-10 flex flex-col justify-center px-8 py-12 md:px-14 md:py-16">
                {/* Badge */}
                <div className="mb-6 flex items-center gap-3">
                  <span
                    className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-[0.65rem] font-bold uppercase tracking-[0.2em] shadow-md"
                    style={{
                      background: "var(--color-primary)",
                      color: "var(--color-ink)",
                      fontFamily: "var(--font-body)",
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="11"
                      height="11"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                    Oferta especial
                  </span>
                </div>

                {/* Título */}
                <h3
                  className="mb-4 text-3xl md:text-4xl lg:text-5xl font-bold leading-tight"
                  style={{
                    color: "var(--color-primary)",
                    fontFamily: "var(--font-heading)",
                  }}
                >
                  {oferta.name}
                </h3>

                {/* Descripción */}
                <p
                  className="mb-8 max-w-sm text-base leading-relaxed"
                  style={{
                    color: "rgba(255,255,255,0.75)",
                    fontFamily: "var(--font-body)",
                  }}
                >
                  {oferta.description}
                </p>

                {/* Precio */}
                <div className="mb-8">
                  <p
                    className="mb-1 text-xs uppercase tracking-[0.2em] opacity-60 text-white"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    Precio de oferta
                  </p>
                  <p
                    className="text-5xl font-extrabold leading-none"
                    style={{
                      color: "var(--color-primary)",
                      fontFamily: "var(--font-heading)",
                    }}
                  >
                    ${oferta.price}
                    <span
                      className="text-lg font-normal ml-2 opacity-70 text-white"
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      MXN
                    </span>
                  </p>
                </div>

                {/* CTA */}
                <div className="flex flex-wrap gap-3">
                  <a
                    href="/contacto"
                    className="inline-flex items-center gap-2.5 rounded-full px-7 py-3.5 text-sm font-bold uppercase tracking-[0.12em] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl"
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
                    Preguntar por esto
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="15"
                      height="15"
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

              {/* ── Lado derecho: Imagen ── */}
              <div className="relative flex items-center justify-center p-4 md:p-8 min-h-[300px] md:min-h-0">
                <div className="relative w-full max-w-[240px] md:max-w-[300px] aspect-square overflow-hidden rounded-3xl bg-white shadow-2xl transform transition-transform duration-700 hover:scale-105 border-4" style={{ borderColor: "var(--color-primary)" }}>
                  <img
                    src={oferta.image.src}
                    alt={oferta.name}
                    width={oferta.image.width}
                    height={oferta.image.height}
                    loading={index === 0 ? "eager" : "lazy"}
                    decoding="async"
                    className="h-full w-full object-contain p-4"
                  />
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* ── Controles: paginación y nav al fondo ── */}
      <div className="relative z-20 flex items-center justify-between mt-4">
        {/* Paginación */}
        <div className="ofertas-pagination flex gap-2" />

        {/* Botones nav */}
        <div className="flex gap-2">
          <button
            className="ofertas-prev flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border transition-all duration-300"
            style={{
              borderColor: "rgba(255,255,255,0.2)",
              background: "rgba(255,255,255,0.08)",
              color: "white",
            }}
            aria-label="Oferta anterior"
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLButtonElement;
              el.style.background = "var(--color-primary)";
              el.style.borderColor = "var(--color-primary)";
              el.style.color = "var(--color-ink)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLButtonElement;
              el.style.background = "rgba(255,255,255,0.08)";
              el.style.borderColor = "rgba(255,255,255,0.2)";
              el.style.color = "white";
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m15 18-6-6 6-6" />
            </svg>
          </button>
          <button
            className="ofertas-next flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border transition-all duration-300"
            style={{
              borderColor: "rgba(255,255,255,0.2)",
              background: "rgba(255,255,255,0.08)",
              color: "white",
            }}
            aria-label="Siguiente oferta"
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLButtonElement;
              el.style.background = "var(--color-primary)";
              el.style.borderColor = "var(--color-primary)";
              el.style.color = "var(--color-ink)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLButtonElement;
              el.style.background = "rgba(255,255,255,0.08)";
              el.style.borderColor = "rgba(255,255,255,0.2)";
              el.style.color = "white";
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m9 18 6-6-6-6" />
            </svg>
          </button>
        </div>
      </div>

      <style>{`
        .oferta-bullet {
          display: inline-block;
          width: 8px;
          height: 8px;
          border-radius: 9999px;
          background: rgba(255, 255, 255, 0.3);
          cursor: pointer;
          transition: all 0.35s ease;
        }
        .oferta-bullet-active {
          width: 32px;
          border-radius: 4px;
          background: var(--color-primary);
        }
      `}</style>
    </div>
  );
}
