import { damageFreeDelivery, techDrivenSolution } from "@/assets/images";

const damageFreeDeliveryText = `At Vinsum Axpress, we take pride in offering damage-free delivery solutions that ensure your cargo arrives safely and in perfect condition every time. With a strong commitment to quality, reliability, and professional handling, our logistics process is designed to minimize risks and eliminate transit-related damages. Whether it's sensitive equipment, fragile goods, or high-value shipments, our experienced team ensures each item is treated with the utmost care. Backed by industry-leading standards and advanced handling practices, Vinsum Axpress sets the benchmark for safe and secure cargo transportation across every route. <br><br>
We use robust packaging techniques, modern vehicles, and a dedicated tracking system to give our clients full confidence in every shipment. Our proactive communication, real-time updates, and customer-first approach make us the trusted choice for businesses seeking reliable, damage-free logistics. With Vinsum Axpress, you don’t just deliver—you deliver with peace of mind.
`

const techDrivenSolutionText = `
  <span class="text-xl font-semibold">Welcome to Vinsum Axpress — <i>Where Technology Drives Logistics Excellence </i></span><br><br>
  In a world where <strong>speed, precision, and adaptability</strong> define business success, <strong>Vinsum Axpress</strong> stands at the cutting edge of a logistics revolution. We are more than a cargo company—we are your <strong>technology-driven logistics partner</strong>, delivering <strong>transformative, intelligent, and future-ready freight solutions</strong> that redefine how cargo moves across India and beyond. <br><br>
  With a foundation built on <strong>innovation, automation, and real-time data intelligence</strong>, we ensure every shipment, every route, and every customer experience is <strong>optimized, secure, and transparent</strong>. Whether it's road, rail, air, or multi-modal logistics, we provide <strong>seamless connectivity</strong> backed by a robust digital infrastructure. <br><br>
  <hr class="my-4 border-t border-gray-300" /><br>
  <span class="text-2xl font-semibold">Tech-First. Future-Ready. Customer-Centric.</span><br><br>
  At the core of Vinsum Axpress lies a powerful <strong>digital ecosystem</strong>, seamlessly integrating our transportation, warehousing, customer engagement, and supply chain operations through advanced platforms:<br><br>
  <ul style="padding-left: 3rem; list-style-type: decimal;">
    <li>
      <span class="text-lg font-semibold">TMS (Transportation Management System)</span><br>
      Plan, route, and execute freight movements with real-time visibility and precision optimization. <br><br>
    </li>
    <li>
      <span class="text-lg font-semibold">WMS (Warehouse Management System)</span><br>
      Manage storage, stock movement, and distribution with intelligent tracking and automated workflows. <br><br>
    </li>
    <li>
      <span class="text-lg font-semibold">ERP (Enterprise Resource Planning)</span><br>
      A robust <strong>in-house ERP</strong> supports end-to-end operational control, including <strong>financial accounting, vendor management</strong>, and <strong>performance analytics</strong>. <br><br>
    </li>
    <li>
      <span class="text-lg font-semibold">HRMS (Human Resource Management System)</span><br>
      Enable people-first logistics with advanced workforce planning, productivity tracking, and HR automation. <br><br>
    </li>
    <li>
      <span class="text-lg font-semibold">Real-Time Shipment & Vehicle Tracking (GPS)</span><br>
      Get <strong>live updates</strong> on fleet location, transit status, and delivery progress, all visible through our <strong>customer portal</strong>. <br><br>
    </li>
    <li>
      <span class="text-lg font-semibold">Operations Control Centre (OCC) & CCTV Surveillance</span><br>
      Our warehouses are equipped with <strong>24x7 surveillance</strong> and monitored by OCC for corrective action, package safety, and cargo security. <br><br>
    </li>
    <li>
      <span class="text-lg font-semibold">Smart Notifications & Automation</span><br>
      Customers receive <strong>auto-SMS alerts</strong> on pickup and dispatch, while our <strong>online shipment tracker</strong> provides transparent milestone updates. <br><br>
    </li>
    <li>
      <span class="text-lg font-semibold">Auto MIS & Reporting</span><br>
      Clients benefit from <strong>automated MIS reports</strong>, dashboards, and access to personalized insights through <strong>My Stock</strong> and <strong>My Receivables portals</strong>. <br><br>
    </li>
    <li>
      <span class="text-lg font-semibold">ePOD (Electronic Proof of Delivery)</span><br>
      Digitally signed PODs for faster reconciliation and seamless documentation. <br><br>
    </li> 
  </ul> 
  <hr class="my-4 border-t border-gray-300" /><br>
  <span class="text-2xl font-semibold">Smart Tag & Trace: Returnable Packaging Asset Management</span><br><br>
  Our cutting-edge <strong>Smart Tag & Trace system</strong> is transforming how businesses manage <strong>Returnable Packaging Equipment (RPE)</strong>:<br><br>
  <ul style="padding-left: 3rem; list-style-type: disc;">
    <li>
      Uses <strong>globally standardized technologies</strong> like <strong>QR Codes, RFID tags, sensors</strong>, and <strong>IoT gateways</strong> <br><br>
    </li>
    <li>
      Enables <strong>real-time visibility</strong> of packaging assets across all warehouses and customer sites <br><br>
    </li>
    <li>
      Tracks <strong>stock levels, stock aging, retention time, and cycle days</strong> <br><br>
    </li>
    <li>
      Sends alerts based on pre-set thresholds for timely actions <br><br>
    </li>
    <li>
      Identifies <strong>non-moving or idle RPE</strong>, helping improve utilization rates <br><br>
    </li>
    <li>
      Minimizes RPE loss in the supply chain, driving down operational costs <br><br>
    </li>
  </ul> <br>
  This advanced asset lifecycle management ensures <strong>sustainability, cost-efficiency, and operational transparency</strong> for packaging-heavy industries such as FMCG, automotive, and manufacturing. <br><br>
  <hr class="my-4 border-t border-gray-300" /><br>
  <span class="text-2xl font-semibold">Redefining Logistics with Intelligence & Integrity</span><br><br>
  Every solution at Vinsum Axpress is engineered to make your logistics <strong>smarter, safer, and more efficient, from automated supply chain orchestration to smart packaging visibility</strong>. Our end-to-end ecosystem not only enables faster freight movement but also empowers your business with the <strong>control, data, and insights</strong> needed to thrive in a competitive landscape. <br><br>
  Let’s build the logistics of tomorrow—<strong>together</strong>. 
`

const WhyUsPopup = ({id}) => {
  return (
    <div className="p-16 justify-items-center">
      <figure className="h-full">
        <img
          src={id == 1 ? damageFreeDelivery : techDrivenSolution}
          alt="franchise"
          className="h-150 md:h-full w-full rounded-xl object-fill"
        />
      </figure>
      <div className="h-full text-base text-black mt-8">
        <p dangerouslySetInnerHTML={{ __html: id == 1 ? damageFreeDeliveryText : techDrivenSolutionText }} />
      </div>
    </div>
  );
};

export default WhyUsPopup;
