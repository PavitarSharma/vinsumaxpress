import { useEffect } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { packagingProducts } from "@/constants";

const PackagingProducts = () => {
  const { pathname } = useLocation()
  useEffect(() => {
    document.title = "Packaging Products";
  }, []);

  return (
    <>
      <section className="pt-8">
        <div className="container flex lg:flex-row flex-col">
          <div className="flex lg:flex-col flex-wrap lg:w-[300px] lg:border rounded">
            {packagingProducts.map(({ label, href }, index) => (
              <Link to={href} key={index} className={`lg:border-b border py-3 px-4 text-sm transition duration-300 lg:w-auto w-fit ${pathname === href ? "bg-primary text-white" : "hover:bg-neutral-100"}`}>
                {label}
              </Link>
            ))}
          </div>
          <div className="p-4 flex-1">
            <Outlet />
          </div>
        </div>
      </section>
    </>
  );
};

export default PackagingProducts;
