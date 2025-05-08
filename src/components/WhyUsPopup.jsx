import { damageFreeDelivery, techDrivenSolution } from "@/assets/images";

const damageFreeDeliveryText = `At Vinsum Axpress, we take pride in offering damage-free delivery solutions that ensure your cargo arrives safely and in perfect condition every time. With a strong commitment to quality, reliability, and professional handling, our logistics process is designed to minimize risks and eliminate transit-related damages. Whether it's sensitive equipment, fragile goods, or high-value shipments, our experienced team ensures each item is treated with the utmost care. Backed by industry-leading standards and advanced handling practices, Vinsum Axpress sets the benchmark for safe and secure cargo transportation across every route. <br><br>
We use robust packaging techniques, modern vehicles, and a dedicated tracking system to give our clients full confidence in every shipment. Our proactive communication, real-time updates, and customer-first approach make us the trusted choice for businesses seeking reliable, damage-free logistics. With Vinsum Axpress, you don’t just deliver—you deliver with peace of mind.
`

const techDrivenSolutionText = `At Vinsum Axpress, we believe in harnessing the power of innovation through tech-driven logistics solutions that redefine the way cargo moves. From real-time shipment tracking to intelligent route optimization and automated operations, our technology-first approach ensures faster, smarter, and more efficient delivery outcomes. We continuously invest in digital tools and platforms that enhance visibility, reduce operational delays, and improve overall customer experience. By turning logistical challenges into growth opportunities, Vinsum Axpress empowers businesses with reliable, connected, and future-ready freight solutions—keeping you ahead in an ever-evolving supply chain landscape. <br><br>
Our integrated systems provide end-to-end transparency, allowing clients to monitor their shipments with accuracy and confidence. Through data analytics, we uncover insights that drive performance, reduce costs, and increase delivery precision. Whether you're scaling operations or managing time-sensitive cargo, our tech-enabled infrastructure adapts to your needs. With Vinsum Axpress, innovation isn’t just a buzzword—it’s the backbone of everything we do, ensuring that your cargo journeys are not only efficient but also smarter and future-focused.
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
