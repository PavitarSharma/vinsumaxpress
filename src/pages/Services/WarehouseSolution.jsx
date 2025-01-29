import { useEffect } from "react";
import { warehouseSolution } from "@/assets/images";
import { FaHandPointRight } from "react-icons/fa";
import MoreService from "@/components/MoreService";

const warehouseSolutionPage = {
  title: "WAREHOUSING SOLUTION",
  description:
    "We are offering wide range of services including consolidation & packaging of cargoes of various types & sizes , handling of stock & inventory management solution in our warehouses , as well as distribution wherever needed . We at Vinsum Axpress are currently handling 20,00,000 sq.ft of warehouse space PAN India with more than 53+ warehousing customers . We offer customized warehouse section with our own ERP warehouse software & handling equipment according to customer requirement & product.",
  image: warehouseSolution,
  offers: [
    "Tailored solution as per the client needs.",
    "Integrated pool distribution.",
    "Cross docking services.",
    "Customizable Warehouse management system.",
    "Order management system.",
    "Kitting/De-Kitting services.",
    "Vendor management.",
    "Material security & safety.",
    "Article tagging & quality check.",
    "Custom integrated transportation services.",
    "Modernise material handling equipment.",
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
            <p className="my-4">{description}</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container grid md:grid-cols-2 gap-6">
          <div className="md:order-1 order-2">
            <h2 className="lg:text-5xl text-4xl font-bold">We Offer</h2>

            <ul className="ps-2 flex flex-col items-start my-6 gap-2">
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
          <p className="py-4 bg-neutral-200 rounded-lg px-4 mx-auto">
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
