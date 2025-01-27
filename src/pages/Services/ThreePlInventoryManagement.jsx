import { useEffect } from "react";
import { ROUTES } from "@/lib/routes";
import {
  binPutWay,
  binTransfer,
  inventoryAdjustment,
  inventoryCount,
  itemReceipt,
  lookup,
  purchaseOrder,
  shipment,
  threePl,
  transferOrder,
} from "@/assets/images";
import MoreService from "@/components/MoreService";

const threePlManagement = {
  title: "3PL & INVENTORY MANAGEMENT",
  section01: {
    title: "3PL Inventory Management",
    description:
      "We are Third-party logistics providers typically specialize in integrated operations of warehousing and transportation services that can be scaled and customized to customer's needs, based on market conditions to meet the demands and delivery service requirements for their products. Our Services often extend beyond logistics to include value-added services related to the production or procurement of goods, such as services that integrate parts of the supply chain.",
    image: threePl,
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
      "Karban",
      "Bounded Warehouse",
      "Order Processing",
      "Escorts services",
    ],
  },
};

const ThreePlInventoryManagement = () => {
  useEffect(() => {
    document.title = ROUTES.THREEPL_INVENTORY_MANAGEMENT;
  }, []);

  const { title, section01, section02, section03 } = threePlManagement;

  return (
    <>
      <div className="container py-8">
        <h1 className="text-primary sm:text-2xl text-xl font-bold">{title}</h1>
      </div>
      <section className="section">
        <div className="container grid md:grid-cols-2 gap-6">
          <div className="md:order-1 order-2">
            <h2 className="lg:text-5xl sm:text-4xl text-3xl font-bold">
              {section01.title}
            </h2>
            <p className="my-4">{section01.description}</p>
          </div>

          <div className="md:order-2 order-1">
            <img src={section01.image} alt="4pl-inplant-logistics01" />
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
          <p className="py-4 bg-neutral-200 rounded-lg px-4 mx-auto">
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
