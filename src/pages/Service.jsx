import { warehouseControl, warehouseControlService } from "@/assets/images";
import { multimodalTransPortations, integratedSupplyChains } from "@/constants";
import { packagingSolution, services } from "@/assets/images";
import {
  endToEndSupplyChains,
  packagingServices,
  serviceData,
} from "@/constants";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css/pagination";
import "swiper/css";
import "swiper/css/effect-fade";
import { useCallback, useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { LuArrowRight } from "react-icons/lu";
import { ROUTES } from "@/lib/routes";

const Service = () => {
  const { hash } = useLocation();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [progressWidth, setProgressWidth] = useState(0);
  const sliderRef = useRef(null);

  useEffect(() => {
    document.title = "Service | Vinsum Axpress";
  }, []);

  useEffect(() => {
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [hash]);

  const onSlideChange = (swiper) => {
    setCurrentIndex(swiper.activeIndex);
  };
  const onActiveSlide = (index) => {
    sliderRef.current?.swiper.slideTo(index);
  };

  const onAutoplayTimeLeft = useCallback((swiper, time) => {
    const autoplay = swiper.params.autoplay;
    if (autoplay && typeof autoplay === "object" && "delay" in autoplay) {
      const slideDuration = autoplay.delay;
      const width = (1 - time / slideDuration) * 100;
      setProgressWidth(width);
    }
  }, []);
  const onSwiperTransitionEnd = useCallback(() => {
    const swiper = this.refs.sliderRef.current?.swiper;
    if (swiper.isEnd) {
      setCurrentIndex(0);
      setProgressWidth(0);
    }
  }, []);
  return (
    <>
      <section className="w-full relative">
        <figure className="w-full md:h-[450px] h-[400px] object-cover brightness-75">
          <img
            src={warehouseControl}
            alt="wharehouse control"
            className="h-full w-full object-cover"
          />
        </figure>
        <img
          src={warehouseControlService}
          alt="warehouse-control-service"
          className="absolute xl:-bottom-28 lg:-bottom-24 md:-bottom-20 sm:-bottom-16 -bottom-10"
        />
      </section>

      <section className="section md:mt-32 mt-24">
        <div className="container">
          <h1 className="text-center md:text-4xl sm:text-3xl text-2xl font-bold mb-6">
            END-TO-END SUPPLY CHAIN
          </h1>

          <div className="overflow-x-auto scrollbar">
            <div className="grid grid-cols-6 gap-4 w-[700px] mx-auto ">
              {endToEndSupplyChains.map(({ image, title }, index) => (
                <figure key={index} className="flex flex-col items-center">
                  <div className="border-4 border-primary p-2 w-20 h-20 rounded-full">
                    <img
                      src={image}
                      alt="image"
                      className="w-full h-full p-2 object-contain"
                    />
                  </div>
                  <h3 className="font-semibold text-center mt-2">{title}</h3>
                </figure>
              ))}
            </div>
          </div>
        </div>

        <div></div>
      </section>

      <section>
        <div className="px-4">
          <h1 className="text-center md:text-4xl sm:text-3xl text-2xl font-bold">
            INTEGRATED SUPPLY CHAIN
          </h1>
        </div>
        <div className="w-full relative py-4 mt-4">
          <div className="container grid md:grid-cols-3 sm:grid-cols-2">
            {integratedSupplyChains.map(({ text, title, image }, index) => (
              <figure
                key={index}
                className="bg-white shadow p-8 space-y-4 border border-neutral-100"
              >
                <img
                  src={image}
                  alt={title}
                  className="w-16 h-16 object-contain"
                />
                <div>
                  <h3 className="font-semibold">{title}</h3>
                  <p className="mt-1 text-zinc-500">{text}</p>
                </div>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section id="3pl-4pl-management" className="section">
        <div className="container">
          <div className="bg-primary uppercase text-primary-foreground text-center w-fit mx-auto px-6 py-3 text-2xl font-semibold rounded-tr-3xl rounded-bl-3xl mb-8">
            Services
          </div>

          <div className="bg-cardBackground grid sm:grid-cols-3 py-4">
            <ul className="list-disc px-6 sm:pl-8">
              <li>Inbound Store management</li>
              <li>Warehouse operation</li>
              <li>Distribution Management</li>
              <li>Picking/Packing & CKD/CBU packing</li>
              <li>Assemble line operation</li>
            </ul>

            <ul className="list-disc px-6">
              <li>Quality inspection</li>
              <li>Store/SPO/PG Warehouse Management</li>
              <li>Sequencing Project</li>
              <li>VMI Warehouse</li>
              <li>Fulfilment center</li>
            </ul>

            <ul className="list-disc px-6">
              <li>Stack receipt</li>
              <li>Supply chain consultancy</li>
              <li>
                Production Plan - Pull out servicing, kit loading, tralley
                loading, double veining & tralley line-up.
              </li>
              <li>Contract Logistics</li>
            </ul>
          </div>

          <div className=" space-y-8 grid md:grid-cols-2 items-center gap-4 py-4">
            <figure>
              <img
                src={services}
                alt="services"
                className="md:w-[60%] w-[80%] mx-auto"
              />
            </figure>
            <div>
              <ul className="list-outside marker:text-primary  list-disc px-6">
                <li>Smart Tag Trace returanable Packaging Asset Management.</li>
                <li>
                  Utilizes state-of-the-art globally standardized technologies
                  such as QR Code,RFID, sensors, and gateways.
                </li>
                <li>
                  Helps monitor the lifecycle management of packing equipment.
                </li>
                <li>
                  Provides real-time visibility of stock across all locations.
                </li>
                <li>
                  Monitors critical parameters like stock levels, stock aging,
                  retention time, and cycle days.
                </li>
                <li>Sets thresholds for controlledandseamlessoperations.</li>
                <li>
                  Identifies and improves the performance of non-movingRPE
                  (Returnable Packaging Equipment).
                </li>
                <li>Reducesthe number of RPE lost in the supply chain.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="multimodal-transportation" className="py-8">
        <div className="container">
          <div className="bg-primary uppercase text-primary-foreground text-center w-fit mx-auto px-6 py-3 text-2xl font-semibold rounded-tr-3xl rounded-bl-3xl mb-8">
            MULTIMODAL TRANSPORTATION
          </div>

          <div className="mt-4 grid lg:grid-cols-4 sm:grid-cols-2 gap-4 gap-y-8">
            {multimodalTransPortations.map(
              ({ title, description, offers, image }, index) => (
                <div key={index}>
                  <figure className="h-[200px] rounded-xl shadow mb-2">
                    <img
                      src={image}
                      alt={title}
                      className="w-full h-full object-cover rounded-xl brightness-90"
                    />
                  </figure>
                  <div className="">
                    <h3 className="text-primary">{title}</h3>
                    <p className="text-sm my-2 text-zinc-700">{description}</p>
                    <p className="text-primary">We offer:</p>
                    <ul className="list-disc pl-6">
                      {offers.map((offer, index) => (
                        <li key={index} className="text-sm text-zinc-600">
                          {offer}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* <section id="warehouse-solution" className="py-8">
        <div className="conatiner">
          <h1 className="text-center text-4xl max-w-md mx-auto mb-8">
            See how we solve problems,{" "}
            <span className="opacity-50">right on target</span>
          </h1>
        </div>

        <div className="space-y-6 container">
          <Swiper
            ref={sliderRef}
            slidesPerView={1}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            effect={"fade"}
            modules={[EffectFade, Autoplay]}
            onAutoplayTimeLeft={onAutoplayTimeLeft}
            onSlideChange={onSlideChange}
            onSwiperTransitionEnd={onSwiperTransitionEnd}
          >
            {serviceData.map((obj, index) => {
              return (
                <SwiperSlide key={index}>
                  <div className="bg-cardBackground rounded-lg p-2 grid md:grid-cols-2 gap-6 items-center">
                    <div className="px-4">
                      <h1 className="text-lg font-semibold">{obj.name}</h1>
                      <p className="mt-6 text-sm mb-4 text-zinc-500">
                        {obj.description}
                      </p>
                      <Link to={obj.path}>
                        <Button>View more</Button>
                      </Link>
                    </div>
                    <img
                      src={obj.image}
                      alt={obj.name}
                      className="rounded-lg object-cover aspect-video my-auto"
                    />
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>

          <div className="flex gap-4 items-center justify-center">
            {serviceData.map((obj, idx) => (
              <div key={idx} className="flex flex-col gap-2">
                <div
                  onClick={() => onActiveSlide(idx)}
                  className="h-1 sm:w-full w-8 rounded-full bg-neutral-300 w-full overflow-hidden cursor-pointer"
                >
                  <div
                    className={` rounded-full h-full ${
                      idx === currentIndex ? "bg-primary" : ""
                    }`}
                    style={{ width: `${progressWidth}%` }}
                  ></div>
                </div>

                <p
                  className={`text-sm ${
                    currentIndex === idx ? "" : "text-gray-400"
                  }`}
                >
                  {obj.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      <section id="packaging-solution">
        <div className="bg-black text-primary-foreground py-8 space-y-2 px-4">
          <h2 className="md:text-5xl text-3xl font-bold text-center">
            PACKAGING
          </h2>
          <p className="text-center text-sm">
            We have Completely Returnable packaging solutions & Images of all
            different Types of packaging
          </p>
        </div>

        <div className="container my-8">
          <div className="grid md:gap-x-16 md:gap-y-8 gap-4 md:grid-cols-2">
            {packagingServices.map(({ title, description }, index) => (
              <div key={index} className="mb-2">
                <h4 className="text-primary font-medium mb-2">{title}</h4>
                <p className="text-sm">{description}</p>
              </div>
            ))}
          </div>

          <Link
            to={ROUTES.PACKAGING}
            className="flex items-center justify-center mt-8"
          >
            <Button size="lg" variant="outline">
              Learn more
              <LuArrowRight />
            </Button>
          </Link>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="bg-primary uppercase text-primary-foreground text-center w-fit mx-auto px-6 py-3 text-2xl font-semibold rounded-tr-3xl rounded-bl-3xl">
            RETURNABLE SOLUTIONS BENEFIT
          </div>

          <div className="space-y-8  py-4 grid lg:grid-cols-2 items-center">
            <div className="grid sm:grid-cols-2 lg:order-1 order-2 ">
              <ul className="list-disc px-6">
                <li>Eco - friendly</li>
                <li>Benifit from the improved inbound/outbound</li>
                <li>Freight cube efficiency</li>
                <li>Control product damage</li>
                <li>Reduced packaging waste</li>
                <li>Improved quality control</li>
                <li>Improved workplace safety</li>
                <li>Metal identification of parts & Product</li>
              </ul>
              <ul className="list-disc px-6">
                <li>Reduce inspection</li>
                <li>Loading & Unloading time</li>
                <li>Reduces warehousing and storage needs</li>
                <li>Reduce labor costs</li>
                <li>Supports lean production</li>
                <li>Improved inventory management</li>
              </ul>
            </div>

            <figure className="order-1 lg:order-2">
              <img
                src={packagingSolution}
                alt="packagingSolution"
                className="sm:w-[400px] lg:ml-auto mx-auto"
              />
            </figure>
          </div>
        </div>
      </section>
    </>
  );
};

export default Service;
