import { useEffect } from "react";
import { ROUTES } from "@/lib/routes";
const WarehouseSolution = () => {
  useEffect(() => {
    document.title = ROUTES.WAREHOUSE_SOLUTION;
  }, []);

  return (
    <>
      <section>
        <div className="container">
          <div>Warehouse Solution</div>
        </div>
      </section>
    </>
  );
};

export default WarehouseSolution;
