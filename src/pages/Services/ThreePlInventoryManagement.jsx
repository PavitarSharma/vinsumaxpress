import { useEffect } from "react";
import {
  binPutWay,
  binTransfer,
  inventoryAdjustment,
  inventoryCount,
  itemReceipt,
  lookup,
  purchaseOrder,
  shipment,
  threePlWhyChooseUs,
  threePlService,
  transferOrder,
} from "@/assets/images";
import MoreService from "@/components/MoreService";

const threePlManagement = {
  title: "3PL & INVENTORY MANAGEMENT",
  section01: {
    title: "End-to-End Warehousing & Fulfillment Solutions Tailored to Your Business",
    description:
      `At <strong>Vinsum Axpress</strong>, we offer robust <strong>Third-Party Logistics (3PL)</strong> inventory management services beyond storage. We specialize in delivering <strong>integrated warehousing and transportation solutions</strong> that are fully scalable, tech-enabled, and designed to meet the evolving demands of modern businesses across diverse industries. <br><br>
       As your 3PL partner, we don’t just manage your inventory—we become an <strong>extension of your supply chain</strong>, enabling you to focus on your core operations while we ensure that your products are stored, tracked, and shipped with maximum accuracy and efficiency. Whether you're a growing startup or a large enterprise, our systems are built to flex with your requirements.`,
    image: threePlService,
    benefits: `
       <hr class="my-4 border-t border-gray-300" /><br><br>
       <span class="text-xl font-semibold">What We Offer Under 3PL Inventory Management</span><br><br>  
       <ul style="padding-left: 3rem; list-style-type: decimal;">
          <li>
            <span class="text-base font-semibold">Fully Integrated Warehousing Solutions</span><br>
             Strategically located warehouses with <strong>real-time WMS (Warehouse Management System)</strong> that ensure optimized storage, accurate inventory control, and faster picking and dispatch. <br><br>
          </li>
          <li>
            <span class="text-base font-semibold">Seamless Transportation Integration</span><br>
            Our in-house fleet and TMS platform allow us to <strong>synchronize inventory and logistics</strong>, offering faster and more reliable delivery across India. <br><br>
          </li>
          <li>
            <span class="text-base font-semibold">Supply Chain Integration</span><br>
            We work closely with clients to <strong>integrate their upstream and downstream supply chains</strong>, improving visibility and streamlining the flow of goods from supplier to customer. <br><br>
          </li>
          <li>
            <span class="text-base font-semibold">Value-Added Services</span><br>
            We offer a wide range of customizable add-ons, from <strong>packaging, kitting, and labeling</strong> to reverse <strong>logistics, quality checks</strong>, and <strong>just-in-time (JIT) delivery</strong>. <br><br>
          </li>
          <li>
            <span class="text-base font-semibold">Real-Time Inventory Monitoring</span><br>
            Our customer portal provides <strong>live inventory updates</strong>, stock aging reports, order status, and alert-based management to prevent stockouts or overstocking. <br><br>
          </li>
          <li>
            <span class="text-base font-semibold">E-commerce & Omnichannel Fulfillment</span><br>
            Fast, accurate fulfillment solutions for online orders with <strong>B2B and B2C compatibility</strong>, including last-mile delivery support and returns handling. <br><br>
          </li>
          <li>
            <span class="text-base font-semibold">Procurement Assistance</span><br>
            We assist clients in <strong>inventory procurement, vendor coordination</strong>, and maintaining <strong>optimal stock levels</strong> based on predictive analytics. <br><br>
          </li>
          <li>
            <span class="text-base font-semibold">Production-Linked Logistics</span><br>
            Specialized solutions for manufacturing clients, including <strong>line feeding, inbound raw material handling</strong>, and <strong>finished goods distribution</strong>. <br><br>
          </li>
          <li>
            <span class="text-base font-semibold">Scalable & Customizable Operations</span><br>
            Whether you need short-term warehousing or a long-term 3PL partner, our solutions can be tailored to <strong>seasonal spikes, market expansion, or geographic growth.</strong> <br><br>
          </li>
        </ul> <br><br>
    `,
    whyChooseUs: `
      <span class="text-3xl font-semibold mt-6">Why Choose Vinsum Axpress as Your 3PL Partner?</span><br><br><br>
        <ol style="padding-left: 3rem; list-style-type: decimal;">
          <li>
            Smart technology-driven inventory systems (WMS, ERP, Auto MIS) <br><br>
          </li>
          <li>
            Transparent, customer-centric service with real-time visibility <br><br>
          </li>
          <li>
            Flexible infrastructure that grows with your business <br><br>
          </li>
          <li>
            Expertise across industries: FMCG, Retail, Automotive, Pharma, and more <br><br>             
          </li>
          <li>
            Reduced capital investment in warehousing and staffing <br><br>
          </li>
          <li>
            Faster order cycle times and improved order accuracy <br><br>
          </li>
          <li>
            End-to-end accountability under a single service umbrella <br><br>             
          </li>
        </ol><br>
        <hr class="my-4 border-t border-gray-300" /><br>
    `
  },
  section02: {
    title: "Inventory Management",
    items: [
      { title: "Transfer Order", image: transferOrder },
      { title: "Item Lookup", image: lookup },
      { title: "Shipments", subTitle: "Pick, Pack, Ship", image: shipment },
      { title: "Item Receipt", image: itemReceipt },
      { title: "Purchase Order", image: purchaseOrder },
      { title: "Inventory Adjustment", image: inventoryAdjustment },
      { title: "Inventory Count", image: inventoryCount },
      { title: "Bin Put Away", image: binPutWay },
      { title: "Bin Transfer", image: binTransfer },
    ],
  },

  section03: {
    title: "Value Added Service",
    items: [
      "JIT",
      "DUL",
      "Bin Charging",
      "FIFO/LIFO",
      "Kanban",
      "Bounded Warehouse",
      "Order Processing",
      "Escorts services",
    ],
  },
};

const ThreePlInventoryManagement = () => {
  useEffect(() => {
    document.title = "3PL Inventory Management";
  }, []);

  const { title, section01, section02, section03 } = threePlManagement;

  return (
    <>
      <div className="container mt-10">
        <h1 className="text-primary sm:text-2xl text-xl font-bold">{title}</h1>
      </div>
      <section className="section">
        <div className="container grid md:grid-cols-2 gap-6">
          <div className="md:order-1 order-2">
            <h2 className="lg:text-2xl sm:text-2xl text-2xl font-bold">
              <i>{section01.title}</i>
            </h2>
            <p className="my-4" dangerouslySetInnerHTML={{ __html: section01.description }}></p>
          </div>

          <div className="md:order-2 order-1">
            <img src={section01.image} alt="4pl-inplant-logistics01" className="rounded-xl" />
          </div>
        </div>
      </section>

      <section className="container">
        <div>
          <p dangerouslySetInnerHTML={{ __html: section01.benefits }} />
          <div className="container grid md:grid-cols-2 gap-6 items-center">
            <div className="md:order-1 order-2">
              <p dangerouslySetInnerHTML={{ __html: section01.whyChooseUs }} />
            </div>

            <div className="md:order-2 order-1">
              <img src={threePlWhyChooseUs} alt="4pl-inplant-logistics01" className="rounded-xl w-full h-fit" />
            </div>
          </div>
        </div>    
      </section>

      <section>
        <div className="container">
          <h2 className="lg:text-5xl sm:text-4xl text-3xl font-bold">
            {section02.title}
          </h2>
          <div className="grid xl:grid-cols-5 sm:grid-cols-3 grid-cols-2 my-6 mt-10 md:gap-y-10 gap-y-6 gap-x-6">
            {section02.items.map((item, index) => (
              <div key={index} className="bg-white p-4 rounded-md">
                <div className="text-5xl font-bold text-neutral-200">
                  0{index + 1}
                </div>
                <img
                  src={item.image}
                  alt="3pl-inplant-inventory-management"
                  className="sm:w-16 w-14 mt-3"
                />
                <div>
                  <h3 className="font-semibold sm:text-base text-sm mt-2">
                    {item.title}
                  </h3>
                  <p className="text-sm">{item.subTitle ?? ""}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="lg:text-5xl sm:text-4xl text-3xl font-bold">
            {section03.title}
          </h2>
          <div className="grid xl:grid-cols-5 sm:grid-cols-3 grid-cols-2 my-6 mt-10 gap-y-10 gap-x-6">
            {section03.items.map((item, index) => (
              <div
                key={index}
                className="bg-white p-4 rounded-md font-semibold sm:text-base text-sm"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <p className="py-4 bg-neutral-200 rounded-lg px-4 mx-auto text-center">
            To know more about our 3PL and Inventory Management, please reach us
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

export default ThreePlInventoryManagement;
