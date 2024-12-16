import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import "swiper/css";
import "swiper/css/effect-fade";
import { Autoplay } from "swiper/modules";

import { clients } from "@/constants";

const OurClients = () => {
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
        <div className="max-w-xl space-y-3">
          <p className="card-name">Our Clients</p>
          <h1 className="card-title">
            WITH OVER <span className="text-primary">500+ HAPPY CLIENTS</span> —
            VINSUM ELEVATED THE CREDIBILITY BAR HIGH
          </h1>
          <p className="card-description">
            Over 21+ years of experience in logistics and supply chain
            management with a base of 500+ satisfied customers incluing but not
            limited to:
          </p>
        </div>

        <div className="my-8 text-center text-base antialiased w-full tracking-wider text-red-600 bg-background rounded p-1 py-2 ">
          Vinsum is the trusted choice of industry leaders for accelerating
          revenue growth.
        </div>

        <Swiper
          spaceBetween={50}
          slidesPerView={5}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          fade={true}
          modules={[Autoplay]}
          breakpoints={breakpoints}
        >
          {clients.map((client, index) => (
            <SwiperSlide key={index} className="py-4">
              <div className="flex overflow-hidden border-1 p-4 bg-gray-50 rounded-lg">
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
    </section>
  );
};

export default OurClients;
