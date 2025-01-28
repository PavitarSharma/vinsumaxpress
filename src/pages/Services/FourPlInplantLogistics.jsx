import { useEffect } from "react";
import { FaHandPointRight } from "react-icons/fa";
import {
  fourPlInplantLogistics1,
  fourPlInplantLogistics2,
  fourPlInplantLogistics3,
} from "@/assets/images";
import MoreService from "@/components/MoreService";

const fourPLInplant = {
  title: "4PL / INPLANT LOGISTICS / PROJECT MANAGEMENT",
  section01: {
    title: "4PL",
    description:
      "Lead Logistics Provider (LLPs), also refered to as fourth - party logistics(4PL). We as a 4PL typically directs every moving part within the customer's supply chain & serus as a single point of contact for all the parties involved.",
    image: fourPlInplantLogistics1,
    services: [
      "Distribution Management.",
      "Picking/Packing & CKD/CBU pakaging.",
      "Assemble line operation.",
      "Quality inspection.",
      "Inbound Store management.",
      "Warehouse operation.",
    ],
  },
  section02: {
    title: "Inplant Logistics",
    description:
      'We mean "Inplant logistics" as the range of logistics services those required to move the row material or finished product with in the factory or plant to carry out the operation Vinsum Axpress Group can support your team or even be your team by handling such task as labour management, yard management. among others functional area as well.',
    image: fourPlInplantLogistics2,
    services: [
      "Store / SPD / PG Warehouse Management.",
      "Sequencing Project.",
      "VMI Warehouse.",
      "Fulfilment centre.",
      "Supply chain consultancy.",
      "Production Plan - Pull out servicing, kit loading, trolley loading, double veining & trolley line-up.",
      "Contract Logistics.",
    ],
  },
  section03: {
    title: "Project Mangement",
    description:
      "Whatever it takes to carry out the project successfully we deliver it all starting from the application of processes , methods , skills , knowledge & experience according to the project acceptance criteria within the agreed parameter.",
    image: fourPlInplantLogistics3,
    services: [
      "Defining the need / reason of project.",
      "Capturing project requirement, specifying quality of deliverables, estimating resources & timescales.",
      "Business case preparation.",
      "Corporate agreement & funding.",
      "Developing & implementing a management plan for the project.",
      "Managing risks , issues & changes on the project.",
      "Monitoring progress against plan.",
      "Managing the project budget.",
      "Maintaining communications with stakeholder & project organization.",
      "Closing the project in a controlled fashion.",
    ],
  },
};
const FourPlInplantLogistics = () => {
  useEffect(() => {
    document.title = "4PL Inplant Logistics Project Management";
  }, []);

  const { section01, section02, section03, title } = fourPLInplant;

  return (
    <>
      <div className="container py-8">
        <h1 className="text-primary sm:text-2xl text-xl font-bold">{title}</h1>
      </div>
      <section className="section">
        <div className="container grid md:grid-cols-2 gap-6">
          <div className="md:order-1 order-2">
            <h2 className="lg:text-5xl text-4xl font-bold">
              {section01.title}
            </h2>
            <p className="my-4">{section01.description}</p>
            <div>
              <p className="text-xl font-semibold">Services</p>
              <ul className="ps-2 flex flex-col items-start my-2 gap-2">
                {section01.services.map((service, index) => (
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

          <div className="md:order-2 order-1">
            <img src={section01.image} alt="4pl-inplant-logistics01" />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container grid lg:grid-cols-2 gap-6">
          <div>
            <img
              src={section02.image}
              alt="4pl-inplant-logistics01"
              className="lg:w-auto w-full"
            />
          </div>

          <div>
            <h2 className="lg:text-5xl text-4xl font-bold">
              {section02.title}
            </h2>
            <p className="my-4">{section02.description}</p>
            <div>
              <p className="text-xl font-semibold">Services</p>
              <ul className="ps-2 flex flex-col items-start my-2 gap-2">
                {section02.services.map((service, index) => (
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
        </div>
      </section>

      <section className="section">
        <div className="container grid md:grid-cols-2 gap-6">
          <div className="md:order-1 order-2">
            <h2 className="lg:text-5xl text-4xl font-bold">
              {section03.title}
            </h2>
            <p className="my-4">{section03.description}</p>
            <div>
              <p className="text-xl font-semibold">Services</p>
              <ul className="ps-2 flex flex-col items-start my-2 gap-2">
                {section03.services.map((service, index) => (
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

          <div className="md:order-2 order-1">
            <img src={section03.image} alt="4pl-inplant-logistics01" />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <p className="py-4 bg-neutral-200 rounded-lg px-4 mx-auto">
            To know more about our 4PL /Inplant Logistics /Project Management,
            please reach us through the appended form or write to us at.
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

export default FourPlInplantLogistics;
