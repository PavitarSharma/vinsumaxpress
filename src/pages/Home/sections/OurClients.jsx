import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import "swiper/css";
import "swiper/css/effect-fade";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css/navigation";
import { clients } from "@/constants";
import { useRef } from "react";

const OurClients = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const breakpoints = {
    0: {
      slidesPerView: 2,
    },
    540: {
      slidesPerView: 3,
    },
    768: {
      slidesPerView: 6,
    },
    1024: {
      slidesPerView: 7,
    },
  };
  return (
    <section id="ourClients" className="section px-4">
      <div className="container bg-cardBackground rounded-2xl md:px-8 px-6 py-8 overflow-hidden shadow">
        <div className="space-y-3">
          <h1 className="text-3xl text-red-600">Our Clients</h1>
          <h1 className="card-title">
            WITH OVER <span className="text-primary">500+ satisfied CLIENTS</span>, Vinsum has set a new standard for trust and reliability in the logistics industry.
          </h1>
          <p className="card-description">
            With over 23 years of expertise in logistics and supply chain management, Vinsum proudly serves a diverse base of 500+ satisfied customers, including but not limited to
          </p>
        </div>

        <div className="relative my-8 w-full flex justify-center">
          <div className="relative px-6 py-4 rounded-xl shadow-md text-center max-w-4xl">
            <p className="text-primary text-xl font-semibold tracking-wide">
              <span className="relative inline-block">
                Vinsum
                <span className="absolute left-0 bottom-0 w-full h-1 bg-primary rounded animate-pulse" />
              </span>{' '}
              is the <span className="text-black font-bold">preferred partner</span> for
              industry leaders seeking to drive{' '}
              <span className="underline decoration-red-500 underline-offset-4">accelerated revenue growth</span>.
            </p>
          </div>
        </div>

        <div className="relative">
      {/* Arrows */}
      <div
        ref={prevRef}
        className="swiper-button-prev-custom absolute left-0 top-1/2 z-10 -translate-y-1/2 cursor-pointer p-2 bg-white rounded-lg shadow"
      >
        ◀
      </div>
      <div
        ref={nextRef}
        className="swiper-button-next-custom absolute right-0 top-1/2 z-10 -translate-y-1/2 cursor-pointer p-2 bg-white rounded-lg shadow"
      >
        ▶
      </div>

      {/* Swiper */}
      <Swiper
        spaceBetween={50}
        slidesPerView={5}
        modules={[Autoplay, Navigation]}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        onInit={(swiper) => {
          // Assign refs once Swiper is ready
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
          swiper.navigation.init();
          swiper.navigation.update();
        }}
        breakpoints={{
          320: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 5 },
        }}
      >
        {clients.map((client, index) => (
          <SwiperSlide key={index} className="py-4">
            <div className="flex overflow-hidden border p-4 bg-gray-50 rounded-lg">
              <img
                src={client.logo}
                alt={client.name}
                className="h-16 w-full object-contain"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
      </div>
    </section>
  );
};

export default OurClients;
