import { useEffect } from "react";
import { multimodalTransPortationServices } from "@/constants";
import { FaHandPointRight } from "react-icons/fa";
import MoreService from "@/components/MoreService";
import { speedTruckImg } from "@/assets/images";

const RoadService = () => {
  useEffect(() => {
    document.title = "Road Service";
  }, []);

  const { title, image, description, offers, secondaryText, speedTruck, offersSpeedTruck, secondaryTextSpeedTruck } =
    multimodalTransPortationServices[2];
  return (
    <>
      <section className="py-10">
        <div className="container">
          <h2 className="lg:text-5xl sm:text-4xl text-3xl font-bold">
            {title}
          </h2>
          <p className="my-4 mt-8" dangerouslySetInnerHTML={{ __html: description }} />
        </div>
      </section>

      <section>
        <div className="container grid md:grid-cols-2 gap-6">
          <div>
            <img src={image} alt="air-service" className="w-full rounded-lg" />
          </div>
          <div>
            <h2 className="md:text-3xl text-2xl font-bold">✅ Key Features of VINSUM’s Road Services</h2>

            <ul className="ps-2 flex flex-col items-start my-4 gap-2">
              {offers.map((service, index) => (
                <li
                  key={index}
                  className="flex items-top justify-center gap-2"
                >
                  <FaHandPointRight size={16} className="opacity-70" />
                  <p className="flex-1 text-base" dangerouslySetInnerHTML={{ __html: service }} />
                  <hr class="my-4 border-t border-gray-300" /><br></br>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <p className="" dangerouslySetInnerHTML={{ __html: secondaryText }} />
        </div>
      </section>

      <section className="py-10">
        <div className="container">
          <h2 className="lg:text-3xl sm:text-2xl text-2xl font-bold">
            Speed Truck Services
          </h2>
          <p className="my-4 mt-8" dangerouslySetInnerHTML={{ __html: speedTruck }} />
        </div>
      </section>

      <section>
        <div className="container grid md:grid-cols-2 gap-6">
          <div>
            <img src={speedTruckImg} alt="air-service" className="w-full rounded-lg" />
          </div>
          <div>
            <h2 className="md:text-3xl text-2xl font-bold">What Makes VINSUM’s Speed Truck Services Unique?</h2>

            <ul className="ps-2 flex flex-col items-start my-4 gap-2">
              {offersSpeedTruck.map((service, index) => (
                <li
                  key={index}
                  className="flex items-top justify-center gap-2"
                >
                  <FaHandPointRight size={16} className="opacity-70" />
                  <p className="flex-1 text-base" dangerouslySetInnerHTML={{ __html: service }} />
                  <hr class="my-4 border-t border-gray-300" /><br></br>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <p className="" dangerouslySetInnerHTML={{ __html: secondaryTextSpeedTruck }} />
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
          <p className="py-4 bg-neutral-200 rounded-lg px-4 mx-auto text-center">
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

export default RoadService;
