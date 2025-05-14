import { useEffect } from "react";
import { multimodalTransPortationServices } from "@/constants";
import { FaHandPointRight } from "react-icons/fa";
import { Separator } from "@/components/ui/separator";
import MoreService from "@/components/MoreService";
import { airplaneDesignFreight } from "@/assets/images";

const AirService = () => {
  useEffect(() => {
    document.title = "Air Service";
  }, []);

  const { title, image, description, offers, secondaryText } =
    multimodalTransPortationServices[0];

  return (
    <>
      <section className="py-10">
        <div className="container">
          <h2 className="lg:text-5xl sm:text-4xl text-3xl font-bold">
            {title}
          </h2>
          <p className="my-4" dangerouslySetInnerHTML={{ __html: description }} />
        </div>
      </section>

      <section>
        <div className="container grid md:grid-cols-2 gap-6">
          <div>
            <img src={image} alt="air-service" className="rounded-lg" />
          </div>
          <div>
            <h2 className="md:text-2xl text-2xl font-bold">✅ Key Features of VINSUM’s Air Cargo Services</h2>

            <ul className="ps-2 flex flex-col items-start my-4 gap-2">
              {offers.map((service, index) => (
                <li
                  key={index}
                  className="flex items-top justify-center gap-2"
                >
                  <FaHandPointRight size={16} className="opacity-70" />
                  <span className="flex-1 text-sm" dangerouslySetInnerHTML={{ __html: service }} />
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="container grid md:grid-cols-2 gap-6 items-center mt-8">
          <div className="md:order-2 order-1">
            <img src={airplaneDesignFreight} alt="air-service" className="w-full rounded-lg h-full" />
          </div>
          <p className="flex-1 text-base p-8 md:order-1 order-2" dangerouslySetInnerHTML={{ __html: secondaryText }} />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div>
            <h2 className="md:text-3xl text-2xl font-bold">
              Vinsum Axpress Services
            </h2>
            <p className="sm:text-base text-sm opacity-80 my-2">
              Vinsum Axpress understands the complexities of today&#39;s growing
              time sensitive market demands. Vinsum Axpress Premium Service
              helps you address your time bound delivery requirements with a
              cost effective delivery solutions Air Plus
            </p>
          </div>

          <Separator className="my-8" />

          <div>
            <h2 className="md:text-3xl text-2xl font-bold">
              Vinsum Axpress – Premium Air Freight Services
            </h2>

            <div className="grid grid-cols-2 gap-6 mt-8">
              <div>
                <h1 className="md:text-2xl text-xl font-bold">Air Plus</h1>
                <p className="sm:text-base text-sm opacity-80 my-2">
                  <strong>Air Plus</strong> is a premium service tailored for time-critical shipments, ensuring delivery within 24 hours or by noon the next day across all major ports in India.
                </p>
              </div>

              <div>
                <h1 className="md:text-2xl text-xl font-bold">Air Premium</h1>
                <p className="sm:text-base text-sm opacity-80 my-2">
                  <strong>Air Premium Service</strong> is tailored for urgent shipments, offering a balance of speed and cost-efficiency. It guarantees delivery within 24, 48, or over 48 hours to both metro and non-metro locations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <p className="py-4 bg-neutral-200 rounded-lg px-4 mx-auto">
            To know more about our multi modal transportation, please reach us
            through the appended form or write to us at.
            <a
              href="mailto:care@vinsumaxpress.com"
              className="text-primary font-semibold ps-1"
            >
              info@vinsumaxpress.com
            </a>
          </p>
        </div>
      </section>

      <MoreService />
    </>
  );
};

export default AirService;
