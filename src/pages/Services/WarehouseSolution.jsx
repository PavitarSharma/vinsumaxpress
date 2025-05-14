import { useEffect } from "react";
import { warehouseSolution } from "@/assets/images";
import { FaHandPointRight } from "react-icons/fa";
import MoreService from "@/components/MoreService";
import { packagingService } from "../../assets/images";

const warehouseSolutionPage = {
  title: "WAREHOUSING SOLUTION",
  description:
    `At <strong>Vinsum Axpress</strong>, we deliver cutting-edge warehousing solutions designed to optimize your supply chain, streamline distribution, and reduce your overall logistics costs. With a vast footprint spanning over <strong>2 million sq. ft. of warehousing space across India</strong>, we support <strong>53+ clients</strong> across diverse industry verticals, including automotive, FMCG, industrial, pharma, and e-commerce. <br><br>
     Our warehousing infrastructure is backed by <strong>advanced material handling technology</strong>, intelligent warehouse design, and a <strong>proprietary ERP-powered WMS</strong> that ensures full visibility, accuracy, and control from inbound to outbound. <br><br>
     Whether you require <strong>dedicated warehousing, multi-user facilities</strong>, or <strong>customized fulfillment centers</strong>, we offer <strong>flexible, modular solutions</strong> tailored to your operational requirements. <br>`,
  image: warehouseSolution,
  offers: [
    `<strong>Tailored Storage & Layout Design</strong><br>
     Warehouses customized to meet your product profile, industry standards, and SLA-driven distribution goals. Solutions range from ambient to temperature-controlled environments. <br>`,

    `<strong>Integrated Pool Distribution & Cross-Docking</strong><br>
     Rapid inventory turnover through cross-docking models reduces storage costs and expedites deliveries in shared logistics networks.`,

    `<strong>Kitting / De-Kitting Operations</strong><br>
     Value-added services include pre-assembly of components, bundling, and customized kit preparation to streamline production and retail readiness.`,

    `<strong>ERP-Based WMS Integration</strong><br>
     Real-time inventory visibility, automated order fulfillment, cycle counting, and analytics powered by our in-house Warehouse Management System.`,

    `<strong>Vendor Managed Inventory (VMI)</strong><br>
     This will enable suppliers to monitor and replenish stock levels in real time, improving inventory efficiency and reducing stock-outs or overstocking. <br>`,

    `<strong>End-to-End Transportation Support</strong><br>
     Seamless integration with our nationwide fleet network for <strong>last-mile, line-haul, and milk-run deliveries</strong>, supported by live GPS tracking and auto-generated shipment MIS.`,

    `<strong>Article Tagging, Quality Checks & Documentation</strong><br>
     Each item is scanned, tagged, and passed through rigorous quality checks to maintain traceability and product integrity across the warehouse lifecycle.`,

    `<strong>Safety, Security & Compliance</strong><br>
     24x7 CCTV surveillance, fire safety systems, secure access control, and EHS compliance ensure complete safety and protection of your goods.`
  ],
  section1: `
    <br><hr class="my-4 border-t border-gray-300" /><br>
    <span class="text-2xl font-semibold">Value-Added Services</span><br><br>
    <ul style="padding-left: 3rem; list-style-type: disc;">
      <li>
        <span class="text-lg font-semibold">Returns Management & Reverse Logistics</span><br>
        Structured processes for returns processing, refurbishing, or resale. <br><br>
      </li>
      <li>
        <span class="text-lg font-semibold">Labelling, Barcoding & Packaging Support</span><br>
        Standardized or custom solutions to enhance inventory tracking and retail readiness. <br><br>
      </li>
      <li>
        <span class="text-lg font-semibold">Performance Dashboards & Custom Reports</span><br>
        Auto-generated reports and KPIs to give you complete control and insight into warehouse operations. <br><br>
      </li>
    </ul>
  `,
  section2: `
    <hr class="my-4 border-t border-gray-300" /><br>
    <span class="text-2xl font-semibold">Why Vinsum Axpress Warehousing?</span><br><br>  
    <ul style="padding-left: 3rem; list-style-type: disc;">
      <li>
        Pan-India presence with <strong>strategically located warehouses near major consumption and production zones</strong> <br><br>
      </li>
      <li>
        Dedicated, shared, or hybrid warehousing models are available <br><br>
      </li>
      <li>
        Proven track record in managing <strong>high-throughput and complex inventory systems</strong> <br><br>
      </li>
      <li>
        Fully integrated with <strong>TMS, ERP, and real-time client portals</strong> for full visibility <br><br>
      </li>
      <li>
        Operational excellence is powered by technology, trained manpower, and strong SOPs <br><br>
      </li>
    </ul>
  `,
  footer: `
    <hr class="my-4 border-t border-gray-300" /><br>
    From inbound receipt to outbound dispatch, <strong>Vinsum Axpress is your end-to-end warehousing partner</strong>, bringing speed, scale, and intelligence to your logistics ecosystem.
  `
};

const WarehouseSolution = () => {
  useEffect(() => {
    document.title = "Warehouse Solution";
  }, []);

  const { title, description, image, offers, section1, section2, footer } = warehouseSolutionPage;

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

          <div className="md:order-2 order-1">
            <img src={packagingService} className="rounded-lg" alt="warehouse-solution" />
          </div>
        </div>       
      </section>

      <section className="section">
        <div className="container grid md:grid-cols-1 gap-6">
          <div className="md:order-1 order-2">
            <h2 className="md:text-3xl text-2xl font-bold">Our Comprehensive Warehousing Capabilities Include</h2>

            <ul className="ps-2 flex flex-col items-start my-4 gap-2">
              {offers.map((service, index) => (
                <li
                  key={index}
                  className="flex items-top justify-center gap-2"
                >
                  <FaHandPointRight size={16} className="opacity-70" />
                  <p className="flex-1 text-base" dangerouslySetInnerHTML={{ __html: service }} />
                  <br /><br />
                </li>
              ))}
            </ul>

            <p className="flex-1 text-base" dangerouslySetInnerHTML={{ __html: section1 }} />
            <p className="flex-1 text-base" dangerouslySetInnerHTML={{ __html: section2 }} />
            <p className="flex-1 text-sm" dangerouslySetInnerHTML={{ __html: footer }} />
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
