import { useEffect } from "react";
import { warehouseSolution } from "@/assets/images";
import { FaHandPointRight } from "react-icons/fa";
import MoreService from "@/components/MoreService";

const warehouseSolutionPage = {
  title: "WAREHOUSING SOLUTION",
  description:
    "<strong>Vinsum Axpress</strong> offers a comprehensive range of warehousing and logistics services, including <strong>cargo consolidation, packaging, inventory management</strong>, and <strong>distribution across India</strong>. We currently manage over <strong>2 million sq. ft. of warehouse space PAN India</strong>, serving <strong>53+ clients</strong> across diverse industries. Our solutions are fully customizable, featuring <strong>dedicated warehouse sections, advanced handling equipment</strong>, and our proprietary <strong>ERP-based warehouse management system</strong>, all tailored to meet specific customer and product requirements.",
  image: warehouseSolution,
  offers: [
    "Tailored solutions based on client needs.",
    "Integrated pool distribution & cross-docking.",
    "Customizable warehouse & order management systems.",
    "Kitting/De-kitting & vendor management.",
    "End-to-end transportation with quality checks and material security.",
    "Kitting/De-Kitting services.",
    "Vendor management.",
    "Material security & safety.",
    "Article tagging & quality check.",
  ],
};

const WarehouseSolution = () => {
  useEffect(() => {
    document.title = "Warehouse Solution";
  }, []);

  const { title, description, image, offers } = warehouseSolutionPage;

  return (
    <>
      <div className="container py-8">
        <h1 className="text-primary sm:text-2xl text-xl font-bold">{title}</h1>
      </div>
      <section>
        <div className="container grid md:grid-cols-2 gap-6">
          <div>
            <h2 className="lg:text-5xl sm:text-4xl text-3xl font-bold">
              {title}
            </h2>
            <p className="my-4" dangerouslySetInnerHTML={{ __html: description }}></p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container grid md:grid-cols-2 gap-6">
          <div className="md:order-1 order-2">
            <h2 className="md:text-3xl text-2xl font-bold">We Offer</h2>

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

          <div className="md:order-2 order-1">
            <img src={image} alt="warehouse-solution" />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <p className="py-4 bg-neutral-200 rounded-lg px-4 mx-auto text-center">
            To know more about our warehousing Solutions, please reach us
            through the appended form or write to us at contact.
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

export default WarehouseSolution;
