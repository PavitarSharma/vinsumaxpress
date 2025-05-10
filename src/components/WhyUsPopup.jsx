import { damageFreeDelivery, techDrivenSolution } from "@/assets/images";

const damageFreeDeliveryText = `At Vinsum Axpress, we take pride in offering damage-free delivery solutions that ensure your cargo arrives safely and in perfect condition every time. With a strong commitment to quality, reliability, and professional handling, our logistics process is designed to minimize risks and eliminate transit-related damages. Whether it's sensitive equipment, fragile goods, or high-value shipments, our experienced team ensures each item is treated with the utmost care. Backed by industry-leading standards and advanced handling practices, Vinsum Axpress sets the benchmark for safe and secure cargo transportation across every route. <br><br>
We use robust packaging techniques, modern vehicles, and a dedicated tracking system to give our clients full confidence in every shipment. Our proactive communication, real-time updates, and customer-first approach make us the trusted choice for businesses seeking reliable, damage-free logistics. With Vinsum Axpress, you don’t just deliver—you deliver with peace of mind.
`

const techDrivenSolutionText = `
  <span class="text-xl font-semibold">Welcome to Vinsum Axpress — Where Technology Drives Logistics Excellence</span><br><br>
  In a world where speed, precision, and adaptability define success, <strong>Vinsum Axpress</strong> stands at the forefront of a logistics revolution. We are more than a cargo company—we are your <strong>technology partner in motion</strong>, delivering transformative, data-driven freight solutions that redefine how cargo moves across the country and beyond. <br><br>
  At the heart of our operations is a relentless commitment to <strong>innovation</strong>. Our systems are built to think, learn, and evolve—ensuring every shipment, every route, and every customer interaction is handled with unmatched intelligence and agility. <br><br>
  <hr class="my-4 border-t border-gray-300" /><br>
  <span class="text-2xl font-semibold">Tech-First. Future-Ready. Customer-Centric.</span><br><br>
  Through a robust suite of integrated platforms, we create a seamless digital ecosystem that powers your logistics journey:<br><br>
  <ul style="padding-left: 3rem; list-style-type: decimal;">
    <li>
      <span class="text-base font-semibold">TMS (Transportation Management System)</span><br>
      Optimize routing, scheduling, and freight movement with precision and control. <br><br>
    </li>
    <li>
      <span class="text-base font-semibold">WMS (Warehouse Management System)</span><br>
      Streamline storage, inventory, and distribution with real-time visibility. <br><br>
    </li>
    <li>
      <span class="text-base font-semibold">ERP (Enterprise Resource Planning)</span><br>
      Drive operational efficiency and decision-making through centralized business intelligence. <br><br>
    </li>
    <li>
      <span class="text-base font-semibold">HRMS (Human Resource Management System)</span><br>
      Empower workforce productivity with smart people management. <br><br>
    </li>
    <li>
      <span class="text-base font-semibold">Real-Time Shipment Tracking</span><br>
      Get live updates and proactive notifications across every mile. <br><br>
    </li>
    <li>
      <span class="text-base font-semibold">Smart Automation & Analytics</span><br>
      Uncover insights that drive performance, reduce costs, and enable predictive logistics. <br><br>
    </li>
  </ul> <br><br>  
  Our digital infrastructure is not just a support system—it’s <strong>the engine of our excellence</strong>, enabling us to eliminate delays, optimize costs, and increase delivery accuracy.
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
