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
    title: "Lead Logistics Provider (LLP) / 4PL Solutions",
    description:
      "As a <strong>Fourth-Party Logistics (4PL)</strong> partner, <strong>Vinsum Axpress</strong> serves as the strategic orchestrator of your entire supply chain. Acting as a <strong>single point of contact</strong>, we manage and coordinate all logistics functions and service providers to ensure seamless, efficient, and end-to-end operations.",
    image: fourPlInplantLogistics1,
    services: [
      "Distribution Management.",
      "Picking & Packing, CKD/CBU Packaging.",
      "Assembly Line Operations.",
      "Quality Inspection & Assurance.",
      "Inbound Store Management.",
      "Comprehensive Warehouse Operations.",
    ],
  },
  section02: {
    title: "In-Plant Logistics Solutions",
    description:
      'At <strong>Vinsum Axpress</strong>, we define <strong>In-Plant Logistics</strong> as the comprehensive management of material flow—be it raw materials or finished goods—within a manufacturing facility. Our services are designed to support or fully manage your internal logistics operations, enhancing productivity, efficiency, and operational precision.<br> Whether it\'s <strong>labour management, yard operations</strong>, or internal material movement, we integrate seamlessly with your team—or act as your extended team—to keep your plant running smoothly.',
    image: fourPlInplantLogistics2,
    services: [
      "Store / SPD / PG Warehouse Management.",
      "Sequencing Projects.",
      "VMI (Vendor Managed Inventory) Warehousing.",
      "Fulfillment Center Operations.",
      "Supply Chain Consulting.",
      "Production Support: Pull-Out Servicing, Kit Loading, Trolley Loading, Double Veining, Trolley Line-Up.",
      "Contract Logistics.",
    ],
  },
  section03: {
    title: "End-to-End Project Management Services",
    description:
      "At <strong>Vinsum Axpress</strong>, we take full ownership of project execution — applying proven processes, methodologies, skills, and experience to deliver successful outcomes within defined scope, time, and budget parameters.",
    image: fourPlInplantLogistics3,
    services: [
      "Identifying project goals and defining the core business need.",
      "Capturing requirements, setting quality benchmarks, and estimating time & resource needs.",
      "Preparing a comprehensive business case.",
      "Securing corporate approvals and funding.",
      "Developing and executing a detailed project management plan.",
      "Proactively managing risks, issues, and change controls.",
      "Tracking progress and ensuring alignment with project milestones.",
      "Budget management and cost control.",
      "Stakeholder communication and alignment throughout the lifecycle.",
      "Structured and controlled project closure.",
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
            <h2 className="lg:text-3xl text-3xl font-bold">
              {section01.title}
            </h2>
            <p className="my-4" dangerouslySetInnerHTML={{ __html: section01.description }}></p>
            <div>
              <p className="text-xl font-semibold">Our Core 4PL Services Include:</p>
              <ul className="ps-2 flex flex-col items-start my-2 gap-2">
                {section01.services.map((service, index) => (
                  <li
                    key={index}
                    className="flex items-center justify-center gap-2 font-semibold"
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
            <h2 className="lg:text-3xl text-3xl font-bold">
              {section02.title}
            </h2>
            <p className="my-4" dangerouslySetInnerHTML={{ __html: section02.description }}></p>
            <div>
              <p className="text-xl font-semibold">Our In-Plant Logistics Services Include:</p>
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
            <p className="my-4" dangerouslySetInnerHTML={{ __html: section03.description }}></p>
            <div>
              <p className="text-xl font-semibold">Our Project Management Capabilities Include:</p>
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
