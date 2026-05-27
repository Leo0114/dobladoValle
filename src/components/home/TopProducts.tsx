import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/free-mode";
import { topProductsData } from "@/data/home";

export default function TopProducts() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <div className="h-[400px]"></div>;

  return (
    <section className="section-padding section-bone">
      <div className="container-custom relative">
        <div className="mb-10 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div className="max-w-2xl">
            <span
              className="mb-4 inline-block text-xs font-semibold tracking-[0.25em] text-secondary uppercase"
              style={{ fontFamily: "var(--font-body)" }}
            >
              {topProductsData.tag}
            </span>
            <h2 className="text-balance text-heading">
              {topProductsData.title}
            </h2>
            <p className="mt-4 text-body max-w-xl">
              {topProductsData.description}
            </p>
          </div>

          <div className="flex gap-3">
            <button className="top-products-prev flex h-10 w-10 items-center justify-center rounded-full border border-border-light text-ink/70 transition-all hover:bg-secondary hover:border-secondary hover:text-white dark:border-white/10 dark:text-white/70 dark:hover:bg-secondary dark:hover:text-white">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m15 18-6-6 6-6"/>
              </svg>
            </button>
            <button className="top-products-next flex h-10 w-10 items-center justify-center rounded-full border border-border-light text-ink/70 transition-all hover:bg-secondary hover:border-secondary hover:text-white dark:border-white/10 dark:text-white/70 dark:hover:bg-secondary dark:hover:text-white">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m9 18 6-6-6-6"/>
              </svg>
            </button>
          </div>
        </div>

        <Swiper
          modules={[Autoplay, Navigation, FreeMode]}
          spaceBetween={24}
          slidesPerView={1.2}
          freeMode={true}
          speed={600}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          navigation={{
            nextEl: ".top-products-next",
            prevEl: ".top-products-prev",
          }}
          breakpoints={{
            480: { slidesPerView: 2.2 },
            768: { slidesPerView: 3.2 },
            1024: { slidesPerView: 4.2 },
            1280: { slidesPerView: 5.2 },
          }}
          className="-mx-5 px-5 md:mx-0 md:px-0 pb-10"
        >
          {topProductsData.items.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="group flex h-full flex-col rounded-2xl bg-white p-6 shadow-sm border border-border-light transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover hover:border-primary/30 dark:bg-steel dark:border-white/10 dark:hover:border-primary/50">
                <div className="mb-6 flex aspect-square w-full items-center justify-center rounded-xl bg-bone p-4 dark:bg-white">
                  <img
                    src={item.image.src}
                    alt={item.name}
                    className="h-full w-full object-contain mix-blend-multiply opacity-90 group-hover:scale-110 group-hover:opacity-100 transition-all duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="mt-auto">
                  <span className="mb-1 block text-xs font-semibold tracking-wider text-concrete uppercase dark:text-ash" style={{ fontFamily: "var(--font-body)" }}>
                    {item.category}
                  </span>
                  <h3 className="text-base font-bold text-ink dark:text-white" style={{ fontFamily: "var(--font-heading)" }}>
                    {item.name}
                  </h3>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
