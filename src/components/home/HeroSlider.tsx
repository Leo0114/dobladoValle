import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { heroSlides } from "@/data/home";

export default function HeroSlider() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <section className="relative -mt-[72px] lg:-mt-[84px] h-[100dvh] min-h-[600px] max-h-[1200px] flex items-center overflow-hidden bg-ink">
        <div className="absolute inset-0 bg-ink"></div>
      </section>
    );
  }

  return (
    <section className="relative -mt-[72px] lg:-mt-[84px] h-[100dvh] min-h-[600px] max-h-[1200px] flex items-center overflow-hidden">
      <Swiper
        modules={[Autoplay, EffectFade, Navigation, Pagination]}
        effect="fade"
        speed={1000}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        navigation={{
          nextEl: ".swiper-button-next-custom",
          prevEl: ".swiper-button-prev-custom",
        }}
        pagination={{
          clickable: true,
          el: ".swiper-pagination-custom",
          bulletClass: "swiper-bullet-custom",
          bulletActiveClass: "swiper-bullet-active-custom",
        }}
        loop={true}
        className="h-full w-full"
      >
        {heroSlides.map((slide, index) => (
          <SwiperSlide key={index} className="relative h-full w-full">
            {/* Background Image */}
            <div className="absolute inset-0">
              <img
                src={slide.imagePath}
                alt={slide.title}
                className="h-full w-full object-cover"
                loading={index === 0 ? "eager" : "lazy"}
              />
              <div className="absolute inset-0 bg-ink/50 dark:bg-ink/70 mix-blend-multiply"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/40 to-transparent"></div>
            </div>

            {/* Content */}
            <div className="container-custom relative z-10 flex h-full flex-col justify-center pt-32 pb-20">
              <div className="max-w-3xl">
                {/* Title */}
                <h1 className="mb-6 text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white text-balance leading-[1.1] opacity-0 animate-fade-up">
                  {slide.title}
                </h1>

                {/* Description */}
                <p
                  className="mb-10 max-w-xl text-base text-white/80 leading-relaxed md:text-lg opacity-0 animate-fade-up"
                  style={{ animationDelay: "150ms" }}
                >
                  {slide.description}
                </p>

                {/* CTA */}
                <div
                  className="opacity-0 animate-fade-up"
                  style={{ animationDelay: "300ms" }}
                >
                  <a
                    href={slide.cta.href}
                    className="inline-flex items-center justify-center gap-3 rounded-full bg-secondary px-8 py-4 text-sm font-semibold tracking-[0.15em] text-white uppercase transition-all duration-300 hover:bg-secondary-light hover:shadow-xl hover:shadow-secondary/20"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    {slide.cta.label}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14"></path>
                      <path d="m12 5 7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}

        {/* Custom Navigation & Pagination */}
        <div className="absolute bottom-8 left-0 right-0 z-20">
          <div className="container-custom flex items-center justify-between">
            <div className="swiper-pagination-custom flex gap-3"></div>

            <div className="flex gap-4">
              <button className="swiper-button-prev-custom flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-sm transition-all hover:bg-primary hover:border-primary hover:text-ink">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m15 18-6-6 6-6"/>
                </svg>
              </button>
              <button className="swiper-button-next-custom flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-sm transition-all hover:bg-primary hover:border-primary hover:text-ink">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m9 18 6-6-6-6"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </Swiper>

      <style>{`
        .swiper-bullet-custom {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.3);
          cursor: pointer;
          transition: all 0.3s ease;
        }
        .swiper-bullet-active-custom {
          width: 32px;
          border-radius: 4px;
          background: var(--color-primary);
        }
      `}</style>
    </section>
  );
}
