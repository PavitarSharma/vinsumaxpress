import { useEffect } from "react";
import { FaHandPointRight } from "react-icons/fa";
import { packagingProducts } from "@/constants";
import { ROUTES } from "@/lib/routes";
import { Link } from "react-router-dom";
import MoreService from "@/components/MoreService";
import {
  fumigationRequired,
  oneTimeUsageGreen,
  packagingSolutionManagment,
  returnablePackaging,
  scrapManagementSpaceCost,
  timeConsuming,
  transitDamageLimited,
  unsafeCombustible,
  packagingSolution,
  vinsumAxpressPlantImage01,
  vinsumAxpressPlantImage02,
  vinsumAxpressPlantImage03,
  vinsumAxpressPlantImage04,
  vinsumAxpressPlantImage05,
} from "../../assets/images";
import { packagingVideo } from "@/assets/videos";
import { useRef } from "react";

const packaging_Solution = {
  returnablePackagingServices: [
    "Eco-friendly and sustainable.",
    "Enhanced inbound/outbound efficiency.",
    "Optimized freight cube utilization.",
    "Minimized product damage and packaging waste.",
    "Improved quality control and workplace safety.",
    "Reduced inspection, handling, and loading/unloading time.",
    "Lower warehousing, labor, and transportation costs.",
    "Supports lean production and better inventory management",
    "Metal-based part and product identification.",
  ],
  dermitsPackaging: [
    { title: "Time Consuming", image: timeConsuming },
    { title: "Transit Damages Limited Strength", image: transitDamageLimited },
    { title: "One time usage-Non Green", image: oneTimeUsageGreen },
    { title: "Unsafe-Combustible", image: unsafeCombustible },
    { title: "Scrap Management Space Cost", image: scrapManagementSpaceCost },
    { title: "Fumigation Required", image: fumigationRequired },
  ],
};

const PackagingSolution = () => {
  const videoRef = useRef(null);
  
  useEffect(() => {
    // Create IntersectionObserver for the video section
    const videoSectionObserver = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          videoRef.current.play(); // Play video when visible
          // setIsPaused(false);
          console.log("play video")
        } else {
          videoRef.current.pause(); // Pause video when out of view
          // setIsPaused(true);
          console.log("pause video")
        }
      },
      { threshold: 0.5 }
    );

    // Target the counter and video sections
    const videoSection = document.querySelector("#videoSection");

    if (videoSection) videoSectionObserver.observe(videoSection);

    // Cleanup observers on unmount
    return () => {
      if (videoSection) videoSectionObserver.unobserve(videoSection);
    };
  }, []);  

  useEffect(() => {
    document.title = "Packaging Solution";
  }, []);

  const { returnablePackagingServices, dermitsPackaging } = packaging_Solution;

  return (
    <>
      <div className="container py-8">
        <h1 className="text-primary sm:text-2xl text-xl font-bold">
          PACKAGING SOLUTIONS
        </h1>
      </div>
      <section>
        <div className="container grid md:grid-cols-2 gap-6">
          <div className="md:order-1 order-2">
            <div>
              <h2 className="md:text-3xl sm:text-2xl text-xl font-bold">
                Visual Packaging Solution Design
              </h2>
              <p className="my-4 sm:text-base text-sm">
                We have a dedicated solution design team with in-depth material expertise, capable of developing tailored packaging solutions based on customer inputs regarding components or parts. We also provide comprehensive feasibility reports to support all your packaging consultation needs.
              </p>
            </div>

            <div>
              <h2 className="md:text-3xl sm:text-2xl text-xl font-bold">
                Customized Packaging Solutions & Production
              </h2>
              <p className="my-4 sm:text-base text-sm">
                At <strong>Vinsum Axpress</strong>, our product and service offerings are designed with a focus on flexibility and customization to meet the unique requirements of each customer. We provide tailored solutions across a wide range of materials, including PP, plastics (HDP/LDP), metals (iron, steel, wire mesh), wood, and paper corrugated products.
              </p>
            </div>
          </div>

          <div className="md:order-2 order-1">
            <img
              src={packagingSolutionManagment}
              alt="packaging-solution"
              className="mx-auto"
            />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container grid md:grid-cols-2 grid-cols-1 gap-6">
          <div>
            <h2 className="md:text-3xl sm:text-2xl text-xl font-bold">
              OPEX Model
            </h2>
            <p className="text-lg font-medium text-neutral-500">
              Product on Rent (Per Trip Basis)
            </p>
            <p className="my-2 sm:text-base text-sm">
              <strong>Vinsum Axpress</strong> offers <strong>Returnable Packaging and Pooling Services</strong> through a <strong>Rental-as-a-Service model</strong>, where company-owned packaging assets are provided to clients on a per-trip rental basis. This solution includes comprehensive reverse logistics support, enabling efficient return and reuse of packaging materials. Designed to minimize capital expenditure, this growing service helps clients streamline their daily supply chain operations while promoting cost-effectiveness and sustainability.
            </p>
          </div>

          <div>
            <h2 className="md:text-3xl sm:text-2xl text-xl font-bold">
              CAPEX Model
            </h2>
            <p className="text-lg font-medium text-neutral-500">
              (Product on Sale)
            </p>
            <p className="my-2 sm:text-base text-sm">
              Under the <strong>Capex Model, Vinsum Axpress</strong> designs and develops customized packaging solutions tailored to the specific needs of each customer. In this model, ownership of the packaging products is transferred to the customer through a one-time purchase. To ensure seamless supply chain continuity, Vinsum Axpress can also manage the associated reverse logistics services, offering end-to-end operational support.
            </p>
          </div>
        </div>
      </section>


      <section className="section">
        <div className="container">
          <div className="bg-primary uppercase text-primary-foreground text-center w-fit mx-auto px-6 py-3 text-2xl font-semibold rounded-tr-3xl rounded-bl-3xl">
            RETURNABLE SOLUTIONS BENEFIT
          </div>

          <div className="space-y-8  py-4 grid lg:grid-cols-2 items-center">
            <div className="lg:order-1 order-2 w-full">
              <ul className="space-y-2 w-full">
                {returnablePackagingServices.map((service, index) => (
                  <li
                    key={index}
                    className="flex items-center justify-center gap-2 w-full md:text-lg"
                  >
                    <FaHandPointRight size={16} className="opacity-70" />
                    <span className="flex-1">{service}</span>
                  </li>
                ))}
              </ul>
            </div>

            <figure className="order-1 lg:order-2">
              <img
                src={packagingSolution}
                alt="packaging_Solution"
                className="sm:w-[500px] lg:ml-auto mx-auto"
              />
            </figure>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="bg-primary uppercase text-primary-foreground text-center w-fit mx-auto px-6 py-3 text-2xl font-semibold rounded-tr-3xl rounded-bl-3xl mb-12">
            DEMERITS OF CONVENTIONAL PACKAGING
          </div>
          <div className="grid sm:grid-cols-2 grid-cols-1 gap-6">
            {dermitsPackaging.map((dermit, index) => (
              <div key={index} className="flex items-center gap-2">
                <img
                  src={dermit.image}
                  alt={dermit.title}
                  className="w-16 h-16 object-contain"
                />
                <h2 className="text-lg">{dermit.title}</h2>
              </div>
            ))}
          </div>

          <div className="mt-8">
            <h2 className="md:text-3xl sm:text-2xl text-xl font-bold">
              PACKAGING MANUFACTURING PLANT
            </h2>
            <p className="my-2 opacity-70 sm:text-base text-sm">
              <strong>Vinsum Axpress</strong> operates advanced manufacturing units in Gurgaon and Ambala, covering <strong>50,000 sq. ft</strong> with a scalable capacity from <strong>50,000 to 1.5 lakh boxes/month</strong>. Our integrated facility supports in-house production of <strong>PP boxes, wire mesh containers, metal foldable containers, and HDPE/LDPE crates</strong>—ensuring quality, efficiency, and timely delivery.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
            <div className="grid gap-4">
              <div>
                <img
                  className="h-full object-cover max-w-full rounded-lg"
                  src={vinsumAxpressPlantImage01}
                  alt="vinsumAxpressPlantImage01"
                />
              </div>
              <div>
                <img
                  className="h-full object-cover max-w-full rounded-lg"
                  src={vinsumAxpressPlantImage02}
                  alt="vinsumAxpressPlantImage02"
                />
              </div>
            </div>

            <div className="grid gap-4">
              <div>
                <img
                  className="h-auto max-w-full rounded-lg"
                  src={vinsumAxpressPlantImage03}
                  alt="vinsumAxpressPlantImage03"
                />
              </div>
              <div>
                <img
                  className="h-auto max-w-full rounded-lg"
                  src={vinsumAxpressPlantImage04}
                  alt="vinsumAxpressPlantImage04"
                />
              </div>
              <div>
                <img
                  className="h-auto max-w-full rounded-lg"
                  src={vinsumAxpressPlantImage05}
                  alt="vinsumAxpressPlantImage05"
                />
              </div>
            </div>
          </div>

          <div className="mt-8">
            <h2 className="md:text-3xl sm:text-2xl text-xl font-bold">
              Fabrication Units
            </h2>
            <p className="my-2 opacity-70 sm:text-base text-sm">
              Our advanced infrastructure features dedicated fabrication units equipped with <strong>hydraulic presses, cutting and forming tools, adhesive coating lines, punching machines</strong>, and <strong>AutoCAD software</strong>. We also operate a fully functional <strong>in-house design and template center</strong> to deliver precise, customized solutions.
            </p>
          </div>

          <div className="mt-8">
            <h2 className="md:text-3xl sm:text-2xl text-xl font-bold">
              Testing Facilities:
            </h2>
            <p className="my-2 opacity-70 sm:text-base text-sm">
              Our facilities are equipped with advanced testing tools, including a <strong>Universal Testing Machine, Electrostatic Charge Tester</strong>, and <strong>GSM Testing Equipment</strong>, ensuring consistent quality and performance of our products.
            </p>
          </div>
        </div>
      </section>

      <section className="py-8">
        <div className="container">
          <div className="bg-primary uppercase text-primary-foreground text-center w-fit mx-auto px-6 py-3 text-2xl font-semibold rounded-tr-3xl rounded-bl-3xl mb-12">
            Vinsum Axpress Products
          </div>

          <div className="flex flex-wrap gap-6">
            {packagingProducts.map(({ label, href }, index) => (
              <Link
                to={href}
                key={index}
                className="bg-red-50 hover:bg-red-100 transition duration-300 text-sm font-medium border border-primary py-2.5 px-4 rounded-full w-fit"
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="w-full aspect-video overflow-hidden bg-transparent h-[400px] md:h-[500px]">
            <video
              ref={videoRef}
              muted
              autoPlay
              loop
              playsInline
              title="Growth Track"
              className="w-full h-full object-fill block overflow-hidden"
              // style={{
              //   clipPath: 'inset(12px 1px)',
              // }}
            >
              <source src={packagingVideo} type="video/mp4" />
            </video>                      
          </div>
        </div>
      </section>

      

      <section className="section">
        <div className="container">
          <p className="py-4 bg-neutral-200 rounded-lg px-4 mx-auto text-center">
            To know more about our Packaging Solutions, please reach us through
            the appended form or write to us at
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

export default PackagingSolution;
