import { useEffect } from "react";
import { multimodalTransPortationServices } from "@/constants";
import { FaHandPointRight } from "react-icons/fa";
import MoreService from "@/components/MoreService";

const RailService = () => {
  useEffect(() => {
    document.title = "Rail Service";
  }, []);

  const { title, image, description, offers } =
    multimodalTransPortationServices[1];
  return (
    <>
      <section className="py-10">
        <div className="container">
          <h2 className="lg:text-5xl sm:text-4xl text-3xl font-bold">
            {title}
          </h2>
          <p className="my-4" dangerouslySetInnerHTML={{ __html: description }}></p>
        </div>
      </section>

      <section>
        <div className="container grid md:grid-cols-2 gap-6">
          <div className="md:order-2 order-1">
            <img src={image} alt="air-service" className="w-full" />
          </div>
          <div className="md:order-1 order-2">
            <h2 className="md:text-3xl text-2xl font-bold">Key Highlights</h2>

            <ul className="ps-2 flex flex-col items-start my-4 gap-2">
              {offers.map((service, index) => (
                <li
                  key={index}
                  className="flex items-center justify-center gap-2"
                >
                  <FaHandPointRight size={16} className="opacity-70" />
                  <span className="flex-1 text-sm">{service}</span>
                </li>
              ))}
            </ul>
          </div>
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
        </div>
      </section>

      <section className="section">
        <div className="container">
          <p className="py-4 bg-neutral-200 rounded-lg px-4 mx-auto">
            To know more about our multi modal transportaion, please reach us
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

export default RailService;
