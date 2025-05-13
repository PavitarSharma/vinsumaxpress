import { useEffect } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { packagingProducts } from "@/constants";
import CylinderCards from "../../components/CylinderCard";
import { useCallback, useState } from "react";

const PackagingProducts = () => {
  const { pathname } = useLocation()
  useEffect(() => {
    document.title = "Packaging Products";
  }, []);

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <>
      <section className="pt-8">
        <div className="container flex lg:flex-row flex-col">
          <div className="flex lg:flex-col flex-wrap lg:w-[300px] lg:border rounded">
            {packagingProducts.map(({ label, href }, index) => (
              <button onClick={() => setActiveIndex(index)} className={`lg:border-b border py-3 px-4 text-sm transition duration-300 lg:w-auto w-fit ${activeIndex === index ? "bg-primary text-white" : "hover:bg-neutral-100"}`}>
                {label}
              </button>
            ))}
          </div>
          <div className="lg:px-4 flex-1">
            <CylinderCards activeIndex={ activeIndex } />
          </div>
        </div>
      </section>
    </>
  );
};

export default PackagingProducts;
