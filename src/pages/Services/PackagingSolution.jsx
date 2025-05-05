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
  vinsumAxpressPlantImage01,
  vinsumAxpressPlantImage02,
  vinsumAxpressPlantImage03,
  vinsumAxpressPlantImage04,
  vinsumAxpressPlantImage05,
} from "../../assets/images";

const packagingSolution = {
  returnablePackagingServices: [
    "Eco - Friendly.",
    "Benefit from the improved inbound/outbound.",
    "Freight cube efficiency.",
    "Control product damage.",
    "Reduced packaging waste.",
    "Improved quality control.",
    "Improved workplace safety.",
    "Reduce inspection.",
    "Loading & Unloading time.",
    "Reduces warehousing and storage needs.",
    "Reduce labor costs.",
    "Reduced transportation costs.",
    "Supports lean production.",
    "Improves inventory management.",
    "Metal Identification of Parts & products.",
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
  useEffect(() => {
    document.title = "Packaging Solution";
  }, []);

  const { returnablePackagingServices, dermitsPackaging } = packagingSolution;

  return (
    <>
      <div className="container py-8">
        <h1 className="text-primary sm:text-2xl text-xl font-bold">
          Packaging Solution
        </h1>
      </div>
      <section>
        <div className="container grid md:grid-cols-2 gap-6">
          <div className="md:order-1 order-2">
            <div>
              <h2 className="md:text-3xl sm:text-2xl text-xl font-bold">
                Visual Packaging Solution Designing
              </h2>
              <p className="my-4 sm:text-base text-sm">
                We have a dedicated solution design team that specializes in
                material level knowledge and can design solutions based on
                inputs provided by the customer about the component / part and
                produce feasibility reports for all your packaging needs
                consultation.
              </p>
            </div>

            <div>
              <h2 className="md:text-3xl sm:text-2xl text-xl font-bold">
                Packaging Product Manufacturing & Development
              </h2>
              <p className="my-4 sm:text-base text-sm">
                The range of products and services by VINSUM AXPRESS are
                designed keeping in mind the flexible and customized needs of a
                customer as per their demand. We offer customized solution in
                various materials i.e. PP, Plastic (HDP/LDP), Metal (Iron,
                Steel, Wiremesh), Wood & Paper Corrugated etc.
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
              The returnable packaging/Pooling Concept Services in a way that
              VINSUM AXPRESS owned product provided on Rental as a Service. A
              nominal rent is charged for the use of product on per trip basis
              with Reverse logistics facilities It is a growing service to
              reduce capital expenditures and improve Day to Day Supply Chain
              Operations for Customers.
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
              In Capex Model we design and develop Customized packaging product
              for their specific needs. The ownership of the packaging product
              lies with the customer as it is a one time sale by VINSUM AXPRESS
              and the services for reverse logistics to keep the supply chain
              moving can be managed by VINSUM AXPRESS.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="bg-primary uppercase text-primary-foreground text-center w-fit mx-auto px-6 py-3 text-2xl font-semibold rounded-tr-3xl rounded-bl-3xl mb-12">
            RETURNABLE SOLUTION BENEFIT
          </div>
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-6">
            <div>
              <img src={returnablePackaging} alt="returnablePackaging" />
            </div>
            <div>
              <ul className="space-y-2">
                {returnablePackagingServices.map((service, index) => (
                  <li
                    key={index}
                    className="flex items-center justify-center gap-2"
                  >
                    <FaHandPointRight size={16} className="opacity-70" />
                    <span className="flex-1">{service}</span>
                  </li>
                ))}
              </ul>
            </div>
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
                <h2 className="">{dermit.title}</h2>
              </div>
            ))}
          </div>

          <div className="mt-8">
            <h2 className="md:text-3xl sm:text-2xl text-xl font-bold">
              PACKAGING MANUFACTURING PLANT
            </h2>
            <p className="my-2 opacity-70 sm:text-base text-sm">
              VINSUM AXPRESS has a state-of-art manufacturing set up at
              sector-37 Gurgaon & Ambala in 50,000 sq. ft area. Vinsum axpress
              has an installed capacity of 50,000 boxes per month which can be
              scaled upto 1.5 lakh boxes per month as per the requirement. For
              manufacturing quality product in time, the facility boasts all the
              major machinery under one-roof for PP box manufacturing , Wire
              mesh containers, Metal foldable Containers and HDPE/LDPE foldable
              crates.
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
              Our avant-garde infrastructure consist of the fabrication units to
              develop and supply customized solutions to our-customers. These
              units are equipped with Hi-Tech fabrication equipment, tools and
              software such as hydraulic press Jigsaw cutting tool, forming,
              adhesive coating line, heating tool, AutoCAD software, punching
              machines sets of dies and punch, and peacemaking machine. We also
              have our Own template and design Centre.
            </p>
          </div>

          <div className="mt-8">
            <h2 className="md:text-3xl sm:text-2xl text-xl font-bold">
              Testing Facilities:
            </h2>
            <p className="my-2 opacity-70 sm:text-base text-sm">
              Our units are equipped with Universal testing Machine,
              Electrostatic Charge Tester-and GSM Testing Facility.
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
            {packagingProducts.map(({ label }, index) => (
              <Link
                to={ROUTES.PACKAGING}
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
          <p className="py-4 bg-neutral-200 rounded-lg px-4 mx-auto">
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
